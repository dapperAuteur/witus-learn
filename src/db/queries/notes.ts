import "server-only";
import { and, desc, eq, exists, ilike, inArray, ne, not, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cohortMembers,
  cohorts,
  lessonNoteRecipients,
  lessonNoteShares,
  lessonNotes,
  lessons,
  users,
  type LessonNote,
} from "@/db/schema";

// Notes and inline annotations (plans/61). Every read and write is tenant-scoped; the visibility
// rules here are the entire security surface of the feature, so they live in one file:
//
//   - The author sees their own notes, always.
//   - A teacher sees a student's PERSONAL note only through a lesson_note_shares row (explicit,
//     per-note, revocable — the row is the consent).
//   - A student sees a TEACHER note when they are a member of its cohort AND the note is either
//     un-narrowed (no recipient rows) or narrowed to include them.
//   - A guardian's view of teacher-sent notes is gated by isGuardianOf in the route, never here
//     by accident: guardians NEVER see a student's personal notes through any query in this file.

/** A note plus the display name of its author (for teacher notes and shared notes). */
export interface NoteWithAuthor extends LessonNote {
  authorName: string | null;
}

const authorName = users.name;

// ── The author's own notes ───────────────────────────────────────────────────

/** The author's own notes on one lesson, oldest first (reading order). */
export async function listOwnLessonNotes(
  tenantId: string,
  authorId: string,
  lessonId: string,
): Promise<LessonNote[]> {
  return db
    .select()
    .from(lessonNotes)
    .where(
      and(
        eq(lessonNotes.tenantId, tenantId),
        eq(lessonNotes.authorId, authorId),
        eq(lessonNotes.lessonId, lessonId),
        eq(lessonNotes.kind, "personal"),
      ),
    )
    .orderBy(lessonNotes.createdAt);
}

/** The author's own notes across a whole course (export, search), newest first. */
export async function listOwnCourseNotes(
  tenantId: string,
  authorId: string,
  courseId: string,
): Promise<LessonNote[]> {
  return db
    .select()
    .from(lessonNotes)
    .where(
      and(
        eq(lessonNotes.tenantId, tenantId),
        eq(lessonNotes.authorId, authorId),
        eq(lessonNotes.courseId, courseId),
        eq(lessonNotes.kind, "personal"),
      ),
    )
    .orderBy(desc(lessonNotes.createdAt));
}

export interface CreateNoteInput {
  tenantId: string;
  courseId: string;
  lessonId: string;
  authorId: string;
  body: string;
  quote?: string | null;
  contextPrefix?: string | null;
  contextSuffix?: string | null;
  blockId?: string | null;
}

/** Create a personal note (lesson-level, or anchored when quote/context/blockId are set). */
export async function createNote(input: CreateNoteInput): Promise<LessonNote> {
  const [row] = await db
    .insert(lessonNotes)
    .values({ ...input, kind: "personal" })
    .returning();
  return row;
}

/** Edit the body of the author's OWN note. Returns the updated row, or null when the id is not
 *  theirs (or not this tenant's) — the route 404s, never reveals whose it was. */
export async function updateOwnNote(
  tenantId: string,
  authorId: string,
  noteId: string,
  body: string,
): Promise<LessonNote | null> {
  const [row] = await db
    .update(lessonNotes)
    .set({ body, updatedAt: new Date() })
    .where(
      and(
        eq(lessonNotes.id, noteId),
        eq(lessonNotes.tenantId, tenantId),
        eq(lessonNotes.authorId, authorId),
      ),
    )
    .returning();
  return row ?? null;
}

/** Delete the author's OWN note (personal or teacher-sent — a teacher may withdraw a sent note;
 *  shares and recipient rows cascade). True when a row was deleted. */
export async function deleteOwnNote(
  tenantId: string,
  authorId: string,
  noteId: string,
): Promise<boolean> {
  const rows = await db
    .delete(lessonNotes)
    .where(
      and(
        eq(lessonNotes.id, noteId),
        eq(lessonNotes.tenantId, tenantId),
        eq(lessonNotes.authorId, authorId),
      ),
    )
    .returning({ id: lessonNotes.id });
  return rows.length > 0;
}

// ── Student → teacher sharing (per-note, explicit, revocable) ────────────────

/** The teachers a learner can share with: owners of cohorts the learner belongs to, in this
 *  tenant. (No cohort membership = no share targets; the UI explains rather than hiding.) */
export async function listTeachersForLearner(
  tenantId: string,
  learnerId: string,
): Promise<{ id: string; name: string | null }[]> {
  const rows = await db
    .selectDistinct({ id: cohorts.ownerId, name: users.name })
    .from(cohortMembers)
    .innerJoin(cohorts, eq(cohortMembers.cohortId, cohorts.id))
    .innerJoin(users, eq(users.id, cohorts.ownerId))
    .where(
      and(
        eq(cohortMembers.tenantId, tenantId),
        eq(cohortMembers.userId, learnerId),
        // Sharing with yourself is a no-op in the model; keep the list honest.
        ne(cohorts.ownerId, learnerId),
      ),
    );
  return rows;
}

/** Share one of the author's own PERSONAL notes with a teacher. The route must have verified the
 *  teacher relationship via listTeachersForLearner. False when the note is not the author's. */
export async function shareNoteWithTeacher(
  tenantId: string,
  authorId: string,
  noteId: string,
  teacherUserId: string,
): Promise<boolean> {
  const note = await db
    .select({ id: lessonNotes.id })
    .from(lessonNotes)
    .where(
      and(
        eq(lessonNotes.id, noteId),
        eq(lessonNotes.tenantId, tenantId),
        eq(lessonNotes.authorId, authorId),
        eq(lessonNotes.kind, "personal"),
      ),
    )
    .limit(1);
  if (note.length === 0) return false;
  await db
    .insert(lessonNoteShares)
    .values({ tenantId, noteId, teacherUserId })
    .onConflictDoNothing();
  return true;
}

/** Withdraw a share. True when a row was removed. */
export async function unshareNote(
  tenantId: string,
  authorId: string,
  noteId: string,
  teacherUserId: string,
): Promise<boolean> {
  // Ownership check rides in the subquery: only the author's own note's shares are deletable.
  const rows = await db
    .delete(lessonNoteShares)
    .where(
      and(
        eq(lessonNoteShares.tenantId, tenantId),
        eq(lessonNoteShares.noteId, noteId),
        eq(lessonNoteShares.teacherUserId, teacherUserId),
        exists(
          db
            .select({ one: sql`1` })
            .from(lessonNotes)
            .where(
              and(
                eq(lessonNotes.id, lessonNoteShares.noteId),
                eq(lessonNotes.tenantId, tenantId),
                eq(lessonNotes.authorId, authorId),
              ),
            ),
        ),
      ),
    )
    .returning({ id: lessonNoteShares.id });
  return rows.length > 0;
}

/** Teacher user ids a note is shared with (for the author's own note list UI). */
export async function listNoteShares(
  tenantId: string,
  authorId: string,
  noteIds: string[],
): Promise<{ noteId: string; teacherUserId: string; teacherName: string | null }[]> {
  if (noteIds.length === 0) return [];
  return db
    .select({
      noteId: lessonNoteShares.noteId,
      teacherUserId: lessonNoteShares.teacherUserId,
      teacherName: users.name,
    })
    .from(lessonNoteShares)
    .innerJoin(lessonNotes, eq(lessonNotes.id, lessonNoteShares.noteId))
    .innerJoin(users, eq(users.id, lessonNoteShares.teacherUserId))
    .where(
      and(
        eq(lessonNoteShares.tenantId, tenantId),
        inArray(lessonNoteShares.noteId, noteIds),
        eq(lessonNotes.authorId, authorId),
      ),
    );
}

/** Notes students have shared WITH this teacher, on one lesson. */
export async function listNotesSharedWithTeacher(
  tenantId: string,
  teacherUserId: string,
  lessonId: string,
): Promise<NoteWithAuthor[]> {
  const rows = await db
    .select({ note: lessonNotes, authorName })
    .from(lessonNoteShares)
    .innerJoin(lessonNotes, eq(lessonNotes.id, lessonNoteShares.noteId))
    .innerJoin(users, eq(users.id, lessonNotes.authorId))
    .where(
      and(
        eq(lessonNoteShares.tenantId, tenantId),
        eq(lessonNoteShares.teacherUserId, teacherUserId),
        eq(lessonNotes.lessonId, lessonId),
      ),
    )
    .orderBy(lessonNotes.createdAt);
  return rows.map((r) => ({ ...r.note, authorName: r.authorName }));
}

// ── Teacher → cohort notes ───────────────────────────────────────────────────

export interface CreateTeacherNoteInput extends Omit<CreateNoteInput, "authorId"> {
  authorId: string;
  cohortId: string;
  /** Narrow to these cohort members; empty/omitted = the whole cohort. */
  recipientIds?: string[];
}

/** Create a teacher-sent note. The route must have verified the author OWNS the cohort (in this
 *  tenant) and that every recipient is a member of it. */
export async function createTeacherNote(input: CreateTeacherNoteInput): Promise<LessonNote> {
  const { recipientIds, ...note } = input;
  const [row] = await db
    .insert(lessonNotes)
    .values({ ...note, kind: "teacher" })
    .returning();
  if (recipientIds && recipientIds.length > 0) {
    await db.insert(lessonNoteRecipients).values(
      recipientIds.map((userId) => ({ tenantId: input.tenantId, noteId: row.id, userId })),
    );
  }
  return row;
}

/** Teacher notes VISIBLE TO one student on one lesson: sent to a cohort they belong to, and
 *  either un-narrowed or narrowed to include them. */
export async function listTeacherNotesForStudent(
  tenantId: string,
  studentUserId: string,
  lessonId: string,
): Promise<NoteWithAuthor[]> {
  const isMember = exists(
    db
      .select({ one: sql`1` })
      .from(cohortMembers)
      .where(
        and(
          eq(cohortMembers.cohortId, lessonNotes.cohortId),
          eq(cohortMembers.userId, studentUserId),
          eq(cohortMembers.tenantId, tenantId),
        ),
      ),
  );
  const hasNoRecipients = not(
    exists(
      db
        .select({ one: sql`1` })
        .from(lessonNoteRecipients)
        .where(eq(lessonNoteRecipients.noteId, lessonNotes.id)),
    ),
  );
  const isRecipient = exists(
    db
      .select({ one: sql`1` })
      .from(lessonNoteRecipients)
      .where(
        and(
          eq(lessonNoteRecipients.noteId, lessonNotes.id),
          eq(lessonNoteRecipients.userId, studentUserId),
        ),
      ),
  );
  const rows = await db
    .select({ note: lessonNotes, authorName })
    .from(lessonNotes)
    .innerJoin(users, eq(users.id, lessonNotes.authorId))
    .where(
      and(
        eq(lessonNotes.tenantId, tenantId),
        eq(lessonNotes.lessonId, lessonId),
        eq(lessonNotes.kind, "teacher"),
        isMember,
        or(hasNoRecipients, isRecipient),
      ),
    )
    .orderBy(lessonNotes.createdAt);
  return rows.map((r) => ({ ...r.note, authorName: r.authorName }));
}

/** The teacher's own SENT notes on one lesson, with recipient narrowing for display. */
export async function listSentTeacherNotes(
  tenantId: string,
  teacherUserId: string,
  lessonId: string,
): Promise<(LessonNote & { cohortName: string | null; recipientCount: number })[]> {
  const rows = await db
    .select({
      note: lessonNotes,
      cohortName: cohorts.name,
      recipientCount: sql<number>`(select count(*) from ${lessonNoteRecipients} r where r.note_id = ${lessonNotes.id})::int`,
    })
    .from(lessonNotes)
    .leftJoin(cohorts, eq(cohorts.id, lessonNotes.cohortId))
    .where(
      and(
        eq(lessonNotes.tenantId, tenantId),
        eq(lessonNotes.authorId, teacherUserId),
        eq(lessonNotes.lessonId, lessonId),
        eq(lessonNotes.kind, "teacher"),
      ),
    )
    .orderBy(lessonNotes.createdAt);
  return rows.map((r) => ({ ...r.note, cohortName: r.cohortName, recipientCount: r.recipientCount }));
}

/** Teacher-sent notes visible to one student across the tenant (the guardian view; the route
 *  gates with isGuardianOf first). Includes lesson titles so the report can link. */
export async function listTeacherNotesSentToStudent(
  tenantId: string,
  studentUserId: string,
): Promise<(NoteWithAuthor & { lessonTitle: string | null })[]> {
  const isMember = exists(
    db
      .select({ one: sql`1` })
      .from(cohortMembers)
      .where(
        and(
          eq(cohortMembers.cohortId, lessonNotes.cohortId),
          eq(cohortMembers.userId, studentUserId),
          eq(cohortMembers.tenantId, tenantId),
        ),
      ),
  );
  const hasNoRecipients = not(
    exists(
      db
        .select({ one: sql`1` })
        .from(lessonNoteRecipients)
        .where(eq(lessonNoteRecipients.noteId, lessonNotes.id)),
    ),
  );
  const isRecipient = exists(
    db
      .select({ one: sql`1` })
      .from(lessonNoteRecipients)
      .where(
        and(
          eq(lessonNoteRecipients.noteId, lessonNotes.id),
          eq(lessonNoteRecipients.userId, studentUserId),
        ),
      ),
  );
  const rows = await db
    .select({ note: lessonNotes, authorName, lessonTitle: lessons.title })
    .from(lessonNotes)
    .innerJoin(users, eq(users.id, lessonNotes.authorId))
    .leftJoin(lessons, eq(lessons.id, lessonNotes.lessonId))
    .where(
      and(
        eq(lessonNotes.tenantId, tenantId),
        eq(lessonNotes.kind, "teacher"),
        isMember,
        or(hasNoRecipients, isRecipient),
      ),
    )
    .orderBy(desc(lessonNotes.createdAt));
  return rows.map((r) => ({ ...r.note, authorName: r.authorName, lessonTitle: r.lessonTitle }));
}

// ── Note search (plans/61 §4) ────────────────────────────────────────────────

/** Search the viewer's OWN notes in a course (body + quoted text), newest first. Teacher-sent
 *  notes visible to the viewer match too. Scope rules are the whole security surface: nothing
 *  outside (own ∪ visible-to-me) can ever match, and everything stays inside the tenant. */
export async function searchNotesInCourse(
  tenantId: string,
  viewerId: string,
  courseId: string,
  query: string,
): Promise<(LessonNote & { lessonTitle: string | null; lessonSlug: string | null })[]> {
  const q = `%${query.replaceAll("%", "\\%").replaceAll("_", "\\_")}%`;
  const textMatches = or(ilike(lessonNotes.body, q), ilike(lessonNotes.quote, q));
  const mine = and(eq(lessonNotes.authorId, viewerId), eq(lessonNotes.kind, "personal"));
  const isMember = exists(
    db
      .select({ one: sql`1` })
      .from(cohortMembers)
      .where(
        and(
          eq(cohortMembers.cohortId, lessonNotes.cohortId),
          eq(cohortMembers.userId, viewerId),
          eq(cohortMembers.tenantId, tenantId),
        ),
      ),
  );
  const hasNoRecipients = not(
    exists(
      db
        .select({ one: sql`1` })
        .from(lessonNoteRecipients)
        .where(eq(lessonNoteRecipients.noteId, lessonNotes.id)),
    ),
  );
  const isRecipient = exists(
    db
      .select({ one: sql`1` })
      .from(lessonNoteRecipients)
      .where(
        and(
          eq(lessonNoteRecipients.noteId, lessonNotes.id),
          eq(lessonNoteRecipients.userId, viewerId),
        ),
      ),
  );
  const sentToMe = and(
    eq(lessonNotes.kind, "teacher"),
    isMember,
    or(hasNoRecipients, isRecipient),
  );
  const rows = await db
    .select({ note: lessonNotes, lessonTitle: lessons.title, lessonSlug: lessons.slug })
    .from(lessonNotes)
    .leftJoin(lessons, eq(lessons.id, lessonNotes.lessonId))
    .where(
      and(
        eq(lessonNotes.tenantId, tenantId),
        eq(lessonNotes.courseId, courseId),
        textMatches,
        or(mine, sentToMe),
      ),
    )
    .orderBy(desc(lessonNotes.createdAt))
    .limit(50);
  return rows.map((r) => ({ ...r.note, lessonTitle: r.lessonTitle, lessonSlug: r.lessonSlug }));
}

// ── Anchoring support ────────────────────────────────────────────────────────

/** Body text of one lesson, tenant-scoped, for computing whether quotes still resolve. */
export async function getLessonBodyText(
  tenantId: string,
  lessonId: string,
): Promise<string | null> {
  const rows = await db
    .select({ text: lessons.textContent })
    .from(lessons)
    .where(and(eq(lessons.id, lessonId), eq(lessons.tenantId, tenantId)))
    .limit(1);
  return rows[0]?.text ?? null;
}
