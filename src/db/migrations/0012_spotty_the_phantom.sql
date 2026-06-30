ALTER TABLE "lessons" DROP CONSTRAINT "lessons_type_chk";--> statement-breakpoint
ALTER TABLE "lessons" ADD COLUMN "exercise_content" jsonb;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_type_chk" CHECK ("lessons"."lesson_type" in ('video','text','audio','slides','quiz','360video','photo_360','virtual_tour','map','assignment','exercise'));