const software = ["Premiere Pro", "After Effects", "Photoshop"];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-primary">
            About
          </p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Editing is the final <span className="text-gradient">performance</span>.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I'm Robert, a video editor based in Nuremberg, Germany. I work
              with influencers and content creators to elevate their content
              beyond basic editing. Through motion design, sound design, and
              precise editing, I craft visuals that feel engaging, dynamic, and
              built to hold attention.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Toolkit
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {software.map((s) => (
                <span
                  key={s}
                  className="rounded-full glass px-4 py-1.5 text-xs text-foreground/90"
                >
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