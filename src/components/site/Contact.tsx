import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="site-container">
        <div className="border-t border-border/60 pt-14">
          <p className="eyebrow mb-8">(04) — Get in touch</p>
          <h2 className="contact-title max-w-5xl">
            Let's Make It{" "}
            <span className="text-gradient">Happen</span>.
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Tell me about your project. I reply within 24 hours.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden border-t border-border/60 sm:grid-cols-2">
            <Button asChild variant="link" className="contact-link group h-auto justify-between whitespace-normal rounded-none border-b border-border py-7 text-foreground hover:bg-secondary/50 hover:no-underline sm:border-r sm:px-6">
            <a
              href="mailto:r.blazevic@icloud.com"
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
            </Button>
            <Button asChild variant="link" className="contact-link group h-auto justify-between whitespace-normal rounded-none border-b border-border py-7 text-foreground hover:bg-secondary/50 hover:no-underline sm:px-6">
            <a
              href="https://www.linkedin.com/in/robert-blazevic-fx/"
              target="_blank"
              rel="noopener"
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
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
