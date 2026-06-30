// Rich-media helpers shared by the lesson player. Chapter + transcript shapes are loose
// (the jsonb columns may hold partial data), so the parsers are forgiving and the UI
// degrades gracefully when timing info is missing.

export interface Chapter {
  title: string;
  /** Start time in seconds. When present, the chapter becomes a seek button. */
  start?: number;
}

export interface TranscriptSegment {
  text: string;
  /** Start/end in seconds. When present, the segment syncs + becomes click-to-seek. */
  start?: number;
  end?: number;
  speaker?: string;
}

function num(v: unknown): number | undefined {
  const n = typeof v === "string" ? parseFloat(v) : typeof v === "number" ? v : NaN;
  return Number.isFinite(n) ? n : undefined;
}

/** Parse the audio_chapters jsonb into typed chapters. Accepts {title,start|time|seconds}. */
export function parseChapters(value: unknown): Chapter[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((c): Chapter | null => {
      if (typeof c === "string") return { title: c };
      if (c && typeof c === "object") {
        const o = c as Record<string, unknown>;
        const title = o.title ?? o.label ?? o.name;
        if (title == null) return null;
        return { title: String(title), start: num(o.start ?? o.time ?? o.seconds ?? o.startTime) };
      }
      return null;
    })
    .filter((c): c is Chapter => c !== null);
}

/** Parse the transcript_content jsonb into typed segments. Accepts {text,start,end,speaker}. */
export function parseTranscript(value: unknown): TranscriptSegment[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((s): TranscriptSegment | null => {
      if (typeof s === "string") return { text: s };
      if (s && typeof s === "object") {
        const o = s as Record<string, unknown>;
        const text = o.text ?? o.content ?? o.line;
        if (text == null) return null;
        return {
          text: String(text),
          start: num(o.start ?? o.time ?? o.startTime),
          end: num(o.end ?? o.endTime),
          speaker: o.speaker != null ? String(o.speaker) : undefined,
        };
      }
      return null;
    })
    .filter((s): s is TranscriptSegment => s !== null);
}

export type EmbedKind = "youtube" | "vimeo" | "iframe";
export interface Embed {
  kind: EmbedKind;
  src: string;
}

const DIRECT_MEDIA = /\.(mp4|webm|ogv|mov|m4v|mp3|m4a|aac|wav|ogg|oga|flac)(\?.*)?$/i;

/** A URL we can play directly in <video>/<audio> (a media file), vs. one that needs an embed. */
export function isDirectMediaFile(url: string): boolean {
  return DIRECT_MEDIA.test(url);
}

/** Map a non-file URL to an embeddable iframe src (YouTube/Vimeo/Google Slides/PDF/generic). */
export function toEmbed(url: string): Embed | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = u.searchParams.get("v") ?? u.pathname.split("/").filter(Boolean).pop();
      if (id) return { kind: "youtube", src: `https://www.youtube.com/embed/${id}` };
    }
    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (id) return { kind: "youtube", src: `https://www.youtube.com/embed/${id}` };
    }
    if (host === "vimeo.com") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (id && /^\d+$/.test(id)) return { kind: "vimeo", src: `https://player.vimeo.com/video/${id}` };
    }
    if (host === "docs.google.com" && u.pathname.includes("/presentation/")) {
      // Normalize any Google Slides link to its /embed form.
      const embed = url.replace(/\/(edit|pub|view)(\?.*)?$/, "/embed$2").replace(/\/embed$/, "/embed");
      return { kind: "iframe", src: embed.includes("/embed") ? embed : url.replace(/\/[^/]*$/, "/embed") };
    }
    // PDFs and any other URL: a generic iframe.
    return { kind: "iframe", src: url };
  } catch {
    return null;
  }
}
