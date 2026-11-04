// Pure access rule for the course chat (the one tool that replaced "Ask the course tutor" and "Chat with the
// sources" on 2026-11-03), shared by the API route and the course page so they can't drift.
//
// OWNER-ONLY UNTIL BAM TURNS IT ON (BAM, 2026-11-04: "chat should only be available for me until I turn it on
// for other users"). Two levels, both owned by the platform owner on /admin/source-chat ("Course chat"):
//
//   1. The platform-wide switch "Course chat for everyone else" (platform_settings, NULL tenant, key
//      COURSE_CHAT_OPEN_KEY; missing = off). While it is OFF, the platform owner is the only person who gets the
//      chat on any course, whatever a course's stage says. Instructors and brand admins included.
//   2. While it is ON, each course's stage decides:
//        owner   = the platform owner only (the default for a course with nothing saved, since 2026-11-04);
//        invited = + the course's editors (its instructor, the school's brand admins) + enrolled learners;
//        paid    = + editors + enrolled learners on a paid course (the old tutor's audience).
//      Learners also need the brand's AI switch (Admin, Brand settings, "AI tutor"); editors don't.
//
// The platform owner always has it, so the owner can test any course before anyone else sees it.
export type SourceChatStage = "owner" | "invited" | "paid";

export function courseChatAllowed(opts: {
  /** The platform owner (user_profiles.is_platform_owner). */
  isOwner: boolean;
  /** The course's instructor or a brand admin of its school (canEditCourse). */
  isEditor: boolean;
  isEnrolled: boolean;
  free: boolean;
  stage: SourceChatStage;
  /** The platform-wide "Course chat for everyone else" switch; false (the default) = owner only. */
  openToOthers: boolean;
  /** The brand's AI switch (tenant flag aiTutor; anything but an explicit false is on). */
  brandAiOn?: boolean;
}): boolean {
  if (opts.isOwner) return true;
  if (!opts.openToOthers) return false;
  if (opts.stage === "owner") return false;
  if (opts.isEditor) return true;
  if (opts.brandAiOn === false) return false;
  if (opts.stage === "invited") return opts.isEnrolled;
  if (opts.stage === "paid") return opts.isEnrolled && !opts.free;
  return false;
}
