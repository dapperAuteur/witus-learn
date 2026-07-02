Goal: After this lesson you can assemble a small, curated, id-stamped dataset that deliberately includes the hard cases and maps cleanly onto a LangSmith dataset.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens the dataset in [`examples/support-reply-loop/eval.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/examples/support-reply-loop/eval.ts) and mirrors it onto a [LangSmith dataset](https://docs.smith.langchain.com/).

## A dataset is curated inputs

An eval needs something to run on. For a reflection loop, that's a dataset of representative inputs. For support replies, the dataset is just the tickets the loop runs on:

```ts
export const supportReplyDataset: EvalExample[] = [
  { id: "blender", ticket: "My blender arrived with a cracked jar and won't seal." },
  { id: "late",    ticket: "The delivery is three days late and I needed it for an event." },
  { id: "double-charge", ticket: "I was charged twice for the same subscription this month." },
  // ...ten in all...
  { id: "dead",    ticket: "It will not turn on at all." },  // the deliberately hard case
];
```

Two design choices matter more than the count.

## Stable ids and curated coverage

First, stable ids. Each example carries an `id`, so a result traces back to its input. You can talk about "the `dead` case failing" instead of "example ten." Pairwise comparison in Lesson 29 joins two runs by id, so the ids have to be stable.

Second, curated coverage instead of random sampling. These ten span the kinds of tickets the loop must handle: a defect, a delay, a billing error, a bug, a promo failure. They also include at least one case the system struggles with on purpose.

## Put the hard cases in on purpose

The `dead` ticket, "It will not turn on at all," has no content word the reply can grab onto to acknowledge the issue. There's no noun of five letters or more, so `firstKeyword` returns an empty string and the loop can't pass it. That isn't a flaw in the dataset. It's the most valuable example in it.

A dataset of only easy cases reports 100% and tells you nothing. Every change still passes, so the eval can't catch a regression or confirm an improvement. The hard cases are where the signal lives. They're the examples that move when you change the writer, the rubric, or the model. Put your known-hard inputs in on purpose, and label them, so a failure on `dead` reads as "expected-hard," not "something broke."

## Mapping to a LangSmith dataset

In LangSmith, this same list becomes a dataset. You create it once, through the SDK's `Client.createDataset` and `createExamples`, or by uploading runs you've already traced. Then you call `evaluate(target, { data: "support-replies", evaluators: [...] })` against it (LangChain, n.d.). The shapes match the local version, examples with inputs and ids, so everything here transfers directly. The local array keeps the course offline. The LangSmith dataset adds a shared, versioned, browsable home for the same examples.

## Datasets grow from production

The best examples aren't invented. They're captured. Every time the loop escalates a ticket in production, or you find a bad output, that input is a candidate for the dataset. Module 3's traces are the source: a run you diagnosed becomes a regression test, so that bug can never quietly return. The dataset is a living record of every failure you've already paid for once.

## In practice

A dataset is a small, curated, id-stamped set of representative inputs that deliberately includes the cases your system struggles with, because those are the only cases that carry signal. Build it from real failures and keep it small enough to read. To feel it work, add an eleventh example to `supportReplyDataset` that you expect the loop to fail, say a ticket with two unrelated problems in one message, then re-run the [Module 4 suite](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/tests/course/module-4-evaluation.test.ts) and watch the pass rate move. A dataset where adding a hard case changes the number is a dataset doing its job.

## Key Takeaways

- A dataset for a reflection loop is the curated inputs the loop runs on, not a random sample.
- Stable ids make each result traceable and let pairwise eval join runs by id.
- The hardest case is the most valuable one, because only cases that can move carry signal.
- The local array and a LangSmith dataset share the same shape, so the work transfers directly.
- Grow the dataset from real production failures so each becomes a permanent regression test.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. In *Advances in Neural Information Processing Systems 36* (pp. 46595 to 46623). Curran Associates. https://arxiv.org/abs/2306.05685
