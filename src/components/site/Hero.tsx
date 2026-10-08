export function Hero() {
  return (
    <section id="top" className="hero-canvas relative overflow-hidden border-b border-border">
      <div className="hero-leak hero-leak-1" aria-hidden="true" />
      <div className="hero-leak hero-leak-2" aria-hidden="true" />
      <div className="hero-leak hero-leak-3" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-stage site-container relative">
        <div className="hero-copy animate-fade-up">
          <p className="mb-6 text-[10px] font-bold uppercase text-primary opacity-80">Portfolio — Robert Blazevic</p>
          <h1 className="hero-title">
            Videos<br />
            Designed to<br />
            <span>Perform</span>
          </h1>
          <p className="hero-sub">I'm Robert — I help creators, brands and influencers turn content into cinematic stories.</p>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          <p className="text-[9px] font-bold uppercase text-muted-foreground">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
