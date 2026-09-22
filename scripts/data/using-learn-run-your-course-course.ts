// "Teach and run your course" (USING-T2), the second Teacher course in the "Using Learn.WitUS"
// series. RESEARCH TIER 1 (product documentation): every lesson body is the help article itself,
// read from src/lib/help-articles.ts at seed time by `helpLesson`, so nothing here can drift from
// the page it teaches.
//
// Brief: plans/future-courses/using-learn/2026-09-21-using-learn-paths-brief.md, approved by BAM
// 2026-09-22 (rubric v1.3 gate A8). The brief's row USING-T2 fixes the six articles and their
// order: live-sessions, streaming-and-multistream, learner-feedback-and-reports,
// notes-and-annotations, in-course-search, ai-tools-embeddings-audit.
//
// ASSESSMENT SIZE: the series exception recorded in using-learn-shared.ts (rubric D2, BAM
// 2026-09-22). Each section quiz pools 10 and serves 5; the final pools 25, serves 10, passes at
// 80. Every question carries `explanation` and `sourceLessonSlug`, and every teaching section has
// a quiz.
//
// QUIZ HOUSE STYLE: four options per question kept within a few characters of each other, so
// "always click the longest option" scores at chance and check-longest-option passes by
// construction rather than by an allowlist entry. `correctIndex` is spread across 0..3 in every
// bank (the shared builders also shuffle). Distractors are drawn from real controls in this
// course's own six articles, used for the wrong thing, so each one is specific and definitively
// wrong rather than filler. No em dashes anywhere.
//
// WHAT IS DELIBERATELY NOT ASKED: `in-course-search` says the Search this course box belongs to
// "enrolled learners (and you, on your own courses)", but the course page also renders it for an
// invited auditor (src/app/(tenant)/[username]/[courseSlug]/page.tsx, view.isAuditor). The article
// and the code disagree about the audience, so no question in this file turns on exactly who sees
// the box; the two search questions ask what it matches and where it sits instead.
import type { AuthoredCourse } from "./authored-course";
import { finalQuiz, helpLesson, sectionQuiz } from "./using-learn-shared";

const S1 = "Section 1 · Live and streaming";
const S2 = "Section 2 · What your learners send back";

export const USING_LEARN_RUN_YOUR_COURSE_COURSE: AuthoredCourse = {
  title: "Teach and run your course",
  description:
    "Schedule live sessions, keep an always-on stream running between them, and fan one broadcast out to your socials. Then read everything your learners send back: lesson feedback, problem reports, the notes they share with you, and the searches that show what they were looking for.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 · Live and streaming
    // ══════════════════════════════════════════════════════════════════════
    helpLesson(
      "live-sessions",
      S1,
      "Open Admin → Live and schedule one session, pasting your streaming service's player embed URL and setting its visibility. Attach it to a course you own, then open that course page and confirm the session is showing there. Finish on /live and check your new session is in the school's list.",
    ),
    helpLesson(
      "streaming-and-multistream",
      S1,
      "Open /admin/live, paste a provider embed code or a direct https player URL into Always-on stream, and Save. If the host is rejected, read the message: it names the host it refused. With no scheduled session live, open your school's Live page and confirm the always-on stream is what plays.",
    ),
    sectionQuiz(S1, 1, [
      {
        prompt: "Which screen does the article say you schedule a live class from?",
        options: [
          "Admin → Live, the school's live session screen",
          "Teach → Curriculum feedback, the lesson queue",
          "Admin → Problem reports, the bug triage list",
          "Family → Report, the guardian summary page",
        ],
        correctIndex: 0,
        explanation:
          "Live classes are scheduled from Admin → Live. Curriculum feedback, Problem reports and the Family report are all real screens, but none of them creates a session.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What do you paste in when you schedule a live class?",
        options: [
          "The RTMP ingest URL and its stream key",
          "Your streaming service's player embed URL",
          "The player's raw HTML, stored as pasted",
          "The course page URL of the attached course",
        ],
        correctIndex: 1,
        explanation:
          "A scheduled session takes the player embed URL from your streaming service. RTMP ingest URLs and stream keys belong to multistream targets, not to a session.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What does attaching a scheduled session to a course do?",
        options: [
          "It mirrors the session to the WitUS Inbox",
          "It adds the session to the Family report",
          "It shows the session on that course page",
          "It re-indexes that course's lesson embeddings",
        ],
        correctIndex: 2,
        explanation:
          "An attached session appears on the course page. Inbox mirroring is for feedback, the Family report carries teacher notes, and re-indexing is an Instructor tools job.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "Where do you go live, end a session, and set its saved recording?",
        options: [
          "On the school's /live page, per session",
          "In /admin/live under Multistream targets",
          "From Instructor tools on the course page",
          "On the same screen you scheduled it from",
        ],
        correctIndex: 3,
        explanation:
          "All three controls sit on the scheduling screen itself. /live is the public listing, multistream targets are OBS configuration, and Instructor tools run the AI features.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What does the article say the dedicated /live page does?",
        options: [
          "Lists all of the school's live sessions",
          "Holds the always-on stream's embed field",
          "Triages problem reports for the school",
          "Shows notes a teacher sent to the class",
        ],
        correctIndex: 0,
        explanation:
          "The /live page is the school-wide list of sessions. The always-on embed field lives in /admin/live, and the other two are different screens entirely.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "Who does the article say manages streaming under /admin/live?",
        options: [
          "Any teacher who owns a course in the school",
          "The platform owner or a brand admin",
          "Any enrolled learner in the live session",
          "A guardian reading the Family report",
        ],
        correctIndex: 1,
        explanation:
          "Streaming is a platform owner or brand admin screen. Owning a course does not open it, and learners and guardians never see it.",
        sourceLessonSlug: "streaming-and-multistream",
      },
      {
        prompt: "When you save an always-on embed code, what does the app keep?",
        options: [
          "The raw HTML exactly as you pasted it",
          "The RTMP ingest URL and the stream key",
          "Only the player URL, never the raw HTML",
          "A copy of the broadcast for later replay",
        ],
        correctIndex: 2,
        explanation:
          "The app extracts and stores the player URL and discards the markup. It never stores raw HTML, and it does not record or host the broadcast.",
        sourceLessonSlug: "streaming-and-multistream",
      },
      {
        prompt: "When does your school's Live page show the always-on stream?",
        options: [
          "Only while a scheduled session is live",
          "Only after the saved recording is set",
          "Only when an enrolled learner opens it",
          "Whenever no scheduled session is live",
        ],
        correctIndex: 3,
        explanation:
          "The always-on stream is the fallback: it plays whenever no scheduled session is live, so the Live page is never empty.",
        sourceLessonSlug: "streaming-and-multistream",
      },
      {
        prompt: "In the multistream setup, what actually sends the broadcast out?",
        options: [
          "OBS, using its multiple-output setting",
          "The app, from the stored target configs",
          "The always-on stream on the Live page",
          "The provider embed on the course page",
        ],
        correctIndex: 0,
        explanation:
          "You copy each target into OBS's multiple-output and OBS does the broadcasting. The app only stores the configuration you typed in.",
        sourceLessonSlug: "streaming-and-multistream",
      },
      {
        prompt: "Why does the article tell you to update stream keys before a broadcast?",
        options: [
          "Because the app rotates them on each save",
          "Because they are often single-use keys",
          "Because OBS cannot store them for long",
          "Because the Live page reads them hourly",
        ],
        correctIndex: 1,
        explanation:
          "Destinations often issue a stream key that works once, so a key left over from the last broadcast fails. The app does not rotate anything on your behalf.",
        sourceLessonSlug: "streaming-and-multistream",
      },
    ]),
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 · What your learners send back
    // ══════════════════════════════════════════════════════════════════════
    helpLesson(
      "learner-feedback-and-reports",
      S2,
      "Open /teach → Curriculum feedback and read what learners have left on your own courses, then open Admin → Problem reports and triage what the Report a problem button collected. Run the feedback:list and reports:list scripts to read the same two queues from the command line. Check a timestamp and remember it is when the server received the note, not when it was written.",
    ),
    helpLesson(
      "notes-and-annotations",
      S2,
      "Open one of your lessons and use Send a note to your class, once for a whole class and once for just the students you pick. Look at Shared with you by students on that same lesson, then use the search box to find both across the whole course and read whose note each result says it is.",
    ),
    helpLesson(
      "in-course-search",
      S2,
      "Open one of your own courses and use the Search this course box for a phrase you know is in a lesson. Search again for words that appear only in a figure's alt text, caption or credit, so you can watch it find the text attached to an image rather than the picture.",
    ),
    helpLesson(
      "ai-tools-embeddings-audit",
      S2,
      "Scroll to Instructor tools at the bottom of your own course page and run Generate / Re-index embeddings. Edit a lesson, come back, and look for the badge counting lessons changed since the last index, then click Re-index lessons. Run Audit reveals and check each answer it flags against its lesson before you change the card.",
    ),
    sectionQuiz(S2, 2, [
      {
        prompt: "Where does a teacher read the corrections and questions learners leave on lessons?",
        options: [
          "At /teach, under Curriculum feedback",
          "At Admin → Problem reports, under bugs",
          "In the Family report, under shared notes",
          "In Instructor tools, under Audit reveals",
        ],
        correctIndex: 0,
        explanation:
          "Curriculum feedback sits at /teach and each teacher sees their own courses' feedback. Problem reports are a separate admin queue for the site-wide button.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "What happens to a problem report written with no network connection?",
        options: [
          "It is discarded and the learner is told",
          "It is held on the device until it sends",
          "It is mailed to the teacher on reconnect",
          "It is saved as a private note on the lesson",
        ],
        correctIndex: 1,
        explanation:
          "The note is held on that device, marked Waiting to send, and posts itself once the connection is back. It survives a reload and a closed tab.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "What moment does a report's timestamp record?",
        options: [
          "When the learner started writing it",
          "When the device first went offline",
          "When the server received the note",
          "When the teacher first opened it",
        ],
        correctIndex: 2,
        explanation:
          "Because a held note can post hours later, the timestamp is the moment of receipt, not the moment of writing. Read an old queue with that in mind.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "By default, who can read a note a learner takes on a lesson?",
        options: [
          "The teacher who owns the course",
          "Everyone enrolled in the course",
          "The learner's guardians as well",
          "Only the learner who wrote it",
        ],
        correctIndex: 3,
        explanation:
          "A note is private to its author until that author shares it, one note at a time. There is deliberately no switch that shares a whole set of notes.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What happens to a note pinned to a passage when the lesson text changes?",
        options: [
          "It is kept and marked that the text changed",
          "It is deleted along with its highlight",
          "It is moved to the next passage in the lesson",
          "It is re-pinned to the nearest heading",
        ],
        correctIndex: 0,
        explanation:
          "The note survives the edit and says the text it was attached to has changed. Nothing is deleted and nothing is silently re-anchored somewhere else.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "How does a note you send your class reach your students?",
        options: [
          "As an email to each student's address",
          "In their notes panel on that lesson",
          "As a site notification on next sign-in",
          "As a line in Curriculum feedback for you",
        ],
        correctIndex: 1,
        explanation:
          "A class note appears in those students' notes panel on that lesson and never leaves the lesson page. It is not an email and not a notification.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "A student withdraws a note they shared with you. What happens in your search?",
        options: [
          "The result stays until you re-run it",
          "The result stays but is marked hidden",
          "The result disappears straight away",
          "The result moves under your class notes",
        ],
        correctIndex: 2,
        explanation:
          "A withdrawn share leaves your search the moment it is withdrawn. Sharing is the student's to reverse at any time.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "Besides lesson text, what does the Search this course box find?",
        options: [
          "Notes other learners wrote on the lessons",
          "Problem reports filed against the course",
          "Live session recordings from the Live page",
          "Self-check questions and image descriptions",
        ],
        correctIndex: 3,
        explanation:
          "It searches lesson text, self-check questions and answers, and the alt text, captions and credits attached to figures. Notes have their own separate search.",
        sourceLessonSlug: "in-course-search",
      },
      {
        prompt: "When does a course re-index its lesson embeddings on its own?",
        options: [
          "When you publish the course",
          "When a learner opens a lesson",
          "When you save any lesson edit",
          "When the AI key is configured",
        ],
        correctIndex: 0,
        explanation:
          "Publishing re-indexes automatically. Edits made after that are only counted in the badge until you click Re-index lessons yourself.",
        sourceLessonSlug: "ai-tools-embeddings-audit",
      },
      {
        prompt: "How should you treat what Audit reveals reports?",
        options: [
          "As a fix already applied to the card",
          "As advice to verify before you change",
          "As a blocker that holds publication",
          "As a message sent to your learners",
        ],
        correctIndex: 1,
        explanation:
          "It is an advisory AI suggestion, so verify a flagged answer against its lesson before editing. It changes nothing and blocks nothing on its own.",
        sourceLessonSlug: "ai-tools-embeddings-audit",
      },
    ]),
    finalQuiz(S2, [
      {
        prompt: "What do you set on a live session besides its player embed URL?",
        options: [
          "Its visibility, and optionally a course",
          "Its RTMP ingest URL and stream key",
          "Its price and its coming-soon hold",
          "Its AI key and its index schedule",
        ],
        correctIndex: 0,
        explanation:
          "Scheduling takes the embed URL, a visibility setting, and an optional course to attach it to. Ingest URLs, pricing and indexing are other screens.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "A scheduled session attached to a course shows up where?",
        options: [
          "In the course's Instructor tools panel",
          "On that course's own course page",
          "In the Curriculum feedback queue",
          "In the notes panel of every lesson",
        ],
        correctIndex: 1,
        explanation:
          "Attaching puts the session on the course page, which is how enrolled learners find it. Instructor tools hold the AI features, not sessions.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What sits on the dedicated /live page?",
        options: [
          "The multistream targets you saved",
          "The always-on stream's embed field",
          "Every live session for the school",
          "The recordings you have not set yet",
        ],
        correctIndex: 2,
        explanation:
          "The /live page lists all of the school's sessions. Targets and the always-on embed field are both configuration screens under /admin/live.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "Where do you set a session's saved recording once it is over?",
        options: [
          "In Instructor tools on the course page",
          "On the school's public /live page",
          "Under Multistream targets in /admin/live",
          "On the screen you scheduled it from",
        ],
        correctIndex: 3,
        explanation:
          "Go live, end, and set the saved recording are all on the scheduling screen. /live is where learners read the result, not where you edit it.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What two things can you paste into Always-on stream?",
        options: [
          "An embed code or a direct https player URL",
          "An RTMP ingest URL or a stream key",
          "A course page link or a lesson link",
          "A saved recording file or its transcript",
        ],
        correctIndex: 0,
        explanation:
          "The field takes your provider's embed code, an iframe from Viloud or YouTube and the like, or a direct https player URL. Only the player URL is stored.",
        sourceLessonSlug: "streaming-and-multistream",
      },
      {
        prompt: "The always-on field rejects your player's host. What does the message tell you?",
        options: [
          "That your AI key has not been configured",
          "Which host it refused, by name",
          "That the session is already live",
          "That the stream key has expired",
        ],
        correctIndex: 1,
        explanation:
          "The rejection names the host, which is what you need in order to add it to the trusted hosts in src/lib/stream-embed.ts.",
        sourceLessonSlug: "streaming-and-multistream",
      },
      {
        prompt: "What goes into a multistream target?",
        options: [
          "A player embed URL and a visibility",
          "A course slug and an instructor name",
          "An RTMP ingest URL and a stream key",
          "A trusted host and a saved recording",
        ],
        correctIndex: 2,
        explanation:
          "Each destination is an RTMP ingest URL plus its stream key. The embed URL and visibility belong to a scheduled session instead.",
        sourceLessonSlug: "streaming-and-multistream",
      },
      {
        prompt: "What part of a multistream does the app itself do?",
        options: [
          "It fans one broadcast out to the socials",
          "It rotates each destination's stream key",
          "It records the broadcast for the course",
          "It stores the configuration you enter",
        ],
        correctIndex: 3,
        explanation:
          "The app only stores the targets. OBS reads them into its multiple-output and does the fanning out, and nothing here records the broadcast.",
        sourceLessonSlug: "streaming-and-multistream",
      },
      {
        prompt: "Which roles does the article put in charge of /admin/live?",
        options: [
          "Platform owner and brand admin",
          "Course instructor and cohort lead",
          "Enrolled learner and their guardian",
          "Any teacher added to the school",
        ],
        correctIndex: 0,
        explanation:
          "Streaming configuration is a platform owner or brand admin screen, which is why it lives under /admin rather than /teach.",
        sourceLessonSlug: "streaming-and-multistream",
      },
      {
        prompt: "Where are problem reports triaged?",
        options: [
          "At /teach, under Curriculum feedback",
          "At Admin → Problem reports",
          "In the WitUS Inbox, by the owner",
          "In Instructor tools, under Audit",
        ],
        correctIndex: 1,
        explanation:
          "The site-wide Report a problem button feeds Admin → Problem reports. Curriculum feedback is the separate per-teacher queue for lesson comments.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "What kinds does the Report a problem button offer?",
        options: [
          "Correction, comment, or question",
          "Outage, billing, or account issue",
          "Bug, feedback, idea, or other",
          "Typo, wrong date, or broken link",
        ],
        correctIndex: 2,
        explanation:
          "The button takes bug, feedback, idea or other. Corrections, comments and questions are the curriculum feedback learners leave on a lesson.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "Which pair of scripts reads the two queues from the command line?",
        options: [
          "teach:list and admin:list",
          "notes:list and search:list",
          "live:list and stream:list",
          "feedback:list and reports:list",
        ],
        correctIndex: 3,
        explanation:
          "feedback:list prints curriculum feedback and reports:list prints problem reports, so neither queue needs copy and paste out of a dashboard.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "Which feedback also mirrors to the WitUS Inbox?",
        options: [
          "Feedback left on the owner's courses",
          "Every problem report filed that week",
          "Notes students share with a teacher",
          "Search misses on the course page",
        ],
        correctIndex: 0,
        explanation:
          "Only feedback on the owner's own courses is mirrored to the Inbox. Shared notes never leave the lesson page they were written on.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "The server rejects a note that was held offline. What does the learner see?",
        options: [
          "A retry that runs quietly in the background",
          "The note kept, with the reason why",
          "An empty box and a fresh draft",
          "A copy mailed to the teacher instead",
        ],
        correctIndex: 1,
        explanation:
          "A rejected note stays on screen with the server's reason, so the text can be copied out. Nothing is lost quietly.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "A learner's session expired while they were offline. What happens to their note?",
        options: [
          "It is dropped and has to be retyped",
          "It is posted under a guest account",
          "It is kept; they are asked to sign in",
          "It is mailed to the school's admin",
        ],
        correctIndex: 2,
        explanation:
          "The note is kept and the learner is asked to sign in again. An expired session is never a reason to drop what they wrote.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "What does Add note do after you select text in a lesson?",
        options: [
          "It sends the passage to your teacher",
          "It copies the passage into a downloaded file",
          "It flags the passage as a correction",
          "It pins the note there and highlights it",
        ],
        correctIndex: 3,
        explanation:
          "Add note anchors the note to that exact passage and highlights it. Sharing with a teacher and downloading notes are separate controls.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What does a learner's Search notes in this course cover?",
        options: [
          "Their own notes plus notes sent to them",
          "Every note written in the course by anyone",
          "Their own notes on the current lesson only",
          "Their notes and their classmates' highlights",
        ],
        correctIndex: 0,
        explanation:
          "It finds their own notes and highlights plus any note a teacher sent them, across the whole course. Nobody else's notes are searchable.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What does Download my notes (.md) put in the file?",
        options: [
          "Every note shared with them by a teacher",
          "Their own notes, passages and lesson links",
          "The full lesson text around each highlight",
          "A class summary their guardian can read",
        ],
        correctIndex: 1,
        explanation:
          "The export is the learner's own notes with the quoted passages and links back to the lessons they came from.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "Where do notes students shared with you appear?",
        options: [
          "In the Curriculum feedback queue",
          "In a digest mailed to you nightly",
          "On the lesson they wrote them on",
          "In the Family report for that class",
        ],
        correctIndex: 2,
        explanation:
          "Shared notes show under Shared with you by students on the lesson they were written on, and the course search finds them too.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What does the Family report show a guardian about notes?",
        options: [
          "Every note their child wrote this term",
          "Any note their child shared with a peer",
          "The highlights their child made in class",
          "The notes a teacher sent their child",
        ],
        correctIndex: 3,
        explanation:
          "The report shows notes a teacher sent the child. The child's own notes stay private unless the child shares them, and the report says so.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What are the individual and group options on a class note?",
        options: [
          "Narrower audiences for the same note",
          "Separate note types with their own panel",
          "Sharing levels a student picks instead",
          "Grading modes for the teacher's reply",
        ],
        correctIndex: 0,
        explanation:
          "Individual and group are just smaller audiences for the note you attach to a lesson, not different kinds of note.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What does the course search actually match on a figure?",
        options: [
          "The picture itself, by visual similarity search",
          "The text attached to it, such as alt text",
          "The file name the figure was uploaded as",
          "The lesson heading the figure sits under",
        ],
        correctIndex: 1,
        explanation:
          "It matches the alt text, captions and credits every figure carries, not the pictures themselves. The empty state says so in those words.",
        sourceLessonSlug: "in-course-search",
      },
      {
        prompt: "Where does the Search this course box sit?",
        options: [
          "At the bottom of every lesson page",
          "In the Instructor tools panel",
          "On the course page itself",
          "In the /teach dashboard header",
        ],
        correctIndex: 2,
        explanation:
          "The box is on the course page. The notes panel is what sits at the bottom of a lesson, and Instructor tools are a separate panel again.",
        sourceLessonSlug: "in-course-search",
      },
      {
        prompt: "What do a course's lesson embeddings power?",
        options: [
          "The course search box on the course page",
          "The offline queue that holds a note",
          "The multistream fan-out to your socials",
          "Chat with your sources and the crossroads",
        ],
        correctIndex: 3,
        explanation:
          "Embeddings drive chat-with-your-sources and the CYOA crossroads, and they need an AI key. The course search box is a separate feature.",
        sourceLessonSlug: "ai-tools-embeddings-audit",
      },
      {
        prompt: "Where does the Instructor tools panel appear?",
        options: [
          "At the bottom of your own course page",
          "In /admin/live beside the stream field",
          "At the top of each lesson you wrote",
          "In /teach beside Curriculum feedback",
        ],
        correctIndex: 0,
        explanation:
          "Instructor tools sit at the bottom of the course page when you are its instructor, which is where the re-index badge shows up too.",
        sourceLessonSlug: "ai-tools-embeddings-audit",
      },
    ]),
  ],
};
