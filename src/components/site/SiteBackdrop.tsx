/**
 * Site-wide warm light leak.
 *
 * The glow is anchored to the top of the document (not the viewport) and spans
 * well past the hero, so it spills across the hero/Selected Cuts boundary and
 * dissolves into black instead of stopping at a section edge.
 */
export function SiteBackdrop() {
  return (
    <>
    <div className="site-backdrop" aria-hidden="true">
      <div className="site-glow site-glow-1" />
      <div className="site-glow site-glow-2" />
      <div className="site-glow site-glow-3" />
      <div className="site-veil" />
    </div>
    <div className="site-grain" aria-hidden="true" />
    </>
  );
}
