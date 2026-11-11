import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Course offers against a real database (BAM, 2026-11-10: "approve assigned courses"): an offer is read,
// listed and answered through its own school only; accepting moves the course and logs the change with the
// offering admin as the actor; an expired offer cannot be accepted. Skipped offline like the other .db
// suites, and where migration 0084 has not run yet.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("course offers stay inside one school and change the course only on accept", () => {
  const stamp = Date.now();
  let ready = false;
  let schoolId = "";
  let otherId = "";
  let courseId = "";
  const adminId = `iso-co-admin-${stamp}`;
  const teacherId = `iso-co-teacher-${stamp}`;
  const oldId = `iso-co-old-${stamp}`;

  beforeAll(async () => {
    const { sql } = await import("drizzle-orm");
    const { db } = await import("@/db/client");
    const r = await db.execute(sql`select to_regclass('public.course_offers') is not null as ok`);
    ready = Boolean((r.rows[0] as { ok: boolean }).ok);
    if (!ready) return;
    const { courses, tenants, tenantMemberships, users } = await import("@/db/schema");
    [{ id: schoolId }] = await db.insert(tenants).values({ slug: `iso-co-school-${stamp}`, name: "Iso CO School" }).returning({ id: tenants.id });
    [{ id: otherId }] = await db.insert(tenants).values({ slug: `iso-co-other-${stamp}`, name: "Iso CO Other" }).returning({ id: tenants.id });
    await db.insert(users).values([
      { id: adminId, email: `${adminId}@isolation.test`, name: "Iso Admin" },
      { id: teacherId, email: `${teacherId}@isolation.test`, name: "Iso Teacher" },
      { id: oldId, email: `${oldId}@isolation.test`, name: "Iso Old" },
    ]);
    await db.insert(tenantMemberships).values([
      { tenantId: schoolId, userId: adminId, role: "brand_admin" },
      { tenantId: schoolId, userId: teacherId, role: "instructor" },
      { tenantId: schoolId, userId: oldId, role: "instructor" },
    ]);
    [{ id: courseId }] = await db
      .insert(courses)
      .values({ tenantId: schoolId, instructorId: oldId, title: "Iso Offer Course", slug: `iso-offer-${stamp}` })
      .returning({ id: courses.id });
  });

  afterAll(async () => {
    if (!ready) return;
    const { db } = await import("@/db/client");
    const { tenants, users } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    await db.delete(tenants).where(inArray(tenants.id, [schoolId, otherId].filter(Boolean)));
    await db.delete(users).where(inArray(users.id, [adminId, teacherId, oldId]));
  });

  it("an offer leaves the course alone, is invisible from another school, and accepting moves it and logs it", async () => {
    if (!ready) return;
    const q = await import("@/db/queries/course-offers");
    const { db } = await import("@/db/client");
    const { courses, courseInstructorChanges } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");

    const offer = await q.createCourseOffer({ tenantId: schoolId, course: { id: courseId, instructorId: oldId }, teacherUserId: teacherId, offeredBy: { userId: adminId, role: "brand_admin" } });
    const [before] = await db.select({ instructorId: courses.instructorId }).from(courses).where(eq(courses.id, courseId));
    expect(before.instructorId).toBe(oldId);
    expect((await q.listOffersForTeacher(schoolId, teacherId)).map((o) => o.id)).toEqual([offer.id]);
    expect(await q.getCourseOffer(otherId, offer.id)).toBeNull();
    expect(await q.listOpenOffers(otherId)).toEqual([]);

    // A second offer for the same course withdraws the first.
    const second = await q.createCourseOffer({ tenantId: schoolId, course: { id: courseId, instructorId: oldId }, teacherUserId: teacherId, offeredBy: { userId: adminId, role: "brand_admin" } });
    expect((await q.getCourseOffer(schoolId, offer.id))?.status).toBe("withdrawn");

    const accepted = await q.acceptCourseOffer({ tenantId: schoolId, offer: second, note: null });
    expect(accepted?.course.instructorId).toBe(teacherId);
    const log = await db.select().from(courseInstructorChanges).where(eq(courseInstructorChanges.courseId, courseId));
    expect(log).toEqual([expect.objectContaining({ fromInstructorId: oldId, toInstructorId: teacherId, actorUserId: adminId, actorRole: "brand_admin", source: "course-offer" })]);
    // Answered once.
    expect(await q.acceptCourseOffer({ tenantId: schoolId, offer: second, note: null })).toBeNull();
  });

  it("an expired offer is marked expired on read and can't be accepted", async () => {
    if (!ready) return;
    const q = await import("@/db/queries/course-offers");
    const past = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000);
    const offer = await q.createCourseOffer({ tenantId: schoolId, course: { id: courseId, instructorId: teacherId }, teacherUserId: oldId, offeredBy: { userId: adminId, role: "brand_admin" }, now: past });
    expect(await q.acceptCourseOffer({ tenantId: schoolId, offer, note: null })).toBeNull();
    expect(await q.listOffersForTeacher(schoolId, oldId)).toEqual([]);
    expect((await q.getCourseOffer(schoolId, offer.id))?.status).toBe("expired");
  });
});
