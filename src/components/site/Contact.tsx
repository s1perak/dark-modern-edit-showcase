import { Mail, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-primary">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold leading-[1] tracking-tight sm:text-6xl">
            Let's create something{" "}
            <span className="text-gradient">cinematic</span>.
          </h2>
          <p className="mt-6 mx-auto max-w-md text-muted-foreground">
            Tell me about your project — film, brand, music or otherwise.
            I reply within 24 hours.
          </p>

          <div className="mt-10 space-y-4 text-left">
            <a
              href="mailto:r.blazevic@icloud.com"
              className="group flex items-center justify-between rounded-2xl glass px-5 py-4 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
            >
              <span className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                r.blazevic@icloud.com
              </span>
              <ArrowUpRight size={16} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl glass px-5 py-4 transition-all hover:border-primary/40"
            >
              <span className="flex items-center gap-3">
                <Instagram size={18} className="text-primary" />
                @robert.edit
              </span>
              <ArrowUpRight size={16} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/robert-blazevic-fx/"
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between rounded-2xl glass px-5 py-4 transition-all hover:border-primary/40"
            >
              <span className="flex items-center gap-3">
                <Linkedin size={18} className="text-primary" />
                Robert Blazevic
              </span>
              <ArrowUpRight size={16} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}