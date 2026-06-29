import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getInstructorProfile } from "@/db/queries/authoring";
import { CourseCard } from "@/components/course-card";

type Params = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { username } = await params;
  const tenant = await requireTenant();
  const data = await getInstructorProfile(tenant.id, username);
  return { title: data?.profile.displayName ?? username };
}

// Profile shows ONLY this tenant's published courses for the instructor. An
// instructor with no courses here 404s — global usernames can't be probed.
export default async function InstructorProfilePage({ params }: Params) {
  const { username } = await params;
  const tenant = await requireTenant();
  const data = await getInstructorProfile(tenant.id, username);
  if (!data) notFound();

  const { profile, courses } = data;
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/instructors" className="text-sm text-neutral-500 hover:underline">
        ← All instructors
      </Link>
      <div className="mt-4 flex items-center gap-4">
        {profile.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={profile.avatarUrl} alt={profile.displayName ?? "Instructor"} className="h-16 w-16 rounded-full object-cover" />
        ) : null}
        <div>
          <h1 className="text-3xl font-bold">{profile.displayName ?? profile.username}</h1>
          {profile.username ? <p className="text-sm text-neutral-500">@{profile.username}</p> : null}
        </div>
      </div>
      {profile.bio ? (
        <p className="mt-3 max-w-2xl text-neutral-700 dark:text-neutral-300">{profile.bio}</p>
      ) : null}
      {(() => {
        const l = profile.links ?? {};
        const items = [
          l.website ? { label: "Website", url: l.website } : null,
          l.portfolio ? { label: "Portfolio", url: l.portfolio } : null,
          l.linkedin ? { label: "LinkedIn", url: l.linkedin } : null,
          ...(l.custom ?? []),
        ].filter((x): x is { label: string; url: string } => Boolean(x));
        return items.length ? (
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            {items.map((it) => (
              <a key={it.url} href={it.url} target="_blank" rel="noreferrer" className="underline" style={{ color: "var(--accent)" }}>
                {it.label}
              </a>
            ))}
          </div>
        ) : null;
      })()}

      <h2 className="mt-8 mb-3 text-lg font-semibold">Courses</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </main>
  );
}
