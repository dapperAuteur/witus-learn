"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MarkdownEditor } from "./markdown-editor";
import { CloudinaryUpload } from "./cloudinary-upload";
import { ChapterEditor } from "./chapter-editor";
import { parseChapters, parseTranscript, type Chapter, type TranscriptSegment } from "@/lib/media";
import { chaptersFromSegments, parseSrt } from "@/lib/srt";

export interface ManagedLesson {
  id: string;
  title: string;
  lessonType: string;
  slug: string | null;
  isPublished: boolean;
  isFreePreview: boolean;
  sortOrder: number;
  textContent: string | null;
  contentUrl: string | null;
  /** Raw jsonb from the DB; parsed on the client for the chapter/transcript editors. */
  audioChapters: unknown;
  transcriptContent: unknown;
  recallContent: unknown;
}

interface RecallItem {
  prompt: string;
  answer: string;
}

function parseRecall(value: unknown): RecallItem[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v): v is RecallItem => Boolean(v) && typeof v === "object" && "prompt" in v && "answer" in v)
    .map((v) => ({ prompt: String(v.prompt), answer: String(v.answer) }));
}

const EDITABLE_TYPES = ["text", "video", "audio", "slides"];

// Instructor lessons manager (CRUD over the lesson APIs): add text lessons, edit
// title/body/flags, reorder, publish, delete. Quizzes/media are authored via seeds
// for now; this covers day-to-day text-lesson editing.
export function LessonsManager({ courseId, lessons }: { courseId: string; lessons: ManagedLesson[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const sorted = [...lessons].sort((a, b) => a.sortOrder - b.sortOrder);

  async function api(path: string, method: string, body?: unknown) {
    setBusy(true);
    const r = await fetch(path, {
      method,
      headers: body ? { "content-type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    setBusy(false);
    if (r.ok) router.refresh();
    return r.ok;
  }

  async function patch(id: string, body: Record<string, unknown>) {
    return api(`/api/courses/${courseId}/lessons/${id}`, "PATCH", body);
  }

  async function move(index: number, dir: -1 | 1) {
    const a = sorted[index];
    const b = sorted[index + dir];
    if (!a || !b) return;
    // Swap sort orders.
    await patch(a.id, { sortOrder: b.sortOrder });
    await patch(b.id, { sortOrder: a.sortOrder });
  }

  async function remove(id: string) {
    if (!confirm("Delete this lesson? This cannot be undone.")) return;
    await api(`/api/courses/${courseId}/lessons/${id}`, "DELETE");
  }

  async function add(e: React.FormEvent) {
    e.preventDefault();
    if (newTitle.trim().length < 1) return;
    const ok = await api(`/api/courses/${courseId}/lessons`, "POST", {
      title: newTitle,
      lessonType: "text",
      textContent: newBody || null,
      sortOrder: sorted.length + 1,
      isPublished: false,
    });
    if (ok) {
      setNewTitle("");
      setNewBody("");
    }
  }

  return (
    <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="font-semibold">Lessons</h2>

      <ul className="mt-3 divide-y divide-neutral-200 dark:divide-neutral-800">
        {sorted.length === 0 ? <li className="py-3 text-sm text-neutral-500">No lessons yet.</li> : null}
        {sorted.map((l, i) => (
          <li key={l.id} className="py-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium">{l.title}</span>
              <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                {l.lessonType}
              </span>
              {l.isPublished ? (
                <span className="text-xs text-green-700 dark:text-green-400">published</span>
              ) : (
                <span className="text-xs text-neutral-500">draft</span>
              )}
              {l.isFreePreview ? <span className="text-xs text-neutral-500">· free preview</span> : null}

              <div className="ml-auto flex items-center gap-1 text-sm">
                <button type="button" disabled={busy || i === 0} onClick={() => move(i, -1)} className="rounded px-1.5 disabled:opacity-30" aria-label="Move up">↑</button>
                <button type="button" disabled={busy || i === sorted.length - 1} onClick={() => move(i, 1)} className="rounded px-1.5 disabled:opacity-30" aria-label="Move down">↓</button>
                <button type="button" disabled={busy} onClick={() => patch(l.id, { isPublished: !l.isPublished })} className="rounded border border-neutral-300 px-2 py-0.5 dark:border-neutral-700">
                  {l.isPublished ? "Unpublish" : "Publish"}
                </button>
                {EDITABLE_TYPES.includes(l.lessonType) ? (
                  <button type="button" onClick={() => setEditing(editing === l.id ? null : l.id)} className="rounded border border-neutral-300 px-2 py-0.5 dark:border-neutral-700">
                    {editing === l.id ? "Close" : "Edit"}
                  </button>
                ) : null}
                <button type="button" disabled={busy} onClick={() => remove(l.id)} className="rounded px-2 py-0.5 text-red-600">Delete</button>
              </div>
            </div>

            {editing === l.id ? <LessonEditor lesson={l} onSave={(body) => patch(l.id, body).then(() => setEditing(null))} busy={busy} /> : null}
          </li>
        ))}
      </ul>

      <form onSubmit={add} className="mt-4 space-y-2 rounded-md border border-dashed border-neutral-300 p-3 dark:border-neutral-700">
        <h3 className="text-sm font-medium">Add a lesson</h3>
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Lesson title" maxLength={200} className="min-h-10 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900" />
        <MarkdownEditor value={newBody} onChange={setNewBody} rows={4} placeholder="Lesson body — write or format with the toolbar, then Preview." />
        <button type="submit" disabled={busy || newTitle.trim().length < 1} className="min-h-10 rounded-md px-3 text-sm font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
          Add lesson
        </button>
      </form>
    </section>
  );
}

function LessonEditor({
  lesson,
  onSave,
  busy,
}: {
  lesson: ManagedLesson;
  onSave: (body: Record<string, unknown>) => void;
  busy: boolean;
}) {
  const [title, setTitle] = useState(lesson.title);
  const [lessonType, setLessonType] = useState(lesson.lessonType);
  const [body, setBody] = useState(lesson.textContent ?? "");
  const [contentUrl, setContentUrl] = useState(lesson.contentUrl ?? "");
  const [freePreview, setFreePreview] = useState(lesson.isFreePreview);
  const [chapters, setChapters] = useState<Chapter[]>(parseChapters(lesson.audioChapters));
  const [transcript, setTranscript] = useState<TranscriptSegment[]>(parseTranscript(lesson.transcriptContent));
  const [recall, setRecall] = useState<RecallItem[]>(parseRecall(lesson.recallContent));
  const [srtInfo, setSrtInfo] = useState<string | null>(null);
  const isMedia = lessonType === "video" || lessonType === "audio" || lessonType === "slides";
  const accept = lessonType === "video" ? "video/*" : lessonType === "audio" ? "audio/*" : "application/pdf,image/*";

  async function onSrtFile(file: File) {
    try {
      const segs = parseSrt(await file.text());
      if (segs.length === 0) {
        setSrtInfo("No subtitle cues found in that file.");
        return;
      }
      setTranscript(segs);
      setChapters(chaptersFromSegments(segs));
      setSrtInfo(`Imported ${segs.length} transcript lines and auto-generated chapters — edit them below, then Save.`);
    } catch {
      setSrtInfo("Couldn't read that file — is it a .srt/.vtt?");
    }
  }

  return (
    <div className="mt-3 space-y-2 rounded-md bg-neutral-50 p-3 dark:bg-neutral-900/50">
      <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={200} className="min-h-10 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900" />

      <label className="flex items-center gap-2 text-sm">
        Type
        <select value={lessonType} onChange={(e) => setLessonType(e.target.value)} className="min-h-9 rounded-md border border-neutral-300 px-2 dark:border-neutral-700 dark:bg-neutral-900">
          <option value="text">Text</option>
          <option value="video">Video</option>
          <option value="audio">Audio</option>
          <option value="slides">Slides / PDF</option>
        </select>
      </label>

      {isMedia ? (
        <div className="space-y-2 rounded-md border border-neutral-200 p-2 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-2">
            <CloudinaryUpload onUploaded={setContentUrl} accept={accept} />
            <span className="text-xs text-neutral-500">or paste a URL (a file, YouTube/Vimeo, Google Slides):</span>
          </div>
          <input value={contentUrl} onChange={(e) => setContentUrl(e.target.value)} placeholder="https://…" className="min-h-9 w-full rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700 dark:bg-neutral-900" />
          {contentUrl ? <p className="truncate text-xs text-neutral-500">Media: {contentUrl}</p> : null}

          <div className="border-t border-neutral-200 pt-2 dark:border-neutral-800">
            <label className="flex flex-wrap items-center gap-2 text-sm">
              Transcript (.srt / .vtt)
              <input
                type="file"
                accept=".srt,.vtt,text/plain"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void onSrtFile(f);
                }}
                className="text-xs"
              />
              <span className="text-xs text-neutral-500">
                {transcript.length ? `${transcript.length} lines loaded` : "builds a follow-along transcript + chapters"}
              </span>
            </label>
            {srtInfo ? <p className="mt-1 text-xs text-green-700 dark:text-green-400">{srtInfo}</p> : null}
            <div className="mt-2">
              <ChapterEditor value={chapters} onChange={setChapters} />
            </div>
          </div>
        </div>
      ) : null}

      <MarkdownEditor value={body} onChange={setBody} rows={8} placeholder={isMedia ? "Optional notes / transcript shown with the media." : undefined} />

      {/* Active-recall prompts: click-to-reveal + self-grade cards shown in the lesson. */}
      <div className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Quick recall prompts</span>
          <button
            type="button"
            onClick={() => setRecall((r) => [...r, { prompt: "", answer: "" }])}
            className="min-h-8 rounded-md border border-neutral-300 px-2 text-xs dark:border-neutral-700"
          >
            + Add prompt
          </button>
        </div>
        {recall.length === 0 ? (
          <p className="mt-1 text-xs text-neutral-500">
            Optional. Add question/answer pairs; learners test themselves before the quiz.
          </p>
        ) : (
          <ul className="mt-2 space-y-2">
            {recall.map((item, i) => (
              <li key={i} className="rounded-md bg-white p-2 dark:bg-neutral-900">
                <input
                  value={item.prompt}
                  onChange={(e) => setRecall((r) => r.map((x, j) => (j === i ? { ...x, prompt: e.target.value } : x)))}
                  placeholder="Question / prompt"
                  aria-label={`Recall prompt ${i + 1}`}
                  className="min-h-9 w-full rounded-md border border-neutral-300 px-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                />
                <textarea
                  value={item.answer}
                  onChange={(e) => setRecall((r) => r.map((x, j) => (j === i ? { ...x, answer: e.target.value } : x)))}
                  placeholder="Answer (revealed on click)"
                  aria-label={`Recall answer ${i + 1}`}
                  rows={2}
                  className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                />
                <button
                  type="button"
                  onClick={() => setRecall((r) => r.filter((_, j) => j !== i))}
                  className="mt-1 text-xs text-red-600 underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={freePreview} onChange={(e) => setFreePreview(e.target.checked)} /> Free preview
      </label>
      <button
        type="button"
        disabled={busy}
        onClick={() =>
          onSave({
            title,
            lessonType,
            textContent: body || null,
            contentUrl: isMedia ? contentUrl || null : null,
            isFreePreview: freePreview,
            // Drop blank rows; null when none so the lesson shows no recall section.
            recallContent: (() => {
              const clean = recall.filter((r) => r.prompt.trim() && r.answer.trim());
              return clean.length ? clean : null;
            })(),
            ...(isMedia
              ? {
                  transcriptContent: transcript.length ? transcript : null,
                  audioChapters: chapters.length ? chapters : null,
                }
              : {}),
          })
        }
        className="min-h-10 rounded-md px-3 text-sm font-medium text-white disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)" }}
      >
        Save lesson
      </button>
    </div>
  );
}
