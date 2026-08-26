import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { canEditCourse } from "@/lib/api";
import { getSession } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";
import { getSiteUrl } from "@/lib/site-url";
import { buildEmbedSnippet } from "@/lib/embed-card";
import { isVettingLocked } from "@/lib/vetting";
import { EmbedSnippetCopy } from "@/components/embed-snippet";

export const metadata: Metadata = { title: "Embed this course" };

/**
 * Snippet builder for the PUBLIC paste-anywhere embed (/embed/card/[id]) — the instructor-facing
 * half of plans/embeddable-widget-backlog.md capability 2. Generates a plain-HTML iframe snippet
 * anyone can paste into any third-party site: NO API key anywhere in it (keys are server-side
 * secrets for the /api/v1 trusted-consumer path and must never appear in pasteable HTML), no
 * script tag, no cookies. Edit-gated like the sibling /teach/[courseId] pages.
 */
export default async function EmbedSnippetPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId: courseParam } = await params;
  const session = await getSession();
  if (!session) redirect("/login");

  const sdb = await getScopedDb();
  const course = await sdb.getCourseByIdOrSlug(courseParam);
  if (!course) notFound();
  if (!(await canEditCourse(session, sdb.tenantId, course))) notFound();

  const tenant = await requireTenant();
  const siteUrl = await getSiteUrl();
  const courseHref = `/teach/${course.slug ?? course.id}`;
  const isPublicLive = course.isPublished && course.visibility === "public";

  const snippet = buildEmbedSnippet({
    siteUrl,
    courseId: course.id,
    courseTitle: course.title,
    tenantName: tenant.name,
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href={courseHref} className="text-sm text-neutral-600 hover:underline">
        ← Manage course
      </Link>

      <h1 className="mt-4 text-2xl font-bold">Embed this course anywhere</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Paste the snippet below into any web page (a blog, a co-op site, a newsletter page) to show
        a small {tenant.name} card for <strong>{course.title}</strong>: title, description, price,
        and a link back to the course here. It needs no API key and sets no cookies; visitors who
        click it land on your course page, and those click-throughs show up in this course&apos;s
        Link usage panel.
      </p>

      {!isPublicLive ? (
        <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm dark:border-amber-800 dark:bg-amber-950/40">
          <p className="font-semibold text-amber-900 dark:text-amber-200">
            ⚠️ This embed shows nothing yet
          </p>
          <p className="mt-1 text-amber-800 dark:text-amber-300">
            The public card only renders <strong>published</strong> courses with{" "}
            <strong>public</strong> visibility. Right now this course is{" "}
            {course.isPublished ? `visibility "${course.visibility}"` : "not published"}, so the
            embed shows a not-found page wherever it is pasted. You can still copy the snippet: it
            starts working the moment the course is published and public.
          </p>
        </div>
      ) : isVettingLocked(course) ? (
        <div className="mt-4 rounded-lg border border-sky-300 bg-sky-50 p-4 text-sm dark:border-sky-800 dark:bg-sky-950/40">
          <p className="font-semibold text-sky-900 dark:text-sky-200">🕒 Shows the Coming-soon card</p>
          <p className="mt-1 text-sky-800 dark:text-sky-300">
            Until this course is vetted, the embed shows its public Coming-soon face: title and
            description, no price. It switches to the full card automatically when the course
            opens.
          </p>
        </div>
      ) : null}

      <section className="mt-8" aria-labelledby="embed-snippet-heading">
        <h2 id="embed-snippet-heading" className="sr-only">
          Embed snippet
        </h2>
        <EmbedSnippetCopy snippet={snippet} />
      </section>

      {isPublicLive ? (
        <section className="mt-8" aria-labelledby="embed-preview-heading">
          <h2 id="embed-preview-heading" className="text-sm font-medium">
            Preview
          </h2>
          <div className="mt-2 rounded-xl border border-dashed border-neutral-300 p-4 dark:border-neutral-700">
            <iframe
              src={`/embed/card/${course.id}`}
              title={`Embed preview: ${course.title}`}
              width="100%"
              height="360"
              loading="lazy"
              className="max-w-[480px] rounded-2xl border border-neutral-200 dark:border-neutral-800"
            />
          </div>
        </section>
      ) : null}

      <p className="mt-8 text-xs text-neutral-600">
        Looking for a deeper integration (another app reading your catalog as JSON)? That is the
        API-key path; see the help article &quot;Embed your courses in another app&quot; under
        /help.
      </p>
    </main>
  );
}
