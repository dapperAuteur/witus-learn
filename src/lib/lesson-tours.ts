import "server-only";
import { getScopedDb } from "@/db/scoped";
import { isEmptyTourSlot, liveToursByLesson, type TourMedia } from "@/lib/field-log-tour";

export type LiveLessonTour = { media: TourMedia; credit: string };

/**
 * The field tours shown in one course right now, keyed by lesson id (plans/93 section 2). Each is
 * re-checked against its capture and leg on this read (liveToursByLesson), so a consent changed to
 * "declined" or a deleted capture is gone from the next page view.
 *
 * Costs nothing for a course with no empty tour slot, which is almost every course. And like the
 * cross-links read on the lesson page, it degrades to "no tours" on error: a learner's lesson must
 * not 500 because this optional table is missing (merged before `pnpm db:migrate:prod` ran).
 */
export async function liveToursForCourse(
  courseId: string,
  lessons: readonly { lessonType: string; contentUrl: string | null }[],
): Promise<Map<string, LiveLessonTour>> {
  if (!lessons.some((l) => isEmptyTourSlot(l, false))) return new Map();
  try {
    const sdb = await getScopedDb();
    return liveToursByLesson(await sdb.listCourseTourEmbeds(courseId));
  } catch (err) {
    console.error("tours: could not load this course's field tours", err);
    return new Map();
  }
}
