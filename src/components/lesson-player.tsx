import type { Lesson } from "@/db/schema";
import type { ExerciseContent } from "@/lib/exercise";
import { QuizPlayer } from "./quiz-player";
import { ExercisePlayer } from "./exercise-player";
import { SentenceEvaluator } from "./sentence-evaluator";
import { MapLessonContent, type MapContent } from "./map-lesson-content";
import { LessonBody } from "./lesson-body";
import { MediaPlayer } from "./media-player";
import { MultiPartPlayer } from "./multi-part-player";
import { isDirectMediaFile, parseChapters, parseTranscript, toEmbed } from "@/lib/media";

// Renders a lesson by type. Text/audio/video (file or YouTube/Vimeo embed) are first-class
// with chapter jump-markers + a synced transcript; slides/PDF embed; 360/tour/map have basic
// viewers. Markdown is rendered as preserved-whitespace text (no HTML injection).
export function LessonPlayer({ lesson }: { lesson: Lesson }) {
  switch (lesson.lessonType) {
    case "video":
    case "360video": {
      if (!lesson.contentUrl) return <Empty />;
      const chapters = parseChapters(lesson.audioChapters);
      const transcript = parseTranscript(lesson.transcriptContent);
      // A real media file gets the full player (clickable chapters + synced transcript).
      if (isDirectMediaFile(lesson.contentUrl)) {
        return (
          <MediaPlayer
            kind="video"
            src={lesson.contentUrl}
            poster={lesson.video360PosterUrl ?? undefined}
            chapters={chapters}
            transcript={transcript}
          />
        );
      }
      // YouTube/Vimeo/other → embed; chapters/transcript shown statically alongside.
      const embed = toEmbed(lesson.contentUrl);
      return (
        <div className="space-y-4">
          {embed ? <MediaEmbed src={embed.src} title={lesson.title} /> : <Empty />}
          <Chapters value={lesson.audioChapters} />
          <Transcript value={lesson.transcriptContent} />
        </div>
      );
    }

    case "audio": {
      // A long recording split into parts plays back in sequence.
      const parts = Array.isArray(lesson.mediaParts) ? lesson.mediaParts : [];
      if (parts.length > 1) {
        return <MultiPartPlayer kind="audio" parts={parts.map((p) => p.url)} title={lesson.title} />;
      }
      return lesson.contentUrl ? (
        <MediaPlayer
          kind="audio"
          src={lesson.contentUrl}
          chapters={parseChapters(lesson.audioChapters)}
          transcript={parseTranscript(lesson.transcriptContent)}
        />
      ) : (
        <Empty />
      );
    }

    case "text":
    case "assignment":
      return lesson.textContent ? (
        <LessonBody text={lesson.textContent} courseId={lesson.courseId} lessonId={lesson.id} />
      ) : (
        <Empty />
      );

    case "quiz": {
      const c = lesson.quizContent as {
        questions?: { prompt: string; options: string[]; correctIndex: number; imageUrl?: string; imageAlt?: string }[];
        passingScore?: number;
        questionsPerAttempt?: number;
        shuffleOptions?: boolean;
      } | null;
      if (!c?.questions?.length) return <Empty />;
      // Strip correctIndex before it reaches the client; keep image + rotation config.
      const safe = {
        questions: c.questions.map((q) => ({
          prompt: q.prompt,
          options: q.options,
          imageUrl: q.imageUrl,
          imageAlt: q.imageAlt,
        })),
        passingScore: c.passingScore,
        questionsPerAttempt: c.questionsPerAttempt,
        shuffleOptions: c.shuffleOptions,
      };
      return <QuizPlayer courseId={lesson.courseId} lessonId={lesson.id} content={safe} />;
    }

    case "exercise": {
      const ex = lesson.exerciseContent as ExerciseContent | null;
      if (!ex?.items?.length) return <Empty />;
      return (
        <div className="space-y-4">
          {lesson.textContent ? (
            <LessonBody text={lesson.textContent} courseId={lesson.courseId} lessonId={lesson.id} />
          ) : null}
          <ExercisePlayer content={ex} />
          <SentenceEvaluator courseId={lesson.courseId} />
        </div>
      );
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
            <div className="mt-4">
              <LessonBody text={lesson.textContent} courseId={lesson.courseId} lessonId={lesson.id} />
            </div>
          ) : mc ? null : (
            <Empty />
          )}
        </div>
      );
    }

    case "slides":
    default: {
      // slides / virtual_tour — embed. Google Slides links are normalized to /embed; PDFs
      // and any other URL render in an iframe.
      if (!lesson.contentUrl) {
        return <p className="text-neutral-500">This lesson type ({lesson.lessonType}) has no media yet.</p>;
      }
      const embed = toEmbed(lesson.contentUrl);
      return embed ? <MediaEmbed src={embed.src} title={lesson.title} /> : <Empty />;
    }
  }
}

// A sandboxed iframe embed (YouTube/Vimeo/Google Slides/PDF/generic).
function MediaEmbed({ src, title }: { src: string; title: string }) {
  return (
    <iframe
      title={title}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
    />
  );
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
