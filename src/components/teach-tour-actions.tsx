"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PEOPLE_ATTESTATION_LABEL, TOUR_CREDIT_MAX } from "@/lib/field-log-tour";

// The per-tour controls on /teach/tours (plans/96 v2): Check link, Edit credit, and Attest for a tour
// published before the people-in-frame attestation existed. Remove stays its own button.
//
// Every server answer renders beside its control: results in role="status", failures in
// role="alert". Nothing here uses alert(). The server is the guard for all three (the same editors who
// may remove a tour); these buttons only call it.

type CheckAnswer = { reachable: boolean; message: string };

async function send<T>(url: string, init: RequestInit): Promise<{ ok: true; data: T } | { ok: false; error: string }> {
  const res = await fetch(url, init).catch(() => null);
  if (!res) return { ok: false, error: "You appear to be offline. Try again when you are connected." };
  const data = (await res.json().catch(() => null)) as (T & { error?: string }) | null;
  if (!res.ok) return { ok: false, error: data?.error ?? `Request failed (${res.status}). Please try again.` };
  return { ok: true, data: data as T };
}

export function TeachTourActions({
  courseId,
  lessonId,
  lessonTitle,
  credit,
  attested,
}: {
  courseId: string;
  lessonId: string;
  lessonTitle: string;
  credit: string;
  attested: boolean;
}) {
  const router = useRouter();
  const base = `/api/courses/${courseId}/lessons/${lessonId}/tour`;
  const fieldId = useId();

  const [checking, setChecking] = useState(false);
  const [check, setCheck] = useState<CheckAnswer | null>(null);
  const [checkError, setCheckError] = useState<string | null>(null);

  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(credit);
  const [saving, setSaving] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const editButton = useRef<HTMLButtonElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const returnFocus = useRef(false);

  const [attesting, setAttesting] = useState(false);
  const [attestError, setAttestError] = useState<string | null>(null);

  // Opening the editor puts focus in it; closing it (Save or Cancel) puts focus back on Edit credit.
  useEffect(() => {
    if (editing) textarea.current?.focus();
    else if (returnFocus.current) {
      returnFocus.current = false;
      editButton.current?.focus();
    }
  }, [editing]);

  async function runCheck() {
    setChecking(true);
    setCheck(null);
    setCheckError(null);
    const res = await send<CheckAnswer>(`${base}/check`, { method: "POST" });
    setChecking(false);
    if (res.ok) setCheck(res.data);
    else setCheckError(res.error);
  }

  function openEditor() {
    setDraft(credit);
    setEditError(null);
    setSaved(false);
    setEditing(true);
  }

  function closeEditor() {
    returnFocus.current = true;
    setEditing(false);
  }

  async function save() {
    setSaving(true);
    setEditError(null);
    const res = await send<{ tour: { creditLine: string } }>(base, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ creditLine: draft }),
    });
    setSaving(false);
    if (!res.ok) {
      setEditError(res.error);
      return;
    }
    setSaved(true);
    closeEditor();
    router.refresh();
  }

  async function attest() {
    setAttesting(true);
    setAttestError(null);
    const res = await send<{ tour: unknown }>(base, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ attest: true }),
    });
    setAttesting(false);
    if (!res.ok) setAttestError(res.error);
    else router.refresh();
  }

  const button =
    "min-h-11 rounded-md border border-neutral-300 px-3 text-sm font-medium disabled:opacity-60 dark:border-neutral-700";
  const trimmed = draft.replace(/\s+/g, " ").trim();

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={runCheck} disabled={checking} className={button} aria-label={`Check the tour link of ${lessonTitle}`}>
          {checking ? "Checking…" : "Check link"}
        </button>
        {!editing ? (
          <button ref={editButton} type="button" onClick={openEditor} className={button} aria-label={`Edit the credit of ${lessonTitle}`}>
            Edit credit
          </button>
        ) : null}
      </div>

      <p role="status" className="text-sm text-neutral-700 dark:text-neutral-300">
        {check ? check.message : saved ? "Credit saved." : ""}
      </p>
      {checkError ? (
        <p role="alert" className="text-sm text-red-700 dark:text-red-300">
          {checkError}
        </p>
      ) : null}

      {editing ? (
        <div className="space-y-2 rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
          <label htmlFor={fieldId} className="block text-sm font-medium">
            Credit, shown under the tour
          </label>
          <textarea
            ref={textarea}
            id={fieldId}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            maxLength={TOUR_CREDIT_MAX}
            rows={3}
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            {trimmed.length} of {TOUR_CREDIT_MAX} characters.
          </p>
          {editError ? (
            <p role="alert" className="text-sm text-red-700 dark:text-red-300">
              {editError}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={save}
              disabled={saving || trimmed.length === 0}
              className="min-h-11 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {saving ? "Saving…" : "Save"}
            </button>
            <button type="button" onClick={closeEditor} disabled={saving} className={button}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {!attested ? (
        <div className="space-y-1 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
          <p>
            <strong>Attestation not recorded.</strong> This tour was added before publishers confirmed who is in the
            frame. It stays on the lesson. Open the capture, check it, then confirm: &ldquo;{PEOPLE_ATTESTATION_LABEL}&rdquo;
          </p>
          <button type="button" onClick={attest} disabled={attesting} className={button} aria-label={`Confirm the people-in-frame statement for ${lessonTitle}`}>
            {attesting ? "Saving…" : "Attest"}
          </button>
          {attestError ? (
            <p role="alert" className="text-sm text-red-700 dark:text-red-300">
              {attestError}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
