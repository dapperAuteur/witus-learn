-- Role mailboxes for the five synthetic faculty accounts (BAM, 2026-11-10: "change faculty email on ElementaryMBA to
-- faculty@awews.com" and "change emails for users (Learn.WitUS Faculty, WitUS Health Faculty, WitUS Languages, WitUS
-- Trade Faculty) to use" his domain "and choose a unique username or local part for each"). These accounts
-- were made by old seeds and exist only in the database; no seed creates them any more (every seeder now uses the
-- platform owner's account), so this migration is the one place their addresses are set. The addresses are role
-- mailboxes on BAM's domain that he chose; tests/owner-email.test.ts allows exactly these local parts in this file.
--
-- Keyed by USERNAME, never by the current address. A row changes only when its address differs from the target
-- (IS DISTINCT FROM), so a re-run is a no-op. A target address that already belongs to ANOTHER account is left
-- alone: that row is skipped, nothing fails, and the operator task names it. The platform owner is never touched.
-- Every change is logged in account_changes (actor_role 'migration') with the old and the new address, so it can be
-- reversed. email_verified goes false: the first magic-link sign-in at the new address verifies it.
WITH targets(username, new_email) AS (
	VALUES
		('emba-faculty', 'faculty@awews.com'),
		('witus-faculty', 'learn-faculty@awews.com'),
		('witus-health', 'health-faculty@awews.com'),
		('witus-languages', 'languages@awews.com'),
		('trade-faculty', 'trade-faculty@awews.com')
),
picked AS (
	SELECT u.id AS user_id, u.email AS old_email, t.new_email
	FROM targets t
	JOIN user_profiles p ON p.username = t.username::citext
	JOIN users u ON u.id = p.user_id
	WHERE u.email IS DISTINCT FROM t.new_email
		AND p.is_platform_owner = false
		AND NOT EXISTS (SELECT 1 FROM users o WHERE lower(o.email) = lower(t.new_email) AND o.id <> u.id)
),
changed AS (
	UPDATE users u
	SET email = picked.new_email, email_verified = false, updated_at = now()
	FROM picked
	WHERE u.id = picked.user_id
	RETURNING u.id AS user_id, picked.old_email, picked.new_email
)
INSERT INTO account_changes (user_id, actor_role, field, from_value, to_value)
SELECT user_id, 'migration', 'email', old_email, new_email FROM changed;
