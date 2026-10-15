"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FOLLOW_UP_STATUS_LABEL,
  FOLLOW_UP_WHEN_LABEL,
  type FollowUpStatus,
  type FollowUpWhen,
  type LaunchTodo,
} from "@/lib/launch-todos";

// The launch to-do list on a course's /teach page, for everyone who edits the course. Two kinds of
// item share it: the committed follow-ups Claude writes for BAM's own courses (his blog posts, task
// steps to re-check; only the owner closes those, at /admin/follow-ups or here), and items any editor
// adds (a school's own chores, or a post for its own blog). The same list appears as a warning when
// someone schedules, publishes or releases the course.
//
// A chore list, never a message thread: no assignee, no reply, no read state.

const input =
  "min-h-11 w-full rounded-md border border-neutral-300 bg-white px-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12";
const btn =
  "inline-flex min-h-11 items-center justify-center rounded-md px-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12";

const WHEN_SHORT: Record<FollowUpWhen, string> = {
  seeded: "Now",
  scheduled: "Before it goes live",
  live: "Once it is live",
};

function stateText(t: LaunchTodo): string {
  if (t.status !== "open") return FOLLOW_UP_STATUS_LABEL[t.status];
  return t.due ? "Due now" : `Due ${FOLLOW_UP_WHEN_LABEL[t.when]}`;
}

function TodoRow({ courseId, todo, canClose }: { courseId: string; todo: LaunchTodo; canClose: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<FollowUpStatus>(todo.status);
  const [note, setNote] = useState(todo.note ?? "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const noteId = `todo-note-${todo.id}`;
  const statusId = `todo-status-${todo.id}`;

  async function send(method: "PATCH" | "DELETE" | "POST", url: string, body: unknown) {
    setBusy(true);
    setError(null);
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch(() => null);
    setBusy(false);
    if (!res?.ok) {
      const data = (await res?.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "That did not save. Check your connection and try again.");
      return false;
    }
    router.refresh();
    return true;
  }

  async function save() {
    if (status !== "open" && !note.trim()) {
      setError("Say what was done before closing it.");
      return;
    }
    const ok =
      todo.source === "custom"
        ? await send("PATCH", `/api/courses/${courseId}/launch-todos`, { todoId: todo.id, status, note })
        : await send("POST", "/api/admin/follow-ups", { followupKey: todo.id, status, note });
    if (ok) setOpen(false);
  }

  const attention = todo.status === "open" && todo.due;
  return (
    <li
      className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800"
      style={attention ? { borderColor: "var(--accent)" } : undefined}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span
          className={`rounded-full px-2 py-0.5 font-medium ${
            todo.status !== "open"
              ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100"
              : attention
                ? "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200"
                : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
          }`}
        >
          {stateText(todo)}
        </span>
        <span className="text-neutral-600 dark:text-neutral-400">
          {todo.kind === "blog-post" ? "Blog post" : "Task"}
          {todo.source === "committed" ? " · added by Claude" : ""}
        </span>
      </div>
      <p className={`mt-1 text-sm font-medium ${todo.status !== "open" ? "line-through decoration-1" : ""}`}>{todo.title}</p>
      {todo.kind === "blog-post" && todo.blogName ? (
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          On <span className="font-medium">{todo.blogName}</span>
          {todo.postTitle ? <>: &ldquo;{todo.postTitle}&rdquo;</> : null}
          {todo.postUrl ? (
            <>
              {" "}
              <a href={todo.postUrl} className="break-all underline underline-offset-2">
                {todo.postUrl}
              </a>
            </>
          ) : null}
        </p>
      ) : null}
      {todo.detail ? <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{todo.detail}</p> : null}
      {todo.ref ? <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">Full steps: {todo.ref}</p> : null}
      {todo.note ? (
        <p className="mt-1 text-sm">
          <span className="font-medium">Done: </span>
          <span className="whitespace-pre-line">{todo.note}</span>
        </p>
      ) : null}

      {canClose ? (
        open ? (
          <div className="mt-2 space-y-2">
            <label htmlFor={statusId} className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Status
            </label>
            <select id={statusId} value={status} onChange={(e) => setStatus(e.target.value as FollowUpStatus)} className={`${input} sm:w-56`}>
              <option value="open">Not done yet</option>
              <option value="done">Done</option>
              <option value="skipped">Not doing it</option>
            </select>
            <label htmlFor={noteId} className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
              What was done
            </label>
            <textarea
              id={noteId}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              placeholder="A link to the live post, what changed, or why you are not doing it."
              className="w-full rounded-md border border-neutral-300 bg-white p-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900"
            />
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={save} disabled={busy} className={`${btn} text-white`} style={{ backgroundColor: "var(--accent)" }}>
                {busy ? "Saving…" : "Save"}
              </button>
              <button type="button" onClick={() => setOpen(false)} disabled={busy} className={`${btn} border border-neutral-300 dark:border-neutral-700`}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" onClick={() => setOpen(true)} className={`${btn} border border-neutral-300 dark:border-neutral-700`}>
              {todo.status === "open" ? "Mark done" : "Change"}
            </button>
            {todo.source === "custom" ? (
              <button
                type="button"
                disabled={busy}
                onClick={() => void send("DELETE", `/api/courses/${courseId}/launch-todos`, { todoId: todo.id })}
                className={`${btn} text-red-700 dark:text-red-400`}
              >
                Remove
              </button>
            ) : null}
          </div>
        )
      ) : todo.source === "committed" ? (
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">The platform owner closes this one.</p>
      ) : null}
      {error ? (
        <p role="alert" className="mt-1 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </li>
  );
}

function AddTodo({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [kind, setKind] = useState<"task" | "blog-post">("task");
  const [title, setTitle] = useState("");
  const [blogName, setBlogName] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [dueWhen, setDueWhen] = useState<FollowUpWhen>("scheduled");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!title.trim()) return setError("Say what needs doing.");
    if (kind === "blog-post" && !blogName.trim()) return setError("Name the blog the post goes on.");
    setBusy(true);
    const res = await fetch(`/api/courses/${courseId}/launch-todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, title, blogName: blogName || undefined, postUrl: postUrl || undefined, dueWhen }),
    }).catch(() => null);
    setBusy(false);
    if (!res?.ok) {
      const data = (await res?.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "That did not save. Check your connection and try again.");
      return;
    }
    setTitle("");
    setBlogName("");
    setPostUrl("");
    router.refresh();
  }

  return (
    <form onSubmit={add} className="mt-4 space-y-2 rounded-md border border-dashed border-neutral-300 p-3 dark:border-neutral-700">
      <p className="text-sm font-medium">Add to the list</p>
      <div className="grid gap-2 sm:grid-cols-2">
        <div>
          <label htmlFor={`todo-kind-${courseId}`} className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
            Kind
          </label>
          <select id={`todo-kind-${courseId}`} value={kind} onChange={(e) => setKind(e.target.value as "task" | "blog-post")} className={input}>
            <option value="task">Task</option>
            <option value="blog-post">Blog post</option>
          </select>
        </div>
        <div>
          <label htmlFor={`todo-when-${courseId}`} className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
            When
          </label>
          <select id={`todo-when-${courseId}`} value={dueWhen} onChange={(e) => setDueWhen(e.target.value as FollowUpWhen)} className={input}>
            <option value="scheduled">{WHEN_SHORT.scheduled}</option>
            <option value="live">{WHEN_SHORT.live}</option>
            <option value="seeded">{WHEN_SHORT.seeded}</option>
          </select>
        </div>
      </div>
      <label htmlFor={`todo-title-${courseId}`} className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
        {kind === "blog-post" ? "The post (its title, or what it covers)" : "What needs doing"}
      </label>
      <input id={`todo-title-${courseId}`} value={title} onChange={(e) => setTitle(e.target.value)} maxLength={200} className={input} />
      {kind === "blog-post" ? (
        <div className="grid gap-2 sm:grid-cols-2">
          <div>
            <label htmlFor={`todo-blog-${courseId}`} className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Blog name
            </label>
            <input id={`todo-blog-${courseId}`} value={blogName} onChange={(e) => setBlogName(e.target.value)} maxLength={120} className={input} />
          </div>
          <div>
            <label htmlFor={`todo-url-${courseId}`} className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Post or blog URL (optional)
            </label>
            <input
              id={`todo-url-${courseId}`}
              type="url"
              inputMode="url"
              value={postUrl}
              onChange={(e) => setPostUrl(e.target.value)}
              placeholder="https://"
              className={input}
            />
          </div>
        </div>
      ) : null}
      <button type="submit" disabled={busy} className={`${btn} text-white`} style={{ backgroundColor: "var(--accent)" }}>
        {busy ? "Adding…" : "Add"}
      </button>
      {error ? (
        <p role="alert" className="text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </form>
  );
}

export function LaunchTodoList({
  courseId,
  todos,
  isOwner,
  courseLive,
}: {
  courseId: string;
  todos: LaunchTodo[];
  isOwner: boolean;
  courseLive: boolean;
}) {
  const open = todos.filter((t) => t.status === "open");
  const closed = todos.filter((t) => t.status !== "open");
  return (
    <section aria-labelledby={`launch-todos-${courseId}`} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 id={`launch-todos-${courseId}`} className="font-semibold">
        Launch to-do list
      </h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        {courseLive
          ? "This course is live. Anything still open here is work its launch was waiting for."
          : "What has to happen before and after this course goes live. It appears as a warning whenever someone schedules, publishes or releases the course, so the real launch date can be planned around it."}
      </p>
      {open.length ? (
        <ul className="mt-3 space-y-2">
          {open.map((t) => (
            <TodoRow key={t.id} courseId={courseId} todo={t} canClose={t.source === "custom" || isOwner} />
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">Nothing open.</p>
      )}
      {closed.length ? (
        <details className="mt-3">
          <summary className="min-h-11 cursor-pointer py-2 text-sm font-medium pointer-coarse:min-h-12">Closed ({closed.length})</summary>
          <ul className="mt-2 space-y-2">
            {closed.map((t) => (
              <TodoRow key={t.id} courseId={courseId} todo={t} canClose={t.source === "custom" || isOwner} />
            ))}
          </ul>
        </details>
      ) : null}
      <AddTodo courseId={courseId} />
    </section>
  );
}
