import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg-deep)] transition-opacity duration-700 ${done ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="text-center">
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)] animate-pulse-glow">
          <span className="font-bold text-primary-foreground">R</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
          Loading reel
        </p>
        <div className="mx-auto mt-3 h-px w-32 overflow-hidden bg-border">
          <div className="h-full w-full origin-left bg-gradient-to-r from-primary to-accent" style={{ animation: "shimmer 1.4s linear forwards", backgroundSize: "200% 100%" }} />
        </div>
      </div>
    </div>
  );
}