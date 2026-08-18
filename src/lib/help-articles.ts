// In-app teacher Help Center content (help-documention.md). Plain data — rendered as markdown at
// /help with fuzzy search. This is the "class" that teaches instructors how to use the app; keep it
// current as teacher-facing features ship. Each article is short and task-oriented.

export interface HelpArticle {
  slug: string;
  title: string;
  category: string;
  /** Extra search terms beyond title/category/body. */
  keywords: string[];
  body: string;
}

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: "getting-started",
    title: "Getting started as a teacher",
    category: "Basics",
    keywords: ["begin", "start", "teach", "overview", "instructor"],
    body: `# Getting started

Everything you author lives under **Teach** (top menu → Teach, or \`/teach\`).

1. **Create a course**, give it a title and description.
2. **Add lessons**, text, audio, video, slides, quizzes.
3. **Set it up**, category, pricing, visibility.
4. **Publish** when it's ready.

Your course list at \`/teach\` has search, filters, and bulk actions so you can manage many courses at once.`,
  },
  {
    slug: "create-a-course",
    title: "Create a course",
    category: "Courses",
    keywords: ["new course", "add course", "start course"],
    body: `# Create a course

On **/teach**, use the **New course** form (title + optional description) and click **Create course**.
You'll land on the course manager, where you edit settings and add lessons.

To change the title, description, category, pricing, or visibility later, open the course from
**/teach** and edit the **Course settings** panel.`,
  },
  {
    slug: "add-and-edit-lessons",
    title: "Add and edit lessons",
    category: "Courses",
    keywords: ["lesson", "module", "section", "content", "markdown", "media"],
    body: `# Add and edit lessons

In the course manager, use **Lessons** to add and reorder lessons.

- **Text lessons**, write in the editor; it supports markdown (headings, lists, links, tables).
- **Media lessons** (audio / video / slides), upload a file or paste a URL (a file, YouTube/Vimeo,
  or Google Slides). Large files upload in chunks automatically.
- **Free preview**, tick this to let non-enrolled learners see the lesson.

Edit a lesson, make your changes, and click **Save lesson**.`,
  },
  {
    slug: "record-audio-in-app",
    title: "Record lesson audio or video in the app",
    category: "Recording",
    keywords: ["record", "microphone", "camera", "audio", "video", "offline", "upload", "cloudinary"],
    body: `# Record lesson audio or video in the app

Open a course → **Recording script** → the recording checklist. Each lesson has a **🎙 Record
audio** and a **🎥 Record video** button; both modes are first-class, pick per lesson (a lesson
that's mostly a table or a map is often better as audio; a talking-head explainer suits video).

- Recording is **offline-first**: your take is saved on your device immediately and uploads when
  you're back online, nothing is lost if you close the tab or drop your connection. Nothing is
  **published** automatically either; uploading only attaches the file to the lesson.
- **Pause/Resume**, hit **⏸ Pause** to stop for a moment and **▶ Resume** to keep the same take
  going. Record a whole course across several sittings; paused time isn't counted in the length.
- Status shows **recording → saved locally → uploading → uploaded ✓** (or *retry* on failure).
- A take **auto-stops / auto-splits** just under the 100 MB limit into ordered parts. Video fills
  that much faster than audio (roughly 4 to 6 minutes of 720p per part), which is fine: a long
  take just becomes more parts, played back in order.
- A successful upload attaches the audio/video to the lesson (setting its lesson type to match)
  and ticks it **recorded**.
- **⬇ Download** saves the take to your device as a backup, handy if an upload keeps failing.
- Uploaded files get a **readable name** in Cloudinary (\`witus/recordings/<course>/<lesson>\`), so
  you can find them later instead of hunting through random ids.

**Video specifics.** Video records at 720p from the front camera with a live self-view. The
preview is **mirrored so you look natural; the saved file is not mirrored**. Keep the preview (or
the teleprompter text) as close to the lens as you can so your eyes stay on camera. While a video
take records, the app asks the phone to keep the screen awake.

Uploads need Cloudinary configured and an HTTPS URL (the deployed site). If an upload fails, the red
error now shows **Cloudinary's exact reason**, usually the upload preset isn't set to *Unsigned*
(see the operator runbook / user-task 43). Video goes through the **same** upload preset and the
same 100 MB per-asset plan cap as audio; if the preset is restricted to certain formats, the error
will say so.`,
  },
  {
    slug: "recording-scripts-teleprompter",
    title: "Recording scripts & teleprompter",
    category: "Recording",
    keywords: ["script", "teleprompter", "read", "narration", "video", "camera", "mark recorded"],
    body: `# Recording scripts & teleprompter

The **Recording script** page turns your lessons into a clean read-aloud script (regenerated from
the current lesson text each visit). Use **Teleprompter** for a full-screen auto-scroll with speed,
text-size, and mirror controls. Tick lessons off as you record them, progress is saved across
sittings.

**Record while you read:** the teleprompter has a built-in recorder, pick the lesson from the
**Recording to** dropdown in its control bar and hit **🎙 Record audio** or **🎥 Record video**, so
you capture a take without leaving the full-screen script. Space = play/pause the scroll,
↑/↓ = speed, Esc = exit.

**Video in the teleprompter:** choosing 🎥 puts a small **mirrored self-view at the top** of the
screen, right where a phone's front camera sits. Prop the phone in portrait with the lens just
above the scrolling words: reading the script then naturally keeps your eyes near the lens, which
is the whole point of a teleprompter. The self-view is mirrored for you only, the recorded video
isn't flipped.`,
  },
  {
    slug: "set-pricing",
    title: "Set a price (it's here, not in Stripe)",
    category: "Pricing",
    keywords: ["price", "money", "free", "subscription", "stripe", "billing", "monthly", "annual"],
    body: `# Set a price

You set prices **in the app**, not in Stripe. In **Course settings → Pricing**, choose:

- **Free**, **One-time purchase**, or **Subscription** (monthly or annual).
- Enter the amount; the form shows what you keep after estimated fees.

Stripe just executes the price you set here. If you see a **"Stripe isn't configured"** warning,
paid checkout won't work until the Stripe keys are set, don't publish a paid course until then.
Changing the price re-prices the next checkout automatically.`,
  },
  {
    slug: "categories",
    title: "Organize courses with categories",
    category: "Courses",
    keywords: ["category", "categories", "filter", "track", "organize"],
    body: `# Categories

Manage categories at **Admin → Categories** (add, rename, delete). Renaming moves its courses onto
the new label; deleting leaves those courses uncategorized.

Assign a course's category in **Course settings → Category** (pick from your categories or type a new
one). Categories power the catalog filter.`,
  },
  {
    slug: "publish-visibility-holds",
    title: "Publish, drafts, private, and holds",
    category: "Courses",
    keywords: ["publish", "draft", "private", "hold", "visibility", "hide", "unpublish"],
    body: `# Publish, drafts, private, and holds

- **Draft** (unpublished), only you and other editors can see it.
- **Private**, owner/instructor only, even hidden from brand admins.
- **On hold**, a course flagged with a hold reason **can't be published** until you clear the hold
  (use this for content that still needs vetting).

Toggle publish per course from **/teach** (click the status pill), or in bulk by selecting several
courses and choosing **Publish / Unpublish**.

See also **Vetting a course, and the "Coming soon" page**, for the separate review step that decides
whether learners get the lessons or a coming-soon page.`,
  },
  {
    slug: "vetting-and-coming-soon",
    title: 'Vetting a course, and the "Coming soon" page',
    category: "Courses",
    keywords: [
      "vet",
      "vetted",
      "unvetted",
      "coming soon",
      "review",
      "notify me",
      "bulk",
      "waiting list",
      "leads",
      "interest",
      "demand",
      "bundle",
      "track",
      "csv",
      "export",
      "audit",
      "auditor",
      "review",
      "reviewer",
      "invite",
    ],
    body: `# Vetting a course

**Vetting is a separate step from publishing.** Publishing says the course exists; vetting says it has
been reviewed against its sources and is ready for learners.

A course that has **not** been vetted shows learners a **"Coming soon" page** instead of the lessons:

- Its landing page stays **public**, and search engines still index it. Visitors read the title, the
  description, and the academic standards it meets, and they can share the link.
- The **content is closed**: no lesson list, no lesson titles, no media, no price, and no enroll button.
- **Anyone already enrolled keeps full access**, and so do you (the instructor) and the platform owner.
  Un-vetting a course never locks out someone who is already studying it, including anyone who paid.
- Visitors can leave an email on the **"Get notified when this course opens"** form.

There is deliberately **no expected date** on that page. A missed date is worse than no date.

## If you are the instructor: getting your course approved

You cannot mark your own course vetted, and that is deliberate: vetting means *someone else*
reviewed it. Here is the path.

1. **Finish the course.** Every lesson published, quizzes in place, and the \`## Sources\` block
   filled in on any lesson that makes a factual claim.
2. **Check it against the guards.** Ask the platform owner to run the content checks (they fail
   the build on a quiz answerable without reading, a broken self-check card, a figure with no
   credit), or watch for their feedback if they run them for you.
3. **Get a second pair of eyes.** On your course manager, **Invite to audit** lets you invite
   someone by email to read the whole course while it is still Coming soon. They can read
   everything and change nothing, and their quiz clicks never touch your course statistics.
4. **Tell the platform owner it is ready.** The banner on your course manager shows how many
   people have already asked to be notified when it opens, which is the most useful thing you can
   send along with the request.
5. **They mark it vetted**, and the lessons open to everyone at once. Nobody loses access at any
   point in this process: people already enrolled keep the full course throughout.

**While you wait**, your course is not invisible. Its landing page stays public and indexable with
the title, description and the standards it meets, plus the notify-me form, so the waiting list
builds before launch.

## Marking courses vetted (platform owner only)

On **/teach**, tick the courses you want, then choose **Mark vetted** or **Mark unvetted**. Both work
on any number of courses at once. Use the **Vetted** and **Unvetted** filters to find what still needs
review, and the small **🕒 coming soon** tag on a row tells you at a glance.

Marking a course vetted a second time does **not** change the date it was first vetted.

## Opening a course before its review finishes ("live but unvetted", owner only)

Sometimes a course should open now, review still in progress. Next to the vetting buttons on
**/teach**, **Open while unvetted** flips exactly that: the full course opens to the public, and
every page of it carries a visible "review in progress" notice so nobody mistakes it for a
reviewed course. **Close while unvetted** returns it to the Coming soon page (enrollees keep
access, as always).

Two things the switch never changes: the course still counts as unvetted in your review queue
(the notice is the point, not a workaround), and the **public API keeps withholding its lessons
until it is actually vetted**, because an external site republishing them cannot show your
notice. Once you mark the course vetted, the flag stops meaning anything.

## Who is waiting

Open a course you have not vetted (**/teach → the course**) and the banner at the top says how many
people asked to be told when it opens.

**The list itself lives at Admin → Interest & leads (\`/admin/leads\`).** That page opens on a demand
board: how many distinct people are waiting, counted **by course**, **by learning track**, **by
bundle**, and **by source**, highest first. That is the answer to "what should I vet next". Tap any
line to filter the list below it to exactly those people, or use the **Filter** form to combine a
course, a track, a bundle, and a source. Everything is in the address bar, so you can bookmark a
view, share it, or print it.

- A **track** filter picks up everyone waiting on **any** course in that series.
- A **bundle** filter picks up everyone waiting on **any** course that bundle contains.
- The **source** filter separates "waiting for a course" from an **/explore** pricing enquiry.
- **Download this list as CSV** exports whatever is currently filtered, one row per person, ready to
  paste into an email tool.

Each signup is also mirrored to the WitUS Inbox.

**Vetting a course does not email the people waiting for it.** Nothing is sent automatically, on
purpose: you decide what that message says and when it goes out. Filter to the course, export the
CSV, and send it yourself.

## Inviting someone to review a course before it opens

Open the course at **/teach → the course** and scroll to **"Invite someone to review this course"**.
Enter an email address and send. The invitee gets a link (and you get the same link on screen, so you
can send it yourself if you prefer). When they follow it and sign in **with that address**, they see
the real course instead of the "Coming soon" page.

A reviewer can read **every lesson of that one course**, and nothing else. In particular:

- An invitation that has **not been accepted** yet grants nothing at all.
- A reviewer of one course cannot see any other course, vetted or not.
- Reviewers are **read-only**. They cannot enroll, cannot earn a certificate, and **nothing they do is
  recorded**: no progress, no quiz scores, no recall grades. That is deliberate, so a reviewer
  clicking through a quiz to check its wording never moves the course's statistics or your dashboard
  averages. The pages say so plainly, so nobody thinks they are being graded.
- Once you mark the course **vetted**, the invitation stops mattering: the course is open to its
  normal audience, and the reviewer is an ordinary visitor again.

**Remove** next to a name revokes access, and it takes effect immediately. If someone loses their
link, invite the same address again, that mints a fresh link and replaces the old one.`,
  },
  {
    slug: "quick-recall",
    title: "Add Quick-recall self-test prompts",
    category: "Teaching",
    keywords: ["recall", "quiz", "self test", "reveal", "active recall", "practice"],
    body: `# Quick-recall prompts

In the lesson editor, add **Quick recall prompts**, question/answer pairs. In the lesson, learners
see click-to-reveal cards and self-grade **"I got it / Missed it"** before the quiz.

Inline **Check yourself** cards (a \`:::reveal question ||| answer\` line anywhere in a lesson body)
work the same way: after revealing the answer, a signed-in learner self-grades it too.

Their self-grades roll up into **Recall accuracy** on your course page, your signal for whether it's
sticking in the lesson versus only at quiz time. Learners see their own side of it on
**/dashboard → Check-yourself history**: what they missed, when, how often, and which items are due
for another try.`,
  },
  {
    slug: "ai-tools-embeddings-audit",
    title: "Keep your course's AI features current",
    category: "Teaching",
    keywords: ["embeddings", "index", "reindex", "re-index", "chat with sources", "cyoa", "audit reveals", "ai", "self-check"],
    body: `# Keep your course's AI features current

At the bottom of your course page (when you're the instructor) you'll find **Instructor tools**.

- **Generate / Re-index embeddings** powers chat-with-your-sources and the CYOA "crossroads." When you
  **publish** a course it re-indexes automatically. If you later edit lessons on an already-published
  course, a badge shows **"N of M lessons changed since last index"**, click **Re-index lessons** to
  refresh it. (Needs an AI key configured.)
- **Audit reveals** asks the AI whether each \`:::reveal\` self-check answer is actually supported by
  its lesson, and lists any that look off. It's an advisory suggestion, so always verify before you
  change a card, but it's a fast way to catch an answer that drifted after you rewrote a lesson.`,
  },
  {
    slug: "live-sessions",
    title: "Run a live session",
    category: "Live",
    keywords: ["live", "stream", "broadcast", "rtmp", "embed", "webinar"],
    body: `# Live sessions

Schedule a live class from **Admin → Live**: paste your streaming service's **player embed URL**,
set visibility, and optionally attach it to a **course** (it then appears on that course page). Go
live / end / set the saved recording from the same screen. A dedicated **/live** page lists all
sessions for the school.`,
  },
  {
    slug: "cohorts",
    title: "Run a private class with Cohorts",
    category: "Live",
    keywords: ["cohort", "class", "roster", "invite", "home school", "homeschool", "students", "who's here", "presence", "adjust grade", "override", "regrade"],
    body: `# Cohorts

**/cohorts** lets any signed-in user, not just brand admins, run a private class: the
home-school use case (a parent asks you to teach their child + classmates live).

1. **Create a class**, give it a name (e.g. "Tuesday homeschool group").
2. **Invite students by email** from the class's roster page. Each invite is a one-time link; if
   email delivery isn't configured yet, the link is shown right there to copy and send yourself.
3. Students open the link, sign in (magic link), and land on **/live** already enrolled.
4. The roster shows **● here** next to any student currently present on /live, so you can see who
   showed up in real time. Remove a student from the roster at any time.

You see only your own classes; brand admins/owner can see any class on the school.

## Adjusting a grade (without rewriting it)

On the class report (**/cohorts/[id] → report**), every row has an **Adjust** control: adjust a
quiz score, or mark a course complete (display only, no certificate). A **reason is required**
and stays on record. Nothing is ever edited or deleted: your adjustment is a new entry on top,
the student's real attempt stays underneath, and every report (yours, the family view, the CSV)
shows the adjusted value **with a visible marker and your reason**. The student sees both values
on their own dashboard. A wrong adjustment is fixed by saving a newer one. Course statistics
keep measuring real attempts only.`,
  },
  {
    slug: "family",
    title: "Give parents a read-only Family view",
    category: "Live",
    keywords: ["family", "parent", "guardian", "child", "progress", "grades", "attendance", "cohort", "specialization", "credential"],
    body: `# Family

**/family** gives a parent a read-only view of their own child's **course progress**, **grades**
(recall + quiz), **credentials**, and **live-class attendance**, nothing else, and never another
family's child.

1. From a cohort's roster (**/cohorts/[id]**), click **Invite a parent/guardian** next to a student
   and enter the parent's email. It's a one-time link; if email delivery isn't configured yet, the
   link is shown right there to copy and send yourself.
2. The parent opens the link at \`/family/accept/[token]\`, signs in (magic link), and is linked to
   that one child.
3. At **/family** they see that child's enrolled-course progress %, recall accuracy, quiz average,
   earned credentials, and which live-class days they attended. Under credentials it also lists any
   earned **specializations**: a named track of three courses (a shared research core, a craft
   course, and a subject course) that only appears once the child has completed all three. It is a
   record on this site, not an external certification, and a parent never sees partial progress
   toward one, only earned specializations.

A parent only ever sees children they've been explicitly linked to. Kids keep their own accounts
(this is not a shared/managed login), a future release may add managed sub-profiles for children
too young for their own account.`,
  },
  {
    slug: "notes-and-annotations",
    title: "Notes, highlights, and class notes",
    category: "Live",
    keywords: ["notes", "annotation", "highlight", "share", "private", "teacher note", "class note", "export", "search notes"],
    body: `# Notes, highlights, and class notes

Every signed-in learner can take notes on a lesson, and a note is **private to its author unless
they explicitly share it**, one note at a time. There is deliberately no "share all my notes"
switch anywhere.

**For learners** (this is what your students see):

- The **My notes** panel at the bottom of every lesson holds their notes for that lesson.
- Selecting any text in the lesson offers **Add note**, which pins the note to that exact passage
  and highlights it. If the lesson text later changes, the note is kept and marked "the text this
  was attached to has changed", never deleted.
- **Share with teacher…** on a note shares that one note with a teacher (an owner of a class
  they belong to). They can unshare at any time, and the note says in words who can see it.
- **Search my notes** finds their notes and highlights across the whole course, and **Download my
  notes (.md)** exports them with the quoted passages and lesson links.

**For teachers:**

- On any lesson, **Send a note to your class** attaches a note to that lesson for one of your
  classes, or only the students you pick ("individual" and "group" are just narrower audiences).
  It appears in those students' notes panel on that lesson. It is **not** an email or a
  notification, and it never leaves the lesson page.
- Notes students shared with you appear under **Shared with you by students** on the lesson they
  wrote them on. A student can withdraw a share at any time.

**For guardians:** the Family report (/family → report) shows notes a teacher sent their child.
A child's own notes stay private to the child unless the child shares them, and the report says
so.`,
  },
  {
    slug: "in-course-search",
    title: "Search inside a course",
    category: "Courses",
    keywords: ["search", "find", "lesson search", "image search", "captions", "alt text"],
    body: `# Search inside a course

Enrolled learners (and you, on your own courses) get a **Search this course** box on the course
page. It finds where the course said something: lesson text, self-check questions and answers,
and image descriptions, the alt text, captions, and credits that every figure in this catalog is
required to carry.

Be precise with students about that last part: it searches the **text attached to** images, not
the pictures themselves, which is why the empty state says so in those words.`,
  },
  {
    slug: "learner-feedback-and-reports",
    title: "See learner feedback and problem reports",
    category: "Feedback",
    keywords: ["feedback", "correction", "comment", "question", "bug", "report", "triage", "inbox", "offline", "queued", "pending"],
    body: `# Learner feedback & problem reports

- **Curriculum feedback** (corrections / comments / questions learners leave on lessons) is at
  **/teach → Curriculum feedback**. Each teacher sees their own courses' feedback.
- **Problem reports** (the site-wide "🐞 Report a problem" button: bug / feedback / idea / other)
  are triaged at **Admin → Problem reports**.
- Both can be read from the command line without copy-paste: \`pnpm feedback:list\` and
  \`pnpm reports:list\`. Feedback on the owner's courses also mirrors to the WitUS Inbox.

## Both work offline

A learner reading a **saved-for-offline** lesson on a plane or a subway is exactly who spots the
typo, the wrong date, or the bug, so neither form needs a connection. With no network, the note is
**held on that device** ("Waiting to send"), and it posts itself the moment the connection is back,
from whatever page they happen to be on. Nothing is silently lost: a held note survives a reload and
a closed tab, is only cleared once the server has actually taken it, and if the server rejects it,
it stays on screen with the reason so the text can be copied out. A learner whose session expired
while offline is asked to sign in, their note is kept, not dropped.

So reports and feedback can arrive **later than they were written**. The timestamp is when the
server received it.`,
  },
  {
    slug: "sharing-and-cross-promotion",
    title: "Sharing, previews, and cross-promotion",
    category: "Growth",
    keywords: ["share", "social", "og", "preview", "cross promotion", "related tools", "links"],
    body: `# Sharing & cross-promotion

- Every school, course, and lesson page has a **Share** button (native share on mobile; Copy /
  X / LinkedIn / Facebook / Email otherwise). Shared links show a page-relevant preview image.
- **Related WitUS tools**, in Course settings, curate up to 3 sibling apps to show as a small
  labeled card on the course page (WitUS-branded sites only).
- **Link usage**, the course page shows how often outbound links get clicked (counts only).`,
  },
  {
    slug: "streaming-and-multistream",
    title: "Streaming: always-on stream + multistream to socials",
    category: "Live",
    keywords: ["stream", "rtmp", "obs", "viloud", "embed", "multistream", "linkedin", "youtube", "restream"],
    body: `# Streaming

Manage streaming under **/admin/live** (platform owner / brand admin).

## Always-on stream
Paste your provider's embed code (an iframe from Viloud, YouTube, and the like) or a direct https
player URL into **Always-on stream**, then Save. We keep only the player URL (never raw HTML) and
show it on your school's **Live** page whenever no scheduled session is live. If it rejects the
host, the message names it, add trusted hosts in \`src/lib/stream-embed.ts\`.

## Multistream to LinkedIn / YouTube / …
Add each destination's RTMP ingest URL + stream key under **Multistream targets**, then copy them
into OBS's multiple-output so one broadcast fans out to several socials. The app only stores the
config; OBS does the streaming. Stream keys are often single-use, so update them before a broadcast.`,
  },
  {
    slug: "quizzes-rotation-and-images",
    title: "Quizzes: rotating pools, shuffled options, and images",
    category: "Courses",
    keywords: ["quiz", "exam", "rotate", "random", "shuffle", "pool", "image", "alt", "accessibility"],
    body: `# Quizzes & exams

Quizzes are authored in \`quiz_content\` (via seeds today). Beyond the basics you can:

- **Rotate questions**, set \`questionsPerAttempt\` to serve a random subset of a larger pool, so a
  learner sees different questions on each retake. Omit it (or set it to the pool size) to show all.
- **Shuffle options**, set \`shuffleOptions: true\` to randomize each question's option order per
  attempt. Scoring is by identity, so rotation and shuffling never affect correctness.
- **Add an image**, a question can carry \`imageUrl\` plus a REQUIRED \`imageAlt\` (screen-reader
  description); it renders above the prompt. Seeding fails if an image has no alt text.`,
  },
  {
    slug: "images-and-quick-recall",
    title: "Lesson images (with alt text) and Quick recall",
    category: "Teaching",
    keywords: ["image", "alt", "accessibility", "screen reader", "recall", "retrieval", "previous lesson"],
    body: `# Images & Quick recall

## Images in lessons
In the lesson editor's toolbar, use **Image**. It asks for a short description (alt text) first,
this is required for screen-reader users, then uploads the image and inserts it. Images are
responsive and lazy-loaded.

## Quick recall
Add **Quick recall** prompts (question/answer pairs) to a lesson. They render at the START of the
lesson as click-to-reveal cards, so learners test themselves on the PREVIOUS lesson before the new
material. Self-grades ("I got it" / "Missed it") feed the **Recall accuracy** panel on your course
dashboard, so you can compare in-lesson recall against quiz results. Inline **Check yourself**
(\`:::reveal\`) cards self-grade the same way, and learners can review everything they missed on
**/dashboard → Check-yourself history**.`,
  },
  {
    slug: "recording-long-lessons",
    title: "Recording long lessons (auto-split parts)",
    category: "Recording",
    keywords: ["record", "audio", "long", "split", "parts", "upload", "cap", "size", "cloudinary"],
    body: `# Long recordings

The in-app recorder saves offline-first and uploads when you're online. If a take runs past the
upload size cap, it now **rolls into a new part automatically** instead of cutting off, a long
lecture becomes several ordered parts that upload in order and play back in sequence for the
learner (with Prev / Next). Nothing is lost if the tab closes mid-record; parts wait in the browser
and drain when you're back online.`,
  },
  {
    slug: "keeping-courses-current",
    title: "Keeping courses & content current (migrate + seed)",
    category: "Operator",
    keywords: ["seed", "migrate", "migration", "deploy", "update", "content", "current", "runbook", "operating"],
    body: `# Keeping courses & content current

Full runbook: **OPERATING.md** in the repo. The essentials:

## The golden rule
Code alone doesn't change what learners see, courses render from the **database**. After you
change a course, **migrate (if the schema changed) then re-run its seed**:

\`\`\`
pnpm db:migrate:prod
pnpm seed:<the affected seed>
\`\`\`

## Which seed owns what
- **seed:courses**, civics (incl. all state-civics), the AI ladders, Hoodoo, Ed.L.D., cyber, and
  most authored courses.
- **seed:languages**, Spanish / French / Portuguese / Italian.
- **seed:langchain**, the 3 LangGraph courses.
- **seed:health**, NASM / ECS / Read-Your-Body. **seed:speedway**, ElementaryMBA.
- **seed:faa**, FAA Part 107. **seed:bvc:real**, Better Vice Club. **seed:map**, the maps.

Every seed is idempotent (upserts by slug), so re-running is always safe. On a fresh database, run
**seed:tenants first**, then the content seeds.

## Editing without a seed
Lesson text, glossary, sources, and quick-recall prompts can be edited **in-app** on the
**Curriculum** tab at \`/teach/<courseId>\`, those save straight to the database, no seed needed.

## Learner reports
\`pnpm reports:list\` (or \`/admin/reports\`) shows what learners filed via "Report a problem".`,
  },
  {
    slug: "change-course-instructor",
    title: "Change a course's instructor (fix wrong bylines)",
    category: "Operator",
    keywords: ["instructor", "owner", "byline", "reassign", "can't edit", "cannot edit", "record", "save", "witus-health", "trade-faculty", "permission", "403"],
    body: `# Change a course's instructor

Every course has one **instructor** (its owner). Only that instructor, plus brand admins and the
platform owner, can edit, record, or save it. Some courses were seeded under placeholder instructors
(\`@witus-health\`, \`@trade-faculty\`, or a \`bam\` seed id) that may not match the account you log in
with, which is why they can feel read-only or "won't save".

## Fix one course (from the UI)
As an **owner or brand admin**, open the course at \`/teach/<courseId>\` → **Course settings** →
the **Instructor** dropdown → pick the right person → **Save settings**.

- The course moves to that instructor's dashboard and its public URL changes to
  \`/their-username/…\`. You keep access as an admin.
- If you don't see the course under **Your courses**, admins see **every** course on the brand in
  \`/teach\` (with an \`instructor:\` byline), so it's reachable there.
- "That instructor already has a course at this URL" → two courses would share a slug; rename this
  course's slug first.

## Fix them all at once (bulk)
To make your account the instructor on **every** Learn.WitUS course, run the reassign script
(dry-run first, then \`--apply\`):

\`\`\`
pnpm reassign:instructor
pnpm reassign:instructor --apply
\`\`\`

See **user-task 42** in the repo for prod details.`,
  },
  {
    slug: "api-keys-and-embedding",
    title: "Embed your courses in another app (API keys)",
    category: "Operator",
    keywords: ["api", "api key", "embed", "wanderlearn", "integration", "external", "bearer", "token", "iframe", "snippet", "widget", "wordpress"],
    body: `# Embed your courses in another app

If another app's backend wants to read your school's **published** courses (title, description,
category, and lesson list), for example to show them inside its own catalog UI, it can, using a
per-school **API key**. This does not require the other app's users to sign in to Learn.WitUS.

## Create a key
As an **owner or brand admin**, go to **/admin/api-keys** → **Create a key**, give it a name that
says who/what it's for (e.g. "WanderLearn embed"), and click **Create key**. The full key is shown
**once**, right after creation, copy it into the other app's server-side secret storage
immediately. After you leave the page, only a short prefix is shown for identification; the full
key can't be retrieved again.

## What a key can read
- \`GET /api/v1/courses\`, this school's published, public courses.
- \`GET /api/v1/courses/[id]\`, one of those courses plus its published lesson list.

A key only ever sees **your** school's published content, never drafts, never another school's.
Send it as \`Authorization: Bearer <key>\` on every request.

## Revoke a key
If a key is compromised or no longer needed, click **Revoke** next to it on **/admin/api-keys**.
Revoking is immediate and permanent (create a new key if you need to reconnect later).

## The lighter option: paste-anywhere embeds (no key at all)
For a visual embed with no backend integration, use an \`<iframe>\`. **Never put an API key in an
iframe snippet or any client-side HTML**: keys are server-side secrets, and these embeds don't
need one. They only ever show published, public content.

- **Course card (recommended, any site).** Open your course under **/teach** and click **Embed**
  to get a ready-made copy-paste snippet pointing at \`/embed/card/<courseId>\` on your school's
  own domain: a small branded card (title, description, price) linking back to your course page.
  Paste it into any website (WordPress, a co-op site, a blog). A course that isn't vetted yet
  shows its public "Coming soon" face; anything unpublished or non-public shows nothing. Clicks
  from the card back to your course are counted in that course's **Link usage** panel.
- **Course view (for partner apps).** \`/embed/course/<courseId>\` is a chromeless page listing
  the course's published lessons with a "Continue" link out to the full course, the visual
  companion to the API above.`,
  },
  {
    slug: "admin-home-and-brand-settings",
    title: "Your admin home and brand settings",
    category: "Operator",
    keywords: ["admin", "dashboard", "overview", "settings", "flags", "accent", "branding", "paths", "leads", "coming soon"],
    body: `# Your admin home and brand settings

## At a glance (/admin)

The admin landing opens with your school's headline numbers: learners, active enrollments,
courses published (with how many are still unvetted), completions, open problem reports, and
interest and leads. Each number links to the page where you act on it, so "3 open problem
reports" takes you straight to the triage list. The platform owner also sees new curriculum
feedback, media awaiting review, and upcoming live sessions. A tile with an open queue is
outlined in your accent color. The full tool list is right below, and the sidebar still reaches
everything.

## Brand settings (/admin/settings)

Brand admins can change the school themselves, no code change and no support ticket:

- **Name, tagline, accent colors**, with a live preview. Changes apply on the next page load.
- **Gamification dose**: off, light (streaks and mastery), or full (adds XP, levels, badges).
- **AI tutor**: turn the tutor and sentence coach off for this brand.
- **Age gate**: require an age check before entering the site.
- **Coming soon**: show a launch holding page instead of the catalog. While it is on, the
  "notify me" form collects signups even if the lead funnel toggle is off.
- **Commodity Map**: the interactive origins map at /explore (needs seeded map data).
- **Learning paths**: puts /paths in the menu; build the tracks at **Admin → Learning paths**.
- **Lead funnel**: accept "notify me" signups; the list lands at **Admin → Interest & leads**.

Every setting applies only to your school. Settings save through your own domain, so nothing
here can read or change another brand.`,
  },
];

export function helpArticleBySlug(slug: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((a) => a.slug === slug);
}
