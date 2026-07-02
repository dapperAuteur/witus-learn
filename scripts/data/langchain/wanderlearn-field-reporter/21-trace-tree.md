Goal: After this lesson you can read a cyclic loop's trace tree and name its revision count, cost, score trajectory, and terminal state.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the deployed app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/tracing.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/examples/support-reply-loop/tracing.ts) for the local `RunTrace` it records, maps it onto a run of [`examples/support-reply-loop/run.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/examples/support-reply-loop/run.ts), and sketches the hand-built traces in [`tests/course/module-3-tracing.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/tests/course/module-3-tracing.test.ts).

## A cycle traces differently from a straight line

A reflection loop is a cycle, and a cycle traces differently from a straight pipeline. The same node shows up many times, once per pass. This lesson teaches you to read that shape: to look at a trace tree and see how many revisions ran, what each cost, and where the loop spent its time. By the end the cyclic trace is a picture you can read at a glance.

## Reading the tree out loud

A linear chain traces as a tidy ladder, each node once, top to bottom. A reflection loop traces as a repeating structure, because write_reply then critique_reply runs again every time the router sends the draft back. Here's a two-revision run, drawn as an indented tree. Read it top to bottom, and let each indent mean "called by the line above."

```
buildTracedReplyLoop                     (root: the whole run)
  write_reply      rev 1                 draft 1
  critique_reply   rev 1   2/4 passed
      judge: acknowledges_issue   pass
      judge: gives_next_step      fail
      judge: states_timeline      fail
      judge: has_signoff          pass
  write_reply      rev 2                 draft 2, revised with feedback
  critique_reply   rev 2   4/4 passed
  mark_resolved
```

Say it in words. The root span is the whole run. Under it, write_reply produces draft one. Then critique_reply scores that draft two of four, and under critique_reply sit four judge spans, one per criterion, two passing and two failing. Then write_reply produces draft two, critique_reply scores it four of four, and mark_resolved ends the run.

This is the local `RunTrace` the loop records (`examples/support-reply-loop/tracing.ts`), and it's the same shape LangSmith draws: a tree of spans, one per node and one per LLM call, nested by who called whom (LangChain, n.d.). LangGraph runs the loop as a series of super-steps. Each pass through write_reply then critique_reply is one iteration of the cycle, and the trace stacks them in order.

## Four things you read off the shape at a glance

You learn to read four things off the tree without reading any text:

1. **Revision count is how many `critique_reply` spans there are.** Two spans, one revision. Six spans, the loop nearly hit the cap, a smell worth investigating.
2. **Where the time and tokens went.** Each span carries duration and token counts, so you can see that, say, the judge calls dominate cost. That's exactly the data Module 5 uses for cost-per-converged-output.
3. **The score trajectory.** Reading `passedChecks` down the `critique_reply` spans, two of four then four of four, shows the loop improving. A flat trajectory, two of four then two of four then two of four, shows it not improving, which is the next three lessons.
4. **The terminal node.** The last child, `mark_resolved` or `flag_for_human`, tells you how it ended, recovering the distinction Lesson 19 said the output throws away.

## Why the per-criterion child spans matter

Because Module 2's judge scores one criterion at a time, each `critique_reply` span has a child span per criterion, each with its own pass or fail, its evidence, and, in LangSmith, the model call that produced it. This is where the rubric craft pays off in debugging. When a draft fails, you don't see "critique failed". You see which criterion failed, with the judge's evidence, in the trace. A compound criterion (Lesson 16) would collapse those child spans into one ambiguous verdict. Atomic criteria keep the trace legible.

## A trace keeps structure a log throws away

The deep point: a log throws away structure, because it's a flat stream. A trace keeps it. The cycle, the nesting of judge calls inside a critique inside the run, the order of revisions, all of it survives in the tree. That preserved structure is what makes every diagnosis in the next lessons a matter of reading a shape instead of rebuilding a story from log fragments.

## In practice

Map a real run onto the tree above. Run `npx tsx examples/support-reply-loop/run.ts` and picture it: two drafts, so two `critique_reply` spans, ending in resolution.

```bash
npx tsx examples/support-reply-loop/run.ts
```

Then open the Module 3 test's hand-built traces. The wasted-iteration one has three steps with `passedChecks` going one, then one, then four. Sketch its tree: three write_reply and critique_reply pairs, the middle one no higher than the first, then a terminal node. A cyclic graph traces as a repeating, nested tree, and that tree is readable. Revision count, cost, score trajectory, and terminal state are all visible in its shape. You don't parse a cyclic trace. You look at it. The next three lessons name the shapes that mean trouble.

## Key Takeaways

- A cyclic loop traces as a repeating, nested tree: the same write_reply and critique_reply nodes recur, once per pass.
- Revision count is the number of `critique_reply` spans; a long stack means the loop nearly hit the cap.
- Each span carries duration and token counts, so cost is visible in the tree.
- The score trajectory (`passedChecks` down the critique spans) shows whether the loop is improving, and the terminal node shows how it ended.
- Atomic criteria give one child span per criterion, so a failure names the exact criterion with evidence; a compound criterion would hide that.
- A trace preserves the run's structure a flat log throws away, which is what makes later diagnoses a matter of reading a shape.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/
