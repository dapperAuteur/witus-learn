import "server-only";
import { access, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

// Owner tooling for the Teachers Pay Teachers packets. The packet markdown lives GITIGNORED under
// plans/future-courses/tpt-packets/<dir>/*.md — local build artifacts, not committed and NOT present
// in a deployment. So these helpers read/write the local filesystem and degrade to "empty" wherever
// the files don't exist (e.g. on Vercel). The preview/print/edit UI is therefore a local-dev tool.
//
// Path safety: the directory and file names are validated against tight allowlists AND the resolved
// path is confirmed to sit directly inside the packets base, so a crafted `dir`/`name` can never read
// or write outside plans/future-courses/tpt-packets/.

const BASE = path.join(process.cwd(), "plans", "future-courses", "tpt-packets");
const DIR_RE = /^[a-z0-9][a-z0-9-]*$/;
const FILE_RE = /^[0-9]{2}-[a-z0-9-]+\.md$/;

export interface PacketFile {
  name: string;
  content: string;
}

function safeDir(dir: string): string | null {
  if (!DIR_RE.test(dir)) return null;
  const resolved = path.join(BASE, dir);
  return path.dirname(resolved) === BASE ? resolved : null;
}

/** All markdown files of a packet, in filename order (00-…, 01-…). Empty when the directory does
 *  not exist — which is the normal case on a deployment, where these gitignored files aren't shipped. */
export async function readPacket(dir: string): Promise<PacketFile[]> {
  const safe = safeDir(dir);
  if (!safe) return [];
  let names: string[];
  try {
    names = (await readdir(safe)).filter((n) => FILE_RE.test(n)).sort();
  } catch {
    return [];
  }
  const out: PacketFile[] = [];
  for (const name of names) {
    out.push({ name, content: await readFile(path.join(safe, name), "utf-8") });
  }
  return out;
}

/** Overwrite one EXISTING packet file (local owner edit). Returns false if the path is invalid or
 *  the file does not already exist, so this can only ever update a real packet file, never create one. */
export async function writePacketFile(dir: string, name: string, content: string): Promise<boolean> {
  const safe = safeDir(dir);
  if (!safe || !FILE_RE.test(name)) return false;
  const target = path.join(safe, name);
  if (path.dirname(target) !== safe) return false;
  try {
    await access(target); // must already exist
    await writeFile(target, content, "utf-8");
    return true;
  } catch {
    return false;
  }
}
