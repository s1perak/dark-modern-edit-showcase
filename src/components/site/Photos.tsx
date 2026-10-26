import { useRef, useState } from "react";
import before from "@/assets/before.avif.asset.json";
import after from "@/assets/after.png.asset.json";
import beforeCar from "@/assets/before-car.jpg.asset.json";
import afterCar from "@/assets/after-car.jpg.asset.json";

function CompareCard({
  beforeSrc,
  afterSrc,
  alt,
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      data-reveal
      className="relative mx-auto aspect-[2/3] w-full max-w-md cursor-ew-resize touch-none select-none overflow-hidden border border-border bg-card"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as Element).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <img src={afterSrc} alt={`After color grade — ${alt}`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <img
        src={beforeSrc}
        alt={`Before color grade — ${alt}`}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />
      <span className="pointer-events-none absolute left-3 top-3 bg-background/60 px-2 py-1 font-mono text-[9px] uppercase text-foreground">Before</span>
      <span className="pointer-events-none absolute right-3 top-3 bg-background/60 px-2 py-1 font-mono text-[9px] uppercase text-foreground">After</span>
      <div className="pointer-events-none absolute inset-y-0 w-px bg-foreground" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-foreground bg-background/70 text-xs text-foreground backdrop-blur-sm">
          ⇆
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Before and after comparison — ${alt}`}
        className="sr-only"
      />
    </div>
  );
}

export function Photos() {
  const cards = [
    { beforeSrc: before.url, afterSrc: after.url, alt: "portrait" },
    { beforeSrc: beforeCar.url, afterSrc: afterCar.url, alt: "car" },
  ];

  return (
    <section id="photos" className="relative py-20 sm:py-28">
      <div className="site-container">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">COLOR GRADE // BEFORE — AFTER</p>
            <h2 className="section-title max-w-2xl uppercase">
              Photo <span className="text-gradient">grades</span>
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
            Drag the line to compare the original shot with the final grade.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start justify-center gap-8 sm:gap-10 lg:grid-cols-2">
          {cards.map((card) => (
            <CompareCard
              key={card.alt}
              beforeSrc={card.beforeSrc}
              afterSrc={card.afterSrc}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
