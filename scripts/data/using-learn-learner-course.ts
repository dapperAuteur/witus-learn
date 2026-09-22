import type { AuthoredCourse } from "./authored-course";
import { helpLesson, sectionQuiz, finalQuiz } from "./using-learn-shared";

// "Learning on Learn.WitUS" (USING-L1, the Learner path of the "Using Learn.WitUS" series).
// RESEARCH TIER 1: product documentation, ours. Brief:
// plans/future-courses/using-learn/2026-09-21-using-learn-paths-brief.md, approved by BAM
// 2026-09-22 (rubric v1.3 gate A8). Nine lessons, one per help article, in the order the brief's
// USING-L1 row lists them.
//
// NO LESSON PROSE IS COPIED HERE. `helpLesson` reads each body from src/lib/help-articles.ts at
// seed time, so an edited article flows into the course on the next seed and a deleted one throws
// instead of silently emptying a lesson. The only authored prose per lesson is its "Try it" step,
// and each one names only controls its own article names.
//
// ASSESSMENT SIZE (rubric D2 exception, BAM 2026-09-22, recorded in using-learn-shared.ts): three
// section quizzes of 10 serving 5 at 80, and a final pooling 25 and serving 10 at 80. Every
// question carries `sourceLessonSlug` pointing at one of this course's nine article lessons.
//
// WHAT THIS COURSE DOES NOT ASK. Three of its articles are written partly for the person running
// the school (the vetting queue, the category manager, the sales form). Questions are kept to what
// a learner meets or can see: the Coming soon page and its two forms, the catalog filter, the sale
// price on a course page. Owner-only mechanics that a learner never touches (the /admin/leads
// demand board, the CSV export, "Open while unvetted", `pnpm feedback:list`) are taught by the
// article text but are not assessed here; the Teacher and School admin paths assess them.
//
// Options in every bank are written to within a few characters of each other so "always click the
// longest" scores no better than guessing (scripts/check-longest-option.ts), and `correctIndex` is
// spread across 0..3 in every bank on top of the shuffle the builders set.
export const USING_LEARN_LEARNER_COURSE: AuthoredCourse = {
  title: "Learning on Learn.WitUS",
  description:
    "Learn how to find a course on Learn.WitUS, tell an open course from one that is still coming soon, and read a sale price correctly. You will also search inside a course, keep and share notes, drill with Quick recall, join a live session, report a problem, and share what you are studying.",
  lessons: [
    // ---------------------------------------------------------------- Section 1 · Find a course
    helpLesson(
      "vetting-and-coming-soon",
      "Section 1 · Find a course",
      "Find a course whose page shows Coming soon instead of a lesson list. Leave your address on the \"Get notified when this course opens\" form, then open \"Want to help this course open?\" and read the three things a visitor can offer there. Notice that the page gives no expected date, on purpose.",
    ),
    helpLesson(
      "categories",
      "Section 1 · Find a course",
      "Open the catalog at /courses and use the category filter to narrow it to one category, then clear it again. Compare how many courses each view shows, and remember that a course with no category will not appear under any of them.",
    ),
    helpLesson(
      "sales-and-promotions",
      "Section 1 · Find a course",
      "Open a course or bundle page that is on sale and find the list price struck through in red with the sale price beside it in green. Read the price aloud the way a screen reader does, \"was $19, now $9\", so you hear which number is the real one today.",
    ),
    sectionQuiz("Section 1 · Find a course", 1, [
      {
        prompt: "On a course that has not been vetted, what does a visitor see in place of the lesson list?",
        options: [
          "A Coming soon page with no lesson titles",
          "A locked lesson list with titles visible",
          "A checkout page asking for payment first",
          "A blank page that search engines ignore",
        ],
        correctIndex: 0,
        explanation:
          "The landing page stays public and indexable, but the content is closed: no lesson list, no lesson titles, no media, no price, and no enroll button.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "What happens to a learner who is already enrolled when a course is marked unvetted?",
        options: [
          "They lose access until it is re-vetted",
          "They are refunded and then unenrolled",
          "They keep full access to every lesson",
          "They keep access for thirty more days",
        ],
        correctIndex: 2,
        explanation:
          "Un-vetting never locks out someone already studying the course, including anyone who paid. The instructor and the platform owner keep access too.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "What does the Coming soon page deliberately leave off?",
        options: [
          "The title and description of the course",
          "An expected date for the course to open",
          "The academic standards the course meets",
          "The link that visitors can share around",
        ],
        correctIndex: 1,
        explanation:
          "There is deliberately no expected date, because a missed date is worse than no date. The title, description, standards and shareable link all stay.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "Besides asking to be notified, what can a visitor offer on \"Want to help this course open?\"",
        options: [
          "To co-teach it once it opens to others",
          "To pay early and lock the launch price",
          "To translate it before the review ends",
          "To test it, or to vet it as an expert",
        ],
        correctIndex: 3,
        explanation:
          "The longer form takes one of three offers: to take the course when it opens, to test it before it opens, or to vet it as a subject matter expert.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "Where does a school manage the list of categories itself?",
        options: [
          "In Course settings, under Category",
          "In the catalog filter on the course list",
          "In Admin, on the Categories page",
          "In the course landing page sidebar",
        ],
        correctIndex: 2,
        explanation:
          "Admin then Categories is where categories are added, renamed and deleted. Course settings only picks which category one course carries.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "What happens to a category's courses when that category is renamed?",
        options: [
          "They move onto the new label",
          "They become uncategorized",
          "They are hidden from the catalog",
          "They keep the old label as a tag",
        ],
        correctIndex: 0,
        explanation:
          "Renaming moves its courses onto the new label. Becoming uncategorized is what happens on a delete, not a rename.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "What does deleting a category do to the courses that were in it?",
        options: [
          "It deletes those courses along with it",
          "It leaves those courses uncategorized",
          "It moves those courses to a new label",
          "It hides those courses from the catalog",
        ],
        correctIndex: 1,
        explanation:
          "Deleting a category leaves its courses uncategorized. The courses themselves are untouched.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "What separates a sale from a promo code?",
        options: [
          "A sale applies only to bundles, not courses",
          "A sale replaces the list price permanently",
          "A sale needs a code, a promo code does not",
          "A sale needs no code, a promo code does",
        ],
        correctIndex: 3,
        explanation:
          "A sale is a price cut everyone sees with no code to type. A promo code is the other half: a code given to one person or one list, and it still discounts a course already on sale.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "A course sale and a school-wide sale overlap on the same course. Which price applies?",
        options: [
          "The school-wide one, if it is bigger",
          "The course sale, even if smaller",
          "The one that started first, always",
          "Neither, the list price is restored",
        ],
        correctIndex: 1,
        explanation:
          "A sale on one course beats a school-wide sale on that course even when the school-wide one is bigger. The bigger-discount rule only settles sales of the same kind.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "What does checkout do when a sale brings a course all the way to Free?",
        options: [
          "It enrolls the learner with no card",
          "It charges a one dollar holding fee",
          "It asks for a card but does not bill",
          "It emails a code to redeem later on",
        ],
        correctIndex: 0,
        explanation:
          "A sale that reaches Free enrolls the learner straight away, with no card and no payment step.",
        sourceLessonSlug: "sales-and-promotions",
      },
    ]),

    // ------------------------------------------------------------- Section 2 · Study the course
    helpLesson(
      "in-course-search",
      "Section 2 · Study the course",
      "Open a course you are enrolled in and find the \"Search this course\" box on the course page. Search a phrase you remember from a lesson, then search a word that appears only in a figure's caption or credit and watch it come back too. Read the empty state, which says plainly that it searches the text attached to images, not the pictures.",
    ),
    helpLesson(
      "notes-and-annotations",
      "Section 2 · Study the course",
      "Open a lesson and scroll to the \"My notes\" panel at the bottom. Select a sentence in the lesson, choose \"Add note\" to pin it to that passage, then use \"Share with teacher\" on that one note and read the line saying who can see it. Finish with \"Search notes in this course\" and \"Download my notes (.md)\".",
    ),
    helpLesson(
      "quick-recall",
      "Section 2 · Study the course",
      "Work through a lesson's click-to-reveal cards before the quiz and grade each one honestly, \"I got it\" or \"Missed it\". Then open /dashboard and read your Check-yourself history to see what you missed, how often, and which items are due for another try.",
    ),
    sectionQuiz("Section 2 · Study the course", 2, [
      {
        prompt: "What does the Search this course box look through?",
        options: [
          "Lesson text and the lesson titles only",
          "Lesson text, self-checks, and alt text",
          "Only the quiz questions in the course",
          "Lesson text and the instructor's notes",
        ],
        correctIndex: 1,
        explanation:
          "It finds where the course said something: lesson text, self-check questions and answers, and image descriptions.",
        sourceLessonSlug: "in-course-search",
      },
      {
        prompt: "What should you be precise about when you tell a student what the course search covers?",
        options: [
          "It searches the pictures themselves",
          "It searches only figures with credits",
          "It searches images across all courses",
          "It searches text attached to images",
        ],
        correctIndex: 3,
        explanation:
          "It searches the text attached to images, not the pictures. The empty state says so in those words.",
        sourceLessonSlug: "in-course-search",
      },
      {
        prompt: "Which text is every figure in this catalog required to carry?",
        options: [
          "Alt text, captions, and credits",
          "A caption and a licence code only",
          "A credit line and a file name",
          "Alt text and a copyright notice",
        ],
        correctIndex: 0,
        explanation:
          "Alt text, captions and credits are required on every figure, which is exactly why the course search can find a lesson through its images.",
        sourceLessonSlug: "in-course-search",
      },
      {
        prompt: "Who can read a note you take on a lesson, before you do anything else with it?",
        options: [
          "You and every teacher of your classes",
          "You and everyone enrolled in the course",
          "Only you, until you share it yourself",
          "You and the instructor who wrote it",
        ],
        correctIndex: 2,
        explanation:
          "A note is private to its author unless they explicitly share it, one note at a time. There is deliberately no share-all switch anywhere.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What happens to a pinned note when the lesson passage it was attached to changes?",
        options: [
          "It is kept and marked that text changed",
          "It is deleted along with the old text",
          "It is moved to the end of the lesson",
          "It is hidden until you re-pin it",
        ],
        correctIndex: 0,
        explanation:
          "The note is kept and marked that the text it was attached to has changed. It is never deleted.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What is \"Send a note to your class\", from the student's side?",
        options: [
          "An email sent to the whole class list",
          "A note on that lesson for those students",
          "A push notification to their phones",
          "A private message in the class chat",
        ],
        correctIndex: 1,
        explanation:
          "It attaches a note to that lesson for a class or the students chosen, and it appears in their notes panel. It is not an email or a notification and never leaves the lesson page.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What does \"Search notes in this course\" return for a learner?",
        options: [
          "Every note written by anyone enrolled",
          "Only notes you pinned to a passage",
          "Only notes your teacher has approved",
          "Your notes, plus notes a teacher sent",
        ],
        correctIndex: 3,
        explanation:
          "It finds a learner's own notes and highlights plus any note a teacher sent them. Nobody else's notes are searchable, and the box says so.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What is a Quick recall prompt, as authored in the lesson editor?",
        options: [
          "Extra quiz questions with four options",
          "Flashcards imported from another course",
          "A question and answer pair for a lesson",
          "Timed drills that run before the lesson",
        ],
        correctIndex: 2,
        explanation:
          "Quick recall prompts are question and answer pairs. Learners meet them as click-to-reveal cards in the lesson, before the quiz.",
        sourceLessonSlug: "quick-recall",
      },
      {
        prompt: "How does a learner grade a recall card after revealing its answer?",
        options: [
          "I got it, or Missed it",
          "Correct, or try again",
          "Easy, medium, or hard",
          "Pass, or fail the card",
        ],
        correctIndex: 0,
        explanation:
          "Learners self-grade each card as \"I got it\" or \"Missed it\", and inline Check yourself cards work the same way.",
        sourceLessonSlug: "quick-recall",
      },
      {
        prompt: "Where do those self-grades surface for the person running the course?",
        options: [
          "As a badge on each learner's profile",
          "As Recall accuracy on the course page",
          "As a column in the quiz average table",
          "As a weekly email digest of misses",
        ],
        correctIndex: 1,
        explanation:
          "Self-grades roll up into Recall accuracy on the course page, the signal for whether the material is sticking in the lesson rather than only at quiz time.",
        sourceLessonSlug: "quick-recall",
      },
    ]),

    // ------------------------------------------------------------------ Section 3 · Take part
    helpLesson(
      "live-sessions",
      "Section 3 · Take part",
      "Open /live and read the list of sessions for the school. If one of them is attached to a course you are studying, open that course page and find the same session listed there.",
    ),
    helpLesson(
      "learner-feedback-and-reports",
      "Section 3 · Take part",
      "Find the \"Report a problem\" button and open it, then pick one of bug, feedback, idea, or other. Leave a correction, a comment, or a question on a lesson you have read carefully. Try it once with the network off: the note is held on that device as \"Waiting to send\" and posts itself when the connection is back.",
    ),
    helpLesson(
      "sharing-and-cross-promotion",
      "Section 3 · Take part",
      "Open a course page and use the Share button: the native share sheet on mobile, or Copy, X, LinkedIn, Facebook and Email otherwise. Paste the link somewhere and check that the preview image matches the page you shared rather than a generic one.",
    ),
    sectionQuiz("Section 3 · Take part", 3, [
      {
        prompt: "What does the person scheduling a live class paste in to set it up?",
        options: [
          "Their service's stream key and PIN",
          "A recording file uploaded in advance",
          "Their service's player embed URL",
          "A calendar invite from the school",
        ],
        correctIndex: 2,
        explanation:
          "A live class is scheduled by pasting the streaming service's player embed URL, then setting visibility and optionally attaching it to a course.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "Where can you find a live session that has been attached to a course?",
        options: [
          "On that course's page, and on /live",
          "On /live only, never on the course",
          "In the learner's dashboard calendar",
          "In the school's email newsletter only",
        ],
        correctIndex: 0,
        explanation:
          "Attaching a session to a course makes it appear on that course page, and the dedicated /live page still lists every session for the school.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "From which screen does the host go live, end the session, and set the saved recording?",
        options: [
          "The course settings page",
          "Admin, on the Live page",
          "The learner's /live page",
          "Admin, on the Brand page",
        ],
        correctIndex: 1,
        explanation:
          "Scheduling, going live, ending, and setting the saved recording all happen on the same screen: Admin then Live.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "Where does a teacher read the corrections and questions learners leave on lessons?",
        options: [
          "At Admin, under Problem reports",
          "On each lesson page, under My notes",
          "At /dashboard, under Feedback sent",
          "At /teach, under Curriculum feedback",
        ],
        correctIndex: 3,
        explanation:
          "Curriculum feedback is at /teach under Curriculum feedback, and each teacher sees only their own courses' feedback. Problem reports are the separate site-wide queue.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "Which four kinds does the site-wide Report a problem button offer?",
        options: [
          "Bug, feedback, idea, other",
          "Bug, typo, question, other",
          "Bug, refund, idea, other",
          "Typo, idea, praise, other",
        ],
        correctIndex: 0,
        explanation:
          "The Report a problem button files a bug, feedback, an idea, or other, and those reports are triaged at Admin then Problem reports.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "You write a problem report on a lesson saved for offline, with no connection. What happens?",
        options: [
          "It is discarded with a warning shown",
          "It is emailed once the tab is closed",
          "It is held on the device to send later",
          "It is saved as a note on that lesson",
        ],
        correctIndex: 2,
        explanation:
          "With no network the note is held on that device as \"Waiting to send\" and posts itself the moment the connection is back, from whatever page you are on.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "Why can a report reach the school later than it was written?",
        options: [
          "The queue is only flushed once a day",
          "The timestamp is when the server got it",
          "Reports are batched by course weekly",
          "The clock is set by the sender's device",
        ],
        correctIndex: 1,
        explanation:
          "An offline note is held until the connection returns, so the timestamp records when the server received it, not when it was written.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "Which pages carry a Share button?",
        options: [
          "Course and lesson pages only",
          "The school page and nothing else",
          "Lesson pages and the dashboard",
          "School, course, and lesson pages",
        ],
        correctIndex: 3,
        explanation:
          "Every school, course and lesson page has one: native share on mobile, or Copy, X, LinkedIn, Facebook and Email otherwise.",
        sourceLessonSlug: "sharing-and-cross-promotion",
      },
      {
        prompt: "How many sibling apps can Related WitUS tools show beside a course?",
        options: [
          "Up to three, as a labeled card",
          "Up to five, as a labeled card",
          "Exactly one, chosen by the owner",
          "As many as the school has links",
        ],
        correctIndex: 0,
        explanation:
          "Up to three sibling apps are curated into one small labeled card, and only WitUS-branded sites qualify.",
        sourceLessonSlug: "sharing-and-cross-promotion",
      },
      {
        prompt: "What does Link usage report about outbound links?",
        options: [
          "Who clicked, and when they clicked",
          "Counts of clicks, and nothing more",
          "The revenue each link produced",
          "Counts, plus the referring page",
        ],
        correctIndex: 1,
        explanation:
          "Link usage is how often outbound links get clicked, counts only. It does not identify who clicked.",
        sourceLessonSlug: "sharing-and-cross-promotion",
      },
    ]),

    finalQuiz("Section 3 · Take part", [
      {
        prompt: "What stays visible to the public while a course is still Coming soon?",
        options: [
          "The title, description, and standards",
          "The lesson list and the lesson titles",
          "The price and the enroll button",
          "The media and the first lesson",
        ],
        correctIndex: 0,
        explanation:
          "The landing page stays public and search engines still index it, so visitors read the title, the description and the standards it meets, and can share the link.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "Can an instructor mark their own course vetted?",
        options: [
          "Yes, once every lesson is published",
          "No, because vetting means someone else",
          "Yes, after the guards have been run",
          "No, unless the owner grants a waiver",
        ],
        correctIndex: 1,
        explanation:
          "You cannot mark your own course vetted, deliberately: vetting means someone else reviewed it. The platform owner marks it.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "What does an Invite to audit give the person invited?",
        options: [
          "Read-only access to every course",
          "Enrollment with a free certificate",
          "Read-only access to that one course",
          "Editing rights on that one course",
        ],
        correctIndex: 2,
        explanation:
          "A reviewer reads every lesson of that one course and nothing else. They cannot enroll, cannot earn a certificate, and nothing they do is recorded.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "Does marking a course vetted email the people who asked to be notified?",
        options: [
          "Yes, everyone waiting is emailed",
          "Yes, but only the notify-me list",
          "No, unless a sale is also running",
          "No, nothing is sent automatically",
        ],
        correctIndex: 3,
        explanation:
          "Nothing is sent automatically, on purpose. You decide what the message says and when it goes, then export the list and send it yourself.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "Where is one course's own category chosen?",
        options: [
          "In Course settings, under Category",
          "In Admin, on the Categories page",
          "On the course landing page header",
          "In the catalog filter on /courses",
        ],
        correctIndex: 0,
        explanation:
          "Course settings then Category picks from existing categories or takes a new one. Admin then Categories manages the list itself.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "What do categories power for someone browsing a school?",
        options: [
          "The order of lessons in a course",
          "The filter on the course catalog",
          "The price shown on a course page",
          "The search box inside a course",
        ],
        correctIndex: 1,
        explanation:
          "Categories power the catalog filter, which is how a visitor narrows a school's course list.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "What does a sale never do to a course's list price?",
        options: [
          "It never rounds the list price down",
          "It never applies to a bundle price",
          "It never overwrites the list price",
          "It never shows the list price again",
        ],
        correctIndex: 2,
        explanation:
          "The list price is never overwritten, so ending a sale puts the original price straight back. The struck-through list price is shown beside the sale price throughout.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "Which kind of pricing do sales not apply to yet?",
        options: [
          "Bundle pricing",
          "Course pricing",
          "School pricing",
          "Subscription pricing",
        ],
        correctIndex: 3,
        explanation:
          "Sales do not apply to subscription pricing yet. A sale can apply to one course, one bundle, or everything in the school.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "How is a discounted price announced to a screen reader?",
        options: [
          "Was nineteen dollars, now nine dollars",
          "Nine dollars, the only price given",
          "Nineteen dollars, the list price only",
          "Discount applied at checkout, no price",
        ],
        correctIndex: 0,
        explanation:
          "Screen readers announce it as \"was $19, now $9\", so nobody hears the old price as the real one.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "Which text attached to a figure does the course search read?",
        options: [
          "The file name and the folder",
          "Alt text, captions, and credits",
          "The licence and the file size",
          "The photographer's contract",
        ],
        correctIndex: 1,
        explanation:
          "Image descriptions mean the alt text, captions and credits every figure in this catalog carries, which is what makes a figure findable by search.",
        sourceLessonSlug: "in-course-search",
      },
      {
        prompt: "Where does the Search this course box sit?",
        options: [
          "On each lesson page, above the text",
          "In the site header, on every page",
          "On the course page, for enrollees",
          "On the school home page, at the top",
        ],
        correctIndex: 2,
        explanation:
          "Enrolled learners, and an instructor on their own courses, get a Search this course box on the course page.",
        sourceLessonSlug: "in-course-search",
      },
      {
        prompt: "What does Add note do after you select a passage of lesson text?",
        options: [
          "Sends the note to your teacher",
          "Copies the passage to your clipboard",
          "Adds the passage to the course search",
          "Pins the note to that passage",
        ],
        correctIndex: 3,
        explanation:
          "Add note pins the note to that exact passage and highlights it, so the note travels with the sentence it answers.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "How much does Share with teacher share at a time?",
        options: [
          "One note, the one you chose",
          "Every note on that lesson",
          "Every note in that course",
          "All notes you ever wrote",
        ],
        correctIndex: 0,
        explanation:
          "Sharing is one note at a time, with a teacher who owns a class you belong to, and you can unshare at any time.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "A student withdraws a note they had shared. What does their teacher see?",
        options: [
          "It stays until the course finishes",
          "It leaves the teacher's search at once",
          "It stays but is marked as withdrawn",
          "It is deleted from the student too",
        ],
        correctIndex: 1,
        explanation:
          "A withdrawn share disappears from the teacher's search the moment it is withdrawn. The student keeps their own note.",
        sourceLessonSlug: "notes-and-annotations",
      },
      {
        prompt: "What is an inline Check yourself card in a lesson body?",
        options: [
          "A four-option quiz shown inline",
          "A link to the section quiz bank",
          "A reveal line with question and answer",
          "A note the teacher sent the class",
        ],
        correctIndex: 2,
        explanation:
          "It is a reveal line carrying a question and its answer, and it behaves like a Quick recall card: reveal, then self-grade.",
        sourceLessonSlug: "quick-recall",
      },
      {
        prompt: "Where does a learner review their own recall results over time?",
        options: [
          "At /teach, under Recall accuracy",
          "On the course page, under My notes",
          "At /live, under session recordings",
          "At /dashboard, Check-yourself history",
        ],
        correctIndex: 3,
        explanation:
          "Check-yourself history on /dashboard shows what they missed, when, how often, and which items are due for another try.",
        sourceLessonSlug: "quick-recall",
      },
      {
        prompt: "What question is Recall accuracy meant to answer for a teacher?",
        options: [
          "Whether it sticks in the lesson",
          "Whether the quiz pool is too small",
          "Whether the lesson is long enough",
          "Whether learners finished the course",
        ],
        correctIndex: 0,
        explanation:
          "It is the signal for whether the material is sticking in the lesson itself, rather than only at quiz time.",
        sourceLessonSlug: "quick-recall",
      },
      {
        prompt: "What does the dedicated /live page list?",
        options: [
          "Only sessions you are enrolled in",
          "Every session for that school",
          "Only the sessions running right now",
          "Only recordings of past sessions",
        ],
        correctIndex: 1,
        explanation:
          "The /live page lists all sessions for the school, whether or not they are attached to a course.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "What does attaching a live session to a course change?",
        options: [
          "It enrolls the course in the session",
          "It hides the session from /live",
          "It shows on that course's page",
          "It makes the session paid-only",
        ],
        correctIndex: 2,
        explanation:
          "Attaching a session to a course makes it appear on that course page, which is where a learner studying it will look.",
        sourceLessonSlug: "live-sessions",
      },
      {
        prompt: "Whose curriculum feedback does a teacher see at /teach?",
        options: [
          "Every teacher in the school",
          "The platform owner's courses",
          "Every learner's problem report",
          "Their own courses' feedback",
        ],
        correctIndex: 3,
        explanation:
          "Each teacher sees the feedback left on their own courses. Site-wide problem reports are triaged separately at Admin then Problem reports.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "The server rejects a report that had been held offline. What does the learner see?",
        options: [
          "It stays on screen with the reason",
          "It is retried every hour, silently",
          "It is dropped and the tab is cleared",
          "It is mailed to the school owner",
        ],
        correctIndex: 0,
        explanation:
          "Nothing is silently lost: a rejected note stays on screen with the reason, so the text can be copied out.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "A learner's session expired while they were offline writing a report. What happens?",
        options: [
          "A silent retry with no prompt shown",
          "A sign-in prompt, and the note kept",
          "A sign-in prompt, and the note gone",
          "An error that clears the whole form",
        ],
        correctIndex: 1,
        explanation:
          "They are asked to sign in and their note is kept, not dropped. A held note also survives a reload and a closed tab.",
        sourceLessonSlug: "learner-feedback-and-reports",
      },
      {
        prompt: "What image does a shared Learn.WitUS link show in its preview?",
        options: [
          "The school's logo on every link",
          "The first figure in the lesson",
          "An image relevant to that page",
          "A plain link with no image at all",
        ],
        correctIndex: 2,
        explanation:
          "Shared links show a page-relevant preview image, so a shared lesson does not look like every other link from the school.",
        sourceLessonSlug: "sharing-and-cross-promotion",
      },
      {
        prompt: "Which apps may be curated into Related WitUS tools?",
        options: [
          "Any site the owner pastes in",
          "Only courses in the same school",
          "Only apps the learner installed",
          "WitUS-branded sibling sites",
        ],
        correctIndex: 3,
        explanation:
          "Related WitUS tools curates sibling apps on WitUS-branded sites only, up to three, shown as one small labeled card.",
        sourceLessonSlug: "sharing-and-cross-promotion",
      },
      {
        prompt: "Where is Related WitUS tools configured?",
        options: [
          "In Course settings",
          "In Admin, under Brand",
          "In the lesson editor",
          "On the /live page",
        ],
        correctIndex: 0,
        explanation:
          "It lives in Course settings, alongside the course's other per-course choices such as its category.",
        sourceLessonSlug: "sharing-and-cross-promotion",
      },
    ]),
  ],
};
