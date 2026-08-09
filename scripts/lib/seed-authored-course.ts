import { and, eq, sql } from "drizzle-orm";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";
import * as schema from "../../src/db/schema";
import type { AuthoredCourse } from "../data/authored-course";

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
    .select({ id: schema.courses.id })
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
        isPublished: true,
        publishedAt: new Date(),
        navigationMode,
        // Insert-only pricing (see the option's doc comment). Omitted values fall through to the
        // schema defaults, which are price "0" / priceType "free".
        ...(opts.price != null ? { price: String(opts.price) } : {}),
        ...(opts.priceType != null ? { priceType: opts.priceType } : {}),
        ...extra,
      })
      .returning({ id: schema.courses.id });
    courseId = row.id;
    console.log(`+ course ${slug}`);
  } else {
    await db
      .update(schema.courses)
      .set({ title: course.title, description: course.description, instructorId, ...extra })
      .where(eq(schema.courses.id, courseId));
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

  const lessonRows = course.lessons.map((l, i) => ({
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
    textContent: l.body ?? null,
    quizContent: l.quiz ?? null,
    exerciseContent: l.exercise ?? null,
    mapContent: l.mapContent ?? null,
    recallContent: l.recallContent ?? null,
    sortOrder: i + 1,
    isFreePreview: i < Math.max(1, opts.freePreviewCount ?? 1),
    isPublished: true,
  }));
  if (lessonRows.length) {
    await db
      .insert(schema.lessons)
      .values(lessonRows)
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
          updatedAt: new Date(),
        },
      });
    console.log(`  lessons: ${lessonRows.length} (upserted)`);
  }
  return courseId;
}
