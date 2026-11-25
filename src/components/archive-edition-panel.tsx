"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { DEFAULT_ARCHIVED_REASON_TEMPLATE } from "@/lib/archived-edition";

// The owner's archive control on /teach/[courseId] (plans/101 section 5). Rendered for the platform
// owner only; POST /api/courses/[id]/archive re-checks that and makes every decision on the stored
// rows (src/lib/archive-course.ts), so this panel is a form, never the judge. Preview first: the
// first click asks the route for a dry run and shows the two slug moves and the label; the second
// click writes. After a write the page is reloaded by course id, because the slug it was opened
// under has just moved.
//
// Already archived: the panel states the fact and links the replacement, and offers nothing else.
// Un-archiving is deliberately not a button: the operation renamed two slugs, and reversing it is a
// decision for the owner with the script, not a click.

export interface ReplacementOption {
  id: string;
  title: string;
  slug: string;
}

export function ArchiveEditionPanel({
  courseId,
  courseSlug,
  archivedAt,
  replacement,
  options,
}: {
  courseId: string;
  courseSlug: string | null;
  archivedAt: string | null;
  /** The replacement, when this course is already archived. */
  replacement: { title: string; href: string } | null;
  /** Courses this one could be archived in favour of: same tenant, published, not archived. */
  options: ReplacementOption[];
}) {
  const router = useRouter();
  const ids = useId();
  const [replacementId, setReplacementId] = useState("");
  const [reason, setReason] = useState("");
  const [preview, setPreview] = useState<null | {
    old: { slugBefore: string; slugAfter: string };
    replacement: { title: string; slugBefore: string; slugAfter: string };
    reason: string;
  }>(null);
  const [state, setState] = useState<"idle" | "working" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  if (archivedAt) {
    return (
      <section className="rounded-lg border border-amber-400 p-4 text-sm dark:border-amber-600">
        <h2 className="font-semibold">Archived edition</h2>
        <p className="mt-1 text-neutral-700 dark:text-neutral-300">
          Archived on {archivedAt.slice(0, 10)}. It takes no new enrollments; everyone already enrolled keeps
          their progress, quiz attempts, notes and submissions.
          {replacement ? (
            <>
              {" "}
              Replaced by{" "}
              <Link href={replacement.href} className="underline underline-offset-2">
                {replacement.title}
              </Link>
              .
            </>
          ) : null}
        </p>
      </section>
    );
  }

  async function submit(dryRun: boolean) {
    if (!replacementId) return;
    setState("working");
    setError(null);
    const r = await fetch(`/api/courses/${courseId}/archive`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        replacementCourseId: replacementId,
        ...(reason.trim() ? { reason: reason.trim() } : {}),
        dryRun,
      }),
    }).catch(() => null);
    const body = (await r?.json().catch(() => null)) as
      | { error?: string; plan?: NonNullable<typeof preview> & { written: boolean } }
      | null;
    if (!r?.ok || !body?.plan) {
      setError(body?.error ?? "Could not archive this course. Try again.");
      setState("error");
      return;
    }
    if (dryRun) {
      setPreview(body.plan);
      setState("idle");
      return;
    }
    // The slug this page was opened under has just moved: reload by id, which still resolves.
    router.push(`/teach/${courseId}`);
    router.refresh();
  }

  return (
    <details className="rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
      <summary className="cursor-pointer font-semibold">Archive this edition</summary>
      <p className="mt-2 text-neutral-700 dark:text-neutral-300">
        For a course rebuilt under the course method. The replacement takes this course&apos;s slug
        {courseSlug ? (
          <>
            {" "}
            (<span className="font-mono">{courseSlug}</span>)
          </>
        ) : null}
        , this course moves to <span className="font-mono">{courseSlug ?? "<slug>"}-archived-{new Date().getUTCFullYear()}</span>,
        leaves the catalog, the counts and the sitemap, and takes no new enrollments. Everyone enrolled
        keeps their progress. Owner only; the same operation is <span className="font-mono">scripts/archive-course.ts</span>.
      </p>
      {options.length === 0 ? (
        <p className="mt-3 text-neutral-600">No published course on this school could replace it yet.</p>
      ) : (
        <div className="mt-3 space-y-3">
          <div>
            <label htmlFor={`${ids}-replacement`} className="block font-medium">
              Replacement course
            </label>
            <select
              id={`${ids}-replacement`}
              value={replacementId}
              onChange={(e) => {
                setReplacementId(e.target.value);
                setPreview(null);
              }}
              className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
            >
              <option value="">Choose the course that replaces this one</option>
              {options.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.title} ({o.slug})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`${ids}-reason`} className="block font-medium">
              Banner text (optional)
            </label>
            <textarea
              id={`${ids}-reason`}
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
                setPreview(null);
              }}
              rows={3}
              placeholder={DEFAULT_ARCHIVED_REASON_TEMPLATE}
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
            />
            <p className="mt-1 text-xs text-neutral-600">
              Leave empty for the default label, with the replacement&apos;s title and today&apos;s date filled in.
            </p>
          </div>
          {preview ? (
            <div className="rounded-md border border-amber-400 bg-amber-50 p-3 dark:border-amber-600 dark:bg-amber-950/40">
              <p className="font-medium">What will change</p>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li>
                  This course: <span className="font-mono">{preview.old.slugBefore}</span> becomes{" "}
                  <span className="font-mono">{preview.old.slugAfter}</span>, archived today.
                </li>
                <li>
                  {preview.replacement.title}: <span className="font-mono">{preview.replacement.slugBefore}</span> becomes{" "}
                  <span className="font-mono">{preview.replacement.slugAfter}</span>.
                </li>
                <li>Banner: {preview.reason}</li>
              </ul>
            </div>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => submit(true)}
              disabled={!replacementId || state === "working"}
              className="min-h-11 rounded-md border border-current px-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
            >
              {state === "working" && !preview ? "Checking" : "Preview"}
            </button>
            {preview ? (
              <button
                type="button"
                onClick={() => submit(false)}
                disabled={state === "working"}
                className="min-h-11 rounded-md bg-amber-700 px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
              >
                {state === "working" ? "Archiving" : "Archive this edition"}
              </button>
            ) : null}
          </div>
          {error ? (
            <p role="alert" className="text-red-700 dark:text-red-400">
              {error}
            </p>
          ) : null}
        </div>
      )}
    </details>
  );
}
