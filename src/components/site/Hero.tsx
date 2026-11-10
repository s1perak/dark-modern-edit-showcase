export function Hero() {
  return (
    <section id="top" className="hero-canvas relative overflow-hidden border-b border-border">
      <div className="hero-leak hero-leak-1" aria-hidden="true" />
      <div className="hero-leak hero-leak-2" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-meta hero-meta-left" aria-hidden="true">
        <p>ISO 800 · 4K 24FPS · S-LOG3</p>
        <p>TIMELINE ROBERT-V26 · CUT, GRADE, MIX</p>
      </div>
      <div className="hero-meta hero-meta-right" aria-hidden="true">
        <p>REC ● 00:00:24:12</p>
        <p className="text-primary">RENDERING_</p>
      </div>
      <div className="hero-stage site-container relative">
        <div className="hero-copy animate-fade-up">
          <p className="mb-4 text-[10px] font-bold uppercase text-primary opacity-80">Video editor · Portfolio</p>
          <h1 className="hero-title hero-title-wide">
            <span>Robert</span> Blazevic
          </h1>
          <p className="hero-sub">Videos designed to perform — I help creators, brands and influencers turn content into cinematic stories.</p>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          <p className="text-[9px] font-bold uppercase text-muted-foreground">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
