// Pure access rule for "chat with the sources", shared by the API route and the course page so they
// can't drift. Stage gating: owner = editors/instructors only (test); invited = + enrolled learners;
// paid = + enrolled learners on a paid course.
export type SourceChatStage = "owner" | "invited" | "paid";

export function sourceChatAllowed(opts: {
  isEditor: boolean;
  isEnrolled: boolean;
  free: boolean;
  stage: SourceChatStage;
}): boolean {
  if (opts.isEditor) return true;
  if (opts.stage === "invited") return opts.isEnrolled;
  if (opts.stage === "paid") return opts.isEnrolled && !opts.free;
  return false;
}
