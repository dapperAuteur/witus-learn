import { formatPrice, priceAnnouncement, type PriceView } from "@/lib/sale-pricing";

// The one way a price is shown when a codeless promotion may apply (course card, course page,
// bundle page). Presentational and pure: it never resolves anything, it renders a PriceView that a
// server component already resolved.
//
// ACCESSIBILITY. A struck price read aloud is indistinguishable from the real one, so the strike is
// hidden from the accessibility tree (`aria-hidden`) and a visually-hidden sentence carries the
// meaning instead: "was $19, now $9". `<s>` (not `<del>`) is the correct element: this is a price
// that no longer applies, not an edit to a document.
//
// COLOUR. BAM asked for the old price in red and the new one in green. The raw Tailwind red-600 /
// green-500 pair fails WCAG AA on the dark background (3.8:1 and 3.1:1), so the shades are picked
// per theme: red-700/red-400 (6.3:1 light, 6.9:1 dark) and emerald-700/emerald-300 (5.6:1 light,
// 12:1 dark), all against this app's white and neutral-900 surfaces. Colour is also never the only
// signal: the strike-through, the "was/now" text and the bold weight all carry it too.
export function PriceTag({
  view,
  /** Appended to the amount, e.g. "/mo" for a subscription. */
  suffix = "",
  className = "",
  /** Show the promotion's name next to the price ("Summer sale"). */
  showName = false,
}: {
  view: PriceView;
  suffix?: string;
  className?: string;
  showName?: boolean;
}) {
  if (!view.discounted) {
    return (
      <span className={className} style={{ color: "var(--accent)" }}>
        {view.isFree ? "Free" : `${formatPrice(view.effectivePrice)}${suffix}`}
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-2 gap-y-0.5 ${className}`}>
      <span className="sr-only">
        {priceAnnouncement(view)}
        {view.promotion && showName ? `, ${view.promotion.name}` : ""}
      </span>
      <s aria-hidden="true" className="text-red-700 dark:text-red-400">
        {formatPrice(view.listPrice)}
        {suffix}
      </s>
      <span aria-hidden="true" className="font-bold text-emerald-700 dark:text-emerald-300">
        {view.isFree ? "Free" : `${formatPrice(view.effectivePrice)}${suffix}`}
      </span>
      {showName && view.promotion ? (
        <span
          aria-hidden="true"
          className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100"
        >
          {view.promotion.name}
        </span>
      ) : null}
    </span>
  );
}
