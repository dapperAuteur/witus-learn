// "Build your first course" (USING-T1, the course-author teacher path of the "Using Learn.WitUS"
// series). RESEARCH TIER 1, product documentation: every lesson body is the help article it teaches,
// read from src/lib/help-articles.ts at seed time by `helpLesson`, so nothing here can drift from
// the screen it describes.
//
// Brief: plans/future-courses/using-learn/2026-09-21-using-learn-paths-brief.md, approved by BAM
// 2026-09-22 (rubric v1.3 gate A8). The article list and the path name come from the brief's
// USING-T1 row; the section order is the order a teacher meets these screens in, which is not the
// order the brief lists them in.
//
// ASSESSMENT SIZE: the series exception recorded in using-learn-shared.ts (rubric D2, BAM
// 2026-09-22). Each of the four sections has a quiz pooling 10 and serving 5; the final pools 25
// drawn across all four sections and serves 10, passing at 80. Every question carries
// `sourceLessonSlug`, and that slug is always one of this course's own lesson slugs.
//
// AUTHORED PROSE IS ONLY `tryIt`. Everything else on a lesson page is the article. Each `tryIt`
// names only controls its own article names, because a "Try it" that invents a button is worse
// than no "Try it": the teacher hunts for something that is not there and concludes the course is
// stale.
//
// WHAT IS DELIBERATELY NOT ASKED. The help center is silent on where a hold reason is entered, on
// which role can reach Admin, and on whether a teacher can author a quiz outside a seed. Those are
// noted in the handoff rather than guessed at here, because a quiz question is an assertion about
// the app and this file has no authority to make one the article does not make.
import type { AuthoredCourse } from "./authored-course";
import { finalQuiz, helpLesson, sectionQuiz } from "./using-learn-shared";

const S1 = "Section 1 · Start a course";
const S2 = "Section 2 · Write the lessons";
const S3 = "Section 3 · Record it";
const S4 = "Section 4 · Publish and price it";

export const USING_LEARN_BUILD_A_COURSE_COURSE: AuthoredCourse = {
  title: "Build your first course",
  description:
    "Take one course from an empty form to a page learners can buy, using the screens Learn.WitUS already gives you. By the end you can create a course, write and record its lessons, set its category and price, and get it reviewed and opened. Pairs with How to Create a Course That People Finish and Pass, which teaches how to write a course; this one teaches the screens you build it on.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Start a course
    // ══════════════════════════════════════════════════════════════════════
    helpLesson(
      "getting-started",
      S1,
      "Open the top menu and choose Teach, or go straight to /teach. Read the four steps above and work out which one you are actually on. If your course list at /teach is empty, you are on step one, and the rest of this section is about getting off it.",
    ),
    helpLesson(
      "create-a-course",
      S1,
      "On /teach, fill in the New course form with a title, plus a description if you have one ready, and click Create course. You will land on the course manager. Find the Course settings panel there and read what it lets you change later, because that is where you will come back for the category, the pricing and the visibility.",
    ),
    helpLesson(
      "categories",
      S1,
      "Go to Admin, then Categories, and read the labels that already exist before you invent a new one. Now open your course from /teach and set Course settings, then Category, either picking one of those labels or typing a new one. Remember that this is the label the catalog filter will sort your course under.",
    ),
    sectionQuiz(S1, 1, [
      {
        prompt: "Where does everything you author as a teacher live?",
        options: ["Under Teach, at /teach", "Under Admin, at /admin", "On Explore, at /explore", "On your /dashboard page"],
        correctIndex: 0,
        explanation:
          "Getting started puts every authoring screen under Teach in the top menu, reachable directly at /teach.",
        sourceLessonSlug: "getting-started",
      },
      {
        prompt: "Which three things does the 'Set it up' step of the checklist name?",
        options: [
          "Category, standards, certificates",
          "Pricing, refunds, payout dates",
          "Category, pricing, visibility",
          "Visibility, captions, co-teachers",
        ],
        correctIndex: 2,
        explanation:
          "Step three of the checklist is category, pricing and visibility. Standards, refunds and captions are not part of it.",
        sourceLessonSlug: "getting-started",
      },
      {
        prompt: "What does the course list at /teach give you for handling many courses at once?",
        options: [
          "Search, tags, and a revision log",
          "Search, filters, and bulk actions",
          "Filters, drafts, and a trash bin",
          "Imports, exports, and merge tools",
        ],
        correctIndex: 1,
        explanation:
          "The /teach list carries search, filters and bulk actions, which is what makes a long catalog manageable from one screen.",
        sourceLessonSlug: "getting-started",
      },
      {
        prompt: "Which form on /teach starts a new course?",
        options: ["The Quick import form", "The Course request form", "The New lesson form", "The New course form"],
        correctIndex: 3,
        explanation: "The New course form on /teach takes a title and an optional description, then Create course.",
        sourceLessonSlug: "create-a-course",
      },
      {
        prompt: "What does the New course form ask you for?",
        options: [
          "A title, and a description if you have one",
          "A title, a category, and a starting price",
          "A title and a cover image, both required",
          "A description and a planned publish date",
        ],
        correctIndex: 0,
        explanation:
          "Title plus an optional description. Category, pricing and visibility come later, in the Course settings panel.",
        sourceLessonSlug: "create-a-course",
      },
      {
        prompt: "Where do you land after clicking Create course?",
        options: ["On the public catalog page", "On the Admin home screen", "On the course manager", "In the lesson editor"],
        correctIndex: 2,
        explanation: "You land on the course manager, which is where you edit settings and add lessons.",
        sourceLessonSlug: "create-a-course",
      },
      {
        prompt: "How do you change a course's title after the course exists?",
        options: [
          "Retype it on the public course page",
          "Rename it from the Admin sidebar",
          "Ask the platform owner to rename it",
          "Edit it in the Course settings panel",
        ],
        correctIndex: 3,
        explanation:
          "Open the course from /teach and edit the Course settings panel, which also holds the description, category, pricing and visibility.",
        sourceLessonSlug: "create-a-course",
      },
      {
        prompt: "Where are categories added, renamed, and deleted?",
        options: ["At Teach → Categories", "At Admin → Categories", "At Course settings → Tags", "At Explore → Categories"],
        correctIndex: 1,
        explanation:
          "Admin → Categories manages the labels themselves. Course settings → Category only assigns one to a course.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "What does renaming a category do to the courses in it?",
        options: [
          "It leaves them on the old label",
          "It removes them from the catalog",
          "It moves them onto the new label",
          "It copies them under both labels",
        ],
        correctIndex: 2,
        explanation: "A rename carries its courses across to the new label, so nothing is left behind on the old one.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "What happens to courses when you delete their category?",
        options: [
          "They are left uncategorized",
          "They move to a default label",
          "They are unpublished as well",
          "They keep the deleted label",
        ],
        correctIndex: 0,
        explanation:
          "Deleting a category leaves its courses uncategorized. They stay published, but the catalog filter no longer has a label for them.",
        sourceLessonSlug: "categories",
      },
    ]),

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Write the lessons
    // ══════════════════════════════════════════════════════════════════════
    helpLesson(
      "add-and-edit-lessons",
      S2,
      "In the course manager, open Lessons and add one text lesson. Write a heading, two paragraphs and a table in the editor so you can see what markdown gives you, then click Save lesson. Add a second lesson as a media lesson, pasting a URL instead of uploading, and tick Free preview on whichever of the two you would show a stranger.",
    ),
    helpLesson(
      "quizzes-rotation-and-images",
      S2,
      "Open one of your quizzes and find questionsPerAttempt and shuffleOptions in its quiz_content. Set questionsPerAttempt below the pool size and take the quiz twice, so you see a retake serve a different subset. Then check every question that sets imageUrl for its imageAlt, because seeding fails without one.",
    ),
    helpLesson(
      "images-and-quick-recall",
      S2,
      "Open a lesson in the editor and use Image in the toolbar. Write the short description it asks for before it uploads anything, because that alt text is what a screen-reader user gets. Then add one Quick recall prompt about the lesson before this one, and look for the Recall accuracy panel on your course dashboard.",
    ),
    helpLesson(
      "quick-recall",
      S2,
      "In the lesson editor, add two Quick recall prompts drawn from the previous lesson, not this one. Then type a single :::reveal question ||| answer line into the body of the lesson. Open the lesson signed in, reveal both, and self-grade them with I got it or Missed it so you can see where they land in Recall accuracy.",
    ),
    helpLesson(
      "cross-course-links",
      S2,
      "Find a lesson where you name another of your courses by title. Leave it alone if you want the school owner to judge it in the review queue at /admin/cross-links, or write the markdown link yourself if you want it live now. Before you expect a Related courses list to appear, check that this school really hosts the other course, published, with an instructor profile.",
    ),
    sectionQuiz(S2, 2, [
      {
        prompt: "What does the text lesson editor support?",
        options: [
          "Plain text with no styling at all",
          "Markdown, tables and links included",
          "Raw HTML that you paste in place",
          "A slide layout tool, nothing else",
        ],
        correctIndex: 1,
        explanation: "Text lessons are written in markdown: headings, lists, links and tables.",
        sourceLessonSlug: "add-and-edit-lessons",
      },
      {
        prompt: "Who can see a lesson you have ticked as Free preview?",
        options: ["Editors of the course only", "Enrolled learners only", "Nobody until it publishes", "Non-enrolled learners too"],
        correctIndex: 3,
        explanation: "Free preview is what lets someone who has not enrolled read that one lesson.",
        sourceLessonSlug: "add-and-edit-lessons",
      },
      {
        prompt: "What does questionsPerAttempt do to a quiz?",
        options: [
          "Serves a random subset of the pool",
          "Caps the number of retakes allowed",
          "Sets the score needed to pass it",
          "Sorts the pool by question difficulty",
        ],
        correctIndex: 0,
        explanation:
          "It serves a random subset of a larger pool, so a retake draws different questions. Omit it, or set it to the pool size, to show them all.",
        sourceLessonSlug: "quizzes-rotation-and-images",
      },
      {
        prompt: "What must a quiz question carry whenever it sets imageUrl?",
        options: ["imageCredit, naming the source", "imageWidth, in layout pixels", "imageAlt, a screen-reader line", "imageCaption, printed below"],
        correctIndex: 2,
        explanation:
          "imageAlt is required, and seeding fails if an image has no alt text. The figure renders above the prompt.",
        sourceLessonSlug: "quizzes-rotation-and-images",
      },
      {
        prompt: "What does the lesson editor's Image tool ask you for first?",
        options: ["A caption and a source credit", "A licence and a photographer", "A width and an alignment rule", "A short description, the alt text"],
        correctIndex: 3,
        explanation:
          "It asks for the alt text before it uploads, so a picture cannot reach the page without a description for screen-reader users.",
        sourceLessonSlug: "images-and-quick-recall",
      },
      {
        prompt: "Where do Quick recall cards render inside a lesson?",
        options: [
          "At the end, just after the quiz",
          "At the start, before the new material",
          "Beside each heading in the margin",
          "On the course page, not the lesson",
        ],
        correctIndex: 1,
        explanation:
          "They render at the start, which is what lets a learner test the previous lesson before meeting new material.",
        sourceLessonSlug: "images-and-quick-recall",
      },
      {
        prompt: "What is the syntax of an inline Check yourself card?",
        options: [":::recall question -> answer", ":::quiz question ||| answer", ":::reveal question ||| answer", ":::card question /// answer"],
        correctIndex: 2,
        explanation: "A :::reveal line, with the question and the answer separated by three pipes, anywhere in a lesson body.",
        sourceLessonSlug: "quick-recall",
      },
      {
        prompt: "Where do learners go to review what they missed?",
        options: [
          "On /dashboard, in Check-yourself history",
          "On /teach, in the Recall accuracy panel",
          "On /admin, in the Interest and leads page",
          "On /explore, in their course progress",
        ],
        correctIndex: 0,
        explanation:
          "Check-yourself history on /dashboard is the learner's side: what they missed, when, how often, and what is due again. Recall accuracy is your side of the same grades.",
        sourceLessonSlug: "quick-recall",
      },
      {
        prompt: "You name another of your courses in a lesson. What happens?",
        options: [
          "A link appears in your text at once",
          "Nothing links until someone approves",
          "The other course is added as a unit",
          "The mention is removed by the tool",
        ],
        correctIndex: 1,
        explanation:
          "A tool finds the mention and queues it at /admin/cross-links. Only after the school owner approves it does a Related courses list appear under the lesson.",
        sourceLessonSlug: "cross-course-links",
      },
      {
        prompt: "When does an approved cross-course link render nothing at all?",
        options: [
          "When the lesson has no quiz yet",
          "When the mention sits in a heading",
          "When the other course charges money",
          "When this school does not host it",
        ],
        correctIndex: 3,
        explanation:
          "A link shows only if this school hosts the other course, published, with an instructor profile. Otherwise nothing renders, so learners never hit a dead end.",
        sourceLessonSlug: "cross-course-links",
      },
    ]),

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Record it
    // ══════════════════════════════════════════════════════════════════════
    helpLesson(
      "record-audio-in-app",
      S3,
      "Open a course, go to Recording script, and find the recording checklist. Pick your shortest lesson, hit Record audio, read a paragraph, use Pause and Resume once, and stop. Watch the status run from saved locally through uploading to uploaded, and hit Download if you want your own copy of the take.",
    ),
    helpLesson(
      "recording-scripts-teleprompter",
      S3,
      "Open Recording script for a course and click Teleprompter. Set the speed and the text size until you can read it comfortably, pick the lesson in the Recording to dropdown, and hit Record audio or Record video without leaving the script. Use Space to pause the scroll, the up and down arrows for speed, and Esc to get out.",
    ),
    helpLesson(
      "recording-long-lessons",
      S3,
      "Record one deliberately long take, longer than you would normally sit for in one go. Watch it roll into a new part instead of cutting off, then play that lesson back as a learner and step through the parts with Prev and Next.",
    ),
    sectionQuiz(S3, 3, [
      {
        prompt: "Where are the Record audio and Record video buttons?",
        options: ["On the public course page", "Inside the lesson editor", "On the recording checklist", "On the Admin home screen"],
        correctIndex: 2,
        explanation:
          "Open a course, then Recording script, then the recording checklist. Every lesson on it has both buttons, and you pick per lesson.",
        sourceLessonSlug: "record-audio-in-app",
      },
      {
        prompt: "What does a successful upload do to the lesson?",
        options: [
          "Attaches the file and ticks it recorded",
          "Publishes the lesson to learners at once",
          "Replaces the lesson text with a transcript",
          "Sends the take to the vetting queue",
        ],
        correctIndex: 0,
        explanation:
          "It attaches the file, sets the lesson type to match, and ticks the lesson recorded. Nothing is published automatically.",
        sourceLessonSlug: "record-audio-in-app",
      },
      {
        prompt: "You close the tab before a take has uploaded. What happens to it?",
        options: [
          "It is lost and must be recorded again",
          "It uploads only if you stay online",
          "It is queued on the server instead",
          "It is already saved on your device",
        ],
        correctIndex: 3,
        explanation:
          "Recording is offline-first: the take is saved on your device the moment you stop, and it uploads when you are back online.",
        sourceLessonSlug: "record-audio-in-app",
      },
      {
        prompt: "Is paused time counted in a take's length?",
        options: ["Yes, the clock keeps running", "No, paused time is left out", "Only on video takes, not audio", "Only after the first resume"],
        correctIndex: 1,
        explanation:
          "Pause and Resume keep the same take going, and the paused stretch is not counted, so a course can be recorded across several sittings.",
        sourceLessonSlug: "record-audio-in-app",
      },
      {
        prompt: "What usually causes an upload to fail with a Cloudinary error?",
        options: [
          "The preset is not set to Unsigned",
          "The lesson title has not been saved",
          "The course is still an unpublished draft",
          "The browser blocked the microphone",
        ],
        correctIndex: 0,
        explanation:
          "The red error shows Cloudinary's exact reason, and the usual one is an upload preset that is not set to Unsigned.",
        sourceLessonSlug: "record-audio-in-app",
      },
      {
        prompt: "Where does the Recording script text come from?",
        options: ["A copy you paste in by hand", "The last uploaded transcript", "Your lesson text, regenerated", "A template with your title in"],
        correctIndex: 2,
        explanation:
          "The page builds a read-aloud script from the current lesson text on each visit, so editing a lesson updates the script.",
        sourceLessonSlug: "recording-scripts-teleprompter",
      },
      {
        prompt: "Which control picks the lesson a teleprompter take attaches to?",
        options: ["The Lesson order dropdown", "The Recording to dropdown", "The Save lesson button", "The Teleprompter button"],
        correctIndex: 1,
        explanation:
          "The Recording to dropdown sits in the teleprompter control bar, so you choose the target lesson without leaving the full-screen script.",
        sourceLessonSlug: "recording-scripts-teleprompter",
      },
      {
        prompt: "Where does the teleprompter put the video self-view?",
        options: ["At the foot of the screen", "In a floating side panel", "Behind the scrolling words", "At the top of the screen"],
        correctIndex: 3,
        explanation:
          "At the top, right where a phone's front camera sits, so reading the script keeps your eyes near the lens. It is mirrored for you only.",
        sourceLessonSlug: "recording-scripts-teleprompter",
      },
      {
        prompt: "How does a learner play back a lesson that split into parts?",
        options: ["As one merged file on replay", "In any order they care to", "In order, with Prev and Next", "Only once you rejoin them"],
        correctIndex: 2,
        explanation: "The parts upload in order and play back in sequence, with Prev and Next controls for the learner.",
        sourceLessonSlug: "recording-long-lessons",
      },
      {
        prompt: "You go offline in the middle of a recording. Where do the parts wait?",
        options: [
          "In the browser, until you return",
          "On the server, already uploaded",
          "In your downloads folder alone",
          "Nowhere, the take is discarded",
        ],
        correctIndex: 0,
        explanation: "Parts wait in the browser and drain when you are back online, even if the tab closed mid-record.",
        sourceLessonSlug: "recording-long-lessons",
      },
    ]),

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Publish and price it
    // ══════════════════════════════════════════════════════════════════════
    helpLesson(
      "publish-visibility-holds",
      S4,
      "On /teach, click the status pill on one course and watch it move between draft and published. Select two courses and use the bulk Publish and Unpublish actions so you know where they are before you need them in a hurry. Then find a course carrying a hold reason and confirm for yourself that it will not publish until the hold is cleared.",
    ),
    helpLesson(
      "vetting-and-coming-soon",
      S4,
      "Open a course you have not vetted and read the banner for the number of people already waiting on it. Use Invite someone to review this course to send a read-only invite to an address you control, then open the link and see exactly what a reviewer sees. Finish by viewing the Coming soon page as a visitor, so you know what it shows and what it withholds.",
    ),
    helpLesson(
      "set-pricing",
      S4,
      "Open Course settings, then Pricing, and choose Free, One-time purchase, or Subscription. Enter an amount and read what the form says you keep after estimated fees, because that number, not the sticker price, is what the course earns. If the 'Stripe isn't configured' warning is showing, leave the course free until the keys are in place.",
    ),
    sectionQuiz(S4, 4, [
      {
        prompt: "Who can see a course that is still a draft?",
        options: ["Anyone holding a direct link", "Brand admins but not you", "Everyone except the owner", "You and other editors"],
        correctIndex: 3,
        explanation: "A draft is unpublished: only you and other editors can see it.",
        sourceLessonSlug: "publish-visibility-holds",
      },
      {
        prompt: "What does a hold reason stop you doing?",
        options: ["Editing the lesson text", "Publishing that course", "Pricing it as a paid course", "Inviting someone to read it"],
        correctIndex: 1,
        explanation:
          "A course flagged with a hold reason cannot be published until the hold is cleared, which is the point of flagging content that still needs vetting.",
        sourceLessonSlug: "publish-visibility-holds",
      },
      {
        prompt: "How do you publish several courses in one go?",
        options: [
          "Click each row's status pill",
          "Ask the platform owner to do it",
          "Select them, then choose Publish",
          "Publish them from the Admin home",
        ],
        correctIndex: 2,
        explanation:
          "Select the courses on /teach and choose Publish or Unpublish. The status pill is the one-course version of the same switch.",
        sourceLessonSlug: "publish-visibility-holds",
      },
      {
        prompt: "What does vetting say about a course that publishing does not?",
        options: [
          "That it was reviewed against its sources",
          "That its price has been checked and set",
          "That its lessons are written and saved",
          "That search engines have indexed it",
        ],
        correctIndex: 0,
        explanation:
          "Publishing says the course exists. Vetting says someone reviewed it against its sources and it is ready for learners.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "What happens to enrolled learners if a course is un-vetted?",
        options: ["They are refunded and removed", "They keep their full access", "They see the coming-soon page", "They wait until it is vetted"],
        correctIndex: 1,
        explanation:
          "Un-vetting never locks out someone already studying the course, including anyone who paid. The instructor and platform owner keep access too.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "Can you mark your own course vetted?",
        options: ["Yes, once every lesson is saved", "Yes, if nobody is enrolled yet", "Only after a price is set on it", "No, someone else must do that"],
        correctIndex: 3,
        explanation:
          "You cannot mark your own course vetted, and that is deliberate: vetting means someone else reviewed it.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "What can an invited reviewer do with your unvetted course?",
        options: [
          "Read every lesson, change nothing",
          "Edit the lessons they disagree with",
          "Enroll for free and earn a badge",
          "Publish the course when satisfied",
        ],
        correctIndex: 0,
        explanation:
          "Reviewers are read-only on that one course. They cannot enroll or earn a certificate, and nothing they do is recorded, so their quiz clicks never move your statistics.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "Where do you set a course's price?",
        options: ["In the Stripe dashboard", "In the New course form", "In Course settings, in the app", "In Admin, under Categories"],
        correctIndex: 2,
        explanation: "Prices are set in the app, under Course settings → Pricing. Stripe just executes the price you set there.",
        sourceLessonSlug: "set-pricing",
      },
      {
        prompt: "What does the pricing form show you beside the amount?",
        options: ["How many learners can afford it", "The refund window per country", "The tax rate for your state", "What you keep after fees"],
        correctIndex: 3,
        explanation: "The form shows what you keep after estimated fees, so you can price against the take rather than the sticker.",
        sourceLessonSlug: "set-pricing",
      },
      {
        prompt: "What does a 'Stripe isn't configured' warning mean?",
        options: [
          "Your payout account was declined",
          "Paid checkout will not work yet",
          "The price is above the Stripe cap",
          "The course has to stay free always",
        ],
        correctIndex: 1,
        explanation:
          "Paid checkout does not work until the Stripe keys are set, which is why the article says not to publish a paid course before then.",
        sourceLessonSlug: "set-pricing",
      },
    ]),

    finalQuiz(S4, [
      {
        prompt: "Which lesson kinds does the getting-started list name?",
        options: [
          "Text, audio, video, slides, quizzes",
          "Text and video lessons, no more",
          "Slides and quizzes, nothing else",
          "Audio lessons and live sessions",
        ],
        correctIndex: 0,
        explanation: "Step two of the checklist names text, audio, video, slides and quizzes.",
        sourceLessonSlug: "getting-started",
      },
      {
        prompt: "What is step one of the getting-started checklist?",
        options: ["Upload the audio for lesson one", "Create a course, with a title", "Set the price before writing", "Publish so learners find it"],
        correctIndex: 1,
        explanation: "Create a course and give it a title and description. Lessons, setup and publishing follow it.",
        sourceLessonSlug: "getting-started",
      },
      {
        prompt: "Which settings does the Course settings panel let you change later?",
        options: [
          "Only the title and description",
          "Everything but the visibility",
          "Title, description, category, price",
          "Only the price and the category",
        ],
        correctIndex: 2,
        explanation: "Title, description, category, pricing and visibility all live in Course settings, reached from /teach.",
        sourceLessonSlug: "create-a-course",
      },
      {
        prompt: "Where do you assign a course's category?",
        options: ["Admin → Categories → Assign", "In the New course form only", "The catalog filter sidebar", "Course settings → Category"],
        correctIndex: 3,
        explanation:
          "Course settings → Category, picking an existing label or typing a new one. Admin → Categories manages the labels themselves.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "What do categories power?",
        options: ["The catalog filter", "The course search", "The pricing tiers", "The lesson order"],
        correctIndex: 0,
        explanation: "Categories are what the catalog filter sorts on, which is why an uncategorized course is harder to find.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "What can you paste instead of uploading a media file?",
        options: ["A Dropbox share link only", "A file, YouTube or Slides URL", "Any link, if it is HTTPS", "A YouTube watch page alone"],
        correctIndex: 1,
        explanation: "A media lesson takes an uploaded file or a pasted URL: a file, YouTube or Vimeo, or Google Slides.",
        sourceLessonSlug: "add-and-edit-lessons",
      },
      {
        prompt: "What happens to a large media upload?",
        options: ["It is rejected above the cap", "It is compressed on device", "It uploads in chunks itself", "It waits for owner approval"],
        correctIndex: 2,
        explanation: "Large files upload in chunks automatically, so you do not have to split them yourself.",
        sourceLessonSlug: "add-and-edit-lessons",
      },
      {
        prompt: "How does an image render once the toolbar has inserted it?",
        options: ["At a fixed width, loaded eagerly", "Cropped square, loaded eagerly", "At a fixed width, lazy-loaded", "Responsive, and lazy-loaded too"],
        correctIndex: 3,
        explanation: "Inserted images are responsive and lazy-loaded, so a picture-heavy lesson does not cost the learner a slow first paint.",
        sourceLessonSlug: "images-and-quick-recall",
      },
      {
        prompt: "How are quizzes authored today?",
        options: ["In the lesson editor toolbar", "In quiz_content, via seeds", "By importing a CSV on /teach", "In the Admin quiz builder"],
        correctIndex: 1,
        explanation: "Quiz content lives in quiz_content, authored through seeds today.",
        sourceLessonSlug: "quizzes-rotation-and-images",
      },
      {
        prompt: "What do learners self-grade a recall card with?",
        options: ["I got it, or Missed it", "Right, wrong, or unsure", "A one to five star score", "Easy, medium, or hard"],
        correctIndex: 0,
        explanation: "I got it or Missed it, and those self-grades roll up into Recall accuracy.",
        sourceLessonSlug: "quick-recall",
      },
      {
        prompt: "Who reviews a cross-course mention?",
        options: ["The lesson's own author", "The school owner", "Any enrolled learner", "The platform's tool"],
        correctIndex: 1,
        explanation:
          "The mention lands in the school owner's queue at /admin/cross-links, where they read the sentence it sits in before deciding.",
        sourceLessonSlug: "cross-course-links",
      },
      {
        prompt: "You want a link to another course right now. What do you do?",
        options: ["Ask the owner for a token", "Add the slug to settings", "Write a markdown link", "Paste the id in the title"],
        correctIndex: 2,
        explanation: "Write it yourself as an ordinary markdown link. A mention that already links is not offered as a candidate.",
        sourceLessonSlug: "cross-course-links",
      },
      {
        prompt: "Does uploading a take publish the lesson?",
        options: ["Yes, as soon as it lands", "Yes, if the course is live", "Only when it is vetted", "No, it only attaches it"],
        correctIndex: 3,
        explanation: "Uploading attaches the file to the lesson and ticks it recorded. Publishing stays a separate decision.",
        sourceLessonSlug: "record-audio-in-app",
      },
      {
        prompt: "Which statuses does a take move through?",
        options: [
          "Recording, saved, uploading, uploaded",
          "Queued, encoding, reviewed, posted",
          "Draft, pending, approved, published",
          "Recorded, trimmed, vetted, released",
        ],
        correctIndex: 0,
        explanation: "Recording, then saved locally, then uploading, then uploaded, or retry if the upload fails.",
        sourceLessonSlug: "record-audio-in-app",
      },
      {
        prompt: "What is the video preview mirrored for?",
        options: ["So the saved file reads right", "So you look natural on screen", "So the script scans properly", "So the lens stays in frame"],
        correctIndex: 1,
        explanation: "The preview is mirrored so you look natural while recording. The saved file is not mirrored.",
        sourceLessonSlug: "record-audio-in-app",
      },
      {
        prompt: "Which controls does the teleprompter offer?",
        options: ["Speed, volume, and captions", "Zoom, contrast, and margins", "Pitch, tempo, and playback", "Speed, text size, and mirror"],
        correctIndex: 3,
        explanation: "The full-screen auto-scroll carries speed, text-size and mirror controls.",
        sourceLessonSlug: "recording-scripts-teleprompter",
      },
      {
        prompt: "What does Esc do in the teleprompter?",
        options: ["Exits the full-screen script", "Pauses the scrolling script", "Resets the scroll position", "Stops and uploads the take"],
        correctIndex: 0,
        explanation: "Esc exits. Space plays and pauses the scroll, and the up and down arrows change speed.",
        sourceLessonSlug: "recording-scripts-teleprompter",
      },
      {
        prompt: "What does a take do when it runs past the upload size cap?",
        options: ["It stops at the cap", "It rolls into a new part", "It drops the last minute", "It lowers the quality"],
        correctIndex: 1,
        explanation: "It rolls into a new part automatically instead of cutting off, and the parts upload and play in order.",
        sourceLessonSlug: "recording-long-lessons",
      },
      {
        prompt: "What do you click to publish one course from /teach?",
        options: ["The Mark vetted button", "The Invite to audit link", "Its status pill on the row", "Its price field on the row"],
        correctIndex: 2,
        explanation: "The status pill toggles publish for that one course. Bulk publishing is the selection plus the Publish action.",
        sourceLessonSlug: "publish-visibility-holds",
      },
      {
        prompt: "What does Private hide a course from?",
        options: ["Search engines alone", "Enrolled learners too", "Nobody, it is public", "Brand admins as well"],
        correctIndex: 3,
        explanation: "Private is owner and instructor only, hidden even from brand admins.",
        sourceLessonSlug: "publish-visibility-holds",
      },
      {
        prompt: "What does the Coming soon page withhold from visitors?",
        options: ["Lesson titles, media, price", "The title and description", "The standards it meets", "The notify-me form link"],
        correctIndex: 0,
        explanation:
          "The content is closed: no lesson list, no lesson titles, no media, no price and no enroll button. The title, description and standards stay public.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "Where is the list of people waiting for a course?",
        options: ["Teach → Courses to vet", "Admin → Categories page", "The course manager banner", "Admin → Interest & leads"],
        correctIndex: 3,
        explanation:
          "The list itself is at Admin → Interest & leads (/admin/leads). The course manager banner only tells you how many are waiting.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "Does marking a course vetted email the people waiting for it?",
        options: ["No, nothing is sent", "Yes, all of them at once", "Yes, but only enrollees", "Only if you filter first"],
        correctIndex: 0,
        explanation:
          "Nothing is sent automatically, on purpose. Filter to the course on the leads page, export the CSV, and send the message yourself.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "Where are a volunteer's phone number and background shown?",
        options: ["In the leads CSV as well", "In the Inbox mirror too", "On that panel and nowhere else", "On the public course page"],
        correctIndex: 2,
        explanation:
          "Only on the People who put their hand up panel. They are not on the course page, not in the CSV, not in any email, and not in the Inbox mirror.",
        sourceLessonSlug: "vetting-and-coming-soon",
      },
      {
        prompt: "What happens after you change a course's price?",
        options: ["Existing learners are re-billed", "The next checkout is re-priced", "The course unpublishes itself", "Stripe must be set up again"],
        correctIndex: 1,
        explanation: "Changing the price re-prices the next checkout automatically. Stripe executes whatever the app says.",
        sourceLessonSlug: "set-pricing",
      },
    ]),
  ],
};
