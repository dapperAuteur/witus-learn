// Authored "Oral history" — STORY-T4, the last rung of the True track (docs/storytelling-curriculum.md).
//
// WHY IT IS LAST ON THE TRACK, and it is not difficulty. Civic documentation records a public event,
// news reports on one, documentary follows one over time; all three point the camera OUTWARD at
// something that happened. Oral history points it at a PERSON REMEMBERING, which means the primary
// evidence is memory itself, and memory is not a recording. That is the discipline's whole
// intellectual content, and it lands hardest after a learner has spent three courses assuming that
// accuracy means correspondence to an event.
//
// The distinctive claim of the field, and the one this course is built on: an oral history is not a
// worse version of a document. It is a DIFFERENT KIND of evidence, and the places where memory
// diverges from the record are frequently the most informative part of it (Portelli's argument, and
// the one that made oral history academically respectable rather than merely charming).
//
// SOURCING. Portelli for the theory, Ritchie for the practice, Yow for the interpersonal and ethical
// dimension, and the Oral History Association's own Principles and Best Practices for the standard a
// learner would be held to if they deposited an interview anywhere. Where the field disagrees, the
// course says so rather than picking a side quietly.
//
// The six spine terms are used unchanged; the field's own vocabulary (narrator, deed of gift,
// life review) is named and mapped back.

import type { AuthoredCourse } from "./authored-course";

export const ORAL_HISTORY_COURSE: AuthoredCourse = {
  title: "Oral history",
  description:
    "Oral history is the only form in this series whose primary evidence is a person remembering, which makes it the one where being wrong is sometimes the most valuable thing in the recording. This course covers what an oral history is and what it is not, why the word is narrator rather than subject, memory as evidence rather than as unreliable testimony, research before the interview, the life-review interview and the long silences it needs, equipment and metadata that will outlive your laptop, the legal and ethical layer of the deed of gift, transcription and the choices it forces, interviewing family and interviewing about trauma, and what an archive owes a narrator decades later. Built on the six decisions from How Stories Work, using the Oral History Association's published standard rather than a private house style.",
  lessons: [
    {
      slug: "oh-what-it-is",
      title: "1 · What an oral history is, and what it is not",
      section: "Module 1 · The discipline",
      body: `**An oral history is a recorded, preserved, in-depth interview with someone about their own experience, made and kept so that people who are not you can use it later.** Every clause in that sentence is doing work, and dropping any one of them produces something else:

| Drop | And you have |
| --- | --- |
| **Recorded** | A conversation. Real, valuable, and gone |
| **Preserved** | A file on a laptop that will fail |
| **In-depth** | An interview, which is a different and shorter thing |
| **Their own experience** | Journalism, or an expert interview |
| **For others to use** | A private keepsake, which is fine and is not this |

**What it is not, stated plainly**, because each confusion produces a specific failure:

- **Not journalism.** A reporter asks what is needed for a story that already has a shape. An oral historian asks what the narrator has, and the shape comes after.
- **Not a documentary interview.** That is raw material for a film. **An oral history is the finished object.** Nobody is going to cut it down; the recording IS the product.
- **Not a deposition.** You are not establishing facts for adjudication, and treating a narrator like a witness is the fastest way to end an interview early.
- **Not a genealogy questionnaire.** Names and dates are the least of it, and a form-driven session reliably produces a form-shaped answer.

**Narrator, not subject, and not interviewee.** The field's own word is deliberate. A subject is something you study; an interviewee is somebody answering. **A narrator is the author of the account**, and the word is a standing reminder that the story belongs to them and you are its custodian. This course uses it throughout.

**Where the six decisions land, and where they bend.** The change, the owner, want and obstacle, withholding, scene and summary, the turn: all of them apply, and one applies differently. **You do not choose the owner. The narrator is the owner, always.** Your craft is helping them find the change in their own account, not deciding what it was.

**The one thing that separates this from everything else in the True track.** In civic documentation, news and documentary, accuracy means correspondence to an event. **Here the primary evidence is a person remembering**, and a memory is not a recording of an event: it is a thing made now, about then. The next lesson is entirely about why that is a feature.

:::reveal Why does the field say narrator rather than subject or interviewee? ||| Because a subject is something you study and an interviewee is somebody answering your questions, while a narrator is the author of the account. The word is a standing reminder that the story belongs to the person telling it and that you are its custodian rather than its owner. It also changes practice: it is the reason the interview follows what they have rather than a list you brought, and the reason the deed of gift is a transfer from them rather than a formality you collect.

## Sources
- Ritchie, D. A. (2015). *Doing oral history* (3rd ed.). Oxford University Press.
- Oral History Association. (2018). *OHA principles and best practices*. Oral History Association.`,
    },
    {
      slug: "oh-memory-as-evidence",
      title: "2 · Memory as evidence, including when it is wrong",
      section: "Module 1 · The discipline",
      recallContent: [
        {
          prompt: "Which of the six decisions does oral history NOT let you make, and who makes it?",
          answer:
            "The owner. The narrator is always the owner of their own account. Your craft is helping them find the change in it, not deciding what the change was.",
        },
      ],
      body: `Here is the finding that made the field intellectually serious rather than merely warm.

**In the 1970s, Alessandro Portelli interviewed workers in Terni, Italy, about the 1949 death of Luigi Trastulli, a steelworker killed by police.** Trastulli died during a street demonstration against NATO. But many of the workers Portelli interviewed remembered him dying years later, in 1953, during the mass layoffs and the violent clashes that followed.

**They were wrong about the date, and Portelli's argument is that the error is the most valuable thing in the recording.** The community had relocated the death to the moment that mattered to them, the layoffs, because that is where the death made sense as part of their own history. **The mistake is not noise in the data. It is the data**, and it tells you something a correct date never could: what that community understood its own defeat to be (Portelli, 1991).

**The general principle:** an oral history's value is not only in what it says happened. It is also in what the narrator believes, how they organise it, what they emphasise, and what they cannot say. **The divergence between memory and record is a finding, not a defect.**

**What this does NOT license**, and the distinction matters:

- **It does not make accuracy irrelevant.** You still check what is checkable, and you still note the divergence rather than quietly smoothing it.
- **It does not mean every error is meaningful.** Some people simply misremember a year. **The interpretive claim requires evidence**, usually a pattern across narrators, exactly as Portelli had.
- **It does not license you to correct them in the recording.** Which is the practical rule this lesson exists to produce.

**So what do you do when a narrator says something you know is wrong?**

1. **Do not argue.** You are recording their account, and a corrected narrator becomes a careful narrator, which is the end of the useful part of the session.
2. **You may ask, neutrally, once.** "I have seen that dated differently, do you remember it as spring or autumn?" gives them room without a verdict.
3. **Record it as they said it.** Always.
4. **Note the divergence in the metadata**, where a future user will find it. That is the honest place: not in the recording, not silently nowhere.

**And the harder case: what if the narrator is not merely mistaken but is claiming credit that was not theirs, or denying something that happened?** Same practice, and the note in the metadata carries more weight. **You are not the arbiter, and you are also not a laundry.** The record you leave should let a later user see the problem you saw.

:::reveal A narrator dates an event four years later than the documented record. What do you do in the room, and where does the discrepancy go? ||| In the room: do not argue, ask neutrally at most once ("I have seen that dated differently, do you remember it as spring or autumn?"), and record the answer exactly as they give it. The discrepancy goes in the metadata, where a future user will find it, rather than into the recording or into nowhere. The reason is the Trastulli case: a memory relocated to the moment that made sense to the community is evidence about what that community understood its history to be, and correcting it in the room would have destroyed the finding.

## Sources
- Portelli, A. (1991). *The death of Luigi Trastulli and other stories: Form and meaning in oral history*. State University of New York Press.
- Yow, V. R. (2015). *Recording oral history: A guide for the humanities and social sciences* (3rd ed.). Rowman & Littlefield.`,
    },
    {
      slug: "oh-before-the-interview",
      title: "3 · Before the interview: research, and the question you have not earned",
      section: "Module 1 · The discipline",
      body: `**The interview is the visible part. The preparation is most of the work**, and an unprepared interviewer spends the session collecting facts they could have looked up, which is the session.

**What to do before you record**

**1. Learn the context, not the person.** The industry, the neighbourhood, the war, the strike, the migration. **You are building the ability to hear what matters when they say it**, and to ask the second question. A narrator saying "then they closed the second shift" means nothing to an interviewer who does not know what the second shift was.

**2. Build a chronology of the checkable.** Dates, places, names, from documents. Not to test them: to orient yourself, and to know which divergences are worth noting later.

**3. Write a topic list, not a questionnaire.** Ten to fifteen areas you hope to cover, in rough life order. **The list is a safety net for the moment you go blank**, and if you work through it in sequence you have run a survey rather than an interview.

**4. Do a pre-interview**, unrecorded, ideally in person, ideally a different day. Explain what this is, what will happen to it, and how long it will take. **Ask what they want to talk about**, which frequently reveals the real material, and note what they mention in passing without elaborating: that is your list of second questions.

**5. Settle the paperwork before you record, not after.** The deed of gift, the recording permissions. A narrator asked to sign at the end feels ambushed by the one document that determines everything.

**The concept worth carrying: the question you have not earned.** Some questions cannot be asked at minute four and can be asked at minute ninety. The grief, the failure, the thing they are ashamed of. **The permission is built by the ninety minutes**, which is why an oral history is long and why the hard material is late.

**What preparation cannot do**, and interviewers who over-prepare get this wrong: it cannot tell you what the interview is about. **You find that out during it**, exactly as in documentary. A topic list held too tightly is a way of not listening.

**Logistics that decide the recording's quality before you press record**

- **Their home, usually.** Comfort beats acoustics.
- **A soft room.** Carpet, curtains, books. Not a kitchen, and not a room with a fridge, a clock, or an air conditioner you will stop hearing after ten minutes and never stop hearing on the recording.
- **Two hours maximum per session, and expect several sessions.** Fatigue is audible, and the third hour is worse than the first hour of a second day.
- **Nobody else in the room.** A spouse, an adult child, a caregiver: each one changes what can be said. When someone must be present, note it, because a future user needs to know who was listening.

:::reveal What is "the question you have not earned", and what does the idea imply about interview length? ||| A question about grief, failure or shame that cannot be asked at minute four but can be asked at minute ninety, because the permission to ask it is built by the intervening time. It implies that an oral history has to be long, and that the hard material belongs late in the session rather than early: an interviewer who front-loads the difficult questions is asking for a rehearsed answer, or for the session to end.

## Sources
- Ritchie, D. A. (2015). *Doing oral history* (3rd ed.). Oxford University Press.
- Yow, V. R. (2015). *Recording oral history: A guide for the humanities and social sciences* (3rd ed.). Rowman & Littlefield.`,
    },
    {
      slug: "oh-quiz-1",
      title: "4 · Knowledge check: the discipline",
      section: "Module 1 · The discipline",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which clause, dropped from the definition, leaves you with journalism?",
            options: [
              "Recorded, so the account survives beyond the conversation itself",
              "About their own experience",
              "Preserved somewhere more durable than the interviewer's own laptop",
              "In-depth, meaning long enough to go past a first rehearsed answer",
            ],
            correctIndex: 1,
            explanation:
              "A reporter asks what a story that already has a shape needs. An oral historian asks what the narrator has, and the shape comes afterwards.",
            sourceLessonSlug: "oh-what-it-is",
          },
          {
            prompt: "How does an oral history differ from a documentary interview?",
            options: [
              "It is conducted by a historian rather than a filmmaker or producer",
              "It is recorded in audio only, never on video, to protect the narrator",
              "The recording is the finished object, not raw material for something else",
              "It requires the narrator's approval of the finished edit before release",
            ],
            correctIndex: 2,
            explanation:
              "Nobody is going to cut it down. That changes everything downstream: metadata, preservation and the deed of gift all exist because the recording itself is what survives.",
            sourceLessonSlug: "oh-what-it-is",
          },
          {
            prompt: "Which of the six decisions does oral history take out of the interviewer's hands?",
            options: [
              "The owner: the narrator owns their own account, always",
              "The turn, which the archive determines when it catalogues the recording",
              "Withholding, since nothing may be held back from a narrator",
              "Scene and summary, which the transcription process fixes",
            ],
            correctIndex: 0,
            explanation:
              "Your craft is helping them find the change in their own account rather than deciding what it was.",
            sourceLessonSlug: "oh-what-it-is",
          },
          {
            prompt: "What did Portelli find about how Terni workers remembered Luigi Trastulli's death?",
            options: [
              "They remembered the police involvement but not the demonstration itself",
              "They disagreed with each other about who was present at the scene",
              "They declined to discuss it with an interviewer from outside the community",
              "Many placed it years later, at the mass layoffs rather than the 1949 protest",
            ],
            correctIndex: 3,
            explanation:
              "The community relocated the death to where it made sense in their own history. Portelli's argument is that the error is the most valuable thing in the recording.",
            sourceLessonSlug: "oh-memory-as-evidence",
          },
          {
            prompt: "What does the Trastulli case establish about a memory that contradicts the record?",
            options: [
              "The divergence can itself be evidence about how a community understands its past",
              "Contradicted memories should be excluded from the deposited recording",
              "The narrator should be shown documents and asked to reconsider on tape",
              "Oral history is unreliable and belongs alongside documentary sources only",
            ],
            correctIndex: 0,
            explanation:
              "The mistake is not noise in the data; it is data. It says what the community understood its own defeat to be, which a correct date never could.",
            sourceLessonSlug: "oh-memory-as-evidence",
          },
          {
            prompt: "What does the memory-as-evidence argument NOT license?",
            options: [
              "Recording an account exactly as the narrator gives it, uncorrected",
              "Treating every factual error as automatically meaningful",
              "Noting a divergence from the documented record in the metadata",
              "Asking a neutral clarifying question once and then moving on",
            ],
            correctIndex: 1,
            explanation:
              "Some people simply misremember a year. An interpretive claim needs evidence, usually a pattern across narrators, exactly as Portelli had.",
            sourceLessonSlug: "oh-memory-as-evidence",
          },
          {
            prompt: "Where does a discrepancy between a narrator's account and the record belong?",
            options: [
              "Corrected on tape, so the recording itself is accurate for later users",
              "In a footnote added to the transcript by the narrator at review",
              "Nowhere: raising it at all undermines the narrator's authority",
              "In the metadata, where a future user of the recording will find it",
            ],
            correctIndex: 3,
            explanation:
              "Not in the recording and not silently nowhere. A later user should be able to see the problem you saw without having to rediscover it.",
            sourceLessonSlug: "oh-memory-as-evidence",
          },
          {
            prompt: "Why research the context rather than the person before an interview?",
            options: [
              "Researching the person in advance is prohibited by the OHA standard",
              "So you can hear what matters when they say it and ask the second question",
              "Because narrators resent an interviewer who knows their biography",
              "To confirm the narrator's account matches the documented record",
            ],
            correctIndex: 1,
            explanation:
              "\"Then they closed the second shift\" means nothing to an interviewer who does not know what the second shift was.",
            sourceLessonSlug: "oh-before-the-interview",
          },
          {
            prompt: "What is a topic list, and how does it differ from a questionnaire?",
            options: [
              "Ten to fifteen areas in rough life order, used as a net when you go blank",
              "A numbered sequence of questions agreed with the narrator beforehand",
              "The list of documents to be gathered before the session begins",
              "A checklist of consent and equipment steps to complete on the day",
            ],
            correctIndex: 0,
            explanation:
              "Worked through in sequence, it becomes a survey rather than an interview. Held too tightly, a list is a way of not listening.",
            sourceLessonSlug: "oh-before-the-interview",
          },
          {
            prompt: "When should the deed of gift and recording permissions be settled?",
            options: [
              "At the end, once the narrator has heard what they actually said",
              "Before recording, so the terms are not sprung on the narrator afterwards",
              "After the transcript is prepared and reviewed by both parties",
              "Only when the recording is accepted by a repository for deposit",
            ],
            correctIndex: 1,
            explanation:
              "A narrator asked to sign at the end feels ambushed by the one document that determines everything about what happens to their account.",
            sourceLessonSlug: "oh-before-the-interview",
          },
        ],
      },
    },
    {
      slug: "oh-the-interview",
      title: "5 · The life-review interview, and the silence",
      section: "Module 2 · Practice",
      recallContent: [
        {
          prompt: "Name three preparation steps that happen before you press record.",
          answer:
            "Any three of: learn the context (not the person); build a chronology of the checkable from documents; write a topic list rather than a questionnaire; do an unrecorded pre-interview and note what they mention in passing; settle the deed of gift and permissions before recording, not after.",
        },
      ],
      body: `The default structure is the **life review**: start at the beginning and move forward. It is not the only structure, and it is the right default for a specific reason. **Chronology is the one order a narrator already has**, so it costs them no effort, and moving through it produces material they would never have offered if asked directly.

**The opening, and it matters more than it looks.** State the date, your name, their name, the place, and the project, on the recording. **Then ask where and when they were born.** It is the least threatening question available, it establishes that this is going to be about them, and it starts the chronology at its actual start.

**The shape of a session**

1. **Origins.** Place, family, childhood. Easy, and it builds the rhythm.
2. **Formation.** School, work, service, migration, the thing that set the direction.
3. **The main matter.** Whatever brought you. **It arrives naturally about here**, and arriving naturally is why it is better than starting with it.
4. **Aftermath and reflection.** What it meant, what they think now.
5. **The open close.** "Is there anything I did not ask about?" **Ask it every time**, and wait. This question produces the most surprising material in oral history with a regularity that stops being coincidence.

**The techniques**

- **Ask open, then follow.** The follow-up is the interview; the prepared question is only its beginning.
- **Ask for the scene.** "What did that room look like?" "Who was there?" "What could you smell?" **Sensory questions unlock memory in a way that summary questions do not**, and they produce material a later user can actually use.
- **Ask about the ordinary.** What they ate, what a shift cost, how they got to work. **Narrators consistently undervalue exactly this material** and it is what historians reach for in fifty years.
- **Follow the emotion, not the fact.** When their voice changes, that is the material. Stay there.

**The silence, again, and here it does more than it did in documentary.** In a documentary interview silence produces a better quote. **In an oral history it produces the material nobody else has**, because a life-review session is long enough that the narrator moves past what they have told before. Wait. Four seconds, not two.

**And the specific thing to do when a narrator cries.** Do not stop recording reflexively, do not apologise, and do not rush to comfort them, all of which say the same thing: that this should not have happened. **Stay quiet, be present, let the pause run.** Then offer, genuinely: "Would you like to stop for a minute?" **Their answer decides it and yours does not.** Most narrators continue, and many say afterwards that it was the part they wanted recorded.

**What to avoid**

- **Talking.** Your voice on the recording should be a small fraction of it. Count it once and you will be humbled.
- **Leading.** "That must have been hard" tells them what to say next.
- **Correcting.** Covered in Lesson 2, and it is worth repeating because the reflex is strong.
- **Compound questions.** They answer the easy half and the other half is gone.

:::reveal Why does the closing question "is there anything I did not ask about?" reliably produce surprising material? ||| Because the interview has been shaped by the interviewer's topic list, which was built from the context they researched rather than from the narrator's own sense of their life. The closing question is the only moment the narrator is invited to supply the frame instead of the answer, and by that point ninety minutes of talking has both loosened them and reminded them what they came to say. The practical rule is to ask it every time and then wait rather than treating it as a courtesy on the way out.

## Sources
- Ritchie, D. A. (2015). *Doing oral history* (3rd ed.). Oxford University Press.
- Yow, V. R. (2015). *Recording oral history: A guide for the humanities and social sciences* (3rd ed.). Rowman & Littlefield.`,
    },
    {
      slug: "oh-recording-and-metadata",
      title: "6 · Recording, metadata, and outliving your laptop",
      section: "Module 2 · Practice",
      body: `**The most common way an oral history is lost is not a bad microphone. It is a good recording nobody can find, identify, or open.** Preservation is a craft skill, not an afterthought, and it is the half that separates an oral history from a conversation.

**Recording, in order of how much it matters**

1. **A microphone near the narrator's mouth.** A lavalier clipped to the collar, or a handheld on a stand within a foot. **This single decision outweighs every other technical choice**, and a phone six inches away beats an expensive recorder across the room.
2. **A quiet room.** Fridges, clocks, air conditioning, traffic. You will stop hearing them in ten minutes; the recording will not.
3. **Record two devices.** Anything can fail, and the second one is usually a phone you already have.
4. **Uncompressed, if you can.** WAV rather than MP3, 44.1 kHz or better. **A lossy format is a decision made once and regretted by everyone downstream.**
5. **Check the level, out loud, before the real start.** Ask them to say their name and play it back so they hear it too, which also demystifies the machine.
6. **Video only if you have a reason.** It doubles the cost, complicates the release, and changes how people sit. It is right when gesture or craft is the content, and wrong by default.

**Metadata: what a stranger needs in fifty years.** Write it the same day. It takes fifteen minutes and it is the difference between an archive and a folder.

- Narrator's full name, including names formerly used, and their preferred form.
- Interviewer's name. Date. Place, specifically.
- Project name and purpose.
- Equipment and format.
- Everyone present, including anyone not speaking.
- Language(s), and any interpreter.
- **A time-stamped topic log.** Even rough. This is what makes a two-hour recording usable to someone who is not going to listen to all of it, and it is the item most often skipped.
- **Known divergences from the documented record** (Lesson 2), and anything you agreed to restrict.
- Restrictions and their expiry.

**File naming that will still make sense later:** *lastname-firstname_YYYY-MM-DD_session1.wav*. Boring, sortable, unambiguous, and it survives being moved.

**Preservation, minimally.** Three copies, two kinds of media, one off site. **A single copy on your laptop is not a preserved recording**, and the failure is not hypothetical: it is the single commonest way this material is lost.

**And the step people skip: place it somewhere.** A local historical society, a university archive, a public library's local-history room, or a project like the ones the Oral History Association lists. **An interview nobody can find has not been preserved; it has been stored**, and the difference shows up when you are no longer around to be asked.

:::reveal Name the two things that matter most for a usable recording, and the metadata item most often skipped. ||| A microphone near the narrator's mouth and a quiet room; microphone placement outweighs every other technical choice, so a phone at a foot beats an expensive recorder across the room. The most-skipped metadata item is the time-stamped topic log, which is what makes a two-hour recording usable to someone who will not listen to the whole thing, and therefore what decides whether the interview is ever actually used.

## Sources
- Oral History Association. (2018). *OHA principles and best practices*. Oral History Association.
- Ritchie, D. A. (2015). *Doing oral history* (3rd ed.). Oxford University Press.`,
    },
    {
      slug: "oh-ethics-and-consent",
      title: "7 · The deed of gift, and the ethics that outlive the interview",
      section: "Module 2 · Practice",
      body: `**A narrator owns their words. Copyright in what they said is theirs from the moment they say it**, and this is the legal fact most beginners get backwards. The recording is not yours because you made it.

**The deed of gift** is the document by which the narrator transfers or licenses those rights to you, a project, or a repository. It is not a formality:

- **Who receives the rights**, and what happens if that body ceases to exist.
- **What uses are permitted**: research, publication, broadcast, online posting. **Online is the one that needs saying out loud**, because a narrator who pictures a library reading room has not consented to a search result.
- **Restrictions**, if any, and when they lift. "Closed until my death" and "closed for twenty years" are both normal.
- **Whether the narrator keeps a copy.** They should, always, and it costs nothing.
- **The right to review the transcript**, if you are granting it.

**Informed consent, and what makes it informed.** Before recording, the narrator should genuinely understand: what the project is, that the recording will be preserved, **where it will go and who will be able to hear it**, that they can decline any question, and that they can stop at any time. **Say all of it out loud even though the form says it**, because a signature on an explained form is consent and a signature on an unread one is paperwork.

**The right to decline a question is worth stating explicitly and early.** It costs you almost nothing: narrators who know they can decline decline less, because the pressure that produces refusal is the pressure of feeling trapped.

**Interviewing about trauma.** The field's position is neither "avoid it" nor "get it":

- **Do not chase it.** If it is there, it will come, and pursuing it converts an interview into an extraction.
- **Let them set the depth.** Every time.
- **Do not ask a follow-up to a detail they clearly cannot hold.** You will be tempted, because it is the most compelling material in the room.
- **Leave time at the end for something ordinary.** Ending a session inside the worst thing that happened to someone and then packing up your equipment is a real harm, and it is easy to avoid.
- **Know your limits.** You are an interviewer, not a therapist, and the honest thing is to say so and to know one local number.

**Interviewing family**, which is where most people start and where the specific traps are: you share the assumptions, so you skip the explanations a stranger would need and the recording is unusable to anyone outside the family. **Ask the obvious questions anyway** ("what was your mother's name", "what did Dad do at the plant"), even when you know. You also carry a shared history, which means the hard questions are harder and the answers may be shaped to protect you. **Naming that out loud at the start helps** more than it sounds like it will.

**The obligation that outlives the interview.** A narrator gave you their account on the strength of what you told them. **If the project changes, whether that is a different repository, an online publication that was not discussed, or a use they would not recognise, go back and ask.** That is the same consent-as-a-process rule the documentary course states, and here it reaches further, because oral histories are designed to last decades.

:::reveal A narrator signed a deed of gift in 2010 for a project that deposited recordings with a local historical society. In 2026 the project wants to publish them online in full. What does the course say? ||| Go back and ask. The 2010 consent was given on the strength of what they were told, and a narrator picturing a reading room has not consented to a search result: online reach and permanence are the specific things people have no model for. It is the same consent-as-a-process rule the documentary course states, and it reaches further here because oral histories are designed to last decades, so the gap between what was described and what is now proposed can be a generation wide.

## Sources
- Oral History Association. (2018). *OHA principles and best practices*. Oral History Association.
- Yow, V. R. (2015). *Recording oral history: A guide for the humanities and social sciences* (3rd ed.). Rowman & Littlefield.`,
    },
    {
      slug: "oh-transcription",
      title: "8 · Transcription, and every choice it forces",
      section: "Module 2 · Practice",
      body: `**A transcript is not the interview. It is a translation of speech into writing**, and every transcription decision is an editorial one whether or not you notice making it.

**Why transcribe at all**, given the recording is the object: it is searchable, quotable, and usable by people who cannot listen. **It is a finding aid and a derivative, not a replacement**, and a project that treats the transcript as the record has quietly discarded the evidence. Tone, pause, hesitation and laughter are in the audio and are frequently where the meaning is.

**The choices, each with a real cost**

| Choice | Cost of one way | Cost of the other |
| --- | --- | --- |
| Verbatim (every "um", false start, repetition) | Hard to read; can make an articulate person look foolish in print | Lightly cleaned loses hesitation, which is often the finding |
| Keep dialect and grammar as spoken | Risks looking like mockery on the page | "Correcting" it erases the person and is the more common failure |
| Mark pauses and laughter | Cluttered | Absent, the reader gets the words without the meaning |
| Narrator reviews and edits | They may sanitise it | No review can feel like a broken promise |

**The defaults this course recommends**, stated as defaults rather than rules:

1. **Near-verbatim.** Keep false starts and repetitions; drop only the interviewer's own "mm-hm". **Mark long pauses, laughter and crying**, because they carry meaning that the words do not.
2. **Never standardise a narrator's grammar or dialect.** This is the one with the most at stake. **Rewriting how someone speaks into how you think they should have is the most patronising thing you can do to an oral history**, and it disproportionately falls on working-class and minority-language narrators. Transcribe what was said.
3. **Note what is not language**: [pause], [laughs], [long silence], [inaudible 00:14:22], [phone rings]. Timestamp the inaudible so someone can go and try again.
4. **Timestamp every few minutes.** It is what makes the transcript usable against the audio.
5. **Offer review, and say what review means.** If they may correct facts but not rewrite their speech, say that up front. **A narrator who returns a rewritten transcript was not told the terms.**

**On automatic transcription.** It is now good enough to be a genuine first pass, and it is a first pass. It reliably mangles names, places, dialect and anything specialised, which in an oral history is the material. **Correct it against the audio, all the way through, or the errors become the record.**

**And the thing to hold onto:** where the transcript and the audio disagree, **the audio is the record.** Say so in the front matter, so a future user knows which object they are actually citing.

:::reveal Why does this course recommend never standardising a narrator's grammar or dialect, and what is the general rule about transcript versus audio? ||| Because rewriting how someone speaks into how you think they should have spoken erases the person, and it falls disproportionately on working-class and minority-language narrators, which makes it the most patronising thing an oral historian can do. The general rule is that a transcript is a derivative and a finding aid: where transcript and audio disagree, the audio is the record, and that should be stated in the front matter so a future user knows which object they are citing.

## Sources
- Ritchie, D. A. (2015). *Doing oral history* (3rd ed.). Oxford University Press.
- Oral History Association. (2018). *OHA principles and best practices*. Oral History Association.`,
    },
    {
      slug: "oh-quiz-2",
      title: "9 · Knowledge check: practice",
      section: "Module 2 · Practice",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why is chronology the default structure for a life-review interview?",
            options: [
              "It is the one order the narrator already has, so it costs them no effort",
              "Archives require deposited interviews to run in chronological sequence",
              "It guarantees the interview covers every period of the narrator's life",
              "It keeps the interviewer's topic list and the recording in step",
            ],
            correctIndex: 0,
            explanation:
              "And moving through it produces material a narrator would never have offered if asked for it directly.",
            sourceLessonSlug: "oh-the-interview",
          },
          {
            prompt: "What does the closing question 'is there anything I did not ask about?' do?",
            options: [
              "Confirms the topic list was covered before the recording ends",
              "Invites the narrator to supply the frame rather than the answer",
              "Gives the narrator a formal chance to withdraw their consent",
              "Signals to a future listener that the session ended by agreement",
            ],
            correctIndex: 1,
            explanation:
              "It is the only moment the narrator sets the terms, after ninety minutes that both loosened them and reminded them what they came to say. Ask it every time, and wait.",
            sourceLessonSlug: "oh-the-interview",
          },
          {
            prompt: "A narrator begins to cry mid-interview. What does the course say to do?",
            options: [
              "Stop recording immediately and offer to reschedule the session",
              "Apologise for the question and move to a lighter topic",
              "Stay quiet, let the pause run, then offer to stop and let them decide",
              "Continue with the next question so the moment is not made larger",
            ],
            correctIndex: 2,
            explanation:
              "Stopping, apologising or rushing to comfort all say the same thing: that this should not have happened. Most narrators continue, and many say afterwards it was what they wanted recorded.",
            sourceLessonSlug: "oh-the-interview",
          },
          {
            prompt: "Which technical decision matters most for a usable recording?",
            options: [
              "Recording in an uncompressed format such as WAV rather than MP3",
              "Using a professional recorder rather than a phone as the primary device",
              "Recording video as well as audio so gesture is preserved",
              "Getting a microphone close to the narrator's mouth",
            ],
            correctIndex: 3,
            explanation:
              "It outweighs every other technical choice: a phone six inches away beats an expensive recorder across the room.",
            sourceLessonSlug: "oh-recording-and-metadata",
          },
          {
            prompt: "Which metadata item is most often skipped, and what does it decide?",
            options: [
              "The time-stamped topic log, which decides whether the recording gets used",
              "The interviewer's name, which decides who may be cited as the collector",
              "The equipment list, which decides how the audio should be restored later",
              "The list of everyone present, which decides who holds rights in the tape",
            ],
            correctIndex: 0,
            explanation:
              "It is what makes a two-hour recording usable to someone who will not listen to all of it, which is nearly every future user.",
            sourceLessonSlug: "oh-recording-and-metadata",
          },
          {
            prompt: "Who holds copyright in what a narrator says, before any paperwork?",
            options: [
              "The interviewer, as the person who created the recording",
              "The narrator, from the moment the words are spoken",
              "Nobody: spoken words are not copyrightable subject matter",
              "The repository, once the recording is accepted for deposit",
            ],
            correctIndex: 1,
            explanation:
              "The recording is not yours because you made it. That is why the deed of gift is a transfer from the narrator rather than a formality you collect.",
            sourceLessonSlug: "oh-ethics-and-consent",
          },
          {
            prompt: "Which permitted use most needs to be named explicitly in a deed of gift?",
            options: [
              "Deposit with a named archive or historical society",
              "Quotation in an academic article or a published book",
              "Playback for other members of the narrator's own family",
              "Posting online, where the recording becomes a search result",
            ],
            correctIndex: 3,
            explanation:
              "A narrator who pictures a library reading room has not consented to a search result. Reach and permanence are exactly what people have no model for.",
            sourceLessonSlug: "oh-ethics-and-consent",
          },
          {
            prompt: "What is the specific risk when interviewing your own family?",
            options: [
              "Shared assumptions mean you skip explanations an outsider would need",
              "Family narrators are more likely to refuse a deed of gift",
              "Relatives tend to give shorter answers than unrelated narrators",
              "The recording cannot be deposited with a public repository",
            ],
            correctIndex: 0,
            explanation:
              "The fix is to ask the obvious questions anyway, even when you know the answers, so the recording is usable by someone outside the family.",
            sourceLessonSlug: "oh-ethics-and-consent",
          },
          {
            prompt: "What is the relationship between transcript and audio?",
            options: [
              "The transcript supersedes the audio once the narrator has reviewed it",
              "Both are equally authoritative and either may be cited without distinction",
              "The transcript is a derivative and finding aid; the audio is the record",
              "The audio is a working file that may be discarded after transcription",
            ],
            correctIndex: 2,
            explanation:
              "Tone, pause, hesitation and laughter live in the audio and are often where the meaning is. Say which is authoritative in the front matter.",
            sourceLessonSlug: "oh-transcription",
          },
          {
            prompt: "What does the course say about a narrator's dialect and grammar in a transcript?",
            options: [
              "Standardise it so the narrator is not embarrassed by the printed version",
              "Standardise it only where a reader would otherwise misunderstand the sense",
              "Offer the narrator the choice of standardising their own speech at review",
              "Never standardise it: transcribe what was said",
            ],
            correctIndex: 3,
            explanation:
              "Rewriting how someone speaks erases the person, and it falls disproportionately on working-class and minority-language narrators.",
            sourceLessonSlug: "oh-transcription",
          },
        ],
      },
    },
    {
      slug: "oh-capstone",
      title: "10 · Capstone: conduct one, and deposit it",
      section: "Module 3 · Close",
      lessonType: "assignment",
      body: `**Do the whole thing once, end to end, with one real person.** A partial oral history teaches almost nothing: the discipline is in the parts people skip.

**Choose a narrator you can actually sit with**, and who has time for at least ninety minutes. A relative, a neighbour, a colleague near retirement, someone at a community organisation. **Someone with an ordinary life is a better first narrator than someone famous**, because you will not be tempted to let their reputation do the work.

**What to submit.**

**1. Your preparation.** The context you researched and where you got it, your chronology of the checkable, and your topic list of ten to fifteen areas. **Plus one paragraph on your second questions**: what did the pre-interview reveal that they mentioned in passing without elaborating?

**2. The recording.** At least sixty minutes, ninety or more preferred. Two devices. Microphone close.

**3. Your metadata record**, complete, using the Lesson 6 list, including the **time-stamped topic log**. This is the most-graded item, because it is the one everyone skips and the one that decides whether the interview is ever used.

**4. A transcript of ten to fifteen minutes**, near-verbatim, with pauses and laughter marked, timestamped, and dialect untouched. Say in the front matter that the audio is the record. **If you used automatic transcription, correct it against the audio and say you did.**

**5. Your deed of gift**, signed, naming permitted uses including whether online is among them, any restrictions and when they lift, and confirming the narrator has their own copy.

**6. A reflection, and this is the intellectual work.** Answer four things:
- **What did you get that you did not expect?** Everyone gets something.
- **Where did their memory diverge from the record?** Even slightly. What might that divergence mean, and what evidence would you need before claiming it means anything at all?
- **What did you fail to ask?** Every first interview has one.
- **Where did you talk too much?** Find one place in your own recording and quote it.

**7. Where it is going.** Name a real repository you have contacted or will contact, or say honestly that it stays with the narrator's family and how they will keep it findable. **"On my hard drive" is not an answer**, and the point of the question is that it is not one.

**What a strong submission looks like.** The interview is the easy part to do adequately. **The metadata, the transcript conventions and the deposit are where this is graded**, because they are what turns a good conversation into evidence somebody can use in fifty years.`,
    },
    {
      slug: "oh-review-and-sources",
      title: "11 · Cumulative review and sources",
      section: "Module 3 · Close",
      body: `**An oral history is a recorded, preserved, in-depth interview with someone about their own experience, made so others can use it.** The recording is the finished object, not raw material.

**Narrator, not subject.** They are the author of the account and the owner of the change; you are its custodian.

**Memory is evidence, including when it diverges.** Portelli's Terni workers moved Trastulli's death to the layoffs because that is where it made sense in their history. Do not argue in the room, ask neutrally at most once, record it as said, and **note the divergence in the metadata.** An interpretive claim still needs evidence, usually a pattern.

**Prepare the context, not the person.** Chronology of the checkable, a topic list rather than a questionnaire, an unrecorded pre-interview, and the paperwork settled BEFORE recording.

**Some questions have to be earned**, which is why the sessions are long and the hard material comes late.

**Life review as the default shape**, ending with "is there anything I did not ask about?" Ask for scenes and the ordinary, follow the emotion, and **wait four seconds.**

**Microphone close, room quiet, two devices, uncompressed.** Then the metadata the same day, including the **time-stamped topic log**, and three copies with one off site. **An interview nobody can find has been stored, not preserved.**

**The narrator owns their words.** The deed of gift transfers them, names permitted uses (say **online** out loud), and sets restrictions. Consent is a process here too, and it reaches decades.

**The transcript is a derivative.** Near-verbatim, pauses and laughter marked, **dialect never standardised**, and the audio is the record.

:::reveal Without looking back, state the Trastulli finding and the practice it produces. ||| Terni workers remembered Luigi Trastulli dying at the 1953 mass layoffs rather than the 1949 demonstration where he was actually killed, because the layoffs were where his death made sense in the community's own history; Portelli argued the error was the most valuable thing in the recording. The practice: do not argue in the room, ask a neutral clarifying question at most once, record the account exactly as given, and put the divergence in the metadata where a future user will find it rather than in the recording or in nowhere.

## Sources
- Oral History Association. (2018). *OHA principles and best practices*. Oral History Association.
- Portelli, A. (1991). *The death of Luigi Trastulli and other stories: Form and meaning in oral history*. State University of New York Press.
- Ritchie, D. A. (2015). *Doing oral history* (3rd ed.). Oxford University Press.
- Yow, V. R. (2015). *Recording oral history: A guide for the humanities and social sciences* (3rd ed.). Rowman & Littlefield.`,
    },
  ],
};
