import { useEffect, useRef, useState } from "react";

const software = ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop"];
const stats = [
  { value: 240, suffix: "+", label: "Projects completed" },
  { value: 80, suffix: "+", label: "Clients worldwide" },
  { value: 9, suffix: "", label: "Years of experience" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

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
              I'm Robert, a freelance video editor based between Berlin and Lisbon.
              For nearly a decade I've helped brands, musicians and directors find
              the cut that makes their footage feel inevitable.
            </p>
            <p>
              My work lives at the intersection of rhythm and restraint — moody
              color, considered sound design, and edits that respect the silence
              between the cuts.
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

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/40 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}