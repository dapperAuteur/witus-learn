// Key Terms (rubric D2a) for the Invest.WitUS Python tutorial, one list per chapter, keyed by the
// chapter file's prefix. Hand-written for scripts/gen-invest-tutorial-course.ts.
//
// THE RULE FOR EVERY LINE. The term is a name the chapter itself introduces, and the definition is one
// sentence taken from what that chapter says about it ("What you will learn", "What we learned", the
// docstring in its listing, or the prose beside it), reworded only to stand alone. Nothing here is
// added from outside the chapter. When a chapter is revised and a term's meaning moves, fix the line
// here and regenerate; the generator refuses a chapter with no entry.

import type { KeyTerm } from "./invest-tutorial";

export const INVEST_TUTORIAL_TERMS: Record<string, KeyTerm[]> = {
  "00": [
    { term: "uv", definition: "One tool that installs Python itself, creates the project, keeps the lockfile and runs commands inside the project's environment, like npm, nvm and npx together." },
    { term: "pyproject.toml", definition: "The project file that holds dependencies, scripts and every tool's settings in one place, the way package.json does." },
    { term: "uv.lock", definition: "The lockfile uv writes and you commit but never edit by hand, so every machine installs the same versions." },
    { term: "pytest", definition: "The test runner that finds functions whose names start with test_ and shows both sides of a failed assert." },
    { term: "ruff", definition: "The linter and formatter, ESLint and Prettier in one tool." },
    { term: "pyright", definition: "The type checker behind Pylance, run here in strict mode so every function needs its types written out, like tsc --noEmit." },
  ],
  "01": [
    { term: "Decimal", definition: "The type money goes in, built from strings, because a float cannot hold 0.1 + 0.2 exactly." },
    { term: "to_money", definition: "The function that rounds a Decimal to whole cents with halves rounded away from zero." },
    { term: "summarize", definition: "The function that totals the purchases and values the shares at the latest price." },
    { term: "frozen dataclass", definition: "A class declared with @dataclass(frozen=True, slots=True), a typed, read-only record like a TypeScript type whose fields are all readonly." },
    { term: "pytest.mark.parametrize", definition: "The decorator that runs one test over many inputs." },
    { term: "pytest.raises", definition: "The context manager a test uses when it expects an error." },
  ],
  "02": [
    { term: "PricePoint", definition: "A record of one day's date and closing price." },
    { term: "load_prices", definition: "The function that reads a price file into price points and reports a bad line with its line number." },
    { term: "PriceFileError", definition: "The chapter's own exception class, raised with a line number so a bad file becomes a one-minute fix." },
    { term: "csv.DictReader", definition: "The standard-library reader that turns each CSV row into a dictionary keyed by the header." },
    { term: "argparse", definition: "The standard-library module that gives a command subcommands, --help, validation and exit codes." },
    { term: "tmp_path and capsys", definition: "Two pytest fixtures: a fresh temporary folder for each test, and a capture of what the code prints." },
  ],
  "03": [
    { term: "method, plan and journal", definition: "The three things the chapter keeps apart: the method is rules in TOML, the plan is your numbers, and the journal is what you did." },
    { term: "load_method", definition: "The function that reads a method's TOML rules file from the methods package by its id." },
    { term: "load_plan", definition: "The function that reads your plan's numbers from a TOML file with tomllib." },
    { term: "load_journal", definition: "The function that reads the journal, the CSV record of what you did, into a list of entries." },
    { term: "CHECKED_RULES", definition: "The set of rule ids the review checks, which a test keeps in step with the method's TOML file." },
    { term: "tomllib and importlib.resources", definition: "The standard-library TOML reader, and the way to read a data file that ships inside your package." },
    { term: "StrEnum", definition: "A fixed set of string values, like a TypeScript string union with runtime checks." },
  ],
  "04": [
    { term: "project and app", definition: "A Django project is settings plus a root URL list, and an app is a package with the models, views, URLs, templates and static files for one area of the site." },
    { term: "WaitlistEntry", definition: "The first model, a class whose attributes are the columns of the waitlist table, queried through WaitlistEntry.objects." },
    { term: "migration", definition: "The reviewed, versioned file Django writes to create or change a table." },
    { term: "CSRF token", definition: "The token in every form that stops cross-site posts." },
    { term: "honeypot", definition: "A hidden form field that catches bots." },
    { term: "test client", definition: "How a test asks Django for a page without a browser." },
    { term: "context processor", definition: "A function that adds the same values to every template's context." },
  ],
  "05": [
    { term: "Django admin", definition: "The back office Django generates from the models, which stands on the auth, contenttypes, sessions and messages apps." },
    { term: "Snapshot", definition: "The model for one statement: the account, the statement's as-of date, and where it came from." },
    { term: "TextChoices", definition: "The Django type for a field, such as a status, that takes one of a fixed set of values." },
    { term: "DecimalField", definition: "The model field for money and shares, declared with explicit decimal places." },
    { term: "on_delete", definition: "The ForeignKey setting that says what deleting a row does to the rows that point at it, PROTECT to refuse or CASCADE to delete them too." },
    { term: "UniqueConstraint", definition: "A named database constraint that enforces \"one per\"." },
    { term: "admin_client", definition: "The pytest-django fixture that gives a test a client already logged in as an admin." },
  ],
  "06": [
    { term: "fail closed", definition: "Settings that refuse to start with a message, when the secret key is missing, debug is on in production or a host is not listed, instead of using a quiet default." },
    { term: "database_from_url", definition: "The function that turns a DATABASE_URL connection string into Django's DATABASES[\"default\"] dictionary and refuses anything it does not understand." },
    { term: "fresh_settings", definition: "The test helper that clears the DJANGO_, VERCEL and DATABASE_URL variables, sets exactly the ones a test names, and imports the settings module again." },
    { term: "SECURE_PROXY_SSL_HEADER", definition: "The setting that tells Django to trust the proxy's forwarded-protocol header, set only behind a proxy such as Vercel's that ends HTTPS in front of the app." },
    { term: "WSGI_APPLICATION", definition: "The setting Vercel turns into a file path to find the app it runs." },
    { term: "collectstatic", definition: "The command that gathers static files, which Vercel runs for you when STATIC_ROOT exists." },
  ],
  "06a": [
    { term: "VERCEL_ANALYTICS_ENABLED", definition: "The setting that is true only when the app runs on Vercel and the owner has set VERCEL_ANALYTICS=1 for that environment." },
    { term: "context processor", definition: "The one place a value is handed to every template; reading settings inside it keeps the value live for tests." },
    { term: "queue and deferred script", definition: "The two parts of the plain-HTML analytics snippet: a queue that comes first, and a script that loads without blocking the page." },
    { term: "labeled fallback", definition: "A default kept for a value the host owns, labeled as a fallback, with a behavior check rather than a guess deciding whether it is right." },
    { term: "settings fixture", definition: "The pytest-django fixture that flips a setting at request time inside a test." },
  ],
  "07": [
    { term: "authorization code flow", definition: "The sign-in in six steps: out with a state, a nonce and a challenge, back with a code, the exchange with the verifier, the id token's checks, the person, and the session." },
    { term: "PKCE", definition: "A hash of a random code verifier sent on the way out and the verifier itself sent on the way back, proving to the provider that the process exchanging the code is the one that started the sign-in." },
    { term: "state and nonce", definition: "Two random values: state ties the callback to this browser, and nonce ties the id token to it." },
    { term: "discovery document", definition: "The provider's description of itself, read rather than assumed, whose issuer is checked against the configured one." },
    { term: "JWKS", definition: "The provider's key set, cached and refetched once, from which the token's kid picks the key that checks its signature." },
    { term: "verify_id_token", definition: "The function that makes the checks OpenID Connect asks of a client: the signature, the EdDSA algorithm and nothing else, iss, aud, exp and the nonce." },
    { term: "WitusIdentity", definition: "A one-to-one profile keyed by the provider's sub, used instead of a custom user model." },
  ],
  "08": [
    { term: "DailyClose", definition: "The model for the closing price of one symbol on one day, and where and when the app got it." },
    { term: "Protocol", definition: "A seam: one shape that two price sources share, so the pull never knows which one answered." },
    { term: "PriceSource", definition: "The Protocol both price sources implement." },
    { term: "TiingoEod and CsvPrices", definition: "The two price sources: the vendor client, which sends its key in a header and never in the URL, and chapter 02's file reader, which is the whole price feed on a laptop." },
    { term: "idempotent job", definition: "A job that compares before it writes, counts what it did, and leaves a repeated run with nothing to do." },
    { term: "CRON_SECRET", definition: "The project's secret that arrives with Vercel's cron request as a bearer token and is compared in constant time." },
  ],
  "09": [
    { term: "WatchItem", definition: "The model for one symbol on an account's watch list, unique on the account and the symbol." },
    { term: "normalize_symbol", definition: "The one function that holds the symbol rule, returning the symbol as it will be stored or raising a ValueError whose message is the reason." },
    { term: "watch_symbols", definition: "The hook in the price pull that returns the watched symbols, so a watched symbol is one more request in the same budget." },
    { term: "get_or_create", definition: "The add that agrees with a unique constraint: it reports a row that already exists instead of failing, and survives a race." },
    { term: "require_POST", definition: "The decorator that makes a view answer only POST, used with login_required so a remove is a form and not a link." },
    { term: "messages framework", definition: "Django's way to carry a report across the redirect after a POST, printed once by the base template on whatever page comes next." },
  ],
  "10": [
    { term: "MethodPlan", definition: "The model that holds the method's id and the person's numbers, never a rule." },
    { term: "JournalEntry", definition: "The model for one journal row, mirroring chapter 03's Entry plus shares and a note." },
    { term: "available_methods", definition: "The function that lists the rules files the package ships, so the start form reads the list instead of hardcoding it." },
    { term: "partial unique constraint", definition: "A UniqueConstraint with a condition, which lets an account keep an ended plan as history while the database refuses a second active one." },
    { term: "ModelForm", definition: "A form built from a model that takes its fields, choices and validators from the model and runs the model's validation inside its own." },
    { term: "chosen_view", definition: "The function that reads from the session which of the three views the person chose." },
    { term: "request.session", definition: "A per-visitor dictionary kept on the server, written in one view and read in the next, and flushed by a sign-out." },
  ],
};
