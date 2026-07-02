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

1. **Create a course** — give it a title and description.
2. **Add lessons** — text, audio, video, slides, quizzes.
3. **Set it up** — category, pricing, visibility.
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

- **Text lessons** — write in the editor; it supports markdown (headings, lists, links, tables).
- **Media lessons** (audio / video / slides) — upload a file or paste a URL (a file, YouTube/Vimeo,
  or Google Slides). Large files upload in chunks automatically.
- **Free preview** — tick this to let non-enrolled learners see the lesson.

Edit a lesson, make your changes, and click **Save lesson**.`,
  },
  {
    slug: "record-audio-in-app",
    title: "Record lesson audio in the app",
    category: "Recording",
    keywords: ["record", "microphone", "audio", "offline", "upload", "cloudinary"],
    body: `# Record lesson audio in the app

Open a course → **Recording script** → the recording checklist. Each lesson has a **🎙 Record audio**
button.

- Recording is **offline-first**: your take is saved on your device immediately and uploads when
  you're back online — nothing is lost if you close the tab or drop your connection.
- Status shows **recording → saved locally → uploading → uploaded ✓** (or *retry* on failure).
- A take **auto-stops** just under the 100 MB limit; record the rest as the next lesson.
- A successful upload attaches the audio to the lesson and ticks it **recorded**.

Uploads need Cloudinary configured and an HTTPS URL (the deployed site).`,
  },
  {
    slug: "recording-scripts-teleprompter",
    title: "Recording scripts & teleprompter",
    category: "Recording",
    keywords: ["script", "teleprompter", "read", "narration", "mark recorded"],
    body: `# Recording scripts & teleprompter

The **Recording script** page turns your lessons into a clean read-aloud script (regenerated from
the current lesson text each visit). Use **Teleprompter** for a full-screen auto-scroll with speed,
text-size, and mirror controls. Tick lessons off as you record them — progress is saved across
sittings.`,
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
paid checkout won't work until the Stripe keys are set — don't publish a paid course until then.
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

- **Draft** (unpublished) — only you and other editors can see it.
- **Private** — owner/instructor only, even hidden from brand admins.
- **On hold** — a course flagged with a hold reason **can't be published** until you clear the hold
  (use this for content that still needs vetting).

Toggle publish per course from **/teach** (click the status pill), or in bulk by selecting several
courses and choosing **Publish / Unpublish**.`,
  },
  {
    slug: "quick-recall",
    title: "Add Quick-recall self-test prompts",
    category: "Teaching",
    keywords: ["recall", "quiz", "self test", "reveal", "active recall", "practice"],
    body: `# Quick-recall prompts

In the lesson editor, add **Quick recall prompts** — question/answer pairs. In the lesson, learners
see click-to-reveal cards and self-grade **"I got it / Missed it"** before the quiz.

Their self-grades roll up into **Recall accuracy** on your course page — your signal for whether it's
sticking in the lesson versus only at quiz time.`,
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
    slug: "learner-feedback-and-reports",
    title: "See learner feedback and problem reports",
    category: "Feedback",
    keywords: ["feedback", "correction", "comment", "question", "bug", "report", "triage", "inbox"],
    body: `# Learner feedback & problem reports

- **Curriculum feedback** (corrections / comments / questions learners leave on lessons) is at
  **/teach → Curriculum feedback**. Each teacher sees their own courses' feedback.
- **Problem reports** (the site-wide "🐞 Report a problem" button: bug / feedback / idea / other)
  are triaged at **Admin → Problem reports**.
- Both can be read from the command line without copy-paste: \`pnpm feedback:list\` and
  \`pnpm reports:list\`. Feedback on the owner's courses also mirrors to the WitUS Inbox.`,
  },
  {
    slug: "sharing-and-cross-promotion",
    title: "Sharing, previews, and cross-promotion",
    category: "Growth",
    keywords: ["share", "social", "og", "preview", "cross promotion", "related tools", "links"],
    body: `# Sharing & cross-promotion

- Every school, course, and lesson page has a **Share** button (native share on mobile; Copy /
  X / LinkedIn / Facebook / Email otherwise). Shared links show a page-relevant preview image.
- **Related WitUS tools** — in Course settings, curate up to 3 sibling apps to show as a small
  labeled card on the course page (WitUS-branded sites only).
- **Link usage** — the course page shows how often outbound links get clicked (counts only).`,
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
host, the message names it — add trusted hosts in \`src/lib/stream-embed.ts\`.

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

- **Rotate questions** — set \`questionsPerAttempt\` to serve a random subset of a larger pool, so a
  learner sees different questions on each retake. Omit it (or set it to the pool size) to show all.
- **Shuffle options** — set \`shuffleOptions: true\` to randomize each question's option order per
  attempt. Scoring is by identity, so rotation and shuffling never affect correctness.
- **Add an image** — a question can carry \`imageUrl\` plus a REQUIRED \`imageAlt\` (screen-reader
  description); it renders above the prompt. Seeding fails if an image has no alt text.`,
  },
  {
    slug: "images-and-quick-recall",
    title: "Lesson images (with alt text) and Quick recall",
    category: "Teaching",
    keywords: ["image", "alt", "accessibility", "screen reader", "recall", "retrieval", "previous lesson"],
    body: `# Images & Quick recall

## Images in lessons
In the lesson editor's toolbar, use **Image**. It asks for a short description (alt text) first —
this is required for screen-reader users — then uploads the image and inserts it. Images are
responsive and lazy-loaded.

## Quick recall
Add **Quick recall** prompts (question/answer pairs) to a lesson. They render at the START of the
lesson as click-to-reveal cards, so learners test themselves on the PREVIOUS lesson before the new
material. Self-grades ("I got it" / "Missed it") feed the **Recall accuracy** panel on your course
dashboard, so you can compare in-lesson recall against quiz results.`,
  },
  {
    slug: "recording-long-lessons",
    title: "Recording long lessons (auto-split parts)",
    category: "Recording",
    keywords: ["record", "audio", "long", "split", "parts", "upload", "cap", "size", "cloudinary"],
    body: `# Long recordings

The in-app recorder saves offline-first and uploads when you're online. If a take runs past the
upload size cap, it now **rolls into a new part automatically** instead of cutting off — a long
lecture becomes several ordered parts that upload in order and play back in sequence for the
learner (with Prev / Next). Nothing is lost if the tab closes mid-record; parts wait in the browser
and drain when you're back online.`,
  },
];

export function helpArticleBySlug(slug: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((a) => a.slug === slug);
}
