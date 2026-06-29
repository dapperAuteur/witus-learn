// Live/recording player. Renders the provider's embeddable URL in an iframe, so
// witus-learn stays provider-agnostic (Mux, Cloudflare Stream, YouTube, Viloud…).
export function LivePlayer({ url, title }: { url: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
      <iframe
        src={url}
        title={title}
        className="h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}
