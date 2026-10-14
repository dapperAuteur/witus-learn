import type { Lesson } from "@/db/schema";
import type { ExerciseContent } from "@/lib/exercise";
import { toSafeQuiz, type QuizContent } from "@/lib/quiz";
import { QuizPlayer } from "./quiz-player";
import { ExercisePlayer } from "./exercise-player";
import { SentenceEvaluator } from "./sentence-evaluator";
import { MapLessonContent, type MapContent } from "./map-lesson-content";
import { LessonBody } from "./lesson-body";
import { MediaPlayer } from "./media-player";
import { MultiPartPlayer } from "./multi-part-player";
import { isDirectMediaFile, parseChapters, parseTranscript, toEmbed } from "@/lib/media";
import { displayTourBody, displayTourTitle, type TourMedia } from "@/lib/field-log-tour";

// Renders a lesson by type. Text/audio/video (file or YouTube/Vimeo embed) are first-class
// with chapter jump-markers + a synced transcript; slides/PDF embed; 360/tour/map have basic
// viewers. Markdown is rendered as preserved-whitespace text (no HTML injection).
//
// `resumeAt` is the ACTIVE learner's saved playback position for this lesson (0 when signed
// out, or when they've never played it) — direct-media audio/video picks up from there.
// `trackRecall` marks the viewer as a signed-in learner so `:::reveal` check-yourself cards
// offer their "I got it / Missed it" self-grade (signed out, the reveal still works untracked).
// `tourEmbed` is a tour from the field (plans/93 section 2) for a virtual_tour lesson with no link
// of its own, already re-checked by the page against its capture's consent and its leg's permission.
export function LessonPlayer({
  lesson,
  resumeAt = 0,
  trackPlayback = false,
  trackRecall = false,
  readOnly = false,
  tourEmbed,
}: {
  lesson: Lesson;
  resumeAt?: number;
  trackPlayback?: boolean;
  trackRecall?: boolean;
  /** Auditor view (plans/52 section 5): read everything, record nothing. */
  readOnly?: boolean;
  tourEmbed?: { media: TourMedia; credit: string } | null;
}) {
  // Only a signed-in learner has a position worth saving; signed out, the player is untracked.
  const track = trackPlayback ? { courseId: lesson.courseId, lessonId: lesson.id, resumeAt } : {};
  switch (lesson.lessonType) {
    case "video":
    case "360video": {
      if (!lesson.contentUrl) return <Empty />;
      const chapters = parseChapters(lesson.audioChapters);
      const transcript = parseTranscript(lesson.transcriptContent);
      // A real media file gets the full player (clickable chapters + synced transcript).
      if (isDirectMediaFile(lesson.contentUrl)) {
        const player = (
          <MediaPlayer
            kind="video"
            src={lesson.contentUrl}
            poster={lesson.video360PosterUrl ?? undefined}
            chapters={chapters}
            transcript={transcript}
            {...track}
          />
        );
        // Keep the written lesson visible with the video (read-along), when it carries body text.
        return lesson.textContent ? (
          <div className="space-y-4">
            {player}
            <LessonBody text={lesson.textContent} courseId={lesson.courseId} lessonId={lesson.id} trackRecall={trackRecall} blockAnchors />
          </div>
        ) : (
          player
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
      const player =
        parts.length > 1 ? (
          <MultiPartPlayer kind="audio" parts={parts.map((p) => p.url)} title={lesson.title} />
        ) : lesson.contentUrl ? (
          <MediaPlayer
            kind="audio"
            src={lesson.contentUrl}
            chapters={parseChapters(lesson.audioChapters)}
            transcript={parseTranscript(lesson.transcriptContent)}
            {...track}
          />
        ) : (
          <Empty />
        );
      // Keep the written lesson visible WITH the audio so the learner can read and follow along —
      // many audio lessons carry their text in `textContent`, not a synced transcript.
      return lesson.textContent ? (
        <div className="space-y-4">
          {player}
          <LessonBody text={lesson.textContent} courseId={lesson.courseId} lessonId={lesson.id} trackRecall={trackRecall} blockAnchors />
        </div>
      ) : (
        player
      );
    }

    case "text":
    case "assignment":
      return lesson.textContent ? (
        <LessonBody text={lesson.textContent} courseId={lesson.courseId} lessonId={lesson.id} trackRecall={trackRecall} blockAnchors />
      ) : (
        <Empty />
      );

    case "quiz": {
      const c = lesson.quizContent as QuizContent | null;
      if (!c?.questions?.length) return <Empty />;
      // Strips correctIndex before it reaches the client AND resolves questionsPerAttempt through
      // the catalog-wide 10-question cap — every quiz in every course is served through here.
      const safe = toSafeQuiz(c);
      return <QuizPlayer courseId={lesson.courseId} lessonId={lesson.id} content={safe} readOnly={readOnly} />;
    }

    case "exercise": {
      const ex = lesson.exerciseContent as ExerciseContent | null;
      if (!ex?.items?.length) return <Empty />;
      return (
        <div className="space-y-4">
          {lesson.textContent ? (
            <LessonBody text={lesson.textContent} courseId={lesson.courseId} lessonId={lesson.id} trackRecall={trackRecall} blockAnchors />
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
              <LessonBody text={lesson.textContent} courseId={lesson.courseId} lessonId={lesson.id} trackRecall={trackRecall} blockAnchors />
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
      //
      // The body renders EITHER WAY. A 360 site lesson is written to ship before its tour exists
      // (plans/37 §1: the tour is a drop-in), and its body is the context that tells the learner
      // what to look for. Returning early on a missing url would hide that authored text and leave
      // the lesson looking empty rather than pending.
      //
      // A tour from the field fills the slot only when the lesson has no link of its own. Its credit
      // renders as plain text under it, and the body's "this tour is forthcoming" paragraph is
      // hidden, because it is no longer true.
      const embed = lesson.contentUrl ? toEmbed(lesson.contentUrl) : null;
      const fieldTour = !embed && lesson.lessonType === "virtual_tour" ? tourEmbed ?? null : null;
      const body = displayTourBody(lesson.textContent, fieldTour !== null);
      return (
        <div>
          {embed ? (
            <MediaEmbed src={embed.src} title={lesson.title} />
          ) : fieldTour ? (
            <FieldTour media={fieldTour.media} credit={fieldTour.credit} title={displayTourTitle(lesson.title, true)} />
          ) : (
            <p className="text-neutral-600">
              This lesson type ({lesson.lessonType}) has no media yet.
            </p>
          )}
          {body ? (
            <div className="mt-4">
              <LessonBody
                text={body}
                courseId={lesson.courseId}
                lessonId={lesson.id}
                trackRecall={trackRecall}
                blockAnchors
              />
            </div>
          ) : null}
        </div>
      );
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

// A tour from the field: the capture's own link (never a hosted copy), with its credit as plain text.
function FieldTour({ media, credit, title }: { media: TourMedia; credit: string; title: string }) {
  return (
    <figure className="space-y-2">
      {media.kind === "image" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={media.src} alt={`Tour photo: ${title}`} className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800" />
      ) : media.kind === "video" ? (
        <video
          src={media.src}
          controls
          preload="metadata"
          title={title}
          className="aspect-video w-full rounded-lg border border-neutral-200 bg-black dark:border-neutral-800"
        />
      ) : (
        <MediaEmbed src={media.src} title={title} />
      )}
      <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">{credit}</figcaption>
    </figure>
  );
}

function Empty() {
  return <p className="text-neutral-600">No media for this lesson yet.</p>;
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
