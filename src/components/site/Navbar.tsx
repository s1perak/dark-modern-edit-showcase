import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo.png.asset.json";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-3"
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between glass rounded-full px-6 py-3",
        )}
        style={{ width: "min(96%, 72rem)" }}
      >
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src={logoAsset.url} alt="Robert Blazevic logo" className="h-8 w-8 rounded-full shadow-[var(--shadow-glow)]" />
          <span className="text-foreground">Robert</span><span className="text-muted-foreground"> Blazevic</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-border/60 px-5 py-2 text-sm text-foreground transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)] md:inline-block"
        >
          Let's talk
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border/60 p-2 text-foreground md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-full mt-2 glass rounded-2xl p-6 md:hidden animate-fade-up">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg text-foreground/90 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}