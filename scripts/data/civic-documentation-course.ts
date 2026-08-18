// Authored "Civic Documentation: Recording What Happened in Public" — course #4 of the Storytelling
// series (docs/storytelling-curriculum.md, docs/documenters-course-outline.md).
//
// SOURCE. Built on the Documenters Field Guide, published by City Bureau, which BAM supplied as PDFs
// on 2026-08-03 (plans/future-courses/documentary/). Everything attributed to the Guide in this
// course was read from those files, not from a description of them. Article "last updated" dates are
// given where the Guide states them, because a course teaching accuracy should model it.
//
// THE RULE THIS COURSE FOLLOWS ABOUT ITS OWN SOURCE: teach the reasoning, cite the Guide, and send
// the learner to the original. It quotes sparingly and always with attribution. Reproducing the
// Guide's articles wholesale would be both a rights problem and a worse course, because a learner who
// can recite a checklist has not learned to think about why the checklist exists.
//
// NO AFFILIATION IS CLAIMED with City Bureau, Mirror Indy or any local Documenters programme, and
// lesson 1 says so. The course teaches the practice and points learners at the real programme, which
// pays. Telling those organisations the course exists is filed as a source check
// (documenters-permission) rather than assumed.
//
// WHY IT SITS IN THE STORYTELLING SERIES. It teaches the OPPOSITE discipline from the monodrama and
// short-form courses: record what happened, do not shape it, do not find the arc. That contrast is
// the pedagogy, and knowing when not to make a story out of something is a craft skill.
//
// LEGAL CONTENT IS EDUCATION, NOT ADVICE, and the course says so wherever it appears. Open-meetings
// law, defamation and recording consent all vary by state; the Guide summarises Illinois and Michigan
// as worked examples and this course teaches the METHOD of finding your own state's rule.

import type { AuthoredCourse } from "./authored-course";

const NOT_LEGAL_ADVICE = `> **This is education about the law, not legal advice.** Open-meetings law, recording-consent rules and defamation standards differ by state and change. Where this course names a rule it names the state it belongs to and the source it came from. For your own jurisdiction, read your state's act and ask your local programme staff, which is what the Documenters Field Guide itself tells you to do.`;

export const CIVIC_DOCUMENTATION_COURSE: AuthoredCourse = {
  title: "Civic Documentation: Recording What Happened in Public",
  description:
    "Public meetings decide budgets, contracts, zoning, policing and schools, and most of them happen in rooms with nobody watching. This course teaches the discipline of documenting them: what a public body actually is, how to read an agenda before you go, how to behave in the room, what open-meetings law protects and what it does not, note-taking to a standard a stranger can use, recording and photography with consent, interviewing after the gavel, and revising notes before memory fades. It covers where documentation ends and reporting begins, why that line protects you, and what defamation and the fair report privilege mean for someone publishing notes. Built on the Documenters Field Guide published by City Bureau, whose program trains and pays people to do exactly this work, with Indianapolis and Mirror Indy as the worked local example. Not affiliated with City Bureau or any local Documenters program. Education about the law, not legal advice.",
  lessons: [
    // ══════════════ MODULE 1 · WHY PUBLIC MEETINGS ══════════════
    {
      slug: "civdoc-the-gap",
      title: "1 · The room nobody is in",
      section: "Module 1 · Why public meetings",
      body: `A zoning board meets on a Tuesday afternoon and approves something that changes a neighborhood for thirty years. A school board votes on a closure. A police oversight body hears a complaint. Each of these is open to the public by law, announced in advance by law, and minuted by law.

**And frequently nobody is there.** Not the public, and increasingly not a reporter either, because covering a three-hour meeting where nothing may happen is expensive and local newsrooms have shrunk.

That gap is what this course is about.

**What a documenter does.** Attends the meeting, takes notes to a standard, and publishes them so that someone who was not there can understand what happened. That is the whole job, and its modesty is the point. **A documenter is not investigating, not interpreting, and not writing a story.**

**Why that restraint is the skill.** This is course four in a storytelling series, and the previous three taught you to find the change, shape material, and build to a turn. **This course teaches the opposite discipline, and teaches it deliberately:** record what happened. Do not find the arc. Do not decide what it means.

Both instincts are worth having, and a writer who has felt both pulls is better at each. **Knowing when NOT to make a story out of something is a craft skill**, not a moral decoration, and this is the course where you practice it.

**Where this comes from.** The method taught here is the one used by **Documenters**, a program launched by **City Bureau** in Chicago in **2018** to, in its own words, "train and pay people to monitor local government, contribute to the public record, and hold power to account." The Documenters Network now spans more than twenty local news and community organizations and has trained more than three thousand people (City Bureau, n.d.).

**This course is not affiliated with City Bureau or with any local Documenters program.** It teaches the practice from their published Field Guide, cites it throughout, and points you at the real program, which pays people to do this.

**Go and look at their work, not just at this course.** The method here belongs to them, and they are better placed to teach you the parts that change:

- **[documenters.org](https://documenters.org)** lists the cities with programmes, the meetings needing coverage right now, and how to sign up.
- **The [Documenters Field Guide](https://fieldguide.documenters.org/)** is the source for this course and is free to read in full.
- **[City Bureau](https://www.citybureau.org)** built and runs the network, and their wider work on civic media is worth your time.
- **[Mirror Indy](https://indianapolis-in.documenters.org/)** runs the Indianapolis programme, which is the local example used throughout.

**If you finish this course, the useful next step is to apply to them**, not to read another course. They train you further, they pay you, and your notes enter a public record that people actually use.

**The local example throughout is Indianapolis**, where the program is run by **Mirror Indy**. Every Indianapolis specific is paired with how to find the equivalent where you live, because the method is the transferable part.

${NOT_LEGAL_ADVICE}

:::reveal This is a storytelling series. Why does a course about not telling stories belong in it? ||| Because it teaches the opposite discipline on purpose, and the contrast is the pedagogy. The monodrama and short-form courses train you to find the change, shape the material and build to a turn. Documentation trains you to record what happened without finding the arc or deciding what it means. A writer who has felt both pulls is better at each, and knowing when NOT to make a story out of something is a craft skill rather than a scruple.

## Sources
- City Bureau. (n.d.). *Documenters field guide*. https://fieldguide.documenters.org/
- Documenters. (n.d.). *Indianapolis Documenters*, operated by Mirror Indy. https://indianapolis-in.documenters.org/`,
    },
    {
      slug: "civdoc-what-is-a-meeting",
      title: "2 · What a public body is, and what counts as a meeting",
      section: "Module 1 · Why public meetings",
      recallContent: [
        {
          prompt: "State what a documenter does, and the one restraint that defines the role.",
          answer:
            "Attends a public meeting, takes notes to a standard, and publishes them so someone who was not there can understand what happened. The restraint: a documenter is not investigating, not interpreting and not writing a story. Record what happened; do not find the arc.",
        },
      ],
      body: `Two definitions decide whether a gathering is one you can attend, and both are set by state law rather than by anybody's preference.

**What qualifies as a public body.** Every state defines this differently, and the definitions are deliberately broad. The Field Guide gives Illinois and Michigan as baselines. Illinois covers legislative, executive, administrative and advisory bodies of the state, counties, townships, cities, villages, school districts and other municipal corporations, boards, bureaus, committees and commissions, **including subsidiary committees and subcommittees supported by or spending tax revenue**. Michigan's is similarly broad, covering bodies empowered to exercise governmental authority or perform a governmental function (City Bureau, n.d.).

**The working rule the Guide gives**, which travels well: *any decision-making body established to perform a government function should be covered.* Marginal cases exist and are for judges.

**What counts as a meeting, and here the states genuinely differ**, which is why you cannot learn one state's rule and assume it elsewhere.

| | Illinois | Michigan |
| --- | --- | --- |
| **Threshold** | A **majority of a quorum** | A **full quorum** |
| **Form** | Any gathering, including phone and digital communication such as chat or email | Any convening, including any form of communication |
| **Purpose** | Discussing public business, meaning deliberative discussion rather than casual remarks | Deliberating toward or rendering a decision on public policy |

**Work the Illinois arithmetic once**, because it is the part people get wrong. A majority of a quorum is the quorum divided by two, plus one. The Field Guide's own worked example: a committee of fifteen members where eight are required to pass a motion has a quorum of eight, so **five** people gathering is enough to count as a meeting.

**Which means five members of a fifteen-person board having a substantive conversation by email may be a meeting** subject to open-meetings law. That is not a technicality; it is where a great deal of public business actually happens.

**What the laws generally require.** All fifty states have some form of open-meetings law, and while they are written differently, the general rule is that meetings are open unless an exception is demonstrated, that advance notice is given, and that minutes are published (City Bureau, n.d.).

**Your first homework for your own state**, and Lesson 6 walks it: find your state's open meetings act, and find its definitions of public body and meeting. Those two definitions tell you what you are entitled to attend.

:::reveal A fifteen-member board needs eight members to pass a motion. Under the Illinois standard, how many constitute a meeting, and why does that number matter in practice? ||| Five. The quorum is eight, and a majority of a quorum is eight divided by two plus one. It matters because it is a much lower bar than most people assume: five members of that board having a deliberative conversation, including by email or chat, can constitute a meeting subject to the open meetings act. That is where a great deal of real public business happens, and it is also why Michigan's full-quorum standard is genuinely different rather than a wording variation.

## Sources
- City Bureau. (n.d.). *Know your rights: Open meetings laws* (last updated October 11, 2024). Documenters Field Guide. https://fieldguide.documenters.org/`,
    },
    {
      slug: "civdoc-trained-and-paid",
      title: "3 · Trained and paid, not volunteered",
      section: "Module 1 · Why public meetings",
      body: `One detail of the Documenters model is worth a lesson of its own, because it is the part most often skipped when people describe civic journalism: **documenters are paid.**

The Field Guide states the program's purpose as training and paying people to monitor local government. Pay is a set rate based on the length of the meeting, **plus additional time for pre-research and editing** (City Bureau, n.d.).

**Why that matters more than it sounds**

**1. It sets the standard of the work.** The note-taking guidance says the program expects "reasonably concise and thorough notes in line with that time allotment." You are not asked for a transcript or an investigation. You are asked for a professional job of a defined size, and knowing the size is what lets you do it well.

**2. It changes who can do it.** Unpaid civic work selects for people with spare afternoons, which is a narrow and unrepresentative group. Paying for it opens the work to people who could not otherwise attend a Tuesday afternoon meeting, and those are frequently the people most affected by what the meeting decides.

**3. It creates an obligation.** You are being compensated for a specific thing, which the AI guidance in Lesson 18 names precisely: **your perspective and synthesis as a witness and community member.** That is what the money is for, and it is why the program is strict about not outsourcing it.

**What the pay does not do** is make you press. A documenter attends as a member of the public, with the public's rights, which Lesson 8 covers. The pay is not a credential and does not grant access.

**How to actually join**, which the Field Guide covers in its "Using Documenters.org" section: sign up on documenters.org, attend an orientation or workshop, then apply for assignments through the platform and submit your work there. Whether a program exists near you depends on the city, and there are roughly thirty at present, including Indianapolis.

**And if there is no program near you**, the work is still available. Public meetings are public whether or not anyone is paying you to attend, and the rest of this course teaches the practice rather than the platform.

**Do this now rather than at the end.** Open [documenters.org](https://documenters.org) and find out whether your city has a programme. It takes two minutes, and it changes how you read the rest of this course: if there is one, everything here is preparation for work you can actually be paid for, and you will want to check their local guide alongside these lessons. If there is not, you are learning a practice you can still use, and you will be reading for transferable method rather than for a specific programme's standards.

:::reveal Why does paying documenters change the quality of the public record, rather than just being fairer to the documenter? ||| Because unpaid civic work selects for people with free weekday afternoons, which is a narrow and unrepresentative group, and the people most affected by what a zoning or school board decides are frequently the least able to attend one unpaid. Paying widens who can do it, so the record gets made by a broader set of witnesses. It also defines the size of the job, which is what makes "reasonably concise and thorough" a usable standard rather than an impossible one.

## Sources
- City Bureau. (n.d.). *Documenters field guide*. https://fieldguide.documenters.org/
- City Bureau. (2024, October 11). *Note-taking assignment tips*. Documenters Field Guide.`,
    },
    {
      slug: "civdoc-quiz-1",
      title: "4 · Knowledge check: why public meetings",
      section: "Module 1 · Why public meetings",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the defining restraint of the documenter role?",
            options: [
              "Record what happened without investigating or deciding what it means",
              "Report only on meetings where a formal vote was taken",
              "Publish nothing until a staff editor has approved the framing",
              "Attend only meetings that other journalists are not covering",
            ],
            correctIndex: 0,
            explanation:
              "The modesty is the point. It is the opposite discipline from the rest of this storytelling series, which trains you to find the change and shape the material.",
            sourceLessonSlug: "civdoc-the-gap",
          },
          {
            prompt: "Under the Illinois standard described in the Field Guide, what counts as a meeting?",
            options: [
              "Any gathering at all involving two or more members of a public body",
              "A gathering of a majority of a quorum discussing public business",
              "A gathering at which a formal recorded vote is actually taken",
              "A gathering attended by the entire full membership of the public body",
            ],
            correctIndex: 1,
            explanation:
              "A majority of a quorum is the quorum divided by two plus one, so a fifteen-member board needing eight to pass a motion reaches the threshold at five. Michigan requires a full quorum, which is a genuine difference.",
            sourceLessonSlug: "civdoc-what-is-a-meeting",
          },
          {
            prompt: "Do open-meetings definitions of a 'gathering' cover email and chat?",
            options: [
              "No, the definitions apply only to gatherings held in a physical room together",
              "Only where the communication is formally archived by the public body itself",
              "Yes, the definitions are broad and include phone and digital communication",
              "Only in those states that have amended their open meetings acts since 2020",
            ],
            correctIndex: 2,
            explanation:
              "That breadth matters because a great deal of real public business happens by email among a subset of members, which can put it inside the act.",
            sourceLessonSlug: "civdoc-what-is-a-meeting",
          },
          {
            prompt: "What do open-meetings laws generally require across the fifty states?",
            options: [
              "That every single meeting be livestreamed and then archived permanently online",
              "That any resident may speak on any agenda item they choose to address",
              "That an accredited journalist be admitted ahead of ordinary members of the public",
              "Meetings open unless an exception is shown, advance notice, and published minutes",
            ],
            correctIndex: 3,
            explanation:
              "All fifty states have some form of open-meetings law. They are written differently, but that trio is the general shape, with exceptions mostly where other rights would be compromised.",
            sourceLessonSlug: "civdoc-what-is-a-meeting",
          },
          {
            prompt: "Why does the course say paying documenters improves the public record?",
            options: [
              "Paid work attracts applicants with formal journalism training",
              "Unpaid work selects for people with free weekday afternoons",
              "Payment allows programs to require longer, more detailed notes",
              "Paid documenters are granted access that the public does not have",
            ],
            correctIndex: 1,
            explanation:
              "That is a narrow and unrepresentative group, and the people most affected by a zoning or school board decision are often least able to attend unpaid. Pay also defines the size of the job.",
            sourceLessonSlug: "civdoc-trained-and-paid",
          },
          {
            prompt: "Does being a paid documenter grant special access to a meeting?",
            options: [
              "No, you attend as a member of the public with the public's rights",
              "Yes, paid documenters hold press credentials for that body",
              "Yes, but only for meetings the program has registered in advance",
              "It depends on whether the body has adopted a media policy",
            ],
            correctIndex: 0,
            explanation:
              "The pay is not a credential. Your rights in the room are the rights any resident has, which is the subject of the behavior and open-meetings lessons.",
            sourceLessonSlug: "civdoc-trained-and-paid",
          },
          {
            prompt: "What is the Field Guide's working rule for whether something is a public body?",
            options: [
              "Any body whose members are elected by voters rather than appointed to their seats",
              "Any body that regularly publishes written minutes of its own proceedings",
              "Any decision-making body established to perform a government function",
              "Any body holding the legal power to levy taxes directly on residents",
            ],
            correctIndex: 2,
            explanation:
              "The definitions are deliberately broad and include subsidiary committees and subcommittees supported by or spending tax revenue. Marginal cases are left to judges.",
            sourceLessonSlug: "civdoc-what-is-a-meeting",
          },
          {
            prompt: "What is a documenter being compensated for, in the programme's own framing?",
            options: [
              "A verbatim transcript of everything said during the meeting",
              "An investigation into whatever the meeting revealed",
              "Attendance, measured by the length of the meeting alone",
              "Their perspective and synthesis as a witness and community member",
            ],
            correctIndex: 3,
            explanation:
              "That framing is why the program is strict about not outsourcing the takeaways, and it is the reasoning behind its AI guidelines.",
            sourceLessonSlug: "civdoc-trained-and-paid",
          },
          {
            prompt: "What relationship does this course claim with City Bureau?",
            options: [
              "None; it teaches the published practice and is not affiliated",
              "It is an authorised training partner of the Documenters Network",
              "It is licensed to deliver Documenters certification",
              "It is operated jointly with Mirror Indy in Indianapolis",
            ],
            correctIndex: 0,
            explanation:
              "It teaches the practice from the published Field Guide, cites it, and points learners at the real program, which pays people to do this work.",
            sourceLessonSlug: "civdoc-the-gap",
          },
          {
            prompt: "What should a learner do if there is no Documenters programme in their city?",
            options: [
              "Wait until a program launches locally before attending meetings",
              "Attend anyway, since public meetings are public regardless",
              "Apply to a program in another city and cover meetings remotely",
              "Request that their city council establish a program first",
            ],
            correctIndex: 1,
            explanation:
              "The course teaches the practice rather than the platform. Roughly thirty programs exist, including Indianapolis, and the work is available with or without one.",
            sourceLessonSlug: "civdoc-trained-and-paid",
          },
        ],
      },
    },

    // ══════════════ MODULE 2 · BEFORE THE MEETING ══════════════
    {
      slug: "civdoc-pre-research",
      title: "5 · Pre-research: what to read before you go",
      section: "Module 2 · Before the meeting",
      recallContent: [
        {
          prompt: "Name the two definitions that decide whether you may attend a gathering, and say which one differs most between states.",
          answer:
            "What qualifies as a public body, and what counts as a meeting. The meeting threshold differs most: Illinois uses a majority of a quorum while Michigan requires a full quorum, so a gathering that is a meeting in one state is not in the other.",
        },
      ],
      body: `The Field Guide lists pre-research as the first of its six note-taking steps, and it is the one that most changes the quality of what you produce (City Bureau, 2024).

**Why it matters more than it sounds.** In a packed meeting you cannot capture everything, and the Guide says so plainly: focus on a couple of the most important items **that you identified during your pre-research.** Without it you have no basis for choosing, so you write down whatever is loudest, which is rarely what matters.

**What to read, in order of value**

**1. The agenda.** Published in advance by law in most places. It tells you what will be discussed, in what order, and often what is being voted on rather than merely discussed. **Learn to spot the difference**, because an action item matters more than a discussion item.

**2. The meeting packet.** Many bodies publish supporting documents: staff reports, contracts, budgets, presentations. This is where the substance is, and almost nobody reads it. A documenter who has read the packet knows what the vote is actually about.

**3. Minutes of the last meeting.** Tells you what was carried over, what was deferred, and what argument is already underway. Items deferred repeatedly are frequently the interesting ones.

**4. Who the members are.** Names, and which district or constituency they represent. You will need names spelled correctly, and having them in advance saves you writing phonetically in the dark.

**5. Any prior coverage.** If a local outlet has written about the issue, you will understand the context faster and can link to it, which the Guide recommends.

**What to produce from it**, and this is the practical output: a short pre-brief for yourself with the two or three items you expect to matter, the names you will need, and any terms you do not understand yet. **Look those up before you go**, not during.

**The realistic time budget.** Pre-research is part of what you are paid for, and it is not unlimited. Half an hour of focused reading beats two hours of drifting through a portal. Read the agenda properly, skim the packet for the items you flagged, and stop.

**One warning.** Pre-research tells you what to expect, and meetings routinely depart from expectation: an item is pulled, a public comment period turns into the story, someone resigns. **Do not let the pre-brief become a plan you follow past the evidence.** It is a way of arriving informed, not a script.

:::reveal Pre-research told you items 4 and 7 would matter, and the meeting is dominated by an unexpected forty minutes of public comment on something else. What do you do? ||| Follow the meeting. The pre-brief is a way of arriving informed, not a script to execute, and forty minutes of public comment IS what happened at that meeting whether or not you predicted it. Note the substance of the comment, who spoke and why they were concerned, and still capture the outcomes of items 4 and 7 since those were the formal business. The pre-research has not been wasted: it is what let you recognize that the comment period was a departure worth recording.

## Sources
- City Bureau. (2024, October 11). *Note-taking assignment tips*. Documenters Field Guide. https://fieldguide.documenters.org/
- City Bureau. (n.d.). *Before your assignment*. Documenters Field Guide.`,
    },
    {
      slug: "civdoc-finding-meetings",
      title: "6 · Finding the meeting, and finding your state's law",
      section: "Module 2 · Before the meeting",
      body: `Two research skills, both of which you do once per jurisdiction and then reuse forever.

**Finding the meetings.** Open-meetings laws require advance notice, so the notice exists somewhere. In descending order of convenience:

1. **The body's own page.** Most publish a calendar, agendas and minutes. Search the body's name plus "agenda."
2. **A central municipal calendar.** Many cities aggregate all boards and commissions in one place.
3. **A legislative-information portal.** Larger cities use systems that hold agendas, packets and votes together, which are the best source when they exist.
4. **The clerk.** If nothing is published usefully, the clerk's office knows the schedule and is generally helpful. Asking is normal.
5. **Documenters.org**, if a program covers your city, which also shows which meetings are already assigned.

**The bodies worth knowing**, beyond city council: school board, zoning and planning, police oversight or accountability, transit, library, parks, health, housing authority, and the budget or finance committee. **The smaller ones are frequently the least covered and the most consequential**, since a planning commission decides more about a neighborhood's next decade than most council votes.

**Finding your state's open meetings act**, which is the more valuable of the two skills:

1. **Search your state's name plus "open meetings act."** Most states have a single named act.
2. **Read it on the legislature's own site**, not a summary. Summaries go stale silently.
3. **Find three things:** the definition of a public body, the definition of a meeting, and the notice requirement.
4. **Then find the exceptions**, usually called executive session or closed session. Knowing when a body may legitimately close a meeting stops you making an accusation you cannot support.
5. **Check whether your attorney general publishes guidance.** Several do, and it is more readable than the statute.

**Two national resources the Field Guide itself points to**, both from the Reporters Committee for Freedom of the Press: a first amendment handbook including a summary of libel law, and a guide to open government laws across states (City Bureau, n.d.).

**For Indianapolis specifically**, the relevant law is Indiana's open door statute, and the local Documenters program is run by Mirror Indy. Marion County bodies worth knowing include the City-County Council and its committees, the school boards of the townships and IPS, the Metropolitan Development Commission for zoning, and the transit and library boards. **Apply the same five steps above to your own county if you are elsewhere**, which is the transferable part.

:::reveal Why does the course tell you to find the EXCEPTIONS in your state's act, not just the rules? ||| Because bodies may legitimately close part of a meeting, usually in what is called executive or closed session, and knowing when that is lawful stops you from recording an accusation you cannot support. If you are asked to leave, the Field Guide's guidance is to comply, ask for an explanation and record it in your notes, and you can only assess that explanation if you know what the act actually permits. Not knowing the exceptions makes you either credulous or wrongly suspicious, and both damage the record.

## Sources
- City Bureau. (n.d.). *Know your rights: Open meetings laws* (last updated October 11, 2024). Documenters Field Guide. https://fieldguide.documenters.org/
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "civdoc-prep-drill",
      title: "7 · Drill: prepare for a real meeting",
      section: "Module 2 · Before the meeting",
      body: `Pick a real public body in your own county and prepare for its next meeting. Type short answers.

This drill produces something you will actually use: the beginning of a jurisdiction file you keep.`,
      exercise: {
        instructions: "Answer for a real body near you. Short answers; the point is doing the lookups.",
        items: [
          {
            prompt: "What is your state's open-meetings law called?",
            answer: "the state open meetings act",
            accept: [
              "open meetings act",
              "open door law",
              "sunshine law",
              "open meetings law",
            ],
            explanation:
              "Most states have a single named act. Indiana's is the open door law; many others are an Open Meetings Act, and several are called sunshine laws.",
          },
          {
            prompt: "Where should you read that act, rather than a summary of it?",
            answer: "the legislature's own site",
            accept: [
              "the state legislature website",
              "the official statute site",
              "the primary source",
            ],
            explanation:
              "Summaries go stale silently and give no signal when they stop being accurate. The same discipline the citation work in this catalog uses.",
          },
          {
            prompt: "Name the three things to find first in the act.",
            answer: "public body, meeting, notice requirement",
            accept: [
              "definition of public body, definition of meeting, notice",
              "public body definition, meeting definition, notice",
            ],
            explanation:
              "Those three tell you what you may attend and what warning you are owed. The exceptions come next.",
          },
          {
            prompt: "What is the FIRST document to read when preparing for a meeting?",
            answer: "the agenda",
            accept: ["agenda", "the published agenda"],
            explanation:
              "It tells you what is being discussed and in what order, and lets you distinguish action items from discussion items.",
          },
          {
            prompt: "What distinction on an agenda should you learn to spot?",
            answer: "action items versus discussion items",
            accept: [
              "action vs discussion",
              "what is being voted on versus discussed",
              "votes versus discussion",
            ],
            explanation:
              "An action item is a decision. A discussion item may become one later. Knowing which is which decides where your attention goes.",
          },
          {
            prompt: "Which document holds the substance and is most often unread?",
            answer: "the meeting packet",
            accept: ["packet", "the board packet", "supporting documents", "staff reports"],
            explanation:
              "Staff reports, contracts, budgets and presentations. A documenter who has read it knows what the vote is actually about.",
          },
          {
            prompt: "Why read the minutes of the previous meeting?",
            answer: "to see what was deferred or carried over",
            accept: [
              "what was carried over",
              "what was deferred",
              "the argument already underway",
            ],
            explanation:
              "Repeatedly deferred items are frequently the interesting ones, and you arrive knowing an argument is already in progress.",
          },
          {
            prompt: "Name one body other than city council worth covering in your county.",
            answer: "the school board",
            accept: [
              "zoning or planning commission",
              "planning commission",
              "police oversight board",
              "transit board",
              "library board",
              "housing authority",
              "health board",
            ],
            explanation:
              "The smaller bodies are frequently least covered and most consequential; a planning commission shapes a neighborhood's next decade.",
          },
          {
            prompt: "Who do you contact when nothing useful is published online?",
            answer: "the clerk's office",
            accept: ["the clerk", "the city clerk", "county clerk"],
            explanation:
              "They know the schedule and are generally helpful. Asking is a normal thing a member of the public does.",
          },
          {
            prompt: "What should your pre-research produce, in one item?",
            answer: "a short pre-brief with the items you expect to matter",
            accept: [
              "a pre-brief",
              "a list of two or three items to watch, plus names",
              "notes on the items, names and terms",
            ],
            explanation:
              "Two or three expected items, the names you will need spelled right, and any unfamiliar terms looked up before you go rather than during.",
          },
        ],
      },
    },

    // ══════════════ MODULE 3 · IN THE ROOM ══════════════
    {
      slug: "civdoc-behaviour",
      title: "8 · How to behave in the room",
      section: "Module 3 · In the room",
      recallContent: [
        {
          prompt: "Name three of the five ways to find when a public body is meeting.",
          answer:
            "Any three of: the body's own page with its calendar and agendas, a central municipal calendar aggregating all boards, a legislative-information portal, asking the clerk's office directly, and documenters.org where a program covers the city.",
        },
      ],
      body: `You are attending as **a member of the public**, with a member of the public's rights. Not press, not an official, and not an inspector. Almost everything about conduct follows from that.

**What that means practically**

- **You may attend**, because the meeting is open by law.
- **You may take notes.** Nobody's permission is required.
- **You may usually record**, subject to the body's reasonable rules, which Lesson 9 covers.
- **You may not disrupt.** A body may set reasonable rules to minimize disruption and those apply to you.
- **You have no special right of access** to anything the public does not have: no closed sessions, no documents that are not public.

**Arrive early.** You want the agenda in hand if paper copies are out, a seat where you can hear and see, an idea of where officials sit and who is who, and the chance to ask a staff member how public comment works at this body, which varies enormously.

**Where to sit.** Somewhere you can hear, see faces, and leave without walking in front of anybody. **Being able to hear matters more than a good view**: you can describe a room from memory but you cannot reconstruct a sentence you did not catch.

**Moving around.** The Field Guide's photography guidance explicitly says you may move about the room to capture the best images. Do it between items rather than mid-vote, and do not stand where you block anyone's view of the proceedings.

**If someone asks who you are.** Say so plainly: you are documenting the meeting for the public record, and if you are on assignment for a program, name it. **There is nothing to be evasive about**, and evasiveness creates suspicion that accuracy does not deserve.

**If you are asked to leave.** The Field Guide is specific and its advice is good: **comply, but ask for an explanation and record it in your notes** (City Bureau, n.d.). Arguing with a chair achieves nothing, cannot be won in the room, and turns you into the story. The explanation, written down, is what allows anyone to assess afterwards whether the closure was lawful. **That note is more valuable than the part of the meeting you missed.**

**Public comment, if you intend to speak.** Consider carefully whether to. A documenter who becomes a participant is now part of what happened, which complicates the record. It is not forbidden and it is a decision to make deliberately rather than in the moment.

${NOT_LEGAL_ADVICE}

:::reveal You are asked to leave part of a meeting and you believe the closure is improper. What do you do, and why is that the better outcome? ||| Comply, ask for an explanation, and write the explanation down verbatim in your notes. Arguing with the chair cannot be won in the room, and it makes you part of the event you came to record. The written explanation is what lets anyone afterwards assess whether the closure was lawful under the state's exceptions, which is a stronger and more durable challenge than a confrontation. In practice that note is often worth more than the portion of the meeting you missed.

## Sources
- City Bureau. (n.d.). *Behavior at public meetings*. Documenters Field Guide. https://fieldguide.documenters.org/
- City Bureau. (n.d.). *Know your rights: Open meetings laws* (last updated October 11, 2024). Documenters Field Guide.`,
    },
    {
      slug: "civdoc-know-your-rights",
      title: "9 · What the law protects, and what it does not",
      section: "Module 3 · In the room",
      body: `${NOT_LEGAL_ADVICE}

**Your right to record is usually protected by your state's open meetings act**, and it is usually qualified. The Field Guide's summary, using its two worked states:

- **Illinois.** The Code of Civil Procedure provides that any person may record the proceedings at meetings required to be open, by tape, film or other means. **But** the authority holding the meeting shall prescribe reasonable rules governing that right.
- **Michigan.** The Open Meetings Act likewise protects recording by audio or video including live broadcast, and a public body may establish reasonable rules to minimize disruption (City Bureau, n.d.).

**So the pattern to expect anywhere:** a protected right, plus the body's power to set reasonable rules about how you exercise it. **Find the body's media policy before you go**, because "reasonable rules" is where the practical constraints live: where cameras may stand, whether tripods are allowed, whether you must sit in a particular area.

**The part that catches people: private conversations.**

Recording the meeting is one thing. Recording two officials talking in the corridor afterwards is another, and it can be unlawful.

**Illinois and Michigan are both all-party consent states**, meaning every party to a private conversation must consent to being recorded. Illinois treats a recording as potentially unlawful when it is made **surreptitiously**, which the Guide glosses as secretly, stealthily, deceptively or through concealment, **and** where the parties had a reasonable expectation of privacy. The Guide's rule of thumb for that expectation is whether people could reasonably expect to be overheard by someone not part of the conversation (City Bureau, n.d.).

**Two practices that follow, and they are cheap**

1. **Display your recording device prominently.** A visible recorder cannot be surreptitious, which removes one of the two elements.
2. **Do not record conversations outside the space where the public meeting is happening.** The Guide recommends exactly this, and it is a clean line that needs no legal judgment in the moment.

**Inside the public room, during the meeting**, you can generally assume there is no reasonable expectation of privacy. Outside it, assume there is.

**Consent rules vary by state**, and the all-party rule is not universal: many states are one-party consent. **Look yours up rather than assuming**, because the two regimes produce opposite advice about the same act.

**What the law does not give you.** No right to attend a lawfully closed session. No right to documents that are not public. No right to compel an answer from an official. And no protection from the ordinary consequences of publishing something false, which is Lesson 17.

:::reveal You have been recording the meeting lawfully. Afterwards two board members continue arguing in the hallway and you keep recording. What has changed? ||| You have moved from a public meeting, where there is generally no reasonable expectation of privacy, to a private conversation where there may well be. In an all-party consent state such as Illinois or Michigan that recording can be unlawful, particularly if it is surreptitious. The clean practice the Field Guide recommends is not to record conversations outside the space where the public meeting is happening, which avoids having to make a legal judgment about expectations while standing in a corridor.

## Sources
- City Bureau. (n.d.). *Know your rights: Open meetings laws* (last updated October 11, 2024). Documenters Field Guide. https://fieldguide.documenters.org/
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "civdoc-notetaking-one",
      title: "10 · Note-taking: the standard, and the six steps",
      section: "Module 3 · In the room",
      body: `The Field Guide calls note-taking "the most essential skill for Documenters," and gives one sentence that governs everything else (City Bureau, 2024):

> "Remember that someone who didn't attend the meeting should be able to understand what happened based on your notes."

**Everything in this course is downstream of that sentence.** It is the test for whether a note is finished, whether a detail belongs, and whether an abbreviation is acceptable. Read it again before every assignment.

**The six steps, as the Guide sets them out**, with what each one means in practice:

**1. Do your pre-research.** Covered in Lesson 5. Read the agenda and any documentation before you go.

**2. Create a system.** Keywords, phrases and short sentences are fine, and the Guide says so explicitly: stick to them to maximize how much you record. Raw notes become a fuller submission later. **Record audio and jot timestamps for anything you want to double-check**, which is the single most useful habit in the list.

**3. Listen and learn.** Concentrate on accuracy and on hearing different perspectives. Not just the officials: the room.

**4. Make connections.** By hand, leave blank space to backfill with questions and connections that occur later. Typing, use bold and underline to group sections. **Your notes are a working document, not a transcript.**

**5. Use your time efficiently.** If the meeting is packed, you do not need everything. Focus on a few items identified in pre-research. The Guide is direct that pay covers the meeting plus pre-research and editing, and that the expectation is **reasonably concise and thorough** notes in line with that.

**6. Review and edit.** Make it legible, clarify anything ambiguous, and **do not wait**. The Guide's reasoning: useful details fade from memory. Lesson 16 is entirely about this step.

**The freedom the Guide grants**, which surprises people: note however works for you. Abbreviate, use shorthand, draw. **The constraint is not the method, it is the output**, which must be organized and revised for readers afterwards.

**Two habits worth adding, both cheap**

**Mark uncertainty as you go.** A question mark beside a number you half-heard, a bracket around a name you are unsure of. Then you know afterwards exactly what to verify, rather than discovering at editing time that you cannot tell which figures you are confident about.

**Separate what was said from what you concluded.** Some documenters keep a margin, others a bracketed convention. Either way, the distinction must survive to the editing stage, because Lesson 17 depends on it.

:::reveal What single sentence from the Field Guide should be applied to every note, and what three decisions does it settle? ||| That someone who did not attend the meeting should be able to understand what happened based on your notes. It settles whether a note is finished (can a stranger follow it), whether a detail belongs (does its absence leave a stranger confused), and whether an abbreviation is acceptable (will it still be legible to someone else, or to you next week). It converts a vague instruction to be thorough into a test you can actually apply.

## Sources
- City Bureau. (2024, October 11). *Note-taking assignment tips*. Documenters Field Guide. https://fieldguide.documenters.org/`,
    },
    {
      slug: "civdoc-notetaking-two",
      title: "11 · What to capture, and what to do when it is packed",
      section: "Module 3 · In the room",
      body: `The Field Guide provides a list of things to consider including. It is worth knowing not as a checklist to tick but because **each item answers a question a reader will otherwise have** (City Bureau, 2024).

| Capture | The reader's question it answers |
| --- | --- |
| **Attendee count or estimate**, not counting officials | Did anyone care? A packed room is itself information |
| **What time the meeting started** | Did it start late, and how long did this take? |
| **Presenters' names, titles and affiliations** | Who was making this case, and on whose behalf? |
| **The stated goals of the meeting** | What did they say they were there to do? |
| **Main concerns of attendees, and why raised** | What does the public actually think, and on what grounds? |
| **Next steps and solutions presented** | What happens now, and when does it come back? |
| **Named and quoted community members** | Who spoke, in their own words? |
| **Photos, audio or video** (recommended) | Evidence, and the room's character |
| **Links to prior coverage, reports, related sites** | Where does this sit in a longer story? |

**On names, the Guide gives a practical and generous rule.** You may need to approach someone after the meeting to check the spelling of their name, **or you can describe them generally**, for example "a resident." That second option matters: it lets you record what someone said accurately without pursuing a person who did not seek attention.

**When the meeting is packed**, which it often is, the Guide's instruction is explicit: you do not need to capture everything. Focus on a couple of the most important items identified in pre-research.

**What to protect when you triage**, in order:

1. **Outcomes.** What was decided, by what vote, on what item. If you capture nothing else, capture this. **A decision unrecorded is the failure that matters**, because it is the thing nobody can reconstruct later.
2. **Anything with a number.** Dollar amounts, unit counts, dates, deadlines. Numbers are what people cite afterwards, and are the hardest to recover from memory.
3. **Public comment.** Frequently the only record of what residents said, and the part most likely to go unrecorded elsewhere.
4. **The unexpected.** A resignation, a walkout, an argument, a departure from the agenda.

**What to drop first:** procedural routine that appears in every meeting, ceremonial items, and detailed recapitulation of a presentation whose slides are in the public packet. **Link to the packet instead of retyping it.**

**A note on quoting.** If you are going to quote someone, quote them exactly, and use your recording and timestamp to check it. **A paraphrase inside quotation marks is an error**, and it is the kind that damages trust in everything else you wrote.

:::reveal The meeting runs three hours and covers nineteen items. You cannot capture all of it. What do you protect first, and what do you drop? ||| Protect outcomes first: what was decided, by what vote, on which item, since a decision nobody recorded is the thing that cannot be reconstructed afterwards. Then anything with a number, then public comment, then anything unexpected. Drop procedural routine that recurs at every meeting, ceremonial items, and detailed retyping of a presentation whose slides are already in the public packet, linking to the packet instead.

## Sources
- City Bureau. (2024, October 11). *Note-taking assignment tips*. Documenters Field Guide. https://fieldguide.documenters.org/`,
    },
    {
      slug: "civdoc-quiz-2",
      title: "12 · Knowledge check: in the room",
      section: "Module 3 · In the room",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What single standard governs whether a set of notes is finished?",
            options: [
              "Someone who did not attend can understand what happened from them",
              "Every agenda item has at least one paragraph devoted to it",
              "The notes contain a direct quotation from every speaker",
              "The notes are shorter than the official minutes of the meeting",
            ],
            correctIndex: 0,
            explanation:
              "It also settles whether a detail belongs and whether an abbreviation is acceptable. It converts a vague instruction to be thorough into a test you can apply.",
            sourceLessonSlug: "civdoc-notetaking-one",
          },
          {
            prompt: "You are asked to leave part of a meeting. What does the Field Guide advise?",
            options: [
              "Refuse politely and cite the state's open meetings act",
              "Comply, ask for an explanation, and record it in your notes",
              "Leave immediately and file a complaint with the attorney general",
              "Remain seated until a supervisor or the chair explains publicly",
            ],
            correctIndex: 1,
            explanation:
              "Arguing cannot be won in the room and makes you part of the event. The written explanation lets anyone afterwards assess whether the closure was lawful, and is often worth more than the part you missed.",
            sourceLessonSlug: "civdoc-behaviour",
          },
          {
            prompt: "What is the pattern to expect regarding your right to record a public meeting?",
            options: [
              "An absolute right that no public body may restrict in any way",
              "A right that applies only to audio, never to video recording",
              "A protected right, qualified by the body's power to set reasonable rules",
              "A right that must be requested from the chair before each meeting",
            ],
            correctIndex: 2,
            explanation:
              "Both worked states protect recording and allow the body reasonable rules to minimize disruption. Those rules are where practical constraints live, so find the media policy before you go.",
            sourceLessonSlug: "civdoc-know-your-rights",
          },
          {
            prompt: "Why should a recording device be displayed prominently?",
            options: [
              "It signals to officials that they are speaking on the record",
              "Public bodies require visible equipment under most media policies",
              "It improves audio quality by keeping the device unobstructed",
              "A visible recorder cannot be surreptitious, removing one legal element",
            ],
            correctIndex: 3,
            explanation:
              "In the worked example, unlawfulness required both surreptitiousness and a reasonable expectation of privacy. Visibility removes the first element cheaply.",
            sourceLessonSlug: "civdoc-know-your-rights",
          },
          {
            prompt: "What practice does the Field Guide recommend about recording outside the meeting room?",
            options: [
              "Do not record conversations outside the space where the meeting is happening",
              "Record everything and delete anything private afterwards",
              "Record only if you announce yourself to those present first",
              "Record freely, since a public building has no privacy expectation",
            ],
            correctIndex: 0,
            explanation:
              "It is a clean line requiring no legal judgment in a corridor. Inside the public room you can generally assume no reasonable expectation of privacy; outside, assume there is one.",
            sourceLessonSlug: "civdoc-know-your-rights",
          },
          {
            prompt: "Which item should be protected FIRST when a meeting is too packed to capture fully?",
            options: [
              "Outcomes: what was decided, by what vote, on which item",
              "A verbatim record of the longest public comment",
              "The full text of any presentation given by staff",
              "The names and titles of everyone present in the room",
            ],
            correctIndex: 0,
            explanation:
              "A decision nobody recorded is the failure that matters, because it cannot be reconstructed later. Numbers, public comment and the unexpected follow.",
            sourceLessonSlug: "civdoc-notetaking-two",
          },
          {
            prompt: "What may you do if you cannot confirm the spelling of a speaker's name?",
            options: [
              "Omit their contribution from the notes entirely",
              "Use your best guess and flag it with a question mark for the editor",
              "Describe them generally, for example as 'a resident'",
              "Record the contribution but attribute it to the chair instead",
            ],
            correctIndex: 2,
            explanation:
              "The Field Guide offers this explicitly alongside approaching someone afterwards. It lets you record what was said accurately without pursuing someone who did not seek attention.",
            sourceLessonSlug: "civdoc-notetaking-two",
          },
          {
            prompt: "What note-taking method does the Field Guide permit?",
            options: [
              "Only full sentences, so notes are legible without revision",
              "Whatever works for you: abbreviate, use shorthand, or draw",
              "Only typed notes, so they can be searched afterwards",
              "Only verbatim transcription, checked against a recording",
            ],
            correctIndex: 1,
            explanation:
              "The constraint is the output rather than the method: notes must be organized and revised for readers afterwards, but how you capture them in the room is yours.",
            sourceLessonSlug: "civdoc-notetaking-one",
          },
          {
            prompt: "Which habit does the course call the single most useful in the six steps?",
            options: [
              "Recording audio and jotting timestamps for anything to double-check",
              "Counting the attendees before the meeting is called to order",
              "Sitting in the front row to hear the officials clearly",
              "Writing the notes in full sentences during the meeting",
            ],
            correctIndex: 0,
            explanation:
              "It lets you verify a half-heard figure or quotation later rather than guessing, which is what makes concise in-room notes safe to take.",
            sourceLessonSlug: "civdoc-notetaking-one",
          },
          {
            prompt: "What does an attendee count, excluding officials, tell a reader?",
            options: [
              "Whether the body met its legal quorum requirement",
              "How long the meeting was likely to run",
              "Whether anyone cared, since a packed room is itself information",
              "How many people are eligible to speak in public comment",
            ],
            correctIndex: 2,
            explanation:
              "Each item in the capture list answers a question a reader would otherwise have. Quorum is about the officials present, which is a separate thing.",
            sourceLessonSlug: "civdoc-notetaking-two",
          },
          {
            prompt: "What is the status of a paraphrase placed inside quotation marks?",
            options: [
              "Acceptable if the meaning is preserved accurately",
              "Acceptable when the recording is unclear at that moment",
              "Preferred, since it improves readability of long remarks",
              "An error, and the kind that damages trust in everything else",
            ],
            correctIndex: 3,
            explanation:
              "If you quote, quote exactly and use your recording and timestamp to check it. Otherwise describe what was said without quotation marks.",
            sourceLessonSlug: "civdoc-notetaking-two",
          },
          {
            prompt: "How should you answer if someone at a meeting asks who you are?",
            options: [
              "Say plainly that you are documenting the meeting for the public record",
              "Decline to answer, since the public need give no account of itself",
              "State that you are a member of the press covering the body",
              "Refer them to the chair, who has been notified in advance",
            ],
            correctIndex: 0,
            explanation:
              "Name the program too if you are on assignment. There is nothing to be evasive about, and evasiveness creates suspicion that accuracy does not deserve.",
            sourceLessonSlug: "civdoc-behaviour",
          },
        ],
      },
    },

    // ══════════════ MODULE 4 · CAPTURE AND AFTER ══════════════
    {
      slug: "civdoc-capture",
      title: "13 · Audio, photography, and live reporting",
      section: "Module 4 · Capture and after",
      recallContent: [
        {
          prompt: "State the Field Guide's governing standard for notes, in your own words.",
          answer:
            "Someone who did not attend the meeting should be able to understand what happened from your notes. It is the test for whether a note is finished, whether a detail belongs, and whether an abbreviation is acceptable.",
        },
      ],
      body: `Three capture skills, each with its own purpose and its own restraint. The Field Guide notes that not every local program offers every assignment type, so check yours.

**Audio.** Its purpose is **verification, not transcription.** You record so you can check a figure, confirm a quotation, and settle what was actually said. That is why the timestamp habit from Lesson 10 matters: a three-hour recording you have to scrub through is much less useful than four noted timestamps.

Practically: sit where the microphone will hear the speakers rather than the air conditioning, display the device (Lesson 9), start it before the gavel, and do not stop it during recesses if you are still in the room and the meeting has not adjourned.

**Photography.** Its purpose is **evidence and character.** A photograph of a packed room, a queue at the comment microphone, or a projected slide with a number on it does work that prose cannot.

The Field Guide recommends taking photos and says you may move about the room to get them. The restraints are ordinary courtesy plus judgment: **do not block anyone's view**, move between items rather than during a vote, and think before photographing a private citizen closely. Officials at a public meeting are doing public business. **A resident who came to complain about their water bill did not choose to be photographed**, and the fact that a photograph is lawful does not make it necessary.

A useful and underused shot: **the agenda, the room, and any projected slide carrying figures.** Those three make your notes verifiable later.

**Live reporting**, where a program runs it, means publishing as the meeting happens, usually as short posts. It is a different discipline from note-taking and it has one hard rule: **you cannot revise what you have already published**, at least not invisibly.

So live reporting demands more caution, not less:
- **Post outcomes, not predictions.** "The board voted 5-2 to approve" is safe. "It looks like this will pass" is not.
- **Attribute everything as you go.** Who said it, in what capacity.
- **Do not characterise the mood.** "Several residents spoke against" is a fact. "The room was furious" is an interpretation, and it is exactly the kind Lesson 17 warns about.
- **Correct visibly.** If you get something wrong, post the correction rather than quietly deleting, which is both more honest and better practice.

**And live reporting does not replace the notes.** It is a different product with a different audience, produced under time pressure, and the considered record still has to be written afterwards.

:::reveal Why does live reporting require MORE caution than writing notes afterwards, when both describe the same meeting? ||| Because you cannot revise what has already been published, at least not invisibly, so an error is out in public before you can check it against your recording. Notes written afterwards pass through the review-and-edit step where a half-heard figure gets verified; a live post skips that entirely. The practical consequence is to post outcomes rather than predictions, attribute as you go, avoid characterising the mood, and correct visibly rather than deleting quietly.

## Sources
- City Bureau. (n.d.). *Audio recording tips*. Documenters Field Guide. https://fieldguide.documenters.org/
- City Bureau. (n.d.). *Photography tips*. Documenters Field Guide.
- City Bureau. (n.d.). *Live reporting assignment tips*. Documenters Field Guide.`,
    },
    {
      slug: "civdoc-interviewing",
      title: "14 · Talking to people after the gavel",
      section: "Module 4 · Capture and after",
      body: `Interviewing is a separate assignment type in some programs and a small necessary skill in all of them, because the commonest reason to approach anyone is the one the Field Guide names: **to check the spelling of a name.**

**The minimum interaction, and it is most of what you will do.** Approach after the meeting, say who you are and what you are doing, and ask them to spell their name. That is it. It takes twenty seconds and it prevents the single most common error in published notes.

**If you want more than a name**

- **Say what it is for**, before they answer anything. "I am documenting this meeting for the public record, and your comment will be in the notes."
- **Ask open questions.** "What brought you here tonight?" gets you something; "Are you angry about the rezoning?" gets you your own words back.
- **Ask why.** The Field Guide's capture list asks for the main concerns of attendees **and why those concerns were raised**. The why is what makes a concern legible to a reader who was not there.
- **Read it back.** If you are going to quote them, read the quotation back. People will correct you, and they are correcting your record.

**What not to do**

- **Do not press someone who declines.** They owe you nothing. A resident at a public meeting is not a public figure, and the fact that they spoke on the record does not oblige them to speak to you.
- **Do not offer to keep something off the record** unless you are certain what that means in your program and will honor it exactly.
- **Do not argue**, even when you know something they have said is factually wrong. You are recording what they said, not adjudicating it.

**Officials are a different case.** They are doing public business and may be asked to account for it. Even so, a documenter asking an official a question is close to the boundary of the role: **you are recording the meeting rather than conducting an investigation.** Asking a chair to clarify what a motion did is squarely inside the job. Asking them to defend a decision is reporting, which Lesson 17 addresses.

**The consent question with vulnerable speakers.** Public comment periods draw people in distress: about evictions, about a relative in custody, about their water being shut off. They spoke in public and their words are on the record. **They still did not come to be profiled.** Recording what was said in the meeting is documentation. Following them out to build a story about their situation is something else, and if you want to do it, ask properly and accept a refusal.

:::reveal A resident describes losing their housing during public comment. You would like to speak to them afterwards. What distinguishes documentation from something else here? ||| Recording what they said in the meeting is documentation: they spoke in public, on the record, at a public body, and that is part of what happened. Following them out to build a fuller account of their situation is reporting on a person who came to address a board rather than to be profiled. It is not forbidden, and it requires asking properly, saying exactly what it is for, and accepting a refusal without pressing. The distinction is whether you are recording the meeting or pursuing a story about a private individual.

## Sources
- City Bureau. (n.d.). *Interviewing tips*. Documenters Field Guide. https://fieldguide.documenters.org/
- City Bureau. (2024, October 11). *Note-taking assignment tips*. Documenters Field Guide.`,
    },
    {
      slug: "civdoc-revising",
      title: "15 · Revising notes before memory fades",
      section: "Module 4 · Capture and after",
      body: `The Guide's sixth step is review and edit, with one instruction that carries most of the value: **do not wait too long between writing and review, because useful details fade from memory** (City Bureau, 2024).

**Do it the same day.** Preferably within a couple of hours. What fades first is exactly what makes notes usable: which of two speakers said the thing, whether a figure was thousands or millions, what a gesture meant, which item an argument was actually about.

**The revision pass, in order**

**1. Expand your shorthand while you still know what it meant.** This is the step people skip and regret. An abbreviation obvious in the room is a puzzle in a week.

**2. Resolve everything you marked uncertain.** The question marks and brackets from Lesson 10. Use the recording and your timestamps. **Anything you cannot resolve gets said plainly rather than smoothed over**, for example "a figure of roughly 4 million, not clearly audible on the recording."

**3. Reorder into something a stranger can follow.** Usually agenda order, whatever order you captured it in. Put outcomes where they can be found rather than buried in narrative.

**4. Add the links.** The Guide recommends linking to news stories, reports, previous minutes and related government sites. This is where a reader goes next, and it costs you five minutes.

**5. Apply the standard.** Read it as someone who was not there. Where would they be confused? Where have you assumed knowledge of a person, an acronym, or a history? **Expand every acronym on first use**, because local government runs on them.

**6. Separate fact from inference, one last time.** Anything that is your conclusion rather than something that happened either goes, or is unmistakably marked as your observation. Lesson 16 is why.

**What good notes look like when finished:** agenda order, outcomes findable, names spelled right, numbers checked, acronyms expanded, uncertainty flagged rather than hidden, links out, and nothing asserted that did not happen.

**On editing by others.** In the Documenters program, notes are reviewed and edited by staff before publication (City Bureau, n.d.). That is a real safety net and it is not a reason to submit less carefully: an editor who has to reconstruct your meaning is an editor who may reconstruct it wrongly, and they were not in the room.

:::reveal Why is the revision pass done the same day rather than when you have time later in the week? ||| Because what fades first is precisely what makes notes usable: which of two speakers said something, whether a figure was thousands or millions, which item an argument actually attached to, and what your own shorthand meant. Those are unrecoverable later even with a recording, since the recording will not tell you what an abbreviation you invented in the room was for. The Field Guide's own reasoning is that useful details fade, and delay converts a fast tidy-up into a reconstruction.

## Sources
- City Bureau. (2024, October 11). *Note-taking assignment tips*. Documenters Field Guide. https://fieldguide.documenters.org/
- City Bureau. (n.d.). *Tips for revising your notes*. Documenters Field Guide.`,
    },
    {
      slug: "civdoc-what-not-to-write",
      title: "16 · Where documentation ends and reporting begins",
      section: "Module 4 · Capture and after",
      body: `${NOT_LEGAL_ADVICE}

This is the lesson that protects you, and the line it draws is the reason the role is defined so narrowly.

**Documentation records what happened. Reporting asserts what it means.** Both are legitimate, and only one of them is your assignment.

| Documentation | Reporting |
| --- | --- |
| "The motion passed 5-2." | "The board pushed the measure through." |
| "Three residents spoke against the rezoning." | "The community is opposed." |
| "The director said the shortfall was 4 million dollars." | "The department overspent by 4 million dollars." |
| "The chair did not call on two people with hands raised." | "The chair ignored dissenting residents." |

**The right-hand column is not worse writing. It is a different claim**, requiring evidence a documenter has not gathered, and it is where legal exposure begins.

**Defamation, briefly and carefully.** Defamation is a statement that harms someone's reputation. Written, it is libel; spoken, slander. It is a tort rather than a crime, meaning someone can sue. **To establish it, an accuser must generally show a statement about them, published to a third party, that was false, unprivileged, and damaged their reputation.** For public figures there is a higher bar: showing the publisher knew it was false or did not care whether it was true (City Bureau, n.d.).

The Guide adds the point that makes this practical rather than abstract: **if you put something defamatory in your notes, both you and your local Documenters site could be exposed to a lawsuit.**

**The fair report privilege, which is your protection.** As long as you are covering an official proceeding and your report is **substantially accurate**, published notes are usually protected by your state's interpretation of the fair report privilege (City Bureau, n.d.).

**Read the condition carefully, because it contains an instruction.** The Guide warns against **omitting important information** in your notes, because the privilege depends on the report meeting your state's standard for fairness and accuracy. So a note that records an accusation made at a meeting **but omits the response to it** is not just unbalanced; it may fall outside the protection that would otherwise cover you.

**Which produces the single most useful working rule in this course:** record the accusation AND the answer. If someone is accused of something at a public meeting and denies it, both belong in your notes. **Fairness here is not politeness. It is the mechanism of your legal protection.**

**Three practical habits**

1. **Attribute everything.** "The director said" costs three words and moves you from asserting to reporting that someone asserted.
2. **Prefer the specific to the summary.** "Two of eleven speakers supported it" cannot be wrong in the way "most people opposed it" can.
3. **When you are unsure whether something is fact or inference, it is inference.** Cut it or mark it.

:::reveal An official is accused of misconduct during public comment, and denies it from the dais. You are short on space. Why can you not simply record the accusation? ||| Because the fair report privilege protects a substantially accurate report of an official proceeding, and the Field Guide specifically warns against omitting important information for exactly this reason. An accusation recorded without the response may fail the fairness standard your state applies, which is the protection you were relying on. So recording both is not a courtesy to the official: it is the mechanism that shields you and your local site from a defamation claim, and it is also simply what happened.

## Sources
- City Bureau. (n.d.). *Know your rights: Open meetings laws* (last updated October 11, 2024). Documenters Field Guide. https://fieldguide.documenters.org/
- Reporters Committee for Freedom of the Press. (n.d.). *First amendment handbook*. https://www.rcfp.org/first-amendment-handbook/`,
    },
    {
      slug: "civdoc-ai-usage",
      title: "17 · AI, and what you are actually being paid for",
      section: "Module 4 · Capture and after",
      body: `The Documenters AI Usage Guidelines were last updated **April 2026**, which makes them among the more current pieces of thinking on this in civic journalism. They are worth studying as reasoning rather than memorizing as rules (City Bureau, 2026).

**The three rules, in brief**

1. **Generative AI may not take the place of your presence or perspective.** You must witness every meeting you are assigned, in person or remotely. Submitting an AI-generated transcription or summary as your assignment is not acceptable, and citing an AI summary as your source is not acceptable.
2. **Permitted uses are set out in their FAQs**, and if a specific case is unclear, ask program staff.
3. **Any AI usage must be disclosed on submission.** Their example wording: "AI was used in this assignment to..."

**Where the line falls, from their own FAQs**

| Use | Their answer |
| --- | --- |
| Transcription tools to refresh memory, clarify what you missed, or check accuracy | **Yes**, and they encourage it, with cross-checking against other reliable sources. They recommend submitting the transcription for transparency |
| Completing an assignment only from a transcript, without attending | **No.** Transcripts contain mistakes, and your witnessing of conversation, behavior and tone is an essential input |
| Submitting an AI summary as your notes | **No** |
| Submitting AI-identified themes in place of your takeaways | **No** |
| Grammar checkers that flag errors and suggest fixes | **Fine** |
| Generative AI for polish | **Discouraged**, and permitted only with disclosure, preserved voice, and full agreement with the output. Local sites may be stricter |

**The sentence that explains all of it.** Asked why AI cannot supply your takeaways, the guidance says your perspective and synthesis as a witness and community member is **what you are engaged and compensated for**, and adds that identifying what matters to you and your community is part of your role, not something to outsource (City Bureau, 2026).

**That is the whole principle, and it is worth generalising.** The question is never whether a tool was used. It is **whether the thing being paid for was actually done.** A transcript can tell you what words were said. It cannot tell you that the room went quiet, that the chair looked at the clerk before answering, or that the third speaker was the only one who mentioned the thing everyone else avoided. **You were hired to be there.**

**Their stance on polish is unusual and worth noticing.** They discourage generative AI for improving writing, with a striking reason: "Your voice and your takeaways are much more important than polish. We don't look for perfect writing!" And the test if you use it anyway: if the output no longer sounds like you, **or the content has materially changed, do not submit it** (City Bureau, 2026).

**The practical disclosure habit.** If you use a transcription tool, say so and attach the transcript. One line, at submission, naming what you used and for what. It costs nothing and it is the difference between a tool and a secret.

:::reveal The AI guidance permits transcription tools but forbids working only from a transcript. Reconcile those, using their reasoning. ||| A transcript is a record of words, and it is a useful check against your own notes, which is why it is encouraged and why they suggest submitting it. What it cannot record is the witnessing: the tone, the behavior, what the room did, what was conspicuously avoided, which of several items the people present actually cared about. Their reasoning is that your perspective and synthesis as a witness and community member is what you are engaged and compensated for, so a transcript can verify your account but can never substitute for having been there.

## Sources
- City Bureau. (2026, April 1). *AI usage guidelines*. Documenters Field Guide. https://fieldguide.documenters.org/`,
    },
    {
      slug: "civdoc-quiz-3",
      title: "18 · Knowledge check: capture and after",
      section: "Module 4 · Capture and after",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the purpose of recording audio at a meeting?",
            options: [
              "Verification: checking a figure or confirming a quotation",
              "Transcription: producing a full record of everything said",
              "Evidence that you attended the meeting as assigned",
              "Replacing note-taking so you can watch the room instead",
            ],
            correctIndex: 0,
            explanation:
              "Which is why noting timestamps matters. A three-hour recording you must scrub through is far less useful than four noted moments to check.",
            sourceLessonSlug: "civdoc-capture",
          },
          {
            prompt: "Which statement belongs in documentation rather than reporting?",
            options: [
              "The board pushed the measure through despite objections",
              "The community is clearly opposed to the rezoning proposal",
              "The chair ignored residents who wanted to speak against it",
              "Three residents spoke against the rezoning; the motion passed 5-2",
            ],
            correctIndex: 3,
            explanation:
              "The others assert what things mean, which requires evidence a documenter has not gathered, and that is where legal exposure begins.",
            sourceLessonSlug: "civdoc-what-not-to-write",
          },
          {
            prompt: "What does the fair report privilege generally protect?",
            options: [
              "A substantially accurate report of an official proceeding",
              "Any statement made by an elected official at a public meeting",
              "Notes published by a credentialed member of the press only",
              "Opinions clearly labeled as the writer's own conclusions",
            ],
            correctIndex: 0,
            explanation:
              "It is the protection that covers published notes, and its condition is accuracy and fairness, which is why omitting important information can put you outside it.",
            sourceLessonSlug: "civdoc-what-not-to-write",
          },
          {
            prompt: "An accusation is made at a meeting and denied. Why must your notes record both?",
            options: [
              "Because the accused official can demand a correction otherwise",
              "Because omitting the response may put you outside the fair report privilege",
              "Because public comment must always be balanced with official response",
              "Because program staff will reject notes containing accusations",
            ],
            correctIndex: 1,
            explanation:
              "Fairness here is the mechanism of your legal protection rather than a courtesy, and the Field Guide warns specifically against omitting important information.",
            sourceLessonSlug: "civdoc-what-not-to-write",
          },
          {
            prompt: "Who can be exposed if defamatory material appears in your notes?",
            options: [
              "Only the person who originally made the statement at the meeting",
              "Only the publishing organization, which holds editorial responsibility",
              "Nobody, since notes of a public meeting are automatically privileged",
              "Both you and your local Documenters site",
            ],
            correctIndex: 3,
            explanation:
              "Defamation is a tort, so someone can sue. That shared exposure is why the documentation-versus-reporting line is drawn where it is.",
            sourceLessonSlug: "civdoc-what-not-to-write",
          },
          {
            prompt: "Under the AI guidelines, may you complete an assignment from a transcript alone?",
            options: [
              "No; you must witness the meeting in person or remotely",
              "Yes, provided the transcript is accurate and disclosed",
              "Yes, if you were unable to attend for a legitimate reason",
              "Only for meetings that were officially livestreamed",
            ],
            correctIndex: 0,
            explanation:
              "Transcripts contain mistakes, and your witnessing of conversation, behavior and tone is an essential input. Transcription tools are encouraged as a check on your notes, not a substitute for attending.",
            sourceLessonSlug: "civdoc-ai-usage",
          },
          {
            prompt: "What reason do the AI guidelines give for not outsourcing your takeaways?",
            options: [
              "AI summaries are frequently inaccurate about numbers and votes",
              "Program staff cannot verify AI-generated content before publication",
              "Your perspective and synthesis is what you are engaged and compensated for",
              "Publishing AI content would breach the program's funding conditions",
            ],
            correctIndex: 2,
            explanation:
              "The guidance adds that identifying what matters to you and your community is part of the role rather than something to outsource. The question is never whether a tool was used, but whether the thing being paid for was done.",
            sourceLessonSlug: "civdoc-ai-usage",
          },
          {
            prompt: "What is the guidelines' test if you do use generative AI for polish?",
            options: [
              "If it no longer sounds like you, or the content changed, do not submit",
              "If it saves more than an hour, the use is justified",
              "If the meaning is preserved, disclosure is not required",
              "If staff have pre-approved the tool for your local site",
            ],
            correctIndex: 0,
            explanation:
              "Disclosure is required regardless, voice and perspective must be preserved, and local sites may be stricter. They discourage it, noting they do not look for perfect writing.",
            sourceLessonSlug: "civdoc-ai-usage",
          },
          {
            prompt: "Why should the revision pass happen the same day?",
            options: [
              "Program deadlines usually require submission within hours",
              "Recordings become harder to retrieve after twenty-four hours",
              "Editors are only available to review notes on the day of the meeting",
              "Details fade, including what your own shorthand meant",
            ],
            correctIndex: 3,
            explanation:
              "Which of two speakers said something, whether a figure was thousands or millions, and what an abbreviation stood for are unrecoverable later, and a recording will not tell you what your own shorthand meant.",
            sourceLessonSlug: "civdoc-revising",
          },
          {
            prompt: "What is the one rule that makes live reporting different from note-taking?",
            options: [
              "You cannot revise what has already been published, at least not invisibly",
              "You may only publish material that was formally voted on",
              "You must obtain the chair's permission before posting",
              "You are required to publish a correction within one hour",
            ],
            correctIndex: 0,
            explanation:
              "So an error is public before it can be checked against a recording. The consequence is to post outcomes rather than predictions, attribute as you go, and correct visibly rather than deleting quietly.",
            sourceLessonSlug: "civdoc-capture",
          },
        ],
      },
    },

    // ══════════════ MODULE 5 · CLOSE ══════════════
    {
      slug: "civdoc-capstone",
      title: "19 · Capstone: document a real meeting",
      section: "Module 5 · Close",
      lessonType: "assignment",
      body: `Attend one real public meeting and produce notes to the standard. This cannot be done from reading, and it is the whole point of the course.

**Attending remotely counts.** Most bodies now livestream or post recordings, and documenting a livestream is a legitimate way to complete this. Say which you did.

**What to submit.**

**1. Your pre-research**, as a short pre-brief: which body, when, the two or three items you expected to matter, the names you would need, and the terms you looked up beforehand.

**2. The jurisdiction facts** you established: your state's open-meetings law by name, its definition of a meeting, and one exception under which a session may be closed.

**3. The notes themselves**, revised, in agenda order. Outcomes findable. Names spelled correctly. Numbers checked. Acronyms expanded on first use. Uncertainty flagged plainly rather than smoothed over. Links out where useful.

**4. Your capture log.** What you recorded, whether you photographed anything, and any timestamps you noted for checking.

**5. The fact-versus-inference check.** Find one sentence in your own draft that crossed from documentation into reporting, and show both versions. **Everyone writes at least one.** If you genuinely cannot find one, quote the sentence that came closest and say why it stayed on the right side.

**6. Your AI disclosure**, in one line, whether or not you used any. If you used a transcription tool, say so and attach the transcript. If you used nothing, say that.

**7. The standard, applied.** Give your notes to somebody who was not there and did not attend. Ask them one question: **what happened at this meeting?** Record what they say. Where they were confused is your revision list.

**What a strong submission looks like.** Outcomes unmistakable, one honest fact-versus-inference correction, uncertainty flagged rather than hidden, and a reader who could answer the question. **Notes that admit "the figure was not clearly audible" score higher than notes that quietly guess**, because the first is usable and the second is a trap for whoever cites it later.

**If you want to do this for money**, and there is a program in your city, apply at documenters.org. In Indianapolis that is Mirror Indy. This course is not affiliated with them and cannot put you forward; what it can do is make sure you arrive knowing the work.

${NOT_LEGAL_ADVICE}`,
    },
    {
      slug: "civdoc-review-and-sources",
      title: "20 · Cumulative review and sources",
      section: "Module 5 · Close",
      body: `**The standard, above everything else:** someone who did not attend should be able to understand what happened from your notes.

**The role is defined by restraint.** Record what happened. Do not investigate, interpret, or find the arc. That is the opposite discipline from the rest of this series, and holding both makes you better at each.

**Two definitions decide what you may attend:** what a public body is, and what counts as a meeting. They differ by state, and the difference is real: a majority of a quorum in Illinois, a full quorum in Michigan. All fifty states require meetings open unless an exception is shown, advance notice, and published minutes.

**Pre-research is what lets you triage.** The agenda, the packet, the last minutes, the members, prior coverage. Produce a pre-brief, and do not follow it past the evidence.

**In the room you are a member of the public.** You may attend, take notes and usually record, subject to reasonable rules. If asked to leave: comply, ask why, and write the answer down.

**Recording is protected and qualified.** Display the device so it cannot be surreptitious, and do not record conversations outside the meeting space. Consent rules vary and the all-party rule is not universal.

**The six steps:** pre-research, create a system, listen and learn, make connections, use your time efficiently, review and edit. Note however works for you; the constraint is the output.

**When it is packed, protect outcomes first**, then numbers, then public comment, then the unexpected. Link to the packet instead of retyping it.

**Revise the same day.** Expand shorthand, resolve what you marked uncertain, reorder, add links, apply the standard, separate fact from inference.

**Documentation records; reporting asserts.** Attribute everything. Prefer the specific to the summary. **Record the accusation and the answer**, because the fair report privilege depends on substantial accuracy and omission can cost you it.

**On AI: the question is never whether a tool was used, but whether the thing being paid for was done.** Transcripts check your notes; they cannot witness for you. Disclose what you used.

**Where to go next, and it is not another course.** This course taught a practice that belongs to **City Bureau**, whose **Documenters** programme built it, and whose **Field Guide** is free to read in full at [fieldguide.documenters.org](https://fieldguide.documenters.org/). If there is a programme in your city, apply at [documenters.org](https://documenters.org); in Indianapolis it is run by **[Mirror Indy](https://indianapolis-in.documenters.org/)**. They will train you further, they pay for the work, and what you produce goes into a public record that residents, reporters and researchers use.

**The last thing worth saying.** The gap this course opened with is real: rooms where decisions get made and nobody is watching. It does not close because you finished a course. It closes when somebody sits in the room and writes down what happened.

:::reveal Without looking back, state the governing standard and the working rule that protects you legally. ||| The standard: someone who did not attend the meeting should be able to understand what happened based on your notes. The protective rule: record the accusation AND the answer. The fair report privilege covers a substantially accurate report of an official proceeding, and omitting important information, such as a denial, can put you outside the protection you were relying on, exposing both you and the site that publishes you.

## Sources
- City Bureau. (n.d.). *Documenters field guide*. https://fieldguide.documenters.org/
- City Bureau. (n.d.). *Before your assignment*. Documenters Field Guide.
- City Bureau. (n.d.). *Behavior at public meetings*. Documenters Field Guide.
- City Bureau. (n.d.). *Interviewing tips*. Documenters Field Guide.
- City Bureau. (n.d.). *Photography tips*. Documenters Field Guide.
- City Bureau. (n.d.). *Audio recording tips*. Documenters Field Guide.
- City Bureau. (n.d.). *Live reporting assignment tips*. Documenters Field Guide.
- City Bureau. (n.d.). *Tips for revising your notes*. Documenters Field Guide.
- City Bureau. (n.d.). *Know your rights: Open meetings laws* (last updated October 11, 2024). Documenters Field Guide.
- City Bureau. (2024, October 11). *Note-taking assignment tips*. Documenters Field Guide.
- City Bureau. (2026, April 1). *AI usage guidelines*. Documenters Field Guide.
- Documenters. (n.d.). *Indianapolis Documenters*, operated by Mirror Indy. https://indianapolis-in.documenters.org/
- Reporters Committee for Freedom of the Press. (n.d.). *First amendment handbook*. https://www.rcfp.org/first-amendment-handbook/
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
  ],
};
