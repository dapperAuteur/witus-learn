import type { Lesson } from "@/db/schema";
import { QuizPlayer } from "./quiz-player";
import { MapLessonContent, type MapContent } from "./map-lesson-content";

// Renders a lesson by type. Text/video/audio are first-class; the richer formats
// (slides/360/tour/map) get a basic viewer here and are deepened in later passes.
// Markdown is rendered as preserved-whitespace text (no HTML injection).
export function LessonPlayer({ lesson }: { lesson: Lesson }) {
  switch (lesson.lessonType) {
    case "video":
    case "360video":
      return lesson.contentUrl ? (
        <video
          controls
          className="w-full rounded-lg"
          poster={lesson.video360PosterUrl ?? undefined}
          src={lesson.contentUrl}
        />
      ) : (
        <Empty />
      );

    case "audio":
      return (
        <div className="space-y-4">
          {lesson.contentUrl ? (
            <audio controls className="w-full" src={lesson.contentUrl} />
          ) : (
            <Empty />
          )}
          <Chapters value={lesson.audioChapters} />
          <Transcript value={lesson.transcriptContent} />
        </div>
      );

    case "text":
    case "assignment":
      return lesson.textContent ? (
        <div className="whitespace-pre-wrap leading-relaxed text-neutral-800 dark:text-neutral-200">
          {lesson.textContent}
        </div>
      ) : (
        <Empty />
      );

    case "quiz": {
      const c = lesson.quizContent as {
        questions?: { prompt: string; options: string[]; correctIndex: number }[];
        passingScore?: number;
      } | null;
      if (!c?.questions?.length) return <Empty />;
      // Strip correctIndex before it reaches the client.
      const safe = {
        questions: c.questions.map((q) => ({ prompt: q.prompt, options: q.options })),
        passingScore: c.passingScore,
      };
      return <QuizPlayer courseId={lesson.courseId} lessonId={lesson.id} content={safe} />;
    }

    case "photo_360":
      return lesson.contentUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={lesson.contentUrl} alt={lesson.title} className="w-full rounded-lg" />
      ) : (
        <Empty />
      );

    case "map": {
      const mc = lesson.mapContent as MapContent | null;
      return (
        <div>
          {mc?.markers?.length || mc?.polygons?.length || mc?.lines?.length ? (
            <MapLessonContent content={mc} />
          ) : null}
          {lesson.textContent ? (
            <div className="mt-4 whitespace-pre-wrap leading-relaxed text-neutral-800 dark:text-neutral-200">
              {lesson.textContent}
            </div>
          ) : mc ? null : (
            <Empty />
          )}
        </div>
      );
    }

    default:
      // slides / virtual_tour / map / quiz — basic embed or a note for later phases.
      return lesson.contentUrl ? (
        <iframe
          title={lesson.title}
          src={lesson.contentUrl}
          className="aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
        />
      ) : (
        <p className="text-neutral-500">
          This lesson type ({lesson.lessonType}) gets its full player in a later phase.
        </p>
      );
  }
}

function Empty() {
  return <p className="text-neutral-500">No media for this lesson yet.</p>;
}

function Chapters({ value }: { value: unknown }) {
  if (!Array.isArray(value) || value.length === 0) return null;
  return (
    <details className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
      <summary className="cursor-pointer font-medium">Chapters</summary>
      <ol className="mt-2 list-decimal pl-5 text-sm">
        {value.map((c, i) => (
          <li key={i}>{typeof c === "object" && c && "title" in c ? String(c.title) : String(c)}</li>
        ))}
      </ol>
    </details>
  );
}

function Transcript({ value }: { value: unknown }) {
  if (!Array.isArray(value) || value.length === 0) return null;
  const text = value
    .map((seg) => (typeof seg === "object" && seg && "text" in seg ? String(seg.text) : String(seg)))
    .join(" ");
  return (
    <details className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
      <summary className="cursor-pointer font-medium">Transcript</summary>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{text}</p>
    </details>
  );
}
