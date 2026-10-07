import { projects, shortformProjects } from "@/data/portfolio";

export function Hero() {
  const frames = [projects[1], projects[2], shortformProjects[0], projects[4]];
  return (
    <section id="top" className="hero-canvas relative overflow-hidden border-b border-border">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-stage site-container relative">
        {frames.map((frame, index) => frame && (
          <figure key={frame.id} className={`hero-frame hero-frame-${index + 1}`} aria-hidden="true">
            <img src={frame.thumbnail} alt="" className="h-full w-full object-cover" />
          </figure>
        ))}
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
