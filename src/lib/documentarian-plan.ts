// The Documentarian program plan, as a checklist the owner works through in-app at
// /admin/documentarian. This file is the CANONICAL STRUCTURE (sections + items); the
// per-item done/note state and the free-form comment log live in platform_settings
// (key "documentarian_tracker", see src/db/queries/tracker.ts) so nothing here is a
// database migration. Keep this roughly in sync with plans/future/12-documentarian-program.md.
//
// Client-safe: pure data + types, no "server-only" import — imported by both the client
// tracker component and the server-only query helper.

export interface PlanItem {
  /** Stable id — persisted as a key in the tracker state; never renumber existing ids. */
  id: string;
  label: string;
}

export interface PlanSection {
  key: string;
  title: string;
  blurb?: string;
  items: PlanItem[];
}

export const DOCUMENTARIAN_PLAN: PlanSection[] = [
  {
    key: "core",
    title: "Foundations & Trust core",
    blurb: "Shared, medium-agnostic. Where “trusted” lives: ethics, consent, sourcing, representation.",
    items: [
      { id: "core-syllabus", label: "Draft the Foundations of Trusted Documentation syllabus (modules → lessons + starter course_sources)" },
      { id: "core-build", label: "Build the core course in-app (coming-soon gated)" },
    ],
  },
  {
    key: "archives",
    title: "Archives & Records (standalone)",
    blurb: "Its own course, taken early, the backbone of trust: capture + preserve primary material properly.",
    items: [
      { id: "arch-outline", label: "Outline the Archives & Records course (metadata, storage, provenance)" },
      { id: "arch-build", label: "Build Archives & Records in-app" },
    ],
  },
  {
    key: "ladder",
    title: "Medium ladder (lightest → richest)",
    blurb: "Each teaches the same Ghana material in its native form so the differences are felt.",
    items: [
      { id: "words-outline", label: "Outline Words & Images (written + photo-essay)" },
      { id: "words-build", label: "Build Words & Images" },
      { id: "sound-outline", label: "Outline Sound (audio / podcast)" },
      { id: "sound-build", label: "Build Sound" },
      { id: "motion-outline", label: "Outline Motion (documentary film / video)" },
      { id: "motion-build", label: "Build Motion" },
    ],
  },
  {
    key: "specializations",
    title: "Specializations (medium × subject)",
    blurb: "The granular layer: pair a medium with a subject. Subjects: People / Events / Institutions / Travel-place.",
    items: [
      { id: "spec-matrix", label: "Finalize the medium × subject matrix leaves" },
      { id: "spec-cyoa", label: "Wire specializations into the CYOA tree" },
    ],
  },
  {
    key: "credential",
    title: "Gated credential",
    blurb: "A real credential = core + one medium + one subject; surfaced on the learner profile.",
    items: [
      { id: "cred-model", label: "Design the gated credential (core + medium + subject)" },
      { id: "cred-build", label: "Implement the credential + surface it on the learner profile" },
    ],
  },
  {
    key: "ghana",
    title: "Ghana capture ⏳ (time-sensitive, the trip won’t repeat)",
    blurb: "Bank raw material NOW for the later courses, even before they’re built.",
    items: [
      { id: "ghana-notes", label: "Field notes + photo sequences (what / where / who / why it matters)" },
      { id: "ghana-audio", label: "Ambient sound + 2-3 consented interviews (audio, phone quality is fine)" },
      { id: "ghana-video", label: "Steady b-roll per scene + one on-camera interview" },
      { id: "ghana-archive", label: "Originals saved + metadata log (date / place / who / consent) per file" },
      { id: "ghana-consent", label: "Recorded or written consent from anyone identifiable" },
      { id: "ghana-capstone", label: "Assemble the “one story, four ways” capstone" },
    ],
  },
];

/** Every valid item id — used server-side to reject unknown keys when persisting. */
export const PLAN_ITEM_IDS: Set<string> = new Set(
  DOCUMENTARIAN_PLAN.flatMap((s) => s.items.map((i) => i.id)),
);

// ---- Tracker state shape (persisted in platform_settings; client-safe types) ----

export interface TrackerItem {
  done: boolean;
  note: string;
}

export interface TrackerComment {
  /** ISO timestamp (stamped client-side when the comment is added). */
  at: string;
  text: string;
}

export interface TrackerState {
  items: Record<string, TrackerItem>;
  comments: TrackerComment[];
  /** When the tracker row was last written (server-owned), ISO or null. */
  updatedAt: string | null;
}
