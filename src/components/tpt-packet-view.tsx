"use client";

import { useState } from "react";
import { Markdown } from "@/components/markdown";

// Owner-only local tool: preview a TpT packet as a branded, print-ready document, edit any section
// inline (live preview), and download it as a PDF via the browser's print dialog. "Save to file"
// persists an edit back to the local markdown (owner API, local only). Print isolation hides all app
// chrome so the PDF is just the branded packet.

interface PacketFile {
  name: string;
  content: string;
}

// Print CSS: only #tpt-print-root prints, everything else is hidden; one packet file per page.
const PRINT_CSS = `
@media print {
  @page { margin: 1.6cm; }
  body { background: #fff !important; }
  body * { visibility: hidden !important; }
  #tpt-print-root, #tpt-print-root * { visibility: visible !important; }
  #tpt-print-root { position: absolute; left: 0; top: 0; width: 100%; }
  .tpt-no-print { display: none !important; }
  .tpt-break { break-before: page; }
}
`;

const btn =
  "min-h-9 rounded-md border border-neutral-300 px-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700";

export function TptPacketView({
  dir,
  title,
  brand,
  initialFiles,
}: {
  dir: string;
  title: string;
  brand: string;
  initialFiles: PacketFile[];
}) {
  const [files, setFiles] = useState<PacketFile[]>(initialFiles);
  const [editing, setEditing] = useState<Record<string, boolean>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  function update(name: string, content: string) {
    setFiles((p) => p.map((f) => (f.name === name ? { ...f, content } : f)));
  }

  async function save(name: string) {
    const file = files.find((f) => f.name === name);
    if (!file) return;
    setSaving(name);
    setMsg(null);
    try {
      const r = await fetch(`/api/admin/tpt-packets/${dir}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, content: file.content }),
      });
      const d = await r.json().catch(() => ({}));
      setMsg(r.ok ? `Saved ${name} to file.` : (d.error ?? `Couldn't save ${name}.`));
    } catch {
      setMsg(`Couldn't save ${name}.`);
    }
    setSaving(null);
  }

  const label = (name: string) =>
    name.replace(/^\d+-/, "").replace(/\.md$/, "").replace(/-/g, " ");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />

      {/* Toolbar (screen only). */}
      <div className="tpt-no-print sticky top-0 z-10 -mx-4 mb-6 flex flex-wrap items-center gap-3 border-b border-neutral-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
        <button
          type="button"
          onClick={() => window.print()}
          className="min-h-9 rounded-md px-4 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Download PDF
        </button>
        <p className="text-xs text-neutral-500">
          Opens your browser&apos;s print dialog, choose &ldquo;Save as PDF&rdquo;. Edits below apply
          to the PDF; &ldquo;Save to file&rdquo; also writes them back to the packet.
        </p>
        {msg ? (
          <span role="status" className="text-xs font-medium" style={{ color: "var(--accent)" }}>
            {msg}
          </span>
        ) : null}
      </div>

      <article id="tpt-print-root" className="mx-auto max-w-3xl">
        <header className="mb-6 border-b-2 pb-3" style={{ borderColor: "var(--accent)" }}>
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            {brand} · Learn.WitUS.Online
          </p>
          <h1 className="mt-1 text-2xl font-bold">{title}</h1>
        </header>

        {files.map((f, i) => (
          <section key={f.name} className={i === 0 ? "" : "tpt-break pt-2"}>
            <div className="tpt-no-print mb-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                {label(f.name)}
              </span>
              <button
                type="button"
                onClick={() => setEditing((e) => ({ ...e, [f.name]: !e[f.name] }))}
                className={btn}
                aria-expanded={editing[f.name] ? "true" : "false"}
              >
                {editing[f.name] ? "Done" : "Edit"}
              </button>
              {editing[f.name] ? (
                <button type="button" onClick={() => save(f.name)} disabled={saving === f.name} className={btn}>
                  {saving === f.name ? "Saving…" : "Save to file"}
                </button>
              ) : null}
            </div>
            {editing[f.name] ? (
              <textarea
                value={f.content}
                onChange={(e) => update(f.name, e.target.value)}
                rows={16}
                aria-label={`Edit ${label(f.name)} markdown`}
                className="tpt-no-print mb-3 w-full rounded-md border border-neutral-300 p-3 font-mono text-xs dark:border-neutral-700 dark:bg-neutral-900"
              />
            ) : null}
            <Markdown>{f.content}</Markdown>
          </section>
        ))}

        <footer className="mt-8 border-t pt-3 text-xs text-neutral-500" style={{ borderColor: "var(--accent)" }}>
          Learn.WitUS.Online · Every packet points back to the full cited, standards-aligned course.
        </footer>
      </article>
    </>
  );
}
