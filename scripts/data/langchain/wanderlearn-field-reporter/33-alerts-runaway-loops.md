Goal: After this lesson you can count runaway runs and turn every production metric into a threshold alert that pages you on the right signal and stays quiet otherwise.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). On screen this lesson opens [`examples/support-reply-loop/production.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/examples/support-reply-loop/production.ts) and [`tests/course/module-5-production.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/tests/course/module-5-production.test.ts).

## A metric you have to remember is a metric you'll miss

A metric you have to remember to check is a metric you'll miss at 3am. This lesson turns the convergence and cost numbers into alerts: thresholds that page you when the loop misbehaves. It pays special attention to the runaway loop, the failure that costs the most and hides the longest. By the end you can wire alerts that fire on the right signals and stay quiet the rest of the time.

## The runaway loop: full budget, zero output

Module 1 guaranteed the loop terminates. But terminating at the cap, unresolved, every single time is its own pathology. The loop burns the full revision budget on every run and resolves none of them. That's a runaway loop, and it's the most expensive way a loop can fail. It pays maximum cost for zero good output.

Count it explicitly.

```ts
runawayCount: records.filter(
  (r) => r.outcome === "escalated" && r.revisions >= maxRevisions,
).length,
```

A runaway run escalated and hit the hard cap. That's different from a run that escalated early by convergence detection (Module 1), which is the loop being efficient and cheap. The Module 5 test drives the loop with a never-passing, always-changing writer and asserts every run is a runaway.

## Thresholds that page you

`checkAlerts` compares the metrics to thresholds and returns the alerts that fired.

```ts
export function checkAlerts(metrics, thresholds): Alert[] {
  const alerts: Alert[] = [];
  if (metrics.convergenceRate < thresholds.minConvergenceRate) {
    alerts.push({ kind: "low-convergence", message: "..." });
  }
  if (metrics.runawayCount > thresholds.maxRunawayCount) {
    alerts.push({ kind: "runaway", message: "..." });
  }
  if (metrics.costPerConvergedOutput > thresholds.maxCostPerConvergedOutput) {
    alerts.push({ kind: "cost", message: "..." });
  }
  return alerts;
}
```

Three signals, three alerts.

## One pathology, three alarms

Watch how the alerts interact. When convergence hits zero, there are no resolved runs, so cost-per-converged-output is `Infinity`, and the cost alert fires too. The Module 5 test asserts all three fire on a fully runaway loop.

That's correct and informative. A runaway loop is at once not converging, running away, and infinitely expensive per good output. One pathology, three alarms, which is exactly the redundancy you want for the worst case.

## Alert on rates, set thresholds with margin

Two disciplines keep alerts useful instead of noisy.

1. Alert on rates over a window, not single runs. One escalation is normal. A rate of escalations over the last N runs is signal. Alerting per run would page you constantly, and a pager that cries wolf gets muted.
2. Set thresholds with margin. This is the Module 4 callback. The same judge noise that made you set an eval threshold below 100% applies here. Alert when convergence drops clearly below normal, not on every wobble. Otherwise the team mutes the pager, and a muted pager catches nothing.

## The dashboard nobody watches

Here's the failure this lesson exists to prevent. You compute convergence, runaway, and cost metrics, and then you never wire them to an alert. The metrics are perfect. The 3am regression runs for six hours because no one was looking. A metric without an alert is a metric you'll miss exactly when it matters. Wire the alert.

## In practice

The runaway loop, full budget and zero resolutions, is the most expensive failure, so count it explicitly and alert on it. Turn every production metric into a threshold that pages you. Alert on rates over a window with margin for noise. Never ship a loop whose health lives only on a dashboard someone has to remember to open.

Try it yourself. In the Module 5 test, raise `maxRunawayCount` to a large number like 100 and watch the runaway alert go silent even on the runaway loop. Then notice you just muted the most important alarm. Restore it to 0. Threshold-setting is the whole craft: too loose and you miss the fire.

## Key Takeaways

- A runaway loop escalates while hitting the hard cap on every run, paying maximum cost for zero output, so it's the most expensive failure to catch.
- Count runaways explicitly with the outcome-and-cap filter, and give them their own alert.
- `checkAlerts` turns three metrics (convergence, runaway count, cost per converged output) into three threshold alerts.
- Zero convergence makes cost-per-converged-output Infinity, so a fully runaway loop trips all three alarms at once.
- Alert on rates over a window with margin for judge noise, and never leave a metric on a dashboard with no alert behind it.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/
