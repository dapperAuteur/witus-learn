import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Notes isolation (DB-backed). The visibility rules in src/db/queries/notes.ts are the entire
// security surface of the feature (plans/61 §4): every read here must stay inside (own ∪
// explicitly-shared ∪ cohort-sent) AND inside the tenant. Requires the seeded BVC + Acme tenants
// (pnpm seed:tenants && pnpm seed:bvc); skipped offline like the other .db suites.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("lesson notes are tenant- and author-scoped", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  let courseId = "";
  let lessonId = "";
  const authorId = `iso-note-author-${stamp}`;
  const teacherId = `iso-note-teacher-${stamp}`;
  let noteId = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses, lessons, users } = await import("@/db/schema");
    const { and, eq } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    const course = await db
      .select()
      .from(courses)
      .where(and(eq(courses.tenantId, bvcId), eq(courses.isPublished, true)))
      .limit(1);
    courseId = course[0]!.id;
    const lesson = await db.select().from(lessons).where(eq(lessons.courseId, courseId)).limit(1);
    lessonId = lesson[0]!.id;

    await db.insert(users).values([
      { id: authorId, email: `${authorId}@isolation.test`, name: "Iso Author" },
      { id: teacherId, email: `${teacherId}@isolation.test`, name: "Iso Teacher" },
    ]);

    const { createNote } = await import("@/db/queries/notes");
    const note = await createNote({
      tenantId: bvcId,
      courseId,
      lessonId,
      authorId,
      body: "isolation test note",
      quote: "a quoted passage",
      blockId: "b12345678",
    });
    noteId = note.id;
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { users } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    // Deleting the users cascades their notes, shares, and recipient rows.
    await db.delete(users).where(inArray(users.id, [authorId, teacherId]));
  });

  it("lists the author's note in its own tenant", async () => {
    const { listOwnLessonNotes } = await import("@/db/queries/notes");
    const rows = await listOwnLessonNotes(bvcId, authorId, lessonId);
    expect(rows.map((r) => r.id)).toContain(noteId);
  });

  it("returns nothing for the same author + lesson under another tenant", async () => {
    const { listOwnLessonNotes } = await import("@/db/queries/notes");
    const rows = await listOwnLessonNotes(acmeId, authorId, lessonId);
    expect(rows).toHaveLength(0);
  });

  it("never shows a personal note to a teacher without an explicit share row", async () => {
    const { listNotesSharedWithTeacher } = await import("@/db/queries/notes");
    const rows = await listNotesSharedWithTeacher(bvcId, teacherId, lessonId);
    expect(rows.map((r) => r.id)).not.toContain(noteId);
  });

  it("shows the note to the teacher after a share, and hides it again after unshare", async () => {
    const { listNotesSharedWithTeacher, shareNoteWithTeacher, unshareNote } = await import(
      "@/db/queries/notes"
    );
    expect(await shareNoteWithTeacher(bvcId, authorId, noteId, teacherId)).toBe(true);
    let rows = await listNotesSharedWithTeacher(bvcId, teacherId, lessonId);
    expect(rows.map((r) => r.id)).toContain(noteId);
    // The share is tenant-scoped too: the same teacher under Acme sees nothing.
    expect(await listNotesSharedWithTeacher(acmeId, teacherId, lessonId)).toHaveLength(0);
    expect(await unshareNote(bvcId, authorId, noteId, teacherId)).toBe(true);
    rows = await listNotesSharedWithTeacher(bvcId, teacherId, lessonId);
    expect(rows.map((r) => r.id)).not.toContain(noteId);
  });

  it("refuses to share someone else's note", async () => {
    const { shareNoteWithTeacher } = await import("@/db/queries/notes");
    expect(await shareNoteWithTeacher(bvcId, teacherId, noteId, teacherId)).toBe(false);
  });

  it("refuses cross-tenant and cross-author updates and deletes", async () => {
    const { deleteOwnNote, updateOwnNote } = await import("@/db/queries/notes");
    expect(await updateOwnNote(acmeId, authorId, noteId, "changed")).toBeNull();
    expect(await updateOwnNote(bvcId, teacherId, noteId, "changed")).toBeNull();
    expect(await deleteOwnNote(acmeId, authorId, noteId)).toBe(false);
    expect(await deleteOwnNote(bvcId, teacherId, noteId)).toBe(false);
  });

  it("scopes teacher notes to cohort membership, honoring recipient narrowing", async () => {
    const { db } = await import("@/db/client");
    const { cohortMembers, cohorts, users } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    const { createTeacherNote, listTeacherNotesForStudent } = await import("@/db/queries/notes");

    const outsiderId = `iso-note-outsider-${stamp}`;
    await db.insert(users).values({ id: outsiderId, email: `${outsiderId}@isolation.test`, name: "Iso Outsider" });
    const [cohort] = await db
      .insert(cohorts)
      .values({ tenantId: bvcId, ownerId: teacherId, name: `iso-notes-cohort-${stamp}` })
      .returning();
    try {
      await db.insert(cohortMembers).values([
        { tenantId: bvcId, cohortId: cohort.id, userId: authorId },
        { tenantId: bvcId, cohortId: cohort.id, userId: outsiderId },
      ]);

      // Un-narrowed: every member sees it; a non-member (the teacher's other tenant view) does not.
      const broad = await createTeacherNote({
        tenantId: bvcId,
        courseId,
        lessonId,
        authorId: teacherId,
        cohortId: cohort.id,
        body: "for the whole class",
      });
      // Narrowed to the outsider only: the author-member must NOT see it.
      const narrowed = await createTeacherNote({
        tenantId: bvcId,
        courseId,
        lessonId,
        authorId: teacherId,
        cohortId: cohort.id,
        body: "for one student",
        recipientIds: [outsiderId],
      });

      const forAuthor = (await listTeacherNotesForStudent(bvcId, authorId, lessonId)).map((n) => n.id);
      expect(forAuthor).toContain(broad.id);
      expect(forAuthor).not.toContain(narrowed.id);

      const forOutsider = (await listTeacherNotesForStudent(bvcId, outsiderId, lessonId)).map((n) => n.id);
      expect(forOutsider).toContain(broad.id);
      expect(forOutsider).toContain(narrowed.id);

      // Cross-tenant: the same student under Acme sees nothing.
      expect(await listTeacherNotesForStudent(acmeId, authorId, lessonId)).toHaveLength(0);
    } finally {
      await db.delete(cohorts).where(eq(cohorts.id, cohort.id));
      await db.delete(users).where(eq(users.id, outsiderId));
    }
  });

  it("searches only the viewer's own notes, inside the tenant", async () => {
    const { searchNotesInCourse } = await import("@/db/queries/notes");
    const own = await searchNotesInCourse(bvcId, authorId, courseId, "isolation test");
    expect(own.map((r) => r.id)).toContain(noteId);
    expect(await searchNotesInCourse(bvcId, teacherId, courseId, "isolation test")).toHaveLength(0);
    expect(await searchNotesInCourse(acmeId, authorId, courseId, "isolation test")).toHaveLength(0);
  });
});
