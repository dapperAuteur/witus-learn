import type { Metadata } from "next";
import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { requirePlatformOwner } from "@/lib/session";
import { ownerFollowUpSummary, type FollowUpView } from "@/db/queries/release-followups";
import { FOLLOW_UP_WHEN_LABEL, blogPostUrl, needsAttention, type BlogKey } from "@/lib/release-followups";
import { publishedSlugs } from "@/lib/blog-feed";
import { FollowUpCard, type FeedState } from "@/components/follow-up-card";
import { FollowUpForm } from "@/components/follow-up-form";

export const metadata: Metadata = {
  title: "Release follow-ups",
  description: "Blog posts and tasks that fall due when a course reaches the catalog or goes live.",
};

// Owner-only. The work that waits on a course: the blog post that markets it, a task step to
// re-check once it is released, and the launch to-dos teachers added to courses that are now
// scheduled or live (so BAM hears when a teacher schedules one). Committed definitions live in
// src/lib/release-followups.ts; whether each is due is computed from THIS school's course rows on
// every load (getScopedDb resolves the tenant from the host). Claude reads them back with
// `pnpm follow-ups:list`.
export default async function FollowUpsPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const courses = await sdb.listCourses({ includeUnpublished: true });
  const { committed: views, launching } = await ownerFollowUpSummary({ id: sdb.tenantId, slug: sdb.tenant.slug }, courses);
  const titleBySlug = new Map(courses.flatMap((c) => (c.slug ? [[c.slug, c.title] as const] : [])));

  // One feed read per blog named on this page, in parallel; a failed read is "unknown", never "not
  // published".
  const blogs = [...new Set(views.flatMap((v) => (v.followUp.blogPost ? [v.followUp.blogPost.blog] : [])))];
  const feeds = new Map<BlogKey, Set<string> | null>(
    await Promise.all(blogs.map(async (b) => [b, await publishedSlugs(b)] as const)),
  );
  const feedFor = (v: FollowUpView): FeedState | null => {
    const post = v.followUp.blogPost;
    if (!post) return null;
    const slugs = feeds.get(post.blog);
    if (!slugs) return "unknown";
    return slugs.has(post.slug) ? "listed" : "not-listed";
  };

  const dueNow = views.filter((v) => needsAttention(v.due, v.status));
  const waiting = views.filter((v) => v.status === "open" && !v.due.due);
  const closed = views.filter((v) => v.status !== "open");

  const card = (v: FollowUpView) => {
    const feed = feedFor(v);
    return (
      <li key={v.followUp.key}>
        <FollowUpCard
          followUp={v.followUp}
          due={v.due}
          status={v.status}
          note={v.row?.note ?? null}
          courseTitle={(slug) => titleBySlug.get(slug) ?? null}
          feed={feed}
        >
          <FollowUpForm
            followupKey={v.followUp.key}
            initialStatus={v.status}
            initialNote={v.row?.note ?? ""}
            updatedAt={v.row?.updatedAt ? v.row.updatedAt.toISOString() : null}
            suggestedNote={
              feed === "listed" && v.followUp.blogPost ? `Published: ${blogPostUrl(v.followUp.blogPost)}` : undefined
            }
          />
        </FollowUpCard>
      </li>
    );
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Release follow-ups</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        The work that waits on a course: the blog post that markets it, and the tasks to do once it
        reaches the catalog or goes live. Each one falls due on its own when its courses get there,
        whoever released them.
      </p>
      <p className="mt-2 text-sm font-medium">
        {dueNow.length} due now, {waiting.length} waiting on a course, {closed.length} closed;{" "}
        {launching.length} {launching.length === 1 ? "course" : "courses"} being launched with open to-dos.
      </p>
      <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
        A follow-up cannot be closed without saying what was done. For a blog post, that is its live
        URL; this page checks the blog&rsquo;s feed and fills it in when the post is already listed.
      </p>

      <section aria-labelledby="fu-due" className="mt-6">
        <h2 id="fu-due" className="text-lg font-semibold">Due now</h2>
        {dueNow.length ? (
          <ul className="mt-3 space-y-4">{dueNow.map(card)}</ul>
        ) : (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Nothing is due.</p>
        )}
      </section>

      <section aria-labelledby="fu-launching" className="mt-8">
        <h2 id="fu-launching" className="text-lg font-semibold">Courses being launched</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Courses someone has scheduled or made live, with launch to-dos still open on their page.
          Each teacher closes their own items there.
        </p>
        {launching.length ? (
          <ul className="mt-3 space-y-4">
            {launching.map((l) => (
              <li key={l.course.id} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                <h3 className="text-base font-semibold">
                  <Link href={`/teach/${l.course.slug ?? l.course.id}`} className="underline underline-offset-2">
                    {l.course.title}
                  </Link>{" "}
                  <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400">
                    ({l.course.stage === "live" ? "live" : "scheduled"})
                  </span>
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm">
                  {l.todos.map((t) => (
                    <li key={t.id}>
                      {t.title}
                      {t.kind === "blog-post" && t.blogName ? <> on {t.blogName}</> : null}
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {t.due ? " (due now)" : ` (due ${FOLLOW_UP_WHEN_LABEL[t.when]})`}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">None.</p>
        )}
      </section>

      <section aria-labelledby="fu-waiting" className="mt-8">
        <h2 id="fu-waiting" className="text-lg font-semibold">Waiting on a course</h2>
        {waiting.length ? (
          <ul className="mt-3 space-y-4">{waiting.map(card)}</ul>
        ) : (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">None.</p>
        )}
      </section>

      {closed.length ? (
        <details className="group mt-8 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12">
            <span aria-hidden="true" className="text-xs transition-transform group-open:rotate-90">
              ▶
            </span>
            <h2 className="text-lg font-semibold">Closed ({closed.length})</h2>
          </summary>
          <ul className="space-y-4 px-4 pt-2 pb-4">{closed.map(card)}</ul>
        </details>
      ) : null}
    </main>
  );
}
