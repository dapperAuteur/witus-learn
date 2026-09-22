import type { AuthoredCourse } from "./authored-course";
import { helpLesson, sectionQuiz, finalQuiz } from "./using-learn-shared";

// "Run your school", the school-admin path in the "Using Learn.WitUS" series (USING).
// RESEARCH TIER 1 (product documentation): every lesson body is the help article itself, read from
// src/lib/help-articles.ts at seed time by `helpLesson`, so nothing here can drift from the page it
// teaches. Brief: plans/future-courses/using-learn/2026-09-21-using-learn-paths-brief.md, approved
// by BAM 2026-09-22 (rubric v1.3 gate A8).
//
// ASSESSMENT SIZE: the series exception recorded in the header of using-learn-shared.ts (rubric D2,
// BAM 2026-09-22). Section quizzes serve 5 from a pool of 10; the final serves 10 from a pool of 25
// drawn across all three sections and passes at 80. Every question carries `sourceLessonSlug`, and
// every slug is one of this course's own lessons.
//
// WHAT IS DELIBERATELY NOT ASKED. `sharing-and-cross-promotion` says the Link usage counts show on
// "the course page", while `LinkUsagePanel` renders in the instructor's course manager
// (src/app/(tenant)/teach/[courseId]/page.tsx). Nothing below turns on WHERE that panel renders;
// the one Link usage question asks only WHAT it counts, which both the article and the code agree
// on. Fix the article, not this file.
//
// The `tryIt` text is the only authored prose per lesson, and it names only controls the article it
// sits under already names.

export const USING_LEARN_RUN_YOUR_SCHOOL_COURSE: AuthoredCourse = {
  title: "Run your school",
  description:
    "For the admin of a Learn.WitUS school. Set up your brand and catalog, decide what learners can see, give the right people the right teaching rights, and run the sales, codes, shares, and embeds that bring learners in.",
  lessons: [
    // ---------------------------------------------------------------------------------------
    // Section 1 · Your school's front door
    // ---------------------------------------------------------------------------------------
    helpLesson(
      "admin-home-and-brand-settings",
      "Section 1 · Your school's front door",
      "Open /admin and read the headline numbers, then click the one that is outlined in your accent color and work that queue down. Go to /admin/settings, change your tagline and accent colors, and watch the live preview before you save. Reload any page to see the change land, then check the Saved brand card to confirm what is stored.",
    ),
    helpLesson(
      "categories",
      "Section 1 · Your school's front door",
      "Go to Admin, then Categories, and add one label that matches how your learners actually browse. Open a course, set Course settings, then Category to that label. Check the catalog filter now offers it.",
    ),
    helpLesson(
      "publish-visibility-holds",
      "Section 1 · Your school's front door",
      "Open /teach and click one course's status pill to move it between draft and published. Select two or three more and use Publish or Unpublish on the lot. If one refuses to publish, find its hold reason and clear the hold first.",
    ),
    sectionQuiz("Section 1 · Your school's front door", 1, [
      {
        prompt: "Which brand setting changes the text shown in the site header?",
        options: [
          "Short name, the installed app label",
          "Wordmark, the header text itself",
          "Theme color, the browser chrome tint",
          "Favicon URL, the browser tab icon",
        ],
        correctIndex: 1,
        explanation:
          "Wordmark is the header text when you want it different from the full school name. Short name is the label under the installed app icon.",
        sourceLessonSlug: "admin-home-and-brand-settings",
      },
      {
        prompt: "What happens when you leave the default social card URL empty?",
        options: [
          "The page is shared with no preview image",
          "The school's favicon is used in its place",
          "The platform generates a branded card",
          "Sharing your home page is turned off",
        ],
        correctIndex: 2,
        explanation:
          "The 1200x630 social card is optional. Leave it empty and the platform generates a branded card for you.",
        sourceLessonSlug: "admin-home-and-brand-settings",
      },
      {
        prompt: "What does the Gamification dose setting let you choose?",
        options: [
          "Off, light with streaks and mastery, or full",
          "Off or on, with no middle setting at all",
          "Light or full, with no way to turn it off",
          "Badges only, or badges plus XP and levels",
        ],
        correctIndex: 0,
        explanation:
          "The three doses are off, light with streaks and mastery, and full, which adds XP, levels, and badges on top.",
        sourceLessonSlug: "admin-home-and-brand-settings",
      },
      {
        prompt: "While Coming soon is on, what does the notify me form do?",
        options: [
          "It stops collecting until the lead funnel is on",
          "It hides itself and shows the catalog instead",
          "It still collects signups, lead funnel off or on",
          "It forwards each signup to your own email tool",
        ],
        correctIndex: 2,
        explanation:
          "The holding page replaces the catalog, and its notify me form keeps collecting signups even when the lead funnel toggle is off.",
        sourceLessonSlug: "admin-home-and-brand-settings",
      },
      {
        prompt: "Where do the notify me signups you collect show up?",
        options: [
          "On the Admin, Categories page list",
          "On the Admin, Learning paths page",
          "On your school's public catalog page",
          "On the Admin, Interest and leads page",
        ],
        correctIndex: 3,
        explanation:
          "The lead funnel setting accepts notify me signups, and the list lands on Admin, Interest and leads.",
        sourceLessonSlug: "admin-home-and-brand-settings",
      },
      {
        prompt: "What happens to a category's courses when you delete the category?",
        options: [
          "They move onto a new label you pick",
          "They are deleted along with the label",
          "They move into a default category",
          "They are left with no category at all",
        ],
        correctIndex: 3,
        explanation:
          "Deleting a category leaves its courses uncategorized. Renaming is the operation that moves courses onto a new label.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "What does renaming a category do to the courses in it?",
        options: [
          "It moves them onto the new label",
          "It leaves them on the old label",
          "It leaves them with no category",
          "It splits them across both labels",
        ],
        correctIndex: 0,
        explanation:
          "Renaming moves its courses onto the new label. Deleting is the one that leaves them uncategorized.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "Where do you set which category a course belongs to?",
        options: [
          "On the Admin, Categories page itself",
          "In Course settings, under Category",
          "In Course settings, under Instructor",
          "In the catalog filter on your home page",
        ],
        correctIndex: 1,
        explanation:
          "Admin, Categories is where labels are added, renamed, and deleted. A course picks its own in Course settings, under Category.",
        sourceLessonSlug: "categories",
      },
      {
        prompt: "Who can see a course whose visibility is Private?",
        options: [
          "Its owner or instructor only",
          "Its editors and brand admins",
          "Everyone signed in to the school",
          "Brand admins and the platform owner",
        ],
        correctIndex: 0,
        explanation:
          "Private is owner or instructor only, hidden even from brand admins. Draft is the state other editors can still see.",
        sourceLessonSlug: "publish-visibility-holds",
      },
      {
        prompt: "What does a hold reason on a course do?",
        options: [
          "It hides the course from its instructor",
          "It blocks publishing until you clear it",
          "It unpublishes the course right away",
          "It marks the course as fully vetted",
        ],
        correctIndex: 1,
        explanation:
          "A course flagged with a hold reason cannot be published until the hold is cleared, which is what makes it useful for content still waiting on vetting.",
        sourceLessonSlug: "publish-visibility-holds",
      },
    ]),

    // ---------------------------------------------------------------------------------------
    // Section 2 · The people who teach
    // ---------------------------------------------------------------------------------------
    helpLesson(
      "school-teachers",
      "Section 2 · The people who teach",
      "Ask your next teacher to sign in to this school once so they have an account here. Then open /admin/teachers, enter their account email, and press Make a teacher. If they only need one class, skip all that: create the class yourself and add them as its teacher on the class page.",
    ),
    helpLesson(
      "change-course-instructor",
      "Section 2 · The people who teach",
      "Open a course at /teach/<courseId>, go to Course settings, set the Instructor dropdown to the account that should own it, and press Save settings. Confirm the course now shows under Your courses and that its public URL carries the new username. If a course is missing from Your courses, look for it in /teach, where admins see every course on the brand.",
    ),
    sectionQuiz("Section 2 · The people who teach", 2, [
      {
        prompt: "What must a person do before you can make them a teacher?",
        options: [
          "Be made a teacher on another school",
          "Sign in to this school once, for an account",
          "Be enrolled in one of your courses first",
          "Ask the platform owner for an account",
        ],
        correctIndex: 1,
        explanation:
          "Step one is asking them to sign in to this school once so an account exists to grant the role to.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "What does a teacher of your school get to do?",
        options: [
          "Change the brand settings of the school",
          "Add other teachers on the Teachers page",
          "Create classes and write courses here",
          "Edit any course the whole platform holds",
        ],
        correctIndex: 2,
        explanation:
          "A teacher can create classes under /cohorts and write courses under Teach, on this school only.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "What do you enter on Admin, Teachers to grant the role?",
        options: [
          "Their account email, then Make a teacher",
          "Their username, then Add to a cohort",
          "Their class code, then Make a teacher",
          "Their phone number, then Send an invite",
        ],
        correctIndex: 0,
        explanation:
          "On Admin, Teachers you enter the person's account email and press Make a teacher.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "What happens to the classes a removed teacher already teaches?",
        options: [
          "They pass to the school admin",
          "They are closed for the term",
          "They lose their teacher entirely",
          "They stay with that same teacher",
        ],
        correctIndex: 3,
        explanation:
          "Remove teacher only stops them creating new classes and courses here. Classes they already teach stay theirs.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "Can an account that belongs to a student be made a teacher?",
        options: [
          "Yes, once they tick the age box",
          "No, a student account cannot be",
          "Yes, if a brand admin approves it",
          "Yes, but for one class at a time",
        ],
        correctIndex: 1,
        explanation:
          "An account that belongs to a student cannot be made a teacher, which is why the adult tick comes first.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "How do you let one person run a single class without the teacher role?",
        options: [
          "Create the class, then add them on it",
          "Make them a teacher, then remove it",
          "Give them a brand admin account",
          "Ask them to tick the age box only",
        ],
        correctIndex: 0,
        explanation:
          "Create the class yourself, then add them as its teacher on the class page. They run that class and nothing else.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "Can a brand admin be removed on the Admin, Teachers page?",
        options: [
          "Yes, with the Remove teacher button",
          "Yes, but only the platform owner can",
          "No, admins are managed separately",
          "No, admins can never be removed",
        ],
        correctIndex: 2,
        explanation:
          "Remove teacher takes away the teacher role. Admins are managed separately and cannot be removed on that page.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "Besides brand admins and the platform owner, who can edit and save a course?",
        options: [
          "Every teacher of that school",
          "Anyone enrolled in the course",
          "The one instructor who owns it",
          "Each editor with draft access",
        ],
        correctIndex: 2,
        explanation:
          "Every course has exactly one instructor, its owner. Only that person, brand admins, and the platform owner can edit, record, or save it.",
        sourceLessonSlug: "change-course-instructor",
      },
      {
        prompt: "Where do you change a course's instructor from the UI?",
        options: [
          "In Admin settings, the Instructor dropdown",
          "In Course settings, the Instructor dropdown",
          "On the Teachers page, then Make a teacher",
          "On the course page, then the Share button",
        ],
        correctIndex: 1,
        explanation:
          "Open the course at /teach/<courseId>, go to Course settings, pick the person in the Instructor dropdown, and press Save settings.",
        sourceLessonSlug: "change-course-instructor",
      },
      {
        prompt: "What happens to a course's public URL when its instructor changes?",
        options: [
          "It keeps the old instructor's name in it",
          "It drops the username from the path",
          "It becomes a private draft address",
          "It changes to the new instructor's name",
        ],
        correctIndex: 3,
        explanation:
          "The course moves to that instructor's dashboard and its public URL changes to their username. You keep access as an admin.",
        sourceLessonSlug: "change-course-instructor",
      },
    ]),

    // ---------------------------------------------------------------------------------------
    // Section 3 · Reach and revenue
    // ---------------------------------------------------------------------------------------
    helpLesson(
      "marketing-tools",
      "Section 3 · Reach and revenue",
      "Open /admin/marketing and read the Signals row: your captured leads, the courses with the most people waiting, and how often the Share buttons were used by channel. Pick a published course in Compose announcement, edit the subject and message, then copy them or open them in your email app. Nothing sends from inside the app, so send it yourself.",
    ),
    helpLesson(
      "sales-and-promotions",
      "Section 3 · Reach and revenue",
      "In Sales and promotions, start a sale on one course: give it a Name, set Applies to, choose a percent off, and leave Ends blank. Open that course page and check the list price is struck through beside the sale price. Press End now when you have seen it, and confirm the original price comes straight back.",
    ),
    helpLesson(
      "sharing-and-cross-promotion",
      "Section 3 · Reach and revenue",
      "Open one of your course pages, press Share, copy the link, and paste it somewhere that unfurls previews so you can see the preview image. Then open that course's Course settings and curate up to three Related WitUS tools.",
    ),
    helpLesson(
      "api-keys-and-embedding",
      "Section 3 · Reach and revenue",
      "Go to /admin/api-keys, use Create a key, name it for the app that will use it, and paste the full value into that app's server-side secret storage while it is still on screen. Then open the course under /teach, click Embed, and paste the card snippet into a page you own. Click Revoke when you are done testing.",
    ),
    sectionQuiz("Section 3 · Reach and revenue", 3, [
      {
        prompt: "What does the announcement manager send to the WitUS Outbox?",
        options: [
          "Posts published to your profiles at once",
          "Social post drafts you publish yourself",
          "Emails sent to every lead you captured",
          "A schedule of posts the app times out",
        ],
        correctIndex: 1,
        explanation:
          "It sends a batch to the Outbox as social post drafts. Nothing publishes automatically, and you pick the profiles in the Outbox.",
        sourceLessonSlug: "marketing-tools",
      },
      {
        prompt: "What can you do with a finished Compose announcement draft?",
        options: [
          "Send it to every lead from this page",
          "Publish it to your social profiles",
          "Copy it, or open it in your email app",
          "Schedule it for the following morning",
        ],
        correctIndex: 2,
        explanation:
          "Nothing sends from inside the app. You copy the subject and message or open them in your email app, and you can save the draft as a campaign draft.",
        sourceLessonSlug: "marketing-tools",
      },
      {
        prompt: "What is true of email campaigns on the marketing page today?",
        options: [
          "Drafts save, but sending is disabled",
          "Drafts send once the audience is set",
          "Sending works for leads, not learners",
          "Drafts send on a schedule you choose",
        ],
        correctIndex: 0,
        explanation:
          "You compose and save drafts with a live audience count. Sending is intentionally disabled until the audience, consent, and unsubscribe rules are decided.",
        sourceLessonSlug: "marketing-tools",
      },
      {
        prompt: "What kind of discount does a promo code carry?",
        options: [
          "A dollars off discount per course",
          "A free enrollment for one learner",
          "A brand-wide percentage discount",
          "A discount on subscriptions only",
        ],
        correctIndex: 2,
        explanation:
          "Promo codes are brand-wide percentage discount codes, mirrored to a Stripe coupon when Stripe is configured.",
        sourceLessonSlug: "marketing-tools",
      },
      {
        prompt: "A course sale and a school-wide sale overlap. Which price applies?",
        options: [
          "The school-wide sale, if it is bigger",
          "The one that started earliest of them",
          "The one that ends soonest of the two",
          "The course sale, even if it is smaller",
        ],
        correctIndex: 3,
        explanation:
          "A sale on one course beats a school-wide sale on that course, even when the school-wide one is bigger. Your specific decision wins.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "What does leaving a sale's Ends field blank do?",
        options: [
          "It runs the sale for exactly a month",
          "It stops the sale from starting at all",
          "It ends the sale at the next midnight",
          "It runs the sale until you press End now",
        ],
        correctIndex: 3,
        explanation:
          "A blank Ends field runs the sale indefinitely, and you stop it yourself with End now. A blank Starts field is the one that starts it immediately.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "What happens at checkout when a sale reaches Free?",
        options: [
          "The learner still enters a card first",
          "The list price is charged, then refunded",
          "The learner enrolls with no card step",
          "The learner joins a waiting list first",
        ],
        correctIndex: 2,
        explanation:
          "A sale that reaches Free enrolls the learner straight away, with no card and no payment step.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "What does ending a sale do to the course price?",
        options: [
          "It stays at the sale price for a week",
          "It returns to the untouched list price",
          "It rises to the nearest whole dollar",
          "It has to be set again by hand",
        ],
        correctIndex: 1,
        explanation:
          "Your list price is never overwritten, so ending a sale puts the original price straight back. The ended sale stays in the list for the record.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "How many Related WitUS tools can a course carry?",
        options: [
          "Up to three, curated by you",
          "Up to ten, curated by you",
          "All of them, chosen for you",
          "One, picked by the platform",
        ],
        correctIndex: 0,
        explanation:
          "Related WitUS tools, in Course settings, curates up to three sibling apps, on WitUS-branded sites only.",
        sourceLessonSlug: "sharing-and-cross-promotion",
      },
      {
        prompt: "How long is a new API key's full value on screen?",
        options: [
          "Until you revoke it on the page",
          "Once, right after you create it",
          "For the first day after creation",
          "Any time, from the key's row",
        ],
        correctIndex: 1,
        explanation:
          "The full key is shown once, right after creation. Afterwards only a short prefix is shown, and the full key cannot be retrieved again.",
        sourceLessonSlug: "api-keys-and-embedding",
      },
    ]),

    // ---------------------------------------------------------------------------------------
    // Final: 25 questions across all three sections, 10 served per attempt.
    // ---------------------------------------------------------------------------------------
    finalQuiz("Section 3 · Reach and revenue", [
      // Section 1
      {
        prompt: "What does the Short name brand setting label?",
        options: [
          "The header text on every page",
          "The card shown on social posts",
          "The app icon a learner installs",
          "The browser tab's small icon",
        ],
        correctIndex: 2,
        explanation:
          "Short name is the label under the app icon when a learner installs your school as an app. The header text is Wordmark.",
        sourceLessonSlug: "admin-home-and-brand-settings",
      },
      {
        prompt: "What does the Theme color setting tint?",
        options: [
          "The accent used on every button",
          "Browser chrome and the app splash",
          "The catalog filter chips only",
          "The struck-through sale price",
        ],
        correctIndex: 1,
        explanation:
          "Theme color tints the browser chrome and the installed-app splash screen. Accent colors are their own setting.",
        sourceLessonSlug: "admin-home-and-brand-settings",
      },
      {
        prompt: "What form must a brand image field be given?",
        options: [
          "A file uploaded through the field",
          "A path to a file on your computer",
          "Either an http or an https URL",
          "An https URL pasted into the field",
        ],
        correctIndex: 3,
        explanation:
          "Image fields take https URLs only. Upload the file to your media host first, then paste the URL and check the preview under the field.",
        sourceLessonSlug: "admin-home-and-brand-settings",
      },
      {
        prompt: "When do brand name, tagline, and accent changes take effect?",
        options: [
          "Once a support ticket is closed",
          "On the next page load of the site",
          "Once the next code deploy lands",
          "Only for learners who sign up later",
        ],
        correctIndex: 1,
        explanation:
          "Brand admins change these themselves, with a live preview, and the change applies on the next page load. No code change, no support ticket.",
        sourceLessonSlug: "admin-home-and-brand-settings",
      },
      {
        prompt: "Turning the Learning paths setting on does what?",
        options: [
          "It builds the tracks for you",
          "It hides the catalog from learners",
          "It adds XP, levels, and badges",
          "It puts /paths in the school menu",
        ],
        correctIndex: 3,
        explanation:
          "The setting puts /paths in the menu. You still build the tracks yourself at Admin, Learning paths.",
        sourceLessonSlug: "admin-home-and-brand-settings",
      },
      {
        prompt: "How do you publish several courses in one go?",
        options: [
          "Open each one and click its pill",
          "Clear every hold reason on /admin",
          "Select them on /teach, then Publish",
          "Run the bulk reassign script first",
        ],
        correctIndex: 2,
        explanation:
          "Select several courses on /teach and choose Publish or Unpublish. The status pill is the one-course version.",
        sourceLessonSlug: "publish-visibility-holds",
      },
      {
        prompt: "How do you switch one course between draft and published?",
        options: [
          "Click its status pill on /teach",
          "Click its status pill on /admin",
          "Use the Embed button on /teach",
          "Use the Share button on that page",
        ],
        correctIndex: 0,
        explanation:
          "Publish is toggled per course from /teach by clicking the status pill.",
        sourceLessonSlug: "publish-visibility-holds",
      },
      {
        prompt: "What do your categories power for learners?",
        options: [
          "The catalog's filter for learners",
          "The order courses are listed in",
          "The price shown on each course",
          "The share image each page uses",
        ],
        correctIndex: 0,
        explanation:
          "Categories power the catalog filter. You manage the labels at Admin, Categories and assign one per course in Course settings.",
        sourceLessonSlug: "categories",
      },
      // Section 2
      {
        prompt: "What does Remove teacher stop a person doing?",
        options: [
          "Teaching the classes they run",
          "Creating new classes or courses",
          "Signing in to your school at all",
          "Enrolling in courses you publish",
        ],
        correctIndex: 1,
        explanation:
          "Remove teacher takes the role away, so they cannot create new classes or courses here. Classes they already teach stay theirs.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "Where does a teacher of your school create classes?",
        options: [
          "Under /teach, on this school",
          "Under /admin, on this school",
          "Under /cohorts, on this school",
          "Under /paths, on this school",
        ],
        correctIndex: 2,
        explanation:
          "Classes live under /cohorts. Courses are written under Teach, and both are scoped to this school only.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "Which tick does a teacher make once when adults are required?",
        options: [
          "I am 18 or older, on Cohorts",
          "I accept the terms, on Teach",
          "I am a school admin, on Admin",
          "I am not a student, on Paths",
        ],
        correctIndex: 0,
        explanation:
          "When the platform requires teachers to be adults, which is the default, they tick I am 18 or older once. The Cohorts page offers it.",
        sourceLessonSlug: "school-teachers",
      },
      {
        prompt: "Who keeps access to a course after its instructor is changed?",
        options: [
          "Nobody but the new instructor",
          "The old instructor, as editor",
          "Every teacher of the school",
          "The admin who made the change",
        ],
        correctIndex: 3,
        explanation:
          "The course moves to the new instructor's dashboard, and you keep access as an admin.",
        sourceLessonSlug: "change-course-instructor",
      },
      {
        prompt: "Which placeholder instructors does the article name?",
        options: [
          "@witus-admin and @bam-faculty",
          "@witus-health and @trade-faculty",
          "@learn-witus and @bam-health",
          "@trade-health and @witus-staff",
        ],
        correctIndex: 1,
        explanation:
          "Some courses were seeded under @witus-health, @trade-faculty, or a bam seed id, which is why they can feel read-only.",
        sourceLessonSlug: "change-course-instructor",
      },
      {
        prompt: "The instructor change fails saying that URL is taken. What next?",
        options: [
          "Delete the other course entirely",
          "Ask the owner to merge the two",
          "Unpublish both for a short while",
          "Rename this course's slug, retry",
        ],
        correctIndex: 3,
        explanation:
          "That error means two courses would share a slug under one instructor. Rename this course's slug first, then change the instructor.",
        sourceLessonSlug: "change-course-instructor",
      },
      {
        prompt: "Where can a brand admin find a course missing from Your courses?",
        options: [
          "In /cohorts, beside their classes",
          "In /admin, under Interest and leads",
          "In /teach, which lists every course",
          "In the catalog, filtered by category",
        ],
        correctIndex: 2,
        explanation:
          "Admins see every course on the brand in /teach, each with an instructor byline, so it is reachable there.",
        sourceLessonSlug: "change-course-instructor",
      },
      {
        prompt: "What do you run first when reassigning instructors in bulk?",
        options: [
          "The apply pass, then the dry run",
          "The dry run, before the apply pass",
          "A migration, then the reassign",
          "The seed script, then the dry run",
        ],
        correctIndex: 1,
        explanation:
          "Run the reassign script dry first, then run it again with the apply flag. Prod details are in user-task 42.",
        sourceLessonSlug: "change-course-instructor",
      },
      // Section 3
      {
        prompt: "What does the Signals row report about the Share buttons?",
        options: [
          "How often they were used, by channel",
          "Which learners clicked them, by name",
          "How many sales each one has driven",
          "Which pages have them switched off",
        ],
        correctIndex: 0,
        explanation:
          "Signals shows captured leads, the courses with the most people waiting, and how often the in-app Share buttons were used, by channel.",
        sourceLessonSlug: "marketing-tools",
      },
      {
        prompt: "Where is a promo code mirrored when Stripe is configured?",
        options: [
          "To a Stripe product for the course",
          "To a Stripe invoice for the learner",
          "To a Stripe payout for your school",
          "To a Stripe coupon for the brand",
        ],
        correctIndex: 3,
        explanation:
          "Brand-wide percentage codes are mirrored to a Stripe coupon when Stripe is configured.",
        sourceLessonSlug: "marketing-tools",
      },
      {
        prompt: "Can a promo code discount a course that is already on sale?",
        options: [
          "Yes, both can work at the same time",
          "No, the sale blocks any code applied",
          "Only when the code is the bigger cut",
          "Only for a course priced above list",
        ],
        correctIndex: 0,
        explanation:
          "Sales and codes are the two halves of the same idea. Both work at once, and a code still discounts a course already on sale.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "Which pricing do sales not cover yet?",
        options: [
          "Bundle pricing is not covered yet",
          "One-course pricing is not covered",
          "Subscription pricing, not yet covered",
          "School-wide pricing is not covered",
        ],
        correctIndex: 2,
        explanation:
          "Sales apply to one course, one bundle, or everything in your school, but not to subscription pricing yet.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "What does a learner see beside the sale price?",
        options: [
          "The next sale, with its start date",
          "The promo code needed to claim it",
          "The date the sale price will rise",
          "The list price, struck through in red",
        ],
        correctIndex: 3,
        explanation:
          "The list price appears struck through in red with the sale price beside it in green, and screen readers announce it as was, now.",
        sourceLessonSlug: "sales-and-promotions",
      },
      {
        prompt: "How is an API key sent on each request?",
        options: [
          "As a query string on the URL",
          "As an Authorization Bearer header",
          "In the request body as JSON",
          "As a cookie set by your school",
        ],
        correctIndex: 1,
        explanation:
          "Send the key as an Authorization Bearer header on every request to the v1 course endpoints.",
        sourceLessonSlug: "api-keys-and-embedding",
      },
      {
        prompt: "What must never appear in an iframe embed snippet?",
        options: [
          "A course id, which stays private",
          "Your school's own domain name",
          "An API key, a server-side secret",
          "The price shown on the card",
        ],
        correctIndex: 2,
        explanation:
          "Keys are server-side secrets and the embeds do not need one. They only ever show published, public content.",
        sourceLessonSlug: "api-keys-and-embedding",
      },
      {
        prompt: "What is at the /embed/course/<courseId> address?",
        options: [
          "A chromeless published lesson list",
          "A checkout page for that course",
          "A private draft preview for staff",
          "A card with title, price, and link",
        ],
        correctIndex: 0,
        explanation:
          "It is a chromeless page listing the course's published lessons with a Continue link out to the full course. The card is the other embed.",
        sourceLessonSlug: "api-keys-and-embedding",
      },
      {
        prompt: "What does the Share button offer when native share is unavailable?",
        options: [
          "Copy and Email, with nothing else",
          "Copy, X, LinkedIn, Facebook, Email",
          "A QR code and a printable page",
          "An embed snippet for any website",
        ],
        correctIndex: 1,
        explanation:
          "Native share is the mobile case. Otherwise the button offers Copy, X, LinkedIn, Facebook, and Email.",
        sourceLessonSlug: "sharing-and-cross-promotion",
      },
    ]),
  ],
};
