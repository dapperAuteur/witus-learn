import { asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  courseGlossaryTerms,
  courseSources,
  type CourseGlossaryTerm,
  type CourseSource,
} from "@/db/schema";

export async function listGlossary(courseId: string): Promise<CourseGlossaryTerm[]> {
  return db
    .select()
    .from(courseGlossaryTerms)
    .where(eq(courseGlossaryTerms.courseId, courseId))
    .orderBy(asc(courseGlossaryTerms.sortOrder), asc(courseGlossaryTerms.term));
}

export async function listSources(courseId: string): Promise<CourseSource[]> {
  return db
    .select()
    .from(courseSources)
    .where(eq(courseSources.courseId, courseId))
    .orderBy(asc(courseSources.apa));
}
