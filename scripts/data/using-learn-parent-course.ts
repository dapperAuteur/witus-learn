import type { AuthoredCourse } from "./authored-course";
import { finalQuiz, helpLesson, sectionQuiz } from "./using-learn-shared";

// "Learn.WitUS for parents" (series "Using Learn.WitUS", code USING, position P1). Slug to be
// registered by the orchestrator: `using-learn-parent`. RESEARCH TIER 1 (product documentation).
// Brief: plans/future-courses/using-learn/2026-09-21-using-learn-paths-brief.md, APPROVED by BAM
// 2026-09-22 (rubric v1.3 gate A8). Assessment exception (rubric D2), BAM 2026-09-22: section
// quizzes serve 5 from a pool of 10, the final serves 10 from a pool of 25 and passes at 80.
//
// EVERY LESSON BODY COMES FROM src/lib/help-articles.ts AT SEED TIME via `helpLesson`. Nothing in
// this file restates an article, so an edited article flows into the course on the next seed and a
// deleted one throws instead of silently emptying a lesson. The only prose authored here is each
// lesson's "Try it" step and the quiz banks.
//
// EVIDENCE (brief section 6). `live-sessions` is VERIFIED by a passing Playwright spec, 2026-09-21.
// `family`, `parent-teacher-contact` and `cohorts` are REPORTED: article text only, not yet checked
// against the components. Every question below is therefore scoped to what the ARTICLE states, and
// nothing here asserts a screen behaviour the article does not spell out.
//
// THIS PATH IS ABOUT CHILDREN'S ACCOUNTS. Two rules held throughout. First, no question or Try it
// step assumes a child's record is visible to anyone the article does not place it in front of: the
// `family` article limits a parent to children they were explicitly linked to, and the questions
// test that limit rather than working around it. Second, nothing here teaches a parent a route to
// data or a control the article does not give them. The `cohorts` and `live-sessions` lessons are
// in this course because they explain WHERE a grade, an adjustment marker and a live-class day come
// from, not because a parent runs those screens, and their Try it steps send the parent to the
// family view and to /live rather than to a teacher's roster.
//
// QUIZ SHAPE. Four options a question, all four written to about the same length so the bank cannot
// be beaten by clicking the longest option (scripts/check-longest-option.ts), `correctIndex` spread
// across 0 to 3, every question carrying `explanation` and a `sourceLessonSlug` that is one of this
// course's four article slugs. Distractors are specific and definitively wrong against the article.
// No em dashes anywhere in the copy.
const SECTION_1 = "Section 1 · Your family account";
const SECTION_2 = "Section 2 · Classes and live sessions";

export const USING_LEARN_PARENT_COURSE: AuthoredCourse = {
  title: "Learn.WitUS for parents",
  description:
    "By the end you can open the Family view, read your child's course progress, grades, credentials and live-class attendance, and choose how your child's teachers are able to contact you. You will also know where a class grade, an adjusted grade and a live session come from, and what the app never shows a parent.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 · Your family account
    // ══════════════════════════════════════════════════════════════════════
    helpLesson(
      "family",
      SECTION_1,
      "Open /family and read the progress percent, recall accuracy and quiz average for each course your child is enrolled in. Scroll to credentials and check whether any earned specializations are listed there yet. If you have no Family view at all, ask the class teacher to use Invite a parent/guardian on the roster and send you the one-time link.",
    ),
    helpLesson(
      "parent-teacher-contact",
      SECTION_1,
      "Open the Contact preferences box on /family and pick one of the three settings for the teachers of your children. On a teacher's card, press Ask ... to get in touch when you want them to reach you, and note what the request shows them: the student's name, a link to the student's work, and how to reach you. Once you are actually talking, press We've started talking.",
    ),
    sectionQuiz(SECTION_1, 1, [
      {
        prompt: "What does the /family view show a linked parent about their child?",
        options: [
          "Course progress, grades, credentials and live attendance",
          "Course progress and a shared login for the child's account",
          "Every class on the school, with each student's quiz average",
          "Lesson drafts the child is writing, plus teacher comments",
        ],
        correctIndex: 0,
        explanation:
          "The Family view is read-only and covers course progress, grades from recall and quizzes, credentials, and live-class attendance, and the article adds \"nothing else\".",
        sourceLessonSlug: "family",
      },
      {
        prompt: "Where does an invite to the Family view start?",
        options: [
          "On a teacher's own account settings page under Admin",
          "On the class roster page at /cohorts/[id], by a student",
          "On the child's dashboard, under earned credentials",
          "On the /live page, next to the session the child joined",
        ],
        correctIndex: 1,
        explanation:
          "A teacher clicks Invite a parent/guardian next to a student on the cohort roster at /cohorts/[id] and enters the parent's email.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "Email delivery is not configured yet. What happens to a parent invite?",
        options: [
          "It queues the invite and sends it once email is configured",
          "It links the parent straight away without any invite link",
          "It shows the one-time link there for you to copy and send",
          "It posts the link on the class roster for every parent",
        ],
        correctIndex: 2,
        explanation:
          "The article says the link is shown right there to copy and send yourself. It is not held in a queue and it does not skip the link step.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "What happens when a parent opens the invite link and signs in?",
        options: [
          "They are made a teacher of the class the child is in",
          "They are given the child's password for that account",
          "They are linked to every child on the class roster",
          "They are linked to that one child and nobody else's",
        ],
        correctIndex: 3,
        explanation:
          "The parent accepts at /family/accept/[token], signs in with a magic link, and is linked to that one child. A parent only ever sees children they were explicitly linked to.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "What is a specialization, as the Family view lists it?",
        options: [
          "A named track of three courses the child has finished",
          "A single long course that carries extra credit hours",
          "An external certification issued by a testing body",
          "A badge a teacher awards by hand from the class report",
        ],
        correctIndex: 0,
        explanation:
          "A specialization is a named track of three courses: a shared research core, a craft course and a subject course. It is a record on this site, not an external certification.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "How much of a specialization in progress does a parent see?",
        options: [
          "A percentage bar for each of the three courses in it",
          "None of it, only specializations the child has earned",
          "The two finished courses and the one still outstanding",
          "A projected completion date based on recent progress",
        ],
        correctIndex: 1,
        explanation:
          "A specialization only appears once all three courses are complete. A parent never sees partial progress toward one, only earned specializations.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "How do a parent and a teacher actually talk in this app?",
        options: [
          "By a thread on the class page, kept with the roster",
          "By a message box on the student's own dashboard",
          "By email or phone, since the app has no messages",
          "By a chat window that opens beside the live session",
        ],
        correctIndex: 2,
        explanation:
          "There are no messages in this app. The two sides see how to reach each other, or ask to be reached, and then talk by email or phone.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "Which contact preference applies before you change anything?",
        options: [
          "Show my contact details, including your account email",
          "Only through the school, which blocks in-app asks",
          "No preference at all until you pick one yourself",
          "Ask me to get in touch, which hides your details",
        ],
        correctIndex: 3,
        explanation:
          "Ask me to get in touch is the default. Your details stay hidden, the other side can ask you to contact them, and you see their details with the request.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "A per-person rule and a class rule disagree. Which one applies?",
        options: [
          "The per-person rule, because the most specific wins",
          "The class rule, because a teacher set it for everyone",
          "Your own default, because it was saved first of all",
          "Neither, and the school is contacted to settle it",
        ],
        correctIndex: 0,
        explanation:
          "The most specific rule wins: the one-person rule first, then the class rule, then your default.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "What does a request to get in touch show the person who receives it?",
        options: [
          "A written note you type, held until the school approves it",
          "The student's name, a link to their work, and your details",
          "Only your account email, with no mention of the student",
          "The student's full grade report and every quiz they took",
        ],
        correctIndex: 1,
        explanation:
          "The request appears on your card with the student's name, a link to the student's work, and how to reach you. There is no note to type, because there are no messages.",
        sourceLessonSlug: "parent-teacher-contact",
      },
    ]),
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 · Classes and live sessions
    // ══════════════════════════════════════════════════════════════════════
    helpLesson(
      "cohorts",
      SECTION_2,
      "Open the family view and look for a grade that carries a visible marker and a teacher's reason. That value was saved with Adjust on the class report, the student's real attempt stays underneath it, and your child sees both values on their own dashboard. If you also teach at this school, open /cohorts, where you see the classes you created or teach.",
    ),
    helpLesson(
      "live-sessions",
      SECTION_2,
      "Open /live and read the list of sessions for your school. If a session is attached to a course, open that course page and find the same session listed there. Scheduling, going live, ending and setting the saved recording all happen from Admin → Live, so anything you see on /live was put there from that one screen.",
    ),
    sectionQuiz(SECTION_2, 2, [
      {
        prompt: "Who can create a class on the Cohorts page?",
        options: [
          "Teachers and admins of the school, once 18 is confirmed",
          "Any student who is enrolled in a course on the school",
          "A parent linked to their own child in the Family view",
          "Anyone holding a class invite link, once they sign in",
        ],
        correctIndex: 0,
        explanation:
          "Classes are created by teachers and admins of the school who have confirmed they are 18 or older. An invite link enrols a student, it does not create a class.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "Which account cannot confirm it is 18 or older on /cohorts?",
        options: [
          "One that an admin created for another teacher to run",
          "One that belongs to a student, such as a kid login",
          "One that has never been added to a class roster yet",
          "One that is still waiting on its first magic link",
        ],
        correctIndex: 1,
        explanation:
          "An account that belongs to a student, whether a child profile, a kid login or someone's linked student, cannot tick the 18 or older box.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "You are not a teacher on this school. What does the article tell you to do?",
        options: [
          "Create the class first, then ask an admin to approve it",
          "Join a class as a student and ask to be promoted later",
          "Ask an admin to make you a teacher under Admin → Teachers",
          "Tick the 18 or older box, which grants teacher access",
        ],
        correctIndex: 2,
        explanation:
          "Ask an admin to make you a teacher under Admin then Teachers, or to create one class and add you as its teacher. Ticking 18 or older confirms your age, it does not grant the role.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What does the ● here marker on a class roster mean?",
        options: [
          "That student has finished every quiz set",
          "That student's invite link has been opened",
          "That student attended the last live class",
          "That student is on the /live page right now",
        ],
        correctIndex: 3,
        explanation:
          "The marker shows who is currently present on /live, in real time. It is presence now, not a record of a past class.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "Where does a student land after opening a class invite and signing in?",
        options: [
          "On /live, already enrolled in the class",
          "On the roster, waiting to be approved",
          "On /family, linked to their own parent",
          "On the class report, with a blank row",
        ],
        correctIndex: 0,
        explanation:
          "Students open the one-time link, sign in with a magic link, and land on /live already enrolled. No separate approval step follows.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What is the rule about how many teachers a class keeps?",
        options: [
          "A class keeps exactly the teacher who made it",
          "A class always keeps at least one teacher",
          "A class keeps one teacher for every ten students",
          "A class can be left with no teacher for a while",
        ],
        correctIndex: 1,
        explanation:
          "A class always keeps at least one teacher. The creator can be removed from the list and still manage the class, so the creator is not fixed on it either.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What does the Adjust control on the class report let a teacher do?",
        options: [
          "Delete a failed attempt so it stops counting against them",
          "Issue a certificate for a course the student has not sat",
          "Change a quiz score, or mark a course complete for display",
          "Rewrite the student's answers before the report is sent",
        ],
        correctIndex: 2,
        explanation:
          "Adjust changes a quiz score or marks a course complete for display only, with no certificate. Nothing is edited or deleted.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What happens to the student's real attempt when a grade is adjusted?",
        options: [
          "It is replaced, and only the new value is kept on file",
          "It is hidden from the family view but kept in the CSV",
          "It is deleted once the teacher saves a written reason",
          "It stays underneath, and the student sees both values",
        ],
        correctIndex: 3,
        explanation:
          "An adjustment is a new entry on top. The real attempt stays underneath, the student sees both values on their own dashboard, and a wrong adjustment is fixed by saving a newer one.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "Where is a live class scheduled?",
        options: ["From Admin → Live", "From the class roster", "From the course page", "From the /family view"],
        correctIndex: 0,
        explanation:
          "Live classes are scheduled from Admin then Live. A session can be attached to a course afterwards, but the course page is not where it is created.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What do you paste when scheduling a live session?",
        options: [
          "Your streaming service's account password",
          "Your streaming service's player embed URL",
          "The roster CSV exported from the class",
          "The course page address for that class",
        ],
        correctIndex: 1,
        explanation:
          "You paste your streaming service's player embed URL. The app embeds that player, so no account credential is asked for.",
        sourceLessonSlug: "live-sessions",
      },
    ]),
    finalQuiz(SECTION_2, [
      {
        prompt: "Which child's record can a parent open in the Family view?",
        options: [
          "Only a child they have been explicitly linked to",
          "Any child in the same class as their own child",
          "Any child at the school whose parent has opted in",
          "Only a child who shares their household address",
        ],
        correctIndex: 0,
        explanation:
          "A parent only ever sees children they have been explicitly linked to, and never another family's child. Sharing a class or an address changes nothing.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "Which figures does the Family view give for an enrolled course?",
        options: [
          "Progress percent, class rank and attendance streak",
          "Progress percent, recall accuracy and quiz average",
          "Time on task, recall accuracy and teacher comments",
          "Quiz average, class average and the school average",
        ],
        correctIndex: 1,
        explanation:
          "The view gives enrolled-course progress percent, recall accuracy and quiz average. There is no rank, streak or comparison against other children.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "What does the Family view say about live classes?",
        options: [
          "How long the child stayed in each class",
          "Which classmates were present that day",
          "Which live-class days the child attended",
          "What the teacher covered in each session",
        ],
        correctIndex: 2,
        explanation:
          "Attendance is given as which live-class days the child attended. Minutes in the room, classmates and lesson content are not in the Family view.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "Where does the Family view list a child's earned specializations?",
        options: [
          "Beside each course, as soon as the track is started",
          "On the live-class list, with the days attended",
          "In the recall accuracy figure for that subject",
          "Under credentials, once all three courses are done",
        ],
        correctIndex: 3,
        explanation:
          "Specializations are listed under credentials, and only once the child has completed all three courses in the track.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "Which three courses make up a specialization?",
        options: [
          "A shared research core, a craft course and a subject course",
          "A shared research core, a lab course and a capstone project",
          "A reading course, a writing course and a numeracy course",
          "A craft course, a subject course and a live-class series",
        ],
        correctIndex: 0,
        explanation:
          "The named track is a shared research core, a craft course and a subject course. Live classes are not part of the definition.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "What standing does an earned specialization carry?",
        options: [
          "A state-recognised credential a school can accept",
          "A record on this site, not an outside certification",
          "A certificate the streaming service issues for you",
          "A transcript entry any other school will honour",
        ],
        correctIndex: 1,
        explanation:
          "The article is explicit: a specialization is a record on this site, not an external certification.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "How do children sign in to the school under this design?",
        options: [
          "With a sub-profile inside the parent's own account",
          "With the parent's login, which the parent shares",
          "With their own accounts, not a shared parent login",
          "With a class login the teacher gives to the roster",
        ],
        correctIndex: 2,
        explanation:
          "Kids keep their own accounts. Managed sub-profiles for children too young for an account are named as a possible future release, not as today's behaviour.",
        sourceLessonSlug: "family",
      },
      {
        prompt: "Who can take part in parent and teacher contact?",
        options: [
          "Any adult at the school, whether linked or not",
          "Parents, teachers, and the students they share",
          "Any teacher, plus parents the school has approved",
          "Adults already linked through a class, never students",
        ],
        correctIndex: 3,
        explanation:
          "Only adults already linked through a class: a student's parent and that student's teachers, each having confirmed they are 18 or older. Students are never part of it.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "What does Show my contact details reveal to the other side?",
        options: [
          "Your account email, plus a phone and best time if added",
          "Your home address, along with your account email too",
          "Your account email only, with nothing else optional",
          "Your phone number, kept back from the school itself",
        ],
        correctIndex: 0,
        explanation:
          "It shows your account email, plus a phone number and a best time note if you chose to add them. Both of those are optional.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "What does the Only through the school setting do?",
        options: [
          "It sends every ask to the school to approve first",
          "It stops in-app asks and points people to the school",
          "It hides your email but still allows an in-app ask",
          "It closes your account to parents for the term",
        ],
        correctIndex: 1,
        explanation:
          "With that setting the other side cannot ask you in the app at all, and is pointed to the school instead. Hiding your details while still allowing an ask is the default setting, not this one.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "How does a teacher set one rule for a whole class?",
        options: [
          "From the Family view, under the Contact preferences box",
          "From Admin → Teachers, on the teacher's own record page",
          "From that class's page, under Parent contact for this class",
          "From the class report, beside the Adjust control there",
        ],
        correctIndex: 2,
        explanation:
          "The class-wide rule is set from that class's page, under Parent contact for this class. The Contact preferences box sets your own default, not the class rule.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "Which control does the person who was asked press to end a request?",
        options: [
          "We've started talking, which the asker presses too",
          "Only through the school, which ends it for both",
          "Ask me to get in touch, which resets the request",
          "Close this request, which closes it for both sides",
        ],
        correctIndex: 3,
        explanation:
          "The person who was asked can press Close this request, for example after calling back. It then closes for both of you, and you are not told who closed it.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "What happens if a request is neither answered nor closed?",
        options: [
          "After 48 hours we email the person once about it",
          "After 48 hours the request closes on its own",
          "After 14 days we email the person every day",
          "After a day the school is emailed on your behalf",
        ],
        correctIndex: 0,
        explanation:
          "At 48 hours we email the person once. The check runs once a day, so the email arrives within the following day, and replying to it reaches you directly.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "How soon can you ask the same person about the same student again?",
        options: [
          "Two weeks later, once the old request has gone",
          "A day later, and the request itself lasts 14 days",
          "A day later, and the request itself lasts 48 hours",
          "Straight away, as often as you feel like asking",
        ],
        correctIndex: 1,
        explanation:
          "You can ask again a day later, and a request disappears after 14 days. The 48 hours is when we send the single reminder email, not the lifetime of the request.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "Who is told when you change your contact preferences?",
        options: [
          "The teachers of your children, at the daily check",
          "The school, which keeps a record of the change",
          "Nobody, because a change never notifies anyone",
          "Anyone holding an open request against your card",
        ],
        correctIndex: 2,
        explanation:
          "Changing your preferences never notifies anyone. The once-a-day check is what sends the 48 hour reminder on an open request, not a preference change.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "What is the Cohorts page for?",
        options: [
          "Listing every public course on sale",
          "Showing a parent their child's grades",
          "Storing the saved live-class recording",
          "Running private classes for a school",
        ],
        correctIndex: 3,
        explanation:
          "Cohorts is where a school's teachers run private classes, the home-school case where a parent asks a teacher to teach their child and classmates live.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What kind of link does a class invite use?",
        options: [
          "A one-time link, sent by email to the student",
          "A standing link anyone on the school can use",
          "A link that stays live until the term closes",
          "A link the parent forwards from /family view",
        ],
        correctIndex: 0,
        explanation:
          "Each invite is a one-time link, sent to the student's email from the class roster page. If email delivery is not configured, the link is shown there to copy and send.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "Which classes does a teacher see on their Cohorts page?",
        options: [
          "Every class running anywhere on that school",
          "The ones they created or teach, and no others",
          "The ones their own children are enrolled in",
          "Only the ones an admin created on their behalf",
        ],
        correctIndex: 1,
        explanation:
          "A teacher sees the classes they created or teach. Brand admins and the owner are the ones who can see any class on the school.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "Who can add another teacher to a class, and how?",
        options: [
          "Any teacher on the class, by picking from a list",
          "The school owner alone, from Admin → Teachers page",
          "The creator or a school admin, by email address",
          "A linked parent, from the class page on /cohorts",
        ],
        correctIndex: 2,
        explanation:
          "The class's creator or a school admin adds a teacher by email, and that person must be a confirmed adult.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "Can the creator of a class take themselves off its Teachers list?",
        options: [
          "Yes, but the class is then archived until refilled",
          "No, the creator is fixed on the list for the term",
          "No, unless a school admin deletes the class first",
          "Yes, and they can still manage the class after that",
        ],
        correctIndex: 3,
        explanation:
          "The creator can come off the list, for example an admin who set a class up for someone else, and still manage the class. A class always keeps at least one teacher.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What does a teacher have to supply with every grade adjustment?",
        options: [
          "A reason, which stays on record with the change",
          "A second teacher's approval, saved with the row",
          "A copy of the student's work, attached as a file",
          "A date for the adjustment to expire and revert",
        ],
        correctIndex: 0,
        explanation:
          "A reason is required and stays on record. Every report, including the family view and the CSV, shows the adjusted value with a visible marker and that reason.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "How do adjusted grades affect a course's statistics?",
        options: [
          "They replace the real attempts in every statistic",
          "Not at all, since statistics count real attempts",
          "They are counted twice, once raw and once adjusted",
          "They pause the statistics until a newer one saves",
        ],
        correctIndex: 1,
        explanation:
          "Course statistics keep measuring real attempts only. An adjustment changes what the reports display, not what the statistics count.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What can you optionally attach a live session to?",
        options: [
          "A class roster, so the ● here marker shows",
          "A parent's Family view, shown day by day",
          "A course, so it appears on that course page",
          "A credential the student can then earn",
        ],
        correctIndex: 2,
        explanation:
          "A session can be attached to a course, and it then appears on that course page as well as on /live.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "Where do you go live, end a session, and set the saved recording?",
        options: [
          "On the /live page, beside the listing",
          "On the course page it was attached to",
          "On the class roster for that cohort",
          "On the same screen used to schedule it",
        ],
        correctIndex: 3,
        explanation:
          "Going live, ending, and setting the saved recording all happen from the same Admin then Live screen where the session was scheduled.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What does the dedicated /live page do?",
        options: [
          "It lists all of the school's live sessions",
          "It shows the roster for the current class",
          "It stores each teacher's embed URL safely",
          "It is where sessions are scheduled and ended",
        ],
        correctIndex: 0,
        explanation:
          "The /live page lists all sessions for the school. Scheduling and ending happen on the Admin then Live screen instead.",
        sourceLessonSlug: "live-sessions",
      },
    ]),
  ],
};
