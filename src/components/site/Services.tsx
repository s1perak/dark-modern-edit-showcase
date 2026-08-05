const services = [
  { title: "Commercial Editing", desc: "Brand films and product spots crafted with precision and pace." },
  { title: "Short Form Content", desc: "Reels, TikToks and shorts engineered to stop the scroll." },
  { title: "YouTube Editing", desc: "Long-form edits with retention-led pacing and clean storytelling." },
  { title: "Color Grading", desc: "Cinematic looks and consistent grades across every frame." },
  { title: "Motion Graphics", desc: "Type, transitions and effects that move with intent." },
  { title: "Social Media Ads", desc: "Performance creatives tuned for hooks, beats and CTAs." },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-[84rem]">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-14 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">(03) — Services</p>
            <h2 className="text-4xl leading-[1] tracking-tight sm:text-6xl">
              What I do, <span className="text-gradient">end to end</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative border-b border-border/60 p-8 transition-colors duration-500 hover:bg-white/[0.03] sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-xl tracking-tight">{s.title}</h3>
              <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="mt-8 h-px w-0 bg-primary/60 transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
