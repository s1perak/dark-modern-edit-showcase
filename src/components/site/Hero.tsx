import { ArrowRight, Play } from "lucide-react";
import { showreelUrl } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative grain min-h-screen w-full overflow-hidden"
    >
      {/* Background showreel */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        poster=""
        src={showreelUrl}
      />
      {/* Dark gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-deep)]/60 via-[var(--bg-deep)]/80 to-[var(--bg-deep)]" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-24">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Video Editor · Available for projects
          </div>
          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl">
            I Create{" "}
            <span className="text-gradient">Cinematic</span>
            <br />
            Stories Through{" "}
            <span className="italic font-light text-muted-foreground">Editing</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            I'm Robert — a video editor for creators who want their videos to
            feel bigger than content, from brands and musicians to YouTubers and
            influencers, focused on cinematic pacing, color, and atmosphere.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:shadow-[var(--shadow-glow-purple)] hover:-translate-y-0.5"
            >
              View Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/40"
            >
              <Play size={14} /> Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted-foreground">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          Scroll
          <div className="relative h-10 w-px overflow-hidden bg-border">
            <div className="absolute inset-x-0 h-3 bg-gradient-to-b from-primary to-transparent animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}