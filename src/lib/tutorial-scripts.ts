// Narration scripts for the in-app video tutorials, one per help article.
//
// Why they live in code next to the help text: a tutorial that drifts from the article it
// illustrates is worse than no tutorial, and the pair only stays honest if changing one puts the
// other in the same diff. `pnpm test` fails when a help article has no entry here (see
// tests/tutorial-scripts.test.ts), so the library can only ever be complete or explicitly
// unwritten, never silently missing.
//
// A script is recorded with the teleprompter (/teach → Recording scripts) or performed against
// the Playwright tutorial harness in e2e/tutorials/. `status` says what a reader is looking at:
//   "ready"       — written, checked against the current UI, safe to record today.
//   "placeholder" — the article is covered by the guard but nobody has written the narration yet.
//                   Steps are empty ON PURPOSE: an invented script is worse than an absent one,
//                   because it reads as approved copy.

export type TutorialScriptStatus = "ready" | "placeholder";

export interface TutorialScriptStep {
  /** What is on screen for this line (a route, or a plain description of the surface). */
  screen: string;
  /** The line to read aloud, verbatim. Written for the ear, not the page. */
  narration: string;
}

export interface TutorialScript {
  /** The help article this illustrates (src/lib/help-articles.ts slug). */
  helpSlug: string;
  title: string;
  status: TutorialScriptStatus;
  /** Rough spoken length, for planning a recording session. */
  estimatedMinutes?: number;
  steps: TutorialScriptStep[];
}

/** An article whose script nobody has written yet. Deliberately empty; see the header. */
const placeholder = (helpSlug: string, title: string): TutorialScript => ({
  helpSlug,
  title,
  status: "placeholder",
  steps: [],
});

export const TUTORIAL_SCRIPTS: TutorialScript[] = [
  {
    helpSlug: "vetting-and-coming-soon",
    title: "Getting a course approved, and approving one",
    status: "ready",
    estimatedMinutes: 4,
    steps: [
      {
        screen: "/teach, the instructor's course list",
        narration:
          "Publishing and approving are two different steps here. Publishing says the course exists. Approving, which we call vetting, says a person reviewed it against its sources. Until it is vetted, visitors see a Coming soon page instead of the lessons.",
      },
      {
        screen: "A course page while it is still unvetted",
        narration:
          "This is what a visitor sees: the title, the description, the standards it meets, and a form to be told when it opens. What they do not get is the lessons. Anyone already enrolled keeps full access, and so do you.",
      },
      {
        screen: "/teach/<course>, the course manager",
        narration:
          "If you are the instructor, your job is to make the course ready to review. Finish the lessons, check that every claim has a source, and use Invite to audit if you want a colleague to read it before it opens. You cannot mark your own course vetted, and that is the point: review means someone else looked.",
      },
      {
        screen: "The Coming soon banner on the course manager",
        narration:
          "When it is ready, tell the platform owner. The banner here shows how many people are already waiting to hear it opened, which is usually the most persuasive thing you can send them.",
      },
      {
        screen: "/admin, the owner's dashboard",
        narration:
          "If you are the platform owner, the Courses published tile tells you how many are waiting for review, and takes you straight to them.",
      },
      {
        screen: "/teach?status=unvetted, the vetting queue",
        narration:
          "This is the queue. Tick the courses you have reviewed and choose Mark vetted. You can do one or fifty at a time. Marking a course vetted a second time does not change the date it was first vetted.",
      },
      {
        screen: "A course page with the owner's vetting call to action",
        narration:
          "You can also do it from the course itself. When you land on an unvetted course, this panel explains who can see what, and the button marks it vetted right there. The moment you do, the lessons open to everyone.",
      },
    ],
  },
  {
    helpSlug: "marketing-tools",
    title: "Announcing and promoting a course",
    status: "ready",
    estimatedMinutes: 5,
    steps: [
      {
        screen: "/admin/marketing",
        narration:
          "Everything you use to bring people to a course lives on one page. What people are waiting for, what has been shared, what has not been announced yet, your promo codes, and your announcement drafts.",
      },
      {
        screen: "The signals row: leads and shares",
        narration:
          "Start at the top. These are people who asked to be told when a course opens, and the courses they are waiting for. That list is the warmest audience you have, and it costs nothing to serve it first.",
      },
      {
        screen: "Course announcements section",
        narration:
          "Below that is every published course that has never been announced. If a course is doing nothing, this is usually why. The batch tool drafts social posts for them; nothing posts by itself, it writes drafts for you to approve.",
      },
      {
        screen: "Compose announcement form",
        narration:
          "For email, pick a course and the form writes a subject and a message from that course's own title, description, and link. Edit it however you like, then copy it, or open it in your mail app.",
      },
      {
        screen: "Compose announcement, the honest note",
        narration:
          "Read that line carefully: nothing is sent from inside the app. We are not going to grow a mailing list quietly in the background. Bulk sending needs consent, unsubscribe handling, and bounce handling done properly, or it puts your sign-in emails at risk, so it waits until those decisions are made.",
      },
      {
        screen: "Promo codes panel",
        narration:
          "Promo codes work the same way they do in Stripe, because they are the same codes. Create one here, share it, and it applies at checkout.",
      },
      {
        screen: "Email campaign drafts panel",
        narration:
          "Drafts you save show up here with the audience count you would be writing to. Think of it as a queue that is ready the day sending is turned on.",
      },
    ],
  },
  // Every other help article is covered by the guard, unwritten until someone records it.
  placeholder("getting-started", "Getting started as a teacher"),
  placeholder("create-a-course", "Creating a course"),
  placeholder("add-and-edit-lessons", "Adding and editing lessons"),
  placeholder("record-audio-in-app", "Recording audio and video in the app"),
  placeholder("recording-scripts-teleprompter", "Recording with the teleprompter"),
  placeholder("set-pricing", "Setting a price"),
  placeholder("categories", "Organising the catalog with categories"),
  placeholder("publish-visibility-holds", "Publishing, visibility, and holds"),
  placeholder("quick-recall", "Quick recall"),
  placeholder("ai-tools-embeddings-audit", "The AI instructor tools"),
  placeholder("live-sessions", "Running a live session"),
  placeholder("cohorts", "Running a private class"),
  placeholder("family", "The family view for parents"),
  placeholder("notes-and-annotations", "Notes, highlights, and class notes"),
  placeholder("in-course-search", "Searching inside a course"),
  placeholder("learner-feedback-and-reports", "Learner feedback and problem reports"),
  placeholder("sharing-and-cross-promotion", "Sharing and cross-promotion"),
  placeholder("streaming-and-multistream", "Streaming and multistream"),
  placeholder("quizzes-rotation-and-images", "Quizzes, rotation, and images"),
  placeholder("images-and-quick-recall", "Images and quick recall"),
  placeholder("recording-long-lessons", "Recording a long lesson"),
  placeholder("keeping-courses-current", "Keeping courses current"),
  placeholder("change-course-instructor", "Changing a course's instructor"),
  placeholder("api-keys-and-embedding", "API keys and embedding"),
  placeholder("admin-home-and-brand-settings", "The admin home and brand settings"),
];

export function tutorialScriptFor(helpSlug: string): TutorialScript | undefined {
  return TUTORIAL_SCRIPTS.find((s) => s.helpSlug === helpSlug);
}

/** Help slugs with no script entry at all: what the guard fails on. */
export function missingTutorialScripts(helpSlugs: readonly string[]): string[] {
  const covered = new Set(TUTORIAL_SCRIPTS.map((s) => s.helpSlug));
  return helpSlugs.filter((slug) => !covered.has(slug));
}
