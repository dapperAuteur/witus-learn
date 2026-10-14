"use client";

import { useState } from "react";
import Link from "next/link";
import type { ProjectLeg } from "@/db/schema/field-log";
import { TOUR_CREDIT_MAX } from "@/lib/field-log-tour";
import { apiRequest, patchJson, postJson } from "./client";

// "Use in a lesson" (plans/93 section 2, tours from the field): put one of this leg's photos or
// videos into an empty tour slot of a course the viewer runs. Rendered only when the server found at
// least one such slot for this viewer (the platform owner, or a course's own instructor).
//
// Everything shown here is a PREVIEW of the server's rules: the grayed-out captures and their reasons
// come from the same tourCaptureEligibility the POST route re-runs before writing, and the lesson page
// re-runs again on every read. The publisher writes the tour directly; nothing is requested of anyone.

type Slot = {
  courseId: string;
  courseTitle: string;
  courseSlug: string | null;
  username: string | null;
  lessonId: string;
  lessonTitle: string;
  lessonSlug: string | null;
};
type TargetCapture = {
  id: string;
  kind: string;
  subject: string | null;
  storageUrl: string | null;
  eligible: boolean;
  reason: string | null;
  credit: string;
};
type Targets = { slots: Slot[]; suggestedLessonId: string | null; captures: TargetCapture[]; permissionNote: string | null };
type Published = { lessonTitle: string; courseTitle: string; href: string | null };

const field = "w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900";

function hostOf(url: string | null): string {
  if (!url) return "no link";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "invalid link";
  }
}

export function UseInLesson({
  projectId,
  leg,
  onLegUpdated,
}: {
  projectId: string;
  leg: ProjectLeg;
  onLegUpdated: (leg: ProjectLeg) => void;
}) {
  const [targets, setTargets] = useState<Targets | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [published, setPublished] = useState<Published | null>(null);
  const [permission, setPermission] = useState(leg.permissionNote ?? "");
  const [savingPermission, setSavingPermission] = useState(false);
  const [lessonId, setLessonId] = useState("");
  const [captureId, setCaptureId] = useState("");
  const [credit, setCredit] = useState("");
  const [confirming, setConfirming] = useState(false);

  const base = `/api/field-log/projects/${projectId}/legs/${leg.id}`;

  async function load() {
    setLoading(true);
    const res = await apiRequest<Targets>(`${base}/tour-targets`);
    setLoading(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    setTargets(res.data);
    setLessonId(res.data.suggestedLessonId ?? res.data.slots[0]?.lessonId ?? "");
    const first = res.data.captures.find((c) => c.eligible);
    setCaptureId(first?.id ?? "");
    setCredit(first?.credit ?? "");
  }

  function onToggle(e: React.SyntheticEvent<HTMLDetailsElement>) {
    if (e.currentTarget.open && !targets && !loading) void load();
  }

  function pickCapture(c: TargetCapture) {
    setCaptureId(c.id);
    setCredit(c.credit);
  }

  async function savePermission() {
    setSavingPermission(true);
    setError(null);
    const res = await patchJson<ProjectLeg>(base, { permissionNote: permission.trim() || null });
    setSavingPermission(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    onLegUpdated(res.data);
    await load(); // eligibility depends on the note
  }

  async function confirm() {
    if (!lessonId || !captureId) return;
    setConfirming(true);
    setError(null);
    const res = await postJson<Published>(`${base}/tour-targets`, { captureId, lessonId, credit });
    setConfirming(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    setPublished({ lessonTitle: res.data.lessonTitle, courseTitle: res.data.courseTitle, href: res.data.href });
    await load(); // the filled slot leaves the list
  }

  const byCourse = new Map<string, { title: string; slots: Slot[] }>();
  for (const s of targets?.slots ?? []) {
    const group = byCourse.get(s.courseId) ?? { title: s.courseTitle, slots: [] };
    group.slots.push(s);
    byCourse.set(s.courseId, group);
  }
  const suggested = targets?.slots.find((s) => s.lessonId === targets.suggestedLessonId) ?? null;
  const id = (name: string) => `${name}-${leg.id}`;

  return (
    <details className="mt-2 rounded-md border border-neutral-200 dark:border-neutral-800" onToggle={onToggle}>
      <summary className="flex min-h-11 cursor-pointer items-center px-3 text-sm font-medium">Use in a lesson</summary>
      <div className="space-y-4 border-t border-neutral-200 p-3 text-sm dark:border-neutral-800">
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          Put one of this stop&apos;s photos or videos into an empty tour slot in a course you run. The lesson shows
          your link, never a copy, with the credit under it. It comes off again the moment a subject&apos;s consent
          changes to declined or this stop loses its permission note.
        </p>

        {loading ? <p role="status">Loading your tour slots…</p> : null}
        {error ? (
          <p role="alert" className="rounded-md border border-red-300 bg-red-50 p-2 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
            {error}
          </p>
        ) : null}
        {published ? (
          <p role="status" className="rounded-md border border-emerald-300 bg-emerald-50 p-2 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
            Added to {published.lessonTitle} ({published.courseTitle}).{" "}
            {published.href ? (
              <Link href={published.href} className="underline">
                View the lesson
              </Link>
            ) : null}
          </p>
        ) : null}

        {targets ? (
          <>
            <div className="space-y-1">
              <label htmlFor={id("permission")} className="block font-medium">
                Permission note for this stop
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id={id("permission")}
                  value={permission}
                  onChange={(e) => setPermission(e.target.value)}
                  maxLength={500}
                  placeholder="Public viewpoint, no permission needed"
                  className={`${field} min-h-11`}
                />
                <button
                  type="button"
                  onClick={savePermission}
                  disabled={savingPermission || permission.trim() === (leg.permissionNote ?? "")}
                  className="min-h-11 shrink-0 rounded-md border border-neutral-300 px-4 font-medium disabled:opacity-60 dark:border-neutral-700"
                >
                  {savingPermission ? "Saving…" : "Save note"}
                </button>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Every capture used in a lesson needs one: who agreed, or why no one had to.
              </p>
            </div>

            {targets.slots.length === 0 ? (
              <p className="text-neutral-600 dark:text-neutral-400">
                Every tour slot in your courses is filled.{" "}
                <Link href="/teach/tours" className="underline">
                  See them on Teach, Tours
                </Link>
                .
              </p>
            ) : (
              <>
                <div className="space-y-1">
                  <label htmlFor={id("lesson")} className="block font-medium">
                    Lesson
                  </label>
                  <select id={id("lesson")} value={lessonId} onChange={(e) => setLessonId(e.target.value)} className={`${field} min-h-11`}>
                    {[...byCourse.entries()].map(([courseId, g]) => (
                      <optgroup key={courseId} label={g.title}>
                        {g.slots.map((s) => (
                          <option key={s.lessonId} value={s.lessonId}>
                            {s.lessonTitle}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  {suggested ? (
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      Suggested from this stop&apos;s notes: {suggested.courseTitle}.
                    </p>
                  ) : null}
                </div>

                <fieldset className="space-y-1">
                  <legend className="font-medium">Capture</legend>
                  {targets.captures.length === 0 ? (
                    <p className="text-neutral-600 dark:text-neutral-400">
                      No captures on this stop yet. Log one in the Captures tab and choose this leg.
                    </p>
                  ) : (
                    targets.captures.map((c) => (
                      <label
                        key={c.id}
                        className={`flex min-h-11 items-start gap-2 rounded-md p-2 ${c.eligible ? "cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900" : "text-neutral-500"}`}
                      >
                        <input
                          type="radio"
                          name={id("capture")}
                          value={c.id}
                          checked={captureId === c.id}
                          disabled={!c.eligible}
                          onChange={() => pickCapture(c)}
                          className="mt-1 h-5 w-5 shrink-0"
                        />
                        <span className="min-w-0 break-words">
                          <span className="font-medium capitalize">{c.kind}</span>
                          {c.subject ? `: ${c.subject}` : ""}
                          <span className="ml-1 text-xs text-neutral-600 dark:text-neutral-400">({hostOf(c.storageUrl)})</span>
                          {c.reason ? (
                            <span className="block text-xs text-amber-800 dark:text-amber-300">Cannot be used: {c.reason}</span>
                          ) : null}
                        </span>
                      </label>
                    ))
                  )}
                </fieldset>

                <div className="space-y-1">
                  <label htmlFor={id("credit")} className="block font-medium">
                    Credit, shown under the tour
                  </label>
                  <textarea
                    id={id("credit")}
                    value={credit}
                    onChange={(e) => setCredit(e.target.value)}
                    maxLength={TOUR_CREDIT_MAX}
                    rows={2}
                    className={field}
                  />
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {credit.length} of {TOUR_CREDIT_MAX} characters. Edit it if someone else on the crew took it.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={confirm}
                  disabled={confirming || !lessonId || !captureId || !credit.trim()}
                  className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {confirming ? "Adding…" : "Confirm"}
                </button>
              </>
            )}
          </>
        ) : null}
      </div>
    </details>
  );
}
