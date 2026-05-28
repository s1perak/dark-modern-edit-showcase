import {
  Film,
  Scissors,
  Youtube,
  Palette,
  Sparkles,
  Megaphone,
} from "lucide-react";

const services = [
  { icon: Film, title: "Commercial Editing", desc: "Brand films and product spots crafted with precision and pace." },
  { icon: Scissors, title: "Short Form Content", desc: "Reels, TikToks and shorts engineered to stop the scroll." },
  { icon: Youtube, title: "YouTube Editing", desc: "Long-form edits with retention-led pacing and clean storytelling." },
  { icon: Palette, title: "Color Grading", desc: "Cinematic looks and consistent grades across every frame." },
  { icon: Sparkles, title: "Motion Graphics", desc: "Type, transitions and effects that move with intent." },
  { icon: Megaphone, title: "Social Media Ads", desc: "Performance creatives tuned for hooks, beats and CTAs." },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-primary">
            Services
          </p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            What I do, <span className="text-gradient">end to end</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border/40 bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-card p-8 transition-colors hover:bg-card/60"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.72 0.22 260 / 0.18), transparent 70%)" }}
              />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-xl glass text-primary transition-all group-hover:text-accent group-hover:shadow-[var(--shadow-glow)]">
                  <s.icon size={20} />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}