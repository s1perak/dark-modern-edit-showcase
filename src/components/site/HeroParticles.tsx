import { useEffect, useRef } from "react";
import portrait from "@/assets/hero-portrait.jpg";

type P = { x: number; y: number; vx: number; vy: number; r: number; g: number; b: number; a: number; s: number; f1: number; f2: number; p1: number; p2: number };

/** Portrait rendered as particles that scatter ("explode") as the user scrolls. */
export function HeroParticles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let parts: P[] = [];
    let batches: { color: string; alpha: number; particles: P[] }[] = [];
    let raf = 0;
    let entranceStart: number | undefined;
    let readyAt: number | undefined;
    const onReady = () => {
      readyAt = performance.now() + 250;
    };
    window.addEventListener("portfolio:ready", onReady);
    let w = 0, h = 0;
    // Tiny dots do not need a retina-sized drawing surface; keep fill work predictable.
    const dpr = 1;
    const img = new Image();
    img.src = portrait;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!img.complete || !img.naturalWidth) return;
      // Tall portrait: fill most of the viewport height, floating above the hero copy.
      // On narrow screens the width limit takes over so the face stays readable on a phone.
      const scale = Math.min((w * 1.09) / img.naturalWidth, (h * 0.95) / img.naturalHeight);
      const iw = img.naturalWidth * scale, ih = img.naturalHeight * scale;
      const ox = (w - iw) / 2, oy = (h - ih) / 2 + h * 0.03;
      const step = w < 640 ? 1.8 : 2.1;
      const off = document.createElement("canvas");
      off.width = Math.ceil(iw / step); off.height = Math.ceil(ih / step);
      const o = off.getContext("2d");
      if (!o) return;
      o.drawImage(img, 0, 0, off.width, off.height);
      const data = o.getImageData(0, 0, off.width, off.height).data;
      parts = [];
      for (let y = 0; y < off.height; y++) {
        // Trace each row of the portrait: fill its shadow detail, never the black backdrop.
        let left = off.width, right = -1;
        for (let x = 0; x < off.width; x++) {
          const i = (y * off.width + x) * 4;
          if ((data[i] + data[i + 1] + data[i + 2]) / 3 >= 18) {
            left = Math.min(left, x);
            right = x;
          }
        }
        for (let x = left; x <= right; x++) {
        const i = (y * off.width + x) * 4;
        const raw = (data[i] + data[i + 1] + data[i + 2]) / 3;
        const shadow = raw < 18;
        // Lift the shadows so the dim side of the face still reads.
        const lum = Math.pow(raw / 255, 0.55) * 255;
        const ang = Math.random() * Math.PI * 2;
        const sp = 0.4 + Math.random() * 1.6;
        parts.push({
          x: ox + x * step, y: oy + y * step,
          vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 0.3,
          r: Math.min(255, data[i] * (shadow ? 2 : 1.9) + (shadow ? 24 : 28)),
          g: Math.min(255, data[i + 1] * (shadow ? 2 : 1.85) + (shadow ? 24 : 26)),
          b: Math.min(255, data[i + 2] * (shadow ? 2 : 1.8) + (shadow ? 24 : 22)),
          a: Math.min(1, (shadow ? 0.55 : 0.25) + lum / 180), s: 1 + Math.random() * 0.8,
          f1: 0.6 + Math.random() * 1.1, f2: 0.6 + Math.random() * 1.1,
          p1: Math.random() * Math.PI * 2, p2: Math.random() * Math.PI * 2,
        });
      }
      }
      // Group similar colors once, rather than switching canvas paint for every dot each frame.
      const grouped = new Map<string, { color: string; alpha: number; particles: P[] }>();
      for (const particle of parts) {
        const r = Math.round(particle.r / 8) * 8;
        const g = Math.round(particle.g / 8) * 8;
        const b = Math.round(particle.b / 8) * 8;
        const alpha = Math.round(particle.a * 10) / 10;
        const key = `${r},${g},${b},${alpha}`;
        let batch = grouped.get(key);
        if (!batch) {
          batch = { color: `rgb(${r},${g},${b})`, alpha, particles: [] };
          grouped.set(key, batch);
        }
        batch.particles.push(particle);
      }
      batches = [...grouped.values()];
    };

    const draw = (t: number) => {
      if (entranceStart === undefined && readyAt !== undefined && parts.length > 0) {
        entranceStart = Math.max(t, readyAt);
      }
      const entranceProgress = reduce ? 1 : entranceStart === undefined ? 0 : Math.min(1, Math.max(0, (t - entranceStart) / 1000));
      const gather = entranceProgress ** 3 * (entranceProgress * (entranceProgress * 6 - 15) + 10);
      const entranceScatter = reduce ? 0 : 0.7 * (1 - gather);
      const scroll = reduce ? 0 : Math.max(0, window.scrollY / (h || 1));
      const p = Math.min(1, scroll / 1.08);
      const e = p * p * (3 - 2 * p);
      // Keep drifting slowly after the explosion so the dots live behind the whole site.
      const extra = Math.log1p(Math.max(0, scroll - 1.08)) * 0.08;
      // The portrait starts already a little scattered, then explodes further on scroll.
      const spread = (0.035 + entranceScatter * (1 - p) + (e + extra) * 0.95) * Math.max(w, h) * 0.42;
      // Past the hero the dots ease back into a faint texture.
      const below = reduce ? 0 : Math.min(1, Math.max(0, (window.scrollY - h * 0.6) / (h * 0.7)));
      const dim = 1 - below * 0.7;
      ctx.clearRect(0, 0, w, h);
      const opacity = 0.6 * (1 - e * 0.5) * dim;
      for (const batch of batches) {
        ctx.globalAlpha = batch.alpha * opacity;
        ctx.fillStyle = batch.color;
        ctx.beginPath();
        for (const q of batch.particles) {
        // Past the hero the dots keep drifting slowly on bounded loops instead of freezing.
        const amp = 34 * below;
        const dx = reduce || below === 0 ? 0 : Math.sin((t / 8200 + scroll * 0.45) * q.f1 + q.p1) * amp;
        const dy = reduce || below === 0 ? 0 : Math.cos((t / 10600 + scroll * 0.45) * q.f2 + q.p2) * amp * 0.7;
        // Dots only ever travel outward from the face; ones leaving the screen are simply skipped.
        const px = q.x + q.vx * spread + dx;
        const py = q.y + q.vy * spread + dy;
        if (px < -2 || py < -2 || px > w + 2 || py > h + 2) continue;
        ctx.rect(Math.round(px), Math.round(py), q.s, q.s);
        }
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    img.onload = build;
    build();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", build);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("portfolio:ready", onReady);
      img.onload = null;
      parts = [];
      batches = [];
    };
  }, []);

  return <canvas ref={ref} className="hero-particles" aria-hidden="true" />;
}
