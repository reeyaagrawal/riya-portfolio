import { useEffect, useRef } from "react";

const rgb = (name: string) => {
  const h = getComputedStyle(document.documentElement).getPropertyValue(name).trim().replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)).join(",");
};

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const skip =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 900;
    if (skip) return;
    const ctx = canvas.getContext("2d")!;
    const colors = [rgb("--primary"), rgb("--secondary"), rgb("--accent")];
    let w = 0, h = 0, raf = 0;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 38 }, (_, i) => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      c: colors[i % 9 === 0 ? 2 : i % 2],
    }));
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x = (p.x + p.vx + w) % w;
        p.y = (p.y + p.vy + h) % h;
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        ctx.fillStyle = `rgba(${a.c},0.45)`;
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.6, 0, 6.3); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 150) {
            ctx.strokeStyle = `rgba(${a.c},${0.1 * (1 - d / 150)})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    const vis = () => { cancelAnimationFrame(raf); if (!document.hidden) tick(); };
    document.addEventListener("visibilitychange", vis);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", vis);
    };
  }, []);
  return (
    <div aria-hidden className="pointer-events-none sticky top-0 z-0 h-0 w-full">
      <canvas ref={ref} className="absolute left-0 top-0 h-screen w-full" />
    </div>
  );
}
