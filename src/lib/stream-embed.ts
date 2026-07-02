// Safe handling of a pasted stream embed. The admin pastes a provider embed code
// (an <iframe> inside a <div>, e.g. from Viloud) or a bare playback URL. We NEVER
// render the pasted HTML. Instead we extract the iframe's `src`, verify it is an
// https URL on an allowlisted streaming host, and render only that URL inside our
// own sandboxed iframe. This keeps a compromised or malformed paste from injecting
// scripts or markup into the page.

// Registrable hosts we trust to serve a video player in an iframe. Match is exact
// or a subdomain (e.g. `s.viloud.tv`). Extend this list to add a provider.
export const STREAM_HOST_ALLOWLIST: readonly string[] = [
  "viloud.tv", // Viloud
  "wave.video", // Wave.Video (covers embed.wave.video and other subdomains)
  "youtube.com",
  "youtube-nocookie.com",
  "youtu.be",
  "vimeo.com",
  "player.vimeo.com",
  "mux.com",
  "cloudflarestream.com",
  "videodelivery.net", // Cloudflare Stream
];

function hostIsAllowed(host: string): boolean {
  const h = host.toLowerCase();
  return STREAM_HOST_ALLOWLIST.some((d) => h === d || h.endsWith(`.${d}`));
}

/** True when `value` is an https URL on an allowlisted streaming host. */
export function isAllowedStreamUrl(value: string): boolean {
  let u: URL;
  try {
    u = new URL(value.trim());
  } catch {
    return false;
  }
  return u.protocol === "https:" && hostIsAllowed(u.host);
}

/** Pull the first iframe `src` out of a pasted embed snippet. Returns null if none. */
export function extractIframeSrc(embed: string): string | null {
  // Deliberately narrow: find an <iframe ... src="..."> and take the URL. We do not
  // parse or keep any other markup.
  const m = embed.match(/<iframe[^>]*\ssrc\s*=\s*["']([^"']+)["']/i);
  return m ? m[1].trim() : null;
}

export interface StreamSrcResult {
  /** The validated https URL to render in our sandboxed iframe. */
  src?: string;
  /** A human-readable reason the input was rejected. */
  error?: string;
}

/**
 * Resolve admin input (a bare URL or a full embed snippet) to a single safe URL.
 * Accepts either form; always returns an allowlisted https URL or an error.
 */
export function resolveStreamSrc(input: string): StreamSrcResult {
  const raw = input.trim();
  if (!raw) return { error: "Empty input." };

  // A bare URL, or an embed snippet we extract the iframe src from.
  const candidate = raw.startsWith("http") && !raw.includes("<") ? raw : extractIframeSrc(raw);
  if (!candidate) {
    return { error: "Could not find an iframe URL in that embed code. Paste the provider's embed (an <iframe> in a <div>) or a direct https player URL." };
  }
  if (!isAllowedStreamUrl(candidate)) {
    let host = "the pasted URL's host";
    try {
      host = new URL(candidate).host;
    } catch {
      /* keep the generic label */
    }
    return {
      error: `That embed points at ${host}, which is not an allowed streaming host. Allowed: ${STREAM_HOST_ALLOWLIST.join(", ")}. Add the host to STREAM_HOST_ALLOWLIST in src/lib/stream-embed.ts if it is a provider you trust.`,
    };
  }
  return { src: candidate };
}
