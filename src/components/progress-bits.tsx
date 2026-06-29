// Small, presentational, accessible progress primitives shared by the learner
// dashboard, lesson shell, and course cards. Server components (no interactivity).
// Accent comes from the per-tenant --accent CSS var; feedback colors are constant.

export function ProgressBar({ percent, className = "" }: { percent: number; className?: string }) {
  const pct = Math.max(0, Math.min(100, Math.round(percent)));
  return (
    <div
      className={`h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800 ${className}`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${pct}% complete`}
    >
      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: "var(--accent)" }} />
    </div>
  );
}

export function MasteryRing({ percent, size = 112, label }: { percent: number; size?: number; label?: string }) {
  const pct = Math.max(0, Math.min(100, Math.round(percent)));
  const r = 15.9155; // circumference ≈ 100 → dashoffset = 100 - pct
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 36 36" width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx="18" cy="18" r={r} fill="none" stroke="currentColor" strokeWidth="3.2" className="text-neutral-200 dark:text-neutral-800" />
        <circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset={100 - pct}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="text-xl font-extrabold tabular-nums">{pct}%</div>
          {label ? <div className="text-[11px] text-neutral-400">{label}</div> : null}
        </div>
      </div>
    </div>
  );
}

export function WeekBars({ week }: { week: { label: string; count: number; active: boolean }[] }) {
  const max = Math.max(1, ...week.map((d) => d.count));
  return (
    <div>
      <div className="flex items-end gap-1.5" aria-hidden="true">
        {week.map((d, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${d.active ? "" : "bg-neutral-200 dark:bg-neutral-800"}`}
            style={{
              height: `${8 + Math.round((d.count / max) * 56)}px`,
              backgroundColor: d.active ? "var(--accent)" : undefined,
            }}
          />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-neutral-400">
        {week.map((d, i) => (
          <span key={i} className="flex-1 text-center">
            {d.label[0]}
          </span>
        ))}
      </div>
    </div>
  );
}
