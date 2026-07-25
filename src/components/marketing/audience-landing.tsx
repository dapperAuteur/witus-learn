import Link from "next/link";
import type { AudienceLandingContent } from "@/lib/marketing/audience-landing";

// Shared renderer for every /for/<audience> page. Server component, no state. Mirrors the shape and
// accessibility of /platform: >=44px tap targets, sr-only section headings, dark-mode pairs, and the
// tenant accent for every accent colour. The content (and its honesty) lives in the audience files.
export function AudienceLanding({
  content,
  brand,
}: {
  content: AudienceLandingContent;
  brand: string;
}) {
  const primaryBtn =
    "inline-block min-h-11 rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12";
  const secondaryBtn =
    "inline-block min-h-11 rounded-md border-2 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12";

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {content.eyebrow} · {brand}
        </p>
        <h1 className="mx-auto mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">{content.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          {content.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href={content.primaryCta.href} className={primaryBtn} style={{ backgroundColor: "var(--accent)" }}>
            {content.primaryCta.label}
          </Link>
          {content.secondaryCta ? (
            <Link
              href={content.secondaryCta.href}
              className={secondaryBtn}
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              {content.secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </header>

      <section aria-labelledby="value-heading" className="mb-12">
        <h2 id="value-heading" className="sr-only">
          What {content.eyebrow.replace(/^For /i, "")} get
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.valueProps.map((v) => (
            <div key={v.title} className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
              <span aria-hidden className="text-2xl">
                {v.icon}
              </span>
              <h3 className="mt-2 font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {content.faq && content.faq.length > 0 ? (
        <section aria-labelledby="faq-heading" className="mb-12">
          <h2 id="faq-heading" className="mb-4 text-xl font-semibold">
            Questions
          </h2>
          <dl className="space-y-3">
            {content.faq.map((f) => (
              <div key={f.q} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <section className="rounded-lg border-2 p-6 text-center" style={{ borderColor: "var(--accent)" }}>
        <h2 className="text-xl font-semibold">{content.closer.title}</h2>
        <p className="mx-auto mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">{content.closer.body}</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          <Link href={content.primaryCta.href} className={primaryBtn} style={{ backgroundColor: "var(--accent)" }}>
            {content.primaryCta.label}
          </Link>
          <Link href="/for" className="text-sm font-medium underline" style={{ color: "var(--accent)" }}>
            Who else is this for?
          </Link>
        </div>
      </section>
    </main>
  );
}
