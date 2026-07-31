import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  AUDITOR_READ_ONLY_MESSAGE,
  isAcceptedAuditor,
  isReadOnlyAuditor,
  type AuditorGrant,
} from "@/lib/auditors";
import { canSeeUnvettedContent, courseViewGate } from "@/lib/vetting";
import { lessonAccess } from "@/lib/gating";

// Invite-to-audit (plans/52 §5), guarded from both sides:
//
//   an ACCEPTED auditor reads one unvetted course's lessons and NOTHING ELSE, in one tenant,
//   and writes nothing anywhere;
//   everyone else, including the person whose invite is still pending, sees the Coming soon page.
//
// The decision is pure (src/lib/auditors.ts), so all of this runs offline. The few places where it
// has to be spelled into a route are checked by reading the source, which is how the repo already
// guards its other invariants.
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

const TENANT_A = "11111111-1111-1111-1111-111111111111";
const TENANT_B = "22222222-2222-2222-2222-222222222222";
const COURSE_A = "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa";
const COURSE_B = "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb";
const ACCEPTED = new Date("2026-07-30T12:00:00Z");

const grant = (over: Partial<AuditorGrant> = {}): AuditorGrant => ({
  tenantId: TENANT_A,
  courseId: COURSE_A,
  email: "reviewer@example.com",
  userId: "user-reviewer",
  acceptedAt: ACCEPTED,
  ...over,
});

const viewer = (over: Partial<Parameters<typeof isAcceptedAuditor>[1]> = {}) => ({
  tenantId: TENANT_A,
  courseId: COURSE_A,
  userId: "user-reviewer",
  email: "reviewer@example.com",
  ...over,
});

describe("who counts as an auditor", () => {
  it("an ACCEPTED invite matches, by user id or by email", () => {
    expect(isAcceptedAuditor([grant()], viewer())).toBe(true);
    // Accepted signed out: no user_id yet, so the address is the only link.
    expect(isAcceptedAuditor([grant({ userId: null })], viewer({ userId: "someone-else" }))).toBe(true);
    // Signed in with the invited address under a different account id than the one recorded.
    expect(isAcceptedAuditor([grant({ userId: "old-account" })], viewer())).toBe(true);
  });

  it("email casing and stray whitespace are not identity", () => {
    expect(
      isAcceptedAuditor([grant({ userId: null, email: "reviewer@example.com" })], viewer({ userId: null, email: " Reviewer@Example.COM " })),
    ).toBe(true);
  });

  it("a PENDING invite grants nothing", () => {
    expect(isAcceptedAuditor([grant({ acceptedAt: null })], viewer())).toBe(false);
  });

  it("an auditor of course A is a stranger to course B", () => {
    expect(isAcceptedAuditor([grant({ courseId: COURSE_A })], viewer({ courseId: COURSE_B }))).toBe(false);
  });

  it("a grant in another TENANT opens nothing, even for the same person and course id", () => {
    expect(isAcceptedAuditor([grant({ tenantId: TENANT_B })], viewer({ tenantId: TENANT_A }))).toBe(false);
    expect(isAcceptedAuditor([grant({ tenantId: TENANT_A })], viewer({ tenantId: TENANT_B }))).toBe(false);
  });

  it("a signed-out visitor with no id and no address matches nothing", () => {
    expect(isAcceptedAuditor([grant()], viewer({ userId: null, email: null }))).toBe(false);
  });

  it("no grants at all is not an accident that opens the course", () => {
    expect(isAcceptedAuditor([], viewer())).toBe(false);
  });
});

describe("what an accepted auditor can SEE", () => {
  const unvetted = { isPublished: true, visibility: "public", vettedAt: null };

  it("reaches the real course, not the Coming soon face", () => {
    const canSeeUnvetted = canSeeUnvettedContent({
      isOwnerOrInstructor: false,
      isEnrolled: false,
      isAuditor: isAcceptedAuditor([grant()], viewer()),
    });
    expect(canSeeUnvetted).toBe(true);
    expect(courseViewGate({ ...unvetted, isEditor: false, canSeeUnvetted })).toBe("open");
  });

  it("a PENDING invite still lands on the Coming soon face", () => {
    const canSeeUnvetted = canSeeUnvettedContent({
      isOwnerOrInstructor: false,
      isEnrolled: false,
      isAuditor: isAcceptedAuditor([grant({ acceptedAt: null })], viewer()),
    });
    expect(canSeeUnvetted).toBe(false);
    expect(courseViewGate({ ...unvetted, isEditor: false, canSeeUnvetted })).toBe("coming-soon");
  });

  it("an auditor of course A gets the Coming soon face on course B", () => {
    const canSeeUnvetted = canSeeUnvettedContent({
      isOwnerOrInstructor: false,
      isEnrolled: false,
      isAuditor: isAcceptedAuditor([grant({ courseId: COURSE_A })], viewer({ courseId: COURSE_B })),
    });
    expect(courseViewGate({ ...unvetted, isEditor: false, canSeeUnvetted })).toBe("coming-soon");
  });

  it("opens the LESSONS of an unvetted course, past the paywall and past sequential order", () => {
    // Both would otherwise block a reviewer: they are not buying the course, and they record no
    // progress, so they could never satisfy "finish lesson 1 first".
    const paidSequential = {
      isPublished: true,
      isSequential: true,
      priceType: "one_time" as const,
      price: "29",
      vettedAt: null,
    };
    const lesson = { id: "L2", isPublished: true, isFreePreview: false };
    const ctx = {
      isEditor: false,
      isEnrolled: false,
      completedLessonIds: new Set<string>(),
      orderedLessonIds: ["L1", "L2"],
    };
    expect(lessonAccess(paidSequential, lesson, { ...ctx, isAuditor: true }).open).toBe(true);
    expect(lessonAccess(paidSequential, lesson, ctx).reason).toBe("unvetted");
  });

  it("does NOT open a draft lesson: reviewing is not editing", () => {
    const course = { isPublished: true, isSequential: false, priceType: "free", price: "0", vettedAt: null };
    const draft = { id: "L1", isPublished: false, isFreePreview: false };
    expect(lessonAccess(course, draft, {
      isEditor: false,
      isEnrolled: false,
      isAuditor: true,
      completedLessonIds: new Set<string>(),
      orderedLessonIds: ["L1"],
    })).toEqual({ open: false, reason: "draft" });
  });

  it("confers NOTHING once the course is vetted: a stale grant is not free access forever", () => {
    const vettedPaid = {
      isPublished: true,
      isSequential: false,
      priceType: "one_time" as const,
      price: "29",
      vettedAt: new Date("2026-07-30T00:00:00Z"),
    };
    const lesson = { id: "L1", isPublished: true, isFreePreview: false };
    expect(
      lessonAccess(vettedPaid, lesson, {
        isEditor: false,
        isEnrolled: false,
        isAuditor: true,
        completedLessonIds: new Set<string>(),
        orderedLessonIds: ["L1"],
      }).reason,
    ).toBe("locked");
  });
});

describe("an auditor's attempts are never recorded", () => {
  it("isReadOnlyAuditor fires for the auditor and for nobody else", () => {
    const base = { isUnvetted: true, isEditor: false, isEnrolled: false };
    expect(isReadOnlyAuditor({ ...base, isAuditor: true })).toBe(true);
    // An editor writes as an editor, an enrollee writes as a learner, and on a vetted course the
    // grant means nothing, so none of those three is blocked.
    expect(isReadOnlyAuditor({ ...base, isAuditor: true, isEditor: true })).toBe(false);
    expect(isReadOnlyAuditor({ ...base, isAuditor: true, isEnrolled: true })).toBe(false);
    expect(isReadOnlyAuditor({ ...base, isAuditor: true, isUnvetted: false })).toBe(false);
    expect(isReadOnlyAuditor({ ...base, isAuditor: false })).toBe(false);
  });

  it("EVERY route that writes a learner record refuses the auditor first", () => {
    // The list is the point: a new write path added without this check would silently start
    // counting reviewers in the statistics the quiz-integrity rule exists to protect.
    const routes = [
      "src/app/api/courses/[id]/lessons/[lessonId]/quiz/route.ts",
      "src/app/api/courses/[id]/lessons/[lessonId]/recall/route.ts",
      "src/app/api/courses/[id]/lessons/[lessonId]/progress/route.ts",
      "src/app/api/courses/[id]/lessons/[lessonId]/submission/route.ts",
      "src/app/api/courses/[id]/enroll/route.ts",
      "src/app/api/courses/[id]/complete/route.ts",
    ];
    for (const r of routes) {
      const code = src(r);
      expect(code, r).toContain("auditorReadOnlyBlock");
      // The block must come BEFORE the write, or the record is already in the table.
      const blockAt = code.indexOf("auditorReadOnlyBlock({");
      for (const write of ["upsertProgress(", "recordQuizAttempt(", "recordRecallAttempt(", "upsertSubmission(", "enrollFree(", "createCompletion("]) {
        const writeAt = code.indexOf(write);
        if (writeAt >= 0) expect(blockAt, `${r} blocks before ${write}`).toBeLessThan(writeAt);
      }
    }
  });

  it("the quiz and progress routes never hand `isAuditor` to lessonAccess", () => {
    // Passing it would open the READ gate on a route whose whole job is to WRITE, leaving the
    // explicit block as the only defence rather than the second one.
    for (const r of [
      "src/app/api/courses/[id]/lessons/[lessonId]/quiz/route.ts",
      "src/app/api/courses/[id]/lessons/[lessonId]/progress/route.ts",
      "src/app/api/courses/[id]/lessons/[lessonId]/submission/route.ts",
    ]) {
      expect(src(r), r).not.toContain("isAuditor:");
    }
  });

  it("says why, in one shared sentence", () => {
    expect(AUDITOR_READ_ONLY_MESSAGE).toContain("not recorded");
    expect(src("src/lib/api.ts")).toContain("AUDITOR_READ_ONLY_MESSAGE");
  });
});

describe("the grant is tenant-scoped end to end", () => {
  it("every auditor read/write goes through the scoped DAL", () => {
    const scoped = src("src/db/scoped.ts");
    for (const m of ["listCourseAuditors", "inviteCourseAuditor", "revokeCourseAuditor", "isCourseAuditor"]) {
      expect(scoped).toContain(m);
    }
    // Each scoped method supplies the tenant itself; none takes one from its caller.
    expect(scoped).toContain("inviteCourseAuditor({ tenantId: this.tenantId, ...input })");
    expect(scoped).toContain("revokeCourseAuditor(this.tenantId, courseId, auditorId)");
    expect(scoped).toContain("isCourseAuditor({ tenantId: this.tenantId, ...input })");
  });

  it("the queries filter tenant_id, and revoke is scoped by course too", () => {
    const q = src("src/db/queries/course-auditors.ts");
    expect(q).toContain("eq(courseAuditors.tenantId, tenantId)");
    expect(q).toContain("eq(courseAuditors.tenantId, viewer.tenantId)");
    expect(q).toContain("isNotNull(courseAuditors.acceptedAt)");
    const revoke = q.slice(q.indexOf("export async function revokeCourseAuditor"));
    expect(revoke).toContain("eq(courseAuditors.courseId, courseId)");
  });

  it("the content gate resolves the tenant from the COURSE row, never from the caller", () => {
    const api = src("src/lib/api.ts");
    expect(api).toContain("tenantId: course.tenantId");
    const access = src("src/lib/course-access.ts");
    expect(access).toContain("isAuditor");
    expect(access).toContain("tenantId: tenant.id");
  });

  it("the manage endpoints are owner / course-instructor / tenant-admin only", () => {
    const route = src("src/app/api/courses/[id]/auditors/route.ts");
    expect(route).toContain("canManageAuditors");
    expect(route).toContain("sdb.getCourseById(id)");
    expect(route).toContain("isPlatformOwner");
    expect(route).toContain("isTenantAdmin");
    expect(route).toContain('errorJson("Forbidden", 403)');
    // The live token is a bearer credential: minted once, never re-listed. (Comments are stripped
    // first: the code must not READ a.token, but it is welcome to explain why.)
    const listFn = route
      .slice(route.indexOf("export async function GET"), route.indexOf("export async function POST"))
      .replace(/^\s*\/\/.*$/gm, "");
    expect(listFn).not.toContain("token");
  });
});

describe("the audit invite link is treated as a credential", () => {
  it("is stripped from the WitUS Inbox mirror like every other bearer link", () => {
    const redact = src("src/lib/email-redact.ts");
    expect(redact).toContain("|audit|");
    expect(src("src/lib/emails.ts")).toContain("sendCourseAuditInviteEmail");
  });

  it("the accept page is noindex: it is one visitor's link, not public content", () => {
    const page = src("src/app/(tenant)/audit/[token]/page.tsx");
    expect(page).toContain("robots: { index: false, follow: false }");
    expect(page).toContain("<AcceptAuditInvite");
  });
});

describe("the auditor UI never offers a control that can only fail", () => {
  it("the lesson page hides every write control and says nothing is recorded", () => {
    const page = src("src/app/(tenant)/[username]/[courseSlug]/lesson/[lessonSlug]/page.tsx");
    expect(page).toContain("const canRecord = Boolean(view.session) && !view.isAuditor");
    expect(page).toContain("readOnly={view.isAuditor}");
    expect(page).toContain("{canRecord ? <LessonViewPing");
    expect(page).toContain("Nothing here is recorded");
  });

  it("the course page shows the review notice instead of an enroll button", () => {
    const page = src("src/app/(tenant)/[username]/[courseSlug]/page.tsx");
    expect(page).toContain("{view.isAuditor ? (");
    expect(page).toContain("no certificate");
  });
});
