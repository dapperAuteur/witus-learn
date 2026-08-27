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

/**
 * Make a recorded-audio URL playable on every device. The in-app recorder produces WebM/Opus,
 * which **iOS Safari can't decode** (iPhone/iPad error; Android/desktop Chrome are fine). Cloudinary
 * stores audio as a "video" resource and can transcode on delivery, so we request an **MP3** rendition
 * (`f_mp3`) — universally supported, and Cloudinary caches it after the first play. Bonus: the MP3 has
 * proper duration metadata, so the player's remaining-time readout is accurate (WebM from MediaRecorder
 * often reports no/!nfinite duration). Non-Cloudinary URLs (external files, embeds) pass through unchanged.
 */
export function playableAudioSrc(url: string): string {
  if (!url) return url;
  const m = url.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+\/(?:video|auto)\/upload)\/(.+)$/i);
  if (!m) return url;
  const [, base, rest] = m;
  if (/(^|\/)f_[a-z0-9]+(,|\/)/i.test(rest)) return url; // already has a format transform — leave it
  return `${base}/f_mp3/${rest}`;
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

/**
 * A WebVTT cue file built from transcript segments that already carry timings.
 *
 * Reported 2026-08-26 and confirmed: MediaPlayer rendered a bare <video> with no
 * <track>, so a synced transcript sat beside the player while the video itself shipped
 * zero captions. A transcript below a video is not a caption track: it is not on the
 * video, it does not follow playback for a screen-reader user, and it is invisible to
 * a viewer who needs captions in the player. Segments with no start time are skipped
 * rather than guessed, because a mistimed caption is worse than an absent one.
 *
 * Returns null when nothing is timed, so a caller can omit the <track> entirely.
 */
export function toWebVtt(segments: TranscriptSegment[]): string | null {
  const timed = segments.filter((s) => typeof s.start === "number");
  if (timed.length === 0) return null;
  const stamp = (sec: number): string => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s2 = Math.floor(sec % 60);
    const ms = Math.round((sec - Math.floor(sec)) * 1000);
    const p = (n: number, w = 2) => String(n).padStart(w, "0");
    return `${p(h)}:${p(m)}:${p(s2)}.${p(ms, 3)}`;
  };
  const cues: string[] = ["WEBVTT", ""];
  timed.forEach((seg, i) => {
    const start = seg.start as number;
    // No end time: run to the next cue, or three seconds, so a cue is never zero-length.
    const nextStart = timed[i + 1]?.start;
    const end = typeof seg.end === "number" ? seg.end : typeof nextStart === "number" ? nextStart : start + 3;
    if (end <= start) return;
    const text = seg.speaker ? `<v ${seg.speaker}>${seg.text}` : seg.text;
    cues.push(String(i + 1), `${stamp(start)} --> ${stamp(end)}`, text, "");
  });
  return cues.length > 2 ? cues.join("\n") : null;
}
