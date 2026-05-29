import { useState } from "react";
import { Mail, Instagram, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — Robert will get back to you within 24h.");
    }, 900);
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-primary">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold leading-[1] tracking-tight sm:text-6xl">
            Let's create something{" "}
            <span className="text-gradient">cinematic</span>.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Tell me about your project — film, brand, music or otherwise.
            I reply within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
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

        <form onSubmit={onSubmit} className="glass rounded-3xl p-8 sm:p-10 space-y-5">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</label>
            <input
              required
              name="name"
              className="mt-2 w-full rounded-xl border border-border/60 bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</label>
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full rounded-xl border border-border/60 bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              placeholder="you@studio.com"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Project</label>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-border/60 bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              placeholder="Tell me about your project, timeline and budget…"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:shadow-[var(--shadow-glow-purple)] disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send message"}
            <Send size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}