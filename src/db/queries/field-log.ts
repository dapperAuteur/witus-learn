import "server-only";
import { and, desc, eq, inArray, isNull } from "drizzle-orm";
import { db } from "@/db/client";
import { CREDENTIAL_ENDORSEMENTS_REQUIRED, endorsementCount } from "@/lib/field-log-rubric";
import {
  documentationProjects,
  projectCaptures,
  projectComments,
  projectLegs,
  projectMembers,
  projectReviews,
  type DocumentationProject,
  type FieldLogReviewRubric,
  type ProjectCapture,
  type ProjectLeg,
  type ProjectReview,
} from "@/db/schema/field-log";
import { initialChecklist, templateByKey } from "@/lib/field-log-templates";

// Access-scoped data layer for "My Field Log". Every function takes (tenantId, userId) and
// returns null when the caller can't reach the project — so route handlers 404 (no leak),
// honoring the multi-tenant isolation invariant. Access = the project is in this tenant AND
// the user is a crew member (project_members). Peer-reviewer access lands in the review branch.

/** The project if it's in this tenant AND the user is a crew member; else null. */
async function accessibleProject(
  tenantId: string,
  userId: string,
  projectId: string,
): Promise<DocumentationProject | null> {
  const rows = await db
    .select({ p: documentationProjects })
    .from(documentationProjects)
    .innerJoin(projectMembers, eq(projectMembers.projectId, documentationProjects.id))
    .where(
      and(
        eq(documentationProjects.id, projectId),
        eq(documentationProjects.tenantId, tenantId),
        eq(projectMembers.userId, userId),
      ),
    )
    .limit(1);
  return rows[0]?.p ?? null;
}

export async function createProject(input: {
  tenantId: string;
  userId: string;
  templateKey: string;
  title: string;
  subject?: string | null;
  medium?: string | null;
  subjectTag?: string | null;
}): Promise<DocumentationProject> {
  const template = templateByKey(input.templateKey);
  if (!template) throw new Error(`Unknown field-log template: ${input.templateKey}`);
  const [project] = await db
    .insert(documentationProjects)
    .values({
      tenantId: input.tenantId,
      userId: input.userId,
      title: input.title,
      subject: input.subject ?? null,
      templateKey: input.templateKey,
      medium: input.medium ?? null,
      subjectTag: input.subjectTag ?? null,
      checklist: initialChecklist(template),
    })
    .returning();
  // The creator is the owner crew member.
  await db.insert(projectMembers).values({ projectId: project.id, userId: input.userId, role: "owner" });
  return project;
}

/** Projects the user is a member of, in this tenant, newest activity first. */
export async function listProjects(tenantId: string, userId: string): Promise<DocumentationProject[]> {
  const rows = await db
    .select({ p: documentationProjects })
    .from(documentationProjects)
    .innerJoin(projectMembers, eq(projectMembers.projectId, documentationProjects.id))
    .where(and(eq(documentationProjects.tenantId, tenantId), eq(projectMembers.userId, userId)))
    .orderBy(desc(documentationProjects.updatedAt));
  return rows.map((r) => r.p);
}

/** The full project bundle (project + legs + captures + members + comments + reviews), or null. */
export async function getProjectBundle(tenantId: string, userId: string, projectId: string) {
  const project = await accessibleProject(tenantId, userId, projectId);
  if (!project) return null;
  const [legs, captures, members, comments, reviews] = await Promise.all([
    db.select().from(projectLegs).where(eq(projectLegs.projectId, projectId)).orderBy(projectLegs.sortOrder),
    db.select().from(projectCaptures).where(eq(projectCaptures.projectId, projectId)).orderBy(desc(projectCaptures.createdAt)),
    db.select().from(projectMembers).where(eq(projectMembers.projectId, projectId)),
    db.select().from(projectComments).where(eq(projectComments.projectId, projectId)).orderBy(desc(projectComments.createdAt)),
    db.select().from(projectReviews).where(eq(projectReviews.projectId, projectId)).orderBy(desc(projectReviews.createdAt)),
  ]);
  return { project, legs, captures, members, comments, reviews };
}

type ProjectPatch = Partial<
  Pick<
    typeof documentationProjects.$inferInsert,
    "title" | "subject" | "medium" | "subjectTag" | "chainMode" | "kit" | "checklist" | "status" | "visibility" | "selfAttestedAt"
  >
>;

export async function updateProject(
  tenantId: string,
  userId: string,
  projectId: string,
  patch: ProjectPatch,
): Promise<DocumentationProject | null> {
  if (!(await accessibleProject(tenantId, userId, projectId))) return null;
  const [updated] = await db
    .update(documentationProjects)
    .set({ ...patch, updatedAt: new Date() })
    .where(eq(documentationProjects.id, projectId))
    .returning();
  return updated ?? null;
}

type LegInput = Omit<typeof projectLegs.$inferInsert, "id" | "projectId" | "createdAt">;

export async function addLeg(
  tenantId: string,
  userId: string,
  projectId: string,
  input: LegInput,
): Promise<ProjectLeg | null> {
  if (!(await accessibleProject(tenantId, userId, projectId))) return null;
  const [leg] = await db.insert(projectLegs).values({ ...input, projectId }).returning();
  return leg;
}

export async function updateLeg(
  tenantId: string,
  userId: string,
  legId: string,
  patch: Partial<LegInput>,
): Promise<ProjectLeg | null> {
  const [leg] = await db.select().from(projectLegs).where(eq(projectLegs.id, legId)).limit(1);
  if (!leg || !(await accessibleProject(tenantId, userId, leg.projectId))) return null;
  const [updated] = await db.update(projectLegs).set(patch).where(eq(projectLegs.id, legId)).returning();
  return updated ?? null;
}

export async function deleteLeg(tenantId: string, userId: string, legId: string): Promise<boolean> {
  const [leg] = await db.select().from(projectLegs).where(eq(projectLegs.id, legId)).limit(1);
  if (!leg || !(await accessibleProject(tenantId, userId, leg.projectId))) return false;
  await db.delete(projectLegs).where(eq(projectLegs.id, legId));
  return true;
}

type CaptureInput = Omit<typeof projectCaptures.$inferInsert, "id" | "projectId" | "createdAt">;

export async function addCapture(
  tenantId: string,
  userId: string,
  projectId: string,
  input: CaptureInput,
): Promise<ProjectCapture | null> {
  if (!(await accessibleProject(tenantId, userId, projectId))) return null;
  const [capture] = await db.insert(projectCaptures).values({ ...input, projectId }).returning();
  return capture;
}

export async function updateCapture(
  tenantId: string,
  userId: string,
  captureId: string,
  patch: Partial<CaptureInput>,
): Promise<ProjectCapture | null> {
  const [capture] = await db.select().from(projectCaptures).where(eq(projectCaptures.id, captureId)).limit(1);
  if (!capture || !(await accessibleProject(tenantId, userId, capture.projectId))) return null;
  const [updated] = await db.update(projectCaptures).set(patch).where(eq(projectCaptures.id, captureId)).returning();
  return updated ?? null;
}

export async function deleteCapture(tenantId: string, userId: string, captureId: string): Promise<boolean> {
  const [capture] = await db.select().from(projectCaptures).where(eq(projectCaptures.id, captureId)).limit(1);
  if (!capture || !(await accessibleProject(tenantId, userId, capture.projectId))) return false;
  await db.delete(projectCaptures).where(eq(projectCaptures.id, captureId));
  return true;
}

export async function addComment(
  tenantId: string,
  userId: string,
  projectId: string,
  body: string,
): Promise<boolean> {
  if (!(await accessibleProject(tenantId, userId, projectId))) return false;
  await db.insert(projectComments).values({ projectId, userId, body });
  return true;
}

/** Add a crew member (idempotent on the (project, user) unique). Owner/crew only. */
export async function addMember(
  tenantId: string,
  userId: string,
  projectId: string,
  memberUserId: string,
): Promise<boolean> {
  if (!(await accessibleProject(tenantId, userId, projectId))) return false;
  await db
    .insert(projectMembers)
    .values({ projectId, userId: memberUserId, role: "collaborator" })
    .onConflictDoNothing({ target: [projectMembers.projectId, projectMembers.userId] });
  return true;
}

// ── Peer / teacher review ─────────────────────────────────────────────────────
// A reviewer is any enrolled user in this tenant who is NOT on the project's crew, while the
// project is `in_review`. Teachers/owners qualify the same way (the cold-start + quality backstop).

/** The project if it's in this tenant, `in_review`, and the caller is NOT a crew member; else null. */
async function reviewableProject(
  tenantId: string,
  reviewerUserId: string,
  projectId: string,
): Promise<DocumentationProject | null> {
  const [p] = await db
    .select()
    .from(documentationProjects)
    .where(
      and(
        eq(documentationProjects.id, projectId),
        eq(documentationProjects.tenantId, tenantId),
        eq(documentationProjects.visibility, "in_review"),
      ),
    )
    .limit(1);
  if (!p) return null;
  const [member] = await db
    .select({ id: projectMembers.id })
    .from(projectMembers)
    .where(and(eq(projectMembers.projectId, projectId), eq(projectMembers.userId, reviewerUserId)))
    .limit(1);
  if (member) return null; // can't review a project you're on the crew of
  return p;
}

/** Projects awaiting review in this tenant that the user may review (not their own crew). */
export async function listReviewQueue(tenantId: string, userId: string): Promise<DocumentationProject[]> {
  const rows = await db
    .select({ p: documentationProjects })
    .from(documentationProjects)
    .leftJoin(
      projectMembers,
      and(eq(projectMembers.projectId, documentationProjects.id), eq(projectMembers.userId, userId)),
    )
    .where(
      and(
        eq(documentationProjects.tenantId, tenantId),
        eq(documentationProjects.visibility, "in_review"),
        isNull(projectMembers.id), // exclude projects the user is a member of
      ),
    )
    .orderBy(desc(documentationProjects.updatedAt));
  return rows.map((r) => r.p);
}

/** Read-only bundle for a reviewer (project + legs + captures + comments + this reviewer's prior review). */
export async function getReviewBundle(tenantId: string, reviewerUserId: string, projectId: string) {
  const project = await reviewableProject(tenantId, reviewerUserId, projectId);
  if (!project) return null;
  const [legs, captures, comments, mine] = await Promise.all([
    db.select().from(projectLegs).where(eq(projectLegs.projectId, projectId)).orderBy(projectLegs.sortOrder),
    db.select().from(projectCaptures).where(eq(projectCaptures.projectId, projectId)).orderBy(desc(projectCaptures.createdAt)),
    db.select().from(projectComments).where(eq(projectComments.projectId, projectId)).orderBy(desc(projectComments.createdAt)),
    db.select().from(projectReviews).where(and(eq(projectReviews.projectId, projectId), eq(projectReviews.reviewerUserId, reviewerUserId))).limit(1),
  ]);
  return { project, legs, captures, comments, myReview: mine[0] ?? null };
}

type ReviewInput = {
  verdict: "endorse" | "revise";
  rubric?: FieldLogReviewRubric | null;
  body?: string | null;
  subjectUserId?: string | null;
};

/** Submit (or replace) this reviewer's review of an in_review project. One review per reviewer. */
export async function addReview(
  tenantId: string,
  reviewerUserId: string,
  projectId: string,
  input: ReviewInput,
): Promise<ProjectReview | null> {
  if (!(await reviewableProject(tenantId, reviewerUserId, projectId))) return null;
  const [existing] = await db
    .select({ id: projectReviews.id })
    .from(projectReviews)
    .where(and(eq(projectReviews.projectId, projectId), eq(projectReviews.reviewerUserId, reviewerUserId)))
    .limit(1);
  if (existing) {
    const [updated] = await db
      .update(projectReviews)
      .set({ verdict: input.verdict, rubric: input.rubric, body: input.body ?? null, subjectUserId: input.subjectUserId ?? null })
      .where(eq(projectReviews.id, existing.id))
      .returning();
    return updated ?? null;
  }
  const [row] = await db
    .insert(projectReviews)
    .values({
      projectId,
      reviewerUserId,
      verdict: input.verdict,
      rubric: input.rubric,
      body: input.body ?? null,
      subjectUserId: input.subjectUserId ?? null,
    })
    .returning();
  return row ?? null;
}

// ── Credentials ───────────────────────────────────────────────────────────────
// A project earns the Trusted Documentation credential when the learner has self-attested AND it
// has ≥2 distinct endorsements. Derived from what we already store (no separate credential table
// yet — the gated course-family credential is a later feature that will build on this signal).
export async function listEarnedCredentials(
  tenantId: string,
  userId: string,
): Promise<DocumentationProject[]> {
  const projects = await listProjects(tenantId, userId);
  if (projects.length === 0) return [];
  const ids = projects.map((p) => p.id);
  const reviews = await db
    .select({ projectId: projectReviews.projectId, reviewerUserId: projectReviews.reviewerUserId, verdict: projectReviews.verdict })
    .from(projectReviews)
    .where(inArray(projectReviews.projectId, ids));
  const byProject = new Map<string, { reviewerUserId: string; verdict: string }[]>();
  for (const r of reviews) {
    const list = byProject.get(r.projectId) ?? [];
    list.push({ reviewerUserId: r.reviewerUserId, verdict: r.verdict });
    byProject.set(r.projectId, list);
  }
  return projects.filter(
    (p) => p.selfAttestedAt && endorsementCount(byProject.get(p.id) ?? []) >= CREDENTIAL_ENDORSEMENTS_REQUIRED,
  );
}
