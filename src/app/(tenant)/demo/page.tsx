import Link from "next/link";
import type { Metadata } from "next";
import { ogImageUrl } from "@/lib/og";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { getDemoSchoolUrl } from "@/db/queries/demo";

const TITLE = "Try the demo";
const DESCRIPTION =
  "A live demo school and shared demo teacher account, try every teacher and admin feature on Learn.WitUS, no signup required. Data resets nightly at midnight.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: "No signup required" })],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: "No signup required" })],
  },
};

// Explains the demo teacher account + Acme Academy demo school, and links out to it.
// Only shown on Learn.WitUS itself (the recruiting tenant) — a white-label school has
// nothing to do with the shared platform demo, so this 404s everywhere else.
export default async function DemoPage() {
  const sdb = await getScopedDb();
  if (!sdb.tenant.flags.recruiting) notFound();

  const demoUrl = await getDemoSchoolUrl();

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <header className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          Live demo
        </p>
        <h1 className="mt-2 text-4xl font-bold">Try every teacher feature, free</h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          <strong>Acme Academy</strong> is a live demo school running the exact same platform as every
          real school on Learn.WitUS. A shared <strong>demo teacher account</strong> there gives you
          full access to author courses, go live, run cohorts, and see the teacher dashboard,
          <strong> no signup, no password.</strong>
        </p>
      </header>

      <section className="mb-8 rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
        <h2 className="text-lg font-semibold">What you can try</h2>
        <ul className="mt-3 space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>· Author a course, modules, lessons, quizzes, media</li>
          <li>· Go live and run a live class session</li>
          <li>· Create a cohort and invite students</li>
          <li>· See the instructor/admin dashboard</li>
          <li>· Everything a real teacher or brand admin can do, all of it, on Acme</li>
        </ul>
      </section>

      <section className="mb-8 rounded-lg border border-dashed border-neutral-300 p-5 text-sm text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
        <p>
          <strong>The demo resets every night at midnight.</strong> Whatever you create, courses,
          cohorts, live sessions, gets wiped and reseeded with a clean baseline, so every visitor
          starts fresh. Don&apos;t store anything you want to keep in the demo.
        </p>
      </section>

      <div className="text-center">
        {demoUrl ? (
          <>
            <a
              href={demoUrl}
              className="inline-block min-h-11 rounded-md px-6 py-3 text-lg font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Launch the demo school →
            </a>
            <p className="mt-3 text-sm text-neutral-600">
              Then click <strong>&ldquo;Try the demo&rdquo;</strong> on the Acme sign-in page to sign
              in as the demo teacher.
            </p>
          </>
        ) : (
          <p className="rounded-lg border border-neutral-200 px-4 py-6 text-neutral-600 dark:border-neutral-800">
            The demo school isn&apos;t published yet, check back soon.
          </p>
        )}
        <p className="mt-6">
          <Link href="/teach" className="text-sm font-medium underline" style={{ color: "var(--accent)" }}>
            Ready to run your own school instead? →
          </Link>
        </p>
      </div>
    </main>
  );
}
