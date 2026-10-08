const serviceGroups = [
  {
    label: "Video editing",
    services: [
      { title: "YouTube Editing", desc: "Long-form edits with retention-led pacing and clean storytelling." },
      { title: "Short Form Content", desc: "Reels, TikToks and shorts engineered to stop the scroll." },
      { title: "Social Media Ads", desc: "Performance creatives tuned for hooks, beats and CTAs." },
    ],
  },
  {
    label: "Finishing & polish",
    services: [
      { title: "Sound Design", desc: "Immersive sound, precise accents and texture that give every movement its weight." },
      { title: "Color Grading", desc: "Cinematic looks and consistent grades across every frame." },
      { title: "Motion Graphics", desc: "Type, transitions and effects that move with intent." },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative pt-20 pb-3 sm:pt-28 sm:pb-4">
      <div className="site-container">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-14 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">CAPABILITIES // 03</p>
            <h2 className="section-title uppercase">
              What I do, <span className="text-gradient">end to end</span>
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          {serviceGroups.map((group, groupIndex) => (
          <div key={group.label}>
            <h3 className="mb-4 text-sm text-muted-foreground" data-reveal>{group.label}</h3>
            <div className="grid grid-cols-1 border-t border-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {group.services.map((s, i) => (
            <div
              key={s.title}
              className="service-item group relative border-b border-border p-6 transition-colors duration-500 hover:bg-secondary/50"
            >
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground/60">
                {String(groupIndex * 3 + i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl tracking-tight">{s.title}</h3>
              <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="mt-5 h-px w-0 bg-primary/60 transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
