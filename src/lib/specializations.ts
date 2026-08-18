// Gated specialization credentials (roadmap: Platform backlog; plan: plans/future/12).
//
// A specialization is a NAMED TRIPLE of courses following the Documentarian program's
// three-layer architecture: a shared CORE course (the trust discipline), one MEDIUM course
// (the craft), and one SUBJECT course (the material). A learner who has completed all three
// has earned the specialization. There is deliberately NO new table: "earned" is computed at
// read time from `course_completions` rows, the same primitive that backs the per-course
// credential and its public /verify/[token] page. Each leg of an earned specialization is
// therefore independently verifiable through the course credential it already has; the
// specialization itself needs no token of its own to point at.
//
// TENANT SCOPING (the load-bearing rule): definitions here are course SLUGS, not ids. A
// specialization only resolves against the requesting tenant's OWN published courses, and a
// definition whose three slugs are not all published in that tenant does not exist there at
// all: it is dropped, never rendered as "unavailable" (which would leak that another brand
// carries those courses). The query layer (src/db/queries/dashboard.ts) enforces this by
// filtering courses and completions on the tenant id; computeSpecializations() re-enforces
// it by counting a completion only when its slug is in the published set it was given.
//
// HONESTY (see scripts/data/how-to-research-course.ts, rule 1): this is an INTERNAL platform
// record, a real gated credential in the sense that it cannot be earned without finishing all
// three courses, but it is NOT an external certification, license, or the Trusted
// Documentation Rubric credential (which needs self-attestation plus endorsements and cannot
// be minted by course completion). UI copy must say so and must never show a specialization
// the learner has not earned as if they had.
//
// WHY THESE TRIPLES: plan 12's own Layer 0 ("Foundations of Trusted Documentation") and
// medium ladder (Words / Sound / Motion) are not built yet, so the launch definitions use the
// shipped catalog. `how-to-research` is the trust-discipline core that exists today (built on
// the same Trusted Documentation Rubric); the STORY True track supplies the medium craft; the
// subject leg is a matching catalog course. When the plan-12 courses ship, add triples that
// use them (or retire these) rather than silently rewriting an earned combination.

export type SpecializationRole = "core" | "medium" | "subject";

export const SPECIALIZATION_ROLES: readonly SpecializationRole[] = ["core", "medium", "subject"];

export interface SpecializationDef {
  /** Stable identifier (used as a React key and in copy anchors, never in a URL yet). */
  slug: string;
  title: string;
  /** One sentence, shown under the title. No efficacy claims, no external-credential language. */
  description: string;
  /** Course slug of the shared trust-discipline core. */
  core: string;
  /** Course slug of the medium (craft) course. */
  medium: string;
  /** Course slug of the subject (material) course. */
  subject: string;
}

export const SPECIALIZATIONS: readonly SpecializationDef[] = [
  {
    slug: "documentary-history",
    title: "Documentary and Public History",
    description:
      "Research discipline, documentary craft, and the Great Migration as the subject: how to tell a true story of a historical movement on screen.",
    core: "how-to-research",
    medium: "documentary",
    subject: "great-migration",
  },
  {
    slug: "oral-history-community-memory",
    title: "Oral History and Community Memory",
    description:
      "Research discipline, the oral-history interview, and one district's remembered life as the subject: how to record people remembering, fairly.",
    core: "how-to-research",
    medium: "oral-history",
    subject: "indiana-avenue-a-district-and-what-replaced-it",
  },
  {
    slug: "civic-record",
    title: "Civic Documentation and Local Government",
    description:
      "Research discipline, civic documentation craft, and state and local government as the subject: how to keep an accurate public record of the meetings that decide things.",
    core: "how-to-research",
    medium: "civic-documentation",
    subject: "us-state-local-government",
  },
];

/** A published course in the requesting tenant, keyed by slug in the maps below. */
export interface PublishedCourseRef {
  title: string;
}

/** A tenant-scoped completion of one course (the course_completions row, minus ids). */
export interface CompletionRef {
  completedAt: Date;
  /** The per-course credential's public /verify token, when the caller has it. */
  verificationToken?: string | null;
}

export interface SpecializationCourseStatus {
  role: SpecializationRole;
  courseSlug: string;
  title: string;
  completed: boolean;
  completedAt: Date | null;
  verificationToken: string | null;
}

export interface SpecializationStatus {
  slug: string;
  title: string;
  description: string;
  /** True only when ALL THREE courses are completed. Never imply otherwise in UI. */
  earned: boolean;
  /** The date the LAST of the three was completed (null until earned). */
  earnedAt: Date | null;
  /** 0 to 3. */
  completedCount: number;
  /** All three legs in core, medium, subject order. */
  courses: SpecializationCourseStatus[];
  /** The legs not yet completed (empty when earned). */
  remaining: SpecializationCourseStatus[];
}

/** Every course slug any definition references, deduped, for the query layer's IN filter. */
export function specializationCourseSlugs(
  defs: readonly SpecializationDef[] = SPECIALIZATIONS,
): string[] {
  return [...new Set(defs.flatMap((d) => [d.core, d.medium, d.subject]))];
}

/**
 * Pure award/progress computation. `published` and `completions` MUST both already be scoped
 * to the requesting tenant (slug -> ref). Definitions with any leg missing from `published`
 * are dropped entirely; completions for slugs outside `published` never count, so a foreign
 * tenant's identically-slugged course can never earn or advance a specialization here.
 */
export function computeSpecializations(
  defs: readonly SpecializationDef[],
  published: ReadonlyMap<string, PublishedCourseRef>,
  completions: ReadonlyMap<string, CompletionRef>,
): SpecializationStatus[] {
  const out: SpecializationStatus[] = [];
  for (const def of defs) {
    const slugs: Record<SpecializationRole, string> = {
      core: def.core,
      medium: def.medium,
      subject: def.subject,
    };
    // Resolve only against this tenant's published catalog; a partial match means the
    // specialization does not exist on this host.
    if (!SPECIALIZATION_ROLES.every((role) => published.has(slugs[role]))) continue;

    const courses: SpecializationCourseStatus[] = SPECIALIZATION_ROLES.map((role) => {
      const courseSlug = slugs[role];
      // Count a completion only for a slug in the published set (defense in depth on top of
      // the query layer's tenant filter).
      const completion = published.has(courseSlug) ? (completions.get(courseSlug) ?? null) : null;
      return {
        role,
        courseSlug,
        // The role guard above proves membership; the fallback only satisfies the type.
        title: published.get(courseSlug)?.title ?? courseSlug,
        completed: completion !== null,
        completedAt: completion?.completedAt ?? null,
        verificationToken: completion?.verificationToken ?? null,
      };
    });

    const remaining = courses.filter((c) => !c.completed);
    const earned = remaining.length === 0;
    const earnedAt = earned
      ? new Date(Math.max(...courses.map((c) => (c.completedAt as Date).getTime())))
      : null;

    out.push({
      slug: def.slug,
      title: def.title,
      description: def.description,
      earned,
      earnedAt,
      completedCount: courses.length - remaining.length,
      courses,
      remaining,
    });
  }
  return out;
}
