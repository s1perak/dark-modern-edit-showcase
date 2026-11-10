import { useEffect, useRef } from "react";
import camera from "@/assets/hero-camera.jpg";

type P = { x: number; y: number; vx: number; vy: number; r: number; g: number; b: number; a: number; s: number; f1: number; f2: number; p1: number; p2: number };

/** Camera rendered as particles that scatter ("explode") as the user scrolls. */
export function HeroParticles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let parts: P[] = [];
    let raf = 0;
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const img = new Image();
    img.src = camera;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!img.complete || !img.naturalWidth) return;
      const scale = Math.min((w * 0.9) / img.naturalWidth, (h * 0.75) / img.naturalHeight);
      const iw = img.naturalWidth * scale, ih = img.naturalHeight * scale;
      const ox = (w - iw) / 2, oy = (h - ih) / 2 - h * 0.06;
      const step = w < 640 ? 4 : 3;
      const off = document.createElement("canvas");
      off.width = Math.ceil(iw / step); off.height = Math.ceil(ih / step);
      const o = off.getContext("2d")!;
      o.drawImage(img, 0, 0, off.width, off.height);
      const data = o.getImageData(0, 0, off.width, off.height).data;
      parts = [];
      for (let y = 0; y < off.height; y++) for (let x = 0; x < off.width; x++) {
        const i = (y * off.width + x) * 4;
        const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
        if (lum < 16 || Math.random() > 0.6 + lum / 300) continue;
        const ang = Math.random() * Math.PI * 2;
        const sp = 0.4 + Math.random() * 1.6;
        parts.push({
          x: ox + x * step, y: oy + y * step,
          vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 0.3,
          r: Math.min(255, data[i] * 1.8 + 30), g: Math.min(255, data[i + 1] * 1.8 + 28), b: Math.min(255, data[i + 2] * 1.8 + 24),
          a: Math.min(1, 0.35 + lum / 90), s: 0.8 + Math.random() * 1.2,
          f1: 0.6 + Math.random() * 1.1, f2: 0.6 + Math.random() * 1.1,
          p1: Math.random() * Math.PI * 2, p2: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = (t: number) => {
      const p = reduce ? 0 : Math.min(1, Math.max(0, window.scrollY / (h * 0.9 || 1)));
      const e = p * p * (3 - 2 * p);
      // Keep drifting slowly after the explosion so the dots live behind the whole site.
      const extra = 0;
      const spread = (e + extra) * Math.max(w, h) * 0.42;
      // Past the hero the dots ease back into a faint texture.
      const below = reduce ? 0 : Math.min(1, Math.max(0, (window.scrollY - h * 0.6) / (h * 0.7)));
      const dim = 1 - below * 0.7;
      ctx.clearRect(0, 0, w, h);
      for (let k = 0; k < parts.length; k++) {
        const q = parts[k];
        const jx = reduce ? 0 : Math.sin(t / 900 + k) * 0.6;
        const jy = reduce ? 0 : Math.cos(t / 1100 + k * 1.3) * 0.6;
        // Past the hero the dots keep drifting slowly on bounded loops instead of freezing.
        const amp = 34 * below;
        const dx = reduce ? 0 : Math.sin((t / 8200) * q.f1 + q.p1) * amp;
        const dy = reduce ? 0 : Math.cos((t / 10600) * q.f2 + q.p2) * amp * 0.7;
        ctx.globalAlpha = q.a * (1 - e * 0.55) * dim;
        ctx.fillStyle = `rgb(${q.r},${q.g},${q.b})`;
        // Wrap scattered dots around the viewport so the background never empties.
        let px = q.x + q.vx * spread + jx + dx, py = q.y + q.vy * spread + jy + dy;
        ctx.fillRect(px, py, q.s, q.s);
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
      img.onload = null;
      parts = [];
    };
  }, []);

  return <canvas ref={ref} className="hero-particles" aria-hidden="true" />;
}
