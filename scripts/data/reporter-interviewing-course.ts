import type { AuthoredCourse } from "./authored-course";

// REPORT-03 · Interviewing People Who Did Not Seek This (plans/68).
//
// The gap, stated exactly. oral-history teaches the life-review interview, where the subject
// volunteered and the frame is a whole life. documentary teaches depth interviewing across a long
// relationship. Neither teaches talking to a sixteen-year-old about something hard, on deadline,
// with a guardian in the room, when nobody involved chose to be in a story.
//
// LEGAL CARE. This course is explicit that interviewing minors is governed mostly by EDITORIAL
// policy and by state-specific law, not by one national rule, and it never asserts a uniform legal
// requirement. Where a rule genuinely varies (recording consent, access to school property, what a
// guardian's permission does and does not settle) the course says it varies and sends the reader to
// their own state and their own outlet's policy. FERPA is described accurately: it binds what
// SCHOOLS may release, not what a student may choose to say to a reporter.
//
// The trauma material is sourced to SAMHSA's six principles of a trauma-informed approach and to the
// Dart Center for Journalism and Trauma, and it is written as interviewing craft rather than as
// clinical guidance. A reporter is not a clinician, and the course says so repeatedly.
//
// No invented subjects. Every example is a described situation, never a named person with quoted
// words, which is the same discipline REPORT-02 applies to the Indiana Girl Report.
export const REPORTER_INTERVIEWING_COURSE: AuthoredCourse = {
  title: "Reporter 03: Interviewing People Who Did Not Seek This",
  description:
    "Talking to someone who did not choose to be in a story: what informed consent means when you are not a researcher, what trauma does to an account and why that is not lying, giving a source control over pace and order, minors and guardians and who is actually consenting, what you may promise, when to stop, and what you owe after publication. Written for reporters, not clinicians.",
  lessons: [
    // ── Section 1 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "who-did-not-seek-this",
      title: "1 · Who did not seek this, and what it changes",
      section: "Section 1 · Before the interview",
      body: `Most interview training assumes a subject who wants to be interviewed: an official, an expert, an advocate, a person with a message. This course is about everyone else, and almost everything changes.

**The category, defined by what the person did not do.** They did not seek coverage, they are not being paid to talk to you, they have no communications staff, they have no experience of what publication feels like, and they usually cannot predict what will happen to them afterward. That last one is the important one, because a person who cannot forecast the consequence of speaking cannot really weigh it, and weighing it is what consent is.

**Three asymmetries you are working inside.** You know how journalism works and they do not. You will be fine after the story and they may not be. And you are the one who decides what goes in, which means the power to shape how they appear sits entirely on your side of the table. None of that is a reason not to do the interview. All of it is a reason the procedure has to be different.

**Why the existing catalog does not cover this.** Oral history teaches the life-review interview, where somebody volunteered and the subject is their whole life. Documentary teaches depth across a long relationship, with consent renewed over months. Neither is a Tuesday afternoon with someone whose house flooded, on a deadline, when nobody chose any of it.

**The professional standard, and what it names.** The Society of Professional Journalists asks journalists to minimize harm, to treat sources as human beings deserving of respect, to show compassion for those who may be affected by coverage, and to use heightened sensitivity with juveniles and with sources who are inexperienced or unable to give consent (Society of Professional Journalists, 2014). Notice that inexperience is named alongside age. That is this course's whole population.

**And what it does not mean.** Minimizing harm is not the same as publishing nothing that hurts anyone, and it is not the same as letting a source approve coverage. Accurate reporting harms people routinely and that is the job. What the standard governs is how you conduct yourself, what you take, and what you do with it, not whether you publish.

**One question that reorganizes the whole interview.** Ask yourself, before you dial: what does this person get out of talking to me, and what could it cost them? If the honest answer to the first is nothing and to the second is a lot, you are not forbidden from calling. You are obliged to say both of those things out loud to them before they start.

:::reveal What is the defining feature of a source who did not seek this, and why does it bear on consent? ||| They cannot predict what happens to them after publication. A person who cannot forecast the consequence of speaking cannot really weigh it, and weighing it is what consent is.

:::reveal Name the three asymmetries in an interview with an inexperienced source. ||| You understand journalism and they do not, you will be fine afterward and they may not be, and you decide what goes in and how they appear.

:::reveal Does minimizing harm mean not publishing what hurts someone? ||| No. Accurate reporting harms people routinely and that is the job. The standard governs how you conduct yourself, what you take, and what you do with it.

## Vocabulary
- **Unsought source**: someone who did not seek coverage, has no media experience, and cannot forecast what publication will do to them.
- **Asymmetry**: the structural imbalance in knowledge, consequence, and control between reporter and inexperienced source.
- **Minimize harm**: the professional standard governing conduct, collection, and use, not a rule against publishing difficult material.
- **The cost question**: what the source gains from talking and what it may cost them, answered out loud before they begin.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "informed-consent",
      title: "2 · Informed consent, in the reporter's version",
      section: "Section 1 · Before the interview",
      body: `A reporter is not a researcher and has no ethics board, so there is no form and no approval. There is still a standard, and it is met by saying five things before the interview rather than after it.

**One: who you are and who you work for.** Name, outlet, and that you are working on a story. Every time, including when you think it is obvious, and including when you have already said it at a public gathering.

**Two: what the story is about.** Not your working thesis, which may change, but the subject and the general shape. A source who learns from the published piece that the story was about something else was not told what they were agreeing to.

**Three: what will happen to what they say.** That it may be quoted with their name, that it may appear online permanently and be findable by search, that you cannot remove it later, and that other outlets may pick it up. The permanence is the part inexperienced sources most reliably do not know, and it is the part that most often changes their answer.

**Four: what you cannot control.** Headlines, photographs, the piece's placement, what a broadcast producer cuts, what strangers say in response. Saying this is not a disclaimer to protect you; it is information the person needs to make the decision they are making.

**Five: what they can still choose.** Whether to be named, whether to answer any given question, whether to stop, and whether to be contacted again. Listing the choices makes them real, because a person who does not know they may decline a question will usually answer it.

**How long that takes.** Under two minutes, and it can be done in plain conversation rather than recited. Do it before recording starts, and note in your file that you did it and what you said, which is the record you will want if the conversation is ever disputed.

**Consent is a point in time, and reporting moves.** If the story changes materially, especially if it turns toward the source's own conduct, tell them and re-ask. That is not a courtesy: an agreement to talk about one subject is not an agreement to talk about a different one, and the second conversation is often where the real interview finally happens.

**What consent never covers.** It does not make you accurate, it does not make publication wise, and it does not transfer responsibility for harm to the source. A person agreeing to something you should not have asked for does not make the asking right.

:::reveal Which of the five disclosures do inexperienced sources most reliably not know? ||| Permanence. That the piece may live online indefinitely, be findable by search, cannot be removed later, and may be picked up elsewhere.

:::reveal Why does listing what a source can still choose matter? ||| Because a person who does not know they may decline a question will usually answer it. Naming the choices is what makes them available.

:::reveal When does consent have to be re-asked? ||| When the story changes materially, especially when it turns toward the source's own conduct. Agreeing to talk about one subject is not agreeing to talk about a different one.

## Vocabulary
- **Informed consent, reporter version**: five disclosures made before an interview, covering identity, subject, use, limits, and remaining choices.
- **Permanence**: the online durability and searchability of a published piece, which is the disclosure most often missing.
- **Re-asking**: returning for consent when the story materially changes, particularly when it turns toward the source.
- **Non-transfer**: the principle that a source's agreement does not move responsibility for harm from the reporter.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/
- Dart Center for Journalism and Trauma. (n.d.). *Resources for journalists*. Columbia Journalism School. https://dartcenter.org/`,
    },
    {
      slug: "preparation-and-risk",
      title: "3 · Preparing, and assessing what it costs them",
      section: "Section 1 · Before the interview",
      body: `Preparation for this kind of interview is different from preparation for an official. Half of it is about the subject matter and half of it is about what happens to the person after you leave.

**Know the facts before you arrive, so they do not have to teach you.** Read the filings, the incident report, the previous coverage, and whatever public record exists. Making a person narrate the basics of their own worst week because you did not do the reading is an avoidable cost, and it is the most common complaint sources make about reporters.

**Write the questions you actually need, then cut half.** An interview with an unsought source is not a fishing expedition. Decide which three things only this person can tell you, and let everything else go. The discipline protects them and it also produces a better interview, because a focused conversation goes deeper than a broad one.

**Run a risk assessment, in four questions.** Could speaking cost them a job, housing, custody, immigration status, or safety? Is there someone who would retaliate? Are they identifiable even without their name, from the detail alone? And are they, right now, in a position to make a decision, or are they in the middle of the emergency? Write the answers down.

**Identifiability is the one reporters get wrong.** Withholding a name does not anonymize somebody. A job title, a street, a number of children, and a date will identify a person to everyone who knows them, which is exactly the audience that can do them harm. If you agree to protect an identity, you have to protect the details that carry it, and you have to tell the source honestly how much protection is actually available.

**Choose the setting for them.** Their place, a quiet public place, or a phone call at a time they name. Not a newsroom, not the site of the event unless they choose it, and not in front of people whose presence they did not agree to. Ask whether they want someone with them, and treat yes as normal.

**Decide your own limits before you go.** What you will not ask, what you will not photograph, and the point at which you would end the interview. Deciding those in the moment, with a source in front of you and a deadline behind you, is how reporters end up doing things they later cannot defend.

:::reveal Why read the record before interviewing an unsought source? ||| So they do not have to narrate the basics of their own worst week because you did not do the reading. It is the most common complaint sources make about reporters.

:::reveal What are the four risk-assessment questions? ||| Could speaking cost them job, housing, custody, status, or safety. Is there someone who would retaliate. Are they identifiable from detail alone. And are they in a position to decide right now, or in the middle of the emergency.

:::reveal Why is withholding a name not the same as protecting an identity? ||| Because a job title, a street, a number of children, and a date identify a person to everyone who knows them, which is precisely the audience that can harm them.

## Vocabulary
- **Risk assessment**: four written questions about what speaking could cost a source, run before the interview rather than after.
- **Identifiability**: whether the detail in a piece identifies a person to the people around them, independently of their name.
- **Setting choice**: letting the source pick where and when, including whether someone accompanies them.
- **Pre-set limits**: the questions, images, and endpoints a reporter decides on before the interview, not during it.

## Sources
- Dart Center for Journalism and Trauma. (n.d.). *Resources for journalists*. Columbia Journalism School. https://dartcenter.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-before-the-interview",
      title: "4 · Knowledge check: before the interview",
      section: "Section 1 · Before the interview",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What defines a source who did not seek this?",
            options: [
              "They cannot predict what happens after publication",
              "They have declined to speak to reporters from other outlets first",
              "They are unwilling to be identified by name in any published piece",
              "They are speaking about somebody else rather than about themselves",
            ],
            correctIndex: 0,
            explanation:
              "A person who cannot forecast the consequence of speaking cannot really weigh it, and weighing it is what consent is.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "Which of these is one of the three asymmetries the lesson names?",
            options: [
              "You will be fine after the story and they may not",
              "They have more information about the events than you do",
              "They can withdraw at any point and you cannot",
              "They control the timing of publication and you do not",
            ],
            correctIndex: 0,
            explanation:
              "Along with knowing how journalism works when they do not, and deciding what goes in and how they appear.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "Why does the existing catalog not already cover this kind of interview?",
            options: [
              "Oral history and documentary both assume someone who volunteered",
              "Because interviewing craft is treated as a specialization rather than a core skill",
              "Because the catalog's storytelling courses focus on writing rather than reporting",
              "Because trauma-informed practice is clinical rather than journalistic",
            ],
            correctIndex: 0,
            explanation:
              "Oral history teaches the life-review interview and documentary teaches depth across a long relationship with consent renewed. Neither is a Tuesday afternoon on deadline.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "Whom does the professional standard name alongside juveniles?",
            options: [
              "Sources who are inexperienced or unable to give consent",
              "Sources who have requested anonymity in writing",
              "Sources who are employed by an institution in the story",
              "Sources who have previously been quoted inaccurately",
            ],
            correctIndex: 0,
            explanation:
              "Inexperience is named alongside age, which is exactly the population this course is about.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "What does minimizing harm NOT mean?",
            options: [
              "Publishing nothing that hurts anyone",
              "Treating sources as human beings deserving of respect",
              "Showing compassion for those affected by coverage",
              "Using heightened sensitivity with inexperienced sources",
            ],
            correctIndex: 0,
            explanation:
              "Accurate reporting harms people routinely and that is the job. The standard governs conduct, collection, and use, not whether you publish.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "What is the cost question, and when is it answered out loud?",
            options: [
              "What they gain and what it may cost them, said before they start",
              "What the outlet gains and what the reporting costs, said to an editor",
              "What the interview costs in time, agreed before scheduling",
              "What a correction would cost, considered before publication",
            ],
            correctIndex: 0,
            explanation:
              "If the honest answer is nothing gained and a lot risked, you are not forbidden from calling. You are obliged to say both things to them first.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "Why does a reporter have no consent form to fill in?",
            options: [
              "A reporter is not a researcher and has no ethics board",
              "Because consent forms are prohibited by professional codes",
              "Because a signed form would constitute copy approval",
              "Because verbal consent has the same legal weight as written",
            ],
            correctIndex: 0,
            explanation:
              "There is no form and no approval, and there is still a standard, met by saying five things before the interview.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What is the first of the five disclosures?",
            options: [
              "Who you are and who you work for",
              "What the story is about in general terms",
              "That the piece may live online permanently",
              "That they may decline any question",
            ],
            correctIndex: 0,
            explanation:
              "Every time, including when you think it is obvious and including when you already said it at a public gathering.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "How much should a reporter say about the story's subject?",
            options: [
              "The subject and the general shape, not the working thesis",
              "The full working thesis, so the source can dispute it",
              "Nothing, so the source's account is not shaped by the framing",
              "Only the headline the desk has already approved",
            ],
            correctIndex: 0,
            explanation:
              "A source who learns from the published piece that the story was about something else was not told what they were agreeing to.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "Which disclosure do inexperienced sources most reliably not know?",
            options: [
              "Permanence",
              "That the reporter works for a specific outlet",
              "That an interview may be recorded",
              "That other people are being interviewed as well",
            ],
            correctIndex: 0,
            explanation:
              "That the piece may live online indefinitely, be findable by search, cannot be removed later, and may be picked up elsewhere.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What is the fourth disclosure about?",
            options: [
              "What the reporter cannot control",
              "What the outlet's editorial standards require",
              "What the source will be paid for their time",
              "What other sources have already said",
            ],
            correctIndex: 0,
            explanation:
              "Headlines, photographs, placement, what a producer cuts, and what strangers say. It is information the person needs, not a disclaimer that protects you.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "Which four choices does the fifth disclosure name?",
            options: [
              "Whether to be named, to answer, to stop, and to be contacted again",
              "Whether to record, to meet in person, to bring a lawyer, and to see a draft",
              "Whether to speak on background, off the record, deep background, or on the record",
              "Whether to be photographed, quoted, paraphrased, or summarized",
            ],
            correctIndex: 0,
            explanation:
              "Listing the choices makes them real, because a person who does not know they may decline a question will usually answer it.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "How long do the five disclosures take?",
            options: [
              "Under two minutes",
              "About ten minutes, which is why they are usually sent in writing",
              "A full pre-interview meeting, separate from the interview itself",
              "As long as the interview, since each point must be confirmed",
            ],
            correctIndex: 0,
            explanation:
              "In plain conversation rather than recited, before recording starts, with a note in your file of what you said.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "When must consent be re-asked?",
            options: [
              "When the story changes materially",
              "Whenever more than a week passes between interview and publication",
              "Each time a new source is added to the same story",
              "Only if the source requests a further conversation",
            ],
            correctIndex: 0,
            explanation:
              "Especially when it turns toward the source's own conduct. Agreeing to talk about one subject is not agreeing to talk about a different one.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What does consent never cover?",
            options: [
              "Responsibility for harm",
              "The accuracy of the reporter's notes",
              "The right to quote the source by name",
              "The reporter's obligation to correct an error",
            ],
            correctIndex: 0,
            explanation:
              "A person agreeing to something you should not have asked for does not make the asking right.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "Why read the record before interviewing an unsought source?",
            options: [
              "So they do not have to narrate their own worst week",
              "So the interview can be conducted without a recorder",
              "So the reporter can dispute their account in real time",
              "So the piece can be drafted before the interview happens",
            ],
            correctIndex: 0,
            explanation:
              "It is the most common complaint sources make about reporters, and it is entirely avoidable.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "What does the lesson say to do with a prepared question list?",
            options: [
              "Cut half of it",
              "Send it to the source in advance for review",
              "Order it from hardest to easiest so the difficult material lands early",
              "Expand it, since an unsought source may only be available once",
            ],
            correctIndex: 0,
            explanation:
              "Decide which three things only this person can tell you. A focused conversation goes deeper than a broad one, and it costs the source less.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Which is one of the four risk-assessment questions?",
            options: [
              "Could speaking cost them housing, custody, or immigration status",
              "Would another source give the same account at lower cost",
              "Has the source spoken to any other outlet about this",
              "Does the source have legal representation available",
            ],
            correctIndex: 0,
            explanation:
              "Along with whether anyone would retaliate, whether they are identifiable from detail alone, and whether they can decide right now.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "What does the fourth risk question ask?",
            options: [
              "Whether they can decide now or are inside the emergency",
              "Whether the story can run without them if they decline",
              "Whether the outlet's lawyers have reviewed the approach",
              "Whether the reporter has covered this subject before",
            ],
            correctIndex: 0,
            explanation:
              "A person in the middle of the emergency is not in a position to weigh a decision about publication.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Why is withholding a name not the same as protecting an identity?",
            options: [
              "Detail identifies a person to everyone who knows them",
              "Because a name can be recovered from a photograph caption",
              "Because outlets are required to disclose unnamed sources on request",
              "Because a court can compel disclosure of any withheld name",
            ],
            correctIndex: 0,
            explanation:
              "A job title, a street, a number of children, and a date do it, and those people are exactly the audience that can cause harm.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "What follows from agreeing to protect an identity?",
            options: [
              "You must protect the details that carry it",
              "You must decline to publish the story if any detail is identifying",
              "You must obtain the agreement in writing before proceeding",
              "You must inform the subject of the story that a source is protected",
            ],
            correctIndex: 0,
            explanation:
              "And tell the source honestly how much protection is actually available, rather than implying more than you can deliver.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Who chooses the setting for this kind of interview?",
            options: [
              "The source",
              "The reporter, since the setting affects the quality of the recording",
              "The outlet, under its own safety policy for field reporting",
              "Whoever introduced the reporter to the source",
            ],
            correctIndex: 0,
            explanation:
              "Their place, a quiet public place, or a call at a time they name. Not a newsroom, and not in front of people whose presence they did not agree to.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "How should a reporter treat a source wanting someone with them?",
            options: [
              "As normal",
              "As a reason to reschedule, since a third party changes the account",
              "As a request to be granted only where the outlet's policy allows",
              "As grounds to conduct the interview by telephone instead",
            ],
            correctIndex: 0,
            explanation:
              "Asking whether they want someone present is part of letting them choose the setting.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "When should a reporter decide their own limits?",
            options: [
              "Before going",
              "During the interview, so the limits fit the person in front of you",
              "Afterward, when the material can be assessed against the story",
              "In consultation with the source at the start of the conversation",
            ],
            correctIndex: 0,
            explanation:
              "Deciding in the moment, with a source present and a deadline behind you, is how reporters do things they later cannot defend.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Which three limits does the lesson say to set in advance?",
            options: [
              "What you will not ask, not photograph, and when you would end it",
              "How long you will stay, what you will pay, and what you will send",
              "Which quotes you will use, which you will cut, and which you will paraphrase",
              "Who you will contact next, when you will publish, and where it will run",
            ],
            correctIndex: 0,
            explanation:
              "They are the three decisions deadline pressure most reliably corrupts.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Where does the power to shape how a source appears sit?",
            options: [
              "Entirely on the reporter's side",
              "With the editor, who makes the final selection of quotations",
              "With the source, who may decline to be quoted at all",
              "With the outlet's legal review, which approves characterizations",
            ],
            correctIndex: 0,
            explanation:
              "Which is not a reason to avoid the interview. It is a reason the procedure has to be different.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "What does a person with no communications staff and no media experience lack most?",
            options: [
              "A forecast of what publication will do to them",
              "Access to the reporter's outlet and its editors",
              "Familiarity with the events they are describing",
              "The ability to be quoted accurately",
            ],
            correctIndex: 0,
            explanation:
              "Which is the fact that makes their consent structurally different from an official's.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "What should be noted in the file after making the five disclosures?",
            options: [
              "That you made them and what you said",
              "The source's verbal confirmation, recorded on tape",
              "A signature from the source acknowledging each point",
              "The editor's approval of the disclosure language used",
            ],
            correctIndex: 0,
            explanation:
              "It is the record you will want if the conversation is ever disputed.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What often happens in the conversation after a story materially changes?",
            options: [
              "The real interview finally happens",
              "The source withdraws consent for the original material",
              "The outlet requires a signed release before proceeding",
              "The reporter must start the five disclosures over from the beginning",
            ],
            correctIndex: 0,
            explanation:
              "Which is a practical reason to re-ask rather than a purely ethical one.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What is the pre-interview risk assessment written down for?",
            options: [
              "So the answers exist before the pressure arrives",
              "So the outlet's lawyers can approve the approach",
              "So the source can review what the reporter considered",
              "So the assessment can be published alongside the story",
            ],
            correctIndex: 0,
            explanation:
              "Four questions, answered in writing, before an interview where deciding in the moment is exactly what goes wrong.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "What does the lesson say about interviewing at the site of the event?",
            options: [
              "Only if the source chooses it",
              "Always, because the setting produces stronger detail",
              "Never, because it is inherently retraumatizing",
              "Only with a photographer present to document the location",
            ],
            correctIndex: 0,
            explanation:
              "The setting belongs to the source, along with the time and whether anyone accompanies them.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Which is NOT one of the five disclosures?",
            options: [
              "How many other sources have agreed to speak",
              "Who you are and who you work for",
              "What will happen to what they say",
              "What you cannot control",
            ],
            correctIndex: 0,
            explanation:
              "The five are identity, subject, use, limits, and the choices that remain.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What is the honest framing of an interview a source gains nothing from?",
            options: [
              "Say both the gain and the cost out loud before they start",
              "Decline the interview, since an unbalanced exchange cannot be consented to",
              "Offer compensation to balance the exchange",
              "Route the request through an advocate who can advise them",
            ],
            correctIndex: 0,
            explanation:
              "You are not forbidden from calling. You are obliged to name what they get and what it may cost.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "What is the effect of a source not knowing they may decline a question?",
            options: [
              "They usually answer it",
              "They usually end the interview early",
              "They usually ask to go off the record",
              "They usually request a written question list",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the fifth disclosure lists the choices rather than assuming a source knows they exist.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What is the reporter's version of informed consent built from?",
            options: [
              "Five disclosures made before the interview",
              "A signed release reviewed by the outlet's counsel",
              "A recorded verbal agreement at the start of the interview",
              "An institutional review of the reporting plan",
            ],
            correctIndex: 0,
            explanation:
              "There is no form and no ethics board. There is a standard, and it is met by saying five things first.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "Which detail combination does the lesson give as identifying?",
            options: [
              "A job title, a street, a number of children, and a date",
              "An age, a county, a gender, and a year",
              "A first name, an employer, and a photograph",
              "An initial, a decade, and a general region",
            ],
            correctIndex: 0,
            explanation:
              "It identifies a person to everyone who knows them, which is precisely the audience capable of causing harm.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "What does the lesson say makes for a better interview as well as a kinder one?",
            options: [
              "Deciding which three things only this person can tell you",
              "Recording the conversation from the moment contact begins",
              "Preparing more questions than the interview can hold",
              "Beginning with the most difficult subject while attention is fresh",
            ],
            correctIndex: 0,
            explanation:
              "A focused conversation goes deeper than a broad one, so the discipline protects the source and improves the material.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "What kind of protection can a reporter honestly offer about identity?",
            options: [
              "As much as the details allow, stated honestly",
              "Complete anonymity, once a name is withheld",
              "Legal protection against any subsequent identification",
              "A commitment that no reader will recognize the person",
            ],
            correctIndex: 0,
            explanation:
              "Overstating it is the failure, because the source makes their decision on the basis of what you said was possible.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Why does the lesson say to make the disclosures before recording starts?",
            options: [
              "So the source decides before anything is captured",
              "Because recording a disclosure would constitute a legal agreement",
              "Because recorded disclosures cannot be corrected afterward",
              "Because recording law prohibits capturing preliminary conversation",
            ],
            correctIndex: 0,
            explanation:
              "And you note in your file that you made them and what you said, which is the record you will want later.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What is an unsought source, in one phrase?",
            options: [
              "Someone who did not choose to be in a story",
              "Someone the reporter located through a public record",
              "Someone who declined an initial interview request",
              "Someone speaking without their employer's authorization",
            ],
            correctIndex: 0,
            explanation:
              "No coverage sought, no payment, no communications staff, no media experience, and no forecast of the aftermath.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "What does the course say about a reporter's own comfort in this kind of interview?",
            options: [
              "You will be fine afterward and they may not be",
              "Both parties bear the same exposure once the piece publishes",
              "The reporter carries the greater professional risk",
              "Discomfort on both sides is a sign the interview is working",
            ],
            correctIndex: 0,
            explanation:
              "It is the second of the three asymmetries, and it is the one that most reliably escapes notice from inside a newsroom.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "Why is a working thesis the wrong thing to disclose?",
            options: [
              "It may change",
              "It would give the source grounds to demand copy approval",
              "It is confidential to the newsroom until publication",
              "It would shape the source's account before they speak",
            ],
            correctIndex: 0,
            explanation:
              "The subject and the general shape are what the source needs to know they are agreeing to.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What makes an unsought source's consent structurally weaker than an official's?",
            options: [
              "They cannot forecast the consequence",
              "They have no legal representation available to them",
              "They are usually speaking about a third party",
              "They cannot verify what the reporter tells them",
            ],
            correctIndex: 0,
            explanation:
              "An official talks to reporters as part of a job and knows what follows. That knowledge is the thing this population lacks.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "What does the lesson say about a newsroom as an interview location?",
            options: [
              "Not a newsroom",
              "Preferable, because it is neutral ground for both parties",
              "Acceptable when the source has no private space available",
              "Required by most outlets' field safety policies",
            ],
            correctIndex: 0,
            explanation:
              "Their place, a quiet public place, or a call at a time they name, because the setting is one of the few things a source can control.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "What does the lesson mean by saying consent is a point in time?",
            options: [
              "It covers what the story was when they agreed",
              "It expires after a fixed period unless renewed in writing",
              "It applies only to the specific quotations recorded that day",
              "It transfers to the outlet once the interview concludes",
            ],
            correctIndex: 0,
            explanation:
              "Reporting moves, so a material change, especially one turning toward the source, requires going back.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "Why is the risk assessment written rather than considered mentally?",
            options: [
              "A written answer survives the deadline that follows",
              "Because outlets require documentation of source risk",
              "Because the source is entitled to see the assessment",
              "Because a written record shifts liability to the newsroom",
            ],
            correctIndex: 0,
            explanation:
              "The whole point of pre-deciding is that the decision exists before the pressure that would distort it.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Which of these does the professional standard explicitly ask for?",
            options: [
              "Compassion for those who may be affected by coverage",
              "A written release from every private individual quoted",
              "Advance notice to any person named in a published piece",
              "Approval from a source before their words are edited for length",
            ],
            correctIndex: 0,
            explanation:
              "Along with treating sources as human beings deserving of respect and heightened sensitivity with juveniles and inexperienced sources.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "What is the difference between a disclaimer and the fourth disclosure?",
            options: [
              "The disclosure is information the source needs to decide",
              "The disclosure is legally required and a disclaimer is optional",
              "The disclosure is recorded and a disclaimer is written",
              "The disclosure comes after the interview and a disclaimer before",
            ],
            correctIndex: 0,
            explanation:
              "Saying what you cannot control is not there to protect the reporter, which is what would make it a disclaimer.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What does the course say a source's agreement does not do?",
            options: [
              "Make publication wise or the reporting accurate",
              "Permit the use of their name in the published piece",
              "Allow the reporter to record the conversation",
              "Establish that the interview took place",
            ],
            correctIndex: 0,
            explanation:
              "And it does not transfer responsibility for harm from the reporter to the source.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What is the most common complaint sources make about reporters, per this section?",
            options: [
              "Being made to narrate basics the reporter could have read",
              "Being quoted out of context in the published piece",
              "Being contacted repeatedly after declining to comment",
              "Being photographed without prior agreement",
            ],
            correctIndex: 0,
            explanation:
              "It is entirely avoidable by reading the filings, the incident report, and the previous coverage first.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "What kind of story does the risk assessment protect against?",
            options: [
              "One that costs a source something they did not know they were risking",
              "One that cannot be legally defended if challenged",
              "One that a competing outlet publishes first",
              "One that an editor refuses to run after the reporting is done",
            ],
            correctIndex: 0,
            explanation:
              "Job, housing, custody, immigration status, safety, retaliation, and identifiability are all things a source may not have considered.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Which population is this course about?",
            options: [
              "Everyone who did not want to be interviewed",
              "Officials, experts, advocates, and people with a message",
              "Sources who have been quoted inaccurately in the past",
              "Anyone speaking about a matter currently before a court",
            ],
            correctIndex: 0,
            explanation:
              "Most interview training assumes a subject who wants to be interviewed. Almost everything changes for everyone else.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
        ],
      },
    },
    // ── Section 2 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "what-trauma-does",
      title: "5 · What trauma does to an account, and why it is not lying",
      section: "Section 2 · Trauma-informed practice",
      body: `A reporter is not a clinician and this lesson does not make you one. What it does is describe how accounts of frightening events tend to come out, so that you can report accurately instead of mistaking a normal recollection for an unreliable witness.

**Order is the first thing to go.** People often recall a distressing event out of sequence, in fragments, with vivid sensory detail attached to some moments and almost nothing attached to others. A person who cannot tell you what time it was but can describe a sound precisely is giving you a characteristic account, not a suspicious one.

**Detail can change between tellings without either version being a lie.** Recollection is reconstructive, and peripheral detail is the part that moves. That is why an interviewer who says "but last time you said" as a challenge usually gets a source who stops talking, and why a reporter who says "I want to make sure I have this right, tell me again about that part" usually gets a better account.

**What that means for verification, which does not relax.** You still corroborate. Records, other witnesses, photographs, timestamps, and official documents all still apply, and the next course in this track is about doing it under time pressure. The change is what you conclude from a discrepancy: a wobble in peripheral detail is expected, while a change in the central event is a real signal worth pursuing carefully.

**Distinguish the account from the interpretation.** What a person experienced is theirs and is reportable as their account. What caused it, who was at fault, and what it proves are separate claims requiring separate evidence. Keeping the two apart in your notes is what lets you honor somebody's experience and still report accurately about the events.

**Retelling has a cost, and the cost is not evenly distributed.** Being asked to recount a hard event can be genuinely distressing, and it can also be something a person actively wants to do. Both are common. Which one you are dealing with is knowable only by asking, and asking is not intrusive: "Is this something you want to talk through, or would you rather I ask about the parts I actually need?"

**Two things a reporter should never say.** Any version of "I understand how you feel," which you do not, and any version of "this will help other people," which you cannot promise. Say instead what is true: that you are trying to get it right, and that you will tell them before it runs.

:::reveal Why is an account that is out of sequence, fragmentary, and vivid in places not a suspicious one? ||| Because that is how accounts of frightening events characteristically come out. Order is the first thing to go, and sensory detail attaches unevenly.

:::reveal How should a reporter treat a change in peripheral detail between two tellings? ||| As expected rather than as a lie, since recollection is reconstructive and peripheral detail moves. A change in the central event is a different signal and worth pursuing carefully.

:::reveal What two sentences does the lesson tell reporters never to use with a source? ||| That you understand how they feel, which you do not, and that the story will help other people, which you cannot promise.

## Vocabulary
- **Reconstructive recollection**: the ordinary process by which memory is rebuilt at each telling, moving peripheral detail.
- **Peripheral versus central detail**: the distinction between the parts of an account expected to vary and the parts that should not.
- **Account versus interpretation**: what a person experienced, reportable as their account, against claims about cause and fault that need separate evidence.
- **Retelling cost**: the distress that recounting can carry, which varies by person and is knowable only by asking.

## Sources
- Dart Center for Journalism and Trauma. (n.d.). *Resources for journalists*. Columbia Journalism School. https://dartcenter.org/
- Substance Abuse and Mental Health Services Administration. (2014). *SAMHSA's concept of trauma and guidance for a trauma-informed approach* (HHS Publication No. SMA 14-4884).`,
    },
    {
      slug: "six-principles",
      title: "6 · Six principles, translated into a room",
      section: "Section 2 · Trauma-informed practice",
      body: `The federal framework for trauma-informed practice names six principles: safety; trustworthiness and transparency; peer support; collaboration and mutuality; empowerment, voice, and choice; and attention to cultural, historical, and gender issues (Substance Abuse and Mental Health Services Administration, 2014). It was written for services rather than for journalism. Five of the six translate directly, and the translation is concrete.

**Safety, translated.** Physical and emotional. A setting the source chose, a door they can leave through, a time limit they know about, and no surprise participants. Tell them at the start roughly how long you expect to take, and then honor it.

**Trustworthiness and transparency, translated.** The five disclosures from lesson 2, plus doing exactly what you said you would do. Send the follow-up when you said. Call before it runs, as you promised. Predictability is the whole of trustworthiness in a relationship this short.

**Collaboration and mutuality, translated.** Ask what they think you should be asking about. It sounds soft and it is the single highest-yield question in this kind of interview, because a person who has lived the subject knows which question everyone gets wrong, and nobody has asked them.

**Empowerment, voice, and choice, translated.** They choose the pace, the order, whether to answer, and whether to stop. Say all four out loud at the start. A source who has been told they may decline a question and does so is having a better interview than one who answers everything under a pressure you did not notice you were applying.

**Cultural, historical, and gender issues, translated.** Know what the institution in your story has done to people like your source historically, because they do. Ask about pronouns and names and how they want to be described rather than assuming from documents. And be honest with yourself about what you do not know, because the alternative is a piece that is confidently wrong in a way only the affected community will see.

**Peer support, the one that does not translate.** It belongs to services, not interviews. What is available to a reporter is knowing what support exists locally and being able to name it if asked. Not referring, not counseling, not arranging: knowing.

**The boundary this course keeps repeating.** All of this is interviewing craft. You are not providing care, you are not assessing anyone's condition, and if someone tells you they are in danger, the answer is not a follow-up question. It is to stop and give them the number of somebody whose job it is.

:::reveal Which of the six trauma-informed principles does the lesson say does not translate to interviewing, and what replaces it? ||| Peer support, which belongs to services. What a reporter can do instead is know what local support exists and be able to name it if asked.

:::reveal What makes "what should I be asking about" the highest-yield question in this kind of interview? ||| A person who has lived the subject knows which question everyone gets wrong, and almost nobody has ever asked them.

:::reveal What does a reporter do if a source says they are in danger? ||| Stop rather than ask a follow-up, and give them the number of somebody whose job it is. A reporter is not providing care and is not assessing anyone's condition.

## Vocabulary
- **Safety, in an interview**: a chosen setting, a known time limit, no surprise participants, and a way to leave.
- **Trustworthiness**: doing exactly what you said you would do, which in a short relationship is the whole of it.
- **Collaboration**: asking the source what you should be asking about, and taking the answer seriously.
- **The care boundary**: the line between interviewing craft and clinical work, which a reporter does not cross.

## Sources
- Substance Abuse and Mental Health Services Administration. (2014). *SAMHSA's concept of trauma and guidance for a trauma-informed approach* (HHS Publication No. SMA 14-4884).
- Dart Center for Journalism and Trauma. (n.d.). *Resources for journalists*. Columbia Journalism School. https://dartcenter.org/`,
    },
    {
      slug: "control-and-choice",
      title: "7 · Giving control: pace, order, and the right to stop",
      section: "Section 2 · Trauma-informed practice",
      body: `Control is the thing an unsought source lost when the event happened, and an interview can either return some of it or take more. Which one it does is decided by small mechanics.

**Start where they want to start.** Ask what they would like you to understand first, rather than opening at the hardest moment because it is the one you need. The material you need is more likely to arrive, and to arrive usable, from someone who was allowed to arrange their own account.

**Signpost before you turn.** Say what you are about to ask about before you ask it: "I need to ask you about the night itself. Is now all right, or would you rather come back to it?" Signposting costs four seconds and removes the ambush, and an ambushed source either shuts down or gives you something they will regret, both of which are worse for the story.

**Let silence run.** The most useful material in this kind of interview usually arrives after a pause you did not fill. Counting to five before speaking again is a mechanical trick and it works.

**Say the stop rule out loud, and mean it.** That they can stop, pause, take a break, or end the whole thing, at any point, with no consequence. Then honor it instantly the first time it is used, because the first use is the test of whether the rule was real.

**Record with permission and explain why.** Recording is for accuracy, and saying so removes the reasonable suspicion that it is for gathering evidence against them. Recording law varies by state, and a reporter should know their own rule before the question arises; the next courses in this track cover the legal frame in detail and the Reporters Committee maintains a state-by-state guide.

**Watch what the conversation is doing, not just what it is producing.** Shorter answers, a flattened voice, a person going somewhere else in their head. When you see it, offer a break rather than pressing through. The story is not improved by a source who finished the interview and cannot get out of bed the next day, and the version of the account you get past that point is usually worse anyway.

**Close deliberately.** Ask what they want to add, tell them what happens next and when, give them your direct contact, and say plainly that they can call you if they change their mind about anything. Ending an interview by stopping the recorder and leaving is the most common small cruelty in this kind of work.

:::reveal Why start where the source wants to start rather than at the hardest moment? ||| Because the material you need arrives more often, and more usably, from a person who was allowed to arrange their own account.

:::reveal What is signposting, and what does it prevent? ||| Saying what you are about to ask about before you ask it, and offering to come back to it. It costs four seconds and removes the ambush, which otherwise produces silence or a regretted answer.

:::reveal When is the stop rule actually tested? ||| The first time a source uses it. Honoring it instantly is what makes the rule real; hesitating tells them it was decoration.

## Vocabulary
- **Signposting**: naming the subject you are about to move to, and offering to defer it.
- **Stop rule**: the stated right to pause or end at any point with no consequence, honored instantly on first use.
- **Productive silence**: the pause after an answer that the interviewer deliberately does not fill.
- **Deliberate close**: ending with what they want to add, what happens next, direct contact, and permission to change their mind.

## Sources
- Dart Center for Journalism and Trauma. (n.d.). *Resources for journalists*. Columbia Journalism School. https://dartcenter.org/
- Reporters Committee for Freedom of the Press. (n.d.). *Reporter's recording guide*. https://www.rcfp.org/`,
    },
    {
      slug: "quiz-trauma-informed",
      title: "8 · Knowledge check: trauma-informed practice",
      section: "Section 2 · Trauma-informed practice",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does this section explicitly not make a reporter?",
            options: [
              "A clinician",
              "An advocate for the source's interests",
              "A witness to the events described",
              "An expert in the subject matter",
            ],
            correctIndex: 0,
            explanation:
              "It describes how accounts of frightening events tend to come out, so a reporter can report accurately rather than mistake a normal recollection for an unreliable witness.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "What is the first thing to go in an account of a distressing event?",
            options: [
              "Order",
              "Names of the people involved",
              "Sensory detail, which fades fastest",
              "The narrator's own role in events",
            ],
            correctIndex: 0,
            explanation:
              "People often recall out of sequence, in fragments, with vivid sensory detail attached unevenly across moments.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "How should a reporter read an account with vivid sound detail but no clear timing?",
            options: [
              "As characteristic rather than suspicious",
              "As evidence the account has been rehearsed",
              "As a reason to seek a different source for the same events",
              "As grounds to attribute the account rather than report it as fact",
            ],
            correctIndex: 0,
            explanation:
              "That pattern is how accounts of frightening events characteristically come out.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "Why can detail change between tellings without either version being a lie?",
            options: [
              "Recollection is reconstructive and peripheral detail moves",
              "Because sources rehearse their accounts between interviews",
              "Because reporters record different parts of the same conversation",
              "Because a second telling is always shorter than the first",
            ],
            correctIndex: 0,
            explanation:
              "Which is why an interviewer who says but last time you said usually gets a source who stops talking.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "What phrasing gets a better account than challenging a discrepancy?",
            options: [
              "I want to make sure I have this right, tell me again about that part",
              "That is not what you told me the first time we spoke",
              "Are you certain about that, because the record says otherwise",
              "Let us set that aside and move on to something easier",
            ],
            correctIndex: 0,
            explanation:
              "The challenge reads as an accusation to somebody describing a hard event, and it produces silence rather than accuracy.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "What does trauma-informed practice change about verification?",
            options: [
              "Nothing about doing it, only what a discrepancy means",
              "It replaces corroboration with the source's own account",
              "It defers verification until after publication",
              "It limits verification to documents rather than other witnesses",
            ],
            correctIndex: 0,
            explanation:
              "Records, witnesses, photographs, timestamps, and official documents all still apply. A wobble in peripheral detail is expected; a change in the central event is a real signal.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "What is the difference between an account and an interpretation?",
            options: [
              "What a person experienced, against what caused it and who is at fault",
              "What was said on the record, against what was said on background",
              "What the reporter observed, against what the source described",
              "What is quoted directly, against what is paraphrased",
            ],
            correctIndex: 0,
            explanation:
              "Keeping them apart in your notes is what lets you honor somebody's experience and still report accurately about the events.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "How does a reporter find out whether retelling is welcome or costly?",
            options: [
              "By asking",
              "By observing whether the source becomes upset",
              "By checking with a family member beforehand",
              "By assuming it is costly and limiting the interview",
            ],
            correctIndex: 0,
            explanation:
              "Both are common, and asking is not intrusive. Offer the choice between talking it through and answering only what you need.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "Which sentence does the lesson tell reporters never to use?",
            options: [
              "I understand how you feel",
              "I am trying to get this right",
              "I will tell you before it runs",
              "You can stop at any point",
            ],
            correctIndex: 0,
            explanation:
              "You do not. Along with any version of this will help other people, which you cannot promise.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "What should a reporter say instead of promising the story will help others?",
            options: [
              "That you are trying to get it right and will tell them before it runs",
              "That the story will reach a large audience",
              "That other sources have found the process worthwhile",
              "That the outlet has a record of accountability reporting",
            ],
            correctIndex: 0,
            explanation:
              "Both are true and both are within your control, which is what makes them safe to say.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "How many principles does the federal trauma-informed framework name?",
            options: [
              "Six",
              "Four, matching the four stages of an interview",
              "Nine, one for each category of vulnerable source",
              "Three, covering safety, choice, and collaboration",
            ],
            correctIndex: 0,
            explanation:
              "Safety; trustworthiness and transparency; peer support; collaboration and mutuality; empowerment, voice, and choice; and cultural, historical, and gender issues.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "Whom was the trauma-informed framework originally written for?",
            options: [
              "Services rather than journalism",
              "Newsrooms covering disaster and conflict",
              "Courts handling testimony from vulnerable witnesses",
              "Researchers conducting interviews under ethics review",
            ],
            correctIndex: 0,
            explanation:
              "Five of the six translate directly into an interview, and the translation is concrete rather than atmospheric.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What does safety translate to in an interview?",
            options: [
              "A chosen setting, a known time limit, and no surprise participants",
              "A recording of the entire conversation for the source's protection",
              "A legal review of the questions before they are asked",
              "A commitment not to publish anything the source finds distressing",
            ],
            correctIndex: 0,
            explanation:
              "Plus a door they can leave through, and honoring the time you said you would take.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What is the whole of trustworthiness in a short relationship?",
            options: [
              "Doing exactly what you said you would do",
              "Disclosing your outlet's ownership and funding",
              "Offering to let the source review the piece",
              "Explaining the editorial process in detail",
            ],
            correctIndex: 0,
            explanation:
              "Send the follow-up when you said. Call before it runs, as you promised. Predictability is what a short relationship can actually offer.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What does the lesson call the highest-yield question in this kind of interview?",
            options: [
              "What do you think I should be asking about",
              "What would you like readers to understand",
              "What has been the hardest part of this",
              "Who else should I be speaking to",
            ],
            correctIndex: 0,
            explanation:
              "A person who has lived the subject knows which question everyone gets wrong, and almost nobody has asked them.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "Which four things does empowerment translate into?",
            options: [
              "Pace, order, whether to answer, and whether to stop",
              "Attribution, anonymity, photographs, and placement",
              "Timing, location, accompaniment, and recording",
              "Length, subject, follow-up, and correction",
            ],
            correctIndex: 0,
            explanation:
              "Say all four out loud at the start, because a source told they may decline is having a better interview than one answering under unnoticed pressure.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What does the cultural and historical principle require a reporter to know?",
            options: [
              "What the institution has done to people like the source historically",
              "The demographic composition of the outlet's audience",
              "The source's own account of their community's history",
              "Which cultural terms the outlet's style guide prefers",
            ],
            correctIndex: 0,
            explanation:
              "Because they know. It also means asking about names and how somebody wants to be described rather than assuming from documents.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "Which principle does the lesson say does not translate to interviewing?",
            options: [
              "Peer support",
              "Safety, because a reporter cannot guarantee it",
              "Collaboration, because the reporter controls the questions",
              "Transparency, because reporting methods are confidential",
            ],
            correctIndex: 0,
            explanation:
              "It belongs to services. What a reporter can do is know what local support exists and be able to name it if asked.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What can a reporter do about support services, and what can they not?",
            options: [
              "Know and name them, not refer or arrange",
              "Refer directly, but not accompany the source",
              "Arrange an appointment, but not follow up",
              "Nothing, since any involvement compromises independence",
            ],
            correctIndex: 0,
            explanation:
              "Not counseling, not referring, not arranging. Knowing what exists locally and being able to say it is the whole of it.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What does a reporter do if a source says they are in danger?",
            options: [
              "Stop and give them a number for somebody whose job it is",
              "Ask a careful follow-up to establish the nature of the danger",
              "Continue and note the disclosure for the story",
              "Contact the authorities on the source's behalf",
            ],
            correctIndex: 0,
            explanation:
              "The answer is not a follow-up question. A reporter is not providing care and is not assessing anyone's condition.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "Why does the control lesson say control matters so much here?",
            options: [
              "It is the thing the source lost when the event happened",
              "Because control determines the legal validity of consent",
              "Because uncontrolled interviews produce unusable recordings",
              "Because outlets require documented source agreement",
            ],
            correctIndex: 0,
            explanation:
              "An interview either returns some of it or takes more, and which one is decided by small mechanics.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "Where should an interview start?",
            options: [
              "Where the source wants to start",
              "At the hardest moment, while attention is freshest",
              "With the reporter's most important question",
              "With biographical detail, to establish rapport",
            ],
            correctIndex: 0,
            explanation:
              "Ask what they would like you to understand first. The material you need arrives more often, and more usably, from someone allowed to arrange their own account.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What is signposting?",
            options: [
              "Naming the subject you are about to move to, and offering to defer it",
              "Summarizing the source's answer before asking the next question",
              "Telling the source which quotations you intend to use",
              "Marking the recording at points you plan to transcribe",
            ],
            correctIndex: 0,
            explanation:
              "It costs four seconds and removes the ambush, which otherwise produces either silence or an answer the source regrets.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What happens to an ambushed source?",
            options: [
              "They shut down or say something they will regret",
              "They give a more candid answer than they otherwise would",
              "They end the interview and decline further contact",
              "They ask to go off the record for the remainder",
            ],
            correctIndex: 0,
            explanation:
              "Both outcomes are worse for the story, which is the practical argument for signposting rather than the sentimental one.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What does the lesson recommend doing with silence?",
            options: [
              "Let it run, counting to five before speaking",
              "Fill it with a follow-up so the conversation keeps moving",
              "End that line of questioning and move to a new subject",
              "Ask whether the source would like to take a break",
            ],
            correctIndex: 0,
            explanation:
              "The most useful material in this kind of interview usually arrives after a pause the reporter did not fill.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "When is the stop rule actually tested?",
            options: [
              "The first time it is used",
              "When the reporter is closest to the material they need",
              "At the end of the interview, when the source reviews what was said",
              "After publication, when the source sees the piece",
            ],
            correctIndex: 0,
            explanation:
              "Honoring it instantly is what makes the rule real. Hesitating tells the source it was decoration.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "Why explain that recording is for accuracy?",
            options: [
              "It removes the suspicion that it is for gathering evidence",
              "Because recording law requires a stated purpose",
              "Because it establishes the reporter's professional standing",
              "Because it makes the recording admissible if disputed",
            ],
            correctIndex: 0,
            explanation:
              "The suspicion is reasonable for someone who has never been interviewed, and one sentence dissolves it.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What does the lesson say about recording law?",
            options: [
              "It varies by state and a reporter should know their own rule",
              "It is uniform federally and requires all-party consent",
              "It applies only to telephone conversations, not in-person ones",
              "It is superseded by the source's verbal permission",
            ],
            correctIndex: 0,
            explanation:
              "The Reporters Committee maintains a state-by-state guide, and later courses in this track cover the legal frame in detail.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "Which signs suggest offering a break rather than pressing on?",
            options: [
              "Shorter answers, a flattened voice, going somewhere else",
              "Longer answers, more detail, and repeated tangents",
              "Questions about the reporter's own background",
              "Requests to clarify what the story is about",
            ],
            correctIndex: 0,
            explanation:
              "The version of the account you get past that point is usually worse anyway, so the kind move and the professional move coincide.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What does a deliberate close consist of?",
            options: [
              "What they want to add, what happens next, contact, and permission to change their mind",
              "A summary of the quotations you intend to use and their placement",
              "A signed confirmation that the interview took place",
              "A commitment to a publication date and a follow-up interview",
            ],
            correctIndex: 0,
            explanation:
              "Stopping the recorder and leaving is described as the most common small cruelty in this kind of work.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "How long does the lesson suggest a reporter tell a source the interview will take?",
            options: [
              "Roughly how long, stated at the start and then honored",
              "As long as it takes, so the source does not feel rushed",
              "No estimate, since a time limit distorts the account",
              "Exactly one hour, which is the professional standard",
            ],
            correctIndex: 0,
            explanation:
              "A known time limit is part of what safety translates to, along with a chosen setting and no surprise participants.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What is the account, in the account-versus-interpretation distinction?",
            options: [
              "What the person experienced",
              "What the documents establish about the events",
              "What the reporter concludes from the evidence",
              "What other witnesses have independently confirmed",
            ],
            correctIndex: 0,
            explanation:
              "It is theirs and reportable as their account. Cause, fault, and what it proves are separate claims requiring separate evidence.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "Which kind of discrepancy is a real signal worth pursuing?",
            options: [
              "A change in the central event",
              "A change in the time of day given",
              "A change in the number of people present",
              "A change in the order events were described",
            ],
            correctIndex: 0,
            explanation:
              "Peripheral detail is expected to move. The central event is the part that should hold.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "What question does the lesson offer for finding out whether retelling is wanted?",
            options: [
              "Is this something you want to talk through, or should I ask only what I need",
              "Would you prefer to write your account rather than speak it",
              "Have you spoken about this before, and how did it go",
              "Do you feel able to continue with the interview today",
            ],
            correctIndex: 0,
            explanation:
              "Both answers are common, and which one applies is knowable only by asking.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "What is peer support in the original framework?",
            options: [
              "A service-delivery principle that does not transfer to interviewing",
              "The practice of bringing a second reporter to difficult interviews",
              "Allowing a source to bring a companion to an interview",
              "Connecting sources with others who have been interviewed before",
            ],
            correctIndex: 0,
            explanation:
              "What is available to a reporter instead is knowing what local support exists and being able to name it.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "Why does the lesson say to ask about names and descriptions rather than assume from documents?",
            options: [
              "Documents record what an institution wrote, not what a person uses",
              "Because documents are frequently out of date by several years",
              "Because using a documented name may breach privacy law",
              "Because sources expect to be asked as a matter of courtesy",
            ],
            correctIndex: 0,
            explanation:
              "It sits within the cultural, historical, and gender principle, alongside knowing what institutions have done to people like your source.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What is the care boundary?",
            options: [
              "The line between interviewing craft and clinical work",
              "The limit on how many difficult interviews a reporter should conduct",
              "The point at which an outlet's duty of care to staff begins",
              "The distinction between a source's welfare and a story's needs",
            ],
            correctIndex: 0,
            explanation:
              "A reporter is not providing care and is not assessing anyone's condition, which the section repeats deliberately.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What does the lesson say about honoring the stated time limit?",
            options: [
              "Honor it, having said it at the start",
              "Extend it whenever the material is going well",
              "Leave it unstated so the source is not watching the clock",
              "Set it after the interview begins, once the scope is clear",
            ],
            correctIndex: 0,
            explanation:
              "A time limit the source knows about and that the reporter keeps is part of what makes the room safe.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What makes signposting cheap?",
            options: [
              "It takes about four seconds",
              "It replaces the need for the five disclosures",
              "It shortens the interview by removing tangents",
              "It can be done in writing before the interview",
            ],
            correctIndex: 0,
            explanation:
              "And it removes the ambush, which is the most expensive thing that can happen in this kind of conversation.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What is productive silence?",
            options: [
              "A pause after an answer that the interviewer deliberately does not fill",
              "A period in which the recorder is stopped at the source's request",
              "The interval between the reporter's questions in a structured interview",
              "A break taken when a source shows signs of distress",
            ],
            correctIndex: 0,
            explanation:
              "Counting to five before speaking again is a mechanical trick, and it works.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What does the lesson say about a story improved by pressing through distress?",
            options: [
              "It is not improved, and the account gets worse anyway",
              "It is improved, but at an ethical cost the reporter must weigh",
              "It is unchanged, since distress does not affect recall",
              "It is improved only when the source later confirms the account",
            ],
            correctIndex: 0,
            explanation:
              "A source who finished the interview and cannot get out of bed the next day did not make the piece better.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "Which is a translation of collaboration and mutuality?",
            options: [
              "Asking what you should be asking about",
              "Agreeing the story's framing with the source in advance",
              "Sharing the draft with the source before filing",
              "Letting the source choose which of their quotations appear",
            ],
            correctIndex: 0,
            explanation:
              "It sounds soft and it is the highest-yield question in this kind of interview.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "Why is an out-of-sequence account not a reason to doubt a source?",
            options: [
              "Sequence is characteristically the first thing lost",
              "Because reporters routinely reorder accounts when writing",
              "Because sequence can be reconstructed from documents",
              "Because sources are rarely asked about timing",
            ],
            correctIndex: 0,
            explanation:
              "Fragments, uneven sensory detail, and lost order are how these accounts characteristically come out.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "What does the lesson say verification does under trauma-informed practice?",
            options: [
              "It does not relax",
              "It shifts entirely to documentary evidence",
              "It is deferred until the source is ready to confirm",
              "It becomes the editor's responsibility rather than the reporter's",
            ],
            correctIndex: 0,
            explanation:
              "Records, witnesses, photographs, timestamps, and documents all still apply, and the next course covers doing it under time pressure.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "What does a reporter offer instead of certainty about a story's effect?",
            options: [
              "That you are trying to get it right",
              "That the outlet has a strong record on the subject",
              "That the piece will be read by decision makers",
              "That the source's account will be quoted at length",
            ],
            correctIndex: 0,
            explanation:
              "Along with telling them before it runs. Both are inside the reporter's control, which is what makes them promises rather than hopes.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "Which of the six principles concerns doing what you said you would do?",
            options: [
              "Trustworthiness and transparency",
              "Safety",
              "Collaboration and mutuality",
              "Empowerment, voice, and choice",
            ],
            correctIndex: 0,
            explanation:
              "In a relationship this short, predictability is the whole of it: send the follow-up when you said and call before it runs.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What does the lesson say about a source who has decided to say something difficult?",
            options: [
              "Follow their answer rather than deciding for them",
              "End the interview once distress becomes visible",
              "Encourage them to continue, since stopping wastes their effort",
              "Suggest they consult someone before saying more",
            ],
            correctIndex: 0,
            explanation:
              "Offer a break, and take the answer they give. Deciding for an adult takes away the control the interview is supposed to return.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "Why does the lesson describe the ending of an interview as a place cruelty happens?",
            options: [
              "Stopping the recorder and leaving is the common failure",
              "Because sources are most distressed at the end of a conversation",
              "Because the last question is usually the hardest one",
              "Because the reporter's deadline pressure peaks at that point",
            ],
            correctIndex: 0,
            explanation:
              "A deliberate close costs a minute: what they want to add, what happens next, contact details, and permission to change their mind.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What does the lesson say about the material a reporter most needs?",
            options: [
              "It arrives more often when the source arranges their own account",
              "It has to be asked for directly at the start of the interview",
              "It is usually withheld until a second conversation",
              "It comes from documents rather than from the interview",
            ],
            correctIndex: 0,
            explanation:
              "Which is the practical case for starting where the source wants to start rather than at the hardest moment.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "Which two states does the lesson distinguish in a distressed source?",
            options: [
              "Upset, and unable to continue",
              "Reluctant, and unwilling",
              "Tired, and disengaged",
              "Angry, and defensive",
            ],
            correctIndex: 0,
            explanation:
              "Treating every tear as a stop signal takes control away from an adult who chose to say something hard.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What does the framework's safety principle cover, in the original?",
            options: [
              "Physical and emotional safety",
              "Legal protection for participants",
              "Confidentiality of records",
              "Continuity of care between providers",
            ],
            correctIndex: 0,
            explanation:
              "Which translates into a setting the source chose, a door they can leave through, a known time limit, and no surprise participants.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What is the reporter's use of knowing local support services?",
            options: [
              "Naming one if asked",
              "Referring the source before the interview begins",
              "Including the information in the published piece",
              "Contacting the service on the source's behalf",
            ],
            correctIndex: 0,
            explanation:
              "Not referring, not counseling, not arranging. Knowing, and being able to say it, is the whole of what peer support becomes here.",
            sourceLessonSlug: "six-principles",
          },
        ],
      },
    },
    // ── Section 3 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "minors-and-guardians",
      title: "9 · Minors, guardians, and who is actually consenting",
      section: "Section 3 · Minors, guardians, and inexperience",
      body: `Interviewing a young person is governed mostly by editorial policy and by state-specific law rather than by one national rule, and a reporter who assumes otherwise in either direction will get it wrong.

**What is generally true, and stated carefully.** There is no single federal rule that forbids a journalist from speaking with a young person, and consent standards, recording law, and rules about access to school property are all state and institution specific. Your outlet almost certainly has a written policy, your state has recording and access law, and a school or agency has its own rules on its own property. Find all three before you need them, and the Reporters Committee's state guides are where the second one starts.

**What FERPA does and does not do.** The federal student privacy statute governs what a SCHOOL may release about a student (20 U.S.C. 1232g). It does not govern what a student chooses to say to a reporter, and it is regularly cited to reporters as though it did. Knowing the difference lets you accept a genuine refusal from a school and decline an imaginary one about a conversation on a sidewalk.

**The two consents, which are not the same thing.** A guardian's permission is a permission. The young person's own agreement is the consent that matters ethically, and it can be absent while the guardian's is enthusiastic. A reporter who has a signed permission and a teenager who plainly does not want to talk has an interview they should not do.

**Assent, in plain terms.** Ask the young person, separately and directly, whether they want to do this, and make declining easy: "Your mother said yes, and I want to know what you think. It is completely fine to say no, and nothing happens if you do." Then believe the answer, including a hesitant one.

**What a guardian's permission genuinely settles, and what it does not.** It settles that an adult responsible for the young person knows the interview is happening and agrees to it. It does not settle whether the young person understands what publication means, whether the guardian's interest is the same as the young person's, or whether the story will be good for either of them. In situations where the guardian is part of what the story is about, those interests can be directly opposed, and that is exactly when a reporter must think hardest.

**Identifiability again, harder.** A young person's name attached to a difficult subject is durable in a way adults underestimate: it is searchable by classmates now and by employers in ten years. Many outlets use a first name only, or an age and a town, and even that combination can identify a student inside one school. Decide the identification question before the interview, tell them what you decided, and do not let it be revisited in the edit without going back to them.

:::reveal What does FERPA govern, and what is it frequently misused to claim? ||| It governs what a school may release about a student. It is misused to suggest a student may not speak to a reporter, which it does not address.

:::reveal Why is a guardian's permission not the same as the young person's consent? ||| Permission means a responsible adult agrees the interview may happen. Consent is the young person's own agreement, and a reporter with a signed permission and an unwilling teenager has an interview they should not do.

:::reveal Why is identifiability harder with a young person? ||| Because a name attached to a difficult subject is searchable by classmates now and by employers in ten years, and even an age plus a town can identify a student inside one school.

## Vocabulary
- **Assent**: the young person's own agreement, asked separately and directly, with declining made easy.
- **Guardian permission**: an adult's agreement that the interview may happen, which does not substitute for assent.
- **FERPA**: the federal statute governing what schools may release about students, not what students may say.
- **Durable identification**: the long-term searchability of a young person's name attached to a difficult subject.

## Sources
- Family Educational Rights and Privacy Act, 20 U.S.C. 1232g.
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "the-guardian-in-the-room",
      title: "10 · The guardian in the room, and the interview it changes",
      section: "Section 3 · Minors, guardians, and inexperience",
      body: `A guardian present during an interview is normal, often required by policy, and it changes what the young person will say. Handling that honestly is a craft problem, not an ethical dilemma.

**Say the arrangement out loud at the start.** Who is in the room, what each person's role is, and that you will be directing questions to the young person. It sounds unnecessary and it prevents the most common failure, which is a guardian answering every question addressed to their child while everyone feels too awkward to say anything.

**Redirect gently and repeatedly.** "That is helpful, and I want to hear how it looked to you." Say it as many times as needed, without irritation, because the guardian is usually not trying to take over. They are anxious, and anxiety in a room with a reporter looks like talking.

**Ask the guardian their own questions, deliberately.** Give them a real section of the interview that is theirs, ideally first. A guardian who has been properly interviewed is far less likely to interrupt the young person's part, and their account is usually worth having anyway.

**Know what the young person will not say in front of them.** Anything involving the guardian, anything the guardian does not know, and often anything about how they are actually doing. That is not a reason to try to separate them, which is a decision with real risk and which your outlet's policy may forbid outright. It is a reason to be honest with yourself about what the interview can produce, and to say so in your story if it matters.

**Where policy allows a separate conversation, do it visibly or not at all.** In sight of the guardian, in the same building, with the guardian's knowledge, and never as something arranged around them. A reporter who engineers private access to a young person has done something that will end their career and deserves to.

**Watch for the guardian's interest diverging from the young person's.** A guardian may want the story told for reasons of their own: a grievance, a campaign, a case. That does not make them wrong, and it does mean the motive check from the beat course applies here with more weight than usual, because the person bearing the consequence is not the person seeking the coverage.

**Two mechanics that help.** Ask the young person to explain something to you that they know and you do not, early, because expertise changes the room's posture. And when the interview ends, give your contact to both of them, so a young person who wants to add something later is not routing it through the person they may want to talk about.

:::reveal What is the most common failure when a guardian is present, and what prevents it? ||| The guardian answering questions addressed to the young person while nobody wants to be rude. Stating at the start who is in the room, what each role is, and that questions go to the young person prevents most of it.

:::reveal Why interview the guardian properly, and ideally first? ||| A guardian who has been properly interviewed interrupts far less, and their own account is usually worth having.

:::reveal Why does the motive check carry more weight when a guardian sought the coverage? ||| Because the person bearing the consequence of publication is not the person who sought it.

## Vocabulary
- **Stated arrangement**: naming who is present, their role, and who questions are directed to, said at the start.
- **Redirection**: returning a question to the young person, repeatedly and without irritation.
- **Divergent interest**: a guardian's reason for wanting coverage that is not the young person's interest.
- **Visible separate conversation**: where policy permits it, a talk in sight and with knowledge of the guardian, never arranged around them.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/
- Dart Center for Journalism and Trauma. (n.d.). *Resources for journalists*. Columbia Journalism School. https://dartcenter.org/`,
    },
    {
      slug: "never-been-interviewed",
      title: "11 · The person who has never been interviewed",
      section: "Section 3 · Minors, guardians, and inexperience",
      body: `Inexperience is its own category, and the professional standard names it alongside age for a reason. An adult who has never spoken to a reporter is subject to most of the same asymmetries as a young person, and gets far less institutional protection.

**What inexperience actually produces.** Over-disclosure, because the person does not know which parts are dangerous. Agreement with your framing, because it sounds authoritative and they assume you know. Answers to questions they would rather not answer, because declining feels rude. And a belief that they can take something back later, because that is how conversations work everywhere except this one.

**The correction for over-disclosure.** When somebody tells you something clearly damaging to themselves that has nothing to do with your story, stop and check: "That is not something I was asking about and it is not going in the story. Do you want it on the record or not?" You will lose almost nothing and you will keep a source, and a reporter who quietly banks material a person did not know they were giving has taken something rather than been given it.

**The correction for agreement.** Ask open questions and avoid feeding your framing back. "Would you say it was chaotic?" gets you your own word in quotation marks. "How would you describe it?" gets you theirs, which is both more accurate and better writing.

**The correction for politeness.** Say early that declining a question is completely normal, and mean it visibly the first time it happens. The five disclosures from lesson 2 do most of this work already.

**The correction for the take-it-back belief.** Be plain: once it is published it is out, and you cannot unpublish it. Then offer the one thing you genuinely can offer, which is a call before it runs. Almost nobody asks for anything unreasonable at that point; what they usually want is not to be surprised.

**A specific trap with people who have institutional exposure.** Employees who are not authorized to speak, tenants, patients, students, and anyone whose housing or status depends on a body in your story. They frequently do not know they can be identified from detail, and they frequently do not know their employer can see their social accounts. Say it plainly. Losing a quote is cheaper than costing somebody a job they did not know they were risking.

**And the thing that most improves this interview.** Explain how the story will be assembled. Where their words will sit, what else will be in it, who else you are talking to, and roughly when it publishes. A person who understands the shape of the thing they are joining gives a better interview and is far less likely to feel ambushed by it.

:::reveal Name two effects of inexperience on what a source says. ||| Over-disclosure, because they cannot tell which parts are dangerous, and agreement with the reporter's framing, because it sounds authoritative.

:::reveal What is the correction when a source volunteers something damaging and irrelevant? ||| Stop, say it is not what you asked about and is not going in, and ask whether they want it on the record. Quietly banking it is taking rather than being given.

:::reveal Why does "how would you describe it" beat "would you say it was chaotic"? ||| Because the second gets your own word back in quotation marks. The first gets theirs, which is both more accurate and better writing.

## Vocabulary
- **Over-disclosure**: telling a reporter damaging things the source cannot identify as dangerous.
- **Framing agreement**: adopting the reporter's characterization because it sounds authoritative.
- **Institutional exposure**: a source whose job, housing, status, or care depends on a body in the story.
- **Explaining the shape**: telling a source how the piece will be assembled, who else is in it, and when it runs.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/
- Dart Center for Journalism and Trauma. (n.d.). *Resources for journalists*. Columbia Journalism School. https://dartcenter.org/`,
    },
    {
      slug: "quiz-minors-and-inexperience",
      title: "12 · Knowledge check: minors, guardians, and inexperience",
      section: "Section 3 · Minors, guardians, and inexperience",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What mostly governs interviewing a young person?",
            options: [
              "Editorial policy and state-specific law",
              "A single federal statute applying in every jurisdiction",
              "The professional code, which sets a uniform national rule",
              "The school's own regulations, wherever the interview occurs",
            ],
            correctIndex: 0,
            explanation:
              "A reporter who assumes one national rule will get it wrong in either direction: there are three sources to check, not one.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "Which three things should a reporter find before they need them?",
            options: [
              "The outlet's policy, the state's law, and the institution's rules",
              "The guardian's contact, the school's press office, and a lawyer",
              "The young person's age, school, and home address",
              "The state statute, the federal statute, and the professional code",
            ],
            correctIndex: 0,
            explanation:
              "Consent standards, recording law, and access to school property are all state and institution specific.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What does FERPA govern?",
            options: [
              "What a school may release about a student",
              "What a student may say to a reporter",
              "Whether a reporter may enter school property",
              "Whether a minor may consent to being recorded",
            ],
            correctIndex: 0,
            explanation:
              "It is regularly cited to reporters as though it governed a student's own speech, which it does not address.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What does knowing FERPA correctly let a reporter do?",
            options: [
              "Accept a real refusal and decline an imaginary one",
              "Compel a school to release records about a named student",
              "Interview a student on school property without permission",
              "Publish a student's records once the student consents",
            ],
            correctIndex: 0,
            explanation:
              "A genuine refusal about school-held records, and an imaginary one about a conversation on a sidewalk.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What is the difference between guardian permission and the young person's consent?",
            options: [
              "Permission allows the interview; consent is the young person's own agreement",
              "Permission is written and consent is verbal",
              "Permission covers publication and consent covers recording",
              "Permission is legal and consent is editorial, in every state",
            ],
            correctIndex: 0,
            explanation:
              "A reporter with a signed permission and a teenager who plainly does not want to talk has an interview they should not do.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What is assent?",
            options: [
              "The young person's own agreement, asked separately and directly",
              "A guardian's countersignature on a consent form",
              "A verbal confirmation recorded at the start of an interview",
              "An outlet's internal sign-off on interviewing a minor",
            ],
            correctIndex: 0,
            explanation:
              "With declining made easy and the answer believed, including a hesitant one.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "How does the lesson suggest making refusal easy for a young person?",
            options: [
              "Say it is completely fine to say no and nothing happens if they do",
              "Ask the guardian to leave so the answer is unpressured",
              "Offer a written form they can decline without speaking",
              "Suggest they think it over and reply the following day",
            ],
            correctIndex: 0,
            explanation:
              "Your mother said yes, and I want to know what you think, is the framing the lesson gives.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What does guardian permission genuinely settle?",
            options: [
              "That a responsible adult knows and agrees the interview is happening",
              "That the young person understands what publication means",
              "That the guardian's interest matches the young person's",
              "That the story will be good for the family",
            ],
            correctIndex: 0,
            explanation:
              "It settles the first and none of the other three, which is exactly the confusion the lesson exists to remove.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "When are guardian and young person's interests most likely to be opposed?",
            options: [
              "When the guardian is part of what the story is about",
              "When the guardian has spoken to reporters before",
              "When the young person is close to adulthood",
              "When the interview is conducted on school property",
            ],
            correctIndex: 0,
            explanation:
              "Which is exactly when a reporter must think hardest rather than treating a signature as the end of the question.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "Why is identifiability harder with a young person?",
            options: [
              "The name is searchable by classmates now and employers later",
              "Because minors cannot be photographed under most state laws",
              "Because schools are required to notify parents of any coverage",
              "Because outlets are prohibited from naming anyone under eighteen",
            ],
            correctIndex: 0,
            explanation:
              "And even a first name with an age and a town can identify a student inside one school.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "When should the identification question be decided?",
            options: [
              "Before the interview, and told to them",
              "At the editing stage, when the piece's needs are clear",
              "By the guardian, at any point before publication",
              "After publication, if a complaint is received",
            ],
            correctIndex: 0,
            explanation:
              "And it should not be revisited in the edit without going back to them.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What is the most common failure when a guardian is present?",
            options: [
              "The guardian answers questions addressed to the young person",
              "The young person defers every answer to the guardian",
              "The guardian objects to the questions being asked",
              "The interview runs longer than the agreed time",
            ],
            correctIndex: 0,
            explanation:
              "While everyone feels too awkward to say anything, which is why the arrangement is stated out loud at the start.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "What should be said out loud at the start of an interview with a guardian present?",
            options: [
              "Who is present, each person's role, and who questions go to",
              "That the guardian may not speak until invited to",
              "That the young person's answers will be checked with the guardian",
              "That the guardian bears responsibility for what is said",
            ],
            correctIndex: 0,
            explanation:
              "It sounds unnecessary and it prevents the most common failure in the room.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "How should a reporter redirect a guardian who answers for their child?",
            options: [
              "Gently and repeatedly, without irritation",
              "Once, firmly, so the boundary is clearly established",
              "By asking the guardian to step outside for that section",
              "By addressing questions to both and using whichever answer is better",
            ],
            correctIndex: 0,
            explanation:
              "The guardian is usually not trying to take over. They are anxious, and anxiety in a room with a reporter looks like talking.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Why interview the guardian properly, and ideally first?",
            options: [
              "They interrupt far less afterward, and their account is worth having",
              "Because their permission is not valid until they have been interviewed",
              "Because outlets require a guardian's on-record statement",
              "Because it establishes whether their interests diverge",
            ],
            correctIndex: 0,
            explanation:
              "Giving them a real section of the interview that is theirs solves a craft problem rather than an ethical one.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "What will a young person generally not say in front of a guardian?",
            options: [
              "Anything involving the guardian or that the guardian does not know",
              "Anything about school, which they treat as private",
              "Anything they have already told a friend",
              "Anything that could be checked against a document",
            ],
            correctIndex: 0,
            explanation:
              "And often anything about how they are actually doing. Be honest with yourself about what the interview can produce.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Is that a reason to separate them?",
            options: [
              "No, and outlet policy may forbid it outright",
              "Yes, provided the guardian is not told in advance",
              "Yes, since a private conversation produces a truer account",
              "Only when the guardian is the subject of the story",
            ],
            correctIndex: 0,
            explanation:
              "It is a reason to be honest about what the interview can produce, and to say so in the story if it matters.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Where policy allows a separate conversation, how is it conducted?",
            options: [
              "Visibly, in the same building, with the guardian's knowledge",
              "Privately, so the young person can speak freely",
              "By telephone afterward, without the guardian present",
              "Through a third party who relays the questions",
            ],
            correctIndex: 0,
            explanation:
              "Never as something arranged around the guardian. A reporter who engineers private access to a young person has ended their career and deserves to.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Why does the motive check carry extra weight when a guardian sought coverage?",
            options: [
              "The person bearing the consequence is not the person seeking it",
              "Because a guardian's motive is legally relevant to consent",
              "Because guardians rarely disclose their reasons accurately",
              "Because the outlet's policy requires a documented motive",
            ],
            correctIndex: 0,
            explanation:
              "A grievance, a campaign, or a case does not make a guardian wrong. It does change who is exposed by publication.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Which mechanic does the lesson suggest to change the room's posture?",
            options: [
              "Ask the young person to explain something they know and you do not",
              "Begin with the hardest question while everyone is alert",
              "Sit beside rather than across from the young person",
              "Turn the recorder off for the first few minutes",
            ],
            correctIndex: 0,
            explanation:
              "Early in the interview, because expertise changes how a young person occupies the conversation.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Why give contact details to both the young person and the guardian?",
            options: [
              "So a later addition is not routed through the person they may want to discuss",
              "Because outlets require two points of contact for minors",
              "So either may withdraw consent independently",
              "So the guardian can verify anything the young person adds",
            ],
            correctIndex: 0,
            explanation:
              "It is a small mechanic with a specific purpose, and it costs nothing.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Why is inexperience named alongside age in the professional standard?",
            options: [
              "An adult who has never spoken to a reporter faces the same asymmetries",
              "Because inexperienced sources are more likely to be inaccurate",
              "Because outlets treat both categories under the same policy",
              "Because both groups require guardian permission",
            ],
            correctIndex: 0,
            explanation:
              "And they get far less institutional protection than a young person does.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "Which is one of the four effects of inexperience?",
            options: [
              "Over-disclosure, because they cannot tell which parts are dangerous",
              "Under-disclosure, because they fear being quoted at all",
              "Contradiction, because they have not rehearsed their account",
              "Delay, because they consult others before answering",
            ],
            correctIndex: 0,
            explanation:
              "With agreement to your framing, answering out of politeness, and believing they can take something back later.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "Why do inexperienced sources adopt a reporter's framing?",
            options: [
              "It sounds authoritative and they assume you know",
              "Because agreeing shortens an interview they find uncomfortable",
              "Because they want the story to reflect the outlet's view",
              "Because they have read the outlet's previous coverage",
            ],
            correctIndex: 0,
            explanation:
              "Which is why open questions beat leading ones on accuracy as well as on ethics.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What is the correction when a source volunteers something damaging and irrelevant?",
            options: [
              "Say it is not what you asked about and ask if it is on the record",
              "Note it privately and decide at the editing stage",
              "Use it if it is newsworthy, since it was volunteered",
              "End the interview to prevent further disclosure",
            ],
            correctIndex: 0,
            explanation:
              "You lose almost nothing and keep a source. Quietly banking material a person did not know they were giving is taking rather than being given.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "Which question gets the source's own words rather than the reporter's?",
            options: [
              "How would you describe it",
              "Would you say it was chaotic",
              "Was it as bad as the reports suggest",
              "Did it feel overwhelming at the time",
            ],
            correctIndex: 0,
            explanation:
              "The alternatives get your own word back in quotation marks, which is less accurate and worse writing.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What is the correction for a source who answers out of politeness?",
            options: [
              "Say early that declining is normal, and show it the first time",
              "Ask fewer questions so refusals are not needed",
              "Send the questions in advance so refusals can be written",
              "Have a colleague present who can intervene",
            ],
            correctIndex: 0,
            explanation:
              "The five disclosures do most of this work already, and the visible first refusal does the rest.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What is the correction for the belief that something can be taken back?",
            options: [
              "Say plainly that publication is permanent, and offer the call before it runs",
              "Agree to remove material on request within a stated window",
              "Delay publication until the source confirms in writing",
              "Explain the outlet's correction policy in detail",
            ],
            correctIndex: 0,
            explanation:
              "Almost nobody asks for anything unreasonable at that point. What they usually want is not to be surprised.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "Which sources does the lesson flag as having institutional exposure?",
            options: [
              "Unauthorized employees, tenants, patients, and students",
              "Officials, spokespeople, and elected representatives",
              "Advocates, campaigners, and organizers",
              "Experts, academics, and consultants",
            ],
            correctIndex: 0,
            explanation:
              "Anyone whose job, housing, care, or status depends on a body in your story.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What do institutionally exposed sources frequently not know?",
            options: [
              "That detail identifies them and that employers see social accounts",
              "That reporters may be compelled to disclose their identity",
              "That their employer must be contacted for comment",
              "That an outlet keeps recordings after publication",
            ],
            correctIndex: 0,
            explanation:
              "Losing a quote is cheaper than costing somebody a job they did not know they were risking.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What most improves an interview with an inexperienced source?",
            options: [
              "Explaining how the story will be assembled",
              "Recording rather than taking notes",
              "Conducting the interview in person rather than by phone",
              "Sending the questions in advance",
            ],
            correctIndex: 0,
            explanation:
              "Where their words will sit, what else is in it, who else you are talking to, and roughly when it publishes.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What effect does explaining the shape of the piece have?",
            options: [
              "A better interview and less chance of feeling ambushed",
              "A commitment the reporter must then honor exactly",
              "A source who tries to influence the structure",
              "A longer interview with more tangents",
            ],
            correctIndex: 0,
            explanation:
              "A person who understands the thing they are joining gives more, and reacts better afterward.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What is durable identification?",
            options: [
              "The long-term searchability of a name attached to a difficult subject",
              "A permanent record of the interview held by the outlet",
              "An identifier assigned to a source in the reporter's notes",
              "A photograph that cannot be removed once published",
            ],
            correctIndex: 0,
            explanation:
              "Searchable by classmates now and by employers in ten years, which adults consistently underestimate.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What does the lesson say about a hesitant answer to the assent question?",
            options: [
              "Believe it",
              "Ask again after the guardian has left the room",
              "Treat it as agreement, since hesitation is normal",
              "Refer the decision back to the guardian",
            ],
            correctIndex: 0,
            explanation:
              "Ask separately and directly, make declining easy, and believe the answer, including a hesitant one.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "Which practice is described as career-ending?",
            options: [
              "Engineering private access to a young person",
              "Interviewing a minor without a guardian's written permission",
              "Publishing a young person's first name and town",
              "Recording an interview with a minor present",
            ],
            correctIndex: 0,
            explanation:
              "Where a separate conversation is permitted at all, it happens visibly, in the same building, with the guardian's knowledge.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "How does the lesson characterize a talkative guardian's motive?",
            options: [
              "Anxiety rather than an attempt to take over",
              "A deliberate effort to control the narrative",
              "Distrust of the reporter's outlet",
              "A misunderstanding of the interview's purpose",
            ],
            correctIndex: 0,
            explanation:
              "Which is why redirection is gentle and repeated rather than firm and singular.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "What does the lesson say to do about what an interview cannot produce with a guardian present?",
            options: [
              "Be honest with yourself, and say so in the story if it matters",
              "Note it privately and seek a second interview later",
              "Request a separate conversation as a condition of proceeding",
              "Drop the material entirely from the finished piece",
            ],
            correctIndex: 0,
            explanation:
              "Rather than trying to separate them, which carries real risk and may be forbidden by policy.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "What is over-disclosure?",
            options: [
              "Telling a reporter damaging things the source cannot identify as dangerous",
              "Providing more documents than the reporter requested",
              "Repeating an account at greater length on a second telling",
              "Naming other people who could confirm the account",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the four characteristic effects of never having been interviewed before.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What does the lesson say a reporter loses by checking an off-topic disclosure?",
            options: [
              "Almost nothing",
              "The most newsworthy material in the interview",
              "The source's trust, since it signals judgment",
              "The ability to use anything from that section",
            ],
            correctIndex: 0,
            explanation:
              "And you keep a source, which on a beat is worth far more than one unusable line.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "Why is a leading question worse writing as well as worse ethics?",
            options: [
              "It returns your own word in quotation marks",
              "It makes the quotation too long to use",
              "It produces answers that cannot be verified",
              "It commits the reporter to the source's framing",
            ],
            correctIndex: 0,
            explanation:
              "An open question gets the source's words, which are more accurate and more interesting.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "How does a conversation everywhere else differ from an interview?",
            options: [
              "You can take things back",
              "You can decline to answer without explanation",
              "You choose the setting and the time",
              "You know who else is listening",
            ],
            correctIndex: 0,
            explanation:
              "Which is why inexperienced sources assume they can retract, and why the reporter has to say plainly that publication is permanent.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What is the one thing a reporter can genuinely offer against permanence?",
            options: [
              "A call before it runs",
              "A window in which material may be withdrawn",
              "A promise not to use the most damaging material",
              "An option to review the draft before filing",
            ],
            correctIndex: 0,
            explanation:
              "Almost nobody asks for anything unreasonable at that point. What they usually want is not to be surprised.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "Which of these does a guardian's permission NOT establish?",
            options: [
              "That the young person understands what publication means",
              "That a responsible adult knows about the interview",
              "That an adult agrees the interview may take place",
              "That the reporter contacted the family in advance",
            ],
            correctIndex: 0,
            explanation:
              "Nor whether the guardian's interest matches the young person's, nor whether the story will be good for either.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What does a first name plus an age and a town risk?",
            options: [
              "Identifying a student inside one school",
              "Breaching a statutory prohibition on naming minors",
              "Invalidating the guardian's permission",
              "Triggering a school's obligation to notify parents",
            ],
            correctIndex: 0,
            explanation:
              "Which is why many outlets use a first name only and why even that is a decision to make before the interview.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What does the lesson say about revisiting identification during editing?",
            options: [
              "Do not, without going back to them",
              "It is normal, since editing decisions are the desk's",
              "Only the guardian may reopen the question",
              "It is required if the piece changes materially",
            ],
            correctIndex: 0,
            explanation:
              "The decision is made before the interview and told to them, which is what makes it something they relied on.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "Why does the lesson call the guardian situation a craft problem?",
            options: [
              "Its solutions are mechanics rather than principles",
              "Because ethics codes do not address it at all",
              "Because it only arises in broadcast interviews",
              "Because the legal position is entirely settled",
            ],
            correctIndex: 0,
            explanation:
              "Stating the arrangement, redirecting, interviewing the guardian first, and giving both contacts are all mechanics.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "What kind of protection does an inexperienced adult source get, compared to a minor?",
            options: [
              "Far less institutional protection",
              "The same protection under most outlet policies",
              "More, because adults can consent for themselves",
              "None, since policies address minors only",
            ],
            correctIndex: 0,
            explanation:
              "While facing most of the same asymmetries, which is why the professional standard names inexperience explicitly.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What should a reporter say about employers and social accounts?",
            options: [
              "Say plainly that employers can see them",
              "Advise the source to make their accounts private",
              "Avoid the subject, since it is outside the reporting",
              "Offer to check the accounts before publication",
            ],
            correctIndex: 0,
            explanation:
              "Institutionally exposed sources frequently do not know it, and the disclosure costs a quote at most.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What is the stated arrangement, in a room with a guardian?",
            options: [
              "Who is present, their roles, and that questions go to the young person",
              "The time limit and the subjects that will be covered",
              "The permission that has been given and by whom",
              "The identification decision and how the piece will describe them",
            ],
            correctIndex: 0,
            explanation:
              "Said at the start, and it prevents the awkward failure where a guardian answers everything.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Which is a divergent interest, in the lesson's sense?",
            options: [
              "A guardian who wants the story told for a grievance or a case",
              "A guardian who is anxious about how their child will appear",
              "A guardian who asks to review the piece before publication",
              "A guardian who declines to be quoted themselves",
            ],
            correctIndex: 0,
            explanation:
              "It does not make them wrong. It means the person bearing the consequence is not the person seeking the coverage.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "What does the lesson say a reporter should do with a genuine school refusal?",
            options: [
              "Accept it, because FERPA does govern what schools release",
              "Challenge it, since student privacy law does not apply to journalists",
              "Appeal it under the state records act",
              "Interview the student instead and cite the refusal",
            ],
            correctIndex: 0,
            explanation:
              "Knowing the difference is what lets a reporter accept the real refusal and decline the imaginary one about a sidewalk conversation.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What kind of law is recording consent, in this course's account?",
            options: [
              "State specific",
              "Federal and uniform across all jurisdictions",
              "Set by each outlet's own policy",
              "Determined by the venue where the interview occurs",
            ],
            correctIndex: 0,
            explanation:
              "Along with consent standards and access to school property. Three separate things, each varying.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What does the lesson call the point of asking a young person to explain something to you?",
            options: [
              "Expertise changes the room's posture",
              "It establishes whether their account is reliable",
              "It gives the guardian a chance to observe the exchange",
              "It provides material for the story's opening",
            ],
            correctIndex: 0,
            explanation:
              "Done early, it changes how a young person occupies a conversation that otherwise belongs to the adults in it.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "What does the lesson say about assuming a national rule on interviewing minors?",
            options: [
              "A reporter will get it wrong in either direction",
              "It is safe, because outlet policies converge on the same standard",
              "It is correct for public settings and wrong for school property",
              "It applies only where a state has not legislated",
            ],
            correctIndex: 0,
            explanation:
              "There is no single federal rule forbidding a journalist from speaking with a young person, and consent, recording, and access rules are all state and institution specific.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What does the lesson say a reporter should be honest with themselves about?",
            options: [
              "What the interview can actually produce with a guardian present",
              "Whether the young person's account can be independently verified",
              "Whether the guardian would consent to a separate conversation",
              "How much the story depends on quoting the young person",
            ],
            correctIndex: 0,
            explanation:
              "And to say so in the story if it matters, rather than trying to engineer a separation the policy may forbid.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
        ],
      },
    },
    // ── Section 4 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "what-you-may-promise",
      title: "13 · What you may promise, and what you may not",
      section: "Section 4 · Promises, stopping, and after",
      body: `Every promise you make to an unsought source will be tested, usually by an editor, a lawyer, or a lawsuit. Knowing in advance which ones you can keep is what stops you from making one you cannot.

**Promises you can keep, and should offer.** That you will call before it runs. That you will read their quotations back for accuracy. That you will tell them what happens next and when. That you will correct a factual error promptly and publicly. That you will not use a specific thing they asked you not to use, if you agree at the time. And that you will answer the phone afterward.

**Promises you cannot keep, and must not make.** Copy approval. Control over the headline, the photograph, or where the piece runs. That the story will help them, or change anything. That nobody will react badly. That other outlets will not follow. And that a name will never come out, which is a promise about the world rather than about your own conduct.

**Confidentiality, precisely.** You can promise what YOU will do: not to publish a name, not to describe someone in a way that identifies them, not to hand over material voluntarily. You cannot promise what a court will do, what your employer will do if it is subpoenaed, or what a reader will deduce. Say which of those you are promising, because the difference is exactly where sources get hurt.

**The reason to be careful is legal as well as ethical.** A promise of confidentiality made by a reporter can be enforced against a news organization: in *Cohen v. Cowles Media Co.* (1991), the Supreme Court held the First Amendment does not bar a promissory estoppel claim against a newspaper that named a source it had promised to protect. A promise is a commitment your employer may override and a court may enforce, so make it deliberately and tell the source who else in the newsroom will know.

**Reading quotations back is not copy approval, and the distinction is worth saying out loud.** You are checking that a quotation is accurate and that the person understands what will appear. You are not asking whether they like it and you are not offering to change their meaning because they have thought better of it. Say that when you offer it, and the offer stays safe.

**Write down every promise, verbatim, at the moment you make it.** Which promise, to whom, in what words, and on what date. Six months later, when a lawyer asks, the file that answers is the one you wrote while the person was still in front of you.

:::reveal What can a reporter promise about confidentiality, and what can they not? ||| You can promise what you will do: not to publish a name, not to describe someone identifiably, not to hand over material voluntarily. You cannot promise what a court, an employer, or a reader will do.

:::reveal What did Cohen v. Cowles Media Co. establish about promises to sources? ||| That the First Amendment does not bar a promissory estoppel claim against a news organization that breaks a promise of confidentiality. A promise can be enforced in court.

:::reveal What is the difference between reading quotations back and copy approval? ||| Reading back checks accuracy and understanding. Copy approval asks whether the source likes the piece, and it is not on offer.

## Vocabulary
- **Keepable promise**: a commitment about the reporter's own conduct, such as calling before publication or correcting an error.
- **Unkeepable promise**: a commitment about outcomes the reporter does not control, including headlines, reactions, and other outlets.
- **Promissory estoppel**: the theory under which a broken promise can be enforced, applied to a newsroom's confidentiality promise in Cohen.
- **Reading back**: checking a quotation for accuracy with a source, which is not the same as offering copy approval.

## Sources
- Cohen v. Cowles Media Co., 501 U.S. 663 (1991). https://supreme.justia.com/cases/federal/us/501/663/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "when-to-stop",
      title: "14 · When to stop, and the interview you do not run",
      section: "Section 4 · Promises, stopping, and after",
      body: `Knowing when to end an interview, and when not to publish one you already have, is a professional skill rather than a failure of nerve. It is also almost never taught, which is why reporters improvise it badly under deadline.

**Stop the interview when any of these is true.** The person asks you to. They are in acute distress rather than upset. They are describing being in present danger. They plainly do not understand what they are agreeing to. Or you have realized the interview is producing material you would not publish, in which case continuing is just taking.

**How to stop well.** Say you are going to stop, say why in one sentence, ask whether they want anything they have already said left out, and stay for a minute afterward. Stopping abruptly reads as rejection to a person who has just told you something hard, and the minute afterward costs nothing.

**Deciding not to publish an interview you have.** The considerations are what it adds, what it costs the person, whether they understood what they were agreeing to when they gave it, and whether it can run in a form that costs less. The last one is usually the answer: without a name, without a detail, in a summary rather than a quotation, or as one line rather than a section.

**Say it plainly if you drop it.** A person who gave you a difficult interview and then never heard anything assumes something bad. Tell them it is not running, tell them why in one honest sentence, and thank them. This takes four minutes and it is the difference between a source who would talk to a reporter again and one who will warn everyone they know.

**Do not treat a decision not to publish as a favor you did somebody.** It was a judgment about the story. Framing it as a kindness invites the source to feel indebted, which is not a relationship you want and is not what happened.

**The one thing that is not a reason to stop.** A source becoming upset while telling you something they chose to tell you. Distress and being unable to continue are different states, and treating every tear as a stop signal takes control away from an adult who has decided to say something difficult. Offer a break, follow their answer, and do not decide for them.

**When you are the wrong reporter.** Sometimes the honest call is that this interview should be done by somebody with more experience, more time, or a different relationship to the community. Handing it over is not losing a story; publishing a bad version of it is.

:::reveal Name three conditions under which an interview should be stopped. ||| The person asks, they are in acute distress rather than upset, they describe present danger, they plainly do not understand what they are agreeing to, or the material is something you would not publish.

:::reveal What are the four considerations when deciding not to publish an interview you already have? ||| What it adds, what it costs the person, whether they understood what they were agreeing to, and whether it can run in a form that costs less.

:::reveal Why is a source becoming upset not by itself a reason to stop? ||| Because distress and being unable to continue are different states, and treating every tear as a stop signal takes control away from an adult who chose to say something difficult.

## Vocabulary
- **Stop condition**: one of the named circumstances under which an interview ends regardless of what it is producing.
- **Stopping well**: announcing it, giving one reason, asking what to leave out, and staying a minute.
- **Lower-cost form**: publishing without a name, without a detail, or in summary, when the full version costs too much.
- **The wrong reporter**: recognizing that an interview needs somebody with more time, experience, or standing in a community.

## Sources
- Dart Center for Journalism and Trauma. (n.d.). *Resources for journalists*. Columbia Journalism School. https://dartcenter.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "after-publication",
      title: "15 · After: the follow-through, and the second story",
      section: "Section 4 · Promises, stopping, and after",
      body: `What happens after publication decides whether you have a source, a complaint, or a community that stops talking to your outlet. Most of it is four short tasks nobody schedules.

**Call before it runs.** Not to ask permission, and not to read the piece. To say when it publishes, what it says about them in one sentence, whether a photograph is included, and that you are reachable. The single most common thing an unsought source reports is not that the story was wrong, but that they were surprised by it.

**Send the link, on the day.** Sources should not learn about their own appearance from a relative's message. It takes thirty seconds and it is the cheapest goodwill available in this job.

**Be reachable for a week.** Reaction arrives on a delay: the second day, after a share, after a comment thread. A phone number that reaches a person during that week is worth more than anything you could have added to the piece.

**Correct fast, publicly, and without hedging.** If a detail about them is wrong, fix it and say what was fixed. A correction that is prompt and plain costs an outlet almost nothing and is the only trust signal a reader can independently check.

**What to do when the reaction is bad and the story was right.** Say both true things: that you stand behind the reporting, and that you are sorry it is costing them what it is costing them. Those are not in conflict, and a reporter who can hold them both is the one people will still speak to next year.

**The second story is usually the better one.** Sources you treated well tell you what happened next, and what happened next is frequently the real accountability piece: whether anything changed, what the institution did after the coverage, and who else came forward. A beat, as the first course in this track defines it, is exactly the structure that lets a follow-up exist at all.

**Where this course hands off.** You now have the person's account. Whether it can be confirmed, and what you do when it cannot be, on an hour's notice, is the next course. After that comes the legal frame you have been working inside the whole time: libel, privacy, recording, minors, and shield protections.

:::reveal What is the most common complaint an unsought source makes after publication? ||| Not that the story was wrong, but that they were surprised by it. Which is what the call before it runs exists to prevent.

:::reveal Why be reachable for a week rather than a day? ||| Because reaction arrives on a delay: the second day, after a share, after a comment thread. That week is when a source most needs a number that reaches a person.

:::reveal What are the two true things to say when the reaction is bad and the story was right? ||| That you stand behind the reporting, and that you are sorry it is costing them what it is costing them. They are not in conflict.

## Vocabulary
- **The call before**: a short pre-publication call giving timing, the one-sentence substance, whether there is a photograph, and your contact.
- **Reaction delay**: the pattern by which consequences reach a source over days rather than on publication day.
- **Prompt correction**: fixing an error publicly and plainly, which is the only trust signal a reader can independently verify.
- **The second story**: the follow-up a well-handled source makes possible, which is frequently the real accountability piece.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/
- Dart Center for Journalism and Trauma. (n.d.). *Resources for journalists*. Columbia Journalism School. https://dartcenter.org/`,
    },
    {
      slug: "quiz-promises-stopping-after",
      title: "16 · Knowledge check: promises, stopping, and after",
      section: "Section 4 · Promises, stopping, and after",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Who tests the promises a reporter makes to a source?",
            options: [
              "An editor, a lawyer, or a lawsuit",
              "The source, at the moment of publication",
              "The outlet's readers, through complaints",
              "A professional body reviewing the coverage",
            ],
            correctIndex: 0,
            explanation:
              "Knowing in advance which promises you can keep is what stops you from making one you cannot.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "Which of these is a promise a reporter can keep?",
            options: [
              "That you will call before it runs",
              "That the headline will reflect the interview accurately",
              "That nobody will react badly to the piece",
              "That the story will change something",
            ],
            correctIndex: 0,
            explanation:
              "Along with reading quotations back, saying what happens next, correcting errors promptly, honoring an agreed omission, and answering the phone afterward.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "Which of these is a promise a reporter must not make?",
            options: [
              "Control over the headline or the photograph",
              "A prompt public correction of a factual error",
              "Reading a quotation back for accuracy",
              "Telling the source what happens next and when",
            ],
            correctIndex: 0,
            explanation:
              "Along with copy approval, that the story will help, that nobody will react badly, and that a name will never come out.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What can a reporter honestly promise about confidentiality?",
            options: [
              "What you yourself will do",
              "That the source's identity will never become known",
              "That the outlet will resist any subpoena",
              "That no reader will be able to deduce who it is",
            ],
            correctIndex: 0,
            explanation:
              "Not to publish a name, not to describe someone identifiably, not to hand over material voluntarily. Not what a court, an employer, or a reader will do.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "Why is a promise that a name will never come out an unkeepable one?",
            options: [
              "It is a promise about the world rather than your conduct",
              "Because outlets require every source to be named internally",
              "Because state shield laws do not protect unnamed sources",
              "Because a name always emerges once a story is published",
            ],
            correctIndex: 0,
            explanation:
              "The distinction between what you will do and what will happen is exactly where sources get hurt.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What did Cohen v. Cowles Media Co. establish?",
            options: [
              "The First Amendment does not bar a promissory estoppel claim",
              "That a promise of confidentiality is unenforceable against a publisher",
              "That only the individual reporter, not the outlet, is bound",
              "That confidentiality promises must be made in writing",
            ],
            correctIndex: 0,
            explanation:
              "The 1991 decision concerned a newspaper that named a source it had promised to protect. A promise can be enforced in court.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What follows practically from a promise being enforceable?",
            options: [
              "Make it deliberately and say who else in the newsroom will know",
              "Obtain the outlet's written authorization before making one",
              "Avoid confidentiality promises entirely in field reporting",
              "Record the promise so its terms can be proven later",
            ],
            correctIndex: 0,
            explanation:
              "It is a commitment your employer may override and a court may enforce, which is a reason for care rather than a reason to avoid it.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What is the difference between reading quotations back and copy approval?",
            options: [
              "Reading back checks accuracy; approval asks whether they like it",
              "Reading back happens before filing; approval happens after",
              "Reading back covers quotations; approval covers the whole piece",
              "Reading back is verbal; approval is written",
            ],
            correctIndex: 0,
            explanation:
              "You are not offering to change a meaning because a source has thought better of it, and saying so when you offer keeps the offer safe.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What should be written down at the moment a promise is made?",
            options: [
              "Which promise, to whom, in what words, on what date",
              "The source's signature acknowledging the promise",
              "An editor's approval of the promise's terms",
              "A recording of the exchange for later verification",
            ],
            correctIndex: 0,
            explanation:
              "Six months later, when a lawyer asks, the file that answers is the one written while the person was still in front of you.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "Which promise about outcomes is named as unkeepable?",
            options: [
              "That the story will help them",
              "That you will correct a factual error promptly",
              "That you will not use a specific thing you agreed to omit",
              "That you will answer the phone afterward",
            ],
            correctIndex: 0,
            explanation:
              "Along with control over headlines, photographs, and placement, and that other outlets will not follow.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What kind of skill is knowing when to end an interview?",
            options: [
              "A professional skill, not a failure of nerve",
              "A matter of personal temperament rather than training",
              "An editorial decision that belongs to the desk",
              "A legal judgment requiring counsel",
            ],
            correctIndex: 0,
            explanation:
              "It is also almost never taught, which is why reporters improvise it badly under deadline.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "Which is one of the stop conditions?",
            options: [
              "They describe being in present danger",
              "They ask a question the reporter cannot answer",
              "They become emotional while describing events",
              "They ask how long the interview will take",
            ],
            correctIndex: 0,
            explanation:
              "Along with asking to stop, acute distress rather than upset, plainly not understanding what they are agreeing to, and material you would not publish.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "Why is continuing an interview producing unpublishable material a problem?",
            options: [
              "Continuing is just taking",
              "It wastes the outlet's reporting time",
              "It creates a record that could be subpoenaed",
              "It obliges the reporter to use some of the material",
            ],
            correctIndex: 0,
            explanation:
              "The source is bearing a cost for something that will never appear, which is the definition of extraction.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What does stopping well consist of?",
            options: [
              "Say you are stopping, give one reason, ask what to leave out, stay a minute",
              "End the recording, thank them, and follow up by email",
              "Explain the editorial standards that require ending it",
              "Offer to reschedule for a time that suits them better",
            ],
            correctIndex: 0,
            explanation:
              "Stopping abruptly reads as rejection to a person who has just told you something hard, and the minute afterward costs nothing.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What are the four considerations in deciding not to publish an interview?",
            options: [
              "What it adds, what it costs them, whether they understood, whether it can run smaller",
              "Whether it is accurate, newsworthy, timely, and legally safe",
              "Whether the source consented, was named, was recorded, and was paid",
              "Whether an editor approved it, a lawyer cleared it, and the deadline allows it",
            ],
            correctIndex: 0,
            explanation:
              "The last one is usually the answer: without a name, without a detail, in summary rather than quotation, or as one line rather than a section.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What must a reporter do if an interview is dropped?",
            options: [
              "Tell the source, with one honest reason, and thank them",
              "Say nothing, since an unpublished piece is an internal matter",
              "Offer to place it with another outlet instead",
              "Wait until the source asks, then explain",
            ],
            correctIndex: 0,
            explanation:
              "It takes four minutes, and it is the difference between a source who would talk to a reporter again and one who warns everyone they know.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "Why should a decision not to publish never be framed as a favor?",
            options: [
              "It was a judgment about the story, not a kindness",
              "Because it would create an obligation to publish later",
              "Because it invites a complaint about inconsistent treatment",
              "Because outlets prohibit discussing editorial decisions",
            ],
            correctIndex: 0,
            explanation:
              "Framing it as a kindness invites the source to feel indebted, which is not a relationship you want and is not what happened.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What is NOT by itself a reason to stop an interview?",
            options: [
              "A source becoming upset while telling you something they chose to tell you",
              "A source asking you to stop",
              "A source describing present danger",
              "A source who plainly does not understand what they are agreeing to",
            ],
            correctIndex: 0,
            explanation:
              "Distress and being unable to continue are different states, and treating every tear as a stop signal takes control away from an adult.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What does the lesson recommend when you are the wrong reporter for an interview?",
            options: [
              "Hand it over",
              "Proceed, since a filed story beats an unfiled one",
              "Bring a second reporter to the same interview",
              "Postpone until you have more experience",
            ],
            correctIndex: 0,
            explanation:
              "Handing it over is not losing a story. Publishing a bad version of it is.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What is the purpose of the call before it runs?",
            options: [
              "Timing, the one-sentence substance, whether there is a photograph, and your contact",
              "Asking permission to publish the material as written",
              "Reading the piece so the source can propose changes",
              "Confirming that the source has not changed their account",
            ],
            correctIndex: 0,
            explanation:
              "Not to ask permission and not to read the piece. The most common complaint is surprise rather than inaccuracy.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "What is the most common complaint an unsought source makes after publication?",
            options: [
              "That they were surprised",
              "That they were quoted out of context",
              "That the story was too short",
              "That they were named when they expected anonymity",
            ],
            correctIndex: 0,
            explanation:
              "Which is what the pre-publication call exists to prevent, at a cost of about two minutes.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "When should the link be sent?",
            options: [
              "On the day",
              "Within a week, once initial reaction has settled",
              "Only if the source asks for it",
              "After any corrections have been made",
            ],
            correctIndex: 0,
            explanation:
              "Sources should not learn about their own appearance from a relative's message. It takes thirty seconds.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "How long should a reporter stay reachable after publication?",
            options: [
              "About a week",
              "Twenty-four hours, which is when reaction peaks",
              "Until the next story publishes",
              "Indefinitely, through the outlet's general contact address",
            ],
            correctIndex: 0,
            explanation:
              "Reaction arrives on a delay: the second day, after a share, after a comment thread.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "How should a correction about a source be handled?",
            options: [
              "Fast, publicly, and saying what was fixed",
              "Quietly, so the error does not attract further attention",
              "After the outlet's legal review has concluded",
              "Only if the source formally requests it in writing",
            ],
            correctIndex: 0,
            explanation:
              "A prompt plain correction costs an outlet almost nothing and is the only trust signal a reader can independently check.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "What two things does a reporter say when the reaction is bad and the story was right?",
            options: [
              "That you stand behind the reporting, and that you are sorry it is costing them",
              "That the story was reviewed by editors, and that complaints go to the desk",
              "That the reaction was foreseeable, and that they were warned",
              "That the piece will be updated, and that a follow-up is planned",
            ],
            correctIndex: 0,
            explanation:
              "They are not in conflict, and a reporter who can hold both is the one people will still speak to next year.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "Why is the second story usually the better one?",
            options: [
              "Well-treated sources tell you what happened next",
              "Because the first story establishes the outlet's credibility",
              "Because follow-ups face less legal scrutiny",
              "Because readers engage more with continuing coverage",
            ],
            correctIndex: 0,
            explanation:
              "Whether anything changed, what the institution did after the coverage, and who else came forward, is frequently the real accountability piece.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "What structure makes a follow-up possible at all?",
            options: [
              "A beat",
              "A standing records request with the relevant agency",
              "A retainer arrangement with the source",
              "An editor's commitment to a series",
            ],
            correctIndex: 0,
            explanation:
              "As the first course in this track defines it: a territory held over time, which is what lets a second story exist.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "What does this course hand off to the next one?",
            options: [
              "Whether the account can be confirmed, and what to do when it cannot",
              "How to file a records request for the underlying documents",
              "How to read a data report against its own tables",
              "How to pitch the enterprise version of the story",
            ],
            correctIndex: 0,
            explanation:
              "On an hour's notice. After that comes the legal frame: libel, privacy, recording, minors, and shield protections.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "Which comes after verification in the track's order?",
            options: [
              "The legal frame you have been working inside",
              "Solutions journalism and what it is not",
              "The pitch and the shapes a story can take",
              "The capstone on a beat of your own",
            ],
            correctIndex: 0,
            explanation:
              "Libel, privacy, recording, minors, and shield protections, which the interviewing course has been touching at the edges throughout.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "What is a keepable promise?",
            options: [
              "A commitment about the reporter's own conduct",
              "A commitment approved in advance by an editor",
              "A commitment recorded in writing at the time",
              "A commitment the source can enforce in court",
            ],
            correctIndex: 0,
            explanation:
              "Calling before publication, reading quotations back, correcting errors, and answering the phone are all things a reporter controls.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What is an unkeepable promise?",
            options: [
              "A commitment about outcomes the reporter does not control",
              "A commitment made without the outlet's knowledge",
              "A commitment made verbally rather than in writing",
              "A commitment about material that has already been published",
            ],
            correctIndex: 0,
            explanation:
              "Headlines, photographs, placement, reactions, other outlets, and whether a name eventually emerges.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What should a reporter say when offering to read quotations back?",
            options: [
              "That it is for accuracy, not approval",
              "That the source may substitute a better phrasing",
              "That the desk will decide whether changes are accepted",
              "That the offer is contingent on the deadline allowing it",
            ],
            correctIndex: 0,
            explanation:
              "Saying it when you offer is what keeps the offer safe from becoming copy approval by drift.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What is a lower-cost form of publication?",
            options: [
              "Without a name, without a detail, or in summary",
              "In a shorter piece placed lower on the page",
              "Behind a paywall so fewer people see it",
              "As an anonymous account with no attribution at all",
            ],
            correctIndex: 0,
            explanation:
              "It is usually the answer when the full version costs a source too much, and it is available more often than reporters assume.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What does a source who gave a difficult interview and heard nothing assume?",
            options: [
              "Something bad",
              "That the story was postponed",
              "That the reporter was reassigned",
              "That the material was not useful",
            ],
            correctIndex: 0,
            explanation:
              "Which is why telling them it is not running, with one honest reason and a thank you, takes four minutes and matters.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What does the lesson say about improvising the decision to stop?",
            options: [
              "Reporters do it badly under deadline because it is never taught",
              "It is the only way to respond to the person in front of you",
              "It is safer than a pre-set rule, which can be too rigid",
              "It should be delegated to the editor by phone",
            ],
            correctIndex: 0,
            explanation:
              "Which is the argument for naming the stop conditions in advance rather than discovering them in the room.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "Why does the follow-through matter to an outlet rather than only to a reporter?",
            options: [
              "It decides whether a community keeps talking to the outlet",
              "It reduces the outlet's exposure to legal claims",
              "It satisfies a requirement in most professional codes",
              "It generates measurable audience engagement",
            ],
            correctIndex: 0,
            explanation:
              "What happens after publication decides whether you have a source, a complaint, or a community that stops answering.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "What is reaction delay?",
            options: [
              "Consequences reaching a source over days rather than on publication day",
              "The interval between filing and publication",
              "The time an outlet takes to respond to a complaint",
              "The lag between a correction and its appearance",
            ],
            correctIndex: 0,
            explanation:
              "The second day, after a share, after a comment thread, which is why the reachable week matters more than the reachable day.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "What does the lesson call the cheapest goodwill available in the job?",
            options: [
              "Sending the link on the day",
              "Offering to read quotations back",
              "Calling before the piece runs",
              "Correcting an error promptly",
            ],
            correctIndex: 0,
            explanation:
              "Thirty seconds, and it prevents a source learning about their own appearance from a relative's message.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "How many tasks does the after-publication lesson describe, and what is notable about them?",
            options: [
              "Four short ones nobody schedules",
              "Two long ones the desk usually handles",
              "One, repeated across several days",
              "Six, all requiring editorial approval",
            ],
            correctIndex: 0,
            explanation:
              "The call before, the link on the day, a reachable week, and a fast public correction.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "What can a reporter promise about a specific thing a source asked them not to use?",
            options: [
              "That you will not use it, if you agree at the time",
              "That you will consult them before deciding",
              "That the desk will consider their request",
              "Nothing, since omissions are editorial decisions",
            ],
            correctIndex: 0,
            explanation:
              "It is a keepable promise about your own conduct, which is what makes it safe to give.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What does the lesson say about promising that other outlets will not follow?",
            options: [
              "You cannot promise it",
              "You can, if you hold the story exclusively",
              "You should, since it reassures an anxious source",
              "You may, provided you name the outlets you have checked",
            ],
            correctIndex: 0,
            explanation:
              "It is an outcome outside the reporter's control, which is the test that sorts keepable promises from unkeepable ones.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What is the point of writing a promise down verbatim?",
            options: [
              "The file answers when a lawyer asks six months later",
              "It converts a verbal promise into an enforceable one",
              "It allows the outlet to review the promise before publication",
              "It provides evidence the source can rely on in a dispute",
            ],
            correctIndex: 0,
            explanation:
              "Which promise, to whom, in what words, on what date, written while the person was still in front of you.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What is the stop condition about understanding?",
            options: [
              "They plainly do not understand what they are agreeing to",
              "They ask the reporter to explain the story again",
              "They disagree with how the reporter has described the events",
              "They request time to consider before answering",
            ],
            correctIndex: 0,
            explanation:
              "It sits alongside asking to stop, acute distress, present danger, and material you would not publish.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "Why stay a minute after ending an interview early?",
            options: [
              "Abrupt stopping reads as rejection",
              "Because the recorder must be formally switched off",
              "Because the source may want to add material",
              "Because leaving quickly suggests the material was unusable",
            ],
            correctIndex: 0,
            explanation:
              "To a person who has just told you something hard, and the minute costs nothing.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What is the reporter offering when they say they will call before it runs?",
            options: [
              "Not to be surprised",
              "A chance to withdraw the interview",
              "An opportunity to change quotations",
              "A veto over the photograph used",
            ],
            correctIndex: 0,
            explanation:
              "Almost nobody asks for anything unreasonable at that point. What they usually want is exactly this.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "Which promise concerns the reporter's availability?",
            options: [
              "That you will answer the phone afterward",
              "That you will report only what the source confirms",
              "That the outlet will assign the same reporter to follow-ups",
              "That the piece will not be updated without notice",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the six keepable promises, and it is the one the reachable-week task operationalizes.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What does the lesson say about handing an interview to a more experienced reporter?",
            options: [
              "It is not losing a story",
              "It should be avoided, since it breaks the source relationship",
              "It requires the source's written agreement",
              "It is only appropriate for interviews involving minors",
            ],
            correctIndex: 0,
            explanation:
              "Publishing a bad version of it is losing the story. Handing it over is not.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "Which is a stop condition about the material rather than the person?",
            options: [
              "You have realized you would not publish it",
              "The account cannot be corroborated by any document",
              "The account contradicts another source's version",
              "The material duplicates what is already published",
            ],
            correctIndex: 0,
            explanation:
              "Continuing at that point is just taking, because the source bears a cost for something that will never appear.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What does the lesson say a prompt correction costs an outlet?",
            options: [
              "Almost nothing",
              "Credibility with the audience that read the original",
              "A legal admission that can be used against it",
              "The relationship with the institution it covers",
            ],
            correctIndex: 0,
            explanation:
              "And it is the only trust signal a reader can independently check, which is why it is fast, public, and unhedged.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "What does a well-handled source make possible on a beat?",
            options: [
              "The follow-up that becomes the accountability piece",
              "An exclusive arrangement for future stories",
              "A reduced need to corroborate future accounts",
              "An introduction to the institution's leadership",
            ],
            correctIndex: 0,
            explanation:
              "Whether anything changed, what the institution did next, and who else came forward.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "Which promise is described as a promise about the world?",
            options: [
              "That a name will never come out",
              "That you will not publish a name",
              "That you will not hand over material voluntarily",
              "That you will not describe someone identifiably",
            ],
            correctIndex: 0,
            explanation:
              "The other three are promises about the reporter's own conduct, which is what makes them keepable.",
            sourceLessonSlug: "what-you-may-promise",
          },
        ],
      },
    },
    {
      slug: "final-interviewing",
      title: "17 · Final: interviewing people who did not seek this",
      section: "Section 4 · Promises, stopping, and after",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What defines a source who did not seek this?",
            options: [
              "They cannot predict what publication will do to them",
              "They have refused to speak to other outlets first",
              "They insist on anonymity as a condition of speaking",
              "They are describing events they did not witness",
            ],
            correctIndex: 0,
            explanation:
              "A person who cannot forecast the consequence of speaking cannot weigh it, and weighing it is what consent is.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "Name the three asymmetries in this kind of interview.",
            options: [
              "Knowledge of journalism, consequence afterward, and control of the piece",
              "Access to documents, legal advice, and editorial support",
              "Time available, deadline pressure, and subject expertise",
              "Age, experience, and institutional standing",
            ],
            correctIndex: 0,
            explanation:
              "None is a reason to avoid the interview. All are reasons the procedure has to be different.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "Does minimizing harm mean not publishing what hurts someone?",
            options: [
              "No, it governs conduct, collection, and use",
              "Yes, where the harm is foreseeable and avoidable",
              "Yes, where the source objects before publication",
              "Only where the source is a minor or is inexperienced",
            ],
            correctIndex: 0,
            explanation:
              "Accurate reporting harms people routinely and that is the job.",
            sourceLessonSlug: "who-did-not-seek-this",
          },
          {
            prompt: "What are the five disclosures made before an interview?",
            options: [
              "Identity, subject, use, limits, and remaining choices",
              "Deadline, outlet, editor, photographer, and publication date",
              "Recording, attribution, embargo, corrections, and complaints",
              "Risk, benefit, alternatives, confidentiality, and withdrawal",
            ],
            correctIndex: 0,
            explanation:
              "Under two minutes, in plain conversation, before recording starts, with a note in your file of what you said.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "Which disclosure do inexperienced sources most reliably not know?",
            options: [
              "Permanence",
              "That the reporter may record the conversation",
              "That other people are being interviewed",
              "That the outlet has a corrections policy",
            ],
            correctIndex: 0,
            explanation:
              "Findable by search, not removable later, and potentially picked up by other outlets. It is the disclosure that most often changes an answer.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "When must consent be re-asked?",
            options: [
              "When the story changes materially",
              "Whenever more than a month passes before publication",
              "Each time another source is added",
              "Only when the source requests a further conversation",
            ],
            correctIndex: 0,
            explanation:
              "Especially when it turns toward the source's own conduct, and the second conversation is often where the real interview happens.",
            sourceLessonSlug: "informed-consent",
          },
          {
            prompt: "What are the four risk-assessment questions?",
            options: [
              "Cost, retaliation, identifiability, and capacity to decide now",
              "Accuracy, newsworthiness, timeliness, and legal exposure",
              "Availability, willingness, credibility, and corroboration",
              "Setting, timing, accompaniment, and recording",
            ],
            correctIndex: 0,
            explanation:
              "Job, housing, custody, status, or safety; whether anyone would retaliate; whether detail identifies them; and whether they are inside the emergency.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Why is withholding a name not the same as protecting an identity?",
            options: [
              "Detail identifies a person to everyone who knows them",
              "Because a name can be recovered from a photograph",
              "Because unnamed sources must be disclosed to editors",
              "Because a court can compel disclosure of any name",
            ],
            correctIndex: 0,
            explanation:
              "A job title, a street, a number of children, and a date, and those people are exactly the ones who can cause harm.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Who chooses where and when this kind of interview happens?",
            options: [
              "The source",
              "The reporter, for recording quality",
              "The outlet, under its field safety policy",
              "Whoever introduced the two parties",
            ],
            correctIndex: 0,
            explanation:
              "Their place, a quiet public place, or a call at a time they name, with whoever they want present.",
            sourceLessonSlug: "preparation-and-risk",
          },
          {
            prompt: "Why is an out-of-sequence, fragmentary account not suspicious?",
            options: [
              "That is how accounts of frightening events characteristically come out",
              "Because sources rarely remember timing under any circumstances",
              "Because sequence is reconstructed by the reporter anyway",
              "Because documents supply the timeline more reliably",
            ],
            correctIndex: 0,
            explanation:
              "Order is the first thing to go, and vivid sensory detail attaches unevenly across moments.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "How should a change in peripheral detail between tellings be treated?",
            options: [
              "As expected, since recollection is reconstructive",
              "As a contradiction requiring the account to be dropped",
              "As grounds to challenge the source directly",
              "As evidence the source has been coached",
            ],
            correctIndex: 0,
            explanation:
              "A change in the CENTRAL event is a different signal and worth pursuing carefully. Verification itself does not relax.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "What two sentences should a reporter never say?",
            options: [
              "I understand how you feel, and this will help other people",
              "I am trying to get this right, and I will call before it runs",
              "You can stop at any time, and you can decline any question",
              "This may be difficult, and we can take a break",
            ],
            correctIndex: 0,
            explanation:
              "You do not, and you cannot promise it. Say instead what is true and inside your control.",
            sourceLessonSlug: "what-trauma-does",
          },
          {
            prompt: "How many trauma-informed principles are there, and which does not translate?",
            options: [
              "Six, and peer support does not",
              "Four, and cultural context does not",
              "Six, and safety does not",
              "Five, and all translate directly",
            ],
            correctIndex: 0,
            explanation:
              "Peer support belongs to services. What a reporter can do is know what local support exists and name it if asked.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What is the highest-yield question in this kind of interview?",
            options: [
              "What do you think I should be asking about",
              "How did that make you feel",
              "What would you like readers to know",
              "Is there anything else you want to add",
            ],
            correctIndex: 0,
            explanation:
              "A person who has lived the subject knows which question everyone gets wrong, and almost nobody has asked them.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What does a reporter do if a source says they are in danger?",
            options: [
              "Stop, and give them a number for somebody whose job it is",
              "Ask a careful follow-up to establish the details",
              "Continue, and note the disclosure for the story",
              "Contact the authorities on their behalf",
            ],
            correctIndex: 0,
            explanation:
              "A reporter is not providing care and is not assessing anyone's condition, which the course states repeatedly.",
            sourceLessonSlug: "six-principles",
          },
          {
            prompt: "What is signposting, and what does it cost?",
            options: [
              "Naming the next subject and offering to defer it, at four seconds",
              "Summarizing an answer before the next question, at a minute",
              "Marking the recording for later transcription, at no cost",
              "Telling the source which quotes will be used, at some risk",
            ],
            correctIndex: 0,
            explanation:
              "It removes the ambush, which otherwise produces either silence or an answer the source will regret.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "When is the stop rule tested?",
            options: [
              "The first time a source uses it",
              "When the reporter is closest to the material they need",
              "At the close of the interview",
              "After publication, when the source sees the piece",
            ],
            correctIndex: 0,
            explanation:
              "Honoring it instantly is what makes it real. Hesitating tells the source it was decoration.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What does a deliberate close consist of?",
            options: [
              "Anything to add, what happens next, contact, and permission to change their mind",
              "A summary of the quotations and their placement in the piece",
              "A signed acknowledgment that the interview took place",
              "A scheduled follow-up and an agreed publication date",
            ],
            correctIndex: 0,
            explanation:
              "Stopping the recorder and leaving is described as the most common small cruelty in this kind of work.",
            sourceLessonSlug: "control-and-choice",
          },
          {
            prompt: "What governs interviewing a young person?",
            options: [
              "Editorial policy and state-specific law",
              "One federal statute applying nationwide",
              "The professional code alone",
              "Whichever institution owns the property",
            ],
            correctIndex: 0,
            explanation:
              "Consent standards, recording law, and access rules are all state and institution specific. Find your outlet's policy, your state's law, and the institution's rules first.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What does FERPA govern, and what is it misused to claim?",
            options: [
              "What schools may release, not what a student may say",
              "What reporters may publish about minors",
              "Whether a minor may consent to being recorded",
              "Whether a school may bar reporters from its property",
            ],
            correctIndex: 0,
            explanation:
              "Knowing the difference lets a reporter accept a genuine refusal and decline an imaginary one about a sidewalk conversation.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What is assent, and how is it obtained?",
            options: [
              "The young person's own agreement, asked separately with refusal made easy",
              "A guardian's countersignature on a release",
              "A verbal confirmation recorded at the interview's start",
              "An editor's approval to interview a minor",
            ],
            correctIndex: 0,
            explanation:
              "A reporter with a signed permission and a teenager who plainly does not want to talk has an interview they should not do.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What does guardian permission settle?",
            options: [
              "That a responsible adult knows and agrees the interview is happening",
              "That the young person understands what publication means",
              "That the guardian's interest matches the young person's",
              "That the story will be good for the family",
            ],
            correctIndex: 0,
            explanation:
              "It settles one thing and none of the other three, which matters most when the guardian is part of what the story is about.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "Why is identification more durable for a young person?",
            options: [
              "Searchable by classmates now and by employers in ten years",
              "Because minors cannot request removal of published material",
              "Because schools archive coverage of their students",
              "Because outlets rarely correct pieces involving minors",
            ],
            correctIndex: 0,
            explanation:
              "And a first name with an age and a town can identify a student inside one school.",
            sourceLessonSlug: "minors-and-guardians",
          },
          {
            prompt: "What is the most common failure with a guardian in the room?",
            options: [
              "The guardian answers questions addressed to the young person",
              "The young person defers every answer to the guardian",
              "The guardian objects to the subject matter",
              "The interview overruns the agreed time",
            ],
            correctIndex: 0,
            explanation:
              "Stating the arrangement at the start prevents most of it, and gentle repeated redirection handles the rest.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Why interview the guardian properly, ideally first?",
            options: [
              "They interrupt less, and their account is worth having",
              "Their permission is not valid until they are interviewed",
              "It establishes whether their interests diverge",
              "Outlets require an on-record statement from a guardian",
            ],
            correctIndex: 0,
            explanation:
              "Giving them a real section of the interview solves a craft problem rather than an ethical one.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Where policy permits a separate conversation with a young person, how is it done?",
            options: [
              "Visibly, in the same building, with the guardian's knowledge",
              "Privately, so the young person can speak freely",
              "By telephone afterward without the guardian present",
              "Through a trusted intermediary who relays the answers",
            ],
            correctIndex: 0,
            explanation:
              "Never arranged around the guardian. Engineering private access to a young person is career-ending and deserves to be.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Why does the motive check carry extra weight when a guardian sought the coverage?",
            options: [
              "The person bearing the consequence is not the person seeking it",
              "Because guardians rarely disclose their reasons accurately",
              "Because a guardian's motive affects the legal validity of consent",
              "Because outlets require documented motives for minors' stories",
            ],
            correctIndex: 0,
            explanation:
              "A grievance, a campaign, or a case does not make a guardian wrong. It changes who is exposed by publication.",
            sourceLessonSlug: "the-guardian-in-the-room",
          },
          {
            prompt: "Name two effects of inexperience on a source.",
            options: [
              "Over-disclosure and agreeing with the reporter's framing",
              "Withholding and contradicting themselves",
              "Delay and consultation with others",
              "Recording the interview and demanding a transcript",
            ],
            correctIndex: 0,
            explanation:
              "With answering out of politeness and believing they can take something back later.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What is the correction when a source volunteers something damaging and irrelevant?",
            options: [
              "Say it is not what you asked about and ask if it is on the record",
              "Record it and decide during editing",
              "Use it, since it was freely volunteered",
              "End the interview to prevent further disclosure",
            ],
            correctIndex: 0,
            explanation:
              "You lose almost nothing and keep a source. Quietly banking it is taking rather than being given.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "Which question produces the source's own words?",
            options: [
              "How would you describe it",
              "Would you say it was chaotic",
              "Was it as bad as reported",
              "Did it feel overwhelming",
            ],
            correctIndex: 0,
            explanation:
              "The alternatives return your own word in quotation marks, which is less accurate and worse writing.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What do institutionally exposed sources frequently not know?",
            options: [
              "That detail identifies them and employers see social accounts",
              "That reporters can be compelled to name them",
              "That their employer must be asked for comment",
              "That recordings are retained after publication",
            ],
            correctIndex: 0,
            explanation:
              "Losing a quote is cheaper than costing someone a job they did not know they were risking.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What most improves an interview with an inexperienced source?",
            options: [
              "Explaining how the story will be assembled",
              "Recording rather than taking notes",
              "Meeting in person rather than by phone",
              "Sending questions in advance",
            ],
            correctIndex: 0,
            explanation:
              "Where their words sit, what else is in it, who else you are talking to, and roughly when it runs.",
            sourceLessonSlug: "never-been-interviewed",
          },
          {
            prompt: "What can a reporter honestly promise about confidentiality?",
            options: [
              "What you yourself will do",
              "That the identity will never become known",
              "That the outlet will resist a subpoena",
              "That no reader will deduce who it is",
            ],
            correctIndex: 0,
            explanation:
              "Not what a court, an employer, or a reader will do. The difference is exactly where sources get hurt.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "What did Cohen v. Cowles Media Co. establish about a broken promise?",
            options: [
              "The First Amendment does not bar a promissory estoppel claim",
              "That confidentiality promises bind reporters but not publishers",
              "That such promises must be in writing to be enforceable",
              "That a named source has no remedy under state law",
            ],
            correctIndex: 0,
            explanation:
              "So a promise is a commitment your employer may override and a court may enforce, which is a reason to make it deliberately.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "How does reading quotations back differ from copy approval?",
            options: [
              "It checks accuracy rather than whether they like it",
              "It happens after filing rather than before",
              "It covers the whole piece rather than the quotations",
              "It is written rather than verbal",
            ],
            correctIndex: 0,
            explanation:
              "Saying so when you offer is what keeps the offer from becoming approval by drift.",
            sourceLessonSlug: "what-you-may-promise",
          },
          {
            prompt: "Which is a stop condition?",
            options: [
              "They plainly do not understand what they are agreeing to",
              "They become emotional describing the events",
              "They ask how long the interview will take",
              "They decline to answer a particular question",
            ],
            correctIndex: 0,
            explanation:
              "With asking to stop, acute distress, present danger, and material you would not publish.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "Why is a source becoming upset not by itself a reason to stop?",
            options: [
              "Distress and being unable to continue are different states",
              "Because upset sources give more usable material",
              "Because stopping would waste the source's effort",
              "Because the reporter cannot assess a source's state",
            ],
            correctIndex: 0,
            explanation:
              "Treating every tear as a stop signal takes control away from an adult who chose to say something difficult. Offer a break and follow their answer.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What must happen if an interview is dropped?",
            options: [
              "Tell them, give one honest reason, and thank them",
              "Say nothing, since unpublished work is internal",
              "Offer the material to another outlet",
              "Wait for the source to ask",
            ],
            correctIndex: 0,
            explanation:
              "Four minutes, and it is the difference between a source who would speak to a reporter again and one who warns everyone they know.",
            sourceLessonSlug: "when-to-stop",
          },
          {
            prompt: "What is the most common complaint after publication, and what prevents it?",
            options: [
              "Surprise, prevented by the call before it runs",
              "Inaccuracy, prevented by reading quotations back",
              "Exposure, prevented by withholding a name",
              "Delay, prevented by giving a publication date",
            ],
            correctIndex: 0,
            explanation:
              "Timing, the one-sentence substance, whether there is a photograph, and that you are reachable.",
            sourceLessonSlug: "after-publication",
          },
          {
            prompt: "What two things does a reporter say when the reaction is bad and the reporting was right?",
            options: [
              "That you stand behind it, and that you are sorry what it is costing them",
              "That the piece was reviewed, and that complaints go to the desk",
              "That the reaction was foreseeable, and that they were warned",
              "That an update is coming, and that a follow-up is planned",
            ],
            correctIndex: 0,
            explanation:
              "They are not in conflict, and holding both is what keeps a source talking to you next year.",
            sourceLessonSlug: "after-publication",
          },
        ],
      },
    },
  ],
};
