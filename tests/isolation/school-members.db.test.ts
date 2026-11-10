import { afterAll, beforeAll, describe, expect, it } from "vitest";

// /admin/users and course requests against a real database (BAM, 2026-11-10): a school's member list,
// its request list and a course handed to a teacher are each keyed on that school alone. Two throwaway
// schools stand in for ElementaryMBA and "every other school". Skipped offline like the other .db
// suites; needs migration 0081.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("school members, course requests and instructor assignment stay inside one school", () => {
  const stamp = Date.now();
  let schoolId = "";
  let otherId = "";
  const teacherId = `iso-sm-teacher-${stamp}`;
  const learnerId = `iso-sm-learner-${stamp}`;
  const adminId = `iso-sm-admin-${stamp}`;
  const otherTeacherId = `iso-sm-other-${stamp}`;
  let courseId = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { courses, tenants, tenantMemberships, users } = await import("@/db/schema");
    [{ id: schoolId }] = await db.insert(tenants).values({ slug: `iso-sm-school-${stamp}`, name: "Iso SM School" }).returning({ id: tenants.id });
    [{ id: otherId }] = await db.insert(tenants).values({ slug: `iso-sm-other-${stamp}`, name: "Iso SM Other" }).returning({ id: tenants.id });
    await db.insert(users).values([
      { id: teacherId, email: `${teacherId}@isolation.test`, name: "Iso Teacher" },
      { id: learnerId, email: `${learnerId}@isolation.test`, name: "Iso Learner" },
      { id: adminId, email: `${adminId}@isolation.test`, name: "Iso Admin" },
      { id: otherTeacherId, email: `${otherTeacherId}@isolation.test`, name: "Other Teacher" },
    ]);
    await db.insert(tenantMemberships).values([
      { tenantId: schoolId, userId: teacherId, role: "instructor" },
      { tenantId: schoolId, userId: learnerId, role: "learner" },
      { tenantId: schoolId, userId: adminId, role: "brand_admin" },
      { tenantId: otherId, userId: otherTeacherId, role: "instructor" },
    ]);
    [{ id: courseId }] = await db
      .insert(courses)
      .values({ tenantId: schoolId, instructorId: adminId, title: "Iso Course", slug: `iso-course-${stamp}` })
      .returning({ id: courses.id });
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, users } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    await db.delete(tenants).where(inArray(tenants.id, [schoolId, otherId].filter(Boolean)));
    await db.delete(users).where(inArray(users.id, [teacherId, learnerId, adminId, otherTeacherId]));
  });

  it("lists a school's members with role, email and username, and none of another school's", async () => {
    const { listSchoolMembers } = await import("@/db/queries/school-members");
    const ours = await listSchoolMembers(schoolId);
    expect(ours.map((m) => m.userId).sort()).toEqual([adminId, learnerId, teacherId].sort());
    expect(ours.find((m) => m.userId === teacherId)).toMatchObject({ role: "instructor", email: `${teacherId}@isolation.test`, lastSignInAt: null });
    expect((await listSchoolMembers(otherId)).map((m) => m.userId)).toEqual([otherTeacherId]);
    expect((await listSchoolMembers(schoolId, "iso learner")).map((m) => m.userId)).toEqual([]);
    expect((await listSchoolMembers(schoolId, "learner")).map((m) => m.userId)).toEqual([learnerId]);
  });

  it("hands a course to a teacher of the school, logs it, and refuses another school's teacher", async () => {
    const { assignCourseInstructor } = await import("@/db/queries/course-instructor");
    const { db } = await import("@/db/client");
    const { courseInstructorChanges, courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    const [course] = await db.select().from(courses).where(eq(courses.id, courseId));
    const actor = { userId: adminId, isOwner: false, isSchoolAdmin: true };

    const refused = await assignCourseInstructor({ tenantId: schoolId, course: course!, newInstructorId: otherTeacherId, actor, source: "admin-users" });
    expect(refused).toMatchObject({ ok: false, status: 400 });

    const ok = await assignCourseInstructor({ tenantId: schoolId, course: course!, newInstructorId: teacherId, actor, source: "admin-users" });
    expect(ok).toMatchObject({ ok: true, changed: true });
    const [after] = await db.select({ instructorId: courses.instructorId }).from(courses).where(eq(courses.id, courseId));
    expect(after!.instructorId).toBe(teacherId);
    const log = await db.select().from(courseInstructorChanges).where(eq(courseInstructorChanges.courseId, courseId));
    expect(log).toHaveLength(1);
    expect(log[0]).toMatchObject({ tenantId: schoolId, fromInstructorId: adminId, toInstructorId: teacherId, actorUserId: adminId, actorRole: "brand_admin", source: "admin-users" });
  });

  it("a course request is listed and read on its own school only, and approval creates the teacher's draft", async () => {
    const { approveCourseRequest, createCourseRequest, getCourseRequest, listCourseRequests, listOwnCourseRequests } = await import("@/db/queries/course-requests");
    const { db } = await import("@/db/client");
    const { courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    const req = await createCourseRequest(schoolId, teacherId, {
      title: `Iso Requested ${stamp}`,
      description: "A course the isolation suite asked for.",
      reason: "To prove the request stays on one school.",
      briefUrl: null,
    });
    expect((await listCourseRequests(schoolId)).map((r) => r.id)).toContain(req.id);
    expect((await listCourseRequests(otherId)).map((r) => r.id)).not.toContain(req.id);
    expect(await getCourseRequest(otherId, req.id)).toBeNull();
    expect((await listOwnCourseRequests(schoolId, teacherId)).map((r) => r.id)).toEqual([req.id]);

    const result = await approveCourseRequest({ tenantId: schoolId, request: req, deciderUserId: adminId, note: null });
    expect(result).not.toBeNull();
    expect(result!.course).toMatchObject({ tenantId: schoolId, instructorId: teacherId, visibility: "private", isPublished: false });
    expect(result!.request).toMatchObject({ status: "approved", courseId: result!.course.id });
    // Decided once: a second approval creates nothing.
    expect(await approveCourseRequest({ tenantId: schoolId, request: req, deciderUserId: adminId, note: null })).toBeNull();
    expect(await db.select({ id: courses.id }).from(courses).where(eq(courses.tenantId, schoolId))).toHaveLength(2);
  });
});
