import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { requirePlatformOwner } from "@/lib/session";
import {
  countByStatus,
  coursesWithPendingMedia,
  groupByCourse,
  type MediaKind,
  type MediaStatus,
} from "@/lib/media-verify";
import {
  buildLessonLinkIndex,
  courseTitleFor,
  lessonTitleFor,
  reviewLocation,
} from "@/lib/lesson-links";
import { proseAroundNeedle } from "@/lib/lesson-excerpt";
import { MediaVerifyList, type MediaAssetRow } from "@/components/media-verify-list";

export const metadata: Metadata = { title: "Media verification" };

// Owner-only. Every image, video, audio file and document uploaded for this school, previewed with
// its provenance, waiting on an approve or reject decision BEFORE the course it belongs to goes live.
//
// It is the third verification surface, and the one that covers what the other two cannot.
// /admin/citations asks whether a source says what a lesson claims; /admin/research asks the handful
// of questions that need a primary source. Neither of them ever looks at a picture. A course can be
// perfectly cited and still ship a figure with murky rights, a caption that describes a different
// photograph, or a scan too dark to read, and the first person to notice would be a paying learner.
//
// The tenant is resolved server-side from the request host by getScopedDb(), and every read goes
// through the scoped DAL, so one school's unreviewed media is invisible to every other school.

export default async function AdminMediaPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const rows = await sdb.listMediaAssets();

  // The lesson each asset illustrates, and the prose either side of it.
  //
  // A reviewer is being asked whether a caption matches a picture and whether a scan is legible
  // enough to teach from, and neither question can be answered from the picture alone: the answer
  // is in the argument the figure was put there to carry. The asset's URL appears in the lesson
  // inside its `:::figure` directive (src/lib/figures.ts), so the paragraphs around that line ARE
  // that argument, quoted from the lesson rather than summarised.
  const links = buildLessonLinkIndex(
    await sdb.listLessonLocations(rows.flatMap((a) => (a.courseSlug ? [a.courseSlug] : []))),
  );
  const bodies = await sdb.listLessonBodies(
    rows.flatMap((a) =>
      a.courseSlug && a.lessonSlug ? [{ courseSlug: a.courseSlug, lessonSlug: a.lessonSlug }] : [],
    ),
  );
  const bodyByRef = new Map(bodies.map((b) => [`${b.courseSlug} ${b.lessonSlug}`, b.text]));

  // Serialise once, then count and group the serialised rows, so the summary at the top and the
  // cards below can never disagree about what is pending. `kind` and `status` are text columns with
  // a database CHECK behind them, so the narrowing here is a restatement, not an assumption.
  const assets: MediaAssetRow[] = rows.map((a) => {
    const where = reviewLocation(links, a.courseSlug, a.lessonSlug);
    const body =
      a.courseSlug && a.lessonSlug ? (bodyByRef.get(`${a.courseSlug} ${a.lessonSlug}`) ?? null) : null;
    const around = proseAroundNeedle(body, a.url);
    return {
      id: a.id,
      courseSlug: a.courseSlug,
      lessonSlug: a.lessonSlug,
      kind: a.kind as MediaKind,
      url: a.url,
      alt: a.alt,
      caption: a.caption,
      credit: a.credit,
      rightsStatus: a.rightsStatus,
      sourceUrl: a.sourceUrl,
      status: a.status as MediaStatus,
      reviewNote: a.reviewNote,
      reviewedAt: a.reviewedAt ? a.reviewedAt.toISOString() : null,
      createdAt: a.createdAt.toISOString(),
      courseTitle: courseTitleFor(links, a.courseSlug),
      lessonTitle: lessonTitleFor(links, a.courseSlug, a.lessonSlug),
      lessonHref: where.href,
      lessonIsLinked: where.isLesson,
      locationNote: where.note,
      leadIn: around.before,
      followOn: around.after,
    };
  });

  const counts = countByStatus(assets);
  const pendingCourses = coursesWithPendingMedia(assets);
  const groups = groupByCourse(assets);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Media verification</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Every image, video, audio file and document uploaded for a course, with what it looks or
        sounds like, who made it, and what rights we hold. Approve or reject each one before its
        course goes live.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Each asset names the lesson it illustrates, links to it, and quotes the prose either side of
        it, so you can see what the figure is being asked to carry before judging it.
      </p>

      <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
          <dt className="text-xs text-neutral-600 dark:text-neutral-400">Pending</dt>
          <dd className="text-2xl font-semibold tabular-nums">{counts.pending}</dd>
        </div>
        <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
          <dt className="text-xs text-neutral-600 dark:text-neutral-400">Approved</dt>
          <dd className="text-2xl font-semibold tabular-nums">{counts.approved}</dd>
        </div>
        <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
          <dt className="text-xs text-neutral-600 dark:text-neutral-400">Rejected</dt>
          <dd className="text-2xl font-semibold tabular-nums">{counts.rejected}</dd>
        </div>
      </dl>

      <div className="mt-4 rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
        <h2 className="text-sm font-medium">Courses still waiting on media</h2>
        {pendingCourses.length === 0 ? (
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            None. Nothing registered here is waiting on a decision.
          </p>
        ) : (
          <ul className="mt-1 flex flex-wrap gap-2">
            {pendingCourses.map((slug) => (
              <li
                key={slug}
                className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-950 dark:text-amber-200"
              >
                {slug}
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
        A rejection cannot be saved without a note, and media whose rights are not established cannot
        be approved at all. Both rules exist for the reason the citation board does: a decision with
        nothing written behind it stops the next person from acting on it, and a rejected image whose
        problem was never recorded gets re-uploaded unchanged.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        The other two review lists are{" "}
        <Link href="/admin/citations" className="underline">
          Citations
        </Link>{" "}
        (does the source say what the lesson claims) and{" "}
        <Link href="/admin/research" className="underline">
          Source checks
        </Link>{" "}
        (the facts Claude could not confirm).
      </p>

      {groups.length === 0 ? (
        <p className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">
          No media registered yet. Uploads are registered by POSTing to{" "}
          <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">
            /api/admin/media
          </code>{" "}
          with the URL, the kind, and the credit, rights and source of the asset.
        </p>
      ) : (
        groups.map((g) => (
          <MediaVerifyList key={g.courseSlug} courseSlug={g.courseSlug} rows={g.assets} />
        ))
      )}
    </main>
  );
}
