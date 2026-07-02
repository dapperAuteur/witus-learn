import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { brandName } from "@/lib/branding";
import { getSession } from "@/lib/session";
import { isEnrolled } from "@/db/queries/enrollment";
import { listLiveForViewer } from "@/db/queries/live";
import { getStreamSettings } from "@/db/queries/stream-settings";
import { LivePlayer } from "@/components/live-player";

export async function generateMetadata(): Promise<Metadata> {
  const sdb = await getScopedDb();
  return { title: `Live — ${brandName(sdb.tenant)}` };
}

// Live classes for this school: live now, upcoming, and recordings. Tenant-scoped;
// each session is gated by its visibility (public / signed-in / enrolled).
export default async function LivePage() {
  const sdb = await getScopedDb();
  const session = await getSession();
  const sessions = await listLiveForViewer(sdb.tenantId);

  // Visibility gate per session.
  const visible = [];
  for (const s of sessions) {
    if (s.visibility === "public") visible.push(s);
    else if (!session) continue;
    else if (s.visibility === "members") visible.push(s);
    else if (s.visibility === "enrolled") {
      if (!s.courseId || (await isEnrolled(session.user.id, s.courseId))) visible.push(s);
    }
  }

  const liveNow = visible.filter((s) => s.isLive);
  const upcoming = visible.filter((s) => !s.isLive && !s.recordingUrl);
  const recordings = visible.filter((s) => !s.isLive && s.recordingUrl);

  // Persistent "always-on" stream (admin-set): shown only when no session is live,
  // so it never competes with a live broadcast. Src is host-allowlisted at save time.
  const stream = await getStreamSettings(sdb.tenantId);
  const streamSrc = stream.embedSrc ?? stream.playbackUrl;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Live classes</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Join us live, or catch the recordings.</p>

      {liveNow.length === 0 && streamSrc ? (
        <section className="mt-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">Stream</h2>
          <LivePlayer url={streamSrc} title={`${brandName(sdb.tenant)} stream`} sandbox />
        </section>
      ) : null}

      {liveNow.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" /> Live now
          </h2>
          <div className="space-y-6">
            {liveNow.map((s) => (
              <article key={s.id}>
                <h3 className="mb-2 font-semibold">{s.title}</h3>
                {s.playbackUrl ? <LivePlayer url={s.playbackUrl} title={s.title} /> : null}
                {s.description ? <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{s.description}</p> : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {upcoming.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">Upcoming</h2>
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {upcoming.map((s) => (
              <li key={s.id} className="py-3">
                <p className="font-medium">{s.title}</p>
                {s.scheduledAt ? (
                  <p className="text-sm text-neutral-500">{new Date(s.scheduledAt).toLocaleString()}</p>
                ) : null}
                {s.description ? <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{s.description}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {recordings.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">Recordings</h2>
          <div className="space-y-6">
            {recordings.map((s) => (
              <article key={s.id}>
                <h3 className="mb-2 font-semibold">{s.title}</h3>
                {s.recordingUrl ? <LivePlayer url={s.recordingUrl} title={s.title} /> : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {visible.length === 0 ? <p className="mt-8 text-neutral-500">No live classes yet. Check back soon.</p> : null}
    </main>
  );
}
