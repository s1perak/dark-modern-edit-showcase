import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[200] overflow-hidden bg-[var(--bg-deep)] transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Giant film-leader numeral */}
      <span aria-hidden="true" className="loading-numeral">
        01
      </span>

      {/* Viewfinder brackets */}
      <div aria-hidden="true" className="loading-brackets">
        <span className="loading-bracket loading-bracket-tl" />
        <span className="loading-bracket loading-bracket-tr" />
        <span className="loading-bracket loading-bracket-bl" />
        <span className="loading-bracket loading-bracket-br" />
      </div>

      {/* Center core */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="relative mb-10">
          <img
            src="/favicon.png"
            alt="Robert Blazevic logo"
            className="h-20 w-20 rounded-full"
          />
          <span aria-hidden="true" className="loading-ring" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="loading-meta">
            <span className="opacity-40">Loading Timeline</span>
            <span className="loading-meta-sep">//</span>
            <span>00:00:01</span>
          </p>
          <div className="loading-track" aria-hidden="true">
            <div className="loading-fill" />
            <div className="loading-sweep" />
          </div>
          <p className="loading-specs">4K DCI // 23.976 FPS // PRORES 422 HQ</p>
        </div>
      </div>

    </div>
  );
}
