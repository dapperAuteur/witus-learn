import type { AuthoredCourse } from "./authored-course";

// REPORT-01 · Public Records (plans/68).
//
// The gap this fills is exact. civic-documentation teaches open-MEETINGS law thoroughly and stops
// there, because a Documenter's job ends at the gavel. Requesting RECORDS is a different statute, a
// different craft, and a different failure mode: the denial, the fee estimate, and the appeal.
//
// JURISDICTION (plans/68 decision 2, BAM 2026-08-11). The federal FOIA is the spine, because it is
// one statute a reader anywhere in the country can check, and Indiana is the worked example of a
// STATE act. Every jurisdiction-specific lesson ends by telling the reader to find their own state's
// statute, deadline, and appeal route. Same pattern the state-civics courses use.
//
// AUTHORITATIVE-VALUES RULE, load-bearing here. Statutory deadlines and fee rules are owned by
// legislatures and get amended. Federal figures below are given with their U.S. Code cite so a
// reader can check them. The Indiana deadlines carry an explicit "verify the current text" hedge
// AND a research check in src/lib/research-checks.ts, because a course that asserts a stale deadline
// teaches someone to miss a real one.
export const REPORTER_PUBLIC_RECORDS_COURSE: AuthoredCourse = {
  title: "Reporter 01: Public Records",
  description:
    "Asking for records, and what to do when they say no. Who is covered and who is not, what counts as a record, writing a request that cannot be misread, fees and the public-interest waiver, exemptions and the answer that refuses to say whether a record exists, reading a denial, and the appeal. Federal FOIA as the spine, Indiana as the worked example, and your own state as the homework.",
  lessons: [
    // ── Section 1 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "records-not-meetings",
      title: "1 · Records law is not meetings law",
      section: "Section 1 · What a records law is",
      body: `Most reporters learn open-meetings law first, because a meeting has a time and a place and somebody will tell you when it is. Records law is the other half, it is a separate statute, and almost nothing you know about one transfers to the other.

**The two statutes do different work.** An open-meetings act governs when a body must deliberate in public and how much notice it owes. A public-records act governs what an agency must hand over on request, to anyone, usually regardless of who they are or why they want it. At the federal level the records statute is the Freedom of Information Act, 5 U.S.C. 552. In Indiana it is the Access to Public Records Act, Indiana Code 5-14-3, and the meetings statute is a different chapter, Indiana Code 5-14-1.5.

**Three consequences that matter on a beat.** First, a meeting produces the record: agendas, packets, minutes, and the contract that was approved are all requestable, so attending is the beginning rather than the end. Second, records law reaches things no meeting ever touches, including email, inspection reports, settlement agreements, calendars, and data. Third, records law has an adversary structure that meetings law mostly does not: an agency reviews, redacts, charges, and can refuse, and each of those is a step you can contest.

**Purpose usually does not matter, and this surprises people.** Under FOIA any person may request records, and the requester's identity and motive are generally irrelevant to whether a record must be released. There are two practical exceptions worth knowing. Your requester CATEGORY changes what you can be charged, which is lesson 6. And your purpose is exactly what you argue when you ask for a fee waiver in the public interest.

**What a records law is not.** It is not a right to be given information. An agency generally must produce records it has; it does not have to answer questions, create a document that does not exist, perform analysis for you, or explain a policy. Requests written as questions are the single most common reason a new reporter gets nothing back.

**Where this course goes.** Who is covered, what counts as a record, the informal ask that beats a filing, writing a request, fees and waivers, deadlines and delay, exemptions and redaction, reading a denial, the appeal, Indiana as a worked example, and records as a beat habit rather than a one-off.

:::reveal What does a records act govern that a meetings act does not? ||| What an agency must hand over on request, to anyone, including email, inspections, settlements, calendars, and data, none of which a meeting necessarily touches.

:::reveal Why is attending a public meeting the beginning of records work rather than the end? ||| Because the meeting produces requestable records: the agenda, the packet, the minutes, and the contract that was approved.

:::reveal Name the most common reason a new reporter gets nothing back from a request. ||| They wrote a question. A records act generally compels production of records that exist, not answers, analysis, or a new document made for you.

## Vocabulary
- **Public-records act**: a statute compelling an agency to produce existing records on request, as distinct from a meetings statute.
- **Freedom of Information Act (FOIA)**: the federal records statute, 5 U.S.C. 552.
- **Access to Public Records Act (APRA)**: Indiana's state records statute, Indiana Code 5-14-3.
- **Requester category**: the classification that determines what an agency may charge you, which is one of the few places identity matters.

## Sources
- Freedom of Information Act, 5 U.S.C. 552. https://www.law.cornell.edu/uscode/text/5/552
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "who-is-covered",
      title: "2 · Who is covered, and who is not",
      section: "Section 1 · What a records law is",
      body: `Before you write a request, establish that the body you are writing to is subject to a records act at all. Getting this wrong wastes weeks, and the boundary is less obvious than it looks.

**FOIA reaches federal executive branch agencies.** That includes executive departments, military departments, government corporations, and independent regulatory agencies. It does NOT reach Congress, the federal courts, or the President's immediate personal staff and units of the Executive Office of the President whose sole function is to advise and assist the President. A reporter who files a FOIA request with a congressional committee gets nothing, and it is not a denial to appeal, it is the wrong statute.

**State bodies are governed by state law, and there is no federal shortcut.** A state agency, a county, a city, a school district, a sheriff, a public university, and a transit authority are covered by the state's own act, not by FOIA. The word FOIA is used colloquially for all of it, which is harmless in conversation and harmful in a request letter addressed to the wrong law.

**The hard cases, which are where the stories are.** Private contractors performing public functions. Nonprofit foundations attached to public universities or hospitals. Quasi-public authorities and economic development corporations. Police agencies at private universities. Charter schools. Whether each is covered varies by state, and it is frequently litigated because the answer decides whether a large amount of public money is visible. When a beat has one of these, finding out its status is worth a dedicated afternoon and a call to a state press association.

**The custodian question is separate from the coverage question.** A record can be covered while sitting somewhere inconvenient: an official's personal email or phone. Many states now treat a record about public business as public regardless of the device it lives on, which is a rule the RCFP guide records state by state. Never assume, and never let an agency assume it for you.

**Two minutes that save a month.** Before filing, write down the statute you are invoking, the body's legal name, and the person or office designated to receive requests. Agencies routinely publish the last of those, and a request sent to a general inbox can sit unrouted until the clock you were relying on has quietly not started.

:::reveal Which federal entities does FOIA not reach? ||| Congress, the federal courts, and the President's immediate personal staff, along with units of the Executive Office of the President whose sole function is to advise and assist the President.

:::reveal Why is a nonprofit foundation attached to a public university a hard coverage case worth resolving? ||| Because whether it is covered decides whether a large amount of public money is visible, the answer varies by state, and it is frequently litigated.

:::reveal What three things do you write down before filing anything? ||| The statute you are invoking, the body's exact legal name, and the office designated to receive requests, because a request in a general inbox can sit unrouted while you think a clock is running.

## Vocabulary
- **Covered body**: an entity subject to a particular records statute, which is a question of law and not of how public the entity feels.
- **Quasi-public authority**: an entity created by or attached to government whose records status often has to be litigated.
- **Custodian**: the office or officer designated to receive and answer records requests for a body.
- **Public business on a private device**: a record about official business held in personal email or on a personal phone, whose status varies by state.

## Sources
- Freedom of Information Act, 5 U.S.C. 552. https://www.law.cornell.edu/uscode/text/5/552
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "what-is-a-record",
      title: "3 · What counts as a record",
      section: "Section 1 · What a records law is",
      body: `A request succeeds or fails on whether you asked for a thing that exists in the form you described. That makes the definition of a record the most practical topic in this course.

**The working definition.** A record is documentary material an agency created or received and controls, in any format. Paper, email, text messages, databases, spreadsheets, audio, video, photographs, calendars, call logs, and metadata are all records where they exist and are controlled by the agency. Format is not the test; possession and control are.

**Ask for the artifact, not the fact.** "How many complaints did you receive about the north garage in 2025" is a question, and an agency may decline to answer it. "The complaint log for the north garage covering 1 January 2025 to 31 December 2025, in the format it is kept, including any spreadsheet or database export" is a record request. The second one also survives the common reply that no responsive record exists, because you named the underlying system rather than a summary that may never have been produced.

**Data deserves its own habit.** When you want numbers, ask for the database export rather than a report built from it, name the file format you can use, and ask for the record layout or data dictionary in the same request. Without the dictionary you get columns you cannot interpret, and requesting it separately costs another cycle. Ask also whether the system produces standard reports, because a standard report is cheap and quick even when a custom export is not.

**Two things a records act generally does not require.** Creating a record that does not exist, and answering a question. Some states do require an agency to make a reasonable effort to produce electronically stored information in an available format, which is not the same thing as building you a new analysis. Know which rule your state applies before you argue about it.

**Retention is the hidden clock.** Records are destroyed on schedules, and the schedule itself is usually a public document worth having on file for every agency on your beat. Knowing that body camera footage or call recordings are kept for a specified period tells you how long you have before the story becomes impossible, which is information a beat reporter should hold in advance rather than discover on deadline.

:::reveal What is the test for whether something is a record, if not its format? ||| Whether the agency created or received it and controls it. Paper, email, texts, databases, audio, calendars, call logs, and metadata all qualify where they exist and are controlled.

:::reveal Rewrite "how many complaints did you receive about the north garage in 2025" as a records request. ||| Ask for the complaint log for the north garage covering 1 January to 31 December 2025, in the format it is kept, including any spreadsheet or database export. Name the system, not the summary.

:::reveal What do you ask for alongside a database export, and why in the same request? ||| The record layout or data dictionary. Without it the columns cannot be interpreted, and requesting it separately costs another full response cycle.

## Vocabulary
- **Record**: documentary material an agency created or received and controls, in any format.
- **Record layout / data dictionary**: the document explaining what each field in a data set means, requested alongside the export rather than after it.
- **Standard report**: a report a system already produces on demand, usually cheaper and faster than a custom export.
- **Retention schedule**: the published timetable governing how long a class of record is kept before destruction.

## Sources
- Freedom of Information Act, 5 U.S.C. 552. https://www.law.cornell.edu/uscode/text/5/552
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "quiz-what-a-records-law-is",
      title: "4 · Knowledge check: what a records law is",
      section: "Section 1 · What a records law is",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does a public-records act govern?",
            options: [
              "What an agency must hand over on request",
              "When a governing body must deliberate in public and how much notice it owes",
              "Which categories of official may speak to the press without prior approval",
              "How long an agency must keep documents before they may lawfully be destroyed",
            ],
            correctIndex: 0,
            explanation:
              "A meetings act governs deliberation and notice. A records act governs production of existing records to a requester, and the two are separate statutes.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Where is the federal Freedom of Information Act codified?",
            options: [
              "5 U.S.C. 552",
              "Title 44 of the U.S. Code, alongside the federal records retention requirements",
              "The Administrative Procedure Act's rulemaking provisions at 5 U.S.C. 553",
              "18 U.S.C. 2511, in the chapter governing interception of communications",
            ],
            correctIndex: 0,
            explanation:
              "Knowing the citation matters because you put it in the first line of a request and in every appeal that follows.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Which Indiana chapter is the Access to Public Records Act?",
            options: [
              "Indiana Code 5-14-3",
              "Indiana Code 5-14-1.5, which is where the state's access provisions are consolidated",
              "Indiana Code 5-14-4, which establishes the office that answers access questions",
              "Indiana Code 20-30-2, which governs instructional time and school records",
            ],
            correctIndex: 0,
            explanation:
              "The Open Door Law, the meetings statute, is a different chapter at Indiana Code 5-14-1.5. Citing the wrong one in a request is the local form of the records-versus-meetings error.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Why is attending a public meeting the beginning of records work?",
            options: [
              "The meeting produces requestable records",
              "Because a reporter present at the meeting has standing to request its recordings",
              "Because attendance is a statutory precondition for requesting the body's documents",
              "Because minutes are only released to people who attended the session they cover",
            ],
            correctIndex: 0,
            explanation:
              "Agendas, packets, minutes, and the contract that was approved are all requestable.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Which of these does records law reach that meetings law does not?",
            options: [
              "Email and inspection reports",
              "The deliberations of a body that has lawfully entered executive session",
              "Advance notice of items a body intends to add to a future agenda",
              "Statements officials make to reporters outside the meeting room",
            ],
            correctIndex: 0,
            explanation:
              "Along with settlement agreements, calendars, and data, none of which a meeting necessarily touches.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "What adversary structure does records law have that meetings law mostly lacks?",
            options: [
              "Review, redaction, charges, and refusal",
              "A requirement that both parties appear before a hearing officer to resolve disputes",
              "A criminal penalty for an official who withholds a document from a journalist",
              "A statutory presumption that the requester must justify their need for the record",
            ],
            correctIndex: 0,
            explanation:
              "Each of those four steps is something a requester can contest, which is what the rest of this course is about.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Under FOIA, how much does a requester's motive usually matter?",
            options: [
              "Generally not at all",
              "It determines whether the twenty-business-day clock starts on filing or on acknowledgment",
              "It must be stated in the request, and an agency may reject a request that omits it",
              "It decides which of the nine exemptions the agency is permitted to apply",
            ],
            correctIndex: 0,
            explanation:
              "Any person may request records. The two practical exceptions are the requester category, which sets fees, and a fee-waiver argument, which is entirely about purpose.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Where does a requester's purpose actually become decisive?",
            options: [
              "In a fee-waiver argument",
              "In whether the agency must conduct a search of archived and backup systems",
              "In whether an exemption for personal privacy can be applied to the records",
              "In whether the request qualifies for review by an access ombudsman",
            ],
            correctIndex: 0,
            explanation:
              "The public-interest waiver turns on what the disclosure will contribute to public understanding and on the absence of a commercial interest.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "What is a records act NOT a right to?",
            options: [
              "Be given information",
              "Inspect records in person rather than receiving copies by mail",
              "Receive records without paying any fee for duplication",
              "Know the identity of the official who processed your request",
            ],
            correctIndex: 0,
            explanation:
              "An agency generally must produce records it has. It need not answer questions, create a document, or perform analysis for you.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "What is the most common reason a new reporter's request produces nothing?",
            options: [
              "They wrote a question",
              "They failed to state the statute they were invoking in the opening line",
              "They sent it to a general inbox rather than to the designated custodian",
              "They asked for records held on personal devices, which are exempt",
            ],
            correctIndex: 0,
            explanation:
              "A question can be declined. A record request names an artifact that exists, which is the distinction lesson 3 turns into a rewriting habit.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Which federal entity is subject to FOIA?",
            options: [
              "An independent regulatory agency",
              "A standing committee of the United States Senate and its investigative staff",
              "A federal district court's clerk of court and its docketing office",
              "The President's immediate personal staff within the Executive Office",
            ],
            correctIndex: 0,
            explanation:
              "FOIA reaches federal executive branch agencies, including executive departments, military departments, government corporations, and independent regulatory agencies.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "What happens when a reporter files a FOIA request with a congressional committee?",
            options: [
              "It is the wrong statute",
              "It is a denial that can be appealed through the Office of Government Information Services",
              "It is processed under the committee's own rules, which mirror the federal exemptions",
              "It triggers a twenty-business-day clock that runs from the date of receipt",
            ],
            correctIndex: 0,
            explanation:
              "Congress is not covered. Nothing follows from the filing, and there is no denial to appeal.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "Which law covers a county, a city, and a school district?",
            options: [
              "The state's own records act",
              "FOIA, which reaches any body receiving federal funds through a formula program",
              "Whichever act the body designates in its published records policy",
              "Both FOIA and state law, with the requester choosing which to invoke",
            ],
            correctIndex: 0,
            explanation:
              "There is no federal shortcut for state and local bodies. Using the word FOIA colloquially is harmless; addressing a request to the wrong law is not.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "Which of these is named as a hard coverage case?",
            options: [
              "A private contractor performing a public function",
              "A state agency that has been reorganized under a new department name",
              "A county office whose records are stored by a commercial cloud provider",
              "A city council committee that meets less than four times a year",
            ],
            correctIndex: 0,
            explanation:
              "Along with university-affiliated foundations, quasi-public authorities, economic development corporations, private university police, and charter schools.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "Why are the hard coverage cases frequently litigated?",
            options: [
              "The answer decides whether public money is visible",
              "Because the entities themselves lack standing to defend a records decision in court",
              "Because state acts contain no definition of a public agency, leaving courts to supply one",
              "Because federal and state statutes reach the same entities and conflict with each other",
            ],
            correctIndex: 0,
            explanation:
              "Which is why finding out the status of one on your beat is worth a dedicated afternoon and a call to a state press association.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "How do many states treat a record about public business held in an official's personal email?",
            options: [
              "As public regardless of the device",
              "As exempt, because personal accounts are outside the agency's possession and control",
              "As public only if the official copied an official account on the message",
              "As public only after a court has ordered the account to be searched",
            ],
            correctIndex: 0,
            explanation:
              "The rule varies by state and the RCFP guide records it state by state. Never assume, and never let an agency assume it for you.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "What three things does the lesson say to write down before filing?",
            options: [
              "Statute, legal name, designated office",
              "Date range, custodian, and the format the records should be produced in",
              "Fee ceiling, waiver argument, and the audience the reporting will reach",
              "Tracking number, acknowledgment date, and the promised completion date",
            ],
            correctIndex: 0,
            explanation:
              "A request in a general inbox can sit unrouted while you believe a clock is running. Agencies routinely publish the designated office.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "What is the difference between the coverage question and the custodian question?",
            options: [
              "One asks whether a body is subject to the act, the other where the record sits",
              "One is decided by statute, the other by whichever office answers the phone first",
              "One applies to state bodies, the other only to federal executive agencies",
              "One is settled at filing, the other only after a denial has been appealed",
            ],
            correctIndex: 0,
            explanation:
              "A record can be covered while sitting somewhere inconvenient, which is why the personal-device rule matters separately from coverage.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "What is the working definition of a record?",
            options: [
              "Documentary material an agency created or received and controls",
              "Any document an agency has designated as public in its published records policy",
              "A document produced in the course of a formal proceeding and entered into a file",
              "Any writing that has been signed, dated, or otherwise formally executed by an official",
            ],
            correctIndex: 0,
            explanation:
              "In any format. Possession and control are the test, not the medium.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "Which of these is a record where an agency controls it?",
            options: [
              "Metadata",
              "An official's recollection of a conversation that was never written down",
              "A summary the agency would have to compile from several systems",
              "An analysis of the data that the agency has never performed",
            ],
            correctIndex: 0,
            explanation:
              "Paper, email, texts, databases, spreadsheets, audio, video, photographs, calendars, call logs, and metadata all qualify where they exist.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "What does the lesson mean by asking for the artifact rather than the fact?",
            options: [
              "Name the log, not the count",
              "Request the physical original rather than a copy, so authenticity can be established",
              "Request the agency's interpretation of the data alongside the data itself",
              "Request only records that have already been released to another requester",
            ],
            correctIndex: 0,
            explanation:
              "How many complaints did you receive is a question. The complaint log for a named location over a named date range, in the format kept, is a records request.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "Why does naming the underlying system defeat a no-responsive-records reply?",
            options: [
              "You did not ask for a summary that may never have existed",
              "Because an agency must create a record when the requester names the system holding it",
              "Because naming a system converts the request into a demand for expedited processing",
              "Because a named system shifts the burden of searching onto the requester",
            ],
            correctIndex: 0,
            explanation:
              "A request for a summary can be answered truthfully with nothing. A request for the log or the export names something that does exist.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "What should be requested alongside a database export?",
            options: [
              "The record layout or data dictionary",
              "A signed certification that the export is a complete and accurate copy",
              "The agency's own published analysis of the same data for the same period",
              "A list of every other requester who has received the same export",
            ],
            correctIndex: 0,
            explanation:
              "In the same request. Without it you get columns you cannot interpret, and asking separately costs another full response cycle.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "Why ask whether a system produces standard reports?",
            options: [
              "A standard report is cheap and quick",
              "Because a standard report is exempt from fees under every state records act",
              "Because an agency may refuse a custom export but never a report it already runs",
              "Because standard reports carry a data dictionary that custom exports do not",
            ],
            correctIndex: 0,
            explanation:
              "Even when a custom export is expensive or slow, something the system already produces on demand may not be.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "What does a records act generally not require an agency to do?",
            options: [
              "Create a record that does not exist",
              "Release the reasonably segregable portions of a partly exempt document",
              "Tell the requester which exemption was applied to withheld material",
              "Produce records in a format the requester specified where it is available",
            ],
            correctIndex: 0,
            explanation:
              "Nor to answer a question. Some states do require reasonable effort to produce electronically stored information in an available format, which is not the same as building an analysis.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "Why does the lesson call retention the hidden clock?",
            options: [
              "Records are destroyed on schedules",
              "Because a request must be filed within a set period after a record is created",
              "Because an agency may delay a response until its retention review is complete",
              "Because retention rules determine which exemption applies to an older record",
            ],
            correctIndex: 0,
            explanation:
              "Knowing that footage or call recordings are kept for a specified period tells you how long before the story becomes impossible, which a beat reporter should know in advance.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "What does the lesson say about an agency's retention schedule itself?",
            options: [
              "It is usually a public document worth holding",
              "It is internal guidance and is generally exempt from disclosure",
              "It is set federally, so a single copy covers every agency on a beat",
              "It changes too often to be worth keeping a copy of on file",
            ],
            correctIndex: 0,
            explanation:
              "Having one on file for every agency on the beat is what turns retention from a surprise into a planning input.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "Which is the better records request?",
            options: [
              "The complaint log for a named site, 1 January to 31 December 2025",
              "Any and all documents relating in any way to complaints about parking facilities",
              "A statement of how many complaints the agency received about its garages last year",
              "The agency's explanation of why complaints about the north garage increased",
            ],
            correctIndex: 0,
            explanation:
              "It names a system, a subject, and an exact date range, and it asks for the format the record is kept in.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "Which statute is Indiana's open-meetings law?",
            options: [
              "Indiana Code 5-14-1.5",
              "Indiana Code 5-14-3, which is the state's principal access chapter",
              "Indiana Code 5-14-5, which sets out the procedure for access complaints",
              "Indiana Code 5-14-4, which creates the office that issues access opinions",
            ],
            correctIndex: 0,
            explanation:
              "The Open Door Law. The records act is a different chapter at Indiana Code 5-14-3.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Which topics does this course say it will cover after the definitions?",
            options: [
              "The informal ask, writing, fees, deadlines, exemptions, denial, appeal",
              "Interviewing, note-taking, meeting behavior, and the handoff to reporting",
              "Libel, privacy, recording consent, minors, and shield protections",
              "Verification, corroboration, corrections, and the decision not to publish",
            ],
            correctIndex: 0,
            explanation:
              "Plus Indiana as a worked example and records as a beat habit rather than a one-off.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "What does the lesson say the word FOIA is often used for colloquially?",
            options: [
              "All records requests, including state ones",
              "Only requests made to federal law enforcement and intelligence agencies",
              "Any request that has been formally denied and is heading to appeal",
              "Requests made by journalists, as distinct from those made by the public",
            ],
            correctIndex: 0,
            explanation:
              "Harmless in conversation, harmful in a request letter addressed to the wrong law.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "Whom does the lesson suggest calling about a hard coverage case?",
            options: [
              "A state press association",
              "The federal Office of Government Information Services, which mediates coverage disputes",
              "The entity's own counsel, who is obliged to state its status in writing",
              "The state attorney general, who must issue an opinion on request from any citizen",
            ],
            correctIndex: 0,
            explanation:
              "Because the status of a contractor, foundation, or quasi-public authority varies by state and is frequently litigated.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "What is the test for whether something counts as a record?",
            options: [
              "Possession and control",
              "Whether it was created by an employee acting within the scope of their duties",
              "Whether it has been formally filed into the agency's official document system",
              "Whether it exists in a format the agency can produce without conversion",
            ],
            correctIndex: 0,
            explanation:
              "Format is not the test. A text message and a database export are both records where the agency created or received them and controls them.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "Which four institutions does the lesson list as covered by state rather than federal law?",
            options: [
              "A county, a city, a school district, a sheriff",
              "A military department, a government corporation, an executive department, a regulator",
              "A federal court, a congressional committee, a White House office, an agency",
              "A charter school, a contractor, a foundation, a quasi-public authority",
            ],
            correctIndex: 0,
            explanation:
              "Along with a state agency, a public university, and a transit authority. Charter schools, contractors, foundations, and quasi-public authorities are the hard cases instead, and those are the ones whose status is unsettled.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "Under FOIA, who may request records?",
            options: [
              "Any person",
              "Any United States citizen or lawful permanent resident of the United States",
              "Any person who can show a specific need related to a pending proceeding",
              "Any organization registered with the agency as an interested party",
            ],
            correctIndex: 0,
            explanation:
              "Which is why identity and motive are generally irrelevant to whether a record must be released, with fees and waivers as the practical exceptions.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Why does the lesson describe records law as having a different failure mode from meetings law?",
            options: [
              "An agency can refuse, redact, and charge",
              "Because meetings law carries criminal penalties and records law carries only civil ones",
              "Because a meeting cannot be delayed while a records response can be extended indefinitely",
              "Because records law applies to fewer bodies than the equivalent meetings statute",
            ],
            correctIndex: 0,
            explanation:
              "Review, redaction, charges, and refusal are all steps a requester can contest, and each of them is a lesson in this course.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "What does the lesson say about a request sent to a general inbox?",
            options: [
              "It can sit unrouted",
              "It is invalid, and the agency must return it with instructions to refile",
              "It starts the statutory clock immediately, which is why it is the safer route",
              "It is automatically forwarded to the designated custodian under federal rules",
            ],
            correctIndex: 0,
            explanation:
              "While you believe a clock is running. Finding the designated office is one of the two minutes that saves a month.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "What kind of material does a records act reach that is generated outside any meeting?",
            options: [
              "Settlement agreements and calendars",
              "Draft minutes that have not yet been approved by the body that produced them",
              "Deliberations conducted in a properly noticed executive session",
              "Verbal instructions given by an official to staff during a briefing",
            ],
            correctIndex: 0,
            explanation:
              "With email, inspection reports, and data. Meetings law never touches any of it.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Why should you name a machine-readable format when requesting data?",
            options: [
              "So the result can be analyzed",
              "Because agencies are required by statute to produce data in the requester's chosen format",
              "Because machine-readable formats are exempt from duplication fees under FOIA",
              "Because a named format shortens the statutory response deadline",
            ],
            correctIndex: 0,
            explanation:
              "A scanned image of a table satisfies a request for the table and is useless. Naming the format is part of describing the record.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "What does the lesson say about requesting a wider window when a date is unknown?",
            options: [
              "Narrowing is cheap, refiling is a new clock",
              "A wider window will be rejected as overbroad and should be avoided entirely",
              "Agencies charge by date range, so a wider window always costs more",
              "The statutory deadline extends automatically for requests covering multiple years",
            ],
            correctIndex: 0,
            explanation:
              "So ask for the record type over a wider window and narrow in conversation, rather than guessing narrowly and having to file again.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "Which of these is a record request rather than a question?",
            options: [
              "The inspection reports for a named facility over a named year",
              "Whether the facility passed its most recent inspection and on what date",
              "How many violations inspectors have found at the facility since 2020",
              "Why the facility has been inspected more often than comparable sites",
            ],
            correctIndex: 0,
            explanation:
              "The other three are questions an agency may decline to answer, however reasonable they are.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "What does the lesson say about assuming a personal-device record is out of reach?",
            options: [
              "Never assume, and never let the agency assume",
              "Assume it is out of reach, since possession by an individual is not possession by the agency",
              "Assume it is reachable, since federal law now covers personal devices in every state",
              "Assume it depends on whether the official is elected or appointed",
            ],
            correctIndex: 0,
            explanation:
              "The rule varies by state, and the RCFP guide records it state by state, which is where to look before conceding the point.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "Which body type does the lesson list among the hard cases alongside charter schools?",
            options: [
              "Police agencies at private universities",
              "County sheriffs, whose records are held by an elected rather than appointed official",
              "State legislative committees, which are covered by the legislature's own rules",
              "Municipal utilities, which operate under a separate rate-setting statute",
            ],
            correctIndex: 0,
            explanation:
              "With contractors performing public functions, university and hospital foundations, quasi-public authorities, and economic development corporations.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "What is the practical consequence of records law reaching email?",
            options: [
              "A beat extends past what was ever said publicly",
              "An agency must monitor employee correspondence to remain compliant with the act",
              "A requester may compel an official to produce their personal account credentials",
              "Every message becomes a permanent record that can never lawfully be deleted",
            ],
            correctIndex: 0,
            explanation:
              "Email, inspection reports, settlements, calendars, and data are all outside anything a meeting produces.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "What does the lesson say about the phrase recent records in a request?",
            options: [
              "Give a start date and an end date",
              "Use it, because it obliges the agency to produce whatever is currently active",
              "Use it only for data requests, where a date range would exclude live records",
              "Avoid dates entirely, since a date range can be read as excluding responsive material",
            ],
            correctIndex: 0,
            explanation:
              "Recent and current mean nothing to a processor, and vague ranges are where requests die.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "What kind of statement is no responsive records, according to this course?",
            options: [
              "A claim about a search",
              "A binding determination that the material has never existed in any agency system",
              "A denial under a specific exemption that must be identified in the letter",
              "An acknowledgment that starts the appeal clock running from the date sent",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the reply is to ask which systems were searched, with what terms, over what range, and by whom.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "Why does knowing a body's exact legal name matter?",
            options: [
              "A misnamed body can be treated as no body at all",
              "Because the statutory deadline is calculated from the legal name's registration date",
              "Because fee schedules are published under legal names rather than common names",
              "Because an agency may not release records to a requester who misnames it",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the three things written down before filing, alongside the statute invoked and the designated office.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "Which of these is the correct order of the two questions before filing?",
            options: [
              "Is the body covered, then where does the record sit",
              "How much will it cost, then which exemption is likely to be claimed",
              "What is the deadline, then who will process the request inside the agency",
              "What format is available, then which appeal route the state provides",
            ],
            correctIndex: 0,
            explanation:
              "Coverage is a question of law about the body. Custody is a question about where a covered record physically lives.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "What kind of document is a call log, for records purposes?",
            options: [
              "A record",
              "Metadata, which most acts treat as outside the definition of a record",
              "A system artifact, produced automatically and therefore not created by the agency",
              "A summary, which an agency is not required to compile on request",
            ],
            correctIndex: 0,
            explanation:
              "Along with calendars, audio, video, photographs, and metadata, where the agency created or received them and controls them.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "What is the risk of relying only on what a meeting produced?",
            options: [
              "You never see the email or the inspection report",
              "You miss the statutory deadline for challenging what the body decided",
              "You lose the right to request the same material later under the records act",
              "You are limited to the exemptions the meetings statute allows",
            ],
            correctIndex: 0,
            explanation:
              "The meeting is where the record starts. Records law is what reaches everything the meeting never mentioned.",
            sourceLessonSlug: "records-not-meetings",
          },
        ],
      },
    },
    // ── Section 2 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "before-you-file",
      title: "5 · Before you file: the informal ask",
      section: "Section 2 · Writing a request that works",
      body: `A formal request is a legal instrument with a clock, a fee, and an appeal route. It is also slow, and on a beat the fastest route to a document is frequently a phone call.

**Ask for it first.** Much of what a reporter needs is routinely released, already published, or a two-minute retrieval for someone who knows where it lives. Call the office, describe what you want, and ask whether it can simply be sent. Agencies say yes more often than reporters expect, because a released document costs the agency less than a processed request.

**Ask the records officer what exists, before asking for it.** This is the highest-value conversation in the whole process and almost nobody has it. Describe the subject rather than the document, and ask what systems hold it, what the fields are called, and what a request would have to say to reach them. You are not asking for a favor, you are avoiding a request that is unanswerable as written. A records officer who has been treated as a person is also the one who tells you that the thing you want is called something else entirely.

**Then file anyway, when it matters.** Informal cooperation has no clock and no record. If the document is central, if there is any chance of a denial, or if you may need to show later that you asked, file the formal request as well. A verbal no is not appealable. A written denial is.

**Write it to be forwarded.** Your request will be read by someone who was not on the call, and possibly by a lawyer. Keep it plain, keep it specific, and do not editorialize about why the agency should be ashamed. The tone that gets records is the tone of somebody who expects the law to work.

**Log everything from the start.** Date filed, the exact text sent, the recipient, the tracking number, every acknowledgment, every promised date, and every extension. On a beat you will have a dozen requests open across a year, and the ones that get lost are the ones nobody can prove were filed. That log is also what turns a pattern of agency delay into its own story, which is a story only the reporter with records can write.

:::reveal What is the highest-value conversation in the records process, and what makes it different from asking for a document? ||| Asking the records officer what exists: which systems hold the subject, what the fields are called, and what a request would have to say. You are avoiding a request that is unanswerable as written.

:::reveal Why file formally even when an agency has agreed to send something informally? ||| Informal cooperation has no clock and no record, and a verbal no is not appealable. A written denial is.

:::reveal What does a complete request log let a reporter write that nobody else can? ||| The story about the agency's own pattern of delay, which requires dates, promised deadlines, and extensions that only a maintained log holds.

## Vocabulary
- **Informal ask**: a direct request to an office for a document, faster than a filing and carrying no clock or appeal right.
- **Records officer**: the staff member who processes requests, and the best available guide to what systems actually exist.
- **Request log**: the running record of date filed, text sent, recipient, tracking number, acknowledgments, and promised dates.
- **Appealable denial**: a refusal in writing, which is the only kind you can contest.

## Sources
- Freedom of Information Act, 5 U.S.C. 552. https://www.law.cornell.edu/uscode/text/5/552`,
    },
    {
      slug: "writing-the-request",
      title: "6 · Writing the request",
      section: "Section 2 · Writing a request that works",
      body: `A good request is short, specific, and impossible to misread in a way that lets an agency send you nothing while technically complying.

**The seven parts.** One: the statute you are invoking, by name and citation. Two: the records sought, described by what they are, who holds them, and the exact date range. Three: the format you want, naming a machine-readable one where data is involved. Four: a request for the record layout when you asked for data. Five: your fee position, which is either a stated ceiling above which you want to be contacted, a fee-waiver argument, or both. Six: a request that partial releases be sent as they become available, so a large request does not sit until the last page is ready. Seven: your contact details and a note that you are happy to narrow the request in conversation.

**Date ranges are where requests die.** "Recent" and "current" mean nothing to a processor. Give a start date and an end date. If you do not know when something happened, ask for the record type over a wider window and narrow later, because narrowing is cheap and refiling is a new clock.

**Name the custodian and the system when you can.** "All emails" is the request most likely to produce a large fee estimate and a long delay. "Emails between the deputy director and any address at the vendor's domain, 1 March to 30 June 2025" is a request an agency can actually run, and it is far harder to answer with nothing.

**Include the offer to narrow, and mean it.** A request that says you will discuss scope converts an adversarial process into a workable one, and in several jurisdictions an agency is expected to help a requester refine an unclear request. It also protects you: if an agency later says the request was too vague to process, the offer sitting in the original text is evidence you were reachable.

**Ask for partial releases explicitly, because it changes the timeline.** Without that line, a request for two years of inspection reports may produce nothing at all until every page has been reviewed. With it, you may be reporting from the first tranche while the rest is processed.

**One request, one subject.** Bundling five unrelated things into one filing means all five move at the speed of the slowest and get denied together. File separately and track separately.

:::reveal Which two lines make a large request produce material sooner rather than all at once? ||| The request that partial releases be sent as they become available, and a stated offer to narrow the scope in conversation.

:::reveal Why is "all emails" a worse request than a named sender, a named domain, and a date range? ||| Because it invites a large fee estimate and a long delay, while a scoped request is something an agency can actually run and is far harder to answer with nothing.

:::reveal Why file five unrelated requests separately rather than as one? ||| Bundled requests move at the speed of the slowest item and can be denied together. Separate filings move and are tracked independently.

## Vocabulary
- **Scope**: the boundaries of a request, set by custodian, system, record type, and date range.
- **Machine-readable format**: a format such as CSV or a database export that can be analyzed, as opposed to a scanned image of a table.
- **Partial release**: production of responsive records in tranches as review completes, requested explicitly or it may not happen.
- **Offer to narrow**: the line inviting the agency to discuss scope, which speeds processing and evidences your cooperation.

## Sources
- Freedom of Information Act, 5 U.S.C. 552. https://www.law.cornell.edu/uscode/text/5/552`,
    },
    {
      slug: "fees-and-waivers",
      title: "7 · Fees, and the public-interest waiver",
      section: "Section 2 · Writing a request that works",
      body: `A fee estimate is the most common way a request dies quietly, and it is also the step where a reporter has the most specific leverage, because the federal rules are written down.

**FOIA sorts requesters into four categories, and the category decides the bill.** Commercial-use requesters can be charged for search, review, and duplication. Educational and noncommercial scientific institutions are charged for duplication only. Representatives of the news media are charged for duplication only. Everyone else is charged for search and duplication but not review. The statutory fee provisions are at 5 U.S.C. 552(a)(4)(A).

**Two free allowances sit on top of that.** The statute directs that fees not be charged for the first two hours of search time or the first one hundred pages of duplication for requesters who are not commercial-use. Small requests are therefore often free, and knowing this stops a reporter from abandoning one over an estimate that should not exist.

**Claim the news-media category, and say why.** A freelancer, a student journalist, and a newsletter writer can all qualify; the category turns on gathering information of current interest and distributing it to an audience, not on holding a staff job. State that you are a representative of the news media, name where the work will be published, and say the request is not for commercial use.

**The public-interest waiver is a separate argument with a statutory test.** Fees shall be waived or reduced where disclosure of the information is in the public interest because it is likely to contribute significantly to public understanding of the operations or activities of the government and is not primarily in the commercial interest of the requester (5 U.S.C. 552(a)(4)(A)(iii)). Write to the test. Say what the records will show about how government operates, why that is not already public, who the audience is, and that you have no commercial interest in it. A waiver request that only says the public deserves to know is rejected because it argued nothing.

**States differ, and some differ sharply.** State acts set their own fee schedules, and some permit charges the federal act does not, including staff time. Copy fees are often capped by statute or regulation at a per-page rate. Find your state's rule before you accept an estimate, and ask for a written itemization of any estimate you doubt.

**Practical moves when an estimate lands.** Ask for the itemization. Ask what would make it cheaper, since narrowing a date range or accepting an existing standard report often collapses the number. Ask whether the record is already published. And ask for the free allowance to be applied, because it is not always applied automatically.

:::reveal Under FOIA, what may a representative of the news media be charged for? ||| Duplication only. Search and review are not chargeable to that category, and the first one hundred pages of duplication are free.

:::reveal State the two halves of the FOIA public-interest fee-waiver test. ||| That disclosure is likely to contribute significantly to public understanding of the operations or activities of the government, and that it is not primarily in the commercial interest of the requester.

:::reveal Name three questions to ask when a fee estimate arrives. ||| Ask for a written itemization, ask what would make it cheaper such as a narrower range or an existing standard report, and ask whether the free allowance has been applied.

## Vocabulary
- **Requester category**: the FOIA classification, commercial, educational or scientific, news media, or all other, that determines chargeable costs.
- **Representative of the news media**: a requester who gathers information of current interest and distributes it to an audience, which does not require a staff job.
- **Public-interest fee waiver**: a reduction or waiver granted where disclosure significantly advances public understanding of government and is not primarily commercial.
- **Itemization**: the written breakdown of a fee estimate, which is what makes an estimate contestable.

## Sources
- Freedom of Information Act, 5 U.S.C. 552(a)(4)(A). https://www.law.cornell.edu/uscode/text/5/552
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "quiz-writing-the-request",
      title: "8 · Knowledge check: writing a request that works",
      section: "Section 2 · Writing a request that works",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is a formal request, described as an instrument?",
            options: [
              "A legal filing with a clock, a fee, and an appeal route",
              "A courtesy notice that an agency may honor or decline at its discretion",
              "A demand that suspends an agency's authority to destroy responsive records",
              "An administrative step that must precede any conversation with a records officer",
            ],
            correctIndex: 0,
            explanation:
              "It is also slow, which is why the fastest route to a document on a beat is frequently a phone call first.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "Why do agencies often release a document informally when asked?",
            options: [
              "It costs them less than a processed request",
              "Because informal release removes their ability to charge a duplication fee",
              "Because a released document restarts the statutory clock in their favor",
              "Because informal release exempts them from logging the request publicly",
            ],
            correctIndex: 0,
            explanation:
              "Much of what a reporter needs is routinely released, already published, or a two-minute retrieval for whoever knows where it lives.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What is the highest-value conversation in the records process?",
            options: [
              "Asking the records officer what exists",
              "Asking the agency's counsel which exemptions they intend to claim in advance",
              "Asking the press office to confirm whether a story is worth pursuing at all",
              "Asking a competing reporter what they have already obtained from the same agency",
            ],
            correctIndex: 0,
            explanation:
              "Describe the subject rather than the document, and ask what systems hold it, what the fields are called, and what a request would have to say to reach them.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What is a records officer able to tell you that no document can?",
            options: [
              "That the thing you want is called something else",
              "Which exemption a court would uphold if the request were denied",
              "Whether the agency intends to release the material to any other requester",
              "How long the record will be retained before it is destroyed under schedule",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the conversation is framed as avoiding an unanswerable request rather than as asking a favor.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "Why file formally even after an agency agrees to send something?",
            options: [
              "A verbal no is not appealable",
              "Because informal release is unlawful unless a formal request is also on file",
              "Because a formal filing entitles the reporter to a fee waiver on the same material",
              "Because agencies must log informal releases and will refuse them without a filing",
            ],
            correctIndex: 0,
            explanation:
              "Informal cooperation has no clock and no record. File when the document is central, when a denial is possible, or when you may need to show later that you asked.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "Whom should a request be written to be read by?",
            options: [
              "Someone who was not on the call",
              "The official whose conduct the resulting story is most likely to scrutinize",
              "The reporter's own editor, who must approve the scope before it is sent",
              "A judge, since the wording will be quoted verbatim in any eventual litigation",
            ],
            correctIndex: 0,
            explanation:
              "And possibly a lawyer. Keep it plain and specific, and do not editorialize about why the agency should be ashamed.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What tone does the lesson say gets records?",
            options: [
              "Someone who expects the law to work",
              "Someone prepared to escalate immediately if the response is anything short of full",
              "Someone offering to withhold publication in exchange for cooperation",
              "Someone apologizing for the burden the request places on the agency",
            ],
            correctIndex: 0,
            explanation:
              "The request will be forwarded and read by strangers, which is the practical reason editorializing costs you material.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What does a complete request log record?",
            options: [
              "Date, text, recipient, tracking number, promises, extensions",
              "The reporter's assessment of how cooperative each agency has been over time",
              "Only the requests that produced documents, since denials are tracked separately",
              "The exemptions claimed, so a pattern can be raised with the agency's counsel",
            ],
            correctIndex: 0,
            explanation:
              "On a beat you will have a dozen open across a year, and the ones that get lost are the ones nobody can prove were filed.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What story does a maintained request log make possible?",
            options: [
              "The agency's own pattern of delay",
              "A ranking of which reporters at an outlet obtain the most documents",
              "An estimate of how much the agency spends processing requests each year",
              "A prediction of which requests will be denied before they are filed",
            ],
            correctIndex: 0,
            explanation:
              "It requires dates, promised deadlines, and extensions, which only a log holds. It is a story only the reporter with records can write.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "How many parts does the lesson give for a well-formed request?",
            options: [
              "Seven",
              "Three: the statute, the records sought, and the requester's contact details",
              "Twelve, one for each element a denial letter is required to address",
              "Four, matching the statute, the scope, the format, and the fee position",
            ],
            correctIndex: 0,
            explanation:
              "Statute, records sought, format, record layout, fee position, partial releases, and contact details with an offer to narrow.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "What is the first part of a well-formed request?",
            options: [
              "The statute invoked, by name and citation",
              "A description of the story the records are intended to support",
              "A statement of the requester's profession and employer",
              "The date range, which determines how the agency scopes its search",
            ],
            correctIndex: 0,
            explanation:
              "It tells a processor which law governs the response and which deadline and appeal route attach to it.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "Where do requests most often die, per the lesson?",
            options: [
              "The date range",
              "The fee position, because an unstated ceiling invites an unaffordable estimate",
              "The format, because an unnamed format produces unusable scanned images",
              "The salutation, because an unaddressed request is never routed to a custodian",
            ],
            correctIndex: 0,
            explanation:
              "Recent and current mean nothing to a processor. Give a start date and an end date.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "Why is a wider date range better than a guess when the timing is unknown?",
            options: [
              "Narrowing is cheap and refiling is a new clock",
              "Because a wider range qualifies the request for expedited processing",
              "Because an agency must search the widest range a request could plausibly cover",
              "Because fee waivers apply only to requests covering more than one year",
            ],
            correctIndex: 0,
            explanation:
              "You can narrow in conversation at no cost. Filing again after a too-narrow guess starts the whole process over.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "Why is a request for all emails a poor request?",
            options: [
              "It invites a large fee estimate and a long delay",
              "It is barred by statute, since email is exempt from most state records acts",
              "It cannot be appealed, because an overbroad request is deemed never filed",
              "It obliges the agency to search personal accounts, which extends the deadline",
            ],
            correctIndex: 0,
            explanation:
              "Named senders, a named domain, and a date range give an agency something it can actually run, and are far harder to answer with nothing.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "What does including an offer to narrow protect you from later?",
            options: [
              "The claim that the request was too vague to process",
              "A fee estimate that exceeds the ceiling you stated in the original filing",
              "An exemption claimed over material that was never within your scope",
              "A retention schedule that destroys the records before the response is due",
            ],
            correctIndex: 0,
            explanation:
              "The offer sitting in the original text is evidence you were reachable, and in several jurisdictions an agency is expected to help refine an unclear request.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "What does the partial-release line change?",
            options: [
              "You can report from the first tranche",
              "It shortens the statutory determination deadline from twenty days to ten",
              "It waives the agency's right to charge duplication fees on later tranches",
              "It obliges the agency to release exempt material pending its appeal decision",
            ],
            correctIndex: 0,
            explanation:
              "Without it, a request for two years of inspection reports may produce nothing at all until every page has been reviewed.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "Why file five unrelated requests separately?",
            options: [
              "Bundled requests move at the speed of the slowest",
              "Because an agency may charge a separate fee for each subject inside one filing",
              "Because a bundled request cannot be appealed until every part is resolved",
              "Because separate filings each qualify for their own free duplication allowance",
            ],
            correctIndex: 0,
            explanation:
              "And they can be denied together. Separate filings move and are tracked independently.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "What three things scope a request?",
            options: [
              "Custodian, record type, date range",
              "Fee ceiling, format, and the audience the reporting will reach",
              "Statute, appeal route, and the deadline the agency is working to",
              "Exemption, redaction standard, and the segregability of the material",
            ],
            correctIndex: 0,
            explanation:
              "Plus the system holding the material where you can name it, which is what converts an unrunnable request into a runnable one.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "How many requester categories does FOIA use for fees?",
            options: [
              "Four",
              "Two, splitting commercial requesters from everyone else",
              "Nine, matching the number of exemptions in the statute",
              "Three, covering media, academic, and general public requesters",
            ],
            correctIndex: 0,
            explanation:
              "Commercial use, educational and noncommercial scientific institutions, representatives of the news media, and all other requesters.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What may a commercial-use requester be charged under FOIA?",
            options: [
              "Search, review, and duplication",
              "Duplication only, with the first one hundred pages provided at no charge",
              "Search and duplication, but never the cost of reviewing records for exemptions",
              "Nothing, since commercial requesters are outside the fee provisions entirely",
            ],
            correctIndex: 0,
            explanation:
              "It is the only category that can be charged for review, which is why the category you claim matters.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What may a representative of the news media be charged under FOIA?",
            options: [
              "Duplication only",
              "Search and duplication, matching the treatment of all other requesters",
              "Search, review, and duplication, less a waiver for the first two hours",
              "Nothing at all, since news media requests are presumed to be in the public interest",
            ],
            correctIndex: 0,
            explanation:
              "The same treatment as educational and noncommercial scientific institutions. Search and review are not chargeable.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What are the two statutory free allowances for non-commercial requesters?",
            options: [
              "Two hours of search and one hundred pages",
              "Ten business days of processing and fifty pages of duplication",
              "One waiver per calendar year and unlimited inspection in person",
              "Twenty-five percent of the estimate and any electronic delivery",
            ],
            correctIndex: 0,
            explanation:
              "Which is why small requests are often free, and why abandoning one over an estimate that should not exist is a real loss.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What does the news-media category actually turn on?",
            options: [
              "Gathering information of current interest and distributing it",
              "Holding a salaried staff position at an established news organization",
              "Publication in a periodical with a verified paid circulation",
              "Possession of press credentials issued by the agency being asked",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a freelancer, a student journalist, and a newsletter writer can all qualify.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What should a requester state when claiming the news-media category?",
            options: [
              "Where the work will be published and that it is not commercial",
              "The expected audience size and the outlet's annual revenue",
              "The story's angle and which officials will be asked to comment",
              "A prior release from the same agency establishing the category",
            ],
            correctIndex: 0,
            explanation:
              "The claim is an assertion the agency evaluates, so it should carry the two facts the category turns on.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What is the first half of the FOIA public-interest fee-waiver test?",
            options: [
              "Likely to contribute significantly to public understanding of government",
              "That the requester has been unable to obtain the records by any other means",
              "That the records concern a matter currently before a legislative body",
              "That the estimated fee exceeds what the requester can reasonably pay",
            ],
            correctIndex: 0,
            explanation:
              "Specifically, understanding of the operations or activities of the government. The second half is the absence of a primary commercial interest.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What is the second half of the fee-waiver test?",
            options: [
              "Not primarily in the commercial interest of the requester",
              "That the requester qualifies as a representative of the news media",
              "That the agency has already released similar records without charge",
              "That the request covers fewer than one hundred pages of duplication",
            ],
            correctIndex: 0,
            explanation:
              "Both halves have to be argued. The provisions are at 5 U.S.C. 552(a)(4)(A)(iii).",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "Why is a waiver request that says the public deserves to know rejected?",
            options: [
              "It argued nothing",
              "Because the statute requires a waiver request to be filed before the records request",
              "Because public interest is presumed and therefore need not be argued at all",
              "Because only an outlet's counsel may make a fee-waiver argument on its behalf",
            ],
            correctIndex: 0,
            explanation:
              "Write to the test: what the records will show about how government operates, why it is not already public, who the audience is, and that you hold no commercial interest.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "How do state fee rules differ from the federal ones?",
            options: [
              "Some permit charges FOIA does not, including staff time",
              "They are preempted by FOIA wherever a state receives federal funding",
              "They are uniform across states under a model act adopted in every jurisdiction",
              "They apply only to commercial requesters, leaving journalists unbilled",
            ],
            correctIndex: 0,
            explanation:
              "Copy fees are often capped by statute or regulation at a per-page rate. Find your state's rule before accepting an estimate.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What is the first thing to ask for when a fee estimate arrives?",
            options: [
              "A written itemization",
              "An extension of the response deadline while the estimate is reviewed",
              "A statement of which exemptions will be applied to the released material",
              "Confirmation that the agency will accept payment after delivery",
            ],
            correctIndex: 0,
            explanation:
              "The itemization is what makes an estimate contestable, and it is often the point at which a number quietly shrinks.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What often collapses a large fee estimate?",
            options: [
              "A narrower date range or an existing standard report",
              "A formal appeal filed within the statutory window for challenging fees",
              "Claiming the educational rather than the news-media requester category",
              "Agreeing to inspect the records in person rather than receiving copies",
            ],
            correctIndex: 0,
            explanation:
              "Ask what would make it cheaper, and ask whether the record is already published, before treating the number as final.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What does the lesson say about the statutory free allowance and estimates?",
            options: [
              "Ask for it, because it is not always applied automatically",
              "It is applied by default, so raising it signals inexperience to the processor",
              "It applies only after an appeal has been filed and partially sustained",
              "It cannot be combined with a claim to the news-media requester category",
            ],
            correctIndex: 0,
            explanation:
              "The first two hours of search and the first hundred pages of duplication are free for non-commercial requesters, which makes many small requests free.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "Why is the fee estimate described as where a request dies quietly?",
            options: [
              "The requester simply stops responding",
              "Because an unpaid estimate is treated as a withdrawal and cannot be appealed",
              "Because agencies are permitted to destroy records once an estimate is unpaid",
              "Because an estimate suspends the statutory clock for an indefinite period",
            ],
            correctIndex: 0,
            explanation:
              "It is also the step where a reporter has the most specific leverage, because the federal rules are written down and citable.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "Where are the FOIA fee provisions located?",
            options: [
              "5 U.S.C. 552(a)(4)(A)",
              "5 U.S.C. 552(b), alongside the nine exemptions",
              "5 U.S.C. 552(a)(6), with the determination deadline",
              "5 U.S.C. 552(a)(8)(A), with the foreseeable harm standard",
            ],
            correctIndex: 0,
            explanation:
              "The waiver test specifically is at 552(a)(4)(A)(iii), which is the subsection to name in a waiver argument.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "Which record types are described as frequently available through the informal ask?",
            options: [
              "Ones routinely released or already published",
              "Records that have been the subject of a prior denial and later appeal",
              "Records held in personal accounts, which agencies prefer to release voluntarily",
              "Records that an exemption covers but the agency chooses not to withhold",
            ],
            correctIndex: 0,
            explanation:
              "Much of what a reporter needs is a two-minute retrieval for somebody who knows where it lives.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What does the lesson say a request should never contain?",
            options: [
              "Editorializing about the agency",
              "The requester's telephone number, which invites informal handling instead",
              "A stated fee ceiling, which caps what the agency may release",
              "A reference to a prior request, which restarts the processing queue",
            ],
            correctIndex: 0,
            explanation:
              "It will be forwarded to people who were not on the call, and possibly to a lawyer. Plain and specific is what travels.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What is the fifth part of a well-formed request?",
            options: [
              "Your fee position",
              "The tracking number assigned to any previous related request",
              "A statement of the statutory deadline you expect the agency to meet",
              "The names of officials whose records are most likely to be responsive",
            ],
            correctIndex: 0,
            explanation:
              "Either a stated ceiling above which you want to be contacted, a fee-waiver argument, or both.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "Why does a stated fee ceiling belong in the original request?",
            options: [
              "So an estimate triggers a conversation, not a stall",
              "Because a ceiling caps what the agency may lawfully charge for the request",
              "Because it converts the request into a commercial-use filing under FOIA",
              "Because without one an agency may refuse to process the request at all",
            ],
            correctIndex: 0,
            explanation:
              "It tells the processor when to come back to you rather than issuing a number and waiting.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "What does the lesson mean by writing a request that cannot be misread?",
            options: [
              "It cannot be answered with nothing while technically complying",
              "It uses only terms defined in the statute the request invokes",
              "It has been reviewed by counsel before being sent to the agency",
              "It restates the request three times, in different phrasings",
            ],
            correctIndex: 0,
            explanation:
              "Short, specific, and scoped by custodian, system, record type, and date range.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "What is the practical value of asking a records officer what the fields are called?",
            options: [
              "Your request reaches the system rather than missing it",
              "It obliges the agency to produce the data dictionary without a separate request",
              "It establishes a record that the agency understood what was being sought",
              "It qualifies the request for expedited processing under the compelling-need test",
            ],
            correctIndex: 0,
            explanation:
              "The most common cause of a fruitless request is that the reporter's vocabulary did not match the agency's.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What does the lesson say about calls versus written follow-up in the request process?",
            options: [
              "Calls build the relationship, writing builds the file",
              "Calls are the only channel that starts a statutory clock running",
              "Written follow-up should be avoided, since it creates a discoverable record",
              "Calls should replace written requests entirely once a relationship exists",
            ],
            correctIndex: 0,
            explanation:
              "Which is why informal cooperation is pursued alongside a formal filing rather than instead of one.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "Which two things does the lesson pair when requesting data?",
            options: [
              "The machine-readable export and the record layout",
              "The standard report and the agency's published analysis of it",
              "The fee waiver and the expedited processing request",
              "The retention schedule and the destruction certificate",
            ],
            correctIndex: 0,
            explanation:
              "They belong in the same filing, because a dictionary requested afterward costs another full cycle.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "What does the sixth part of a well-formed request ask for?",
            options: [
              "Partial releases as they become available",
              "A written estimate before any work is performed on the request",
              "An acknowledgment within one business day of receipt",
              "Confirmation of which exemptions the agency expects to apply",
            ],
            correctIndex: 0,
            explanation:
              "Without it a large request may sit entirely unproduced until the final page has been reviewed.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "Which requester category pays for search but not review under FOIA?",
            options: [
              "All other requesters",
              "Representatives of the news media, who pay search but never review",
              "Educational institutions, which pay search and duplication only",
              "Commercial-use requesters, who are exempt from review charges",
            ],
            correctIndex: 0,
            explanation:
              "News media and educational or scientific institutions pay duplication only. Commercial-use requesters pay all three.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What does the lesson advise about an estimate you doubt?",
            options: [
              "Ask for a written itemization",
              "Pay it and recover the cost through an appeal after the records arrive",
              "Withdraw the request and refile it in a narrower form the next month",
              "Refer it to the agency's inspector general as a possible overcharge",
            ],
            correctIndex: 0,
            explanation:
              "State acts often cap copy fees, and an itemization is what lets you check the number against the rule.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "Why does the lesson call the informal ask faster than a filing?",
            options: [
              "A filing has a clock measured in weeks",
              "Because informal requests are exempt from the review step agencies must perform",
              "Because an informal request may be made to any employee rather than a custodian",
              "Because informal requests bypass the fee schedule entirely under federal law",
            ],
            correctIndex: 0,
            explanation:
              "The clock, the fee, and the appeal route are what make a formal request powerful and slow at the same time.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What does the request log prove that memory cannot?",
            options: [
              "That a request was filed and when",
              "That an exemption was claimed without a foreseeable harm being articulated",
              "That an agency searched the wrong system when it reported no records",
              "That the reporter qualified for the news-media requester category",
            ],
            correctIndex: 0,
            explanation:
              "With a dozen requests open across a year, the ones that get lost are the ones nobody can prove were filed.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What does the offer to narrow convert the process into?",
            options: [
              "Something workable rather than adversarial",
              "A negotiation in which the agency sets the final scope unilaterally",
              "An informal ask, which withdraws the statutory clock and the appeal right",
              "A joint filing, in which the agency shares responsibility for the wording",
            ],
            correctIndex: 0,
            explanation:
              "And in several jurisdictions an agency is expected to help a requester refine an unclear request, so the offer meets them where they already are.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "Which detail makes an email request runnable by an agency?",
            options: [
              "A named sender, a named domain, and a date range",
              "A statement that the request covers personal as well as official accounts",
              "A list of every keyword the agency should use in its search",
              "An instruction to search all archived and backup systems without limitation",
            ],
            correctIndex: 0,
            explanation:
              "Emails between the deputy director and any address at the vendor's domain, over three named months, is something a processor can execute.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "What is the seventh part of a well-formed request?",
            options: [
              "Contact details and an offer to narrow",
              "A signature block naming the outlet's counsel as an alternate contact",
              "A statement of the deadline by which the story must publish",
              "A citation to a prior release of similar records by the same agency",
            ],
            correctIndex: 0,
            explanation:
              "The offer to narrow is what makes the contact details useful, because it invites the call that resolves scope.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "Why does the lesson describe fee rules as the requester's most specific leverage?",
            options: [
              "They are written down and citable",
              "Because a fee dispute suspends the agency's authority to withhold records",
              "Because an agency that overcharges forfeits its exemptions on appeal",
              "Because fee decisions are the only ones an ombudsman may overturn",
            ],
            correctIndex: 0,
            explanation:
              "Categories, free allowances, and the waiver test all sit in the statute, so an argument about them is an argument about text rather than sentiment.",
            sourceLessonSlug: "fees-and-waivers",
          },
        ],
      },
    },
    // ── Section 3 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "deadlines-and-delay",
      title: "9 · Deadlines, acknowledgment, and delay",
      section: "Section 3 · The answer, and the answer that is not one",
      body: `Records statutes set deadlines, and the deadline is almost never the date you receive documents. Understanding what the clock actually measures is what keeps a reporter from waiting politely for a year.

**What the federal clock measures.** FOIA gives an agency twenty business days to DETERMINE whether it will comply with a request and to notify the requester of that determination and of the right to appeal, with up to ten additional business days in unusual circumstances (5 U.S.C. 552(a)(6)). A determination is not delivery. An agency can meet the deadline by telling you it will produce records and then take months to produce them, which is lawful and infuriating and is the single most misunderstood feature of the statute.

**Acknowledgment, tracking, and the estimated date.** Expect a tracking number, and ask for an estimated completion date if none is given. That estimate is the thing you hold the agency to in every follow-up, and the thing you cite when the delay itself becomes reportable.

**Constructive denial.** When an agency blows the deadline entirely, the failure to respond is generally treated as a denial for the purpose of moving to the next stage, which under FOIA means the administrative appeal is available and the requester is generally deemed to have exhausted administrative remedies. In plain terms, silence is an answer you can escalate, and treating it as merely rude is a mistake.

**Expedited processing exists and is underused.** FOIA provides for expedited processing where the requester demonstrates a compelling need, which includes a person primarily engaged in disseminating information showing an urgency to inform the public about actual or alleged federal government activity. If your story has a real clock, make the request and say why, in the original filing rather than three weeks later.

**Follow up on a schedule, in writing.** Every two weeks, short, referencing the tracking number and the last promised date. Written follow-up creates the record that the appeal or the story will need. Phone calls are for building the relationship, not for building the file.

**And keep working.** A pending request is not a reason to stop reporting. The document you are waiting for may exist in a court exhibit, a vendor's own filing, a neighboring jurisdiction's copy, or the hands of someone who already has it.

:::reveal What does the twenty-business-day FOIA clock actually measure? ||| The time to make and communicate a determination on whether the agency will comply, plus notice of appeal rights. It is not a delivery deadline, and up to ten more business days are available in unusual circumstances.

:::reveal What is a constructive denial, and why does it help you? ||| A missed deadline treated as a denial, which opens the next stage. Under FOIA the requester is generally deemed to have exhausted administrative remedies, so silence becomes something you can escalate.

:::reveal What is the standard for expedited processing under FOIA, and when do you ask? ||| A demonstrated compelling need, including urgency to inform the public about federal government activity by a person primarily engaged in disseminating information. Ask in the original filing, not weeks later.

## Vocabulary
- **Determination**: an agency's decision on whether it will comply with a request, which is what the statutory deadline measures.
- **Unusual circumstances**: the statutory basis for extending the FOIA determination window by up to ten business days.
- **Constructive denial**: treating a missed deadline as a denial so the next stage of the process opens.
- **Expedited processing**: faster handling granted on a showing of compelling need, requested at filing.

## Sources
- Freedom of Information Act, 5 U.S.C. 552(a)(6). https://www.law.cornell.edu/uscode/text/5/552`,
    },
    {
      slug: "exemptions-and-redaction",
      title: "10 · Exemptions, redaction, and the answer that will not say",
      section: "Section 3 · The answer, and the answer that is not one",
      body: `An exemption is a category of material an agency may withhold. It is permission to withhold something, not permission to withhold everything in the same file, and that distinction is where most of a reporter's leverage lives.

**FOIA has nine exemptions**, at 5 U.S.C. 552(b). In rough terms: national security classification; internal personnel rules and practices; matters exempted by another statute; trade secrets and confidential commercial information; inter-agency and intra-agency memoranda covered by a privilege, best known as the deliberative process exemption; personnel and medical files whose disclosure would be a clearly unwarranted invasion of personal privacy; law enforcement records under six specified harms; records about financial institution supervision; and geological and geophysical information about wells.

**Segregability is the rule reporters forget.** Any reasonably segregable portion of a record must be released after deletion of the exempt parts. So the correct response to a wholly withheld document is rarely acceptance; it is a request for the segregable portions and for a statement of what was withheld and under which exemption.

**The foreseeable harm standard tightened the deliberative exemption.** Under the FOIA Improvement Act of 2016, an agency shall withhold information only if it reasonably foresees that disclosure would harm an interest protected by an exemption, or if disclosure is prohibited by law (5 U.S.C. 552(a)(8)(A)). The same Act placed a twenty-five-year limit on the deliberative process privilege in exemption five. Both are worth citing by name in an appeal, because they change the question from may you withhold this to what harm do you foresee.

**Glomar: the refusal to say whether a record exists.** Some agencies respond that they can neither confirm nor deny the existence of responsive records, a practice named for the Hughes Glomar Explorer and the litigation in *Phillippi v. CIA* (1976). It is not the same as a denial, because there is nothing yet to segregate, and the usual line of attack is official acknowledgment: showing the government has already publicly confirmed the same information.

**What to demand alongside any withholding.** The specific exemption claimed for each withholding rather than a list at the end, the volume withheld, and in litigation an itemized index justifying each one, the form established in *Vaughn v. Rosen* (1973). Redactions on a released page should be individually cited, and a page returned as a solid block with a single statutory reference at the bottom is a page to appeal.

:::reveal What does segregability require, and what should you ask for when a whole document is withheld? ||| That any reasonably segregable portion be released after the exempt material is deleted. Ask for the segregable portions plus a statement of what was withheld and under which exemption.

:::reveal What did the foreseeable harm standard change about withholding? ||| It requires the agency to reasonably foresee harm to an interest protected by an exemption, or a legal prohibition on disclosure, rather than merely showing that an exemption could apply.

:::reveal What is a Glomar response, and what is the usual line of attack against one? ||| A refusal to confirm or deny that responsive records exist, named for the Hughes Glomar Explorer litigation. The usual attack is official acknowledgment: showing the government has already publicly confirmed the same information.

## Vocabulary
- **Exemption**: a statutory category permitting an agency to withhold material, which is permission rather than obligation.
- **Segregability**: the requirement to release the reasonably separable non-exempt portions of a record.
- **Foreseeable harm standard**: the 2016 requirement that an agency reasonably foresee harm before withholding under an exemption.
- **Glomar response**: a refusal to confirm or deny that responsive records exist at all.
- **Vaughn index**: an itemized justification for each withholding, produced in litigation.

## Sources
- Freedom of Information Act, 5 U.S.C. 552(b), 552(a)(8)(A). https://www.law.cornell.edu/uscode/text/5/552
- Phillippi v. Central Intelligence Agency, 546 F.2d 1009 (D.C. Cir. 1976).
- Vaughn v. Rosen, 484 F.2d 820 (D.C. Cir. 1973).`,
    },
    {
      slug: "reading-a-denial",
      title: "11 · Reading a denial",
      section: "Section 3 · The answer, and the answer that is not one",
      body: `A denial letter is a document with a structure, and reading it properly turns a dead end into the next three moves. Most reporters read the first sentence and stop.

**Five things a denial should contain**, and the absence of any of them is itself a point on appeal: which records were located, which were withheld in whole or in part, the specific exemption for each, the name of the person who made the decision, and the appeal route with its deadline.

**Sort the answer into its real categories.** No responsive records is different from records exist but are exempt, which is different from the request is too broad to process, which is different from a fee estimate you never accepted, which is different from silence. Each has a different next move, and treating all five as no is the mistake that ends most records reporting.

**No responsive records is a claim about searching, not about reality.** Ask which systems were searched, with what terms, over what date range, and by whom. Very often the answer reveals that the search ran on the wrong system or that your description did not match the agency's own vocabulary. That is fixable in an email, and it is far faster than an appeal.

**Too broad is usually an invitation.** Take it. Offer a narrowed date range or a single custodian, and ask what scope they could process. Getting eighty percent of what you wanted in three weeks beats winning an appeal about the other twenty percent in six months, and you can always file again.

**Read the exemption against what you actually asked for.** Agencies frequently claim a privacy exemption over an entire record when only names and identifiers are protected, or a law enforcement exemption over a closed matter. Naming the mismatch specifically, in writing, resolves a surprising share of disputes without an appeal, because it forces a second person to look at the decision.

**And write down the pattern.** One denial is an outcome. Twelve denials from the same office with the same boilerplate exemption is a story about the agency, and the request log from lesson 5 is what proves it.

:::reveal Name three of the five things a denial letter should contain. ||| Which records were located, which were withheld in whole or in part, the specific exemption for each, the decision maker's name, and the appeal route with its deadline.

:::reveal Why is "no responsive records" a claim about searching rather than about reality, and what do you ask next? ||| Because it describes what a search returned. Ask which systems were searched, with what terms, over what date range, and by whom, since the search often ran on the wrong system or against the wrong vocabulary.

:::reveal Why take up a "too broad" response rather than appeal it? ||| Because narrowing produces most of what you wanted in weeks, while an appeal about the remainder takes months, and you can always file again for the rest.

## Vocabulary
- **Denial letter**: the written refusal, whose required contents are themselves grounds for appeal when missing.
- **No responsive records**: a statement about what a search returned, which is contestable by asking how the search was run.
- **Too broad**: a processing objection that is usually an invitation to negotiate scope.
- **Boilerplate exemption**: a standard exemption citation applied without reference to the specific record, and the easiest kind to challenge.

## Sources
- Freedom of Information Act, 5 U.S.C. 552(a)(6), 552(b). https://www.law.cornell.edu/uscode/text/5/552`,
    },
    {
      slug: "quiz-the-answer",
      title: "12 · Knowledge check: the answer, and the answer that is not one",
      section: "Section 3 · The answer, and the answer that is not one",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does the twenty-business-day FOIA deadline measure?",
            options: [
              "The determination",
              "The delivery of every responsive record located during the agency's search",
              "The period during which an agency may claim unusual circumstances",
              "The window in which a requester must accept or dispute a fee estimate",
            ],
            correctIndex: 0,
            explanation:
              "The agency must decide whether it will comply and notify the requester of that decision and of appeal rights. Delivery can follow months later, lawfully.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "How much extra time does FOIA allow in unusual circumstances?",
            options: [
              "Up to ten business days",
              "Up to thirty calendar days, renewable once on written notice to the requester",
              "An indefinite period, provided the agency issues a monthly status update",
              "Up to ninety days, matching the minimum appeal window under the 2016 Act",
            ],
            correctIndex: 0,
            explanation:
              "On top of the twenty business days to make a determination. The provisions are at 5 U.S.C. 552(a)(6).",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "Why is the determination deadline the most misunderstood part of FOIA?",
            options: [
              "It is not a delivery deadline",
              "Because it runs from the date of the agency's acknowledgment rather than from filing",
              "Because it applies only to requests from representatives of the news media",
              "Because it is suspended whenever a fee estimate has been issued",
            ],
            correctIndex: 0,
            explanation:
              "An agency can comply on time by saying it will produce records, then take months to produce them.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "What should a requester ask for if no estimated completion date is given?",
            options: [
              "One",
              "A written itemization of the fees the request has already incurred",
              "An immediate partial release of whatever has been reviewed so far",
              "Referral of the request to the agency's inspector general for delay",
            ],
            correctIndex: 0,
            explanation:
              "That estimate is what you hold the agency to in every follow-up, and what you cite when the delay itself becomes reportable.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "What is a constructive denial?",
            options: [
              "A missed deadline treated as a denial",
              "A partial release that withholds the material the requester actually wanted",
              "A fee estimate set so high that the requester cannot proceed with the request",
              "A referral of the request to another agency without notifying the requester",
            ],
            correctIndex: 0,
            explanation:
              "Under FOIA the requester is then generally deemed to have exhausted administrative remedies, so silence becomes something you can escalate.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "What is the mistake in treating agency silence as rudeness?",
            options: [
              "It is an answer you can escalate",
              "It voids the original request, so a new filing is required to restart the clock",
              "It transfers the request to the agency's litigation hold procedure automatically",
              "It obliges the requester to accept whatever is eventually produced",
            ],
            correctIndex: 0,
            explanation:
              "A blown deadline generally opens the next stage rather than leaving the requester with nothing to do but wait.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "What is the standard for expedited processing under FOIA?",
            options: [
              "A demonstrated compelling need",
              "A pending publication date within thirty days of the request being filed",
              "A showing that the agency has previously missed a deadline for the same requester",
              "A certification from an editor that the story is of statewide significance",
            ],
            correctIndex: 0,
            explanation:
              "Which includes a person primarily engaged in disseminating information showing urgency to inform the public about actual or alleged federal government activity.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "When should expedited processing be requested?",
            options: [
              "In the original filing",
              "After the twenty-business-day determination window has passed without a response",
              "Only once an administrative appeal has been filed and is pending",
              "At the point a fee estimate arrives, since cost and urgency are decided together",
            ],
            correctIndex: 0,
            explanation:
              "Not three weeks later. If the story has a real clock, say so at the moment the request is made.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "How often does the lesson recommend following up, and in what form?",
            options: [
              "Every two weeks, in writing",
              "Weekly by telephone, so the processor associates a person with the request",
              "Monthly, and only after the statutory determination deadline has passed",
              "Once, at the promised completion date, to avoid antagonizing the office",
            ],
            correctIndex: 0,
            explanation:
              "Short, referencing the tracking number and the last promised date. Written follow-up creates the record an appeal or a story will need.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "What are phone calls for during a pending request?",
            options: [
              "Building the relationship",
              "Establishing the legal record of the agency's promised completion date",
              "Formally invoking the constructive-denial provisions of the statute",
              "Substituting for written follow-up when the processor prefers it",
            ],
            correctIndex: 0,
            explanation:
              "Written follow-up builds the file. The two do different jobs and neither replaces the other.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "What does the lesson say to do while a request is pending?",
            options: [
              "Keep reporting",
              "Suspend contact with the agency so the processing is not disrupted",
              "Wait, because parallel reporting can be cited as grounds to deny expedited processing",
              "File duplicate requests with adjacent agencies to create competitive pressure",
            ],
            correctIndex: 0,
            explanation:
              "The document may exist in a court exhibit, a vendor's own filing, a neighboring jurisdiction's copy, or the hands of somebody who already has it.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "How many exemptions does FOIA contain?",
            options: [
              "Nine",
              "Four, matching the four requester categories in the fee provisions",
              "Twelve, including the three added by the FOIA Improvement Act of 2016",
              "Seven, of which six concern law enforcement records specifically",
            ],
            correctIndex: 0,
            explanation:
              "They are at 5 U.S.C. 552(b), and citing the specific one for each withholding is what a denial letter should do.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What is an exemption, precisely?",
            options: [
              "Permission to withhold, not an obligation",
              "A statutory bar making release of the material unlawful in every circumstance",
              "A classification level assigned to a document at the time it is created",
              "A category of record that falls outside the definition of a public record",
            ],
            correctIndex: 0,
            explanation:
              "And permission to withhold particular material, not everything sharing a file with it, which is where segregability comes in.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "Which FOIA exemption is best known as the deliberative process exemption?",
            options: [
              "Inter-agency and intra-agency memoranda",
              "Internal personnel rules and practices of an agency",
              "Matters specifically exempted from disclosure by another statute",
              "Records compiled for law enforcement purposes",
            ],
            correctIndex: 0,
            explanation:
              "It covers memoranda that would be privileged in litigation, and the 2016 Act placed a twenty-five-year limit on the deliberative process privilege within it.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What does segregability require?",
            options: [
              "Release of the reasonably segregable portions",
              "Separation of the request into one filing per record type before processing",
              "Storage of exempt material apart from releasable material in agency systems",
              "Review of each withholding by an official senior to the one who applied it",
            ],
            correctIndex: 0,
            explanation:
              "After deletion of the exempt parts. Which is why a wholly withheld document is rarely something to accept.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What is the correct response to a document withheld in full?",
            options: [
              "Ask for segregable portions and what was withheld under which exemption",
              "File suit immediately, since a full withholding cannot be cured administratively",
              "Refile the request naming a different custodian within the same agency",
              "Accept it, since a full withholding means every page is covered by an exemption",
            ],
            correctIndex: 0,
            explanation:
              "Segregability is the rule reporters most often forget, and it is the cheapest thing to invoke.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What does the foreseeable harm standard require of an agency?",
            options: [
              "That it reasonably foresee harm to a protected interest",
              "That it notify the requester of the harm before applying any exemption",
              "That it obtain a court's approval before withholding deliberative material",
              "That it release any record whose harm cannot be quantified in dollars",
            ],
            correctIndex: 0,
            explanation:
              "Or that disclosure be prohibited by law. It is at 5 U.S.C. 552(a)(8)(A), added by the FOIA Improvement Act of 2016.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "How does the foreseeable harm standard change an appeal argument?",
            options: [
              "From may you withhold to what harm do you foresee",
              "From administrative review to mandatory mediation through the federal ombudsman",
              "From the requester's burden to the agency's, only in litigation and not on appeal",
              "From a page-by-page review to a single determination covering the whole request",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the standard is worth citing by name rather than arguing that the material seems releasable.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What limit did the 2016 Act place on the deliberative process privilege?",
            options: [
              "Twenty-five years",
              "Ten years, after which deliberative material must be transferred to the archives",
              "Five years for state agencies and fifteen for federal executive departments",
              "No limit, but a requirement that each withholding be individually justified",
            ],
            correctIndex: 0,
            explanation:
              "It sits inside exemption five, which covers inter-agency and intra-agency memoranda.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What is a Glomar response?",
            options: [
              "A refusal to confirm or deny that records exist",
              "A release of records so heavily redacted that no content remains visible",
              "A referral of the request to another agency believed to hold the records",
              "A statement that the records were destroyed under an approved retention schedule",
            ],
            correctIndex: 0,
            explanation:
              "Named for the Hughes Glomar Explorer and the litigation in Phillippi v. CIA (1976). It is not a denial, because there is nothing yet to segregate.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What is the usual line of attack against a Glomar response?",
            options: [
              "Official acknowledgment",
              "The segregability rule, which requires release of the non-exempt portions",
              "The foreseeable harm standard, which does not apply to intelligence records",
              "An expedited processing request, which forces a substantive determination",
            ],
            correctIndex: 0,
            explanation:
              "Showing that the government has already publicly confirmed the same information, which undercuts the claim that acknowledging existence would itself cause harm.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What is a Vaughn index?",
            options: [
              "An itemized justification for each withholding",
              "A public register of every request an agency has received in a calendar year",
              "The list of exemptions an agency has adopted in its published records policy",
              "A schedule of duplication fees approved by the agency's governing board",
            ],
            correctIndex: 0,
            explanation:
              "The form established in Vaughn v. Rosen (1973), produced in litigation so a court can evaluate withholdings item by item.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What should redactions on a released page carry?",
            options: [
              "An individual citation",
              "A stamp recording the date and initials of the reviewing official",
              "A statement of the total number of words removed from the page",
              "A reference to the retention schedule governing the underlying record",
            ],
            correctIndex: 0,
            explanation:
              "A page returned as a solid block with one statutory reference at the bottom is a page to appeal.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "Which FOIA exemption covers geological information?",
            options: [
              "The ninth, on wells",
              "The eighth, which concerns supervision of financial institutions",
              "The third, which incorporates prohibitions found in other statutes",
              "The first, which covers material classified in the interest of national defense",
            ],
            correctIndex: 0,
            explanation:
              "Geological and geophysical information and data, including maps, concerning wells. It is the narrowest of the nine.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "How many specified harms does the law enforcement exemption cover?",
            options: [
              "Six",
              "Two, covering ongoing proceedings and personal privacy only",
              "Nine, matching the total number of exemptions in the statute",
              "Four, corresponding to the four categories of law enforcement record",
            ],
            correctIndex: 0,
            explanation:
              "Records compiled for law enforcement purposes are exempt to the extent that production could cause one of six enumerated harms.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "Which five things should a denial letter contain?",
            options: [
              "Records located, withheld, exemptions, decision maker, appeal route",
              "Fee estimate, payment terms, delivery format, contact, and retention schedule",
              "Statute, tracking number, custodian, search terms, and systems searched",
              "Requester category, waiver decision, free allowance, total pages, and due date",
            ],
            correctIndex: 0,
            explanation:
              "The absence of any of them is itself a point on appeal, which is why a denial is read as a structured document.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "Which of these is a distinct category of answer that reporters wrongly treat as a simple no?",
            options: [
              "A fee estimate you never accepted",
              "A written denial citing a specific exemption for each withheld record",
              "A partial release accompanied by an itemized redaction log",
              "An acknowledgment giving a tracking number and an estimated date",
            ],
            correctIndex: 0,
            explanation:
              "Along with no responsive records, records exist but are exempt, too broad to process, and silence. Each has a different next move.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "What is no responsive records actually a claim about?",
            options: [
              "The search",
              "The legal status of the material under the act's definition of a record",
              "The retention schedule, which determines whether the record still exists",
              "The requester's category, which limits which systems must be searched",
            ],
            correctIndex: 0,
            explanation:
              "So the reply is to ask which systems were searched, with what terms, over what date range, and by whom.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "What does asking about a search often reveal?",
            options: [
              "The wrong system or the wrong vocabulary",
              "That the agency destroyed the records after the request was filed",
              "That a different agency holds the material and must be asked instead",
              "That the request was never routed to a custodian at all",
            ],
            correctIndex: 0,
            explanation:
              "Both are fixable in an email, which is far faster than an appeal.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "How should a too-broad response usually be treated?",
            options: [
              "As an invitation",
              "As a denial to be appealed immediately, since vagueness is the agency's problem",
              "As a withdrawal, requiring the request to be filed again from the beginning",
              "As a fee dispute, since breadth is only ever a cost objection in disguise",
            ],
            correctIndex: 0,
            explanation:
              "Offer a narrowed date range or a single custodian and ask what scope they could process.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "Why does the lesson prefer eighty percent in three weeks to an appeal?",
            options: [
              "You can always file again for the rest",
              "Because an appeal forfeits the material already released under the original request",
              "Because appeals are decided by the same official who issued the denial",
              "Because a narrowed request qualifies automatically for a fee waiver",
            ],
            correctIndex: 0,
            explanation:
              "Winning an appeal about the remaining twenty percent takes months, and the reporting can proceed in the meantime.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "What common mismatch does the lesson say to name in writing?",
            options: [
              "A privacy exemption claimed over an entire record",
              "A duplication fee charged to a requester in the news-media category",
              "A determination issued after the twenty-business-day window had closed",
              "A referral to another agency without a tracking number being assigned",
            ],
            correctIndex: 0,
            explanation:
              "Or a law enforcement exemption over a closed matter. Naming the mismatch forces a second person to look at the decision.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "When does a set of denials become its own story?",
            options: [
              "When the same office repeats the same boilerplate",
              "When a single denial is upheld on administrative appeal without explanation",
              "When an agency charges fees above the statutory cap for copies",
              "When a request is referred between agencies more than twice",
            ],
            correctIndex: 0,
            explanation:
              "One denial is an outcome. Twelve with the same boilerplate exemption is a story about the agency, and the request log is what proves it.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "What does the lesson say most reporters do with a denial letter?",
            options: [
              "Read the first sentence and stop",
              "Forward it to counsel without extracting the appeal deadline it contains",
              "File an appeal without identifying which specific decisions are disputed",
              "Treat it as final because the exemption cited appears in the statute",
            ],
            correctIndex: 0,
            explanation:
              "A denial is a structured document, and reading it properly turns a dead end into the next three moves.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "Which is different from records exist but are exempt?",
            options: [
              "No responsive records",
              "A written denial identifying the exemption applied to each withheld document",
              "A partial release in which several pages carry individual redaction citations",
              "A statement that segregable portions have been released after deletion",
            ],
            correctIndex: 0,
            explanation:
              "One says nothing was found, the other says something was found and is being withheld. The next move is entirely different.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "What is the risk of treating all five answer types as a single no?",
            options: [
              "It ends most records reporting",
              "It waives the requester's right to a fee waiver on any subsequent request",
              "It obliges the agency to close the file without an appeal being available",
              "It converts the request into a commercial-use filing under the fee rules",
            ],
            correctIndex: 0,
            explanation:
              "Each of the five has a different next move, and four of them are cheaper than an appeal.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "What does the lesson say about the decision maker's name in a denial?",
            options: [
              "It should be there, and its absence is a point on appeal",
              "It is exempt under the personnel exemption and is routinely withheld",
              "It is only required when the denial is issued after an administrative appeal",
              "It matters less than the exemption cited, which is the appealable element",
            ],
            correctIndex: 0,
            explanation:
              "Along with which records were located, which were withheld, the specific exemption for each, and the appeal route with its deadline.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "Which document form did Vaughn v. Rosen establish?",
            options: [
              "An itemized index of withholdings",
              "A standard federal request form used by all executive branch agencies",
              "The required contents of an administrative appeal letter",
              "A public log of every Glomar response issued in a fiscal year",
            ],
            correctIndex: 0,
            explanation:
              "Decided in 1973, it is what lets a court evaluate each withholding rather than accepting a blanket assertion.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "In which case did the Glomar response originate?",
            options: [
              "Phillippi v. CIA",
              "Vaughn v. Rosen, which also produced the itemized index requirement",
              "Cohen v. Cowles Media Co., on promises made to sources",
              "Branzburg v. Hayes, on whether reporters may refuse to testify",
            ],
            correctIndex: 0,
            explanation:
              "A 1976 decision of the D.C. Circuit, concerning the Hughes Glomar Explorer.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "Which exemption covers trade secrets?",
            options: [
              "The fourth",
              "The fifth, alongside inter-agency and intra-agency memoranda",
              "The eighth, alongside financial institution supervision records",
              "The second, alongside internal personnel rules and practices",
            ],
            correctIndex: 0,
            explanation:
              "Trade secrets and commercial or financial information that is privileged or confidential.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What does the lesson call the correct framing when a whole file is withheld?",
            options: [
              "Permission to withhold something, not everything",
              "A total exemption, which segregability does not reach",
              "A determination that the file falls outside the definition of a record",
              "A classification decision that only the originating agency may revisit",
            ],
            correctIndex: 0,
            explanation:
              "That distinction is where most of a reporter's leverage lives, because the segregable parts must still come out.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "Why is an estimated completion date worth insisting on?",
            options: [
              "It is what you hold the agency to",
              "It converts an informal request into a formal one with an appeal route",
              "It caps the fee the agency may charge once the date has passed",
              "It obliges the agency to release partial material by that date",
            ],
            correctIndex: 0,
            explanation:
              "In every follow-up, and when the delay itself becomes reportable.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "Where else might a pending document already exist?",
            options: [
              "A court exhibit or a vendor's own filing",
              "The agency's classified holdings, which are searchable on request",
              "The requester's own prior releases, which agencies cross-reference",
              "The retention schedule, which reproduces the content of destroyed records",
            ],
            correctIndex: 0,
            explanation:
              "Or a neighboring jurisdiction's copy, or the hands of somebody who already has it. A pending request is not a reason to stop reporting.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "What does a written follow-up build that a call does not?",
            options: [
              "The record an appeal will need",
              "A relationship with the processor handling the request",
              "An estimated completion date, which must be given verbally",
              "Grounds for expedited processing under the compelling-need test",
            ],
            correctIndex: 0,
            explanation:
              "Every two weeks, short, referencing the tracking number and the last promised date.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "Which of the nine exemptions concerns personal privacy in personnel and medical files?",
            options: [
              "The sixth",
              "The seventh, which is limited to records compiled for law enforcement purposes",
              "The second, which covers internal personnel rules and practices",
              "The third, which incorporates confidentiality provisions from other statutes",
            ],
            correctIndex: 0,
            explanation:
              "Personnel, medical, and similar files whose disclosure would constitute a clearly unwarranted invasion of personal privacy.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What is the practical effect of an agency claiming an exemption without foreseeing harm?",
            options: [
              "It is a specific ground for appeal",
              "It voids the entire response and restarts the statutory determination clock",
              "It converts the withholding into a Glomar response requiring litigation",
              "It obliges the agency to produce a Vaughn index at the administrative stage",
            ],
            correctIndex: 0,
            explanation:
              "Cite 5 U.S.C. 552(a)(8)(A) by name, because it gives the reviewer a specific thing to decide.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What does the lesson say about a fee estimate you never accepted?",
            options: [
              "It is its own category of answer",
              "It is a denial, and the appeal deadline runs from the date it was issued",
              "It is a withdrawal, and the request is closed without further action",
              "It is an acknowledgment, and the determination deadline has been met",
            ],
            correctIndex: 0,
            explanation:
              "Distinct from no responsive records, from an exemption, from too broad, and from silence, each of which has a different next move.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "Why does naming a mismatch in writing resolve disputes without appeal?",
            options: [
              "It forces a second person to look",
              "It suspends the agency's authority to withhold pending internal review",
              "It triggers a statutory obligation to produce an itemized index",
              "It converts the matter into a mediation before the federal ombudsman",
            ],
            correctIndex: 0,
            explanation:
              "A specific, written objection about a specific record is much harder to leave with the person who issued the decision.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "How is a page returned as a solid block with one citation described?",
            options: [
              "A page to appeal",
              "A properly segregated release requiring no further action",
              "A Glomar response applied at the page level rather than the request level",
              "Evidence that the agency has produced a Vaughn index",
            ],
            correctIndex: 0,
            explanation:
              "Redactions should be individually cited, so a blanket reference at the bottom is a failure of both segregability and specificity.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
        ],
      },
    },
    // ── Section 4 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "the-appeal",
      title: "13 · The appeal, and what leverage you have",
      section: "Section 4 · The appeal, and records as a practice",
      body: `An appeal is a letter, not a lawsuit, and the share of appeals that produce more material than the original response is high enough that skipping one is usually a mistake.

**The federal route, in order.** An administrative appeal to the agency, which the FOIA Improvement Act of 2016 requires agencies to allow at least ninety days to file. Then, or alongside it, mediation through the Office of Government Information Services at the National Archives, created by the OPEN Government Act of 2007, which agencies must tell requesters about. Then a suit in federal district court, where the agency bears the burden of justifying each withholding and where a substantially prevailing complainant may be awarded attorney fees and litigation costs.

**What an appeal letter contains.** The tracking number and the date of the response. A short statement of what was requested. Each disputed decision listed separately, with the specific ground: this exemption does not cover this material, segregable portions were not released, the search was inadequate and here is why, the fee category was wrong, or the response was late. Then what you want: release, a narrower redaction, a new search, or an itemized justification.

**Argue the standard rather than the sentiment.** An appeal that says the public has a right to know accomplishes nothing. An appeal that says the agency has not articulated a foreseeable harm under 5 U.S.C. 552(a)(8)(A), or that a privacy exemption cannot cover an entire record when only identifiers are protected, gives the reviewer a specific thing to decide and a defensible way to give you part of it.

**Leverage that is not legal.** Ask for a call to discuss narrowing, because a person who talks to you rarely denies you in full. Ask what the agency has released to other requesters, since a released record is hard to withhold from you. Check the agency's own reading room and any published request log. And ask a state press association or a press freedom organization for help, since many maintain hotlines specifically for this.

**States run their own appeal routes, and they differ.** Some have an ombudsman or counselor who issues advisory opinions; some route appeals through the attorney general; some offer nothing short of court. The route, the deadline, and whether an advisory opinion is a precondition for anything are all state-specific, and the next lesson works one state end to end so the shape is visible before you go looking for yours.

:::reveal Name the three stages of a federal FOIA challenge, in order. ||| An administrative appeal to the agency, mediation through the Office of Government Information Services, and a suit in federal district court where the agency carries the burden of justifying withholdings.

:::reveal What is the difference between an appeal that argues sentiment and one that argues the standard? ||| Sentiment says the public has a right to know and gives the reviewer nothing to decide. The standard names the specific failure, such as no articulated foreseeable harm or a privacy exemption stretched over a whole record.

:::reveal Name two forms of leverage in a records dispute that are not legal. ||| Asking for a call about narrowing, since someone who talks to you rarely denies in full, and asking what has already been released to other requesters, since a released record is hard to withhold.

## Vocabulary
- **Administrative appeal**: the internal challenge to a records decision, which agencies must allow at least ninety days to file under FOIA.
- **OGIS**: the Office of Government Information Services, the federal FOIA ombudsman at the National Archives, offering mediation.
- **Substantially prevailing**: the standard under which a FOIA complainant may be awarded attorney fees and litigation costs.
- **Advisory opinion**: a non-binding determination issued by some state access ombudsmen, whose weight and role vary by state.

## Sources
- Freedom of Information Act, 5 U.S.C. 552(a)(4)(E), 552(a)(6), 552(a)(8)(A). https://www.law.cornell.edu/uscode/text/5/552
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "indiana-worked-example",
      title: "14 · Indiana as a worked example, and finding your own state",
      section: "Section 4 · The appeal, and records as a practice",
      body: `One state, worked end to end, so the shape is visible. Indiana is used here because this track was prompted by an Indiana newsroom's job posting, not because the track is about Indiana. Your homework is at the bottom, and it matters more than the example.

**The statute.** Indiana's Access to Public Records Act is at Indiana Code 5-14-3. Its companion open-meetings statute, the Open Door Law, is a different chapter at Indiana Code 5-14-1.5. Confusing the two in a request letter is the same error lesson 1 warned about, in its most local form.

**The office that is unusual and worth knowing about.** Indiana has a Public Access Counselor, established in statute at Indiana Code 5-14-4, who answers questions about both acts and issues opinions on complaints. Not every state has an equivalent, and where one exists it is usually the cheapest path a reporter has: a written determination from a neutral office, obtained without a lawyer. The complaint procedure sits at Indiana Code 5-14-5.

**The deadlines, read against the primary.** Indiana Code 5-14-3-9(c) sets two response periods, and which one applies depends on how the request arrived. A request from someone **physically present in the agency office, made by telephone, or asking for enhanced access** must be answered **within twenty-four hours**. A request **made by mail or facsimile** must be answered **within seven days**. Miss either and the statute says the request "is deemed denied," which is what makes the clock worth knowing: the denial you appeal may be a silence rather than a letter.

**A wrinkle worth carrying, because it is the kind of thing that decides an argument.** The statutory subsection quoted above lists mail and facsimile. The Public Access Counselor's own handbook, explaining the same rule in plain language, writes the seven-day period as applying to a request "mailed or sent by facsimile **or email**," and calls the period seven **calendar** days (Indiana Public Access Counselor, 2017, pp. 3, 12). If you are arguing about an emailed request, know that the plain-language guidance and the quoted subsection do not use the same list, and go to the current statutory text before you rely on either.

**Response is not production, and the difference is most of the frustration in this work.** The handbook is explicit that the act "requires only a response and not the actual production of records" inside those periods. Production is owed "within a reasonable time," judged against named factors: the size of the agency, the size of the request, the number of pending requests, the complexity of the request, and other operational considerations. An agency that acknowledges you in twenty-four hours and produces nothing for two months has not necessarily broken the deadline. It may have broken the reasonableness standard, which is a different and harder argument.

**The complaint window.** Indiana Code 5-14-5-7 gives you **thirty days** to file a formal complaint with the Public Access Counselor, measured from **the denial**, or, for a meeting held secretly or without notice, from the date you received notice in fact that it happened. A complaint counts as filed on the date the counselor receives it, or on its postmark if it arrives more than thirty days after the denial. Thirty days is not long, and it starts at the denial rather than at the moment you notice the denial, so a constructive denial by silence starts a clock nobody sends you.

**Now the standing caution, which has not gone away.** The figures above were read on 2026-08-22 against the Public Access Counselor's handbook, which reproduces the statutory text. That handbook is a 2017 edition. Deadlines are exactly the kind of value a legislature amends, so **check the current text at the Indiana General Assembly's own code site before you rely on any of it**, including this course. The links are in the sources below.

**The general shape you will find in any state.** A statute defining public agency and public record. A list of exemptions, some mandatory and some discretionary. A response deadline. A fee schedule, often capping copy charges. Some route for challenging a denial, whether an ombudsman, the attorney general, or the courts. And a fee-shifting provision in some states that makes an agency pay a prevailing requester's costs, which is the provision that gives a small outlet any leverage at all.

**The homework, and it is the point of the lesson.** Find your own state's chapter in the Reporters Committee's Open Government Guide. Then open your state's actual code and read the definition of a public record, the exemption list, the response deadline, and the appeal route. Write those four things into your beat file. A reporter who has read the statute once argues from it forever; a reporter who has not is negotiating against someone who has.

:::reveal What does Indiana have that many states do not, and why does it matter to a reporter without a lawyer? ||| A Public Access Counselor, established at Indiana Code 5-14-4, who answers questions and issues opinions on complaints. It is a written determination from a neutral office obtained without litigation.

:::reveal Give Indiana's two APRA response periods and what triggers each. ||| Twenty-four hours for a requester physically present, telephoning, or asking for enhanced access; seven days for a request by mail or facsimile (Ind. Code 5-14-3-9(c)). Missing either means the request is deemed denied.

:::reveal What is the difference between a response and production, and why does it matter? ||| The act requires only a RESPONSE inside those periods, not the records. Production is owed within a reasonable time, judged on the agency's size, the request's size and complexity, and the number of pending requests. An agency can meet the deadline and still hold the records for weeks.

:::reveal How long do you have to complain to the Public Access Counselor, and when does the clock start? ||| Thirty days, from the denial itself (Ind. Code 5-14-5-7), not from when you noticed it. A constructive denial by silence therefore starts a clock nobody tells you about.

:::reveal What four things does the homework ask you to write into your beat file about your own state? ||| The definition of a public record, the exemption list, the response deadline, and the appeal route, read from your state's own code rather than from a summary.

## Vocabulary
- **Access to Public Records Act (APRA)**: Indiana's records statute, Indiana Code 5-14-3.
- **Public Access Counselor**: the Indiana office established at Indiana Code 5-14-4 that answers access questions and issues opinions on complaints.
- **Mandatory versus discretionary exemption**: material an agency must withhold, as against material it may withhold, a distinction most state acts draw.
- **Fee shifting**: a statutory provision making an agency pay a prevailing requester's costs, which is where a small outlet's leverage comes from.

## Sources
- Access to Public Records Act, Ind. Code 5-14-3. https://iga.in.gov/laws/2025/ic/titles/5
- Indiana Public Access Counselor, Ind. Code 5-14-4; complaint procedure, Ind. Code 5-14-5. https://www.in.gov/pac/
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/
- Indiana Public Access Counselor. (2017). *Handbook on Indiana's public access laws* (updated January 2017). Indiana Office of the Public Access Counselor. https://www.in.gov/pac/files/PAC-Handbook-2017.pdf
- Access to Public Records Act, Ind. Code 5-14-3. Indiana General Assembly. https://iga.in.gov/laws/current/ic/titles/5#5-14-3
- Public Access Counselor complaint procedure, Ind. Code 5-14-5. Indiana General Assembly. https://iga.in.gov/laws/current/ic/titles/5#5-14-5
- Indiana Office of the Public Access Counselor. https://www.in.gov/pac/`,
    },
    {
      slug: "records-as-a-practice",
      title: "15 · Records as a beat practice, not a one-off",
      section: "Section 4 · The appeal, and records as a practice",
      body: `A reporter who files a request when a story demands one will be waiting for documents at exactly the moment they need them. A reporter who files continuously has documents arriving all the time, most of which they were not waiting for.

**Standing requests, where the law allows them.** Some agencies will honor a request for a class of record on a recurring basis, or will simply add you to a distribution list for something they already produce. Ask. Inspection reports, disciplinary summaries, contract awards, and incident logs are frequently available this way, and getting on a list is a one-time cost that pays for years.

**File early on the slow things.** The request you will need in November should be filed in July. On a beat you can predict a good share of your own future needs from the calendar built in REPORT-00, which is the practical reason that calendar exists.

**Keep the released material.** Every document you receive goes into the beat file with its request number and release date, because agencies lose things, links rot, and the second time you need a document is usually years later and under deadline. A released record is also easier to obtain again once you can show it was released.

**Treat the process itself as beat coverage.** Response times, fee estimates, denial rates, and the exemptions an agency leans on are facts about that agency. When your log shows a pattern, that is a publishable story and a legitimate accountability subject, and almost nobody covers it.

**Share the map, not necessarily the scoop.** Publishing which agencies answer and which do not, and posting the documents you obtained where they are useful to others, costs you very little and makes the next request by anyone easier. Several public archives exist for exactly this.

**The handoff to the rest of the track.** Records get you a document. What the document says is a separate skill, and if it is somebody else's data report the next course is about reading it correctly: the executive summary against the underlying tables, what a data definition changes, and a publisher that documents its own limits.

:::reveal What is a standing request, and what does it save? ||| A recurring release of a class of record, or a place on an existing distribution list. It is a one-time cost that keeps documents arriving for years without a new filing each time.

:::reveal Why does a beat calendar make records work cheaper? ||| Because a good share of future needs is predictable, so the request you will need in November can be filed in July rather than waited on.

:::reveal Why are an agency's response times and denial rates a story? ||| They are facts about how that agency behaves, provable from a maintained request log, and almost nobody covers them.

## Vocabulary
- **Standing request**: an arrangement to receive a class of record on a recurring basis without refiling.
- **Released material archive**: the beat file's store of obtained documents with request numbers and release dates, kept because links rot.
- **Process coverage**: reporting on the records system itself, using response times, fees, and denial patterns as the evidence.
- **Public document archive**: a shared repository where obtained records are posted so the next requester starts ahead.

## Sources
- Freedom of Information Act, 5 U.S.C. 552. https://www.law.cornell.edu/uscode/text/5/552
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "quiz-appeal-and-practice",
      title: "16 · Knowledge check: the appeal, and records as a practice",
      section: "Section 4 · The appeal, and records as a practice",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is a records appeal, at the first stage?",
            options: [
              "A letter",
              "A civil complaint filed in the district where the agency maintains its records",
              "A hearing before an administrative law judge assigned by the agency",
              "A mediation session convened by a neutral ombudsman at the requester's expense",
            ],
            correctIndex: 0,
            explanation:
              "Not a lawsuit. The share of appeals that produce more material than the original response is high enough that skipping one is usually a mistake.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "How long must agencies allow for a FOIA administrative appeal?",
            options: [
              "At least ninety days",
              "Twenty business days, matching the determination window for the original request",
              "Thirty calendar days from the date the denial letter was mailed",
              "One year, under the fee-shifting provisions of the statute",
            ],
            correctIndex: 0,
            explanation:
              "A requirement added by the FOIA Improvement Act of 2016.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "What is OGIS?",
            options: [
              "The federal FOIA ombudsman at the National Archives",
              "The office within each agency that issues determinations on records requests",
              "The interagency board that maintains the government's classification guidelines",
              "The federal registry of every public records request filed in a fiscal year",
            ],
            correctIndex: 0,
            explanation:
              "The Office of Government Information Services, created by the OPEN Government Act of 2007, which offers mediation and which agencies must tell requesters about.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "Which statute created OGIS?",
            options: [
              "The OPEN Government Act of 2007",
              "The FOIA Improvement Act of 2016, alongside the foreseeable harm standard",
              "The Administrative Procedure Act, in its original 1946 enactment",
              "The Privacy Act of 1974, which governs records about individuals",
            ],
            correctIndex: 0,
            explanation:
              "The 2016 Act separately required agencies to notify requesters of the right to seek OGIS assistance.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "Who carries the burden in a FOIA suit in federal district court?",
            options: [
              "The agency",
              "The requester, who must show the records are not covered by any exemption",
              "Neither party, since the court reviews the administrative record only",
              "The originating agency's counsel, but only where classification is claimed",
            ],
            correctIndex: 0,
            explanation:
              "It must justify each withholding, and a substantially prevailing complainant may be awarded attorney fees and litigation costs.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "What may a substantially prevailing FOIA complainant be awarded?",
            options: [
              "Attorney fees and litigation costs",
              "Statutory damages calculated per page improperly withheld",
              "An order barring the agency from charging fees for two years",
              "Priority processing on all future requests to the same agency",
            ],
            correctIndex: 0,
            explanation:
              "Fee shifting is what gives a small outlet any leverage at all, which is why the equivalent state provision is worth finding.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "How should disputed decisions be presented in an appeal letter?",
            options: [
              "Each one separately, with its specific ground",
              "As a single narrative describing the overall inadequacy of the response",
              "As a request that the agency reprocess the entire filing from the beginning",
              "As a list of the records still wanted, without reference to the reasons given",
            ],
            correctIndex: 0,
            explanation:
              "This exemption does not cover this material, segregable portions were not released, the search was inadequate, the fee category was wrong, or the response was late.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "What should an appeal letter say it wants?",
            options: [
              "Release, narrower redaction, a new search, or a justification",
              "An apology and a written commitment to process future requests faster",
              "Referral of the matter to the agency's inspector general for investigation",
              "A waiver of all fees incurred on the original request to date",
            ],
            correctIndex: 0,
            explanation:
              "A specific remedy for each disputed decision gives the reviewer something to grant, which is how partial wins happen.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "What does an appeal arguing that the public has a right to know accomplish?",
            options: [
              "Nothing",
              "It preserves the requester's standing to file suit in federal district court",
              "It shifts the burden of justifying the withholding onto the agency",
              "It satisfies the statutory requirement that an appeal state a ground",
            ],
            correctIndex: 0,
            explanation:
              "Argue the standard instead: no articulated foreseeable harm, or a privacy exemption stretched over a whole record when only identifiers are protected.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "Which non-legal leverage does the lesson recommend first?",
            options: [
              "Ask for a call about narrowing",
              "Publish the denial letter so the agency faces public pressure to reconsider",
              "Contact an elected official whose office oversees the agency's budget",
              "File a duplicate request under a colleague's name to test the response",
            ],
            correctIndex: 0,
            explanation:
              "A person who talks to you rarely denies you in full, which is the same principle as the informal ask earlier in the course.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "Why ask what an agency has released to other requesters?",
            options: [
              "A released record is hard to withhold from you",
              "Because prior releases must be disclosed under the same exemption analysis",
              "Because agencies must charge every requester the same fee for identical records",
              "Because a prior release restarts the retention clock on the underlying record",
            ],
            correctIndex: 0,
            explanation:
              "Check the agency's reading room and any published request log as well, since both are free to search.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "Which organizations does the lesson say maintain hotlines for records disputes?",
            options: [
              "State press associations and press freedom organizations",
              "The federal ombudsman's regional offices, one in each judicial circuit",
              "Bar associations, which are required to provide counsel to requesters",
              "The agencies themselves, through their designated public liaison offices",
            ],
            correctIndex: 0,
            explanation:
              "Which is the cheapest expert help available to a reporter without a lawyer.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "How do state appeal routes differ from the federal one?",
            options: [
              "Some route through an ombudsman, some the attorney general, some only the courts",
              "All states require an advisory opinion before any suit may be filed",
              "All states use the same three-stage structure the federal act establishes",
              "State routes are identical except for the length of the filing window",
            ],
            correctIndex: 0,
            explanation:
              "The route, the deadline, and whether an advisory opinion is a precondition for anything are all state-specific.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "What is an advisory opinion, in state access practice?",
            options: [
              "A non-binding determination from an access ombudsman",
              "A court order compelling an agency to release specified records",
              "The agency's own written explanation of the exemption it applied",
              "A ruling by the attorney general that binds every agency in the state",
            ],
            correctIndex: 0,
            explanation:
              "Its weight and its role vary by state, which is one of the four things the homework asks a reporter to establish.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "Why does this course use Indiana as its worked example?",
            options: [
              "The track was prompted by an Indiana newsroom's job posting",
              "Because Indiana's act is the model most other states adopted verbatim",
              "Because Indiana is the only state with an access counselor",
              "Because federal FOIA does not apply to any Indiana agency",
            ],
            correctIndex: 0,
            explanation:
              "The track is not about Indiana. One state worked end to end makes the shape visible before you go looking for your own.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "Which Indiana chapter creates the Public Access Counselor?",
            options: [
              "Indiana Code 5-14-4",
              "Indiana Code 5-14-3, which is the records act itself",
              "Indiana Code 5-14-1.5, which is the open-meetings statute",
              "Indiana Code 5-14-5, which sets out the complaint procedure",
            ],
            correctIndex: 0,
            explanation:
              "The complaint procedure sits separately at Indiana Code 5-14-5.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "Where is Indiana's access complaint procedure?",
            options: [
              "Indiana Code 5-14-5",
              "Indiana Code 5-14-4, alongside the office that hears the complaints",
              "Indiana Code 5-14-3, in the same chapter as the records act",
              "Indiana Code 5-14-1.5, which covers both meetings and records disputes",
            ],
            correctIndex: 0,
            explanation:
              "The counselor is established at 5-14-4; the procedure for complaining sits at 5-14-5.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "Why is an access counselor valuable to a reporter without a lawyer?",
            options: [
              "A written determination from a neutral office, without litigation",
              "Because a counselor's opinion binds the agency and compels release",
              "Because the counselor represents the requester in any subsequent lawsuit",
              "Because filing with a counselor pauses the agency's retention schedule",
            ],
            correctIndex: 0,
            explanation:
              "Not every state has an equivalent, and where one exists it is usually the cheapest path a reporter has.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "Why does this lesson decline to print Indiana's response deadlines?",
            options: [
              "It has not read them against the current statutory text",
              "Because Indiana's deadlines are confidential under the act's own terms",
              "Because deadlines vary by agency rather than being set in statute",
              "Because the federal deadline preempts state deadlines for news media requesters",
            ],
            correctIndex: 0,
            explanation:
              "Deadlines are exactly the kind of value a legislature amends, and a course that asserts a stale one teaches someone to miss a real one.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "Which Indiana sections does the lesson send a reader to for the current deadlines?",
            options: [
              "Indiana Code 5-14-3-9 and 5-14-5",
              "Indiana Code 5-14-1.5-5 and 5-14-4, which cover notice and the counselor",
              "5 U.S.C. 552(a)(6), which governs determination timing in every jurisdiction",
              "The agency's own published records policy, which restates the statutory periods",
            ],
            correctIndex: 0,
            explanation:
              "Read the current text before relying on any deadline, including one you read in a training course.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What does Indiana's act do that the lesson describes without giving numbers?",
            options: [
              "Sets deadlines that differ by how a request was delivered",
              "Charges a per-page copy fee that rises with the age of the record",
              "Requires an advisory opinion before any suit may be brought",
              "Exempts electronic records from the definition of a public record",
            ],
            correctIndex: 0,
            explanation:
              "An in-person request is answered faster than one sent by mail or electronically, and the complaint route carries its own filing window measured from the denial.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What was filed against this lesson so its numbers can be added later?",
            options: [
              "A source check",
              "A correction notice, published alongside the lesson for learners to see",
              "A records request to the Indiana Public Access Counselor's office",
              "A standards alignment, so the lesson can be mapped to a civics strand",
            ],
            correctIndex: 0,
            explanation:
              "A hedge with no check behind it is a hedge nobody will ever clear, which is why the catalog files one whenever a lesson leaves a value open.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "Which five elements does the lesson say you will find in any state's act?",
            options: [
              "Definitions, exemptions, a deadline, a fee schedule, a challenge route",
              "A counselor, a registry, an appeal board, a penalty, and a sunset provision",
              "A requester category system, free allowances, waivers, and mediation",
              "Notice requirements, quorum rules, minutes, agendas, and executive sessions",
            ],
            correctIndex: 0,
            explanation:
              "Notice requirements, quorum rules, minutes, agendas, and executive sessions describe a meetings statute instead, which is the confusion this course opened by correcting.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What is a fee-shifting provision, and why does it matter?",
            options: [
              "It makes an agency pay a prevailing requester's costs",
              "It moves duplication charges from the requester to the agency's own budget",
              "It converts search fees into review fees for news-media requesters",
              "It allows a requester to defer payment until after the records are delivered",
            ],
            correctIndex: 0,
            explanation:
              "It is where a small outlet's leverage comes from, because without it litigation is unaffordable regardless of the merits.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What is the difference between a mandatory and a discretionary exemption?",
            options: [
              "Must withhold, as against may withhold",
              "Applies to the whole record, as against applying only to identifiers within it",
              "Set by statute, as against adopted in an agency's own published policy",
              "Reviewable by a court, as against reviewable only by an ombudsman",
            ],
            correctIndex: 0,
            explanation:
              "Most state acts draw the distinction, and knowing which kind you are arguing about determines whether persuasion is even possible.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What four things does the homework ask you to write into your beat file?",
            options: [
              "Record definition, exemptions, deadline, appeal route",
              "Statute number, agency address, custodian name, and fee schedule",
              "Requester category, waiver text, tracking number, and promised date",
              "Retention schedule, destruction certificate, archive location, and format",
            ],
            correctIndex: 0,
            explanation:
              "Read from your own state's code rather than from a summary, because a reporter who has read the statute argues from it forever.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "Where does the lesson send a reader to start on their own state?",
            options: [
              "The Reporters Committee's Open Government Guide",
              "The state attorney general's advisory opinion archive",
              "The National Archives' Office of Government Information Services",
              "The agency's own records policy, which restates the statute in plain language",
            ],
            correctIndex: 0,
            explanation:
              "And then into the state's actual code, because the guide orients you and the statute is what you argue from.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What is the position of a reporter who has not read their state's statute?",
            options: [
              "Negotiating against someone who has",
              "Protected, since the agency must explain the law to any requester who asks",
              "Unaffected, since the RCFP guide is a sufficient substitute for the text",
              "Barred from appealing, since an appeal must cite a statutory ground",
            ],
            correctIndex: 0,
            explanation:
              "Which is the whole argument for the homework being the point of the lesson rather than an addendum to it.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What is the difference between the reporter who files on demand and the one who files continuously?",
            options: [
              "Documents arrive that you were not waiting for",
              "One qualifies for the news-media category and the other does not",
              "One pays duplication fees and the other qualifies for a standing waiver",
              "One may appeal a denial and the other must accept the agency's determination",
            ],
            correctIndex: 0,
            explanation:
              "A reporter who files only when a story demands one will be waiting for documents at exactly the moment they need them.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "What is a standing request?",
            options: [
              "A recurring release of a class of record",
              "A request that remains open until the agency locates responsive material",
              "A filing made jointly by several outlets covering the same institution",
              "A request preserved on file so a future reporter can adopt it",
            ],
            correctIndex: 0,
            explanation:
              "Or simply a place on a distribution list for something the agency already produces. A one-time cost that pays for years.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "Which record types are named as frequently available on a standing basis?",
            options: [
              "Inspection reports, disciplinary summaries, contract awards, incident logs",
              "Personnel files, medical records, settlement negotiations, and legal memoranda",
              "Classified assessments, security plans, and infrastructure vulnerability studies",
              "Draft budgets, unapproved minutes, and internal policy deliberations",
            ],
            correctIndex: 0,
            explanation:
              "Ask. Agencies often already produce these on a schedule and will add a reporter to the list.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "When should the request you will need in November be filed?",
            options: [
              "July",
              "October, so the response arrives while the subject is still current",
              "November, since a request filed too early may be closed as stale",
              "Whenever the story is assigned, since earlier filing wastes the free allowance",
            ],
            correctIndex: 0,
            explanation:
              "On a beat you can predict a good share of your own future needs from the calendar built in REPORT-00, which is the practical reason that calendar exists.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "Why does every released document go into the beat file?",
            options: [
              "Agencies lose things and links rot",
              "Because the act requires a requester to retain what was released to them",
              "Because a retained copy extends the agency's retention obligation",
              "Because an appeal cannot proceed without the original release attached",
            ],
            correctIndex: 0,
            explanation:
              "The second time you need a document is usually years later and under deadline, and a released record is easier to obtain again once you can show it was released.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "What should be stored alongside each released document?",
            options: [
              "Its request number and release date",
              "The reporter's notes on which story the document eventually supported",
              "The exemptions the agency considered but decided not to apply",
              "A signed statement from the custodian confirming authenticity",
            ],
            correctIndex: 0,
            explanation:
              "Which is what lets you show the record was released when you need it again.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "What does the lesson say the records process itself is?",
            options: [
              "Beat coverage",
              "An administrative overhead that should not consume reporting time",
              "A matter for the outlet's counsel rather than for the reporter",
              "A private negotiation that loses its value once it is published",
            ],
            correctIndex: 0,
            explanation:
              "Response times, fee estimates, denial rates, and the exemptions an agency leans on are facts about that agency, and almost nobody covers them.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "What does sharing the map rather than the scoop mean?",
            options: [
              "Publish which agencies answer, and post the documents you obtained",
              "Give competing outlets advance notice of stories built on records",
              "Hand your request log to the agency so it can improve its processing",
              "Withhold documents until every outlet on the beat can publish together",
            ],
            correctIndex: 0,
            explanation:
              "It costs very little and makes the next request by anyone easier. Several public archives exist for exactly this.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "What does the next course in the track cover?",
            options: [
              "Reading somebody else's data report",
              "Interviewing people who did not seek the attention a story brings",
              "Libel, privacy, recording consent, minors, and shield protections",
              "Pitching an enterprise project and choosing the shape a story takes",
            ],
            correctIndex: 0,
            explanation:
              "The executive summary against the underlying tables, what a data definition changes, and a publisher that documents its own limits.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "Why is getting a document a different skill from reading it?",
            options: [
              "What the document says is its own problem",
              "Because released documents are redacted and therefore incomplete by design",
              "Because a released record may not be republished without the agency's consent",
              "Because the request log records only what arrived, not what it means",
            ],
            correctIndex: 0,
            explanation:
              "Which is the handoff from this course to the next one in the track.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "Which stage of a federal challenge comes after the administrative appeal?",
            options: [
              "OGIS mediation",
              "A hearing before the agency's chief FOIA officer, who reviews the appeal decision",
              "Referral to the Department of Justice for an opinion on the exemption claimed",
              "Automatic release of the disputed material pending judicial review",
            ],
            correctIndex: 0,
            explanation:
              "Or alongside it. Then a suit in federal district court, where the agency bears the burden of justifying each withholding.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "What should an appeal letter open with?",
            options: [
              "The tracking number and the date of the response",
              "A summary of the story the records are intended to support",
              "A citation to every exemption the agency might have applied",
              "A request for a fee waiver covering the appeal itself",
            ],
            correctIndex: 0,
            explanation:
              "Followed by a short statement of what was requested and then each disputed decision listed separately.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "Which specific ground names an inadequate search?",
            options: [
              "The search was inadequate, and here is why",
              "The exemption claimed does not cover the material withheld",
              "Segregable portions of the record were not released",
              "The requester was placed in the wrong fee category",
            ],
            correctIndex: 0,
            explanation:
              "Each disputed decision gets its own ground, which is what lets a reviewer grant part of an appeal rather than all or nothing.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "What does the lesson say about the reading room and published request logs?",
            options: [
              "Check them, since prior releases are hard to withhold",
              "Ignore them, since prior releases have no bearing on a new request",
              "Cite them only in litigation, where prior release becomes legally relevant",
              "Request them formally, since they are not published voluntarily",
            ],
            correctIndex: 0,
            explanation:
              "Both are free to search and both are evidence in a dispute about whether material can be withheld from you.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "How is the Indiana example framed relative to the track as a whole?",
            options: [
              "One state worked end to end, so the shape is visible",
              "The definitive statement of access law for readers in every state",
              "A digression included because the plan required a state example",
              "A substitute for reading your own state's statute, which most readers will not do",
            ],
            correctIndex: 0,
            explanation:
              "Your homework is at the bottom of the lesson, and it matters more than the example.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What error does confusing Indiana Code 5-14-3 with 5-14-1.5 repeat?",
            options: [
              "Records law versus meetings law",
              "Mandatory versus discretionary exemptions",
              "Coverage versus custody of a record",
              "Determination versus delivery of responsive material",
            ],
            correctIndex: 0,
            explanation:
              "It is the local form of the confusion the first lesson of this course exists to correct.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What does a beat calendar make cheaper in records terms?",
            options: [
              "Filing early on predictable needs",
              "Duplication fees, which fall when requests are batched by quarter",
              "Appeals, which succeed more often when filed on a schedule",
              "Standing requests, which are only granted to reporters with a calendar",
            ],
            correctIndex: 0,
            explanation:
              "A good share of a beat's future needs is predictable, which is the practical justification for keeping the calendar at all.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "What is process coverage?",
            options: [
              "Reporting on the records system itself",
              "The internal newsroom log of which requests are pending and with whom",
              "The agency's published account of how it processes incoming requests",
              "The practice of narrating a pending request inside an unrelated story",
            ],
            correctIndex: 0,
            explanation:
              "Using response times, fees, and denial patterns as the evidence, which only a maintained request log supplies.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "What is a public document archive, as this lesson uses the term?",
            options: [
              "A shared repository where obtained records are posted",
              "The agency's own reading room of previously released material",
              "The National Archives' holdings of permanently retained federal records",
              "The beat file's private store of documents the reporter has obtained",
            ],
            correctIndex: 0,
            explanation:
              "Posting there costs the reporter very little and starts the next requester ahead of where you began.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "Why does the lesson call standing requests a one-time cost?",
            options: [
              "Getting on the list does not have to be repeated",
              "Because the agency waives all fees once a standing arrangement exists",
              "Because a standing request cannot be denied once it has been granted",
              "Because the statutory clock runs only on the first filing in a series",
            ],
            correctIndex: 0,
            explanation:
              "Which is what makes it pay for years, as against filing a fresh request each time the same class of record is produced.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "What kind of leverage does the lesson call the cheapest available without a lawyer?",
            options: [
              "A neutral office's written determination",
              "A court order compelling release within a fixed number of days",
              "A public campaign drawing attention to the agency's refusal",
              "A parallel request filed with a body that holds a copy of the same record",
            ],
            correctIndex: 0,
            explanation:
              "Where a state has an access counselor or ombudsman, an opinion is obtainable without litigation.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What does the lesson say about a reporter who has read the statute once?",
            options: [
              "They argue from it forever",
              "They still need counsel to interpret any exemption the agency claims",
              "They should re-read it before each filing, since amendments are frequent",
              "They gain standing to file complaints on behalf of other requesters",
            ],
            correctIndex: 0,
            explanation:
              "Which is the payoff for the four things the homework asks you to write down.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What does the lesson say about skipping an appeal?",
            options: [
              "It is usually a mistake",
              "It is sensible, because appeals rarely produce material the first response withheld",
              "It is required, because an unappealed denial cannot later be litigated",
              "It is neutral, because a fresh request achieves the same result faster",
            ],
            correctIndex: 0,
            explanation:
              "The share of appeals that produce more material than the original response is high enough to make the letter worth writing.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "Which two agency documents does an appeal letter reference at the top?",
            options: [
              "The tracking number and the response date",
              "The fee estimate and the itemization behind it",
              "The retention schedule and the destruction certificate",
              "The reading room index and the published request log",
            ],
            correctIndex: 0,
            explanation:
              "Followed by a short statement of what was requested, then each disputed decision with its own specific ground.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "What makes records work compound over a year on a beat?",
            options: [
              "Standing requests and early filing",
              "Appealing every denial, which trains the agency to release faster",
              "Filing identical requests with several agencies to compare responses",
              "Waiting for a story before filing, so each request is fully scoped",
            ],
            correctIndex: 0,
            explanation:
              "Documents arrive that you were not waiting for, and the request you will need in November is already in the system by July.",
            sourceLessonSlug: "records-as-a-practice",
          },
        ],
      },
    },
    {
      slug: "final-public-records",
      title: "17 · Final: public records",
      section: "Section 4 · The appeal, and records as a practice",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What does a records act compel an agency to do?",
            options: [
              "Produce existing records",
              "Answer questions put to it in writing by a member of the public",
              "Deliberate in public and give advance notice of its meetings",
              "Create a summary document when no single record answers the request",
            ],
            correctIndex: 0,
            explanation:
              "It is not a right to be given information. That distinction is why a request written as a question usually produces nothing.",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Where is the federal Freedom of Information Act codified?",
            options: [
              "5 U.S.C. 552",
              "44 U.S.C. 3301, alongside the federal definition of a record",
              "5 U.S.C. 553, in the Administrative Procedure Act's rulemaking provisions",
              "28 U.S.C. 1331, which grants federal question jurisdiction",
            ],
            correctIndex: 0,
            explanation:
              "The fee provisions sit at 552(a)(4)(A), the deadline at 552(a)(6), the exemptions at 552(b), and the foreseeable harm standard at 552(a)(8)(A).",
            sourceLessonSlug: "records-not-meetings",
          },
          {
            prompt: "Which entities does FOIA NOT reach?",
            options: [
              "Congress and the federal courts",
              "Independent regulatory agencies and government corporations",
              "Military departments and executive departments",
              "State agencies that administer federally funded programs",
            ],
            correctIndex: 0,
            explanation:
              "Nor the President's immediate personal staff. State and local bodies are covered by state law, which is a different statute rather than an exception to this one.",
            sourceLessonSlug: "who-is-covered",
          },
          {
            prompt: "What is the test for whether something is a record?",
            options: [
              "Possession and control",
              "Whether the document has been formally filed into an official system",
              "Whether the format can be produced without conversion or redaction",
              "Whether the agency designated it as public in its records policy",
            ],
            correctIndex: 0,
            explanation:
              "In any format. Email, texts, databases, audio, calendars, call logs, and metadata all qualify where the agency created or received them and controls them.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "How should a request for numbers be written?",
            options: [
              "Ask for the export and the data dictionary",
              "Ask how many incidents occurred and over what period",
              "Ask the agency to compute the rate per thousand residents",
              "Ask for whichever published report contains the closest figure",
            ],
            correctIndex: 0,
            explanation:
              "Name a machine-readable format, and ask in the same request, because a dictionary sought afterward costs another full response cycle.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "Why does the lesson call retention the hidden clock?",
            options: [
              "Records are destroyed on schedules",
              "Because requests must be filed within a set period of a record's creation",
              "Because agencies may pause a response while a retention review runs",
              "Because older records attract higher duplication fees under most acts",
            ],
            correctIndex: 0,
            explanation:
              "Knowing how long footage or call recordings are kept tells you how long before the story becomes impossible.",
            sourceLessonSlug: "what-is-a-record",
          },
          {
            prompt: "What is the highest-value conversation before filing?",
            options: [
              "Asking the records officer what exists",
              "Asking the agency's counsel which exemptions it intends to claim",
              "Asking the press office whether the subject is worth pursuing",
              "Asking a colleague which requests have succeeded at the same agency",
            ],
            correctIndex: 0,
            explanation:
              "Describe the subject, and ask which systems hold it, what the fields are called, and what a request would have to say to reach them.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "Why file formally even when an agency will send something informally?",
            options: [
              "A verbal no is not appealable",
              "Because informal release is unlawful without a filing on record",
              "Because a filing guarantees the news-media fee category applies",
              "Because informal release restarts the agency's retention schedule",
            ],
            correctIndex: 0,
            explanation:
              "Informal cooperation has no clock and no record, so file when the document is central or a denial is possible.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "What does a maintained request log make possible?",
            options: [
              "A story about the agency's own pattern of delay",
              "A statutory presumption that undelivered records were improperly withheld",
              "An automatic fee waiver on any request that exceeds its promised date",
              "Standing to file suit without exhausting administrative remedies",
            ],
            correctIndex: 0,
            explanation:
              "It needs dates, promised deadlines, and extensions, which only a log holds. It is a story only the reporter with records can write.",
            sourceLessonSlug: "before-you-file",
          },
          {
            prompt: "Where do requests most often die?",
            options: [
              "The date range",
              "The salutation, because unaddressed requests go unrouted",
              "The statute citation, because the wrong act voids the filing",
              "The signature block, because unsigned requests are returned",
            ],
            correctIndex: 0,
            explanation:
              "Recent and current mean nothing to a processor. Give a start date and an end date, and narrow later if needed.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "Which line keeps a large request from producing nothing until the end?",
            options: [
              "A request for partial releases",
              "A stated fee ceiling above which you want to be contacted",
              "A citation to the statutory determination deadline",
              "A demand for expedited processing on compelling-need grounds",
            ],
            correctIndex: 0,
            explanation:
              "Without it a request for two years of inspection reports may sit entirely unproduced until every page has been reviewed.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "Why file five unrelated requests separately?",
            options: [
              "Bundled requests move at the speed of the slowest",
              "Because each subject qualifies for its own statutory free allowance",
              "Because a bundled filing may not be appealed until every part resolves",
              "Because agencies charge a separate processing fee per subject anyway",
            ],
            correctIndex: 0,
            explanation:
              "And they can be denied together. Separate filings move and are tracked independently.",
            sourceLessonSlug: "writing-the-request",
          },
          {
            prompt: "What may a representative of the news media be charged under FOIA?",
            options: [
              "Duplication only",
              "Search and duplication, but never review of records for exemptions",
              "Search, review, and duplication, less the statutory free allowance",
              "Nothing, since news media requests are presumed to serve the public interest",
            ],
            correctIndex: 0,
            explanation:
              "The same treatment as educational and noncommercial scientific institutions. Only commercial-use requesters can be charged for review.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What are the two statutory free allowances for non-commercial requesters?",
            options: [
              "Two hours of search, one hundred pages of duplication",
              "Ten business days of processing and fifty pages of duplication",
              "One waiver a year and unlimited in-person inspection",
              "Twenty-five percent of the estimate and all electronic delivery",
            ],
            correctIndex: 0,
            explanation:
              "Which makes many small requests free, and which is not always applied automatically, so ask.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "State the FOIA public-interest fee-waiver test.",
            options: [
              "Significant contribution to public understanding, not primarily commercial",
              "Inability to pay, combined with membership in the news-media category",
              "A pending publication date and an editor's certification of significance",
              "A prior release of the same records to another requester without charge",
            ],
            correctIndex: 0,
            explanation:
              "Understanding of the operations or activities of the government, specifically. Both halves must be argued, at 5 U.S.C. 552(a)(4)(A)(iii).",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What does the news-media requester category turn on?",
            options: [
              "Gathering information of current interest and distributing it",
              "Holding a salaried staff position at a news organization",
              "Publication in a periodical with verified paid circulation",
              "Credentials issued by the agency receiving the request",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a freelancer, a student journalist, and a newsletter writer can all qualify.",
            sourceLessonSlug: "fees-and-waivers",
          },
          {
            prompt: "What does the twenty-business-day FOIA deadline measure?",
            options: [
              "The determination",
              "Delivery of all responsive records located during the search",
              "The period for the requester to accept or dispute a fee estimate",
              "The window in which an administrative appeal must be filed",
            ],
            correctIndex: 0,
            explanation:
              "The decision on whether to comply, plus notice of appeal rights, with up to ten more business days in unusual circumstances. Delivery may follow months later.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "What is a constructive denial?",
            options: [
              "A missed deadline treated as a denial",
              "A release so heavily redacted that nothing usable remains",
              "A fee estimate high enough that the requester abandons the request",
              "A referral to another agency without notice to the requester",
            ],
            correctIndex: 0,
            explanation:
              "Under FOIA the requester is then generally deemed to have exhausted administrative remedies, so silence is something you can escalate.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "When is expedited processing requested?",
            options: [
              "In the original filing",
              "After the determination deadline has passed without a response",
              "Once an administrative appeal is pending before the agency",
              "At the point a fee estimate arrives and cost becomes an obstacle",
            ],
            correctIndex: 0,
            explanation:
              "On a showing of compelling need, which includes urgency to inform the public about federal government activity.",
            sourceLessonSlug: "deadlines-and-delay",
          },
          {
            prompt: "How many exemptions does FOIA contain, and what are they?",
            options: [
              "Nine, and permission to withhold rather than an obligation",
              "Four, matching the four fee categories in the statute",
              "Twelve, of which three were added in 2016",
              "Seven, all concerning law enforcement and national security",
            ],
            correctIndex: 0,
            explanation:
              "At 5 U.S.C. 552(b), and permission to withhold particular material rather than everything sharing a file with it.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What does segregability require?",
            options: [
              "Release of the reasonably segregable portions",
              "Storage of exempt material separately from releasable material",
              "Review of each withholding by a second official before release",
              "Separation of a multi-subject request into individual filings",
            ],
            correctIndex: 0,
            explanation:
              "After deletion of the exempt parts, which is why a wholly withheld document is rarely something to accept.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What does the foreseeable harm standard require?",
            options: [
              "That the agency reasonably foresee harm to a protected interest",
              "That the requester show harm from the withholding rather than the release",
              "That a court approve any withholding of deliberative material",
              "That the agency quantify the harm in the denial letter",
            ],
            correctIndex: 0,
            explanation:
              "Or that disclosure be prohibited by law. Added by the FOIA Improvement Act of 2016 at 5 U.S.C. 552(a)(8)(A).",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What is a Glomar response?",
            options: [
              "A refusal to confirm or deny that records exist",
              "A withholding of an entire file under a single exemption",
              "A referral of a request to the agency believed to hold the records",
              "A statement that responsive records were lawfully destroyed",
            ],
            correctIndex: 0,
            explanation:
              "Named for the Hughes Glomar Explorer and Phillippi v. CIA (1976). The usual attack is official acknowledgment.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "What is a Vaughn index?",
            options: [
              "An itemized justification for each withholding",
              "A register of every request an agency received in a fiscal year",
              "A published list of the exemptions an agency routinely applies",
              "The schedule of duplication fees approved by an agency's board",
            ],
            correctIndex: 0,
            explanation:
              "The form established in Vaughn v. Rosen (1973), produced in litigation so a court can evaluate withholdings item by item.",
            sourceLessonSlug: "exemptions-and-redaction",
          },
          {
            prompt: "Which five things should a denial letter contain?",
            options: [
              "Records located, withheld, exemptions, decision maker, appeal route",
              "Fee, format, delivery date, contact, and the retention schedule",
              "Statute, custodian, search terms, systems searched, and tracking number",
              "Category, waiver decision, free allowance, page count, and due date",
            ],
            correctIndex: 0,
            explanation:
              "The absence of any one of them is itself a point on appeal.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "What is no responsive records a claim about?",
            options: [
              "The search",
              "The legal status of the material under the act's definitions",
              "The retention schedule that governed the record's destruction",
              "The requester's category, which limits which systems are searched",
            ],
            correctIndex: 0,
            explanation:
              "So ask which systems were searched, with what terms, over what date range, and by whom. The answer often reveals the wrong system or the wrong vocabulary.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "How should a too-broad response be treated?",
            options: [
              "As an invitation to narrow",
              "As a denial to be appealed at once, since breadth is the agency's problem",
              "As a withdrawal requiring a fresh filing from the beginning",
              "As a fee dispute, since breadth is always a cost objection",
            ],
            correctIndex: 0,
            explanation:
              "Eighty percent in three weeks beats winning an appeal about the other twenty percent in six months, and you can always file again.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "When does a set of denials become a story in itself?",
            options: [
              "When the same office repeats the same boilerplate",
              "When one denial is upheld on appeal without an explanation",
              "When an agency exceeds the statutory cap on copy charges",
              "When a request is referred between agencies more than twice",
            ],
            correctIndex: 0,
            explanation:
              "One denial is an outcome. Twelve with the same boilerplate exemption is a story about the agency, and the request log proves it.",
            sourceLessonSlug: "reading-a-denial",
          },
          {
            prompt: "Name the three stages of a federal FOIA challenge, in order.",
            options: [
              "Administrative appeal, OGIS mediation, district court",
              "Ombudsman opinion, attorney general review, state court",
              "Reconsideration, arbitration, and appellate review",
              "Fee dispute, expedited processing request, and Vaughn index",
            ],
            correctIndex: 0,
            explanation:
              "Agencies must allow at least ninety days to file the administrative appeal, and in court the agency carries the burden of justifying each withholding.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "What is OGIS, and what does it do?",
            options: [
              "The federal FOIA ombudsman, which offers mediation",
              "The office inside each agency that issues determinations",
              "The board that sets classification policy across the executive branch",
              "The registry of all federal records requests and their outcomes",
            ],
            correctIndex: 0,
            explanation:
              "Created by the OPEN Government Act of 2007 and housed at the National Archives. Agencies must tell requesters about it.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "What is the difference between an appeal that argues sentiment and one that argues the standard?",
            options: [
              "The standard names a specific failure the reviewer can decide",
              "Sentiment appeals are decided faster because they are shorter to read",
              "The standard is only available in litigation, not at the administrative stage",
              "Sentiment appeals preserve the requester's right to sue, and standards appeals do not",
            ],
            correctIndex: 0,
            explanation:
              "No articulated foreseeable harm, or a privacy exemption stretched over a whole record when only identifiers are protected, gives the reviewer something to grant.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "Name a form of leverage in a records dispute that is not legal.",
            options: [
              "Asking what has already been released to other requesters",
              "Filing a duplicate request under a colleague's name",
              "Publishing the denial letter before the appeal is decided",
              "Requesting the agency waive its own exemptions as a courtesy",
            ],
            correctIndex: 0,
            explanation:
              "Along with asking for a call about narrowing, checking the reading room, and contacting a state press association.",
            sourceLessonSlug: "the-appeal",
          },
          {
            prompt: "Which Indiana chapter is the records act, and which is the meetings act?",
            options: [
              "5-14-3 records, 5-14-1.5 meetings",
              "5-14-1.5 records, 5-14-3 meetings",
              "5-14-4 records, 5-14-5 meetings",
              "5-14-5 records, 5-14-4 meetings",
            ],
            correctIndex: 0,
            explanation:
              "5-14-4 creates the Public Access Counselor and 5-14-5 sets out the complaint procedure.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "Why does the Indiana lesson refuse to print response deadlines?",
            options: [
              "The numbers have not been read against the current statutory text",
              "Because Indiana treats its deadlines as confidential under the act",
              "Because deadlines are set by each agency rather than by statute",
              "Because the federal deadline preempts state deadlines for journalists",
            ],
            correctIndex: 0,
            explanation:
              "A course that asserts a stale deadline teaches someone to miss a real one. A source check is filed so the numbers can be added once verified.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What four things does the state homework ask you to write down?",
            options: [
              "Record definition, exemption list, response deadline, appeal route",
              "Statute number, agency address, custodian name, fee schedule",
              "Requester category, waiver language, tracking number, promised date",
              "Retention period, destruction date, archive location, format available",
            ],
            correctIndex: 0,
            explanation:
              "Read from your own state's code rather than from a summary, because a reporter who has read the statute argues from it forever.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What is fee shifting, and why does it matter to a small outlet?",
            options: [
              "The agency pays a prevailing requester's costs",
              "Duplication charges move to the agency once an appeal succeeds",
              "Search fees convert to review fees for news-media requesters",
              "Payment may be deferred until after the records are delivered",
            ],
            correctIndex: 0,
            explanation:
              "Without it, litigation is unaffordable regardless of the merits, which is why finding the equivalent state provision is part of the homework.",
            sourceLessonSlug: "indiana-worked-example",
          },
          {
            prompt: "What is a standing request?",
            options: [
              "A recurring release of a class of record",
              "A request left open until responsive material is located",
              "A joint filing by several outlets covering one institution",
              "A request preserved so a future reporter can adopt it",
            ],
            correctIndex: 0,
            explanation:
              "Or a place on a distribution list for something the agency already produces. Inspection reports, disciplinary summaries, contract awards, and incident logs are frequently available this way.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "Why does a beat calendar make records work cheaper?",
            options: [
              "The November request can be filed in July",
              "Because batching requests by quarter reduces duplication fees",
              "Because agencies grant standing requests only to reporters with a calendar",
              "Because appeals filed on a schedule are decided more favorably",
            ],
            correctIndex: 0,
            explanation:
              "A good share of a beat's future needs is predictable, which is the practical justification for keeping the calendar built in REPORT-00.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "Why keep every released document with its request number and release date?",
            options: [
              "Agencies lose things and links rot",
              "Because the act requires requesters to retain what was released",
              "Because retention obligations transfer to the requester on release",
              "Because an appeal cannot proceed without the original attached",
            ],
            correctIndex: 0,
            explanation:
              "The second time you need a document is usually years later and under deadline, and a released record is easier to obtain again once you can show it was released.",
            sourceLessonSlug: "records-as-a-practice",
          },
          {
            prompt: "What does the course hand off to the next one in the track?",
            options: [
              "Reading somebody else's data report",
              "Interviewing people who did not seek the attention",
              "Verification under time pressure and the decision not to publish",
              "Libel, privacy, recording consent, minors, and shield protections",
            ],
            correctIndex: 0,
            explanation:
              "Records get you a document. What the document says is a separate skill, starting with the executive summary against the underlying tables.",
            sourceLessonSlug: "records-as-a-practice",
          },
        ],
      },
    },
  ],
};
