// Live/recording player. Renders the provider's embeddable URL in an iframe, so
// witus-learn stays provider-agnostic (Mux, Cloudflare Stream, YouTube, Viloud…).
// `sandbox` opts into an isolated frame (used for the admin-pasted persistent
// stream, whose src is already host-allowlisted server-side); per-session URLs
// keep the original unsandboxed behavior.
export function LivePlayer({
  url,
  title,
  sandbox = false,
}: {
  url: string;
  title: string;
  sandbox?: boolean;
}) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
      <iframe
        src={url}
        title={title}
        className="h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
        {...(sandbox
          ? { sandbox: "allow-scripts allow-same-origin allow-presentation allow-fullscreen" }
          : {})}
      />
    </div>
  );
}
