import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 py-6">
      <div className="site-container flex items-center justify-between gap-3">
        <Button asChild variant="link" className="h-auto gap-2.5 p-0 text-foreground hover:no-underline">
        <a href="#top" className="brand-name flex items-center text-sm">
          <img
            src="/favicon.png"
            alt="Robert Blazevic logo"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-foreground">Robert</span>
           <span className="-ml-1.5 text-muted-foreground">Blazevic</span>
        </a>
        </Button>

        <nav className="hidden items-center gap-4 rounded-full glass px-6 py-2 md:flex" aria-label="Main navigation">
          {links.map((l) => (
            <Button asChild variant="link" key={l.href} className="h-7 px-1 text-[11px] uppercase text-muted-foreground hover:text-primary hover:no-underline">
            <a
              key={l.href}
              href={l.href}
            >
              {l.label}
            </a>
            </Button>
          ))}
        </nav>

        <Button asChild className="hidden h-10 rounded-full px-5 text-xs font-bold md:inline-flex">
        <a
          href="#contact"
          className="group"
        >
          Let's talk
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        </Button>

        <Button
          aria-label="Menu"
          aria-expanded={open}
          variant="secondary"
          size="icon"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>

      {open && (
        <div className="absolute left-6 right-6 top-full mt-2 glass rounded-lg p-6 md:hidden animate-fade-up">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Button asChild variant="link" key={l.href} className="justify-start px-0 text-lg text-foreground">
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg text-foreground/90"
              >
                {l.label}
              </a>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
