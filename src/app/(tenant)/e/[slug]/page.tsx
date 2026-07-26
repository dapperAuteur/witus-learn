import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { listCourses } from "@/db/queries/catalog";
import { getEntity } from "@/lib/entities";

type Params = { params: Promise<{ slug: string }> };

const KIND_LABEL: Record<string, string> = {
  person: "Person",
  case: "Court case",
  law: "Law",
  place: "Place",
  event: "Event",
  organization: "Organization",
  concept: "Concept",
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const e = getEntity(slug);
  if (!e) return { title: "Not found" };
  return { title: e.name, description: e.description };
}

// An entity page (plans/45 Part 3): every course that touches this person/case/law, with each course's
// own take. Tenant-scoped: only the courses the tenant PUBLISHES are shown, so nothing links to a
// course a school does not have. 404s when the tenant has none of them (never redirects).
export default async function EntityPage({ params }: Params) {
  const { slug } = await params;
  const entity = getEntity(slug);
  if (!entity) notFound();

  const sdb = await getScopedDb();
  const courses = await listCourses(sdb.tenantId);
  const bySlug = new Map(courses.map((c) => [c.slug, c] as const));

  const links = entity.courses.flatMap((l) => {
    const c = bySlug.get(l.courseSlug);
    return c ? [{ id: c.id, title: c.title, note: l.note }] : [];
  });
  if (links.length === 0) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
        {KIND_LABEL[entity.kind] ?? "Entity"}
      </p>
      <h1 className="mt-1 text-3xl font-bold">{entity.name}</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">{entity.description}</p>
      <p className="mt-3 text-sm text-neutral-500">
        {links.length === 1
          ? "Covered in this course:"
          : `Covered across ${links.length} courses, each from its own angle:`}
      </p>

      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.id} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <Link href={`/course/${l.id}`} className="font-medium hover:underline">
              {l.title}
            </Link>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{l.note}</p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm">
        <Link href="/courses" className="underline" style={{ color: "var(--accent)" }}>
          Browse all courses
        </Link>
      </p>
    </main>
  );
}
