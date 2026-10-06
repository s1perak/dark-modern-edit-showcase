import { ArrowDown, ArrowUpRight } from "lucide-react";
import { showreelUrl } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const disciplines = ["Editing", "Motion Design", "Sound Design", "Color"];

export function Hero() {
  return (
    <section id="top" className="hero-cover relative w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-10 grayscale"
        autoPlay
        muted
        loop
        playsInline
        src={showreelUrl}
      />
      <div className="hero-shade absolute inset-0" />
      <div className="dotgrid pointer-events-none absolute inset-0" />
      

      <div className="site-container relative z-10 flex flex-col justify-center pb-8 pt-40 lg:pt-48">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8 animate-fade-up">
            <div className="mb-8 inline-flex items-center gap-3 text-[10px] uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Available for projects — 2026
            </div>
            <h1 className="hero-title text-foreground">
              Videos
              <br />
              <span className="outline-type">Designed</span> to
              <br />
              <span className="font-normal italic">Perform</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-8 animate-fade-up">
            <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
              <span className="text-foreground">I'm Robert</span> — I help creators,
              brands and influencers turn content into cinematic stories.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button asChild className="group h-12 rounded-full px-7 font-bold">
                <a href="#work">
                View Work
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
              <Button asChild variant="link" className="h-auto rounded-none border-b border-border px-0 py-1 text-foreground hover:text-primary">
                <a href="#contact">Start a project</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 hairline lg:mt-24" />
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase text-muted-foreground">
            {disciplines.map((d, i) => (
              <span key={d} className="flex items-center gap-3">
                {i > 0 && <span className="text-muted-foreground/40">/</span>}
                {d}
              </span>
            ))}
          </div>
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <a href="#work" aria-label="Scroll to work"><ArrowDown size={15} /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}
