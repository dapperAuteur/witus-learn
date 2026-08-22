import type { AuthoredCourse } from "./authored-course";

// REPORT-00 · What a Beat Is (plans/68).
//
// The start-here course of the Reporter track. plans/68's finding is that three quarters of
// "journalism" is already in this catalog: news-storytelling teaches the piece, civic-documentation
// teaches the meeting, documentary teaches the project, how-to-research teaches sourcing, and
// how-to-read-a-number teaches provenance. What none of them teaches is the JOB: a territory held
// over time, with recurring output, on deadline. civic-documentation lesson 16 is literally called
// "Where documentation ends and reporting begins," and nothing sat on the other side of it. This
// course is the other side.
//
// Register: professional. The reader already writes, and may already have a job. There is no
// "what is a newspaper" lesson here.
//
// DISCLOSURE (plans/68 section 7a, BAM's decision, not optional): lesson 1 carries the author's
// stake in the sector this track teaches people to enter. A journalism track that omitted its own
// author's relationships would fail the standard it spends nine courses teaching.
//
// Facts used here are limited to ones that can be checked: the SPJ Code of Ethics, Cohen v. Cowles
// Media Co. (1991) for what a promise to a source is worth in court, the RCFP Open Government Guide
// for the fifty-state map, and the 2025 Indiana Girl Report for the listening-session example, read
// from the PDF itself rather than from a description of it.
export const REPORTER_WHAT_A_BEAT_IS_COURSE: AuthoredCourse = {
  title: "Reporter 00: What a Beat Is",
  description:
    "A beat is a territory you hold, not a story you are assigned. How to map one, how to listen in a community before you need anything from it, how to keep a source who has nothing for you today, and how to notice an emerging issue while it is still boring. The start of the Reporter track, written for people who already report.",
  lessons: [
    // ── Section 1 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "beat-not-story",
      title: "1 · A territory, not a story",
      section: "Section 1 · The beat as territory",
      body: `A story has a beginning and an end. A beat does not. It is a defined piece of the world that you are responsible for knowing better than anyone else who does not work inside it, and the responsibility does not lapse when you file.

**The practical difference.** An assignment tells you what to produce. A beat tells you what to know. On an assignment you find out what is true about one situation, write it, and move on. On a beat you accumulate: the last three budgets, who left and why, which vendor keeps winning, which number the agency stopped publishing in 2023. That accumulation is the product, and the individual stories are withdrawals from it.

**What the accumulation buys you, in order of value.** First, the ability to say *this is new*. A reporter without history cannot tell a change from a constant, so every press release looks equally like news. Second, speed. On deadline, the fifteen minutes you do not spend working out who the deputy director is are the fifteen minutes you spend calling her. Third, sources who take your call, because you have been around long enough to be a known quantity rather than a stranger with a question.

**What it costs.** Time spent on things that never become stories. Meetings that produce nothing. Reading a five-year capital plan for one line. If you are measuring your week purely in published pieces, a beat looks like waste right up until the week it is the only reason you have the story and nobody else does.

**Parachute coverage is the alternative, and it is not nothing.** A reporter dropped into an unfamiliar subject for one big piece can do excellent work. What they cannot do is notice. Noticing requires a baseline, and a baseline is exactly what a beat is.

**A disclosure, on page one, because this track teaches disclosure.** The author does documentation work for the organization that Free Press Indiana sits under. Free Press Indiana has not reviewed, endorsed, or sponsored this course. Its job posting and the 2025 Indiana Girl Report are cited here as public documents, nothing more. That line exists because the Society of Professional Journalists asks journalists to avoid conflicts real or perceived, and to disclose the unavoidable ones (Society of Professional Journalists, 2014). A journalism course that quietly skipped its own would be teaching one thing and doing another.

:::reveal What can a reporter with a beat do that a reporter parachuted into the same subject cannot? ||| Notice. Telling a change from a constant requires a baseline, and the baseline is the accumulated history a beat produces. The parachuted reporter can still report the situation in front of them well.

:::reveal Why does a beat look like waste when you measure a week in published pieces? ||| Because most of the work is accumulation: meetings that produce nothing, budgets read for one line, sources kept warm. It pays off in the week you have a story nobody else can see, which is not the week you did the reading.

## Vocabulary
- **Beat**: a defined territory a reporter is responsible for knowing over time, rather than a single assignment with an end.
- **Accumulation**: the running history of a beat, budgets, departures, vendors, and dropped indicators, which is what makes a change visible as a change.
- **Parachute coverage**: reporting produced by someone dropped into an unfamiliar subject for one piece, capable of quality but not of noticing.
- **Disclosure**: naming a relationship or stake that a reader could reasonably want to weigh, before they ask.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "map-the-beat",
      title: "2 · Mapping a beat: institutions, documents, people, calendar",
      section: "Section 1 · The beat as territory",
      body: `Before a beat can be held it has to be drawn. Four inventories, each of which takes an afternoon and then gets maintained forever.

**Institutions.** Every body with formal authority over your subject, at every level. For a schools beat that is the district board, the superintendent's office, the state education agency, the state board, the legislature's education committees, the charter authorizer, the teachers' union, and the county council that touches the levy. Write down who has authority to DO the thing, not who talks about it most. The two are different, and the second is where press releases come from.

**Documents.** What each of those bodies produces on a schedule, and where it lands. Agendas and minutes. Budgets, both proposed and adopted. Audits. Contracts and the bid documents behind them. Inspection reports. Federal and state data collections. Court dockets. Campaign finance filings. Nonprofit tax returns. The point of the inventory is not to read all of it; it is to know what exists, so that when a question arises you know which document would answer it.

**People.** Officials, staff, and the three groups reporters routinely miss: people who used to work there, people the institution acts upon, and the technical staff who compile the numbers. Former employees can speak. Compilers know which figures are soft.

**Calendar.** The rhythm your beat runs on. Budget season. Enrollment counts. Testing windows. Contract renewals. Fiscal year end. Election filing deadlines. Report releases. A beat calendar turns you from reactive to early, because you can start reporting in the four weeks before a document exists rather than the four hours after.

**Where the calendar comes from, legally.** Public bodies are generally required to give advance public notice of their meetings, and the notice requirement is where a beat calendar starts. The specific rule is state law, and it varies: the Reporters Committee for Freedom of the Press maintains a fifty-state guide, and finding your own state's chapter is the first homework of any beat that touches government (Reporters Committee for Freedom of the Press, n.d.).

:::reveal Why does the institution inventory record who has authority to act rather than who speaks most? ||| Because the loudest body is often not the deciding one, and building a beat around the talkers means covering announcements instead of decisions. Press releases come from the second group.

:::reveal Name the three groups of people reporters routinely leave off a beat map, and what each one gives you. ||| Former employees, who are free to speak. People the institution acts upon, who know what the policy does. And the technical staff who compile the numbers, who know which figures are soft.

## Vocabulary
- **Beat map**: the four maintained inventories of a beat, institutions, documents, people, and calendar.
- **Document inventory**: a list of what each body on the beat produces on a schedule and where it lands, kept so you know what would answer a question.
- **Beat calendar**: the recurring dates a beat runs on, which converts a reporter from reactive to early.
- **Compiler**: the staff member who assembles a published figure, and therefore knows its soft spots.

## Sources
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "beat-memo",
      title: "3 · The beat memo, and what it commits you to",
      section: "Section 1 · The beat as territory",
      body: `A beat memo is one document, two pages, written for yourself and shared with an editor. It is the difference between having a beat and having a job title.

**What goes in it.** The scope, in one sentence, including what is deliberately out. The three or four questions you intend to be able to answer in a year that nobody can answer now. The institutions, documents, people, and calendar from lesson 2, in list form. The communities you will be accountable to, named specifically rather than as "the community." And the measurements: what would tell you, twelve months from now, that the beat was covered rather than merely attended.

**Why the out-of-scope sentence matters most.** Every beat expands under pressure, because everything touches everything and editors have holes to fill. A beat with no stated boundary becomes general assignment with a nameplate. Writing "this beat does not cover X, and here is who does" is not a refusal to work; it is the only way the accumulation in lesson 1 ever happens.

**The questions are the real content.** Not topics, questions. "Does the district's transportation contract cost more per student than neighboring districts, and if so, why?" is a beat question. "Transportation" is not. A question implies a document, a denominator, and a person who has to answer. Three or four of them, chosen because they are consequential and answerable, will structure a year of work and produce enterprise stories as a byproduct.

**Accountability, named.** A women and girls beat that never leaves the state capital is a beat about institutions that talk about women and girls. The Free Press Indiana posting that prompted this track asks for someone relentless about building relationships built on equal trust, and describes travel across the state as part of the job rather than an expense line. Whatever your beat, write down which specific communities you owe coverage to, because a name in a memo is checkable and a good intention is not.

**Revise it twice a year.** A beat memo written in January and never reopened describes a beat that no longer exists. The revision is also the only honest moment to admit that one of your three questions turned out to be unanswerable, which is information rather than failure.

:::reveal Why is the out-of-scope sentence the most load bearing line in a beat memo? ||| Because a beat with no stated boundary expands under deadline pressure into general assignment with a nameplate, and the accumulation that makes a beat valuable never happens.

:::reveal What makes "does the district's transportation contract cost more per student than neighboring districts" a beat question while "transportation" is not? ||| A question implies a specific document, a denominator, and a person who has to answer it. A topic implies none of those, so it cannot structure a year of work.

## Vocabulary
- **Beat memo**: a two-page document stating a beat's scope, its year questions, its inventories, its named communities, and how coverage will be measured.
- **Out-of-scope sentence**: the explicit statement of what a beat does not cover and who does cover it.
- **Beat question**: a consequential, answerable question that implies a document, a denominator, and a person, as opposed to a topic.
- **Named accountability**: writing down which specific communities the beat owes coverage to, so the commitment is checkable.

## Sources
- Free Press Indiana. (n.d.). *Women and girls reporter* [Job posting]. https://www.freepressindiana.org/jobs/women-girls-reporter
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-beat-as-territory",
      title: "4 · Knowledge check: the beat as territory",
      section: "Section 1 · The beat as territory",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does a beat tell a reporter, as opposed to what an assignment tells them?",
            options: [
              "What to know",
              "Which editor holds the budget line for the piece and when it is due to the desk",
              "How many pieces the newsroom expects to publish from the subject each month",
              "Which competing outlets are already covering the same institutions this quarter",
            ],
            correctIndex: 0,
            explanation:
              "An assignment tells you what to produce and ends when you file. A beat tells you what to know, and the responsibility does not lapse.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "In this course, what is the actual product of a beat?",
            options: [
              "The accumulation",
              "The count of published pieces attributable to the subject over a fiscal year",
              "The relationship with the agency's communications office and its release schedule",
              "The single enterprise investigation the beat is expected to yield annually",
            ],
            correctIndex: 0,
            explanation:
              "Budgets, departures, vendors, and dropped indicators pile up into a running history. Individual stories are withdrawals from that accumulation.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Why can a reporter without accumulated history not tell news from routine?",
            options: [
              "No baseline",
              "Because newsroom archives are usually paywalled and searching them costs time on deadline",
              "Because agencies deliberately time announcements for when experienced reporters are away",
              "Because press releases are written to be indistinguishable from independently reported news",
            ],
            correctIndex: 0,
            explanation:
              "Telling a change from a constant requires knowing the constant. Without a baseline every press release looks equally like news.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What is the second value the lesson gives for accumulated beat knowledge?",
            options: [
              "Speed",
              "Access to embargoed documents ahead of the general press distribution list",
              "A reduced need to seek comment, because the pattern already establishes the point",
              "The ability to publish without an editor reviewing the piece before it goes out",
            ],
            correctIndex: 0,
            explanation:
              "The fifteen minutes you do not spend working out who the deputy director is are the fifteen minutes you spend calling her.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What does the lesson name as the third value of accumulation?",
            options: [
              "Sources who take your call",
              "A standing invitation to the agency's quarterly background briefings for regular press",
              "The right to attend closed sessions that are otherwise exempt from open meetings law",
              "Editorial authority to set the newsroom's coverage priorities for the subject area",
            ],
            correctIndex: 0,
            explanation:
              "Time on a beat makes you a known quantity rather than a stranger with a question, which is what gets a call returned.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What can a parachuted reporter NOT do that a beat reporter can?",
            options: [
              "Notice",
              "Interview the officials at the center of the situation they were sent to cover",
              "Produce work of professional quality about an unfamiliar subject on a deadline",
              "Read the primary documents that govern the institution they are writing about",
            ],
            correctIndex: 0,
            explanation:
              "The lesson is explicit that parachute work can be excellent. Noticing is what requires a baseline, and a baseline is what a beat is.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Why does the disclosure about Free Press Indiana appear in the first lesson?",
            options: [
              "The track teaches disclosure",
              "Because Free Press Indiana reviewed the course outline before it was written and asked for it",
              "Because the organization sponsors the track and the sponsorship must be labeled as advertising",
              "Because the job posting is reproduced in full later in the course under a licensing agreement",
            ],
            correctIndex: 0,
            explanation:
              "The SPJ code asks journalists to avoid conflicts real or perceived and disclose the unavoidable ones. A course that skipped its own would teach one thing and do another.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What does the disclosure say Free Press Indiana has done regarding this course?",
            options: [
              "Nothing",
              "Reviewed the curriculum and confirmed that it matches the newsroom's own training standards",
              "Agreed to consider graduates of the track for future openings on its reporting staff",
              "Licensed its job posting to the course for use as an instructional document",
            ],
            correctIndex: 0,
            explanation:
              "The line states plainly that it has not reviewed, endorsed, or sponsored the course. Its posting is cited as a public document, nothing more.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "How does the lesson describe the cost side of holding a beat?",
            options: [
              "Time on things that never become stories",
              "Travel and lodging expenses that most newsrooms will no longer reimburse in advance",
              "The legal exposure created by maintaining files on named individuals over several years",
              "Reduced byline count because editors reassign beat reporters during breaking news",
            ],
            correctIndex: 0,
            explanation:
              "Meetings that produce nothing, and a five-year capital plan read for one line. It looks like waste until the week nobody else has the story.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "A beat has no what, unlike a story?",
            options: [
              "An end",
              "A named editor responsible for approving what does and does not get published",
              "A requirement to seek comment from the subject before the piece is filed",
              "Any obligation to disclose the reporter's relationships to the institutions covered",
            ],
            correctIndex: 0,
            explanation:
              "A story has a beginning and an end. A beat is a standing responsibility that does not lapse when you file.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Which example does the lesson give of an accumulation item worth tracking?",
            options: [
              "A number the agency stopped publishing",
              "The number of unique visitors each published piece attracted in its first week online",
              "The share of the newsroom's advertising revenue attributable to the subject area",
              "The reading level of the agency's public communications as scored by a style tool",
            ],
            correctIndex: 0,
            explanation:
              "An indicator that quietly disappears is only visible to someone who was tracking it before it went, which is the whole argument for accumulation.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What is a beat, in one phrase?",
            options: [
              "A territory you hold",
              "A rotating assignment desk shared among reporters according to newsroom staffing needs",
              "A contractual specialization that determines a reporter's pay grade and title",
              "A subject area assigned by an editor for the duration of one enterprise project",
            ],
            correctIndex: 0,
            explanation:
              "A defined piece of the world you are responsible for knowing better than anyone who does not work inside it.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Which four inventories make up a beat map?",
            options: [
              "Institutions, documents, people, calendar",
              "Competitors, advertisers, subscribers, and the newsroom's own analytics dashboards",
              "Statutes, regulations, court rulings, and the attorney general's advisory opinions",
              "Sources, quotes, photographs, and the archived audio from every interview conducted",
            ],
            correctIndex: 0,
            explanation:
              "Each takes an afternoon to build and is then maintained forever. Together they draw the territory before you try to hold it.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "In the institution inventory, whom do you write down?",
            options: [
              "Whoever has authority to act",
              "Whichever body issues the most press releases about the subject in a typical month",
              "The officials most willing to be quoted by name when a reporter calls on deadline",
              "The agencies whose public information officers respond fastest to routine questions",
            ],
            correctIndex: 0,
            explanation:
              "The loudest body is often not the deciding one. Building the map around talkers means covering announcements instead of decisions.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "What is the point of the document inventory?",
            options: [
              "Knowing what exists",
              "Reading every scheduled publication each body produces before the reporting year begins",
              "Building a searchable archive of every record the beat's institutions have ever released",
              "Establishing which documents the newsroom's lawyers have cleared for publication",
            ],
            correctIndex: 0,
            explanation:
              "Not to read all of it. To know which document would answer a question, so the question can be answered when it arises.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Which three groups of people does the lesson say reporters routinely miss?",
            options: [
              "Former employees, affected people, compilers",
              "Elected officials, agency directors, and the communications staff who handle their media",
              "Union leaders, contractors, and the lobbyists registered to work the subject area",
              "Academic experts, think tank analysts, and national correspondents covering the topic",
            ],
            correctIndex: 0,
            explanation:
              "Former employees can speak freely, people the institution acts upon know what the policy does, and compilers know which figures are soft.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Why does the lesson single out the staff who compile published numbers?",
            options: [
              "They know which figures are soft",
              "They control the release schedule and can be persuaded to publish a data set early",
              "They are legally required to answer questions from the press about methodology",
              "They are usually excluded from the confidentiality agreements senior staff sign",
            ],
            correctIndex: 0,
            explanation:
              "Whoever assembles a figure knows its estimates, its suppressions, and its definitional edges. That knowledge does not appear in the published table.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "What does a beat calendar convert a reporter from, and to?",
            options: [
              "Reactive to early",
              "Generalist to specialist, by restricting the range of subjects an editor may assign",
              "Freelance to staff, by demonstrating a predictable volume of publishable work",
              "Print to digital, by aligning output with the times readers are most active online",
            ],
            correctIndex: 0,
            explanation:
              "Knowing when a document will exist lets you report in the four weeks before it lands rather than the four hours after.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Which of these is named as an entry on a beat calendar?",
            options: [
              "Contract renewals",
              "The publication dates of competing outlets' weekly newsletters on the same subject",
              "Quarterly performance reviews conducted internally by the reporter's own newsroom",
              "The rotation schedule for which reporter is on call for overnight breaking news",
            ],
            correctIndex: 0,
            explanation:
              "Along with budget season, enrollment counts, testing windows, fiscal year end, filing deadlines, and report releases.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Where does the lesson say a beat calendar legally starts?",
            options: [
              "Meeting notice requirements",
              "The state administrative code's schedule for publishing proposed rules in a register",
              "The federal fiscal calendar, which sets when agencies must submit budget requests",
              "A newsroom's own editorial calendar, negotiated with the desk at the start of a quarter",
            ],
            correctIndex: 0,
            explanation:
              "Public bodies generally must give advance public notice of meetings. The specific rule is state law and it varies.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Which resource does the lesson point to for the fifty-state open government picture?",
            options: [
              "The RCFP Open Government Guide",
              "The Society of Professional Journalists' annual survey of state transparency rankings",
              "The National Conference of State Legislatures' database of public meeting statutes",
              "The federal Office of Government Information Services' state compliance reports",
            ],
            correctIndex: 0,
            explanation:
              "The Reporters Committee for Freedom of the Press maintains a state-by-state guide, and finding your own state's chapter is the first homework.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Which documents does the beat map's document inventory include?",
            options: [
              "Bid documents behind contracts",
              "Internal newsroom style guides governing how the subject area should be described",
              "Draft stories filed by other reporters covering adjacent subjects at the same outlet",
              "Personal notes and recordings the reporter made at meetings during the prior year",
            ],
            correctIndex: 0,
            explanation:
              "Agendas, minutes, budgets, audits, contracts and their bid documents, inspections, data collections, dockets, filings, and tax returns.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "How long does the lesson say building each of the four inventories takes?",
            options: [
              "An afternoon",
              "A full reporting quarter, because each one depends on records requests being answered",
              "The first year on the beat, since the inventories cannot be built before sources trust you",
              "Two weeks of desk research per inventory, following a newsroom onboarding checklist",
            ],
            correctIndex: 0,
            explanation:
              "The build is short. The maintenance is permanent, which is the part that separates a held beat from a job title.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "How long is a beat memo, and who is it written for?",
            options: [
              "Two pages, for yourself and an editor",
              "A ten-page planning document submitted annually to the newsroom's leadership team",
              "A one-line entry in the newsroom's content management system alongside the beat name",
              "A public-facing page on the outlet's website describing what the beat will cover",
            ],
            correctIndex: 0,
            explanation:
              "Short enough to actually revise, and shared so that the scope is a shared commitment rather than a private intention.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "Which line does the lesson call the most load bearing in a beat memo?",
            options: [
              "What is out of scope",
              "The list of institutions with formal authority over the subject at every level of government",
              "The measurement plan describing how coverage will be assessed at the end of the year",
              "The named communities the reporter commits to being accountable to over the year",
            ],
            correctIndex: 0,
            explanation:
              "A beat with no stated boundary expands under deadline pressure into general assignment with a nameplate, and the accumulation never happens.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "How many year questions does the lesson recommend a beat memo carry?",
            options: [
              "Three or four",
              "One for each institution on the beat map, so that no body goes uncovered in a year",
              "Between ten and fifteen, so the reporter always has a fallback when a line goes cold",
              "As many as the editor assigns during the annual planning cycle for the desk",
            ],
            correctIndex: 0,
            explanation:
              "Chosen because they are consequential and answerable. Three or four will structure a year and produce enterprise stories as a byproduct.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What separates a beat question from a topic?",
            options: [
              "It implies a document, a denominator, and a person",
              "It has been approved in advance by an editor with authority over the desk's budget",
              "It can be answered inside a single news cycle without any records request being filed",
              "It names an institution rather than a community, which keeps the reporting checkable",
            ],
            correctIndex: 0,
            explanation:
              "Transportation is a topic. Whether the district's transportation contract costs more per student than neighboring districts is a question, and it points at records, a denominator, and someone who has to answer.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What is wrong with writing that a beat is accountable to the community?",
            options: [
              "It is not a name",
              "It exceeds the reporter's authority, since accountability belongs to the newsroom as a whole",
              "It creates a legal obligation the outlet's counsel would have to review before publication",
              "It duplicates the out-of-scope sentence, which already establishes the beat's boundaries",
            ],
            correctIndex: 0,
            explanation:
              "A name in a memo is checkable twelve months later. A good intention is not, which is why the communities get written down specifically.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "How often does the lesson say a beat memo should be revised?",
            options: [
              "Twice a year",
              "Once at the start of each calendar year, matching the newsroom's budget planning cycle",
              "Only when the editor assigns a new subject area or the beat's boundaries formally change",
              "Every month, alongside the reporter's regular output review with the desk",
            ],
            correctIndex: 0,
            explanation:
              "A memo written in January and never reopened describes a beat that no longer exists. The revision is also where an unanswerable question gets admitted.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What does the lesson call it when a year question turns out to be unanswerable?",
            options: [
              "Information",
              "A planning failure that should be corrected before the next memo is shared with an editor",
              "A sign that the beat map's document inventory was built from the wrong institutions",
              "Grounds for narrowing the beat's scope so the remaining questions can still be met",
            ],
            correctIndex: 0,
            explanation:
              "Discovering that a question cannot be answered is a finding about the subject. The revision is the honest moment to record it rather than quietly drop it.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What does the lesson say a beat becomes when it has no stated boundary?",
            options: [
              "General assignment with a nameplate",
              "An investigative unit, because unbounded reporting naturally drifts toward enterprise work",
              "A specialty desk that competes with other desks for the same institutional sources",
              "A rotating assignment shared with whichever reporter has capacity that week",
            ],
            correctIndex: 0,
            explanation:
              "Everything touches everything and editors have holes to fill, so an unbounded beat fills them. Stating the boundary is what protects the accumulation.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What does the beat memo's measurement section ask?",
            options: [
              "Whether the beat was covered or merely attended",
              "How many pieces were published and what audience each of them reached online",
              "Whether the reporter met the deadlines the desk set at the start of the year",
              "How the beat's output compared with competing outlets covering the same institutions",
            ],
            correctIndex: 0,
            explanation:
              "Attendance is showing up at the meetings. Coverage is answering the year questions, which is why the measurement is written down in advance.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What does the Free Press Indiana posting ask for, as the beat memo lesson cites it?",
            options: [
              "Relationships built on equal trust",
              "Five publishable enterprise investigations per year from communities outside the metros",
              "Fluency in statistical software sufficient to reanalyze state administrative data sets",
              "Prior experience covering state government from inside the capitol press corps",
            ],
            correctIndex: 0,
            explanation:
              "The posting also describes travel across the state as part of the job rather than an expense line, which is what makes the accountability commitment concrete.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What does a women and girls beat that never leaves the state capital actually cover?",
            options: [
              "Institutions that talk about women and girls",
              "The legislative session, which is where most policy affecting the subject is decided",
              "Statewide data, which is compiled centrally and therefore reported centrally",
              "The advocacy sector, which is the only source of consistent comment on the subject",
            ],
            correctIndex: 0,
            explanation:
              "The distinction is between covering a subject and covering the bodies that discuss it, which is why the memo names communities rather than agencies.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What does the beat memo turn a job title into?",
            options: [
              "A beat",
              "A promotion, by documenting the reporter's specialization for a future performance review",
              "A contract, by committing the newsroom to fund travel and records fees for the year",
              "A public commitment, by publishing the coverage plan where readers can hold it to account",
            ],
            correctIndex: 0,
            explanation:
              "The memo is the difference between having a beat and having a nameplate that says you do.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "Which body does the lesson list as touching a schools beat through the levy?",
            options: [
              "The county council",
              "The federal Department of Education, which conditions formula funding on local compliance",
              "The state attorney general, who reviews district contracts above a statutory threshold",
              "The regional accreditation body, which sets the standards districts must meet to operate",
            ],
            correctIndex: 0,
            explanation:
              "The point of the example is how far an institution inventory reaches: board, superintendent, state agency, state board, legislative committees, authorizer, union, and the council on the money side.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Why does the SPJ code figure in the first lesson of this course?",
            options: [
              "It asks journalists to disclose unavoidable conflicts",
              "It requires every published piece to carry a list of the reporter's paid outside work",
              "It defines the boundary between a beat reporter's duties and an editor's duties",
              "It sets the minimum number of independent sources required before publication",
            ],
            correctIndex: 0,
            explanation:
              "Avoid conflicts real or perceived, and disclose the ones that cannot be avoided. That is the standard the course applies to itself on page one.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Which of these does the lesson describe as a withdrawal rather than the product?",
            options: [
              "An individual story",
              "The maintained document inventory, which is rebuilt from scratch each reporting year",
              "The beat calendar, which is consumed by the newsroom's planning desk rather than the reporter",
              "The out-of-scope sentence, which is spent whenever an editor needs a hole filled",
            ],
            correctIndex: 0,
            explanation:
              "The accumulation is the product. Each story draws on it, which is why a beat measured only in published pieces looks unproductive.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What is the first homework of any beat that touches government?",
            options: [
              "Find your own state's chapter",
              "Introduce yourself to every public information officer named in the agency directory",
              "File a records request with each institution on the map to test its response time",
              "Attend one meeting of every public body on the institution inventory within the first month",
            ],
            correctIndex: 0,
            explanation:
              "Notice and access rules are state law and they vary, so the RCFP guide's chapter for your state is where a beat calendar's legal footing starts.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "In the beat memo, what does the scope sentence have to include besides the subject?",
            options: [
              "What is deliberately out",
              "The number of stories the reporter commits to filing from the subject each month",
              "The names of the editors who will review each piece before it reaches publication",
              "The travel budget required to reach the communities the beat is accountable to",
            ],
            correctIndex: 0,
            explanation:
              "And ideally who does cover it instead, so the boundary is a redirection rather than a refusal.",
            sourceLessonSlug: "beat-memo",
          },
        ],
      },
    },
    // ── Section 2 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "listening-first",
      title: "5 · Listening before you need anything",
      section: "Section 2 · Community listening",
      body: `Community listening is reporting you do when you have no story, no deadline, and nothing to ask for. It is the part of a beat that most resembles doing nothing and most reliably changes what you cover.

**What it actually is.** Going where people on your beat already gather and staying long enough to hear what they talk about when a reporter is not steering the conversation. A parent group. A shift change. A church basement. A resource fair. A county extension office. You are not collecting quotes. You are collecting the agenda: what people bring up unprompted, in what order, with what heat.

**Why it is not the same as interviewing.** An interview is a transaction with a subject you selected because they fit a story you already have. Listening runs the other direction: the story comes out of what you hear. The two produce different work, and a newsroom that only does the first will keep confirming the stories it already thought of.

**A worked example of the method at scale.** The 2025 Indiana Girl Report, a statewide profile of girls' well-being, was built partly on 91 listening sessions with girls plus feedback from 130 adults across the state, run alongside statewide administrative data (Indiana Youth Institute, 2025, p. 7). Notice what that structure buys and what it does not. It surfaces themes that no state data set contains, in this case social connection, which the report says was the new question it went in with. It is not a probability sample, so it cannot tell you what share of Indiana girls hold a view. A reporter who reads it as a survey has misread it, and a reporter who dismisses it because it is not a survey has thrown away the only account of what girls actually raised.

**The professional discipline.** Take notes in your own file, not a notebook you wave around. Say who you are and where you work, every time, without being asked. If someone tells you something you want to use, that is a separate conversation you start there and then, not an assumption you make later. Nothing heard in a listening setting is on the record by default, and treating it as though it were will end your access to that room permanently.

**How much.** A working number is one listening block a week that is not attached to any story, protected the way you would protect a court date. It is the first thing that gets cut when the week goes badly, and the reason beats go stale.

:::reveal What does community listening collect, if not quotes? ||| The agenda: what people raise unprompted, in what order, and with how much heat. The story comes out of what you hear rather than being selected in advance.

:::reveal The Indiana Girl Report ran 91 listening sessions with girls. What can that method support, and what can it not? ||| It can surface themes that no state data set contains, such as the report's question about social connection. It cannot support a claim about what share of Indiana girls hold a view, because listening sessions are not a probability sample.

:::reveal What is the default record status of something you hear in a listening setting? ||| Not on the record. If you want to use it, that is a separate conversation you open there and then, because assuming otherwise ends your access to that room.

## Vocabulary
- **Community listening**: time spent where people on the beat already gather, with no story, deadline, or ask attached.
- **The agenda**: what a community raises unprompted, in what order and with what intensity, which is what listening collects.
- **Probability sample**: a sample drawn so that shares can be generalized to a population, which listening sessions are not.
- **Listening block**: a protected weekly slot for listening that is attached to no story, and the first thing a bad week deletes.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.).
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "who-is-never-asked",
      title: "6 · Who is never asked, and why the gap is structural",
      section: "Section 2 · Community listening",
      body: `Every beat has a set of people who are quoted constantly and a much larger set who are never asked. The gap is not usually anyone's decision. It is the sum of small conveniences, and it can be corrected by a checklist.

**Why the same people get quoted.** They answer the phone. They speak in publishable sentences. They have a title that makes them safe to cite. They are reachable during business hours, which is when reporters work and when hourly workers cannot talk. Each of those is a reasonable operational preference, and together they produce a coverage pattern that looks like an editorial judgment nobody made.

**The gap shows up in data too, which is the part reporters underrate.** The 2025 Indiana Girl Report devotes a page to its own limits, and says in its own voice that gender gaps exist in data and data collection, that despite its efforts it is not yet possible to present data that is free from gender bias, and that these limitations should be viewed as an additional data point rather than a reason to dismiss what the data shows (Indiana Youth Institute, 2025, p. 27). A publisher stating its own uncertainty that plainly is rare. It also tells a reporter exactly where to look: if a population is undercounted in the collection, it is undercounted in every table built from it.

**The correction, as a checklist you run monthly.** List everyone you quoted this month. Mark each as official, advocate, expert, or affected. Count. If affected people are under a quarter of the list, that is the finding. Then ask which groups on your beat you have never once quoted, and put one on the calendar. This takes twenty minutes and is the only reliable defense against a beat that quietly narrows to whoever is easiest.

**Access costs, and who pays them.** Talking to a reporter costs the source something: time, risk, sometimes a job. For an official it is part of the job. For a shift worker it is unpaid time and possible exposure. Scheduling around their availability rather than yours is not a courtesy; it is the difference between a beat that includes them and one that does not.

**What this is not.** It is not a rule that every story must contain a person from every category, which produces the decorative anecdote and wastes someone's afternoon. It is a rule about the distribution across a month of work, which is where the pattern lives.

:::reveal Why do the same few people end up quoted over and over on a beat? ||| Because each convenience is individually reasonable: they answer, they speak in publishable sentences, they have a citable title, and they are available in business hours. Together they produce a coverage pattern nobody chose.

:::reveal What does the Indiana Girl Report say on page 27 about its own data, and why does it matter to a reporter? ||| That gender gaps exist in data and collection, that it is not yet possible to present data free from gender bias, and that the limitation is an additional data point rather than grounds for dismissal. It matters because an undercount in the collection is inherited by every table built from it.

:::reveal What does the monthly quote audit measure, and what is the threshold given? ||| Everyone quoted that month, marked official, advocate, expert, or affected. If affected people are under a quarter of the list, that is the finding to act on.

## Vocabulary
- **Coverage pattern**: the distribution of who gets quoted across a month, which emerges from convenience rather than from an editorial decision.
- **Quote audit**: a monthly count of sources by category, run to catch a beat narrowing to whoever is easiest to reach.
- **Affected source**: a person the institution acts upon, as distinct from an official, an advocate, or an expert.
- **Access cost**: what talking to a reporter costs the source in time, risk, or exposure, which differs enormously by who they are.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.).`,
    },
    {
      slug: "equal-trust",
      title: "7 · Equal trust, and the extractive pattern",
      section: "Section 2 · Community listening",
      body: `The Free Press Indiana posting behind this track asks for someone relentless about building relationships built on equal trust. That phrase is worth taking literally, because the common failure is a relationship in which trust runs one way.

**The extractive pattern, described so you can recognize yourself in it.** A reporter appears when something bad happens, collects the worst hour of somebody's life, publishes, and is not seen again until the next bad thing. Every individual step is defensible. The pattern is a community that has learned journalists arrive to take. The tell is simple: count your visits to a place against your stories from it. If those numbers are close, you are extracting.

**What equal trust actually requires, concretely.** Tell people what you are doing and what will happen to what they say, before they say it. Be reachable afterward, with a phone number that reaches a person. Come back when nothing is wrong. Cover the good outcome with the same seriousness as the bad one, because a community that only appears in your work at its worst learns exactly what you think it is. And be honest about what you cannot promise, starting with copy approval, which you do not give.

**Trust is not agreement.** Equal trust does not mean a community gets to approve coverage, and a reporter who implies otherwise is buying access with a promise they will break. What it means is that people can predict how you will behave, which is a much stronger thing to be able to offer. Predictability survives a story someone hates. Sympathy does not.

**The repair, when you get it wrong.** You will publish something a source experiences as a betrayal, sometimes because you were wrong and sometimes because accurate reporting hurt. Go back. Explain what you did and why, in person if you can. Do not open with a defense of the piece. Ask what it cost them. If you were wrong, correct it publicly and promptly, because a correction is the only currency journalism has that a reader can verify.

**Why this is a professional skill rather than a virtue.** A beat runs on sources who will still speak to you in year three. Every extractive interaction spends the balance a beat is built on, and there is no way to buy it back quickly under deadline.

:::reveal What is the simplest tell that a relationship with a community has become extractive? ||| Count your visits to the place against your stories from it. If the two numbers are close, everything you do there is collection.

:::reveal Why is predictability a stronger offer to a source than sympathy? ||| Because predictability survives a story the source hates. It means they can forecast how you will behave, which is something you can honestly promise, unlike agreement or copy approval.

:::reveal When you go back to a source after a piece they experienced as a betrayal, what do you not open with? ||| A defense of the piece. Ask what it cost them first, and if you were wrong, correct it publicly and promptly.

## Vocabulary
- **Equal trust**: a relationship in which the source can predict the reporter's behavior, and the reporter has earned the right to ask.
- **Extractive pattern**: a cycle of appearing only when something bad happens, collecting, publishing, and disappearing.
- **Copy approval**: letting a source review and approve a piece before publication, which a reporter does not give.
- **Repair**: returning to a source after a damaging piece, asking what it cost, and correcting publicly if you were wrong.

## Sources
- Free Press Indiana. (n.d.). *Women and girls reporter* [Job posting]. https://www.freepressindiana.org/jobs/women-girls-reporter
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-community-listening",
      title: "8 · Knowledge check: community listening",
      section: "Section 2 · Community listening",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What defines community listening as this course uses the term?",
            options: [
              "No story, no deadline, no ask",
              "A structured focus group run to test which of several story ideas readers prefer",
              "A round of interviews with community leaders conducted before a project launches",
              "An open call for tips published so residents can send the newsroom their concerns",
            ],
            correctIndex: 0,
            explanation:
              "It is the part of a beat that most resembles doing nothing, and it is what stops a newsroom from only confirming stories it already thought of.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What is a reporter collecting during community listening?",
            options: [
              "The agenda",
              "Contact details for people willing to be interviewed on the record at a later date",
              "Enough usable quotes to fill the human element of a story already assigned",
              "Documents that residents have obtained from the institutions on the beat map",
            ],
            correctIndex: 0,
            explanation:
              "What people raise unprompted, in what order, with what heat. Not quotes, and not sources for a piece you already have.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "How does listening differ in direction from interviewing?",
            options: [
              "The story comes out of it",
              "It is recorded rather than written down, so the material can be verified afterward",
              "It happens on the source's schedule rather than the newsroom's, which interviews never do",
              "It is conducted by an editor rather than the reporter who will write the eventual piece",
            ],
            correctIndex: 0,
            explanation:
              "An interview is a transaction with a subject selected to fit a story you already have. Listening runs the other way.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "How many listening sessions with girls did the 2025 Indiana Girl Report run?",
            options: [
              "91",
              "About 1,200, drawn as a stratified random sample of Indiana girls aged 6 to 17",
              "None, because the report is built entirely from state administrative data collections",
              "Twelve, one for each of the state's Girl Scout council service areas",
            ],
            correctIndex: 0,
            explanation:
              "91 listening sessions with girls, plus feedback from 130 adults across the state, alongside statewide data (p. 7).",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "How many adults gave feedback to the 2025 Indiana Girl Report?",
            options: [
              "130",
              "About 4,000, surveyed by telephone using a sampling frame weighted to the state population",
              "Only the report's named advisory board members, whose affiliations are listed inside",
              "None, because the report deliberately restricted its qualitative work to girls themselves",
            ],
            correctIndex: 0,
            explanation:
              "Page 7 of the report gives 91 listening sessions with girls and feedback from 130 adults across the state.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What can 91 listening sessions support as evidence?",
            options: [
              "Themes",
              "The share of Indiana girls who report difficulty making or maintaining friendships",
              "A comparison of outcomes between girls in urban counties and girls in rural ones",
              "A trend line showing whether a condition improved or worsened since the prior year",
            ],
            correctIndex: 0,
            explanation:
              "They surface what a population raises, including things no state data set contains. They are not a probability sample, so they cannot carry a share.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What mistake does a reporter make by dismissing listening-session findings because they are not a survey?",
            options: [
              "Discarding the only account of what was raised",
              "Violating the publisher's citation terms, which require the qualitative work to be reported",
              "Confusing a probability sample with a census, which are different sampling designs",
              "Assuming administrative data has no margin of error, when in fact every table does",
            ],
            correctIndex: 0,
            explanation:
              "There are two symmetrical errors: reading listening sessions as a survey, and throwing them away because they are not one.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What is the default record status of something heard in a listening setting?",
            options: [
              "Not on the record",
              "On background, meaning it may be used without naming the individual who said it",
              "On the record, because the gathering was open to any member of the public",
              "Embargoed until the reporter's outlet publishes its next piece on the subject",
            ],
            correctIndex: 0,
            explanation:
              "If you want to use it, that is a separate conversation you open there and then. Assuming otherwise ends your access to that room permanently.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "How much listening does the lesson recommend, and how should it be protected?",
            options: [
              "One block a week, protected like a court date",
              "Two full days each month, scheduled during the newsroom's quietest reporting period",
              "As much as remains after the week's assigned stories have been filed and edited",
              "One extended visit per quarter to each community named in the beat memo",
            ],
            correctIndex: 0,
            explanation:
              "It is the first thing cut when a week goes badly, which is exactly why beats go stale.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What does the lesson say a reporter should do about identifying themselves while listening?",
            options: [
              "Say who you are every time",
              "Identify yourself only if asked, so that the conversation is not distorted by your presence",
              "Introduce yourself to the organizers, who can then inform attendees on your behalf",
              "Wear visible press credentials, which satisfies the disclosure obligation without interrupting",
            ],
            correctIndex: 0,
            explanation:
              "Who you are and where you work, without being asked, alongside taking notes in your own file rather than a notebook you wave around.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What does a newsroom that only interviews end up producing?",
            options: [
              "The stories it already thought of",
              "Coverage that is more accurate but less representative of the communities it serves",
              "Work that is faster to produce but harder to defend against a legal challenge",
              "A source list dominated by people who decline to be identified by name",
            ],
            correctIndex: 0,
            explanation:
              "Because an interview subject is selected to fit a story that already exists, the method can only confirm, never originate.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "Which places does the lesson name as listening settings?",
            options: [
              "A shift change, a church basement, a resource fair",
              "Press conferences, agency briefings, and the public comment period of board meetings",
              "Newsroom-hosted town halls advertised to subscribers through the outlet's newsletter",
              "Online forums and comment sections where residents discuss the beat's institutions",
            ],
            correctIndex: 0,
            explanation:
              "Places where people on the beat already gather, plus a parent group and a county extension office. You go where they are, not where you are.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What produced the pattern of the same few people being quoted repeatedly?",
            options: [
              "Small conveniences adding up",
              "A deliberate editorial policy favoring named officials over unnamed private citizens",
              "Legal caution, since quoting private individuals raises the outlet's defamation exposure",
              "Reader demand, measured by which sources generate the most engagement per story",
            ],
            correctIndex: 0,
            explanation:
              "They answer, they speak in publishable sentences, they have a citable title, they are free in business hours. The result looks like a judgment nobody made.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "Why does business-hours availability skew a beat's sources?",
            options: [
              "Hourly workers cannot talk then",
              "Because agencies deliberately schedule announcements to conflict with community meetings",
              "Because most public records offices close before the end of a reporter's working day",
              "Because editors set filing deadlines that make afternoon interviews impossible to use",
            ],
            correctIndex: 0,
            explanation:
              "Reporters work when officials work. Anyone whose availability does not match falls out of the coverage without a decision being made.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "On which page does the 2025 Indiana Girl Report state its own data limitations?",
            options: [
              "Page 27",
              "Page 82, in the methodology section that closes the data half of the document",
              "Page 3, in the front matter that explains how the report should be read",
              "Page 75, at the head of the endnotes and citations that support every figure",
            ],
            correctIndex: 0,
            explanation:
              "The page is headed Addressing Limitations in Available Data, and it is the reason this track uses the report as a teaching object.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What does the report say about presenting data free from gender bias?",
            options: [
              "It is not yet possible",
              "That its own tables achieve it, which is why the report can be cited without qualification",
              "That the problem is specific to Indiana and is being resolved by a state data initiative",
              "That gender bias affects survey research but not administrative records collections",
            ],
            correctIndex: 0,
            explanation:
              "It says efforts were made to limit gender bias and that it is not yet possible to present data that is free of it. A publisher saying that in its own voice is rare.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "How does the report say its limitations should be viewed?",
            options: [
              "As an additional data point",
              "As grounds for treating every figure in the document as provisional until reconfirmed",
              "As a disclaimer required by the funders rather than a substantive finding about the data",
              "As a reason to prefer the qualitative listening sessions over the statewide tables",
            ],
            correctIndex: 0,
            explanation:
              "The report is explicit that the limitations do not dismiss what the data shows. They are a lens through which to read it.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What follows for a table built from an undercounted collection?",
            options: [
              "It inherits the undercount",
              "Its margin of error widens, but the point estimate itself remains unbiased",
              "It becomes unusable, and a reporter should not cite any figure derived from it",
              "The publisher must footnote the gap, so a reader will always be warned in the table",
            ],
            correctIndex: 0,
            explanation:
              "If a population is missed in the collection, it is missed in everything computed from it. That is why page 27 tells a reporter where to look.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What four categories does the monthly quote audit use?",
            options: [
              "Official, advocate, expert, affected",
              "Named, anonymous, on background, and off the record, tallied by attribution status",
              "Government, business, nonprofit, and individual, tallied by the sector each source works in",
              "Local, state, federal, and national, tallied by the level of institution each source represents",
            ],
            correctIndex: 0,
            explanation:
              "List everyone quoted that month, mark each, and count. Twenty minutes, and the only reliable defense against a beat narrowing to whoever is easiest.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What threshold does the quote audit flag?",
            options: [
              "Affected people under a quarter",
              "Any single source appearing in more than three published pieces in the same month",
              "More than half of all quotes coming from sources inside the state capital",
              "Fewer than two independent sources appearing in any individual published story",
            ],
            correctIndex: 0,
            explanation:
              "If people the institution acts upon are under a quarter of the month's quotes, that is the finding, and the next step is putting an unquoted group on the calendar.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "Why is scheduling around a source's availability not merely a courtesy?",
            options: [
              "It decides whether they are in the beat at all",
              "It reduces the outlet's exposure if the source later disputes how they were approached",
              "It is required by the SPJ code, which sets minimum standards for source accommodation",
              "It shortens the interview, since sources speak more efficiently outside working hours",
            ],
            correctIndex: 0,
            explanation:
              "Talking to a reporter costs a source time, risk, and sometimes a job. For an official that cost is part of the job. For a shift worker it is not.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What is the quote audit explicitly NOT a rule about?",
            options: [
              "Every individual story",
              "The number of sources required before an allegation can responsibly be published",
              "Whether an unnamed source may be used when a named one is available instead",
              "How many times a single official may be quoted across a reporting year",
            ],
            correctIndex: 0,
            explanation:
              "Requiring a person from every category in every piece produces the decorative anecdote. The pattern lives in the distribution across a month.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What does the lesson call the result of quoting a person only to fill a category?",
            options: [
              "The decorative anecdote",
              "A conflict of interest, because the source was selected for who they are rather than what they know",
              "An unattributed quote, since the person's actual role in the story is never explained",
              "A background source, because their contribution cannot be independently confirmed",
            ],
            correctIndex: 0,
            explanation:
              "It wastes the source's afternoon and adds nothing to the piece, which is why the rule is about a month of work rather than a single story.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What phrase from the Free Press Indiana posting does lesson 7 take literally?",
            options: [
              "Relationships built on equal trust",
              "Quick-turn dailies balanced against long-form enterprise projects across the state",
              "Five years of experience covering communities outside metropolitan areas",
              "Social and video literacy sufficient to publish directly to platform audiences",
            ],
            correctIndex: 0,
            explanation:
              "Taking it literally is the point, because the common failure is a relationship in which trust runs only one direction.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "How does the lesson describe the extractive pattern?",
            options: [
              "Appear when it is bad, publish, disappear",
              "Quoting the same officials repeatedly because they are the easiest sources to reach",
              "Publishing without seeking comment from the people an institution's decisions affect",
              "Relying on advocacy organizations to introduce every source inside a community",
            ],
            correctIndex: 0,
            explanation:
              "Every step is individually defensible. The pattern teaches a community that journalists arrive to take.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What is the tell that a reporter has become extractive toward a place?",
            options: [
              "Visits and stories are the same number",
              "More than half the sources quoted from that place decline to be named in print",
              "The outlet receives more complaints from that place than from the rest of the beat",
              "Residents refer the reporter to a spokesperson instead of speaking directly",
            ],
            correctIndex: 0,
            explanation:
              "Count them. If every visit produced a story, then everything you have ever done there was collection.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "Which of these does equal trust require, per the lesson?",
            options: [
              "Come back when nothing is wrong",
              "Give the community a chance to review the piece before it is published",
              "Withhold publication of anything a source later regrets having said on the record",
              "Route all future contact through whichever organizer first introduced you",
            ],
            correctIndex: 0,
            explanation:
              "Along with saying in advance what will happen to what people say, staying reachable, and covering the good outcome as seriously as the bad one.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What does a community learn when it appears in your work only at its worst?",
            options: [
              "What you think it is",
              "That the outlet's editors decide coverage without input from the reporters on the beat",
              "That good news is handled by a different desk with different standards of proof",
              "That negative coverage attracts more readers, which is what the outlet is optimizing for",
            ],
            correctIndex: 0,
            explanation:
              "Which is why covering the good outcome with the same seriousness is listed as a requirement rather than a nicety.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What does equal trust explicitly not include?",
            options: [
              "Copy approval",
              "Being reachable by phone after a piece publishes, which most newsrooms cannot staff",
              "Explaining in advance what will happen to what a source tells you",
              "Returning to a community during periods when nothing newsworthy is happening",
            ],
            correctIndex: 0,
            explanation:
              "A reporter who implies a community may approve coverage is buying access with a promise they will break.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "Why is predictability a better offer to a source than sympathy?",
            options: [
              "It survives a story they hate",
              "It can be written into a signed agreement, which makes it enforceable if breached",
              "It reduces the number of follow-up questions a source must answer before publication",
              "It transfers responsibility for the piece from the reporter to the newsroom's editors",
            ],
            correctIndex: 0,
            explanation:
              "Equal trust means the source can forecast how you will behave. That holds up after publication in a way that shared feeling does not.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "When returning to a source after a piece they experienced as a betrayal, what comes first?",
            options: [
              "Asking what it cost them",
              "Explaining the editorial reasoning and the standards the piece was held to before filing",
              "Offering a follow-up story that presents their side of the events at greater length",
              "Requesting that they put any objection in writing so the desk can review it formally",
            ],
            correctIndex: 0,
            explanation:
              "Do not open with a defense of the piece. If you were wrong, correct it publicly and promptly.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What does the lesson call the only currency journalism has that a reader can verify?",
            options: [
              "A correction",
              "A named source, whose existence and statements a reader can independently confirm",
              "A linked primary document, published alongside the story for readers to inspect",
              "A byline, which attaches an accountable person to every published claim",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a correction is prompt and public rather than quiet, and why it is the required response when you were wrong.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "Why does the lesson treat equal trust as a professional skill rather than a virtue?",
            options: [
              "A beat runs on sources who still speak to you in year three",
              "Because newsroom ethics codes make it a condition of continued employment",
              "Because sources who trust a reporter grant interviews faster, shortening the reporting cycle",
              "Because it reduces the likelihood of a defamation claim from a person named in a story",
            ],
            correctIndex: 0,
            explanation:
              "Every extractive interaction spends the balance a beat is built on, and there is no way to buy it back quickly on deadline.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "Which two reasons does the lesson give for a source experiencing a piece as betrayal?",
            options: [
              "You were wrong, or accurate reporting hurt",
              "The story was cut for space, or a headline written by someone else misrepresented it",
              "The publication date moved, or a competing outlet published the same material first",
              "A quote was paraphrased, or the source's title was rendered incorrectly in print",
            ],
            correctIndex: 0,
            explanation:
              "Both happen, and only one of them is fixable by a correction. The repair conversation is required either way.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What does the lesson say a reporter should be able to offer after publication?",
            options: [
              "A phone number that reaches a person",
              "A written summary of every editorial decision made about the source's contribution",
              "An opportunity to record a response for the outlet's social and video channels",
              "A commitment to revisit the subject within a fixed number of weeks",
            ],
            correctIndex: 0,
            explanation:
              "Reachability afterward is part of what makes the relationship predictable rather than a single transaction.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "Where does the lesson say a reporter should keep listening notes?",
            options: [
              "Your own file",
              "A shared newsroom system, so an editor can review what was heard before a story is assigned",
              "A recording, since written notes are inadmissible if the account is later disputed",
              "The organizer's minutes, which already document what the gathering discussed",
            ],
            correctIndex: 0,
            explanation:
              "Rather than a notebook you wave around, because visible note-taking changes what a room will say in front of you.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What new question does the Indiana Girl Report say it went into 2025 with?",
            options: [
              "Social connection",
              "Whether state administrative data undercounts girls relative to boys across all domains",
              "How county-level differences in provider ratios affect girls' access to mental health care",
              "Whether the prior year's recommendations had been adopted by Indiana school districts",
            ],
            correctIndex: 0,
            explanation:
              "The report asked what role social connection plays in the lives of Indiana girls, and the listening sessions are how it went looking.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What does the lesson say happens to the protected listening block on a bad week?",
            options: [
              "It gets cut first",
              "It expands, because a week with no filed stories leaves more time for community work",
              "It moves to the following week, which is why beats stay current despite deadline pressure",
              "It is reassigned to a colleague so the beat keeps a presence in the community",
            ],
            correctIndex: 0,
            explanation:
              "And that is named as the reason beats go stale, which is why the lesson says to protect it like a court date.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What is the next step after a quote audit shows a group you have never quoted?",
            options: [
              "Put one on the calendar",
              "File a records request seeking the institution's own contact list for that population",
              "Ask an advocacy organization to nominate a representative who can speak for the group",
              "Add a standing note to the beat memo explaining why the group is hard to reach",
            ],
            correctIndex: 0,
            explanation:
              "The audit is only useful if it changes next month's schedule, which is why the fix is a calendar entry rather than a note.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "Whose access cost does the lesson describe as part of the job?",
            options: [
              "An official's",
              "A shift worker's, because employers are required to permit media interviews during hours",
              "An advocate's, since organizations exist specifically to speak to the press",
              "An expert's, because academic institutions credit media engagement in promotion reviews",
            ],
            correctIndex: 0,
            explanation:
              "For an official, talking to a reporter is a duty. For a shift worker it is unpaid time and possible exposure, and the schedule should reflect that difference.",
            sourceLessonSlug: "who-is-never-asked",
          },
        ],
      },
    },
    // ── Section 3 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "source-with-nothing",
      title: "9 · The source who has nothing for you today",
      section: "Section 3 · Sources you keep",
      body: `The sources who matter most on a beat are the ones you were talking to for two years before they had anything to tell you. Keeping them is a scheduled activity, not a personality trait.

**Why the long relationship is the productive one.** A person calls a reporter with something serious when three things are true at once: they know who you are, they have watched how you handled someone else's information, and they can reach you quickly. None of those can be arranged in the week the thing happens. They are built in the years when the person has nothing for you, which is why keeping them is the work.

**What keeping actually looks like.** A rolling contact list with a next-contact date beside each name, worked through every month. Contact that asks for nothing: a note when they are quoted well elsewhere, a question about how the thing they mentioned last spring turned out, a message when their institution is in the news and you are not writing about them. Fifteen minutes a week, and it compounds.

**The category reporters neglect worst.** Mid-level staff who are not authorized to speak. They know how a decision was actually made, they are usually never contacted, and they will not become useful sources during the crisis when everyone is calling. Introduce yourself when nothing is happening, be explicit that you are not asking them to say anything, and leave.

**Do not confuse a kept source with a friend.** The relationship is professional and both parties should be able to say so out loud. You will publish something they dislike. If the relationship cannot survive that, you have been misrepresenting what it is, and the correction is to say plainly early: I will report what I find, and I will tell you before it runs.

**Sources who go quiet.** Someone who stops answering usually has a reason: they got burned, their employer noticed, or your last piece was worse for them than you realized. Ask once, plainly, and accept the answer. Continuing to press converts a temporary silence into a permanent one and tells everyone they talk to what you are like.

**One rule that pays for itself.** Never let a source find out from the story. If you are about to publish something that names them, involves them, or will cost them, they hear it from you first. It costs one uncomfortable phone call and it is the single strongest signal of predictability you can send.

:::reveal Which three conditions have to be true at once before someone calls a reporter with something serious? ||| They know who you are, they have seen how you handled someone else's information, and they can reach you fast. None of them can be arranged in the week the thing happens.

:::reveal Which category of source does the lesson say reporters neglect worst, and why are they valuable? ||| Mid-level staff who are not authorized to speak. They know how a decision was actually made, and they are almost never contacted until a crisis, at which point it is too late to start.

:::reveal What is the one rule about publication that the lesson says pays for itself? ||| Never let a source find out from the story. One uncomfortable phone call in advance is the strongest available signal that your behavior is predictable.

## Vocabulary
- **Kept source**: a professional relationship maintained on a schedule during the long period when the person has nothing to give you.
- **Next-contact date**: the field beside a name on a rolling contact list that turns keeping sources into a task rather than an intention.
- **Contact that asks for nothing**: outreach with no request attached, which is what makes a relationship survive the years between stories.
- **Going quiet**: a source who stops answering, usually for a reason, which you ask about once and then accept.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "ground-rules",
      title: "10 · Ground rules, and the promise you can keep",
      section: "Section 3 · Sources you keep",
      body: `Ground rules are the terms under which information may be used. They are agreed before the information is given, not after, and the words mean different things to different people, so you define them out loud every time.

**The four terms, defined the way you should say them.** *On the record*: everything is usable with the person's name and title, and this is the default you state at the start. *On background*: usable, attributed to a described role rather than a name, and you agree the exact wording of that description in advance. *Deep background*: usable as your own knowledge, no attribution at all. *Off the record*: not publishable, used only to guide your reporting toward something you can get elsewhere.

**The rule that prevents most disputes.** Ground rules cannot be applied retroactively. A person who says something and then says "that was off the record" is asking for a favor, not invoking an agreement. Sometimes you grant it, and a beat reporter often should. But say clearly which one is happening, because a source who believes they can reclassify anything afterward will eventually reclassify the sentence your story depends on.

**Off the record is not confidentiality.** It governs publication, not your ability to be compelled. That is a separate body of law, taught later in this track, and it is not the same in every state.

**A promise of confidentiality is legally enforceable, and reporters underrate this.** In *Cohen v. Cowles Media Co.*, a source gave documents to reporters after being promised anonymity, the papers' editors overrode the reporters and published his name, he lost his job, and he sued. The Supreme Court held in 1991 that the First Amendment does not bar a promissory estoppel claim against a news organization that breaks such a promise, so generally applicable law can apply to the press like anyone else (*Cohen v. Cowles Media Co.*, 1991). The practical lesson is the reason it is in this course: you are making a commitment your employer may override and a court may enforce, so do not make one lightly, and tell the source who else in your newsroom will know their name.

**How to say it.** "Before we go on: everything is on the record unless we agree otherwise, and if you want something on background, tell me before you say it and we will agree how I describe you." Twelve seconds, once, at the top. It resolves almost every argument that would otherwise happen after publication.

:::reveal What is the difference between on background and deep background as this lesson defines them? ||| On background is usable with attribution to a described role whose exact wording you agree in advance. Deep background is usable as your own knowledge with no attribution at all.

:::reveal Why can ground rules not be applied retroactively, and what should you say when a source tries? ||| Because a source who can reclassify anything afterward will eventually reclassify the sentence the story depends on. Name it as a favor you are choosing to grant or decline, not as an agreement being invoked.

:::reveal What did the Supreme Court decide in Cohen v. Cowles Media Co., and what does it mean for a reporter making a promise? ||| That the First Amendment does not bar a promissory estoppel claim against a news organization that breaks a promise of confidentiality. A promise can be enforced in court, so make it deliberately and say who else in the newsroom will know the name.

## Vocabulary
- **On the record**: usable with name and title, and the stated default at the top of any conversation.
- **On background**: usable with attribution to a role description whose exact wording is agreed in advance.
- **Off the record**: not publishable, used to steer reporting toward material you can obtain elsewhere.
- **Promissory estoppel**: the legal theory under which a broken promise can be enforced, applied to a newsroom's promise of confidentiality in Cohen.

## Sources
- Cohen v. Cowles Media Co., 501 U.S. 663 (1991). https://supreme.justia.com/cases/federal/us/501/663/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "source-hygiene",
      title: "11 · Source hygiene, and not becoming somebody's instrument",
      section: "Section 3 · Sources you keep",
      body: `Two failures end beats. Handling source material carelessly, and being used by a source whose motive you never examined. Both are avoidable with habits rather than talent.

**Ask the motive question every time, and write the answer down.** Why is this person telling me this, why now, and what happens to them if I publish it. There is nothing wrong with a self-interested source; most useful information arrives from someone who benefits. The failure is not knowing which interest you are serving. A document arriving three weeks before a contract vote, from a competitor of the incumbent vendor, may be entirely accurate and is also a move in someone's fight.

**The test that follows.** Would I run this if the same document came from the other side? If the answer is no, the story is the fight rather than the document, and both belong in the piece. Readers can weigh a motive you disclose. They cannot weigh one you hide.

**Corroborate independently of the source who gave it to you.** A leaker who supplies a document and a second person to confirm it has supplied one source, not two. Confirm through a record, an unconnected person, or an official response, and be specific in your notes about which.

**Handling.** Know where source material lives and who can reach it: cloud drives your employer administers, chat logs, calendar entries naming a person, and the note in your phone. Decide before you receive anything sensitive what you will keep, where, and for how long, and prefer not writing a name down to writing one down carefully. Tell sources honestly what you can and cannot protect, including that your employer's systems are not yours.

**The pattern that costs the most.** A reporter becomes a reliable outlet for one faction, gets a steady flow of real stories, and loses every source in the other faction without noticing, because the flow feels like success. The quote audit from lesson 6 catches it. So does the simple question of who has stopped calling.

:::reveal What three questions make up the motive check on a source? ||| Why is this person telling me, why now, and what happens to them if I publish. A self-interested source is normal; not knowing which interest you serve is the failure.

:::reveal Why is a leaker who also supplies a person to confirm the document only one source? ||| Because both come from the same interest. Independent corroboration means a record, an unconnected person, or an official response, and your notes should say which.

:::reveal How does a reporter usually discover they have become one faction's outlet, and what catches it earlier? ||| Usually not at all, because a steady flow of real stories feels like success. The monthly quote audit catches it, as does asking who has stopped calling.

## Vocabulary
- **Motive check**: the recorded answer to why a source is providing material, why now, and what publication costs them.
- **The other side test**: asking whether you would run the material if it arrived from the opposing party, which exposes when the fight is the story.
- **Independent corroboration**: confirmation from a record, an unconnected person, or an official response, rather than a second contact supplied by the leaker.
- **Handling plan**: a decision made before sensitive material arrives about what is kept, where it lives, and who can reach it.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-sources-you-keep",
      title: "12 · Knowledge check: sources you keep",
      section: "Section 3 · Sources you keep",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Which sources does the lesson say matter most on a beat?",
            options: [
              "The ones you talked to for two years first",
              "The officials authorized to speak, because their statements can be quoted without risk",
              "The advocates who track the subject full time and can supply context on deadline",
              "The former employees who left the institution and are free of any duty of confidence",
            ],
            correctIndex: 0,
            explanation:
              "The relationship has to exist before the person has anything to tell you, which is why keeping sources is scheduled work rather than a trait.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "Which of these is one of the three conditions for a source calling with something serious?",
            options: [
              "They can reach you quickly",
              "They have already been quoted in your outlet at least once in the past year",
              "They have confirmed that your newsroom will not identify them under any circumstances",
              "They believe your outlet reaches the audience whose reaction they want to provoke",
            ],
            correctIndex: 0,
            explanation:
              "Along with knowing who you are and having watched how you handled someone else's information. None of the three can be built in the week the thing happens.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What field turns keeping sources into a task rather than an intention?",
            options: [
              "A next-contact date",
              "A tag recording which of the beat's institutions each contact currently works for",
              "A note describing the ground rules agreed at the most recent conversation",
              "A rating of how reliable the source's previous information turned out to be",
            ],
            correctIndex: 0,
            explanation:
              "A rolling contact list with a next-contact date beside each name, worked through monthly. About fifteen minutes a week, and it compounds.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What is contact that asks for nothing?",
            options: [
              "Outreach with no request attached",
              "An interview conducted without recording, so the source is not committed to anything",
              "A message sent through an intermediary who already has a relationship with the source",
              "A standing invitation for the source to contact the reporter whenever they choose",
            ],
            correctIndex: 0,
            explanation:
              "A note when they are quoted well elsewhere, a question about how last spring's thing turned out, a message when their institution is in the news and you are not writing about them.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "Which source category does the lesson say reporters neglect worst?",
            options: [
              "Mid-level staff",
              "Elected officials outside the majority party, who are rarely invited to comment",
              "Retired officials, whose recollections are unreliable and therefore rarely sought",
              "Contractors and vendors, whose commercial interests make them difficult to quote",
            ],
            correctIndex: 0,
            explanation:
              "They are not authorized to speak, they know how a decision was actually made, and they will not become sources during the crisis when everyone is calling.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "How should a reporter introduce themselves to unauthorized mid-level staff?",
            options: [
              "Say you are not asking them to say anything",
              "Explain that any information they provide will be attributed to an unnamed official",
              "Ask a colleague inside the institution to vouch for you before making contact",
              "Request a formal interview through the agency's communications office first",
            ],
            correctIndex: 0,
            explanation:
              "Introduce yourself when nothing is happening, be explicit that there is no ask, and leave. That is what makes the later call possible.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What is wrong with treating a kept source as a friend?",
            options: [
              "You will publish something they dislike",
              "It creates a conflict of interest that the outlet's ethics policy requires you to disclose",
              "It makes the source less likely to provide documents, since friends avoid legal risk",
              "It obliges you to give them advance notice of every piece that mentions their institution",
            ],
            correctIndex: 0,
            explanation:
              "If the relationship cannot survive that, you have misrepresented what it is. Say plainly and early that you will report what you find and tell them before it runs.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What does the lesson say to do when a source goes quiet?",
            options: [
              "Ask once and accept the answer",
              "Escalate through a colleague who still has contact, to find out what changed",
              "Stop all contact permanently, since a silent source has withdrawn consent to be approached",
              "Publish a correction to whichever story preceded the silence, as a gesture of good faith",
            ],
            correctIndex: 0,
            explanation:
              "Pressing converts a temporary silence into a permanent one, and it tells everyone that source talks to what you are like.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What is the rule about a source and the published story?",
            options: [
              "Never let them find out from the story",
              "Never share the publication date, because a source may alert the institution in advance",
              "Never quote a source in a piece they have not been given an opportunity to review",
              "Never publish a name without written consent recorded before the interview began",
            ],
            correctIndex: 0,
            explanation:
              "One uncomfortable phone call in advance is the strongest signal of predictability a reporter can send, and it costs almost nothing.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "How much time does the lesson suggest keeping sources takes?",
            options: [
              "About fifteen minutes a week",
              "Roughly a full day each month, worked through the entire contact list in one sitting",
              "One scheduled coffee per source per quarter, which is why the list must stay short",
              "Whatever remains after the week's assigned stories, which is usually nothing",
            ],
            correctIndex: 0,
            explanation:
              "It is small, repeated, and compounding, which is exactly the kind of work that gets skipped without a list and a date.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "When are ground rules agreed?",
            options: [
              "Before the information is given",
              "At the end of the interview, once both parties know what was actually discussed",
              "In writing after the conversation, so there is a record of what each term covered",
              "By the editor before publication, since attribution is an editing decision",
            ],
            correctIndex: 0,
            explanation:
              "And you define the terms out loud every time, because the words mean different things to different people.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What does on the record mean, as the lesson defines it?",
            options: [
              "Usable with name and title",
              "Usable only after the source has confirmed the exact quotations that will appear",
              "Usable in summary form, but not as direct quotation without further permission",
              "Usable by the reporter but not by other journalists at the same outlet",
            ],
            correctIndex: 0,
            explanation:
              "And it is the default you state at the start of the conversation, so that anything else has to be requested.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What must be agreed in advance for an on-background attribution?",
            options: [
              "The exact wording of the description",
              "Which editor at the outlet will be told the source's real name before publication",
              "How long the material may be held before the outlet is free to publish it",
              "Whether the source will confirm the same information on the record if asked later",
            ],
            correctIndex: 0,
            explanation:
              "A described role is only usable if both sides know what the description will say, which is why it is settled before the information is given.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What is deep background?",
            options: [
              "Usable with no attribution",
              "Unusable material provided only to steer a reporter toward a document held elsewhere",
              "Material usable once a second source has independently confirmed the same account",
              "Information that may be published only after the source has left their position",
            ],
            correctIndex: 0,
            explanation:
              "It becomes your own knowledge in the piece, with no described role attached, which is the difference from ordinary background.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What is off the record for, if it is not publishable?",
            options: [
              "Guiding you to what you can get elsewhere",
              "Establishing a relationship of trust that can later be converted into on-record quotes",
              "Protecting the source from being compelled to testify about the same information",
              "Allowing an official to correct a factual error without being seen to comment",
            ],
            correctIndex: 0,
            explanation:
              "It governs publication only. Whether you can be compelled to reveal anything is separate law, taught later in the track, and it varies by state.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What is a source doing when they say afterward that a remark was off the record?",
            options: [
              "Asking a favor",
              "Invoking an agreement that was implied by the professional context of the conversation",
              "Exercising a right that most state shield laws grant to any interviewee",
              "Withdrawing consent, which obliges the reporter to remove the material",
            ],
            correctIndex: 0,
            explanation:
              "Ground rules cannot be applied retroactively. A beat reporter often should grant it, but say which one is happening.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What happens if a source believes they can reclassify remarks after the fact?",
            options: [
              "Eventually they reclassify the one that matters",
              "The reporter becomes legally liable for any material published against the source's wishes",
              "The outlet must issue a clarification noting that attribution was disputed",
              "The relationship becomes stronger, because the source learns the reporter is flexible",
            ],
            correctIndex: 0,
            explanation:
              "Which is the practical reason to name the favor as a favor rather than let an unspoken rule take hold.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "In Cohen v. Cowles Media Co., what happened to the source?",
            options: [
              "He was named and lost his job",
              "He was subpoenaed and jailed for refusing to identify who supplied him the documents",
              "He won an injunction preventing publication of the documents he had provided",
              "He was granted anonymity by the court after the newspaper attempted to name him",
            ],
            correctIndex: 0,
            explanation:
              "He gave documents to reporters after being promised anonymity, editors overrode the reporters and published his name, and he sued.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What did the Supreme Court hold in Cohen v. Cowles Media Co.?",
            options: [
              "The First Amendment does not bar the claim",
              "That a promise of confidentiality is unenforceable because it restrains editorial judgment",
              "That newsroom promises bind the individual reporter but never the publishing company",
              "That state shield statutes preempt any civil claim arising from a broken promise",
            ],
            correctIndex: 0,
            explanation:
              "Generally applicable law, here promissory estoppel, can apply to the press like anyone else. The 1991 decision is why a promise is not a courtesy.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What practical step does the Cohen case argue for when promising confidentiality?",
            options: [
              "Tell the source who else will know their name",
              "Obtain the promise in writing so that the terms are enforceable against the employer",
              "Route the promise through the outlet's counsel before the interview takes place",
              "Refuse to make any promise until a second source has confirmed the information",
            ],
            correctIndex: 0,
            explanation:
              "You are making a commitment your employer may override and a court may enforce, so the source deserves to know how far it actually reaches.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "How long does the lesson say the ground-rules statement takes to deliver?",
            options: [
              "About twelve seconds",
              "A full minute, because each of the four terms has to be defined before the source agrees",
              "The first five minutes of any interview, which is why short calls skip it",
              "One email exchanged before the interview, which is why it is impractical on deadline",
            ],
            correctIndex: 0,
            explanation:
              "Once, at the top, and it resolves almost every argument that would otherwise happen after publication.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What does off the record NOT govern?",
            options: [
              "Whether you can be compelled",
              "Whether the material may be shared with an editor inside the same newsroom",
              "Whether the reporter may use the information to frame later questions to officials",
              "Whether a second reporter at the outlet is bound by the same agreement",
            ],
            correctIndex: 0,
            explanation:
              "It is an agreement about publication. Compulsion is a separate body of law that differs by state, covered later in this track.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What three questions form the motive check?",
            options: [
              "Why them, why now, what it costs them",
              "Who else has it, when it was created, and whether the original still exists on file",
              "What it proves, what it does not prove, and which document would settle the difference",
              "Who benefits, who is harmed, and whether either party has sued the outlet before",
            ],
            correctIndex: 0,
            explanation:
              "Write the answers down. A self-interested source is normal; the failure is not knowing which interest you are serving.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What does the lesson say about a self-interested source?",
            options: [
              "Most useful information comes from one",
              "Their material should be treated as unreliable until an official confirms it on the record",
              "They must be identified in the story by name, so readers can weigh the interest themselves",
              "Their motive should be kept out of the piece unless it is directly relevant to the finding",
            ],
            correctIndex: 0,
            explanation:
              "There is nothing wrong with it. A document arriving three weeks before a contract vote can be entirely accurate and also a move in somebody's fight.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What is the other side test?",
            options: [
              "Would I run this from the opposite party",
              "Would a reasonable reader reach the same conclusion from the document without my framing",
              "Would the institution's own auditor accept the document as authentic evidence",
              "Would a second newsroom independently choose to publish the same material",
            ],
            correctIndex: 0,
            explanation:
              "If the answer is no, the fight is the story rather than the document, and both belong in the piece.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "Why must a disclosed motive go into the story?",
            options: [
              "Readers can weigh what you disclose",
              "Because the SPJ code makes source motives a mandatory element of every published piece",
              "Because omitting it exposes the outlet to a claim from the party the source opposes",
              "Because it protects the reporter from being accused of coordinating with the source",
            ],
            correctIndex: 0,
            explanation:
              "They cannot weigh a motive you hide, which is what converts an accurate document into a misleading story.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "A leaker gives you a document and a person who confirms it. How many sources is that?",
            options: [
              "One",
              "Two, provided the confirming person is willing to be quoted on the record by name",
              "Three, counting the document itself as an independent piece of evidence",
              "It depends on whether the confirming person works at the same institution",
            ],
            correctIndex: 0,
            explanation:
              "Both arrive from the same interest. Independent corroboration means a record, an unconnected person, or an official response, and the notes should say which.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "Which of these counts as independent corroboration?",
            options: [
              "An official response",
              "A second document supplied by the same person from the same internal file",
              "A colleague at the outlet who has heard the same account from the same source",
              "The leaker restating the account consistently across two separate conversations",
            ],
            correctIndex: 0,
            explanation:
              "Along with a record or an unconnected person. The point is that the confirmation does not travel through the interest that supplied the material.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What does the lesson say to decide before sensitive material arrives?",
            options: [
              "What you keep, where, and for how long",
              "Which lawyer the outlet will retain if the material triggers a legal challenge",
              "Whether the story will run, so that the source is not left waiting on an answer",
              "How the material will be described in the piece if the source is later identified",
            ],
            correctIndex: 0,
            explanation:
              "Know where source material lives and who can reach it, and prefer not writing a name down to writing one down carefully.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What must a reporter tell sources about their employer's systems?",
            options: [
              "They are not yours",
              "That messages are retained for a fixed period and then permanently destroyed",
              "That the outlet's counsel reviews all stored source material before publication",
              "That a source's identity is protected by the same privilege that covers attorneys",
            ],
            correctIndex: 0,
            explanation:
              "Cloud drives an employer administers, chat logs, and calendar entries naming a person are all reachable by someone other than you.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What is the costliest pattern described in the source-hygiene lesson?",
            options: [
              "Becoming one faction's outlet",
              "Publishing a document before its authenticity has been established by a second party",
              "Storing sensitive files on personal devices that the newsroom cannot secure or audit",
              "Promising confidentiality to a source whose information turns out to be false",
            ],
            correctIndex: 0,
            explanation:
              "The steady flow of real stories feels like success while every source in the other faction quietly stops calling.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What catches a reporter who has become one faction's outlet?",
            options: [
              "The monthly quote audit",
              "The newsroom's annual review of published corrections and their originating sources",
              "A legal review of the outlet's exposure across the previous year of published stories",
              "A drop in audience metrics for the subject area, which signals reader distrust",
            ],
            correctIndex: 0,
            explanation:
              "That, and asking the simple question of who has stopped calling. Both are cheap and neither happens unless it is scheduled.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What does the lesson prefer over writing a source's name down carefully?",
            options: [
              "Not writing it down",
              "Encrypting the file that contains it, using a key the employer does not hold",
              "Recording it in a paper notebook rather than any system connected to a network",
              "Using an agreed code name that only the reporter and the editor can resolve",
            ],
            correctIndex: 0,
            explanation:
              "A name that was never written cannot be produced, subpoenaed, or leaked by someone with access to a system you do not control.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What example does the lesson give of a document that is accurate and also a move?",
            options: [
              "One arriving before a contract vote from a rival vendor",
              "An audit released by the agency itself on the afternoon before a public holiday",
              "A leaked draft policy circulated to reporters by an advocacy group during a session",
              "A settlement agreement obtained through a records request filed months earlier",
            ],
            correctIndex: 0,
            explanation:
              "Three weeks before the vote, from a competitor of the incumbent. Its accuracy and its usefulness to somebody are two separate questions.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What does the lesson say ends beats, alongside careless handling of material?",
            options: [
              "Being used without examining the motive",
              "Publishing a correction that names a source who had been promised confidentiality",
              "Missing deadlines often enough that the desk reassigns the subject to another reporter",
              "Covering an institution the reporter has a personal financial relationship with",
            ],
            correctIndex: 0,
            explanation:
              "Both failures are avoidable with habits rather than talent, which is why the lesson is a set of procedures.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What does the lesson say a reporter should say early to a source about future coverage?",
            options: [
              "I will report what I find and tell you before it runs",
              "I will let you review any passage in which you are quoted before the piece is filed",
              "I will not publish anything about your institution without contacting you first",
              "I will keep your name out of anything you would prefer not to be associated with",
            ],
            correctIndex: 0,
            explanation:
              "It sets the relationship as professional rather than personal, which is what lets it survive a piece the source dislikes.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "Which of the four ground-rule terms is the stated default?",
            options: [
              "On the record",
              "On background, since a source who has not agreed otherwise should not be exposed",
              "Off the record, until the reporter and source explicitly negotiate something usable",
              "Deep background, because it protects both parties while the relationship is new",
            ],
            correctIndex: 0,
            explanation:
              "Stating it at the start puts the burden on anyone who wants a different arrangement to ask before speaking.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "Why does the lesson insist the ground-rule terms be defined out loud?",
            options: [
              "The words mean different things to different people",
              "Because a verbal statement is legally binding in a way that a written one is not",
              "Because sources routinely record interviews and the definition protects the reporter",
              "Because editors require a recorded statement of terms before approving anonymity",
            ],
            correctIndex: 0,
            explanation:
              "One person's off the record is another's background. Twelve seconds of definition removes the ambiguity before it can matter.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "Where does the lesson say a reporter should record which kind of corroboration they obtained?",
            options: [
              "In the notes",
              "In the published piece, so readers can assess the strength of each confirmation",
              "In the newsroom's legal file, which is the only record protected from disclosure",
              "In the beat memo, alongside the year questions the material helps answer",
            ],
            correctIndex: 0,
            explanation:
              "Being specific about whether the second confirmation was a record, an unconnected person, or an official response is what makes it checkable later.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What does the lesson say about a source who benefits from a story you publish?",
            options: [
              "That is normal",
              "The story should be held until a source with no stake in the outcome can be found",
              "The benefit must be quantified in the piece so readers can judge its size",
              "The reporter should decline the material and seek the same facts through records",
            ],
            correctIndex: 0,
            explanation:
              "Most useful information arrives from someone who benefits. The requirement is to know which interest you are serving and to disclose it.",
            sourceLessonSlug: "source-hygiene",
          },
        ],
      },
    },
    // ── Section 4 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "signals",
      title: "13 · Signals: agendas, money, filings, people, silence",
      section: "Section 4 · Noticing before it is a story",
      body: `Emerging issues almost never announce themselves. They show up first as small changes in routine documents, which is why the beat map exists. Five signal families cover most of what a beat reporter can catch early.

**Agenda drift.** What appears on a meeting agenda that was not there before, what has been tabled three meetings running, and what moved from the regular agenda to the consent calendar. A consent calendar is where routine items are approved in a single vote without discussion, so an item that moves there is being treated as settled. Sometimes that is efficiency. Sometimes it is the last public step before something happens.

**Money.** The line that grew, the line that vanished, the emergency appropriation, the transfer between funds, the contract amended twice in a year. Budgets are the only document where an institution has to say what it intends in numbers, and comparing this year's to the last three is the single highest-yield hour on most beats.

**Filings.** Court dockets, permit applications, licensing actions, campaign finance, nonprofit tax filings, lobbying registrations. Filings are useful because they are made for another purpose entirely, which means nobody has shaped them for you.

**People.** Departures, especially clustered ones. A new position created. A vacancy left unfilled for a year. An interim who has been interim for eighteen months. Who left, and whether they left quickly, is often the earliest available signal that something inside an institution has gone wrong.

**Silence.** The report that used to come out quarterly and now does not. The indicator dropped from a dashboard. The public comment period that was not publicized. Silence is the hardest signal to see, because noticing an absence requires you to have been watching the presence, which is the argument for accumulation from lesson 1.

**What to do with a signal.** Not a story. A note in the beat file, with the date, the document, and the one question it raises. Most signals go nowhere. The ones that recur are the ones to work, and you cannot tell which is which without a written record.

:::reveal What does it mean when an item moves from the regular agenda to the consent calendar? ||| A consent calendar approves routine items in one vote without discussion, so the item is being treated as settled. It may be efficiency, and it may be the last public step before something happens.

:::reveal Why are filings a particularly reliable signal family? ||| They are made for another purpose entirely, usually a legal or regulatory one, so nobody has shaped them for a reporter's benefit.

:::reveal Why is silence the hardest signal to notice? ||| Because seeing an absence requires having watched the presence. A dropped indicator or a report that stopped appearing is invisible to anyone without accumulated history.

## Vocabulary
- **Consent calendar**: the part of a meeting agenda approved in a single vote without discussion, where routine items live.
- **Agenda drift**: change over time in what appears, what is tabled repeatedly, and what moves between agenda sections.
- **Signal**: a small change in a routine document that may indicate an emerging issue, recorded rather than reported.
- **Silence signal**: a report, indicator, or comment period that quietly stopped, visible only against accumulated history.

## Sources
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "beat-file",
      title: "14 · The beat file: from pattern to publishable",
      section: "Section 4 · Noticing before it is a story",
      body: `A beat file is the working memory of a beat. Without one, every signal from lesson 13 is forgotten inside a month and the accumulation from lesson 1 exists only in your head, where it cannot be searched, handed over, or defended.

**What it holds, in four parts.** A dated log of signals, one line each: date, document, question. A running chronology of the beat's major events with sources attached, which is what lets you write background paragraphs in two minutes instead of forty. A contact list with the next-contact dates from lesson 9. And a documents folder with the file you already downloaded, because agency websites reorganize and links die.

**The rule that makes it useful.** Every entry carries where it came from. A note that says "enrollment is down about 8 percent" is worthless in March; a note that says "enrollment down 8.1 percent from 2023 to 2024, district October count, page 4 of the board packet for 11 Nov" is a paragraph you can publish. The discipline costs ten seconds per entry and is the entire difference between a file and a pile.

**How a pattern becomes a story.** Three tests, in order. **Recurrence**: has this appeared more than twice, in more than one place? **Consequence**: can you name who is affected and how, in a sentence, without hedging? **Provability**: is there a document, a data set, or a person who can put it on the record? A pattern that fails provability is not a story yet, it is a records request and two phone calls, which is what the next course in this track is about.

**Reviewing the file is a scheduled task.** Once a month, read your own signal log from the top. This is where the connections happen, because two entries eleven weeks apart never look related at the moment either is written. Most enterprise stories on a beat come from this hour rather than from a tip.

**Portability, which nobody thinks about until they leave.** A beat file that lives only in your head means the next reporter starts at zero and the community loses years of continuity. Keeping it in a form a colleague could use is a professional obligation to the beat, not just a convenience for you. Check what your employer's policy says about who owns it, and know the answer before you need it.

:::reveal What must every beat-file entry carry, and why? ||| Where it came from: the document, the page, and the date. Without it a note is unusable months later; with it the note is a paragraph you can publish.

:::reveal Name the three tests that turn a pattern into a story, in order. ||| Recurrence, has it appeared more than twice in more than one place. Consequence, can you say who is affected and how in one sentence. Provability, is there a document, a data set, or a person who will go on the record.

:::reveal Why does reviewing the signal log monthly produce enterprise stories? ||| Because two entries eleven weeks apart never look related when either is written. Reading the log from the top is where the connection becomes visible.

## Vocabulary
- **Beat file**: the searchable working memory of a beat: a signal log, a sourced chronology, a contact list, and downloaded documents.
- **Signal log**: a dated one-line-per-entry record of date, document, and the question raised.
- **Provenance rule**: the requirement that every entry names its document, page, and date, which is what separates a file from a pile.
- **Portability**: keeping the file in a form a successor could use, so the beat's continuity outlives the reporter.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "the-week",
      title: "15 · The week: quick-turn against enterprise",
      section: "Section 4 · Noticing before it is a story",
      body: `A beat produces two kinds of work at once, and they compete for the same hours. The job is not choosing between them. It is protecting the one that always loses.

**The two modes.** Quick-turn is same-day or next-day work: the vote, the report release, the incident, the response. Enterprise is work that takes weeks and would not exist unless you made it. The Free Press Indiana posting behind this track asks for both, which is the honest description of a modern beat rather than an unusual demand.

**Why enterprise loses every week without a structure.** Quick-turn has a deadline attached and a visible consequence for missing it. Enterprise has neither until the week it publishes. So enterprise time gets spent on quick-turn, every time, unless it is a fixed block on the calendar that is defended the way a court appearance is defended.

**A workable shape for a week.** One protected enterprise block. One protected listening block from lesson 5. One hour of file review from lesson 14, monthly rather than weekly. Everything else is quick-turn and maintenance. That is not a lot of protected time, and holding even that much is harder than it sounds.

**Make quick-turn feed enterprise.** A well-held beat does not treat the two as separate budgets. Every quick-turn piece produces a signal for the file, a name for the contact list, and a document for the folder. If your daily work is not depositing into the accumulation, you are running two jobs instead of one.

**Filing enterprise, honestly.** Say early what the piece will show and what it will not, so that an editor is not sold a story that the reporting cannot support. And in an enterprise piece, publish what you could not confirm. That note is not an admission of weakness; it is the same discipline the rest of this catalog applies to sourcing, and it is the standard the capstone of this track is graded against.

**Where the rest of the track goes from here.** Records requests and appeals, reading somebody else's report, interviewing people who did not seek this, verification on deadline, the law you work inside, solutions journalism, the pitch, and a capstone that asks for one quick-turn story and one enterprise pitch on a beat you choose.

:::reveal Why does enterprise work lose to quick-turn work in an unstructured week? ||| Quick-turn carries a deadline and a visible cost for missing it. Enterprise carries neither until it publishes, so its hours get spent unless the block is defended like a court date.

:::reveal What does it mean for quick-turn work to feed enterprise work? ||| Every daily piece deposits a signal into the file, a name onto the contact list, and a document into the folder. If it does not, the reporter is running two jobs instead of one.

:::reveal What does an enterprise piece publish about its own limits? ||| What could not be confirmed. It is the same sourcing discipline the rest of the catalog applies, and it is what this track's capstone is graded against.

## Vocabulary
- **Quick-turn**: same-day or next-day reporting driven by an external event, with a deadline attached.
- **Enterprise**: reporting that takes weeks and would not exist unless the reporter originated it.
- **Protected block**: calendar time for enterprise or listening, defended against quick-turn the way a court date is defended.
- **What I could not confirm**: the published note of a piece's unresolved questions, treated as a standard rather than an admission.

## Sources
- Free Press Indiana. (n.d.). *Women and girls reporter* [Job posting]. https://www.freepressindiana.org/jobs/women-girls-reporter`,
    },
    {
      slug: "quiz-noticing",
      title: "16 · Knowledge check: noticing before it is a story",
      section: "Section 4 · Noticing before it is a story",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How do emerging issues usually first appear on a beat?",
            options: [
              "As small changes in routine documents",
              "Through a tip from a source inside the institution who wants the matter made public",
              "In the minutes of a closed session that a public body later has to release",
              "As a spike in public comment at meetings held during the institution's budget cycle",
            ],
            correctIndex: 0,
            explanation:
              "Which is exactly why the beat map's document inventory exists. Five signal families cover most of what can be caught early.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What is a consent calendar?",
            options: [
              "Items approved in one vote without discussion",
              "The published schedule of meetings a public body must hold during its fiscal year",
              "The list of items a board has agreed to defer to a future meeting for further study",
              "A record of items on which individual members have declared a conflict of interest",
            ],
            correctIndex: 0,
            explanation:
              "So an item that moves there is being treated as settled. Sometimes that is efficiency, and sometimes it is the last public step before something happens.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "Which of these is an agenda drift signal?",
            options: [
              "An item tabled three meetings running",
              "A meeting rescheduled from its usual weekday to accommodate a member's travel",
              "A public comment period that runs longer than the time allotted in the agenda",
              "A vote that splits along the same lines as the previous three votes taken",
            ],
            correctIndex: 0,
            explanation:
              "Alongside items that appear for the first time and items that move between the regular agenda and the consent calendar.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "Why does the lesson call budget comparison the highest-yield hour on most beats?",
            options: [
              "It is where intent is stated in numbers",
              "Because budget documents are the only records agencies are required to publish online",
              "Because auditors have already verified the figures, so no independent confirmation is needed",
              "Because budget votes are the only agenda items that cannot be placed on a consent calendar",
            ],
            correctIndex: 0,
            explanation:
              "Comparing this year's document to the last three exposes the line that grew, the line that vanished, and the transfer between funds.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "Which money signals does the lesson name?",
            options: [
              "Emergency appropriations and fund transfers",
              "Quarterly revenue reports and the interest rate on the institution's outstanding debt",
              "Payroll totals and the ratio of administrative staff to front-line employees",
              "Grant applications and the philanthropic pledges announced alongside them",
            ],
            correctIndex: 0,
            explanation:
              "Plus the line that grew, the line that vanished, and a contract amended twice in one year.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "Why are filings useful as a signal family?",
            options: [
              "They were made for another purpose",
              "They are published faster than any other class of government record on most beats",
              "They carry legal penalties for inaccuracy, which makes them more reliable than budgets",
              "They are indexed centrally, so a reporter can search every institution at once",
            ],
            correctIndex: 0,
            explanation:
              "Court dockets, permits, licensing actions, campaign finance, tax filings, and lobbying registrations exist for legal reasons, so nobody shaped them for a reporter.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "Which personnel change does the lesson flag as an early warning?",
            options: [
              "Clustered departures",
              "A hiring freeze announced publicly at the start of a fiscal year",
              "The retirement of a long-serving official who announced their plans in advance",
              "A reorganization that renames departments without changing reporting lines",
            ],
            correctIndex: 0,
            explanation:
              "Along with a new position created, a vacancy left unfilled for a year, and an interim who has been interim for eighteen months.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What makes the silence signal hard to see?",
            options: [
              "Noticing an absence requires having watched the presence",
              "Institutions are not required to announce when they stop publishing a data series",
              "Dropped indicators are usually replaced by a similar measure under a different name",
              "Public comment periods are advertised in legal notices that few reporters read",
            ],
            correctIndex: 0,
            explanation:
              "A report that used to come quarterly, an indicator dropped from a dashboard, a comment period not publicized. All invisible without accumulation.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What does a reporter do with a signal?",
            options: [
              "Write a note with the date, document, and question",
              "Call the institution for comment, which establishes whether the change is newsworthy",
              "Publish a short item, since routine changes are of interest to the beat's regular readers",
              "File a records request for the underlying decision before the trail goes cold",
            ],
            correctIndex: 0,
            explanation:
              "Most signals go nowhere. The ones that recur are the ones to work, and you cannot tell which is which without a written record.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "How many signal families does the lesson describe?",
            options: [
              "Five",
              "Three, corresponding to the documents, people, and calendar sections of the beat map",
              "Nine, one for each type of record listed in the beat map's document inventory",
              "Two, split between what an institution publishes and what it declines to publish",
            ],
            correctIndex: 0,
            explanation:
              "Agenda drift, money, filings, people, and silence.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What is a beat file?",
            options: [
              "The working memory of a beat",
              "The archive of every published story a reporter has filed from the subject area",
              "The newsroom's shared record of which reporter covers which institution",
              "The legal file in which source agreements and confidentiality promises are recorded",
            ],
            correctIndex: 0,
            explanation:
              "Without one, signals are forgotten inside a month and the accumulation exists only in a head, where it cannot be searched, handed over, or defended.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "Which four parts make up a beat file?",
            options: [
              "Signal log, chronology, contacts, documents",
              "Story drafts, editor notes, published clips, and reader correspondence about the beat",
              "Budget spreadsheets, meeting recordings, transcripts, and photographs from assignments",
              "Records requests, appeal letters, agency responses, and the fee waivers granted",
            ],
            correctIndex: 0,
            explanation:
              "A dated signal log, a running chronology with sources attached, a contact list with next-contact dates, and downloaded documents.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "Why does the beat file keep downloaded copies of documents?",
            options: [
              "Agency websites reorganize and links die",
              "Because records law requires a requester to retain what was released to them",
              "Because a downloaded copy carries metadata that proves when the document was created",
              "Because the newsroom's archive system cannot index documents held on external sites",
            ],
            correctIndex: 0,
            explanation:
              "A link is a promise somebody else has to keep. A file you already have is the only version you control.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What separates a beat file from a pile, per the lesson?",
            options: [
              "Every entry names where it came from",
              "Every entry has been checked by a second reporter before it is added to the log",
              "Every entry is tagged to one of the four inventories on the beat map",
              "Every entry is dated and then deleted after twelve months to limit legal exposure",
            ],
            correctIndex: 0,
            explanation:
              "Enrollment is down about 8 percent is worthless in March. Down 8.1 percent from 2023 to 2024, district October count, page 4 of the 11 Nov board packet is a publishable paragraph.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "How much does the provenance discipline cost per entry?",
            options: [
              "About ten seconds",
              "A few minutes, since each entry must be traced back to an original source document",
              "An hour per week, which is why most reporters maintain the log only during projects",
              "Nothing, because content management systems capture the source automatically",
            ],
            correctIndex: 0,
            explanation:
              "Ten seconds per entry, and it is the entire difference between a file you can publish from and a pile you cannot.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What is the first of the three tests that turn a pattern into a story?",
            options: [
              "Recurrence",
              "Consequence, because a pattern with no identifiable harm is not worth a reporter's time",
              "Provability, because nothing else matters if the material cannot be put on the record",
              "Novelty, because a pattern already covered elsewhere cannot be reported again",
            ],
            correctIndex: 0,
            explanation:
              "Has this appeared more than twice, in more than one place. Then consequence, then provability, in that order.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What does the consequence test ask?",
            options: [
              "Who is affected and how, in one sentence",
              "Whether the institution has a legal obligation that the pattern shows it is breaching",
              "How many people are affected, expressed as a share of the relevant population",
              "Whether an editor will allocate space to the story once the reporting is finished",
            ],
            correctIndex: 0,
            explanation:
              "In a sentence, without hedging. A pattern you can only describe in qualifications has not yet produced a story.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What is a pattern that fails the provability test?",
            options: [
              "A records request and two phone calls",
              "A story that should be published with the uncertainty disclosed to readers up front",
              "A note that should be deleted from the signal log so it does not mislead a successor",
              "A tip that should be handed to an investigative desk with more time to pursue it",
            ],
            correctIndex: 0,
            explanation:
              "It is not a story yet. It is the next stage of reporting, which is what the following course in this track is about.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "How often does the lesson say to read the signal log from the top?",
            options: [
              "Once a month",
              "Once a week, alongside the protected listening block described earlier in the course",
              "Once a quarter, timed to the institution's budget and reporting cycle",
              "Only when starting a new enterprise project, so the review is not wasted",
            ],
            correctIndex: 0,
            explanation:
              "This is where connections happen, because two entries eleven weeks apart never look related at the moment either is written.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "Where does the lesson say most enterprise stories on a beat come from?",
            options: [
              "The monthly file review",
              "Tips submitted by readers through the outlet's published contact channels",
              "Records requests filed speculatively against every institution on the beat map",
              "Assignments generated by editors during the newsroom's quarterly planning cycle",
            ],
            correctIndex: 0,
            explanation:
              "Rather than from a tip. The hour spent rereading your own log is where the pattern becomes visible.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "Why is a portable beat file a professional obligation?",
            options: [
              "The next reporter otherwise starts at zero",
              "Because employment agreements typically assign ownership of reporting notes to the outlet",
              "Because a file held only by one person cannot be produced if a court orders disclosure",
              "Because editors need access to verify the sourcing behind any published claim",
            ],
            correctIndex: 0,
            explanation:
              "A file that lives only in a head means the community loses years of continuity when the reporter leaves. Know your employer's ownership policy before you need it.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What are the two modes of work a beat produces?",
            options: [
              "Quick-turn and enterprise",
              "Reported pieces and analysis, distinguished by whether the reporter's judgment is visible",
              "Breaking news and features, distinguished by whether the piece is time-sensitive",
              "Original reporting and aggregation, distinguished by who gathered the underlying facts",
            ],
            correctIndex: 0,
            explanation:
              "Same-day or next-day work against work that takes weeks and would not exist unless you made it. The Free Press posting asks for both.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What is enterprise work, as the lesson defines it?",
            options: [
              "Work that would not exist unless you made it",
              "Any story longer than a set word count that the desk schedules in advance",
              "Reporting that requires a records request, as opposed to reporting done by interview",
              "A project assigned to more than one reporter and supported by a dedicated editor",
            ],
            correctIndex: 0,
            explanation:
              "It takes weeks, and nothing external triggers it, which is precisely why it loses to quick-turn without a structure.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "Why does enterprise time get spent on quick-turn work?",
            options: [
              "Only quick-turn has a deadline and a visible cost",
              "Because editors evaluate reporters on published volume rather than on originated stories",
              "Because enterprise reporting cannot proceed until records requests are answered",
              "Because quick-turn stories reach larger audiences and therefore justify the hours",
            ],
            correctIndex: 0,
            explanation:
              "Enterprise has neither until the week it publishes, so the block has to be defended the way a court appearance is defended.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "Which blocks does the lesson say a week should protect?",
            options: [
              "One enterprise, one listening, monthly file review",
              "Two enterprise blocks and a daily hour for reading the beat's incoming documents",
              "One block per institution on the beat map, rotated through across the month",
              "A full day of enterprise, which is the minimum that produces publishable progress",
            ],
            correctIndex: 0,
            explanation:
              "Everything else is quick-turn and maintenance. That is not much protected time, and holding even that is harder than it sounds.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What should every quick-turn piece deposit into the accumulation?",
            options: [
              "A signal, a name, and a document",
              "A published clip, a headline, and a note of the audience the piece reached",
              "A correction log entry, a source agreement, and a record of the ground rules used",
              "A budget line, an agenda item, and a court docket number from the same institution",
            ],
            correctIndex: 0,
            explanation:
              "If the daily work is not depositing into the file, contact list, and folder, the reporter is running two jobs instead of one.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What should a reporter say early when pitching an enterprise piece to an editor?",
            options: [
              "What it will show and what it will not",
              "How many weeks the reporting will take and what it will cost the desk in travel",
              "Which competing outlet is working the same subject and how far along they appear to be",
              "Which sources have already agreed to speak on the record about the finding",
            ],
            correctIndex: 0,
            explanation:
              "So an editor is not sold a story the reporting cannot support, which is the most common way an enterprise project collapses late.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What does an enterprise piece publish about its own limits?",
            options: [
              "What could not be confirmed",
              "The number of sources who declined to comment and the reasons each gave",
              "The records requests that were denied and the appeals still pending at publication",
              "An estimate of how much of the underlying data set remains unavailable to the public",
            ],
            correctIndex: 0,
            explanation:
              "It is the same sourcing discipline the rest of this catalog applies, and it is the standard the track's capstone is graded against.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What does the lesson say the capstone of this track asks for?",
            options: [
              "One quick-turn story and one enterprise pitch",
              "A published portfolio of five clips from a beat held for at least six months",
              "A full enterprise investigation with documents, data, and named on-record sources",
              "A beat memo and a signal log covering a full year of accumulated reporting",
            ],
            correctIndex: 0,
            explanation:
              "On a beat the learner chooses, alongside a records request, a data report read properly, two interviews, and a note on what could not be confirmed.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "Which subjects does the lesson list as the rest of the track?",
            options: [
              "Records, reports, interviews, verification, law, solutions, pitching",
              "Photography, audio production, video editing, and social platform distribution",
              "Copy editing, headline writing, search optimization, and newsletter formatting",
              "Media law, media history, media economics, and the ethics of ownership",
            ],
            correctIndex: 0,
            explanation:
              "Each is a course, and each fills a gap the existing catalog leaves on the far side of where documentation ends and reporting begins.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What does the lesson say about treating the two modes as separate budgets?",
            options: [
              "A well-held beat does not",
              "It is necessary, because enterprise and quick-turn require different editorial approval",
              "It is the only way to guarantee that enterprise hours survive a busy news cycle",
              "It is standard practice at newsrooms that staff separate investigative and daily desks",
            ],
            correctIndex: 0,
            explanation:
              "Quick-turn feeds enterprise through the file, the contact list, and the folder. Separating them doubles the work.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What does a chronology with sources attached let a reporter do?",
            options: [
              "Write background in two minutes",
              "Establish a legal record of when each fact became known to the newsroom",
              "Prove to an editor that a pattern recurred often enough to justify enterprise time",
              "Hand a complete narrative to a successor without needing to explain the beat",
            ],
            correctIndex: 0,
            explanation:
              "Instead of forty. The background paragraph is the most repeated writing task on a beat and the one a file makes nearly free.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What is quick-turn work?",
            options: [
              "Same-day or next-day reporting",
              "Any piece produced without a records request, since requests take weeks to answer",
              "Reporting filed directly to social and video platforms rather than to the main outlet",
              "Coverage of scheduled events, as distinct from coverage of unscheduled incidents",
            ],
            correctIndex: 0,
            explanation:
              "The vote, the report release, the incident, the response. It is triggered externally, which is why it always has a deadline.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What kind of entry does the signal log hold?",
            options: [
              "Date, document, question",
              "A summary of the change and the reporter's assessment of whether it is newsworthy",
              "The name of the official responsible and their response when contacted for comment",
              "A link to the source material and a tag identifying which year question it serves",
            ],
            correctIndex: 0,
            explanation:
              "One line each. The brevity is what makes the log survivable, and the date is what makes recurrence visible on review.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What does the lesson say about an interim who has been interim for eighteen months?",
            options: [
              "It is a people signal",
              "It is a records issue, since acting appointments must be renewed in writing",
              "It is a money signal, because interim salaries are drawn from a different fund",
              "It is a silence signal, because the permanent appointment was never announced",
            ],
            correctIndex: 0,
            explanation:
              "Alongside clustered departures, a new position created, and a vacancy left unfilled for a year.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What kind of document is a lobbying registration, in signal terms?",
            options: [
              "A filing",
              "A money signal, because registrations disclose the amounts paid to each lobbyist",
              "An agenda signal, because registrations list the items a lobbyist intends to raise",
              "A silence signal, because most lobbying activity is never registered at all",
            ],
            correctIndex: 0,
            explanation:
              "With court dockets, permits, licensing actions, campaign finance, and nonprofit tax filings. All made for another purpose.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What happens to signals without a written record, per the lesson?",
            options: [
              "They are forgotten inside a month",
              "They are captured anyway, because anything important recurs often enough to be noticed",
              "They are preserved in published stories, which serve as the beat's durable memory",
              "They accumulate in the reporter's contact list as questions raised with sources",
            ],
            correctIndex: 0,
            explanation:
              "And the accumulation that makes a beat valuable exists only in one head, where it cannot be searched, handed over, or defended.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What does the lesson say about who owns a beat file?",
            options: [
              "Check the employer's policy before you need to",
              "The reporter always owns notes, which is settled in every state by common law",
              "The outlet always owns them, which is why portability is a courtesy rather than a duty",
              "Ownership is irrelevant, because a file has no value outside the beat it documents",
            ],
            correctIndex: 0,
            explanation:
              "Knowing the answer in advance is part of keeping the file in a form that actually survives a departure.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "Which of these is described as the last public step before something happens?",
            options: [
              "An item moved to the consent calendar",
              "A budget amendment introduced at the final meeting of a fiscal year",
              "A personnel action taken in executive session and recorded only in the minutes",
              "A public comment period closing without any comments having been submitted",
            ],
            correctIndex: 0,
            explanation:
              "Sometimes it is efficiency. The point is that the move itself is the observable event, and only a reporter tracking agendas sees it.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "How does the lesson describe the difficulty of holding protected time?",
            options: [
              "Harder than it sounds",
              "Impossible in a newsroom that expects daily filing, which is why beats need two reporters",
              "Straightforward once an editor has approved the schedule at the start of a quarter",
              "A matter of personal discipline rather than structure, since calendars cannot be enforced",
            ],
            correctIndex: 0,
            explanation:
              "One enterprise block, one listening block, and a monthly file review is not much time, and even that much gets eaten.",
            sourceLessonSlug: "the-week",
          },
        ],
      },
    },
    {
      slug: "final-what-a-beat-is",
      title: "17 · Final: what a beat is",
      section: "Section 4 · Noticing before it is a story",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "A beat tells you what to know. What does an assignment tell you?",
            options: [
              "What to produce",
              "Which institutions on the beat map hold authority over the subject you are covering",
              "How long the accumulated history of the subject must be before you may write",
              "Which ground rules the source has agreed to before the interview begins",
            ],
            correctIndex: 0,
            explanation:
              "And it ends when you file. The beat's responsibility does not, which is the whole distinction.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What is the product of a beat, and what are the stories?",
            options: [
              "The accumulation, and withdrawals from it",
              "The published archive, and the raw notes that support each piece within it",
              "The source list, and the interviews conducted to keep each relationship current",
              "The beat memo, and the quarterly revisions that keep its scope honest",
            ],
            correctIndex: 0,
            explanation:
              "Budgets, departures, vendors, and dropped indicators pile up. Each story draws on that balance.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Why does this course carry a disclosure in its first lesson?",
            options: [
              "The track teaches disclosure",
              "Because the author was required to declare outside work under the outlet's ethics policy",
              "Because the Indiana Girl Report's reuse terms require an affiliation statement",
              "Because the Free Press Indiana posting is quoted at length under fair use",
            ],
            correctIndex: 0,
            explanation:
              "The author does documentation work for the organization Free Press Indiana sits under. FPI has not reviewed, endorsed, or sponsored the course.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Which four inventories make up a beat map?",
            options: [
              "Institutions, documents, people, calendar",
              "Budgets, contracts, dockets, and filings, grouped by the body that produces each one",
              "Officials, advocates, experts, and affected people, grouped by source category",
              "Agendas, minutes, audits, and inspections, ordered by how often each is published",
            ],
            correctIndex: 0,
            explanation:
              "Each takes an afternoon to build and is maintained permanently. Together they draw the territory before you try to hold it.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "In the institution inventory, who gets written down?",
            options: [
              "Whoever has authority to act",
              "Whichever body publishes the most material about the subject in a typical month",
              "The officials who have historically been most responsive to reporters on the beat",
              "The agencies with statutory obligations to publish data about the subject area",
            ],
            correctIndex: 0,
            explanation:
              "Not who talks about it most. Building a beat around the talkers means covering announcements rather than decisions.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Why does a beat map include the staff who compile published numbers?",
            options: [
              "They know which figures are soft",
              "They control when a data set is released and can be asked to accelerate publication",
              "They are exempt from the confidentiality rules that bind policy staff at the same agency",
              "They are the only staff a records request can compel to produce underlying files",
            ],
            correctIndex: 0,
            explanation:
              "Estimates, suppressions, and definitional edges never appear in the published table. Whoever assembled it knows them.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "What does a beat calendar do for a reporter?",
            options: [
              "Turns reactive into early",
              "Guarantees that no public meeting on the beat goes uncovered during the year",
              "Documents the reporter's attendance for the newsroom's annual performance review",
              "Ensures the beat's institutions publish their records within statutory deadlines",
            ],
            correctIndex: 0,
            explanation:
              "Knowing when a document will exist lets you report in the four weeks before it lands rather than the four hours after.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Which line in a beat memo does the course call the most load bearing?",
            options: [
              "What is out of scope",
              "The measurement plan that defines what counts as adequate coverage at year end",
              "The list of year questions, which is where the enterprise stories come from",
              "The named communities the reporter commits to covering during the year",
            ],
            correctIndex: 0,
            explanation:
              "Without a boundary a beat becomes general assignment with a nameplate, and the accumulation never happens.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What distinguishes a beat question from a topic?",
            options: [
              "It implies a document, a denominator, and a person",
              "It concerns a single institution rather than the whole subject area",
              "It can be answered within one news cycle without a records request",
              "It has been agreed with an editor before the reporting year begins",
            ],
            correctIndex: 0,
            explanation:
              "Transportation is a topic. Whether the transportation contract costs more per student than neighboring districts is a question you can work.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "How often should a beat memo be revised?",
            options: [
              "Twice a year",
              "Annually, in line with the newsroom's editorial planning and budget cycle",
              "Whenever a year question is answered, so the memo always holds three open ones",
              "Never after the first draft, so that the year's commitments stay fixed and checkable",
            ],
            correctIndex: 0,
            explanation:
              "A memo written once describes a beat that no longer exists, and the revision is where an unanswerable question gets honestly recorded.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What is community listening?",
            options: [
              "Time with no story, deadline, or ask",
              "A series of interviews conducted before a project's reporting formally begins",
              "A public forum hosted by the outlet to gather reader concerns about a subject",
              "Attendance at every public meeting held by institutions on the beat map",
            ],
            correctIndex: 0,
            explanation:
              "You go where people already gather and stay long enough to hear what they raise when no reporter is steering.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "How many listening sessions with girls did the 2025 Indiana Girl Report run?",
            options: [
              "91",
              "About 300, one in each Indiana school district that agreed to participate",
              "None, since the report is compiled from secondary administrative data only",
              "Around 1,500, sampled to be representative of Indiana girls statewide",
            ],
            correctIndex: 0,
            explanation:
              "Plus feedback from 130 adults across the state, reported on page 7 alongside the statewide data.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What can listening sessions support, and what can they not?",
            options: [
              "Themes, not shares",
              "Trends over time, but not comparisons between different regions of a state",
              "Individual accounts, but not any conclusion about what a population experiences",
              "Official positions, but nothing about how policy is experienced by affected people",
            ],
            correctIndex: 0,
            explanation:
              "They surface what a population raises, including things no data set contains. They are not a probability sample, so no share follows from them.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What is the default record status of remarks heard while listening?",
            options: [
              "Not on the record",
              "On background, since the setting is public but the speakers are private individuals",
              "On the record, provided the reporter identified themselves when they arrived",
              "Off the record only for minors, and on the record for every adult present",
            ],
            correctIndex: 0,
            explanation:
              "Using something requires a separate conversation opened there and then. Assuming otherwise ends access to that room permanently.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What produces the pattern of the same few sources being quoted repeatedly?",
            options: [
              "Small conveniences adding up",
              "An explicit newsroom policy preferring named officials to private individuals",
              "Legal advice to limit quotation of people who have not consented in writing",
              "Reader engagement data showing that recognizable names perform better",
            ],
            correctIndex: 0,
            explanation:
              "They answer, they speak in publishable sentences, they have a citable title, and they are free during business hours.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What does the 2025 Indiana Girl Report say on page 27 about its own data?",
            options: [
              "It is not yet free from gender bias",
              "That the figures were independently verified by the state agencies that supplied them",
              "That the sample sizes are too small for county-level comparison to be meaningful",
              "That the report should not be cited without written permission from the publishers",
            ],
            correctIndex: 0,
            explanation:
              "It says gender gaps exist in data and collection, that efforts were made to limit bias, and that the limitation is an additional data point rather than a dismissal.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What happens to every table built from an undercounted collection?",
            options: [
              "It inherits the undercount",
              "It gains a wider confidence interval that the publisher is obliged to report",
              "It becomes unusable and should be excluded from any reporting on the subject",
              "It is corrected by weighting, which is standard practice for administrative data",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a publisher naming its own collection gaps is telling a reporter exactly where to look.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What does the monthly quote audit count?",
            options: [
              "Officials, advocates, experts, affected",
              "Total sources per story, to check that no piece relies on a single account",
              "Named versus unnamed sources, to track the outlet's use of anonymity over time",
              "Sources by institution, to check that no single agency dominates the coverage",
            ],
            correctIndex: 0,
            explanation:
              "If affected people are under a quarter of the month's quotes, that is the finding, and the fix is a calendar entry.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What is the tell that a relationship with a community has become extractive?",
            options: [
              "Visits and stories are the same number",
              "Sources begin routing the reporter through an official spokesperson before speaking",
              "The outlet receives complaints about accuracy from more than one person in the community",
              "Community members ask to review quotations before the piece is published",
            ],
            correctIndex: 0,
            explanation:
              "If every visit produced a story, then everything you have ever done there was collection.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What does equal trust explicitly not include?",
            options: [
              "Copy approval",
              "Advance notice to a source that a piece naming them is about to publish",
              "Reachability by phone after publication, which most beats cannot sustain",
              "Coverage of positive outcomes at the same level of seriousness as negative ones",
            ],
            correctIndex: 0,
            explanation:
              "A reporter who implies otherwise is buying access with a promise they will break. Predictability is what can honestly be offered instead.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "Why is predictability a stronger offer than sympathy?",
            options: [
              "It survives a story they hate",
              "It can be documented in writing, which makes it enforceable if the reporter breaches it",
              "It shortens the time needed to secure an interview during a breaking situation",
              "It transfers accountability for the piece from the reporter to the editing desk",
            ],
            correctIndex: 0,
            explanation:
              "A source who can forecast your behavior keeps talking to you after a piece they hated. Shared feeling does not hold up that far.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What does the lesson call the only currency journalism has that a reader can verify?",
            options: [
              "A correction",
              "An on-record source, whose statements a reader can independently check",
              "A published document, linked so readers can read the primary material themselves",
              "A disclosure, which tells readers what interests the reporter holds",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the repair after a wrong story is a prompt public correction rather than a private apology.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "Which three conditions have to be true before a source calls with something serious?",
            options: [
              "They know you, have watched you, can reach you",
              "They trust the outlet, have read your recent work, and believe the story will change policy",
              "They have legal protection, employer permission, and a documented record of the events",
              "They have been quoted before, have a stake in the outcome, and want the matter public",
            ],
            correctIndex: 0,
            explanation:
              "None of the three can be arranged in the week the thing happens, which is why keeping sources is scheduled work.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "Which source category does the course say reporters neglect worst?",
            options: [
              "Mid-level staff",
              "Former officials, whose recollections are treated as too dated to be reliable",
              "Advocacy organizations, which reporters avoid to keep coverage neutral",
              "Vendors and contractors, whose commercial interests complicate attribution",
            ],
            correctIndex: 0,
            explanation:
              "They are unauthorized to speak, they know how decisions were actually made, and they will not start talking during a crisis.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What is the rule about a source and the story that names them?",
            options: [
              "Never let them find out from the story",
              "Never name a source who was first approached during an unrelated listening session",
              "Never publish a name without a second source confirming the same account",
              "Never contact a source in advance, because it gives the institution time to respond",
            ],
            correctIndex: 0,
            explanation:
              "One uncomfortable call in advance is the strongest signal of predictability available, and it costs almost nothing.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What is on background, as this course defines it?",
            options: [
              "Usable, attributed to an agreed description",
              "Usable only as the reporter's own knowledge, with no attribution of any kind",
              "Unpublishable, and used only to steer the reporting toward obtainable material",
              "Usable after a fixed embargo period agreed with the source in advance",
            ],
            correctIndex: 0,
            explanation:
              "And the exact wording of that description is agreed before the information is given, not afterward.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What is a source doing when they declare a past remark off the record?",
            options: [
              "Asking a favor",
              "Invoking a right that state shield statutes grant to any person interviewed",
              "Withdrawing consent, which obliges the reporter to strike the material",
              "Renegotiating terms, which requires the editor's approval to accept or refuse",
            ],
            correctIndex: 0,
            explanation:
              "Ground rules cannot be applied retroactively. A beat reporter often should grant it, but should name what is happening.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What did the Supreme Court decide in Cohen v. Cowles Media Co.?",
            options: [
              "The First Amendment does not bar the claim",
              "That a source who is named after a promise of anonymity has no remedy in state law",
              "That reporters, but not their employers, may be held to promises of confidentiality",
              "That confidentiality promises are enforceable only when they are made in writing",
            ],
            correctIndex: 0,
            explanation:
              "The 1991 decision holds that generally applicable law, here promissory estoppel, can apply to the press like anyone else.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What does off the record govern, and what does it not?",
            options: [
              "Publication, not compulsion",
              "Attribution, but not whether the material may be used to inform other reporting",
              "The reporter's conduct, but not the conduct of editors at the same outlet",
              "The current story, but not any future story on the same subject",
            ],
            correctIndex: 0,
            explanation:
              "Whether you can be compelled to reveal something is a separate body of law that differs by state, taught later in this track.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What three questions make up the motive check?",
            options: [
              "Why them, why now, what it costs them",
              "What it proves, who disputes it, and which document would settle the dispute",
              "Who else has the material, when they got it, and whether they have published it",
              "Whether it is true, whether it is new, and whether anyone is harmed by publication",
            ],
            correctIndex: 0,
            explanation:
              "Written down. A self-interested source is normal, and not knowing which interest you serve is the failure.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "A leaker supplies a document and someone to confirm it. How many sources is that?",
            options: [
              "One",
              "Two, since the confirming person is a separate individual with separate knowledge",
              "Two, provided the confirming person agrees to be quoted on the record",
              "Three, because the document itself is independent evidence of the same claim",
            ],
            correctIndex: 0,
            explanation:
              "Both travel through the same interest. Independent means a record, an unconnected person, or an official response.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What is the other side test?",
            options: [
              "Would I run this from the opposing party",
              "Would the institution's lawyers accept the document as authentic if challenged",
              "Would a second newsroom reach the same conclusion from the same material",
              "Would the source stand behind the material if their name were published",
            ],
            correctIndex: 0,
            explanation:
              "If the answer is no, then the fight is the story rather than the document, and both belong in the piece.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What is the costliest source pattern named in the course?",
            options: [
              "Becoming one faction's outlet",
              "Relying on documents without ever speaking to the people they describe",
              "Promising confidentiality more often than the newsroom's policy permits",
              "Publishing material from a source whose motive was disclosed to readers",
            ],
            correctIndex: 0,
            explanation:
              "The steady flow of real stories feels like success while every source in the other faction quietly stops calling.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What does an item moving to the consent calendar signal?",
            options: [
              "It is being treated as settled",
              "It has been withdrawn from consideration until a later meeting of the same body",
              "It requires a supermajority, which is why it is separated from the regular agenda",
              "It was added after the notice deadline and so cannot be discussed publicly",
            ],
            correctIndex: 0,
            explanation:
              "A consent calendar approves routine items in a single vote without discussion. Sometimes efficiency, sometimes the last public step.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "Why is silence the hardest signal family to see?",
            options: [
              "An absence is only visible against a presence",
              "Institutions are legally permitted to stop publishing any voluntary data series",
              "Dropped indicators are usually replaced under a new name in the same dashboard",
              "Comment periods are advertised in legal notices that reporters rarely receive",
            ],
            correctIndex: 0,
            explanation:
              "A report that stopped, an indicator dropped, a comment period not publicized. All invisible without the accumulation lesson 1 describes.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What does a reporter do with a signal?",
            options: [
              "Log it: date, document, question",
              "Request comment, since the institution's response determines whether it is newsworthy",
              "File a records request immediately, before the underlying decision trail goes cold",
              "Publish a brief item, because beat readers value early notice of routine changes",
            ],
            correctIndex: 0,
            explanation:
              "Most signals go nowhere. Only a written record shows which ones recur, and recurrence is the first story test.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What separates a beat file from a pile?",
            options: [
              "Every entry names its source",
              "Every entry has been verified against a second document before it is recorded",
              "Every entry is reviewed by an editor during the newsroom's monthly planning session",
              "Every entry is tagged to one of the year questions in the reporter's beat memo",
            ],
            correctIndex: 0,
            explanation:
              "Document, page, and date. Ten seconds per entry, and it is the difference between a note and a publishable paragraph.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "Name the three tests that turn a pattern into a story, in order.",
            options: [
              "Recurrence, consequence, provability",
              "Novelty, audience interest, and the availability of an on-record source to quote",
              "Provability, recurrence, and whether a competing outlet has already published it",
              "Consequence, cost, and whether the reporting fits within the desk's schedule",
            ],
            correctIndex: 0,
            explanation:
              "A pattern that fails provability is not a story yet. It is a records request and two phone calls.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "Why does enterprise work lose to quick-turn work without a structure?",
            options: [
              "Only quick-turn has a deadline",
              "Because enterprise reporting depends on records that arrive on the agency's schedule",
              "Because editors judge reporters on volume, which quick-turn work produces faster",
              "Because enterprise work requires travel budgets that most desks no longer approve",
            ],
            correctIndex: 0,
            explanation:
              "Enterprise carries no visible cost for slipping until the week it publishes, so its hours have to be defended like a court date.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What should each quick-turn piece deposit into the accumulation?",
            options: [
              "A signal, a name, a document",
              "A clip, a headline, and the audience figures the piece generated in its first week",
              "A correction record, a ground-rules note, and a list of sources who declined",
              "A budget line, a docket number, and a copy of the agenda it was drawn from",
            ],
            correctIndex: 0,
            explanation:
              "If the daily work is not feeding the file, the contact list, and the folder, the reporter is running two jobs instead of one.",
            sourceLessonSlug: "the-week",
          },
        ],
      },
    },
  ],
};
