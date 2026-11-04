// Pure access rule for the course chat (the one tool that replaced "Ask the course tutor" and "Chat with the
// sources" on 2026-11-03), shared by the API route and the course page so they can't drift.
//
// Editors and instructors of the course: always (they test it). Everyone else needs the brand's AI switch on
// (Admin, Brand settings, "AI tutor") AND the course's stage from /admin/source-chat:
//   owner   = editors only (test);
//   invited = + enrolled learners;
//   paid    = + enrolled learners on a paid course (the old tutor's audience, and the default since 2026-11-03).
export type SourceChatStage = "owner" | "invited" | "paid";

export function courseChatAllowed(opts: {
  isEditor: boolean;
  isEnrolled: boolean;
  free: boolean;
  stage: SourceChatStage;
  /** The brand's AI switch (tenant flag aiTutor; anything but an explicit false is on). */
  brandAiOn?: boolean;
}): boolean {
  if (opts.isEditor) return true;
  if (opts.brandAiOn === false) return false;
  if (opts.stage === "invited") return opts.isEnrolled;
  if (opts.stage === "paid") return opts.isEnrolled && !opts.free;
  return false;
}
