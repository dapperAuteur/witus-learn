import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { brandName } from "@/lib/branding";

export const metadata: Metadata = {
  title: "The platform",
  description:
    "Learn.WitUS is the multi-tenant learning platform behind Better Vice Club and other cited, media-rich schools. Run your own on your own domain.",
};

interface Feature {
  icon: string;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    icon: "🌐",
    title: "Your own brand, your own domain",
    body:
      "Attach your own domain from the admin dashboard — the platform verifies it and handles DNS automatically. Learners never see \"WitUS\"; they see your school.",
  },
  {
    icon: "📚",
    title: "Cited, media-rich courses",
    body:
      "Every claim ties to a real source with an in-line citation and a bibliography. Lessons carry audio, video, and rich media — not just text.",
  },
  {
    icon: "🔴",
    title: "Live classes + cohorts",
    body:
      "Run live sessions, create private cohorts for a class or a homeschool pod, invite students by email, and see who's present in real time.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "A parent view, built in",
    body:
      "Parents get read-only access to their child's progress, grades, credentials, and attendance — no separate app, no spreadsheet.",
  },
  {
    icon: "🧒",
    title: "Kid-friendly login",
    body:
      "Young learners without an email sign in with a class code, an avatar, and a PIN — no password, no account for a parent to manage.",
  },
  {
    icon: "🤖",
    title: "An AI tutor, grounded in your content",
    body:
      "A built-in tutor answers questions using only what's actually taught in your courses — not the open internet.",
  },
];

// The pitch for Learn.WitUS as a product — separate from the school's own catalog
// front door (which lives at "/"). Only Learn.WitUS itself (the recruiting tenant)
// shows this; a white-label school on its own domain has no reason to advertise the
// platform underneath it, so this 404s everywhere else.
export default async function PlatformPage() {
  const sdb = await getScopedDb();
  const tenant = sdb.tenant;
  if (!tenant.flags.recruiting) notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {brandName(tenant)}
        </p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Run your own cited, media-rich school</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Learn.WitUS is a multi-tenant learning platform. You teach; we host — under your own brand,
          on your own domain, strictly isolated from every other school on the platform.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/demo"
            className="inline-block min-h-11 rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Try the live demo →
          </Link>
          <Link
            href="/teach"
            className="inline-block min-h-11 rounded-md border-2 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            Run your own school →
          </Link>
        </div>
      </header>

      <section aria-labelledby="features-heading" className="mb-12">
        <h2 id="features-heading" className="sr-only">
          Platform features
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
              <span aria-hidden className="text-2xl">
                {f.icon}
              </span>
              <h3 className="mt-2 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border-2 p-6 text-center" style={{ borderColor: "var(--accent)" }}>
        <h2 className="text-xl font-semibold">See it before you commit to anything</h2>
        <p className="mx-auto mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">
          The Acme Academy demo school lets you try every teacher and admin feature — authoring, live
          classes, cohorts, the dashboard — with a shared demo account. No signup required.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/demo"
            className="inline-block min-h-11 rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Try the live demo →
          </Link>
          <Link href="/schools" className="text-sm font-medium underline" style={{ color: "var(--accent)" }}>
            Explore our schools
          </Link>
        </div>
      </section>
    </main>
  );
}
