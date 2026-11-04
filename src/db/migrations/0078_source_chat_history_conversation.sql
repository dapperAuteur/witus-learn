ALTER TABLE "source_chat_history" ADD COLUMN "conversation_id" uuid;--> statement-breakpoint
ALTER TABLE "source_chat_history" ADD COLUMN "turn" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
CREATE INDEX "source_chat_history_user_conversation_idx" ON "source_chat_history" USING btree ("user_id","conversation_id");