import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";
import { listAllTenants, listCourseOptions, listLiveForAdmin } from "@/db/queries/live";
import { getStreamSettings } from "@/db/queries/stream-settings";
import { getStreamTargets } from "@/db/queries/stream-targets";
import { LiveAdmin } from "@/components/live-admin";
import { StreamSettings } from "@/components/stream-settings";
import { StreamTargets } from "@/components/stream-targets";

export const metadata: Metadata = { title: "Live classes" };

// Platform-owner live-session management: schedule + broadcast to schools, then go
// live / set recordings for this school's sessions.
export default async function LiveAdminPage() {
  await requirePlatformOwner();
  const tenant = await requireTenant();
  const [tenants, sessions, courses, streamSettings, streamTargets] = await Promise.all([
    listAllTenants(),
    listLiveForAdmin(tenant.id),
    listCourseOptions(tenant.id),
    getStreamSettings(tenant.id),
    getStreamTargets(tenant.id),
  ]);
  const courseTitle = new Map(courses.map((c) => [c.id, c.title]));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Live classes</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Push your stream from OBS to your RTMP service, paste its player embed URL here, and broadcast
        to one or more schools. Manage each school&apos;s sessions on its own domain.
      </p>
      <div className="mt-6">
        <StreamSettings initial={streamSettings} />
      </div>

      <div className="mt-6">
        <StreamTargets initial={streamTargets} />
      </div>

      <div className="mt-6">
        <LiveAdmin
          tenants={tenants}
          currentTenantId={tenant.id}
          courses={courses}
          sessions={sessions.map((s) => ({
            id: s.id,
            title: s.title,
            isLive: s.isLive,
            visibility: s.visibility,
            recordingUrl: s.recordingUrl,
            playbackUrl: s.playbackUrl,
            courseTitle: s.courseId ? (courseTitle.get(s.courseId) ?? null) : null,
          }))}
        />
      </div>
    </main>
  );
}
