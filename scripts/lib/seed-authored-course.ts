import { and, eq, inArray, sql } from "drizzle-orm";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";
import * as schema from "../../src/db/schema";
import type { AuthoredCourse } from "../data/authored-course";
import { normalizeAdditionalCategories } from "../../src/lib/course-categories";
import { parseReleaseMarkers } from "../../src/lib/lesson-review";
import { NEW_COURSE_STATE } from "../../src/lib/course-visibility";
import { keepsCurrentInstructor } from "../../src/lib/course-instructor";
import { decideSeedAction, seedContentHash, seedContentOf, type SeedContent } from "../../src/lib/seed-drift";

// ── Seed drift report (plans/97 Q5) ─────────────────────────────────────────
// Every seedAuthoredCourse call in this process adds to it; the seed script prints it at the end and,
// when SEED_REPORT_PATH is set (the post-merge workflow), writes it as JSON so the RAG step indexes
// exactly the courses whose content this run changed.
export interface SeedReport {
  /** Courses where this run inserted a lesson or wrote changed content: they need a RAG re-index. */
  changedCourses: { tenantId: string; courseId: string; courseSlug: string }[];
  /** Lessons left alone because they were edited in the app (a warning is open for each). */
  drifted: { courseSlug: string; lessonSlug: string; acknowledged: boolean }[];
  /** Lessons written for the first time since migration 0074 (no seed_hash yet). */
  baselined: number;
}
const report: SeedReport = { changedCourses: [], drifted: [], baselined: 0 };
export function seedReport(): SeedReport {
  return report;
}

// Reusable seeder for any authored course (Ed.L.D., cyber, FAA when it lands, more
// languages). Upserts the course (refreshing title/description) and its lessons by
// the partial (course_id, slug) unique index — so lesson IDs survive a re-seed and
// embeddings/progress are not orphaned. Returns the course id.
export async function seedAuthoredCourse(
  db: NeonDatabase<typeof schema>,
  opts: {
    tenantId: string;
    instructorId: string;
    slug: string;
    course: AuthoredCourse;
    category?: string;
    /** Extra categories the course ALSO appears under (src/lib/course-categories.ts). Applied on
     *  FIRST INSERT ONLY, exactly like `category`: after that the owner edits them in course
     *  settings, and a re-seed must not undo that. Normalised against `category` on the way in. */
    additionalCategories?: string[];
    navigationMode?: "linear" | "cyoa";
    seasonNumber?: number;
    requiresAgeGate?: boolean;
    /** Track this course belongs to (courses.series_slug / series_title). A SEASON is BVC's
     *  broadcast ordering; a SERIES is a track that cuts across seasons, which is what the
     *  BVC Sommelier courses are. Set both or neither. */
    seriesSlug?: string;
    seriesTitle?: string;
    /** 1-based position within the series. Without it a series can say what belongs together but
     *  not what comes first, which is the gap that made the sommelier three unorderable. */
    seriesOrder?: number;
    /** Course code, rendered as a badge everywhere a card appears (STORY-00). `seriesCode` is the
     *  series prefix, `seriesPosition` is the grammar in src/lib/series-code.ts: "00" start here,
     *  "01".."98" a linear step, "T1"/"P2" a step on a parallel track, "99" capstone. Give
     *  `seriesTrack` a human name whenever the position carries a letter, or the badge says "T1"
     *  with nothing to tell a learner what T is. Validated by scripts/check-series-codes.ts. */
    seriesCode?: string;
    seriesPosition?: string;
    seriesTrack?: string;
    /** How many leading lessons are free preview. Defaults to 1, the historical behaviour.
     *  A paid course whose first lesson is housekeeping needs 2-3 to show real teaching before
     *  the paywall. Counts from the top in authored order, quizzes included. */
    freePreviewCount?: number;
    /** Ecosystem product slugs (src/lib/ecosystem.ts) for the "Related WitUS tools" card. */
    relatedProducts?: string[];
    /** Delete existing lessons first (clean replacement, e.g. migrating over a sample). */
    replaceLessons?: boolean;
    /**
     * Initial price, applied **on FIRST INSERT ONLY** and never on a re-seed.
     *
     * Why insert-only, and do not "fix" this: `courses.price` / `priceType` are OWNER-EDITABLE at
     * /admin/pricing. If a re-seed wrote them, every `pnpm seed:courses` would silently revert every
     * price BAM had set, which is the kind of bug that is invisible until a paid course has been
     * quietly free for a week. The refresh branch below therefore does not include these.
     *
     * Set it when a course is free BY DESIGN (a series funnel) rather than free by accident. Without
     * it a new course takes the schema default, which is also free, and the two are indistinguishable
     * in the code: one is a decision, the other is nobody having decided yet. See FREE_BY_DESIGN in
     * src/lib/course-pricing.ts.
     */
    price?: number;
    priceType?: "free" | "one_time" | "subscription";
    /**
     * Every course is inserted PRIVATE and UNPUBLISHED (NEW_COURSE_STATE in
     * src/lib/course-visibility.ts, BAM 2026-10-28), so the only accepted value is "private", kept so
     * a registration can say out loud that it is private by design. A registration can no longer
     * make a course public: the platform owner does that with the Make public switch on the course's
     * /teach page, after vetting. Insert-only like `price`: a re-seed never touches visibility or
     * publishing, so a course the owner opened stays open (the WELL series' public flip, plans/67).
     */
    visibility?: "private";
    /** Insert-only, with `visibility`: the honest banner reason on a held course. */
    publishHoldReason?: string;
    /** Insert as OWNER-ONLY (courses.owner_only): closed to the school's brand_admins. The private
     *  pipeline (scripts/seed-local-private.ts) sets it and re-asserts it on every run. */
    ownerOnly?: true;
  },
): Promise<string> {
  const { tenantId, instructorId, slug, course, category } = opts;
  const navigationMode = opts.navigationMode ?? "linear";
  const extra = {
    ...(opts.seasonNumber != null ? { seasonNumber: opts.seasonNumber } : {}),
    ...(opts.requiresAgeGate != null ? { requiresAgeGate: opts.requiresAgeGate } : {}),
    ...(opts.seriesSlug != null ? { seriesSlug: opts.seriesSlug } : {}),
    ...(opts.seriesTitle != null ? { seriesTitle: opts.seriesTitle } : {}),
    ...(opts.seriesOrder != null ? { seriesOrder: opts.seriesOrder } : {}),
    ...(opts.seriesCode != null ? { seriesCode: opts.seriesCode } : {}),
    ...(opts.seriesPosition != null ? { seriesPosition: opts.seriesPosition } : {}),
    ...(opts.seriesTrack != null ? { seriesTrack: opts.seriesTrack } : {}),
    ...(opts.relatedProducts != null ? { relatedProducts: opts.relatedProducts } : {}),
  };

  const existing = await db
    .select({ id: schema.courses.id, instructorId: schema.courses.instructorId })
    .from(schema.courses)
    .where(and(eq(schema.courses.tenantId, tenantId), eq(schema.courses.slug, slug)))
    .limit(1);

  let courseId = existing[0]?.id;
  if (!courseId) {
    const [row] = await db
      .insert(schema.courses)
      .values({
        tenantId,
        instructorId,
        title: course.title,
        slug,
        description: course.description,
        category,
        additionalCategories: normalizeAdditionalCategories(category, opts.additionalCategories),
        ...(opts.publishHoldReason != null ? { publishHoldReason: opts.publishHoldReason } : {}),
        ...(opts.ownerOnly ? { ownerOnly: true } : {}),
        navigationMode,
        // Insert-only pricing (see the option's doc comment). Omitted values fall through to the
        // schema defaults, which are price "0" / priceType "free".
        ...(opts.price != null ? { price: String(opts.price) } : {}),
        ...(opts.priceType != null ? { priceType: opts.priceType } : {}),
        ...extra,
        // Born private and unpublished, always; spread last so nothing above can override it.
        ...NEW_COURSE_STATE,
      })
      .returning({ id: schema.courses.id });
    courseId = row.id;
    console.log(`+ course ${slug}`);
  } else {
    // The instructor is INSERT-ONLY once a real teacher holds the course (BAM, 2026-11-10: "owner and
    // teacher do not need to be same user, it currently is mandatory"). Until this, every re-seed wrote
    // the seeding account (the owner) back onto the course, so a school admin's assignment of a teacher
    // lasted until the next seed run. A stale seed account with no role on the school (the old
    // @trade-faculty bylines) is still repaired, and that repair is logged like any other change.
    const current = existing[0]!.instructorId;
    const nextInstructorId = (await keepsInstructor(db, tenantId, current, instructorId)) ? current : instructorId;
    await db
      .update(schema.courses)
      .set({ title: course.title, description: course.description, instructorId: nextInstructorId, ...extra })
      .where(eq(schema.courses.id, courseId));
    if (nextInstructorId !== current) {
      await db.insert(schema.courseInstructorChanges).values({
        tenantId,
        courseId,
        fromInstructorId: current,
        toInstructorId: nextInstructorId,
        actorUserId: null,
        actorRole: "seed",
        source: "seed",
      });
      console.log(`~ course ${slug}: instructor repaired (stale seed account had no role on this school)`);
    }
    if (opts.replaceLessons) {
      await db.delete(schema.lessons).where(eq(schema.lessons.courseId, courseId));
    }
    console.log(`= course ${slug} (refreshed)`);
  }

  // Sections → course modules. Distinct `section` labels (first-seen order) become
  // modules; each lesson is assigned to its module. Rebuilt on each seed (lessons keep
  // their stable IDs by slug; only the module grouping is refreshed).
  const sectionTitles: string[] = [];
  for (const l of course.lessons) {
    if (l.section && !sectionTitles.includes(l.section)) sectionTitles.push(l.section);
  }
  const moduleBySection = new Map<string, string>();
  if (sectionTitles.length) {
    await db.delete(schema.courseModules).where(eq(schema.courseModules.courseId, courseId));
    const moduleRows = await db
      .insert(schema.courseModules)
      .values(
        sectionTitles.map((title, i) => ({
          courseId: courseId as string,
          title,
          sortOrder: i + 1,
          isPublished: true,
        })),
      )
      .returning({ id: schema.courseModules.id, title: schema.courseModules.title });
    for (const m of moduleRows) moduleBySection.set(m.title, m.id);
    console.log(`  modules: ${moduleRows.length}`);
  }

  const lessonRows = course.lessons.map((l, i) => {
    // Reviewer sign-off (plans/93 section 1): the "> **Before release:**" lines become
    // `review_needs` and leave the stored text, and the lesson page draws them back as a box that
    // still begins "Before release". A body with no marker is returned unchanged. An explicit
    // `reviewNeeds` on the lesson wins over the parse (an empty list means "none").
    const parsed = parseReleaseMarkers(l.body);
    const needs = l.reviewNeeds ?? parsed.needs;
    return {
      tenantId,
      courseId: courseId as string,
      moduleId: l.section ? moduleBySection.get(l.section) ?? null : null,
      title: l.title,
      slug: l.slug,
      // An explicit `lessonType` wins: it is the only way to author a MEDIA lesson (audio, video,
      // virtual_tour), whose payload is a `contentUrl` rather than its own content field, so it
      // cannot be inferred. Otherwise infer from whichever content field is set, exactly as before,
      // leaving every previously authored course unchanged.
      lessonType:
        l.lessonType ?? (l.quiz ? "quiz" : l.exercise ? "exercise" : l.mapContent ? "map" : "text"),
      contentFormat: "markdown" as const,
      contentUrl: l.contentUrl ?? null,
      textContent: l.body == null ? null : parsed.body,
      reviewNeeds: needs.length > 0 ? needs : null,
      quizContent: l.quiz ?? null,
      exerciseContent: l.exercise ?? null,
      mapContent: l.mapContent ?? null,
      recallContent: l.recallContent ?? null,
      sortOrder: i + 1,
      isFreePreview: i < Math.max(1, opts.freePreviewCount ?? 1),
      isPublished: true,
    };
  });
  // Seed drift (plans/97 Q5): read what is there first, so a lesson edited in the app since the last
  // seed is left alone and reported instead of overwritten. A replaceLessons run deleted them above.
  const existingRows = lessonRows.length
    ? await db
        .select({
          id: schema.lessons.id,
          slug: schema.lessons.slug,
          title: schema.lessons.title,
          textContent: schema.lessons.textContent,
          contentUrl: schema.lessons.contentUrl,
          quizContent: schema.lessons.quizContent,
          exerciseContent: schema.lessons.exerciseContent,
          mapContent: schema.lessons.mapContent,
          recallContent: schema.lessons.recallContent,
          seedHash: schema.lessons.seedHash,
        })
        .from(schema.lessons)
        .where(eq(schema.lessons.courseId, courseId))
    : [];
  const existingBySlug = new Map(existingRows.filter((r) => r.slug).map((r) => [r.slug as string, r]));
  const drifts = existingRows.length
    ? await db
        .select()
        .from(schema.lessonSeedDrifts)
        .where(inArray(schema.lessonSeedDrifts.lessonId, existingRows.map((r) => r.id)))
    : [];
  const driftByLesson = new Map(drifts.map((d) => [d.lessonId, d]));

  const toWrite: (typeof lessonRows[number] & { seedHash: string })[] = [];
  const skipped: { id: string; sortOrder: number; moduleId: string | null }[] = [];
  let contentChanged = false;
  for (const row of lessonRows) {
    const file: SeedContent = seedContentOf(row);
    const fileHash = seedContentHash(file);
    const existing = existingBySlug.get(row.slug);
    const appHash = existing ? seedContentHash(seedContentOf(existing as SeedContent)) : undefined;
    const drift = existing ? (driftByLesson.get(existing.id) ?? null) : null;
    const action = decideSeedAction({ seedHash: existing ? existing.seedHash : undefined, appHash, fileHash, drift });
    if (action === "write") {
      if (existing && existing.seedHash == null) report.baselined++;
      if (!existing || appHash !== fileHash) contentChanged = true;
      toWrite.push({ ...row, seedHash: fileHash });
      if (drift) await db.delete(schema.lessonSeedDrifts).where(eq(schema.lessonSeedDrifts.id, drift.id));
      continue;
    }
    // Edited in the app: keep its content; still follow the file's order and sections.
    skipped.push({ id: existing!.id, sortOrder: row.sortOrder, moduleId: row.moduleId });
    report.drifted.push({ courseSlug: slug, lessonSlug: row.slug, acknowledged: action === "skip_kept" });
    if (action === "skip_report") {
      const reopen = drift?.fileHash !== fileHash; // a newer file version reopens an acknowledged warning
      await db
        .insert(schema.lessonSeedDrifts)
        .values({ tenantId, courseId, lessonId: existing!.id, fileHash, appHash: appHash!, fileContent: file })
        .onConflictDoUpdate({
          target: [schema.lessonSeedDrifts.lessonId],
          set: {
            fileHash,
            appHash: appHash!,
            fileContent: file,
            lastCheckedAt: new Date(),
            ...(reopen ? { resolution: null, resolvedAt: null, resolvedBy: null, detectedAt: new Date() } : {}),
          },
        });
      console.warn(`  ! ${slug}/${row.slug}: edited in the app since the last seed; left as is (warning on /teach)`);
    }
  }
  for (const k of skipped) {
    await db
      .update(schema.lessons)
      .set({ sortOrder: k.sortOrder, moduleId: k.moduleId })
      .where(eq(schema.lessons.id, k.id));
  }
  if (contentChanged) report.changedCourses.push({ tenantId, courseId, courseSlug: slug });

  if (toWrite.length) {
    await db
      .insert(schema.lessons)
      .values(toWrite)
      .onConflictDoUpdate({
        target: [schema.lessons.courseId, schema.lessons.slug],
        targetWhere: sql`slug is not null`,
        set: {
          title: sql`excluded.title`,
          textContent: sql`excluded.text_content`,
          quizContent: sql`excluded.quiz_content`,
          exerciseContent: sql`excluded.exercise_content`,
          mapContent: sql`excluded.map_content`,
          recallContent: sql`excluded.recall_content`,
          // Rewritten every seed, like the text it was parsed from: removing a marker from the
          // course file removes the need. Verdicts live in lesson_reviews and are never touched
          // here; a changed text resets them on read (src/lib/lesson-review.ts).
          reviewNeeds: sql`excluded.review_needs`,
          sortOrder: sql`excluded.sort_order`,
          moduleId: sql`excluded.module_id`,
          isFreePreview: sql`excluded.is_free_preview`,
          lessonType: sql`excluded.lesson_type`,
          // Load-bearing for the route-course series: a site course ships WITHOUT its 360 tour and
          // gains it later (plans/37 §1). Without this line the re-seed would keep the old NULL
          // url, so adding a tour to an already-seeded lesson would silently do nothing.
          contentUrl: sql`excluded.content_url`,
          contentFormat: sql`excluded.content_format`,
          isPublished: sql`excluded.is_published`,
          // What this seed wrote, so the next one can tell an in-app edit from an unchanged lesson.
          seedHash: sql`excluded.seed_hash`,
          updatedAt: new Date(),
        },
      });
    console.log(`  lessons: ${toWrite.length} (upserted)${skipped.length ? `, ${skipped.length} left as edited in the app` : ""}`);
  }
  return courseId;
}

/**
 * Does the course's current instructor stay through this re-seed? Yes when they are a teacher or admin
 * of the school, a platform owner, or the seeding account itself (src/lib/course-instructor.ts,
 * keepsCurrentInstructor). The membership is read on THIS tenant only.
 */
export async function keepsInstructor(
  db: NeonDatabase<typeof schema>,
  tenantId: string,
  currentInstructorId: string,
  seedInstructorId: string,
): Promise<boolean> {
  if (currentInstructorId === seedInstructorId) return true;
  const [membership] = await db
    .select({ role: schema.tenantMemberships.role })
    .from(schema.tenantMemberships)
    .where(and(eq(schema.tenantMemberships.tenantId, tenantId), eq(schema.tenantMemberships.userId, currentInstructorId)))
    .limit(1);
  const [profile] = await db
    .select({ owner: schema.userProfiles.isPlatformOwner })
    .from(schema.userProfiles)
    .where(eq(schema.userProfiles.userId, currentInstructorId))
    .limit(1);
  return keepsCurrentInstructor({
    currentInstructorId,
    seedInstructorId,
    currentRole: (membership?.role as "learner" | "instructor" | "brand_admin" | undefined) ?? null,
    currentIsPlatformOwner: profile?.owner ?? false,
  });
}
