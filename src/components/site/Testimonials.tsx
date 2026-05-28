import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, clientLogos } from "@/data/portfolio";

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-[11px] uppercase tracking-[0.3em] text-primary">
          Words from clients
        </p>
        <h2 className="text-center text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          Trusted by people who care about the <span className="text-gradient">cut</span>.
        </h2>

        <div className="relative mt-16 overflow-hidden rounded-3xl glass p-10 sm:p-14">
          <Quote className="absolute -top-4 -left-4 text-primary/15" size={140} />
          <div key={t.name} className="relative animate-fade-up">
            <p className="text-xl font-light leading-relaxed text-foreground sm:text-2xl">
              "{t.quote}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-12 w-12 rounded-full border border-border/40 object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-to-r from-primary to-accent" : "w-4 bg-border"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="grid h-10 w-10 place-items-center rounded-full border border-border/60 transition-colors hover:border-primary/60 hover:text-primary">
                <ChevronLeft size={16} />
              </button>
              <button onClick={next} className="grid h-10 w-10 place-items-center rounded-full border border-border/60 transition-colors hover:border-primary/60 hover:text-primary">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Worked with
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-semibold tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}