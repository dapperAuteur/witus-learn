import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Tours from the field isolation (plans/93 section 2, DB-backed). A tour, a tour slot and the capture
// behind it must stay inside their tenant AND their course: no read or write from another school, no
// tour recorded on one course's lesson under another course, and a capture from another school's
// project never shown. Also pins the two promises the design rests on: the seeder never touches a
// tour, and every read re-checks consent. Requires the seeded BVC + Acme tenants (pnpm seed:tenants &&
// pnpm seed:bvc); skipped offline like the other .db suites.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

const TOUR_BODY =
  "**The 360 tour for this lesson is forthcoming.** It is not here yet.\n\n**Read this lesson now anyway.** Look at the porch.";

describe.skipIf(!HAS_DB)("tours from the field are tenant- and course-scoped", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  let instructorId = "";
  let courseA = "";
  let courseB = "";
  let lessonA = "";
  let lessonB = "";
  let projectBvc = "";
  let projectAcme = "";
  let captureBvc = "";
  let captureAcme = "";
  const link = `https://drive.google.com/file/d/iso-${stamp}/view`;

  const seedFixture = async (slug: string) => {
    const { db } = await import("@/db/client");
    const { seedAuthoredCourse } = await import("../../scripts/lib/seed-authored-course");
    return seedAuthoredCourse(db, {
      tenantId: bvcId,
      instructorId,
      slug,
      course: {
        title: `Isolation tour fixture ${slug}`,
        description: "Throwaway tours-from-the-field fixture.",
        lessons: [{ slug: "now-tour", title: "Now: walk it (360 tour, forthcoming)", lessonType: "virtual_tour", body: TOUR_BODY }],
      },
      visibility: "private",
      publishHoldReason: "Isolation test fixture.",
    });
  };

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { courses, documentationProjects, lessons, projectCaptures, projectLegs, tenants } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    bvcId = (await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1))[0]!.id;
    acmeId = (await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1))[0]!.id;
    instructorId = (await db.select().from(courses).where(eq(courses.tenantId, bvcId)).limit(1))[0]!.instructorId;

    courseA = await seedFixture(`iso-tour-a-${stamp}`);
    courseB = await seedFixture(`iso-tour-b-${stamp}`);
    lessonA = (await db.select().from(lessons).where(eq(lessons.courseId, courseA)).limit(1))[0]!.id;
    lessonB = (await db.select().from(lessons).where(eq(lessons.courseId, courseB)).limit(1))[0]!.id;

    const project = async (tenantId: string) => {
      const [p] = await db
        .insert(documentationProjects)
        .values({ tenantId, userId: instructorId, title: `Iso tour ${stamp}`, templateKey: "site-tour" })
        .returning();
      const [leg] = await db
        .insert(projectLegs)
        .values({ projectId: p.id, name: "The porch", permissionNote: "Public viewpoint, no permission needed" })
        .returning();
      const [cap] = await db
        .insert(projectCaptures)
        .values({ projectId: p.id, legId: leg.id, kind: "photo", consentStatus: "na", storageUrl: link })
        .returning();
      return { projectId: p.id, captureId: cap.id };
    };
    ({ projectId: projectBvc, captureId: captureBvc } = await project(bvcId));
    ({ projectId: projectAcme, captureId: captureAcme } = await project(acmeId));
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { courses, documentationProjects } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    // Deleting the courses cascades their lessons and tours; the projects cascade legs and captures.
    await db.delete(courses).where(inArray(courses.id, [courseA, courseB].filter(Boolean)));
    await db.delete(documentationProjects).where(inArray(documentationProjects.id, [projectBvc, projectAcme].filter(Boolean)));
  });

  const tour = (over: Record<string, unknown> = {}) => ({
    tenantId: bvcId,
    courseId: courseA,
    lessonId: lessonA,
    captureId: captureBvc,
    url: link,
    creditLine: "Photo by Iso at the porch.",
    setBy: instructorId,
    ...over,
  });

  it("lists a course's tour slot to its instructor in its own tenant only", async () => {
    const { listTourSlots } = await import("@/db/queries/tour-embeds");
    const mine = await listTourSlots(bvcId, { userId: instructorId, isOwner: false });
    expect(mine.map((s) => s.lessonId)).toEqual(expect.arrayContaining([lessonA, lessonB]));
    const acme = await listTourSlots(acmeId, { userId: instructorId, isOwner: true });
    expect(acme.some((s) => s.lessonId === lessonA || s.lessonId === lessonB)).toBe(false);
    const stranger = await listTourSlots(bvcId, { userId: `nobody-${stamp}`, isOwner: false });
    expect(stranger.some((s) => s.lessonId === lessonA)).toBe(false);
  });

  it("refuses a tour written under another tenant or another course", async () => {
    const { insertLessonTourEmbed } = await import("@/db/queries/tour-embeds");
    expect(await insertLessonTourEmbed(tour({ tenantId: acmeId }))).toEqual({ ok: false, reason: "not_found" });
    expect(await insertLessonTourEmbed(tour({ courseId: courseB }))).toEqual({ ok: false, reason: "not_found" });
  });

  it("publishes one tour per lesson, readable in its own tenant and course only", async () => {
    const { insertLessonTourEmbed, listCourseTourEmbeds, getLessonTourEmbed } = await import("@/db/queries/tour-embeds");
    const { liveToursByLesson } = await import("@/lib/field-log-tour");
    expect((await insertLessonTourEmbed(tour())).ok).toBe(true);
    expect(await insertLessonTourEmbed(tour())).toEqual({ ok: false, reason: "taken" });
    const rows = await listCourseTourEmbeds(bvcId, courseA);
    expect(rows).toHaveLength(1);
    expect(liveToursByLesson(rows).get(lessonA)?.credit).toBe("Photo by Iso at the porch.");
    expect(await listCourseTourEmbeds(acmeId, courseA)).toHaveLength(0);
    expect(await listCourseTourEmbeds(bvcId, courseB)).toHaveLength(0);
    expect(await getLessonTourEmbed(acmeId, lessonA)).toBeNull();
  });

  it("re-checks consent on every read: declined takes the tour off without touching the tour row", async () => {
    const { db } = await import("@/db/client");
    const { projectCaptures } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    const { listCourseTourEmbeds } = await import("@/db/queries/tour-embeds");
    const { liveToursByLesson } = await import("@/lib/field-log-tour");
    await db.update(projectCaptures).set({ consentStatus: "declined" }).where(eq(projectCaptures.id, captureBvc));
    const rows = await listCourseTourEmbeds(bvcId, courseA);
    expect(rows).toHaveLength(1);
    expect(liveToursByLesson(rows).size).toBe(0);
    await db.update(projectCaptures).set({ consentStatus: "na" }).where(eq(projectCaptures.id, captureBvc));
    expect(liveToursByLesson(await listCourseTourEmbeds(bvcId, courseA)).size).toBe(1);
  });

  it("never shows a capture from another school's project", async () => {
    const { insertLessonTourEmbed, listCourseTourEmbeds } = await import("@/db/queries/tour-embeds");
    const { liveTour } = await import("@/lib/field-log-tour");
    expect((await insertLessonTourEmbed(tour({ courseId: courseB, lessonId: lessonB, captureId: captureAcme }))).ok).toBe(true);
    const [row] = await listCourseTourEmbeds(bvcId, courseB);
    expect(row.capture).toBeNull();
    expect(liveTour(row)).toMatchObject({ ok: false, reason: "capture_removed" });
  });

  it("a re-seed keeps the tour and leaves content_url empty", async () => {
    const { db } = await import("@/db/client");
    const { lessons } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    const { listCourseTourEmbeds } = await import("@/db/queries/tour-embeds");
    await seedFixture(`iso-tour-a-${stamp}`);
    expect(await listCourseTourEmbeds(bvcId, courseA)).toHaveLength(1);
    const [l] = await db.select().from(lessons).where(eq(lessons.id, lessonA)).limit(1);
    expect(l.contentUrl).toBeNull();
  });

  it("a tour cannot be removed from another tenant or another course", async () => {
    const { deleteLessonTourEmbed, listCourseTourEmbeds } = await import("@/db/queries/tour-embeds");
    expect(await deleteLessonTourEmbed(acmeId, courseA, lessonA)).toBe(false);
    expect(await deleteLessonTourEmbed(bvcId, courseB, lessonA)).toBe(false);
    expect(await deleteLessonTourEmbed(bvcId, courseA, lessonA)).toBe(true);
    expect(await listCourseTourEmbeds(bvcId, courseA)).toHaveLength(0);
  });
});
