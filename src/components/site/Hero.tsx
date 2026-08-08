import { ArrowDown, ArrowUpRight } from "lucide-react";
import { showreelUrl } from "@/data/portfolio";

const disciplines = ["Editing", "Motion Design", "Sound Design", "Color"];

export function Hero() {
  return (
    <section id="top" className="relative grain min-h-[100svh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
        autoPlay
        muted
        loop
        playsInline
        src={showreelUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-deep)]/55 via-[var(--bg-deep)]/75 to-[var(--bg-deep)]" />
      

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[84rem] flex-col justify-end px-6 pb-14 pt-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="mb-8 inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Available for projects — 2026
            </div>
            <h1 className="text-[13vw] font-medium leading-[0.86] tracking-[-0.05em] text-foreground sm:text-[9vw] lg:text-[7.4rem]">
              Videos
              <br />
              <span className="text-muted-foreground/70">Designed to</span>{" "}
              <span className="text-gradient">Perform</span>
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pb-4 lg:pt-6 animate-fade-up">
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
              <span className="text-foreground">I'm Robert</span> — I help creators,
              brands and influencers turn content into cinematic stories.
            </p>
            <div className="mt-8 hairline" />
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[13px] font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View Work
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="text-[13px] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 hairline" />
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {disciplines.map((d, i) => (
              <span key={d} className="flex items-center gap-3">
                {i > 0 && <span className="text-muted-foreground/40">/</span>}
                {d}
              </span>
            ))}
          </div>
          <a
            href="#work"
            aria-label="Scroll to work"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
