# Docs notes: in-app video recording (for the bundler)

README.md and src/lib/roadmap.ts are owned by other branches, so this branch does not touch
them. When bundling, fold these in:

## README sentence (feature list, next to the audio-recorder bullet)

> In-app lesson recording now captures **video as well as audio**: 720p front-camera capture with
> a mirrored live self-view (the saved file is not mirrored), the same offline-first
> IndexedDB → Cloudinary pipeline with automatic sub-100 MB part splitting, and a teleprompter
> self-view docked at the top of the screen so reading the script keeps the speaker's eyes near
> the lens. `lessonType` is set to `audio` or `video` to match the take.

## Roadmap line (src/lib/roadmap.ts)

> Shipped: in-app video recording with teleprompter self-view (plan 60, phase 2 of 3). Still
> open from plan 60: camera flip control, portrait lock, full camera-behind-the-script surface,
> per-user remembered mode. Video editing (brightness/contrast) was cut by BAM on 2026-08-10.

## Operator note (no action required yet, verify on first real video take)

Video uploads reuse the existing **unsigned Cloudinary preset** via the `auto/upload` endpoint,
so no new infra was added (media library stays deferred until paying users). If the preset was
ever restricted to image/audio formats, the recorder surfaces Cloudinary's exact error message
in-UI; the fix is the preset settings, not code. The 100 MB per-asset plan cap is unchanged and
handled by part rotation (~4 to 6 minutes of 720p per part).
