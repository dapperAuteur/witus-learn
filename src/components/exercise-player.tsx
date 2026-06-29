"use client";

import { useState } from "react";
import {
  checkExerciseAnswer,
  type ExerciseContent,
  type ExerciseItem,
  type ExerciseVerdict,
} from "@/lib/exercise";

// Formative production drill: type an answer, check it against the key (forgiving on
// accents/case), reveal the answer + the rule. Self-graded, all client-side — not a
// gated assessment. For open production (full sentences), see <SentenceEvaluator>.
export function ExercisePlayer({ content }: { content: ExerciseContent }) {
  const [results, setResults] = useState<Record<number, ExerciseVerdict>>({});
  const done = Object.keys(results).length;
  const got = Object.values(results).filter((v) => v !== "incorrect").length;

  return (
    <div className="space-y-4">
      {content.instructions ? (
        <p className="text-neutral-600 dark:text-neutral-400">{content.instructions}</p>
      ) : null}
      <ol className="space-y-3">
        {content.items.map((item, i) => (
          <Item key={i} item={item} index={i} onResult={(v) => setResults((r) => ({ ...r, [i]: v }))} />
        ))}
      </ol>
      {done > 0 ? (
        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {got} / {content.items.length} so far. {got === content.items.length ? "¡Excelente!" : "Keep going."}
        </p>
      ) : null}
    </div>
  );
}

function Item({
  item,
  index,
  onResult,
}: {
  item: ExerciseItem;
  index: number;
  onResult: (v: ExerciseVerdict) => void;
}) {
  const [value, setValue] = useState("");
  const [verdict, setVerdict] = useState<ExerciseVerdict | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const check = () => {
    if (!value.trim()) return;
    const v = checkExerciseAnswer(item, value);
    setVerdict(v);
    onResult(v);
  };

  const tone =
    verdict === "correct"
      ? "border-green-400 dark:border-green-700"
      : verdict === "close"
        ? "border-amber-400 dark:border-amber-700"
        : verdict === "incorrect"
          ? "border-red-300 dark:border-red-800"
          : "border-neutral-200 dark:border-neutral-800";

  return (
    <li className={`rounded-lg border p-3 ${tone}`}>
      <p className="font-medium">
        {index + 1}. {item.prompt}
      </p>
      <div className="mt-2 flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") check();
          }}
          placeholder="Type your answer"
          className="min-h-10 flex-1 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
          aria-label={`Answer for: ${item.prompt}`}
        />
        <button
          type="button"
          onClick={check}
          className="min-h-10 rounded-md px-4 text-sm font-medium text-white"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Check
        </button>
      </div>

      {item.hint && verdict == null ? (
        showHint ? (
          <p className="mt-1 text-xs text-neutral-500">Hint: {item.hint}</p>
        ) : (
          <button type="button" onClick={() => setShowHint(true)} className="mt-1 text-xs underline text-neutral-500">
            Need a hint?
          </button>
        )
      ) : null}

      {verdict === "correct" ? (
        <p className="mt-2 text-sm text-green-700 dark:text-green-400">✓ Correct!</p>
      ) : verdict === "close" ? (
        <p className="mt-2 text-sm text-amber-700 dark:text-amber-400">
          Almost — watch the spelling/accent: <strong>{item.answer}</strong>
        </p>
      ) : verdict === "incorrect" ? (
        <div className="mt-2 text-sm text-red-700 dark:text-red-400">
          Not quite.{" "}
          {revealed ? (
            <span>
              Answer: <strong>{item.answer}</strong>
            </span>
          ) : (
            <button type="button" onClick={() => setRevealed(true)} className="underline">
              Show answer
            </button>
          )}
        </div>
      ) : null}

      {verdict && verdict !== "incorrect" && item.explanation ? (
        <p className="mt-1 text-xs text-neutral-500">{item.explanation}</p>
      ) : null}
      {verdict === "incorrect" && revealed && item.explanation ? (
        <p className="mt-1 text-xs text-neutral-500">{item.explanation}</p>
      ) : null}
    </li>
  );
}
