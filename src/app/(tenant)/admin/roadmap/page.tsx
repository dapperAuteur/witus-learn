import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { ROADMAP } from "@/lib/roadmap";
import { Markdown } from "@/components/markdown";

export const metadata: Metadata = { title: "Roadmap" };

// Platform-owner internal roadmap (committed in src/lib/roadmap.ts so it renders in
// the deployed app). Update that module as work lands.
export default async function RoadmapPage() {
  await requirePlatformOwner();
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Markdown>{ROADMAP}</Markdown>
    </main>
  );
}
