// Pure tile-builder for the consolidated /admin landing dashboard. Takes the tenant-scoped
// counts the page fetched (owner-only counts are null when the viewer is a brand admin, so
// their tiles are simply omitted) and returns the ordered stat tiles to render. Pure on
// purpose: the owner-filtering + link-target logic is unit-tested without a database.

import type { AdminStats } from "@/db/queries/admin-dashboard";

export interface AdminHomeCounts {
  stats: AdminStats;
  openReports: number;
  leads: number;
  /** Owner-only counts — null means "viewer is not the platform owner, don't show the tile". */
  openFeedback: number | null;
  pendingMedia: number | null;
  upcomingLive: number | null;
}

export interface AdminStatTile {
  /** Where the number links — the surface where the admin acts on it. */
  href: string;
  label: string;
  value: number;
  /** One-line context under the number (e.g. "of 12 total"). */
  hint?: string;
  /** True when a non-zero value wants attention (open queue, pending review). */
  attention?: boolean;
}

export function adminStatTiles(c: AdminHomeCounts): AdminStatTile[] {
  const s = c.stats;
  const tiles: AdminStatTile[] = [
    { href: "/admin/dashboard", label: "Learners", value: s.learners },
    { href: "/admin/dashboard", label: "Active enrollments", value: s.enrollments },
    {
      // The vetting queue, not the public catalog: this tile is where the owner goes to mark
      // courses vetted, and losing that button was a reported regression (2026-08-18). With
      // nothing waiting it still lands on /teach, the management surface.
      href: s.unvettedCourses > 0 ? "/teach?status=unvetted" : "/teach",
      label: "Courses published",
      value: s.publishedCourses,
      hint:
        `of ${s.courses} total` + (s.unvettedCourses > 0 ? ` · ${s.unvettedCourses} unvetted, review them` : ""),
      attention: s.unvettedCourses > 0,
    },
    { href: "/admin/gradebook", label: "Completions", value: s.completions },
    {
      href: "/admin/reports",
      label: "Open problem reports",
      value: c.openReports,
      attention: c.openReports > 0,
    },
    { href: "/admin/leads", label: "Interest & leads", value: c.leads },
  ];
  if (c.openFeedback !== null) {
    tiles.push({
      href: "/teach/feedback",
      label: "New curriculum feedback",
      value: c.openFeedback,
      attention: c.openFeedback > 0,
    });
  }
  if (c.pendingMedia !== null) {
    tiles.push({
      href: "/admin/media",
      label: "Media awaiting review",
      value: c.pendingMedia,
      attention: c.pendingMedia > 0,
    });
  }
  if (c.upcomingLive !== null) {
    tiles.push({ href: "/admin/live", label: "Upcoming live sessions", value: c.upcomingLive });
  }
  return tiles;
}
