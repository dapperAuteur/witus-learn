import Link from "next/link";
import type { ReactNode } from "react";
import {
  BLOGS,
  FOLLOW_UP_STATUS_LABEL,
  FOLLOW_UP_WHEN_LABEL,
  blogPostUrl,
  needsAttention,
  type CourseStage,
  type FollowUpDue,
  type FollowUpStatus,
  type ReleaseFollowUp,
} from "@/lib/release-followups";

// One release follow-up, as /admin/follow-ups and the /teach course page show it. Server-rendered,
// no state: the close form (when there is one) comes in as `children`.

export type FeedState = "listed" | "not-listed" | "unknown";

const STAGE_LABEL: Record<CourseStage, string> = {
  missing: "not in this school's catalog",
  seeded: "in the catalog, not live",
  scheduled: "scheduled, not live yet",
  live: "live",
};

const chip = "rounded-full px-2 py-0.5 text-xs font-medium";
const amber = "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200";
const grey = "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300";
const green = "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100";

export function followUpStateLabel(due: FollowUpDue, status: FollowUpStatus): { text: string; className: string } {
  if (status !== "open") return { text: FOLLOW_UP_STATUS_LABEL[status], className: green };
  if (due.due) return { text: "Due now", className: amber };
  return { text: "Waiting on a course", className: grey };
}

export function FollowUpCard({
  followUp,
  due,
  status,
  note,
  courseTitle,
  feed,
  headingLevel = 3,
  children,
}: {
  followUp: ReleaseFollowUp;
  due: FollowUpDue;
  status: FollowUpStatus;
  note: string | null;
  courseTitle: (slug: string) => string | null;
  feed: FeedState | null;
  headingLevel?: 2 | 3;
  children?: ReactNode;
}) {
  const state = followUpStateLabel(due, status);
  const H = headingLevel === 2 ? "h2" : "h3";
  const post = followUp.blogPost;
  const attention = needsAttention(due, status);

  return (
    <article
      className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
      style={attention ? { borderColor: "var(--accent)" } : undefined}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className={`${chip} ${state.className}`}>{state.text}</span>
        <span className={`${chip} ${grey}`}>{followUp.kind === "blog-post" ? "Blog post" : "Task"}</span>
        <span className="text-xs text-neutral-600 dark:text-neutral-400">
          Due {FOLLOW_UP_WHEN_LABEL[followUp.when]}
        </span>
      </div>

      <H className="mt-2 text-base font-semibold">{followUp.title}</H>

      {post ? (
        <dl className="mt-2 space-y-1 text-sm">
          <div>
            <dt className="inline font-medium">Blog: </dt>
            <dd className="inline">
              <a href={BLOGS[post.blog].home} className="underline underline-offset-2">
                {BLOGS[post.blog].name}
              </a>
              {post.ledger ? <span className="text-neutral-600 dark:text-neutral-400"> · ledger #{post.ledger}</span> : null}
            </dd>
          </div>
          <div>
            <dt className="inline font-medium">Post: </dt>
            <dd className="inline">
              &ldquo;{post.postTitle}&rdquo;{" "}
              <span className="break-all text-neutral-600 dark:text-neutral-400">({blogPostUrl(post)})</span>
            </dd>
          </div>
          {feed ? (
            <div className="text-neutral-700 dark:text-neutral-300">
              {feed === "listed"
                ? "Listed in the blog's feed, so it is published. Close this with its URL."
                : feed === "not-listed"
                  ? "Not in the blog's feed yet."
                  : "Could not read the blog's feed just now."}
            </div>
          ) : null}
        </dl>
      ) : null}

      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{followUp.detail}</p>

      <div className="mt-2 text-sm">
        <span className="font-medium">Courses: </span>
        <ul className="mt-1 list-disc pl-5">
          {followUp.courses.map((slug) => {
            const waiting = due.waitingOn.find((w) => w.slug === slug);
            const title = courseTitle(slug);
            return (
              <li key={slug}>
                {title ? (
                  <Link href={`/teach/${slug}`} className="underline underline-offset-2">
                    {title}
                  </Link>
                ) : (
                  <span>{slug}</span>
                )}
                <span className="text-neutral-600 dark:text-neutral-400">
                  {waiting ? ` (${STAGE_LABEL[waiting.stage]}; not yet ${followUp.when})` : " (ready)"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {followUp.ref ? (
        <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">Full steps: {followUp.ref}</p>
      ) : null}
      {note ? (
        <p className="mt-2 text-sm">
          <span className="font-medium">What was done: </span>
          <span className="whitespace-pre-line text-neutral-700 dark:text-neutral-300">{note}</span>
        </p>
      ) : null}

      {children}
    </article>
  );
}
