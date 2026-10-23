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

**A disclosure, on page one, because this track teaches disclosure.** The author is a **Documenter with the Indianapolis Documenters program run by Mirror Indy**, a Free Press Indiana newsroom (program: https://indianapolis-in.documenters.org/). That is a real, ongoing relationship with the organization whose job posting prompted this track, and naming it is the point: a vague disclosure ("does documentation work for a related organization") is the kind a reader cannot check, which makes it decoration rather than disclosure. Neither Mirror Indy nor Free Press Indiana has reviewed, endorsed, or sponsored this course, and neither was asked to. The job posting and the 2025 Indiana Girl Report are cited here as public documents, nothing more. That line exists because the Society of Professional Journalists asks journalists to avoid conflicts real or perceived, and to disclose the unavoidable ones (Society of Professional Journalists, 2014). A journalism course that quietly skipped its own would be teaching one thing and doing another.

:::reveal What can a reporter with a beat do that a reporter parachuted into the same subject cannot? ||| Notice. Telling a change from a constant requires a baseline, and the baseline is the accumulated history a beat produces. The parachuted reporter can still report the situation in front of them well.

:::reveal Why does a beat look like waste when you measure a week in published pieces? ||| Because most of the work is accumulation: meetings that produce nothing, budgets read for one line, sources kept warm. It pays off in the week you have a story nobody else can see, which is not the week you did the reading.

## Vocabulary
- **Beat**: a defined territory a reporter is responsible for knowing over time, rather than a single assignment with an end.
- **Accumulation**: the running history of a beat, budgets, departures, vendors, and dropped indicators, which is what makes a change visible as a change.
- **Parachute coverage**: reporting produced by someone dropped into an unfamiliar subject for one piece, capable of quality but not of noticing.
- **Disclosure**: naming a relationship or stake that a reader could reasonably want to weigh, before they ask.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/
- Mirror Indy. (n.d.). *Indianapolis Documenters*. https://indianapolis-in.documenters.org/`,
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
              "What to know, a responsibility that does not lapse when you file the piece",
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
              "The accumulation, the running history from which individual stories are withdrawn",
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
              "Because it has no baseline, so a change cannot be told apart from a constant",
              "Because newsroom archives are paywalled and searching them costs time on deadline",
              "Because agencies deliberately time announcements for when experienced reporters are away",
              "Because press releases are written to look like independently reported news",
            ],
            correctIndex: 0,
            explanation:
              "Telling a change from a constant requires knowing the constant. Without a baseline every press release looks equally like news.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What is the second value the lesson gives for accumulated beat knowledge?",
            options: [
              "Speed, because on deadline you already know who the deputy director is",
              "Access to embargoed documents",
              "A reduced need to seek comment, because the pattern already establishes the point",
              "Publishing without an editor's review",
            ],
            correctIndex: 0,
            explanation:
              "The fifteen minutes you do not spend working out who the deputy director is are the fifteen minutes you spend calling her.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What does the lesson name as the third value of accumulation?",
            options: [
              "Sources who take your call, because you are a known quantity rather than a stranger",
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
              "Notice a change, since telling a change from a constant requires a baseline",
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
              "Because the track teaches disclosure, so it names the author's own stake first",
              "Because Free Press Indiana reviewed the course outline and asked for it",
              "Because the organization sponsors the track and it must be labeled as advertising",
              "Because the job posting is reproduced in full later in the course under a licensing agreement",
            ],
            correctIndex: 0,
            explanation:
              "The SPJ code asks journalists to avoid conflicts real or perceived and disclose the unavoidable ones. A course that skipped its own would teach one thing and do another.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Which organization is the author a Documenter for, and what is it?",
            options: [
              "Mirror Indy, the Free Press Indiana newsroom that runs the Indianapolis Documenters program",
              "Free Press Indiana directly, as a contracted reporter on the women and girls beat",
              "The Indiana Youth Institute, which publishes the annual Girl Report cited in this track",
              "The Society of Professional Journalists, whose ethics code the disclosure quotes",
            ],
            correctIndex: 0,
            explanation:
              "Through the Indianapolis Documenters program. Naming the specific newsroom is the point: the reader can go and check it.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Why is a vague disclosure worse than a specific one?",
            options: [
              "A reader cannot check it, which makes it decoration rather than disclosure",
              "It takes up space better spent on the reporting method",
              "Editors must reject any disclosure that names no legal entity",
              "It implies the relationship is larger and more commercially significant than it really is",
            ],
            correctIndex: 0,
            explanation:
              "An unverifiable disclosure is decoration. Naming the newsroom and linking the program is what turns it into something a reader can test.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What does the disclosure say Free Press Indiana has done regarding this course?",
            options: [
              "Nothing; neither it nor Mirror Indy reviewed, endorsed, or sponsored this course",
              "Reviewed the curriculum against its own training standards",
              "Agreed to consider the track's graduates for openings",
              "Licensed its job posting to the course",
            ],
            correctIndex: 0,
            explanation:
              "The line states plainly that it has not reviewed, endorsed, or sponsored the course. Its posting is cited as a public document, nothing more.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "How does the lesson describe the cost side of holding a beat?",
            options: [
              "Time spent on things that never become stories, like meetings that produce nothing",
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
              "An end; a beat's responsibility does not lapse when the reporter files",
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
              "A number the agency stopped publishing, like the one the lesson dates to 2023",
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
              "A territory you hold over time, rather than a story you are assigned",
              "A rotating assignment desk shared by reporters",
              "A contractual specialization that sets pay grade",
              "A subject assigned for one enterprise project",
            ],
            correctIndex: 0,
            explanation:
              "A defined piece of the world you are responsible for knowing better than anyone who does not work inside it.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Which four inventories make up a beat map?",
            options: [
              "Institutions, documents, people, and the calendar, each maintained after it is built",
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
              "Whoever has authority to actually do the thing, not who talks about it most",
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
              "Knowing what exists, so you know which document would answer a question",
              "Reading every scheduled publication before the year begins",
              "Building an archive of every record ever released",
              "Establishing which documents counsel has cleared",
            ],
            correctIndex: 0,
            explanation:
              "Not to read all of it. To know which document would answer a question, so the question can be answered when it arises.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Which three groups of people does the lesson say reporters routinely miss?",
            options: [
              "Former employees, people the institution acts upon, and the staff who compile numbers",
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
              "They assemble the published figures, and so they know which of them are soft",
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
              "From reactive to early, reporting in the four weeks before a document exists",
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
              "Contract renewals, which recur on a schedule like budget season and testing windows",
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
              "Meeting notice requirements, since public bodies must give advance notice",
              "The state register's schedule for publishing proposed rules",
              "The federal fiscal calendar for agency budget requests",
              "The newsroom's own editorial calendar for the quarter",
            ],
            correctIndex: 0,
            explanation:
              "Public bodies generally must give advance public notice of meetings. The specific rule is state law and it varies.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Which resource does the lesson point to for the fifty-state open government picture?",
            options: [
              "The Reporters Committee for Freedom of the Press Open Government Guide",
              "The SPJ's annual survey of state transparency rankings",
              "The NCSL database of state public meeting statutes",
              "The federal OGIS reports on state compliance",
            ],
            correctIndex: 0,
            explanation:
              "The Reporters Committee for Freedom of the Press maintains a state-by-state guide, and finding your own state's chapter is the first homework.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Which documents does the beat map's document inventory include?",
            options: [
              "Contracts and the bid documents behind them, along with audits and inspection reports",
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
              "An afternoon each, after which the inventory is maintained forever",
              "A full reporting quarter, because each one depends on records requests being answered",
              "The first year, once sources trust you",
              "Two weeks of desk research per inventory",
            ],
            correctIndex: 0,
            explanation:
              "The build is short. The maintenance is permanent, which is the part that separates a held beat from a job title.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "How long is a beat memo, and who is it written for?",
            options: [
              "Two pages, written for yourself and then shared with an editor",
              "A ten-page annual plan for leadership",
              "A one-line entry in the newsroom's content management system alongside the beat name",
              "A public page describing the beat",
            ],
            correctIndex: 0,
            explanation:
              "Short enough to actually revise, and shared so that the scope is a shared commitment rather than a private intention.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "Which line does the lesson call the most load bearing in a beat memo?",
            options: [
              "The out-of-scope sentence, saying what the beat does not cover and who does",
              "The list of institutions with formal authority over the subject",
              "The measurement plan for assessing coverage at year end",
              "The named communities the reporter will be accountable to",
            ],
            correctIndex: 0,
            explanation:
              "A beat with no stated boundary expands under deadline pressure into general assignment with a nameplate, and the accumulation never happens.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "How many year questions does the lesson recommend a beat memo carry?",
            options: [
              "Three or four, chosen because they are consequential and answerable",
              "One for each institution on the beat map",
              "Between ten and fifteen, as fallbacks when a line goes cold",
              "As many as the editor assigns each year",
            ],
            correctIndex: 0,
            explanation:
              "Chosen because they are consequential and answerable. Three or four will structure a year and produce enterprise stories as a byproduct.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What separates a beat question from a topic?",
            options: [
              "It implies a specific document, a denominator, and a person who has to answer",
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
              "It names no one, and a named community is checkable while a good intention is not",
              "It exceeds the reporter's authority, which belongs to the newsroom",
              "It creates a legal obligation counsel would have to review",
              "It duplicates the out-of-scope sentence",
            ],
            correctIndex: 0,
            explanation:
              "A name in a memo is checkable twelve months later. A good intention is not, which is why the communities get written down specifically.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "How often does the lesson say a beat memo should be revised?",
            options: [
              "Twice a year, since a memo never reopened describes a beat that no longer exists",
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
              "Information rather than failure, to be admitted at the twice-yearly revision",
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
              "General assignment with a nameplate, because every beat expands under pressure",
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
              "Whether, twelve months on, the beat was covered rather than merely attended",
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
              "Relationships built on equal trust, with travel across the state as part of the job",
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
              "Institutions that talk about women and girls, rather than women and girls themselves",
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
              "A beat, with a stated scope, year questions, inventories, and named communities",
              "A promotion, by documenting the reporter's specialization for a future performance review",
              "A contract committing the newsroom to fund travel and records fees",
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
              "The county council, listed with the district board, state board, and union",
              "The federal Department of Education, which conditions formula funding on local compliance",
              "The state attorney general, who reviews large district contracts",
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
              "It asks journalists to avoid conflicts real or perceived and disclose unavoidable ones",
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
              "An individual story, drawn out of the accumulated history the beat keeps",
              "The maintained document inventory, which is rebuilt from scratch each reporting year",
              "The beat calendar, which the planning desk consumes rather than the reporter",
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
              "Find your own state's chapter of the RCFP fifty-state open government guide",
              "Introduce yourself to every public information officer",
              "File a test records request with each institution",
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
              "What is deliberately left out of the beat, and here is who does cover it",
              "The number of stories the reporter commits to filing from the subject each month",
              "The names of the editors who will review each piece before it reaches publication",
              "The travel budget required to reach the communities the beat is accountable to",
            ],
            correctIndex: 0,
            explanation:
              "And ideally who does cover it instead, so the boundary is a redirection rather than a refusal.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What does the lesson say a beat reporter does with a five-year capital plan?",
            options: [
              "Reads the whole thing for the one line that matters to the beat",
              "Summarizes it for readers whenever it is revised",
              "Files a records request for the working papers behind each projection it contains",
              "Compares it against neighboring jurisdictions to establish whether spending is unusual",
            ],
            correctIndex: 0,
            explanation:
              "It is given as an example of the cost side of a beat: hours spent on documents that produce nothing this week and pay off later.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What does the document inventory NOT require a reporter to do?",
            options: [
              "Read all of it; the inventory exists to know what is there",
              "Record where each scheduled publication lands once it has been released",
              "Include filings made to bodies outside the beat's own institutions",
              "Update the list when an institution changes what it publishes",
            ],
            correctIndex: 0,
            explanation:
              "The point is knowing what exists, so that when a question arises you already know which document would answer it.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "Which group on a beat map is described as free to speak?",
            options: [
              "Former employees, the people who used to work there",
              "Technical staff, because compiling published figures is a non-policy function",
              "Elected officials, because their statements are privileged while in office",
              "People the institution acts upon, because they have no employment relationship with it",
            ],
            correctIndex: 0,
            explanation:
              "They are one of the three groups the lesson says reporters routinely leave off the map, alongside affected people and the staff who compile the numbers.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "What form do the four inventories take inside the beat memo?",
            options: [
              "Lists, carried over from the lesson 2 beat map",
              "Narrative sections explaining why each institution matters to the year questions",
              "A single diagram showing how each body's authority connects to the others",
              "Appendices held separately from the memo",
            ],
            correctIndex: 0,
            explanation:
              "The memo carries the scope sentence, the year questions, the four inventories in list form, the named communities, and the measurement plan.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What does a beat calendar let a reporter begin four weeks before a document exists?",
            options: [
              "Reporting, rather than starting in the four hours after it is out",
              "Editing, since the piece can be drafted once the release date is known",
              "Negotiating an embargo with the body that will publish the document",
              "Filing a records request for the draft version circulating internally",
            ],
            correctIndex: 0,
            explanation:
              "That is the whole conversion from reactive to early: the alternative is starting in the four hours after it lands.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "What does the lesson say a beat memo is the difference between?",
            options: [
              "Having a beat and having a job title",
              "A reporter who files daily and a reporter who originates enterprise projects",
              "A subject an editor assigned and a subject the reporter chose for themselves",
              "A beat that is measured at year end and one that is never formally reviewed",
            ],
            correctIndex: 0,
            explanation:
              "One document, two pages, written for yourself and shared with an editor, and revised twice a year.",
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
              "No story, no deadline, and nothing to ask for; you go where people already gather",
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
              "The agenda: what people raise unprompted, in what order, and with what heat",
              "Contact details for later on-the-record interviews",
              "Usable quotes for a story already assigned",
              "Documents residents obtained from the institutions",
            ],
            correctIndex: 0,
            explanation:
              "What people raise unprompted, in what order, with what heat. Not quotes, and not sources for a piece you already have.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "How does listening differ in direction from interviewing?",
            options: [
              "The story comes out of what you hear, instead of being selected in advance",
              "It is recorded rather than written down, so the material can be verified afterward",
              "It happens on the source's schedule, which interviews never do",
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
              "130 adults from across the state",
              "About 4,000, surveyed by telephone using a sampling frame weighted to the state population",
              "Only the advisory board",
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
              "Themes that no state data set contains, such as social connection",
              "The share of Indiana girls who struggle with friendships",
              "An urban versus rural comparison of girls' outcomes",
              "A trend line since the prior year",
            ],
            correctIndex: 0,
            explanation:
              "They surface what a population raises, including things no state data set contains. They are not a probability sample, so they cannot carry a share.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What mistake does a reporter make by dismissing listening-session findings because they are not a survey?",
            options: [
              "Throwing away the only account of what girls actually raised",
              "Violating the publisher's citation terms, which require the qualitative work to be reported",
              "Confusing a probability sample with a census",
              "Assuming administrative data has no margin of error",
            ],
            correctIndex: 0,
            explanation:
              "There are two symmetrical errors: reading listening sessions as a survey, and throwing them away because they are not one.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What is the default record status of something heard in a listening setting?",
            options: [
              "Not on the record; using it means a separate conversation opened there and then",
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
              "Say who you are and where you work, every time, without being asked",
              "Identify yourself only if asked, so that the conversation is not distorted by your presence",
              "Introduce yourself to the organizers, who tell attendees",
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
              "Confirmation of the stories it already thought of, rather than new ones",
              "More accurate but less representative coverage",
              "Faster work that is harder to defend legally",
              "A source list dominated by unnamed people",
            ],
            correctIndex: 0,
            explanation:
              "Because an interview subject is selected to fit a story that already exists, the method can only confirm, never originate.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "Which places does the lesson name as listening settings?",
            options: [
              "A parent group, a shift change, a church basement, a county extension office",
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
              "Small conveniences adding up to a pattern nobody chose",
              "A deliberate policy favoring named officials",
              "Legal caution, since quoting private individuals raises the outlet's defamation exposure",
              "Reader demand, measured by engagement",
            ],
            correctIndex: 0,
            explanation:
              "They answer, they speak in publishable sentences, they have a citable title, they are free in business hours. The result looks like a judgment nobody made.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "Why does business-hours availability skew a beat's sources?",
            options: [
              "Because that is when reporters work and when hourly workers cannot talk",
              "Because agencies schedule announcements to clash with community meetings",
              "Because records offices close early",
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
              "That despite its efforts, it is not yet possible to present data free from it",
              "That its own tables achieve it",
              "That the problem is specific to Indiana",
              "That it affects surveys but not administrative records",
            ],
            correctIndex: 0,
            explanation:
              "It says efforts were made to limit gender bias and that it is not yet possible to present data that is free of it. A publisher saying that in its own voice is rare.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "How does the report say its limitations should be viewed?",
            options: [
              "As an additional data point, not a reason to dismiss the data",
              "As grounds for treating every figure in the document as provisional until reconfirmed",
              "As a disclaimer required by the funders rather than a substantive finding about the data",
              "As a reason to prefer the listening sessions",
            ],
            correctIndex: 0,
            explanation:
              "The report is explicit that the limitations do not dismiss what the data shows. They are a lens through which to read it.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What follows for a table built from an undercounted collection?",
            options: [
              "It inherits the undercount, as does every other table built from that collection",
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
              "Affected people making up under a quarter of everyone quoted that month",
              "Any source quoted in over three pieces a month",
              "Over half of quotes from inside the state capital",
              "Fewer than two sources in any single story",
            ],
            correctIndex: 0,
            explanation:
              "If people the institution acts upon are under a quarter of the month's quotes, that is the finding, and the next step is putting an unquoted group on the calendar.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "Why is scheduling around a source's availability not merely a courtesy?",
            options: [
              "It is the difference between a beat that includes them and a beat that does not",
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
              "Every individual story; it governs the distribution across a month of work",
              "The sources needed to publish an allegation",
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
              "Someone relentless about building relationships built on equal trust",
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
              "Appear when something bad happens, collect, publish, and not be seen again",
              "Quoting the easiest officials over and over",
              "Publishing without seeking comment from those affected",
              "Relying on advocates to introduce every source",
            ],
            correctIndex: 0,
            explanation:
              "Every step is individually defensible. The pattern teaches a community that journalists arrive to take.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What is the tell that a reporter has become extractive toward a place?",
            options: [
              "The number of visits there is close to the number of stories from there",
              "Most sources from there decline to be named",
              "The outlet receives more complaints from that place than from the rest of the beat",
              "Residents refer you to a spokesperson",
            ],
            correctIndex: 0,
            explanation:
              "Count them. If every visit produced a story, then everything you have ever done there was collection.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "Which of these does equal trust require, per the lesson?",
            options: [
              "Come back to the place when nothing is wrong",
              "Give it copy approval",
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
              "Exactly what you think it is, judged by when it appears in your work",
              "That the outlet's editors decide coverage without input from the reporters on the beat",
              "That a different desk handles good news",
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
              "It survives a story the source hates, because they can forecast how you will behave",
              "It can be written into an enforceable agreement",
              "It means fewer follow-up questions for the source",
              "It moves responsibility to the editors",
            ],
            correctIndex: 0,
            explanation:
              "Equal trust means the source can forecast how you will behave. That holds up after publication in a way that shared feeling does not.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "When returning to a source after a piece they experienced as a betrayal, what comes first?",
            options: [
              "Asking what it cost them, rather than opening with a defense of the piece",
              "Explaining the editorial reasoning behind the piece",
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
              "A correction, made publicly and promptly when the reporter was wrong",
              "A named source",
              "A linked primary document, published alongside the story for readers to inspect",
              "A byline",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a correction is prompt and public rather than quiet, and why it is the required response when you were wrong.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "Why does the lesson treat equal trust as a professional skill rather than a virtue?",
            options: [
              "A beat runs on sources who will still speak to you in year three",
              "Ethics codes make it a condition of employment",
              "Trusting sources grant interviews faster",
              "It lowers the risk of a defamation claim",
            ],
            correctIndex: 0,
            explanation:
              "Every extractive interaction spends the balance a beat is built on, and there is no way to buy it back quickly on deadline.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "Which two reasons does the lesson give for a source experiencing a piece as betrayal?",
            options: [
              "Either you were wrong, or your reporting was accurate and the accuracy hurt",
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
              "A phone number that reaches a person when they call afterward",
              "A written summary of every editorial decision made about the source's contribution",
              "An opportunity to record a response for the outlet's social and video channels",
              "A promise to revisit within weeks",
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
              "Social connection, a theme the listening sessions could surface",
              "Whether state administrative data undercounts girls relative to boys across all domains",
              "County provider ratios for mental health",
              "Whether districts adopted prior recommendations",
            ],
            correctIndex: 0,
            explanation:
              "The report asked what role social connection plays in the lives of Indiana girls, and the listening sessions are how it went looking.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What does the lesson say happens to the protected listening block on a bad week?",
            options: [
              "It is the first thing cut, which is the reason beats go stale",
              "It expands to fill the slack",
              "It moves to the following week",
              "It is handed to a colleague",
            ],
            correctIndex: 0,
            explanation:
              "And that is named as the reason beats go stale, which is why the lesson says to protect it like a court date.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What is the next step after a quote audit shows a group you have never quoted?",
            options: [
              "Put one of those groups on the calendar, rather than waiting for a story",
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
              "An official's, since talking to reporters is part of the job",
              "A shift worker's, because employers are required to permit media interviews during hours",
              "An advocate's",
              "An expert's, because academic institutions credit media engagement in promotion reviews",
            ],
            correctIndex: 0,
            explanation:
              "For an official, talking to a reporter is a duty. For a shift worker it is unpaid time and possible exposure, and the schedule should reflect that difference.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What does the lesson say community listening most resembles?",
            options: [
              "Doing nothing",
              "Conducting a survey, since the aim is to find out what a population thinks",
              "Attending a public meeting, since both involve sitting through other people's agendas",
              "Working a source, since the relationship is what makes the later story possible",
            ],
            correctIndex: 0,
            explanation:
              "And it is the part of a beat that most reliably changes what gets covered, which is why it is protected rather than fitted in.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What did the 2025 Indiana Girl Report pair its listening sessions with?",
            options: [
              "Statewide administrative data, alongside feedback from 130 adults",
              "A weighted telephone poll of girls",
              "Interviews with district superintendents",
              "A review of peer-reviewed research",
            ],
            correctIndex: 0,
            explanation:
              "The structure is what makes it a teaching object: qualitative sessions running alongside statewide administrative data, each doing what the other cannot.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What is a reporter explicitly NOT doing during community listening?",
            options: [
              "Collecting quotes; what you collect instead is the agenda",
              "Identifying themselves, since disclosure would change what the room is willing to say",
              "Taking notes of any kind",
              "Attending in person",
            ],
            correctIndex: 0,
            explanation:
              "You are collecting the agenda. Anything you want to use requires a separate conversation opened there and then.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What has a reporter done if they treat 91 listening sessions as a survey?",
            options: [
              "Misread it, since listening sessions are not a probability sample of girls",
              "Applied the correct method, since the sessions were run across the whole state",
              "Overcorrected, since qualitative work is more reliable than administrative data",
              "Followed the report's own guidance, which presents the sessions as representative",
            ],
            correctIndex: 0,
            explanation:
              "And a reporter who dismisses the sessions because they are not a survey has thrown away the only account of what girls actually raised. Both errors are named.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "Why does business-hours availability shape who appears in coverage?",
            options: [
              "It is when reporters work and when hourly workers cannot",
              "Because meetings overlap the working day",
              "Because records offices close before most reporters finish their filing for the day",
              "Because editors will not approve overtime for interviews conducted after hours",
            ],
            correctIndex: 0,
            explanation:
              "Anyone whose availability does not match a reporter's falls out of the coverage without any decision being made about them.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What is an access cost?",
            options: [
              "What talking to a reporter costs a source: time, risk, sometimes a job",
              "An agency's fee for producing records",
              "Travel to reach communities outside the metros",
              "Time spent verifying an account",
            ],
            correctIndex: 0,
            explanation:
              "Time, risk, sometimes a job. For an official it is part of the job; for a shift worker it is unpaid time and possible exposure.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "How long does the lesson say the monthly quote audit takes?",
            options: [
              "About twenty minutes",
              "A full afternoon, because each source must be reclassified against the beat memo",
              "Roughly two hours, which is why most reporters run it quarterly instead",
              "It varies with output, since every published piece must be reread in full",
            ],
            correctIndex: 0,
            explanation:
              "List everyone quoted, mark each official, advocate, expert, or affected, and count. Cheap enough that skipping it is a choice.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What does the lesson say about a beat that narrows to whoever is easiest?",
            options: [
              "The twenty-minute monthly audit is the only reliable defense against it",
              "It is unavoidable in a newsroom that expects daily filing from a single reporter",
              "It corrects itself once the reporter has held the beat for more than a year",
              "It is a legal risk, because relying on official sources invites a claim of bias",
            ],
            correctIndex: 0,
            explanation:
              "Because the narrowing happens through convenience rather than decision, nothing catches it except a deliberate count.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What does equal trust require telling people before they speak?",
            options: [
              "What you are doing and what will happen to what they say",
              "Which editor will make the final decision about whether their words are published",
              "How long recordings are retained",
              "Whether the institution responds first",
            ],
            correctIndex: 0,
            explanation:
              "Along with being reachable afterward, coming back when nothing is wrong, and being honest about what you cannot promise.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "How should the good outcome on a beat be covered?",
            options: [
              "With the same seriousness the reporter gives a bad outcome",
              "Sparingly, since it reads as promotional",
              "Through a separate feature desk",
              "Only when a community requests it",
            ],
            correctIndex: 0,
            explanation:
              "A community that appears in your work only at its worst learns exactly what you think it is.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What does an extractive pattern teach a community?",
            options: [
              "That journalists arrive only to take something from it",
              "That the outlet is short-staffed",
              "That coverage decisions are made by editors rather than by the reporter they know",
              "That the reporter is inexperienced and will be replaced within a year or two",
            ],
            correctIndex: 0,
            explanation:
              "Each individual step is defensible. The pattern is what the community learns from, which is why the fix is measured in visits rather than intentions.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What is equal trust, if it is not agreement?",
            options: [
              "Predictability: people can forecast how you will behave, even after a story they hate",
              "Neutrality, meaning the reporter takes no position on any dispute inside the community",
              "Reciprocity, meaning the community receives coverage in proportion to its cooperation",
              "Confidentiality, meaning no source is named without their explicit written consent",
            ],
            correctIndex: 0,
            explanation:
              "People can forecast how you will behave. That is a much stronger thing to offer than sympathy, and it survives a story someone hates.",
            sourceLessonSlug: "equal-trust",
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
              "The ones you were talking to for two years before they had anything to tell you",
              "The officials authorized to speak on the record",
              "The full-time advocates who supply context",
              "The former employees free of any duty of confidence",
            ],
            correctIndex: 0,
            explanation:
              "The relationship has to exist before the person has anything to tell you, which is why keeping sources is scheduled work rather than a trait.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "Which of these is one of the three conditions for a source calling with something serious?",
            options: [
              "They can reach you quickly when the thing happens",
              "They were quoted by you before",
              "They have confirmed that your newsroom will not identify them under any circumstances",
              "They want to provoke a reaction",
            ],
            correctIndex: 0,
            explanation:
              "Along with knowing who you are and having watched how you handled someone else's information. None of the three can be built in the week the thing happens.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What field turns keeping sources into a task rather than an intention?",
            options: [
              "A next-contact date beside each name on the rolling list",
              "A tag recording which of the beat's institutions each contact currently works for",
              "A note on the latest ground rules",
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
              "Outreach with no request attached, like a note when they are quoted well elsewhere",
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
              "Be explicit that you are not asking them to say anything, then leave",
              "Explain they will be quoted as an unnamed official",
              "Ask an insider to vouch for you first",
              "Request an interview through the press office",
            ],
            correctIndex: 0,
            explanation:
              "Introduce yourself when nothing is happening, be explicit that there is no ask, and leave. That is what makes the later call possible.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What is wrong with treating a kept source as a friend?",
            options: [
              "You will publish something they dislike, and a friendship may not survive it",
              "It is a conflict of interest you must disclose",
              "Friends avoid legal risk, so they give fewer documents",
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
              "Ask once, plainly, and accept the answer you get",
              "Escalate through a colleague",
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
              "Never let them find out from the story; anything that names them, they hear from you first",
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
              "Before the information is given, and defined out loud every time",
              "At the end of the interview",
              "In writing after the conversation",
              "By the editor before publication",
            ],
            correctIndex: 0,
            explanation:
              "And you define the terms out loud every time, because the words mean different things to different people.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What does on the record mean, as the lesson defines it?",
            options: [
              "Usable with name and title, the default you state at the start",
              "Usable only after the source has confirmed the exact quotations that will appear",
              "Usable in summary form only",
              "Usable only inside the outlet",
            ],
            correctIndex: 0,
            explanation:
              "And it is the default you state at the start of the conversation, so that anything else has to be requested.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What must be agreed in advance for an on-background attribution?",
            options: [
              "The exact wording of how you will describe the source",
              "Which editor at the outlet will be told the source's real name before publication",
              "How long to hold the material",
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
              "Usable as your own knowledge, with no attribution of any kind to the source",
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
              "Asking a favor, which you may grant or decline, not invoking an agreement",
              "Invoking an implied professional agreement",
              "Exercising a right under state shield laws",
              "Withdrawing consent to the material's use",
            ],
            correctIndex: 0,
            explanation:
              "Ground rules cannot be applied retroactively. A beat reporter often should grant it, but say which one is happening.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What happens if a source believes they can reclassify remarks after the fact?",
            options: [
              "Eventually they reclassify the one sentence your story depends on",
              "The reporter becomes legally liable",
              "The outlet must issue a clarification",
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
              "He was named by the papers and lost his job",
              "He was subpoenaed and jailed for refusing to identify who supplied him the documents",
              "He won an injunction",
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
              "That the First Amendment does not bar a promissory estoppel claim against the press",
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
              "Tell the source who else in your newsroom will know their name",
              "Get the promise in writing",
              "Clear it with counsel first",
              "Wait for a second source",
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
              "Whether you can be compelled to reveal what you heard",
              "Sharing with an editor in the newsroom",
              "Whether the reporter may use the information to frame later questions to officials",
              "Whether a colleague is bound",
            ],
            correctIndex: 0,
            explanation:
              "It is an agreement about publication. Compulsion is a separate body of law that differs by state, covered later in this track.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What three questions form the motive check?",
            options: [
              "Why are they telling me, why now, and what happens to them if I publish",
              "Who else has it, when it was created, and whether the original still exists on file",
              "What it proves, what it does not prove, and which document would settle the difference",
              "Who benefits and who is harmed",
            ],
            correctIndex: 0,
            explanation:
              "Write the answers down. A self-interested source is normal; the failure is not knowing which interest you are serving.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What does the lesson say about a self-interested source?",
            options: [
              "Most useful information arrives from someone who benefits, so it is normal",
              "Treat their material as unreliable until an official confirms it",
              "Identify them by name so readers can weigh the interest",
              "Keep their motive out of the piece unless it is relevant",
            ],
            correctIndex: 0,
            explanation:
              "There is nothing wrong with it. A document arriving three weeks before a contract vote can be entirely accurate and also a move in somebody's fight.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What is the other side test?",
            options: [
              "Would I run this if the same document came from the other side",
              "Would a reasonable reader reach the same conclusion from the document without my framing",
              "Would the institution's own auditor accept the document as authentic evidence",
              "Would another newsroom run it",
            ],
            correctIndex: 0,
            explanation:
              "If the answer is no, the fight is the story rather than the document, and both belong in the piece.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "Why must a disclosed motive go into the story?",
            options: [
              "Readers can weigh a motive you disclose but not one you hide",
              "The SPJ code requires it",
              "Because omitting it exposes the outlet to a claim from the party the source opposes",
              "It prevents claims of coordination",
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
              "An official response, independent of the source who supplied the document",
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
              "What you will keep, where it will live, and for how long you will hold it",
              "Which lawyer the outlet will retain",
              "Whether the story will run",
              "How the material will be described",
            ],
            correctIndex: 0,
            explanation:
              "Know where source material lives and who can reach it, and prefer not writing a name down to writing one down carefully.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What must a reporter tell sources about their employer's systems?",
            options: [
              "That those systems are not yours to protect",
              "That messages expire",
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
              "Becoming one faction's reliable outlet without noticing",
              "Publishing a document before its authenticity has been established by a second party",
              "Storing files on personal devices",
              "Promising confidentiality to a false source",
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
              "Not writing the name down at all, rather than recording it carefully",
              "Encrypting the file",
              "Using a paper notebook",
              "Using an agreed code name",
            ],
            correctIndex: 0,
            explanation:
              "A name that was never written cannot be produced, subpoenaed, or leaked by someone with access to a system you do not control.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What example does the lesson give of a document that is accurate and also a move?",
            options: [
              "One arriving three weeks before a contract vote, from a competitor of the incumbent",
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
              "Being used by a source whose motive you never examined",
              "Publishing a correction that names a source who had been promised confidentiality",
              "Missing deadlines often enough that the desk reassigns the subject to another reporter",
              "Covering an institution you have money in",
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
              "I will contact you before every story",
              "I will keep your name out of it",
            ],
            correctIndex: 0,
            explanation:
              "It sets the relationship as professional rather than personal, which is what lets it survive a piece the source dislikes.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "Which of the four ground-rule terms is the stated default?",
            options: [
              "On the record, which you state at the top of the conversation",
              "On background",
              "Off the record",
              "Deep background",
            ],
            correctIndex: 0,
            explanation:
              "Stating it at the start puts the burden on anyone who wants a different arrangement to ask before speaking.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "Why does the lesson insist the ground-rule terms be defined out loud?",
            options: [
              "The words mean different things to different people, so each is spelled out",
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
              "In your notes, saying which kind it was",
              "In the published piece, so readers can assess the strength of each confirmation",
              "In the newsroom's legal file, which is the only record protected from disclosure",
              "In the beat memo",
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
          {
            prompt: "How often is the rolling contact list worked through?",
            options: [
              "Every month, with a next-contact date beside each name",
              "Every week, which is what makes the fifteen minutes a week add up over a year",
              "Every quarter",
              "Whenever a story needs one",
            ],
            correctIndex: 0,
            explanation:
              "The list carries a next-contact date beside each name, which is what turns keeping sources into a task rather than an intention.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What does continuing to press a source who has gone quiet produce?",
            options: [
              "A permanent silence, and everyone they talk to learns what you are like",
              "An explanation",
              "A formal complaint to the outlet",
              "A referral to the press office",
            ],
            correctIndex: 0,
            explanation:
              "It also tells everyone that source talks to what you are like, which costs far more than the one relationship.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "Which reasons does the lesson give for a source going quiet?",
            options: [
              "They got burned, their employer noticed, or your last piece hurt them more than you knew",
              "They have moved to a role that prohibits contact with the press under agency policy",
              "They are waiting for the outlet to publish a correction on an unrelated earlier story",
              "They have been advised by counsel not to speak while litigation is pending",
            ],
            correctIndex: 0,
            explanation:
              "Or your last piece was worse for them than you realized. Ask once, plainly, and accept the answer.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What can ground rules never be?",
            options: [
              "Retroactive",
              "Renegotiated once the interview has begun and the source has started speaking",
              "Different for two sources contributing to the same published piece",
              "Agreed verbally, since only a written record survives a later dispute",
            ],
            correctIndex: 0,
            explanation:
              "A person reclassifying a past remark is asking a favor. Grant it or decline it, but say which is happening.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "How does the lesson suggest opening a conversation about ground rules?",
            options: [
              "Everything is on the record unless we agree otherwise",
              "Tell me now if there is anything you would prefer I did not publish about this",
              "I will send you the passages that quote you before the piece is filed for editing",
              "Nothing you say is attributable",
            ],
            correctIndex: 0,
            explanation:
              "Followed by an invitation to ask for background before speaking, and to agree how the description will read. Twelve seconds at the top.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "In Cohen v. Cowles Media Co., who overrode the promise the reporters had made?",
            options: [
              "The papers' editors, who published his name",
              "A court, which ordered the newspapers to identify the source of the documents",
              "The source himself",
              "The publisher's counsel",
            ],
            correctIndex: 0,
            explanation:
              "The papers published his name, he lost his job, and he sued. The 1991 decision held the First Amendment does not bar the claim.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "In what year was Cohen v. Cowles Media Co. decided?",
            options: [
              "1991",
              "1964, the same term that established the actual-malice standard for public officials",
              "1972, alongside the leading decision on whether reporters may refuse to testify",
              "2001, in the line of cases about publishing lawfully obtained but illegally intercepted material",
            ],
            correctIndex: 0,
            explanation:
              "The holding is that generally applicable law, here promissory estoppel, can apply to the press like anyone else.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What is a handling plan?",
            options: [
              "A decision made before sensitive material arrives about what is kept and where",
              "The newsroom's verification procedure",
              "A legal agreement on file access",
              "An index of downloaded documents",
            ],
            correctIndex: 0,
            explanation:
              "What you will keep, where, and for how long. Deciding afterward means deciding while under pressure with the material already in hand.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "Which systems does the lesson name as reachable by someone other than the reporter?",
            options: [
              "Cloud drives your employer administers, along with chat logs and calendar entries",
              "Encrypted messaging applications installed on a reporter's personal phone",
              "Paper notebooks stored at the reporter's home rather than in the newsroom",
              "Voice recordings that were never transferred off the recording device",
            ],
            correctIndex: 0,
            explanation:
              "Along with chat logs and calendar entries naming a person. Tell sources honestly that your employer's systems are not yours.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What does the lesson say about the note in your phone?",
            options: [
              "It is source material, and part of knowing where yours lives",
              "It is protected, because personal devices fall outside an employer's retention policy",
              "It should be the primary store, because it is the only system a reporter controls",
              "It holds no documents",
            ],
            correctIndex: 0,
            explanation:
              "Knowing where source material lives and who can reach it includes the places you would not think to list.",
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
              "As small changes in routine documents, which is why the beat map exists",
              "Through a tip from an inside source",
              "In released closed-session minutes",
              "As a spike in public comment",
            ],
            correctIndex: 0,
            explanation:
              "Which is exactly why the beat map's document inventory exists. Five signal families cover most of what can be caught early.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What is a consent calendar?",
            options: [
              "Routine items approved in a single vote without any discussion",
              "The published schedule of meetings a public body must hold during its fiscal year",
              "Items deferred to a future meeting",
              "Items with a declared conflict of interest",
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
              "A split vote",
            ],
            correctIndex: 0,
            explanation:
              "Alongside items that appear for the first time and items that move between the regular agenda and the consent calendar.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "Why does the lesson call budget comparison the highest-yield hour on most beats?",
            options: [
              "Budgets are the only document where an institution states its intent in numbers",
              "Because budget documents are the only records agencies are required to publish online",
              "Because auditors have verified the figures, so no confirmation is needed",
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
              "They were made for another purpose entirely, so nobody has shaped them for you",
              "They are published faster than other records",
              "They carry legal penalties for inaccuracy",
              "They are indexed centrally",
            ],
            correctIndex: 0,
            explanation:
              "Court dockets, permits, licensing actions, campaign finance, tax filings, and lobbying registrations exist for legal reasons, so nobody shaped them for a reporter.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "Which personnel change does the lesson flag as an early warning?",
            options: [
              "Clustered departures, especially quick ones",
              "A hiring freeze",
              "The retirement of a long-serving official who announced their plans in advance",
              "A department reorganization",
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
              "Notices run in legal columns",
            ],
            correctIndex: 0,
            explanation:
              "A report that used to come quarterly, an indicator dropped from a dashboard, a comment period not publicized. All invisible without accumulation.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What does a reporter do with a signal?",
            options: [
              "Write a note in the beat file with the date, the document, and the one question",
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
              "The working memory of a beat, kept where it can be searched and handed over",
              "An archive of every published story",
              "The newsroom's assignment record",
              "The legal file of source agreements",
            ],
            correctIndex: 0,
            explanation:
              "Without one, signals are forgotten inside a month and the accumulation exists only in a head, where it cannot be searched, handed over, or defended.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "Which four parts make up a beat file?",
            options: [
              "A signal log, a sourced chronology, contacts, and downloaded documents",
              "Drafts, editor notes, clips, and reader mail",
              "Budget spreadsheets, meeting recordings, transcripts, and photographs from assignments",
              "Records requests, appeals, responses, fee waivers",
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
              "Records law requires it",
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
              "Every entry names where it came from: the document, the page, and the date",
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
              "Recurrence: has it appeared more than twice, in more than one place",
              "Consequence",
              "Provability",
              "Novelty",
            ],
            correctIndex: 0,
            explanation:
              "Has this appeared more than twice, in more than one place. Then consequence, then provability, in that order.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What does the consequence test ask?",
            options: [
              "Who is affected and how, in one sentence, without hedging",
              "Whether the institution has a legal obligation that the pattern shows it is breaching",
              "How many are affected, as a share",
              "Whether an editor will give it space",
            ],
            correctIndex: 0,
            explanation:
              "In a sentence, without hedging. A pattern you can only describe in qualifications has not yet produced a story.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What is a pattern that fails the provability test?",
            options: [
              "A records request and two phone calls, not a story yet",
              "A story that should be published with the uncertainty disclosed to readers up front",
              "A note that should be deleted from the signal log so it does not mislead a successor",
              "A tip for the investigative desk",
            ],
            correctIndex: 0,
            explanation:
              "It is not a story yet. It is the next stage of reporting, which is what the following course in this track is about.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "How often does the lesson say to read the signal log from the top?",
            options: [
              "Once a month, as a scheduled task, reading your own signal log from the top",
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
              "Otherwise the next reporter starts at zero and the community loses continuity",
              "Employment agreements assign notes to the outlet",
              "Courts can order a file produced",
              "Editors need to verify the sourcing",
            ],
            correctIndex: 0,
            explanation:
              "A file that lives only in a head means the community loses years of continuity when the reporter leaves. Know your employer's ownership policy before you need it.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What are the two modes of work a beat produces?",
            options: [
              "Same-day quick-turn work and weeks-long enterprise work",
              "Reported pieces and analysis",
              "Breaking news and features",
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
              "Any story over a set word count",
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
              "Only quick-turn carries a deadline and a visible cost, until enterprise publishes",
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
              "One enterprise block, one listening block, and a monthly hour of file review",
              "Two enterprise blocks and a daily reading hour",
              "One block per institution, rotated",
              "A full day of enterprise each week",
            ],
            correctIndex: 0,
            explanation:
              "Everything else is quick-turn and maintenance. That is not much protected time, and holding even that is harder than it sounds.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What should every quick-turn piece deposit into the accumulation?",
            options: [
              "A signal for the file, a name for the contacts, a document for the folder",
              "A clip and its audience numbers",
              "A correction log entry",
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
              "Who is on record",
            ],
            correctIndex: 0,
            explanation:
              "So an editor is not sold a story the reporting cannot support, which is the most common way an enterprise project collapses late.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What does an enterprise piece publish about its own limits?",
            options: [
              "What could not be confirmed, as the same discipline applied to sourcing",
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
              "One quick-turn story and one enterprise pitch on a beat you choose",
              "A five-clip portfolio",
              "A full enterprise investigation",
              "A beat memo and a year of signal log",
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
              "Photography, audio, and video",
              "Copy editing, headline writing, search optimization, and newsletter formatting",
              "Media history and media economics",
            ],
            correctIndex: 0,
            explanation:
              "Each is a course, and each fills a gap the existing catalog leaves on the far side of where documentation ends and reporting begins.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What does the lesson say about treating the two modes as separate budgets?",
            options: [
              "A well-held beat does not treat them as separate",
              "It is necessary, because enterprise and quick-turn require different editorial approval",
              "It guarantees enterprise",
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
              "Write the background paragraphs of a story in two minutes instead of forty",
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
              "Same-day or next-day work: the vote, the report release, the incident, the response",
              "Any piece produced without a records request",
              "Reporting filed straight to social platforms",
              "Coverage of scheduled events only",
            ],
            correctIndex: 0,
            explanation:
              "The vote, the report release, the incident, the response. It is triggered externally, which is why it always has a deadline.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What kind of entry does the signal log hold?",
            options: [
              "The date, the document, and the question it raises",
              "A summary of the change and the reporter's assessment of whether it is newsworthy",
              "The responsible official",
              "A link and a year-question tag",
            ],
            correctIndex: 0,
            explanation:
              "One line each. The brevity is what makes the log survivable, and the date is what makes recurrence visible on review.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What does the lesson say about an interim who has been interim for eighteen months?",
            options: [
              "It is a people signal, like a long-unfilled vacancy",
              "A records issue",
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
              "They are forgotten inside a month, and the accumulation exists only in your head",
              "They are captured anyway because they recur",
              "Published stories preserve them",
              "They collect in the contact list",
            ],
            correctIndex: 0,
            explanation:
              "And the accumulation that makes a beat valuable exists only in one head, where it cannot be searched, handed over, or defended.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "What does the lesson say about who owns a beat file?",
            options: [
              "Check your employer's policy and know the answer before you need it",
              "The reporter always owns notes",
              "The outlet always owns them, which is why portability is a courtesy rather than a duty",
              "Ownership is irrelevant",
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
              "A late budget amendment",
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
              "Harder than it sounds, though one enterprise and one listening block is not much time",
              "Impossible in a newsroom that expects daily filing, which is why beats need two reporters",
              "Straightforward once an editor has approved the schedule at the start of a quarter",
              "A matter of personal discipline rather than structure, since calendars cannot be enforced",
            ],
            correctIndex: 0,
            explanation:
              "One enterprise block, one listening block, and a monthly file review is not much time, and even that much gets eaten.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What does the lesson say most signals do?",
            options: [
              "Go nowhere; the ones that recur are the ones to work",
              "Recur within a quarter",
              "Produce a quick-turn item",
              "Require a records request",
            ],
            correctIndex: 0,
            explanation:
              "The ones that recur are the ones to work, and there is no way to tell which is which without a written record.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What makes budgets distinctive among an institution's documents?",
            options: [
              "The only document where an institution must state its intent in numbers",
              "They are always audited first",
              "They must be approved in open session",
              "They are revised continuously, so the current version always reflects present policy",
            ],
            correctIndex: 0,
            explanation:
              "Which is why comparing this year against the last three is called the single highest-yield hour on most beats.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What is wrong with a beat's accumulation living only in the reporter's head?",
            options: [
              "It cannot be searched, handed over, or defended",
              "It fades faster than a written record, which is why chronologies are kept for a year",
              "It exposes the outlet to subpoenas",
              "It prevents an editor from assigning the beat to a second reporter during a busy week",
            ],
            correctIndex: 0,
            explanation:
              "Three separate failures, and the beat file exists to prevent all of them at once.",
            sourceLessonSlug: "beat-file",
          },
          {
            prompt: "How many protected blocks does the lesson's week shape contain?",
            options: [
              "Two weekly blocks, enterprise and listening, plus a monthly hour of file review",
              "Three weekly: enterprise, listening, and a standing review of the signal log",
              "One weekly, since only enterprise time needs defending against quick-turn work",
              "Four, one for each of the inventories that make up the beat map",
            ],
            correctIndex: 0,
            explanation:
              "One enterprise block, one listening block, and an hour of file review monthly rather than weekly. Everything else is quick-turn and maintenance.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "How does the lesson characterize publishing what you could not confirm?",
            options: [
              "A discipline, the same one applied to sourcing, rather than an admission of weakness",
              "A legal precaution",
              "An editing decision for the desk",
              "An optional appendix",
            ],
            correctIndex: 0,
            explanation:
              "It is the same sourcing standard the rest of the catalog applies, and it is what this track's capstone is graded against.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What do a beat's two modes of work compete for?",
            options: [
              "The same hours",
              "The same sources, since enterprise reporting exhausts the contacts quick-turn work needs",
              "The same editor, whose attention is divided between daily filing and long projects",
              "The same documents, since both draw on the beat's inventory of scheduled publications",
            ],
            correctIndex: 0,
            explanation:
              "The job is not choosing between them. It is protecting the one that always loses, which is enterprise.",
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
              "What to produce, and the job ends once you file it",
              "Which institutions hold authority",
              "How much history you need first",
              "Which ground rules apply",
            ],
            correctIndex: 0,
            explanation:
              "And it ends when you file. The beat's responsibility does not, which is the whole distinction.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "What is the product of a beat, and what are the stories?",
            options: [
              "The accumulation is the product; stories are withdrawals from it",
              "The archive, and the notes behind it",
              "The source list, and the interviews conducted to keep each relationship current",
              "The beat memo, and its revisions",
            ],
            correctIndex: 0,
            explanation:
              "Budgets, departures, vendors, and dropped indicators pile up. Each story draws on that balance.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Why does this course carry a disclosure in its first lesson?",
            options: [
              "Because the track teaches disclosure",
              "Because the author was required to declare outside work under the outlet's ethics policy",
              "Because the Indiana Girl Report's reuse terms require an affiliation statement",
              "Fair use requires it",
            ],
            correctIndex: 0,
            explanation:
              "The author does documentation work for the organization Free Press Indiana sits under. FPI has not reviewed, endorsed, or sponsored the course.",
            sourceLessonSlug: "beat-not-story",
          },
          {
            prompt: "Which four inventories make up a beat map?",
            options: [
              "Institutions, documents, people, and calendar, each built in an afternoon",
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
              "They assemble the published figures, so they know which ones are soft",
              "They control when data is released",
              "They are exempt from confidentiality rules",
              "Only they can be compelled by records requests",
            ],
            correctIndex: 0,
            explanation:
              "Estimates, suppressions, and definitional edges never appear in the published table. Whoever assembled it knows them.",
            sourceLessonSlug: "map-the-beat",
          },
          {
            prompt: "What does a beat calendar do for a reporter?",
            options: [
              "It turns a reporter from reactive to early",
              "It covers every meeting",
              "It logs attendance",
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
              "The sentence stating what is out of scope",
              "The measurement plan that defines what counts as adequate coverage at year end",
              "The list of year questions, which is where the enterprise stories come from",
              "The named communities",
            ],
            correctIndex: 0,
            explanation:
              "Without a boundary a beat becomes general assignment with a nameplate, and the accumulation never happens.",
            sourceLessonSlug: "beat-memo",
          },
          {
            prompt: "What distinguishes a beat question from a topic?",
            options: [
              "It implies a document, a denominator, and a person who has to answer",
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
              "Time where people already gather, with no story, deadline, or ask attached",
              "Interviews before a project begins",
              "A forum the outlet hosts for readers",
              "Attending every public meeting",
            ],
            correctIndex: 0,
            explanation:
              "You go where people already gather and stay long enough to hear what they raise when no reporter is steering.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "How many listening sessions with girls did the 2025 Indiana Girl Report run?",
            options: [
              "91 sessions, alongside feedback from 130 adults",
              "About 300, one in each Indiana school district that agreed to participate",
              "None at all",
              "Around 1,500, statewide",
            ],
            correctIndex: 0,
            explanation:
              "Plus feedback from 130 adults across the state, reported on page 7 alongside the statewide data.",
            sourceLessonSlug: "listening-first",
          },
          {
            prompt: "What can listening sessions support, and what can they not?",
            options: [
              "Themes no data set contains, but not shares of a population",
              "Trends, but not regional comparisons",
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
              "Not on the record; using a remark is a separate conversation opened there",
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
              "That it is not yet possible to present data free from gender bias",
              "That state agencies verified the figures",
              "That county samples are too small",
              "That citing it needs written permission",
            ],
            correctIndex: 0,
            explanation:
              "It says gender gaps exist in data and collection, that efforts were made to limit bias, and that the limitation is an additional data point rather than a dismissal.",
            sourceLessonSlug: "who-is-never-asked",
          },
          {
            prompt: "What happens to every table built from an undercounted collection?",
            options: [
              "It inherits the same undercount as the collection",
              "Its confidence interval widens",
              "It becomes unusable",
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
              "Officials, advocates, experts, and affected people quoted that month",
              "Total sources per story",
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
              "The outlet gets accuracy complaints from the community",
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
              "It survives a story the source hates, since they can still forecast your behavior",
              "It can be made enforceable in writing",
              "It speeds up interviews",
              "It shifts accountability to the desk",
            ],
            correctIndex: 0,
            explanation:
              "A source who can forecast your behavior keeps talking to you after a piece they hated. Shared feeling does not hold up that far.",
            sourceLessonSlug: "equal-trust",
          },
          {
            prompt: "What does the lesson call the only currency journalism has that a reader can verify?",
            options: [
              "A correction, published promptly when you were wrong",
              "An on-record source",
              "A published document, linked so readers can read the primary material themselves",
              "A disclosure",
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
              "Legal protection",
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
              "Mid-level staff who are not authorized to speak but know how decisions were made",
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
              "Never let them find out from the story; they hear it from you first",
              "Never name a source met while listening",
              "Never publish a name without a second source",
              "Never contact a source in advance",
            ],
            correctIndex: 0,
            explanation:
              "One uncomfortable call in advance is the strongest signal of predictability available, and it costs almost nothing.",
            sourceLessonSlug: "source-with-nothing",
          },
          {
            prompt: "What is on background, as this course defines it?",
            options: [
              "Usable, attributed to a role description agreed in advance",
              "Usable only as the reporter's own knowledge, with no attribution of any kind",
              "Unpublishable, used only to steer reporting",
              "Usable after an agreed embargo",
            ],
            correctIndex: 0,
            explanation:
              "And the exact wording of that description is agreed before the information is given, not afterward.",
            sourceLessonSlug: "ground-rules",
          },
          {
            prompt: "What is a source doing when they declare a past remark off the record?",
            options: [
              "Asking a favor, not invoking an agreement",
              "Invoking a right that state shield statutes grant to any person interviewed",
              "Withdrawing consent",
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
              "That the First Amendment does not bar a promissory estoppel claim against the press",
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
              "Why is this person telling me, why now, and what happens to them if I publish",
              "What it proves and who disputes it",
              "Who else has it, and since when",
              "Is it true, is it new, is it harmful",
            ],
            correctIndex: 0,
            explanation:
              "Written down. A self-interested source is normal, and not knowing which interest you serve is the failure.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "A leaker supplies a document and someone to confirm it. How many sources is that?",
            options: [
              "One, because both come from the same interest",
              "Two, as separate people",
              "Two, if on the record",
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
              "Would the source be named",
            ],
            correctIndex: 0,
            explanation:
              "If the answer is no, then the fight is the story rather than the document, and both belong in the piece.",
            sourceLessonSlug: "source-hygiene",
          },
          {
            prompt: "What is the costliest source pattern named in the course?",
            options: [
              "Becoming one faction's outlet while losing every source in the other",
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
              "It is being treated as settled, approved in one vote without discussion",
              "It has been withdrawn until a later meeting",
              "It requires a supermajority vote",
              "It was added after the notice deadline",
            ],
            correctIndex: 0,
            explanation:
              "A consent calendar approves routine items in a single vote without discussion. Sometimes efficiency, sometimes the last public step.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "Why is silence the hardest signal family to see?",
            options: [
              "An absence is only visible to someone who watched the presence",
              "Institutions are legally permitted to stop publishing any voluntary data series",
              "Indicators get renamed",
              "Comment notices go unread",
            ],
            correctIndex: 0,
            explanation:
              "A report that stopped, an indicator dropped, a comment period not publicized. All invisible without the accumulation lesson 1 describes.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What does a reporter do with a signal?",
            options: [
              "Log it in the beat file: date, document, question",
              "Request comment, since the institution's response determines whether it is newsworthy",
              "File a records request immediately, before the underlying decision trail goes cold",
              "Publish a brief item",
            ],
            correctIndex: 0,
            explanation:
              "Most signals go nowhere. Only a written record shows which ones recur, and recurrence is the first story test.",
            sourceLessonSlug: "signals",
          },
          {
            prompt: "What separates a beat file from a pile?",
            options: [
              "Every entry names where it came from: the document, the page, and the date",
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
              "Only quick-turn has a deadline and a visible cost for missing it",
              "Enterprise waits on agency records",
              "Editors judge reporters on volume",
              "Travel budgets are rarely approved",
            ],
            correctIndex: 0,
            explanation:
              "Enterprise carries no visible cost for slipping until the week it publishes, so its hours have to be defended like a court date.",
            sourceLessonSlug: "the-week",
          },
          {
            prompt: "What should each quick-turn piece deposit into the accumulation?",
            options: [
              "A signal for the file, a name for the list, a document for the folder",
              "A clip, a headline, and the audience figures the piece generated in its first week",
              "A correction record",
              "A budget line and docket number",
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
