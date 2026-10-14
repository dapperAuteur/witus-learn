// Split free text into plain runs and links, for notes the app renders as text (never as markdown or
// HTML, so a note cannot inject markup). Two kinds of link are recognized: an absolute http(s) URL, and
// a site path such as /bam/<course>/lesson/<slug> (a slash, a letter, and at least two segments, so
// "and/or", "1/2" and a lone "/" stay text). Trailing punctuation is left out of a URL.
export type NoteSegment = { text: string; href?: string; external?: boolean };

const NOTE_LINK = /(https?:\/\/[^\s<>"]*[^\s<>".,;:)]|(?<![\w/])\/[a-z][a-z0-9-]*(?:\/[a-z0-9-]+)+)/g;

export function splitNoteLinks(text: string): NoteSegment[] {
  return text
    .split(NOTE_LINK)
    .map((part, i): NoteSegment =>
      i % 2 === 0 ? { text: part } : { text: part, href: part, external: !part.startsWith("/") },
    )
    .filter((seg) => seg.text.length > 0);
}
