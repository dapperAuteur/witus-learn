// srt-to-transcript — convert a transcriber's .srt (or .vtt) file into the app's
// timestamped transcript JSON, and (optionally) write it straight onto a lesson so
// students get a click-to-seek, follow-along transcript.
//
// Usage:
//   pnpm srt:transcript "content/BVC-S01-E02-Tea Subtitles.srt"          # print JSON
//   pnpm srt:transcript "…file.srt" --out content/e02-transcript.json    # write JSON file
//   pnpm srt:transcript "…file.srt" --lesson <lesson-uuid>               # write to the lesson (DB)
//   pnpm srt:transcript "…file.srt" --offset -2.5                        # nudge sync earlier 2.5s
//   pnpm srt:transcript "…file.srt" --keep-hour-base                     # don't strip a 1h base timecode
//
// The parser strips subtitle formatting (<b>/<i>/<font…>, ASS tags), keeps timestamps in
// seconds, and by default removes a whole-hour base timecode (e.g. cues starting at
// 01:00:00) so they line up with media that starts at 0.

import { readFileSync, writeFileSync } from "node:fs";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import { chaptersFromSegments, parseSrt } from "../src/lib/srt";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

function flag(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 ? process.argv[i + 1] : undefined;
}
function has(name: string): boolean {
  return process.argv.includes(`--${name}`);
}

async function main() {
  const file = process.argv[2];
  if (!file || file.startsWith("--")) {
    console.error('Usage: pnpm srt:transcript "<file.srt>" [--out <json>] [--lesson <uuid>] [--offset <sec>] [--keep-hour-base]');
    process.exit(1);
  }

  const raw = readFileSync(file, "utf8");
  const offset = flag("offset");
  const segments = parseSrt(raw, {
    normalizeHourBase: !has("keep-hour-base"),
    offsetSeconds: offset ? parseFloat(offset) : 0,
  });

  if (segments.length === 0) {
    console.error(`No transcript cues found in ${file}. Is it a valid .srt/.vtt file?`);
    process.exit(1);
  }
  const first = segments[0];
  const last = segments[segments.length - 1];
  console.error(
    `Parsed ${segments.length} cues from ${file} — first @ ${first.start}s, last @ ${last.end ?? last.start}s.`,
  );

  // Auto-generate chapters too (the app lets you edit them after import).
  const withChapters = has("chapters");
  const chapters = withChapters ? chaptersFromSegments(segments) : [];
  if (withChapters) console.error(`Auto-generated ${chapters.length} chapters.`);

  const outFile = flag("out");
  const lessonId = flag("lesson");
  const payload = withChapters ? { transcript: segments, chapters } : segments;

  if (outFile) {
    writeFileSync(outFile, JSON.stringify(payload, null, 2));
    console.error(`Wrote ${outFile}`);
  }

  if (lessonId) {
    const url = resolveDbUrl(true);
    if (!url) {
      console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED) to write to a lesson.");
      process.exit(1);
    }
    neonConfig.webSocketConstructor = ws;
    const pool = new Pool({ connectionString: url });
    const db = drizzle(pool, { schema });
    const updated = await db
      .update(schema.lessons)
      .set(withChapters ? { transcriptContent: segments, audioChapters: chapters } : { transcriptContent: segments })
      .where(eq(schema.lessons.id, lessonId))
      .returning({ id: schema.lessons.id, title: schema.lessons.title });
    await pool.end();
    if (updated.length === 0) {
      console.error(`No lesson found with id ${lessonId}.`);
      process.exit(1);
    }
    console.error(`Attached transcript to lesson "${updated[0].title}" (${updated[0].id}).`);
  }

  if (!outFile && !lessonId) {
    // Print JSON to stdout so it can be piped/copied.
    process.stdout.write(JSON.stringify(payload, null, 2) + "\n");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
