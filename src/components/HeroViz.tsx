import { useEffect, useRef } from "react";

const rgb = (name: string) => {
  const h = getComputedStyle(document.documentElement).getPropertyValue(name).trim().replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)).join(",");
};

export default function HeroViz() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const N = window.innerWidth < 768 ? 46 : 78;
    const cols = [rgb("--primary"), rgb("--secondary"), rgb("--accent")];
    const nodes = Array.from({ length: N }, (_, i) => {
      const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), t = i * 2.399963;
      return { x: Math.cos(t) * r, y, z: Math.sin(t) * r, c: i % 11 === 0 ? 2 : i % 2 };
    });
    let size = 0, raf = 0, rot = 0, tx = 0, ty = 0, cx = 0, cy = 0, visible = true;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = canvas.clientWidth;
      canvas.width = canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 0.9;
      ty = (e.clientY / window.innerHeight - 0.5) * 0.7;
    };
    if (fine && !reduce) window.addEventListener("pointermove", onMove);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);

    const draw = () => {
      cx += (tx - cx) * 0.05; cy += (ty - cy) * 0.05;
      const ay = rot + cx, ax = 0.35 + cy;
      const cA = Math.cos(ay), sA = Math.sin(ay), cB = Math.cos(ax), sB = Math.sin(ax);
      const R = size * 0.38, mid = size / 2;
      ctx.clearRect(0, 0, size, size);
      const P = nodes.map((n) => {
        const x1 = n.x * cA + n.z * sA, z1 = -n.x * sA + n.z * cA;
        const y2 = n.y * cB - z1 * sB, z2 = n.y * sB + z1 * cB;
        const s = 1 / (1.8 - z2 * 0.5);
        return { x: mid + x1 * R * s * 1.6, y: mid + y2 * R * s * 1.6, z: z2, c: cols[n.c] };
      });
      ctx.lineWidth = 1;
      for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y, nodes[i].z - nodes[j].z);
          if (d < 0.62) {
            const a = (0.1 + 0.3 * ((P[i].z + P[j].z + 2) / 4)) * (1 - d / 0.62);
            ctx.strokeStyle = `rgba(${P[i].c},${a})`;
            ctx.beginPath(); ctx.moveTo(P[i].x, P[i].y); ctx.lineTo(P[j].x, P[j].y); ctx.stroke();
          }
        }
      }
      for (const p of [...P].sort((a, b) => a.z - b.z)) {
        ctx.fillStyle = `rgba(${p.c},${0.45 + 0.55 * ((p.z + 1) / 2)})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.8 + 1.8 * ((p.z + 1) / 2), 0, 6.3); ctx.fill();
      }
    };
    const loop = () => {
      if (visible && !document.hidden) { rot += 0.0035; draw(); }
      raf = requestAnimationFrame(loop);
    };
    if (reduce) draw(); else loop();
    return () => {
      cancelAnimationFrame(raf); io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);
  return <canvas ref={ref} className="aspect-square w-full" aria-hidden />;
}
