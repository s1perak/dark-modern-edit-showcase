import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="hero-canvas relative">
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
          <div className="hero-actions">
            <Button asChild className="h-11 rounded-full px-7 text-[10px] font-bold uppercase tracking-[0.16em]">
              <a href="#work">See my work</a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full border-border/70 bg-transparent px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground hover:bg-secondary hover:text-foreground">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          <p className="text-[9px] font-bold uppercase text-muted-foreground">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
