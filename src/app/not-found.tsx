// Neutral 404 — an unknown host or cross-tenant resource resolves here. It must
// never reveal another brand's name or content (isolation rule).
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-3 px-6 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        This page could not be found.
      </p>
    </main>
  );
}
