import { ArrowDown, ArrowUpRight } from "lucide-react";
import { projects, shortformProjects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function Hero() {
  const frames = [projects[1], projects[2], projects[0], shortformProjects[0], projects[4]];
  return (
    <section id="top" className="hero-canvas relative overflow-hidden border-b border-border pt-16">
      <div className="hero-stage site-container relative">
        <div className="hero-status font-mono">FRAME 0001 / PORTFOLIO</div>
        {frames.map((frame, index) => frame && (
          <figure key={frame.id} className={`hero-frame hero-frame-${index + 1}`}>
            <img src={frame.thumbnail} alt="" className="h-full w-full object-cover" />
            <figcaption className="font-mono">0{index + 1} — {frame.title}</figcaption>
          </figure>
        ))}
        <div className="hero-copy animate-fade-up">
          <p className="mb-4 font-mono text-[10px] uppercase text-primary">Robert Blazevic / Video editor</p>
          <h1 className="hero-title">Videos<br />Designed to <span>Perform</span></h1>
        </div>
        <div className="hero-intro animate-fade-up">
          <p>I'm Robert — I help creators, brands and influencers turn content into cinematic stories.</p>
          <Button asChild variant="link" className="mt-5 h-auto rounded-none p-0 text-primary hover:no-underline">
            <a href="#work">Enter the archive <ArrowUpRight /></a>
          </Button>
        </div>
        <Button asChild variant="outline" size="icon" className="hero-down rounded-md">
          <a href="#work" aria-label="Scroll to work"><ArrowDown /></a>
        </Button>
      </div>
    </section>
  );
}
