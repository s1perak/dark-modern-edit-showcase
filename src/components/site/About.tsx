const software = ["Premiere Pro", "After Effects", "Photoshop"];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-[84rem]">
        <div className="grid gap-12 border-t border-border/60 pt-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">(02) — About</p>
            <p className="mt-6 text-[13px] uppercase tracking-[0.25em] text-muted-foreground">
              Nuremberg, Germany
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              About <span className="text-gradient">me</span>.
            </h2>
            <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              I'm Robert, a video editor based in Nuremberg, Germany. I work with
              influencers and content creators to elevate their content beyond
              basic editing. Through motion design, sound design, and precise
              editing, I craft visuals that feel engaging, dynamic, and built to
              hold attention.
            </p>

            <div className="mt-12 hairline" />
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground/70">
                Toolkit
              </p>
              {software.map((s) => (
                <span key={s} className="text-sm text-foreground/85">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
