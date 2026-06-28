// Pure prerequisite logic (no DB) so it can be unit-tested. An override clears all
// required prereqs; otherwise the unmet set is the required ids the learner hasn't
// completed.
export function unmetRequired(
  requiredPrereqIds: string[],
  completedCourseIds: Set<string>,
  hasOverride: boolean,
): string[] {
  if (hasOverride) return [];
  return requiredPrereqIds.filter((id) => !completedCourseIds.has(id));
}
