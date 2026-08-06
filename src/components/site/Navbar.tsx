import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-[84rem] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-sm tracking-tight">
          <img
            src="/favicon.png"
            alt="Robert Blazevic logo"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-foreground">Robert</span>
          <span className="-ml-1.5 text-muted-foreground">Blazevic</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full glass px-2 py-1.5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Let's talk
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full glass p-2.5 text-foreground md:hidden"
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
                className="text-lg text-foreground/90"
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
