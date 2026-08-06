import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 sm:py-40">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="mx-auto max-w-[84rem]">
        <div className="border-t border-border/60 pt-14">
          <p className="eyebrow mb-8">(04) — Get in touch</p>
          <h2 className="max-w-4xl text-5xl leading-[0.95] tracking-tight sm:text-8xl">
            Let's Make It{" "}
            <span className="text-gradient">Happen</span>.
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Tell me about your project. I reply within 24 hours.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden border-t border-border/60 sm:grid-cols-2">
            <a
              href="mailto:r.blazevic@icloud.com"
              className="group flex items-center justify-between border-b border-border/60 py-7 pr-6 transition-colors hover:bg-white/[0.03] sm:border-r sm:pl-6"
            >
              <span className="flex items-center gap-4">
                <Mail size={16} className="text-muted-foreground" />
                <span className="text-base sm:text-lg">r.blazevic@icloud.com</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/robert-blazevic-fx/"
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between border-b border-border/60 py-7 pr-6 transition-colors hover:bg-white/[0.03] sm:pl-6"
            >
              <span className="flex items-center gap-4">
                <Linkedin size={16} className="text-muted-foreground" />
                <span className="text-base sm:text-lg">Robert Blazevic</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
