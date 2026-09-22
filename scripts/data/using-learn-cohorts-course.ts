// "Run a cohort": the cohort-teacher path of the "Using Learn.WitUS" series (series code USING).
//
// RESEARCH TIER 1 (product documentation). Every lesson body is the help article itself, read from
// src/lib/help-articles.ts at seed time by `helpLesson`, so nothing here can drift from the page it
// teaches. Brief: plans/future-courses/using-learn/2026-09-21-using-learn-paths-brief.md, approved
// by BAM 2026-09-22 (rubric v1.3 gate A8), which adds this Cohort teacher path to the four paths in
// the brief.
//
// ASSESSMENT SIZE: the series exception recorded in using-learn-shared.ts (rubric D2, BAM
// 2026-09-22). Section quizzes serve 5 from a pool of 10; the final serves 10 from a pool of 25 and
// passes at 80. Every question carries `explanation` and `sourceLessonSlug`, and each
// `sourceLessonSlug` is one of this course's four article slugs.
//
// SCOPE OF THE QUESTIONS. Only what the four articles state. Two things they do not settle, and
// which are therefore asked nowhere in this file:
//   1. The articles never say whether a live session's visibility setting has named values, so no
//      question turns on what the visibility choices are called.
//   2. The Cohorts article gives one path, /cohorts, and says nothing about the route moving, so no
//      question is written around which path serves the class list either way.
//
// THE PRIVACY BOUNDARY, which this course must not teach a way around. A cohort holds children. The
// contact article draws the line in one sentence: "Students are never part of it." Several questions
// below test that boundary AS the boundary: who may take part, what Only through the school leaves a
// teacher able to do, and what happens when a student's account is put forward as a teacher. None
// asks how to reach a student directly, how to see a parent's hidden details, or how to get an adult
// confirmation onto a child's account.
//
// House style, matching who-gets-nominated-course.ts: `section` on every lesson, a quiz per teaching
// section, the final placed LAST, `explanation` and `sourceLessonSlug` on every question. Correct
// options are written to the same length as their distractors, so check-longest-option measures
// close to the 25 percent a guesser scores. No em dashes anywhere.
import type { AuthoredCourse } from "./authored-course";
import { finalQuiz, helpLesson, sectionQuiz } from "./using-learn-shared";

const SECTION_1 = "Section 1 · Set up the cohort";
const SECTION_2 = "Section 2 · Run it week to week";

export const USING_LEARN_COHORTS_COURSE: AuthoredCourse = {
  title: "Run a cohort",
  description:
    "The cohort teacher's path through Learn.WitUS. After it you can create a private class, invite its students, add a second teacher, schedule a live session, and decide how the parents of your students are allowed to reach you.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 · Set up the cohort
    // ══════════════════════════════════════════════════════════════════════
    helpLesson(
      "cohorts",
      SECTION_1,
      "Open /cohorts and create a class, giving it a name you will recognise next week. Open that class's roster page and invite one student by email, and if email delivery is not configured yet, copy the one-time link shown there and send it yourself. Leave the roster open and watch for the ● here marker beside that student once they reach /live.",
    ),
    helpLesson(
      "school-teachers",
      SECTION_1,
      "Open Admin → Teachers and read the list of everyone who teaches or administers this school. Pick one person you want to add, ask them to sign in to this school once, then enter their account email and press Make a teacher. If it turns out they only need one class, leave this page alone and add them as its teacher from the class page instead.",
    ),
    sectionQuiz(SECTION_1, 1, [
      {
        prompt: "Who is allowed to create a class on the Cohorts page?",
        options: [
          "Teachers and admins who confirm they are adults",
          "Any account on the school, student logins included",
          "Only the person who first registered the school",
          "A parent of any child already enrolled on the school",
        ],
        correctIndex: 0,
        explanation:
          "Teachers and admins of the school, who have confirmed they are 18 or older. A student account cannot create a class.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "The first time you open the Cohorts page, what does it ask you to tick?",
        options: [
          "A box accepting the school's own code of conduct",
          "A box confirming that you are 18 years or older",
          "A box agreeing to record every class you run",
          "A box naming a second teacher for the class",
        ],
        correctIndex: 1,
        explanation:
          "Cohorts asks for the adult confirmation once, because a class creator has to be a confirmed adult.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "How does a student get into a class you have created?",
        options: [
          "By searching the school directory for the class",
          "By a class code they type on the /live page",
          "By a one-time invite link sent from the roster",
          "By a parent adding the class from the family page",
        ],
        correctIndex: 2,
        explanation:
          "You invite students by email from the class's roster page, and each invite is a one-time link.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "Email delivery is not configured yet. What does the roster do with an invite?",
        options: [
          "It queues the invite until email is switched on",
          "It refuses to make an invite until email works",
          "It posts the link on the class page for students",
          "It shows the one-time link there for you to send",
        ],
        correctIndex: 3,
        explanation:
          "If email delivery is not configured, the invite link is shown right there for you to copy and send yourself.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "An admin tries to make a student's account a teacher of the school. What happens?",
        options: [
          "It works, but only for classes they are enrolled on",
          "It works once a parent approves it from /family",
          "It cannot be done, a student account is not eligible",
          "It works once they tick the 18 or older box first",
        ],
        correctIndex: 2,
        explanation:
          "An account that belongs to a student cannot be made a teacher, and the same rule stops it creating a class on Cohorts.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "What does the ● here marker on the roster tell you about a student?",
        options: [
          "That the student has finished the class's course",
          "That the student is present on /live right now",
          "That the student's invite link has not expired",
          "That the student's parent has asked you to talk",
        ],
        correctIndex: 1,
        explanation:
          "The roster marks any student currently present on /live, so you can see who showed up in real time.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "You have typed the person's account email on Admin → Teachers. What do you press?",
        options: [
          "Make a teacher, which grants the role here",
          "Invite by email, from the class's roster page",
          "Add as its teacher, on the class page itself",
          "Remove teacher, then add them back again",
        ],
        correctIndex: 0,
        explanation:
          "Make a teacher is the control on Admin → Teachers. Inviting by email is the roster's control for students, and adding a class teacher happens on the class page.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "An admin set a class up for someone else and wants off its teacher list. What holds?",
        options: [
          "They must delete the class and let it be remade",
          "They stay listed until the class is closed down",
          "They lose the class the moment they come off it",
          "They can take themselves off and still manage it",
        ],
        correctIndex: 3,
        explanation:
          "The creator can take themselves off the teacher list and still manage the class. A class always keeps at least one teacher.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What does being made a teacher of the school let someone do?",
        options: [
          "Create classes here, and write courses under Teach",
          "Approve the payments and refunds the school takes",
          "Edit the school's branding and its domain settings",
          "See every class on the school, whoever created it",
        ],
        correctIndex: 0,
        explanation:
          "A teacher of the school can create classes under /cohorts and write courses under Teach, on this school only. Seeing every class is a brand admin or owner power.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "Remove teacher is pressed on someone who already runs two classes. What happens?",
        options: [
          "Those classes are handed to the school's admins",
          "Those classes stay theirs, but no new ones here",
          "Those classes are archived along with the role",
          "Those classes keep them until the term finishes",
        ],
        correctIndex: 1,
        explanation:
          "Remove teacher takes the role away. Classes they already teach stay theirs; they just cannot create new classes or courses here.",
        sourceLessonSlug: "school-teachers",
      },
    ]),

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 · Run it week to week
    // ══════════════════════════════════════════════════════════════════════
    helpLesson(
      "live-sessions",
      SECTION_2,
      "Open Admin → Live and schedule a session by pasting your streaming service's player embed URL, then set its visibility. Attach it to a course if you want it to show on that course's page. Open /live afterwards and check the session is listed for the school.",
    ),
    helpLesson(
      "parent-teacher-contact",
      SECTION_2,
      "Open the Contact preferences box on /cohorts and choose what the parents of your students get: your contact details, a request to get in touch, or only through the school. Open one of your classes and set Parent contact for this class if that group needs its own rule. Remember that the most specific rule wins, so a rule on one person's card beats the class rule you just set.",
    ),
    sectionQuiz(SECTION_2, 2, [
      {
        prompt: "Where do you schedule a live class?",
        options: [
          "From the roster page of the class it belongs to",
          "From the course page you want to attach it to",
          "From the /live page, using its schedule button",
          "From Admin → Live, the school's live screen",
        ],
        correctIndex: 3,
        explanation:
          "Admin → Live is the screen that schedules a session. The /live page only lists the sessions the school has.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What do you paste in when you schedule a session?",
        options: [
          "A recording file uploaded from your computer",
          "A calendar invite exported from the school",
          "Your streaming service's player embed URL",
          "The email address of every enrolled student",
        ],
        correctIndex: 2,
        explanation:
          "You paste the player embed URL from whichever streaming service you use, and the app embeds it.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What does attaching a live session to a course do?",
        options: [
          "It locks the course's lessons until the session ends",
          "It puts the session onto that course's own page",
          "It enrols everyone on the course into the session",
          "It makes the session public to the whole internet",
        ],
        correctIndex: 1,
        explanation:
          "Attaching is optional, and the session then appears on that course page. Visibility is a separate setting.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "Where is a session's saved recording set once the class is over?",
        options: [
          "On the same Admin → Live screen it was made on",
          "On the /live page, beside the session's listing",
          "On the course page the session was attached to",
          "On the class roster, under that student's name",
        ],
        correctIndex: 0,
        explanation:
          "Go live, end, and set the saved recording all happen on the same screen that schedules the session.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What is the dedicated /live page for?",
        options: [
          "Scheduling a session and setting its visibility",
          "Storing the embed URLs the school has used before",
          "Showing only the sessions attached to a course",
          "Listing all of the live sessions for the school",
        ],
        correctIndex: 3,
        explanation:
          "A dedicated /live page lists all sessions for the school. Scheduling happens on Admin → Live.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "How do a parent and their child's teacher actually talk in this app?",
        options: [
          "Through in-app messages kept on the class page",
          "Through a school moderator who relays messages",
          "By email or by phone, outside the app entirely",
          "By comments left on the student's own work page",
        ],
        correctIndex: 2,
        explanation:
          "There are no messages in this app. The app only shows how to reach each other, or carries a request to be reached.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "Which contact preference applies if you never choose one?",
        options: [
          "Show my contact details, email and phone both",
          "Ask me to get in touch, with details hidden",
          "Only through the school, with no requests at all",
          "None of them apply until you pick one yourself",
        ],
        correctIndex: 1,
        explanation:
          "Ask me to get in touch is the default. Your details stay hidden, but the other side can ask you to contact them.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "You set a class rule and a different rule for one parent on that class. Which one governs that parent?",
        options: [
          "The rule you set for that one person's card",
          "The rule you saved most recently of the two",
          "The rule you set for the whole of the class",
          "Your own default preference for all parents",
        ],
        correctIndex: 0,
        explanation:
          "The most specific rule wins: the one-person rule, then the class rule, then your default.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "Neither side closes a request. What does the app do next?",
        options: [
          "It cancels the request and tells the other side",
          "It leaves it open and resends it every morning",
          "It calls the school after the first fortnight",
          "It emails them once after 48 hours have passed",
        ],
        correctIndex: 3,
        explanation:
          "If nobody presses We've started talking or Close this request within 48 hours, we email them once. The check runs daily, so it arrives within the following day.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "You have spoken to the parent by phone. What are you meant to press?",
        options: [
          "Ask them to get in touch, a second time",
          "Only through the school, on their own card",
          "We've started talking, on the open request",
          "Show my contact details, for that one parent",
        ],
        correctIndex: 2,
        explanation:
          "We've started talking closes the loop once the conversation has begun. The person you asked can also close the request themselves.",
        sourceLessonSlug: "parent-teacher-contact",
      },
    ]),

    // ══════════════════════════════════════════════════════════════════════
    // FINAL · 25 questions, drawn across both sections
    // ══════════════════════════════════════════════════════════════════════
    finalQuiz(SECTION_2, [
      {
        prompt: "Where does a student land after opening their invite link and signing in?",
        options: [
          "On the /live page, already enrolled in the class",
          "On the class roster page, waiting for approval",
          "On the school's home page, with a pending invite",
          "On the family page, linked to their own parent",
        ],
        correctIndex: 0,
        explanation:
          "Students open the one-time link, sign in with a magic link, and land on /live already enrolled.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "Which kind of account is blocked from creating a class?",
        options: [
          "One that holds admin rights on this whole school",
          "One that belongs to a student, such as a kid login",
          "One a school admin made a teacher earlier today",
          "One that ticked the 18 or older box a term ago",
        ],
        correctIndex: 1,
        explanation:
          "An account that belongs to a student, whether a child profile, a kid login or someone's linked student, cannot create a class.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "An admin adds you as the teacher of one class they created. What follows?",
        options: [
          "You can read its roster but cannot invite anyone",
          "You become a teacher of the whole school as well",
          "You must be added again each time the class meets",
          "It appears on your Cohorts page and you run it",
        ],
        correctIndex: 3,
        explanation:
          "The class appears on your /cohorts page and you run it exactly as its creator would, without being made a teacher of the school.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "The class page lists its Teachers. Who may add another one by email?",
        options: [
          "Any teacher of the school, class member or not",
          "Only a brand admin, never the class's creator",
          "The class's creator, or an admin of the school",
          "The parent of a student on that class's roster",
        ],
        correctIndex: 2,
        explanation:
          "The creator or a school admin can add a teacher by email, and that person must be a confirmed adult. A class always keeps at least one teacher.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "Where is the Adjust control found?",
        options: [
          "On the roster, beside the ● here marker",
          "On the student's dashboard, under grades",
          "On the class report, on each student's row",
          "On Admin → Teachers, beside the teacher",
        ],
        correctIndex: 2,
        explanation:
          "Every row of the class report carries an Adjust control, reached from the class page's report.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "Besides changing a quiz score, what can an adjustment do?",
        options: [
          "Move that student into a different class",
          "Delete an attempt the student sat badly",
          "Issue the course certificate straight away",
          "Mark a course complete, for display only",
        ],
        correctIndex: 3,
        explanation:
          "Marking a course complete is display only and issues no certificate.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What does an adjustment require before it can be saved?",
        options: [
          "A reason, which then stays on the record",
          "A second teacher's approval on the class",
          "The parent's consent from the family page",
          "A note left on the student's dashboard",
        ],
        correctIndex: 0,
        explanation:
          "A reason is required and stays on record, and it is shown alongside the adjusted value on every report.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What becomes of the student's real attempt when you adjust the grade?",
        options: [
          "It is overwritten by the value you adjusted to",
          "It stays underneath, with the new entry on top",
          "It is deleted as soon as a reason is recorded",
          "It is hidden from every report except the CSV",
        ],
        correctIndex: 1,
        explanation:
          "Nothing is ever edited or deleted. The adjustment is a new entry on top and the real attempt stays underneath.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "How does an adjusted value appear on the family view and the CSV?",
        options: [
          "As a plain number, with the reason on request",
          "Only on your own report, not on those two",
          "With a visible marker and the reason you gave",
          "As a footnote naming the admin who allowed it",
        ],
        correctIndex: 2,
        explanation:
          "Your report, the family view and the CSV all show the adjusted value with a visible marker and your reason, and the student sees both values on their dashboard.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What do adjustments do to a course's statistics?",
        options: [
          "They replace the attempt in every average",
          "They count once the reason has been read",
          "They pause the statistics for that course",
          "Nothing, statistics count real attempts only",
        ],
        correctIndex: 3,
        explanation:
          "Course statistics keep measuring real attempts only, which is why an adjustment never distorts them.",
        sourceLessonSlug: "cohorts",
      },
      {
        prompt: "What does the Admin → Teachers page list?",
        options: [
          "Everyone who teaches or administers this school",
          "Every account that has ever signed in here",
          "Every class the school is currently running",
          "Every parent linked to a student on the school",
        ],
        correctIndex: 0,
        explanation:
          "It lists everyone who teaches or administers this school, and it is where a school admin makes someone a teacher.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "What is the first step in making someone a teacher of the school?",
        options: [
          "Enter their email and press Make a teacher",
          "Ask them to sign in to this school once",
          "Add them to a class from that class page",
          "Ask them to send you a copy of their ID",
        ],
        correctIndex: 1,
        explanation:
          "They need an account on this school first, so step one is asking them to sign in here once.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "Does making someone a teacher here change their role on other schools?",
        options: [
          "Yes, on every school they have signed in to",
          "Yes, but only on schools the same brand owns",
          "No, unless they also teach a class over there",
          "No, the role applies to this one school only",
        ],
        correctIndex: 3,
        explanation:
          "Making someone a teacher here never changes their role on any other school.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "Who cannot be removed from the Admin → Teachers page?",
        options: [
          "Admins, who are managed on a separate screen",
          "Teachers who still run at least one live class",
          "Teachers who have written a course under Teach",
          "Anyone who ticked the adult box during this year",
        ],
        correctIndex: 0,
        explanation:
          "Admins are managed separately and cannot be removed on this page. Remove teacher only takes the teaching role away.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "Someone only needs to help with a single class. What is the lighter option?",
        options: [
          "Make them a teacher of the whole school",
          "Add them as a teacher on that class's page",
          "Make them an admin for as long as it runs",
          "Put them on the class roster as a guest",
        ],
        correctIndex: 1,
        explanation:
          "Create the class yourself, then add them as its teacher on the class page. They run that class and nothing else.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "What do you set alongside the embed URL when scheduling a session?",
        options: [
          "The roster of students allowed to watch it",
          "The number of minutes it is allowed to run",
          "The session's visibility, and a course to attach",
          "The address that should receive the recording",
        ],
        correctIndex: 2,
        explanation:
          "You set visibility, and optionally attach the session to a course so it appears on that course page.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "Going live, ending, and setting the recording are done where?",
        options: [
          "On the /live page, beside the session listing",
          "On the attached course's own lesson page",
          "On the class page under the Cohorts menu",
          "On the same screen the session was made on",
        ],
        correctIndex: 3,
        explanation:
          "Go live, end, and set the saved recording are all on the scheduling screen, Admin → Live.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "Who is allowed to take part in parent and teacher contact?",
        options: [
          "Adults already linked through a class, never students",
          "Any parent and any teacher belonging to this school",
          "Students, together with their parents and teachers",
          "Only the school's admins, on a family's request",
        ],
        correctIndex: 0,
        explanation:
          "Only a student's parent and that student's teachers, both confirmed adults, and both already linked through a class. Students are never part of it.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "A parent has chosen Only through the school. What can their child's teacher do in the app?",
        options: [
          "Ask them once, and read the reply by email",
          "See their email address but not their phone",
          "Nothing, and is pointed to the school instead",
          "Ask an admin to reveal the hidden details",
        ],
        correctIndex: 2,
        explanation:
          "Only through the school means they cannot be asked in the app at all, and the other side is pointed to the school.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "What does Show my contact details put in front of the other side?",
        options: [
          "Your home address as well as your account email",
          "Your account email, plus a phone if you add one",
          "Your account email and a link to a student's work",
          "Your phone number only, never the email you use",
        ],
        correctIndex: 1,
        explanation:
          "They see your account email, plus a phone number and a best time note if you add them. Both of those are optional.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "Under Ask me to get in touch, what arrives with a request?",
        options: [
          "Nothing beyond the name of the person asking",
          "The school admin's details, for you to go through",
          "A copy of the preference the other side has set",
          "Their details, so you can reach them yourself",
        ],
        correctIndex: 3,
        explanation:
          "Your own details stay hidden, but you see theirs with the request, along with the student's name and a link to the student's work.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "Where does a teacher set one contact rule covering a whole class?",
        options: [
          "On Admin → Teachers, beside their own name",
          "On the family page of each parent involved",
          "On the class report, right next to Adjust",
          "On that class's page, under Parent contact",
        ],
        correctIndex: 3,
        explanation:
          "Parent contact for this class sits on the class page, for rules like parents in Tuesday Science going through the school.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "Somebody has asked you to get in touch. Where do you notice it?",
        options: [
          "A count beside Family or Cohorts in the menu",
          "A banner across the top of your dashboard",
          "An email sent the moment they press the button",
          "A red dot on the student's own roster row",
        ],
        correctIndex: 0,
        explanation:
          "They see a count next to Family or Cohorts in the menu, and the request itself sits on your card.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "Who may close an open request, and what are you told about it?",
        options: [
          "Only the asker, and the other side is emailed",
          "Only a school admin, and both sides are told",
          "Either side, and you are not told who closed it",
          "Only the teacher, and the parent sees a notice",
        ],
        correctIndex: 2,
        explanation:
          "The person you asked can close the request themselves, and it then closes for both of you without saying who closed it.",
        sourceLessonSlug: "parent-teacher-contact",
      },
      {
        prompt: "How long does an unresolved request stay on the cards?",
        options: [
          "It stays until one of the two people closes it",
          "It disappears after 14 days without being closed",
          "It disappears the day after the first reminder",
          "It stays for a school term and then is archived",
        ],
        correctIndex: 1,
        explanation:
          "A request disappears after 14 days. You can ask the same person about the same student again a day later.",
        sourceLessonSlug: "parent-teacher-contact",
      },
    ]),
  ],
};
