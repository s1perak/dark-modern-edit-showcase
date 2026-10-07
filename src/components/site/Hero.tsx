import fx3 from "@/assets/floating-fx3.png";
import lens from "@/assets/floating-lens.png";
import clapper from "@/assets/floating-clapper.png";
import reel from "@/assets/floating-reel.png";
import headphones from "@/assets/floating-headphones.png";
import orbCream from "@/assets/orb-cream.png";
import orbRing from "@/assets/orb-ring.png";
import orbRibbon from "@/assets/orb-ribbon.png";
import orbSmall from "@/assets/orb-small.png";
import orbCube from "@/assets/orb-cube.png";

export function Hero() {
  return (
    <section id="top" className="hero-canvas relative overflow-hidden border-b border-border">
      <div className="hero-glow" aria-hidden="true" />
      <img src={fx3} alt="" aria-hidden="true" className="hero-orb hero-orb-1 animate-float-slow" width={1024} height={1024} />
      <img src={reel} alt="" aria-hidden="true" className="hero-orb hero-orb-2 animate-float-slow" width={1024} height={1024} loading="lazy" />
      <img src={clapper} alt="" aria-hidden="true" className="hero-orb hero-orb-4 animate-float-slow" width={1024} height={1024} loading="lazy" />
      <img src={lens} alt="" aria-hidden="true" className="hero-orb hero-orb-5 animate-float-slow" width={1024} height={1024} loading="lazy" />
      <img src={headphones} alt="" aria-hidden="true" className="hero-orb hero-orb-6 animate-float-slow" width={1024} height={1024} loading="lazy" />
      <img src={orbCream} alt="" aria-hidden="true" className="hero-orb hero-orb-7 animate-float-slow" width={816} height={816} loading="lazy" />
      <img src={orbRing} alt="" aria-hidden="true" className="hero-orb hero-orb-8 animate-float-slow" width={816} height={816} loading="lazy" />
      <img src={orbRibbon} alt="" aria-hidden="true" className="hero-orb hero-orb-9 animate-float-slow" width={816} height={816} loading="lazy" />
      <img src={orbSmall} alt="" aria-hidden="true" className="hero-orb hero-orb-10 animate-float-slow" width={816} height={816} loading="lazy" />
      <img src={orbCube} alt="" aria-hidden="true" className="hero-orb hero-orb-11 animate-float-slow" width={816} height={816} loading="lazy" />
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
