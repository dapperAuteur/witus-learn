import Link from "next/link";
import type { TenantRecord } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { ECOSYSTEM_PRODUCTS } from "@/lib/ecosystem";

// Ecosystem footer — rendered ONLY on WitUS-branded surfaces (the apex +
// *.witus.online, incl. learn.witus.online), gated in (tenant)/layout.tsx via
// isWitusBrandedHost. White-label tenants keep the isolated per-tenant SiteFooter
// (each brand stands alone — no cross-app directory leaking the shared backend).
//
// Mirrors the witus.online footer: a cross-product directory + legal links + the
// Rise Wellness mental-health callout. Product data is the curated mirror in
// lib/ecosystem.ts (canonical source: witus.online lib/products.ts).

const linkClasses =
  "inline-flex items-center min-h-[32px] py-1 hover:text-neutral-900 dark:hover:text-white transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current rounded";

export function EcosystemFooter({ tenant }: { tenant: TenantRecord }) {
  const { legal } = tenant;
  const products = ECOSYSTEM_PRODUCTS.filter((p) => p.status !== "infrastructure");
  const infrastructure = ECOSYSTEM_PRODUCTS.filter((p) => p.status === "infrastructure");

  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-10 text-sm text-neutral-600 dark:text-neutral-300">
        <RiseWellnessCallout />

        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold text-neutral-900 dark:text-white">{brandName(tenant)}</p>
            <p className="mt-1 text-neutral-500">
              A B4C LLC /{" "}
              <a
                href="https://awesomewebstore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-white"
              >
                AwesomeWebStore.com
                <span className="sr-only"> (opens in new tab)</span>
              </a>{" "}
              brand
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">Ecosystem</p>
              <ul className="space-y-1">
                {products.map((product) => (
                  <li key={product.href}>
                    <a
                      href={product.href}
                      target={product.external ? "_blank" : undefined}
                      rel={product.external ? "noopener noreferrer" : undefined}
                      className={linkClasses}
                    >
                      {product.name}
                      {product.external && <span className="sr-only"> (opens in new tab)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">Infrastructure</p>
              <ul className="space-y-1">
                {infrastructure.map((product) => (
                  <li key={product.href}>
                    <a
                      href={product.href}
                      target={product.external ? "_blank" : undefined}
                      rel={product.external ? "noopener noreferrer" : undefined}
                      className={linkClasses}
                    >
                      {product.name}
                      {product.external && <span className="sr-only"> (opens in new tab)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 font-medium text-neutral-900 dark:text-white">Legal</p>
              <ul className="space-y-1">
                {legal.termsUrl ? (
                  <li>
                    <Link href="/terms" className={linkClasses}>
                      Terms
                    </Link>
                  </li>
                ) : null}
                {legal.privacyUrl ? (
                  <li>
                    <Link href="/privacy" className={linkClasses}>
                      Privacy
                    </Link>
                  </li>
                ) : null}
                {legal.safetyUrl ? (
                  <li>
                    <Link href="/safety" className={linkClasses}>
                      Safety
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-neutral-500">© {brandName(tenant)}</p>
      </div>
    </footer>
  );
}

// Rise Wellness callout — canonical copy per the witus.online footer
// (public/brand/footer-recipe.md). Container surface + accent tokens adapted to
// witus-learn's neutral+accent theme; the disclaimer text is byte-identical to
// witus.online's (vetted with the partner). The accent token uses the tenant's
// --accent var so the callout matches the active brand.
function RiseWellnessCallout() {
  return (
    <section
      aria-labelledby="rise-wellness-heading"
      className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 text-sm dark:border-neutral-800 dark:bg-neutral-900/50"
    >
      <header className="mb-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
          Mental health support
        </p>
        <h2
          id="rise-wellness-heading"
          className="text-base font-semibold text-neutral-900 dark:text-neutral-100"
        >
          Rise Wellness of Indiana
        </h2>
        <p className="mt-0.5 text-xs text-neutral-500">
          Independent mental health provider · Not affiliated with WitUS
        </p>
      </header>

      <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
        Rise Wellness of Indiana provides compassionate, personalized,
        holistic mental health care: evidence-based medicine, trauma-informed
        care, and a whole-person approach to help you heal, grow, and thrive
        in mind, body, and spirit.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            Services
          </p>
          <ul className="space-y-0.5 text-xs text-neutral-600 dark:text-neutral-300">
            <li>ADHD testing &amp; management (in-person and from home)</li>
            <li>Anxiety &amp; depression</li>
            <li>Maternal mental health</li>
            <li>Medication management</li>
            <li>GeneSight® genetic testing</li>
            <li>Behavioral therapy &amp; coaching</li>
            <li>Routine lab testing</li>
          </ul>
        </div>

        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            Visit or call
          </p>
          <address className="not-italic text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
            320 North Meridian Street
            <br />
            Indianapolis, IN 46204
            <br />
            Mon–Sat by appointment · Sun closed
          </address>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-xs">
            <a
              href="tel:+13179650299"
              className="inline-flex min-h-7 items-center font-medium hover:underline focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
              style={{ color: "var(--accent)" }}
            >
              317-965-0299
            </a>
            <span aria-hidden="true" className="text-neutral-400">
              ·
            </span>
            <a
              href="https://risewellnessofindiana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-7 items-center font-medium hover:underline focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
              style={{ color: "var(--accent)" }}
            >
              risewellnessofindiana.com
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <span aria-hidden="true" className="text-neutral-400">
              ·
            </span>
            <a
              href="https://www.centenarianos.com/safety#rise-wellness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-7 items-center font-medium hover:underline focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
              style={{ color: "var(--accent)" }}
            >
              Full safety page
              <span className="sr-only"> on centenarianos.com (opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <blockquote className="mt-4 border-l-2 pl-3 text-xs italic text-neutral-500" style={{ borderColor: "var(--accent)" }}>
        &ldquo;At Rise Wellness, we believe everyone has the capacity to rise
        above challenges and live a fulfilling, healthy life. Our care is
        guided by the belief that healing is personal, holistic, and rooted
        in compassion.&rdquo;
        <span className="mt-1 block not-italic text-neutral-400">
          Rise Wellness of Indiana
        </span>
      </blockquote>

      {/* === NON-NEGOTIABLE DISCLAIMER ===
           Edit ONLY the app name token. Don't paraphrase. Don't trim.
           Don't reorder. This was vetted with the partner. */}
      <p className="mt-4 text-[11px] leading-relaxed text-neutral-500">
        Rise Wellness of Indiana is an independent organization. They are
        not affiliated with, employed by, or endorsed by WitUS,
        CentenarianOS, B4C LLC, AwesomeWebStore.com, or Anthony McDonald.
        We are grateful for their collaboration on mental health safety
        resources for our community.
      </p>
    </section>
  );
}
