import type { FigureItem } from "@/lib/figures";

// A `:::figure` block: the image, what to look at, and who it came from.
//
// Semantic <figure> / <figcaption> rather than an <img> followed by an italic paragraph, so the
// caption is programmatically associated with the image instead of merely sitting near it. That is
// the difference a screen reader can act on.
//
// The credit sits INSIDE the figcaption, below the caption, in smaller type. It is deliberately not
// hidden behind a toggle: this catalog's trust signal is that it can account for what it publishes,
// and provenance you have to go looking for is provenance most readers will never see.
export function Figure({ url, alt, caption, credit }: FigureItem) {
  // A credit usually ends with the source URL (see the credit line built by
  // scripts/upload-course-media.mjs). Split it off so it can be a real link rather than raw text a
  // reader has to copy out.
  const match = credit.match(/^(.*?)\s*(https?:\/\/\S+)\s*$/);
  const creditText = match ? match[1].trim() : credit.trim();
  const creditHref = match ? match[2] : null;

  return (
    <figure className="my-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt={alt}
        loading="lazy"
        className="h-auto w-full max-w-full rounded-lg border border-black/10 dark:border-white/10"
      />
      <figcaption className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">
        <span className="block">{caption}</span>
        <span className="mt-1 block text-xs text-black/50 dark:text-white/50">
          {creditText}
          {creditHref ? (
            <>
              {" "}
              <a
                href={creditHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
              >
                Source
              </a>
            </>
          ) : null}
        </span>
      </figcaption>
    </figure>
  );
}
