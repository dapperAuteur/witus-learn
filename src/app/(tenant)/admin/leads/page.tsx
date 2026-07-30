import type { Metadata } from "next";
import { requireBrandAdmin } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { COURSE_NOTIFY_SOURCE, listLeads } from "@/db/queries/leads";

export const metadata: Metadata = { title: "Leads" };

const ROLE_LABELS: Record<string, string> = {
  parent: "Parent",
  teacher: "Teacher",
  homeschooler: "Homeschooler",
  school_district: "School or district",
  other: "Other",
};

// Captured leads for THIS school. Brand admins (and the owner) only; tenant-scoped.
//
// A lead is no longer just an email address: the /explore pricing form appends what the person
// actually ASKED (role, how many students, their message) to leads.inquiries. This is where a
// pricing enquiry lands — and, critically, where it is still readable when the notification email
// failed to send. So the enquiry text is rendered here in full, not summarised away.
export default async function LeadsPage() {
  const tenant = await requireTenant();
  await requireBrandAdmin(tenant.id);
  const rows = await listLeads(tenant.id);

  const withInquiries = rows.filter((l) => (l.inquiries?.length ?? 0) > 0).length;

  return (
    <main className="max-w-3xl py-10">
      <h1 className="text-2xl font-bold">Leads, {brandName(tenant)}</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {rows.length} captured
        {withInquiries > 0
          ? ` · ${withInquiries} ${withInquiries === 1 ? "has" : "have"} asked a question`
          : ""}
        .
      </p>
      {rows.length === 0 ? (
        <p className="mt-6 text-neutral-500">No leads yet.</p>
      ) : (
        <ul className="mt-6 divide-y divide-neutral-200 dark:divide-neutral-800">
          {rows.map((l) => {
            const inquiries = l.inquiries ?? [];
            return (
              <li key={l.email} className="py-3 text-sm">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                  <span className="break-all font-mono">{l.email}</span>
                  <span className="whitespace-nowrap text-neutral-500">
                    {l.source ?? "-"} · {l.createdAt.toLocaleDateString()}
                  </span>
                </div>
                {l.name ? (
                  <p className="mt-0.5 text-neutral-600 dark:text-neutral-400">{l.name}</p>
                ) : null}

                {inquiries.map((q, i) => (
                  <div
                    key={`${l.email}-${i}`}
                    className="mt-2 rounded-lg border border-neutral-200 p-3 dark:border-neutral-800"
                  >
                    <p className="text-xs text-neutral-500">
                      {[
                        q.role ? (ROLE_LABELS[q.role] ?? q.role) : null,
                        q.students != null
                          ? `${q.students} ${q.students === 1 ? "student" : "students"}`
                          : null,
                        new Date(q.at).toLocaleString(),
                      ]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    {/* A "notify me when this course opens" signup from an unvetted course's
                        landing page carries no message, so name the course instead: without it the
                        entry would read as an empty enquiry. */}
                    {q.source === COURSE_NOTIFY_SOURCE ? (
                      <p className="mt-1.5 text-neutral-700 dark:text-neutral-300">
                        🕒 Waiting for <strong>{q.courseTitle ?? "a course"}</strong> to open.
                      </p>
                    ) : q.message ? (
                      <p className="mt-1.5 whitespace-pre-wrap wrap-break-word text-neutral-700 dark:text-neutral-300">
                        {q.message}
                      </p>
                    ) : (
                      <p className="mt-1.5 text-neutral-500">No message.</p>
                    )}
                    <a
                      href={`mailto:${l.email}?subject=${encodeURIComponent(
                        q.source === COURSE_NOTIFY_SOURCE
                          ? `${brandName(tenant)}, ${q.courseTitle ?? "your course"}`
                          : `${brandName(tenant)}, pricing`,
                      )}`}
                      className="mt-2 inline-block font-medium underline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ color: "var(--accent)" }}
                    >
                      Reply →
                    </a>
                  </div>
                ))}
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
