import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data";

const HeroViz = lazy(() => import("../components/HeroViz"));

function StaticViz() {
  return (
    <svg viewBox="0 0 200 200" className="aspect-square w-full" aria-hidden>
      <circle cx="100" cy="100" r="70" fill="none" stroke="var(--primary)" strokeOpacity=".4" />
      <ellipse cx="100" cy="100" rx="70" ry="24" fill="none" stroke="var(--secondary)" strokeOpacity=".4" />
      <ellipse cx="100" cy="100" rx="24" ry="70" fill="none" stroke="var(--secondary)" strokeOpacity=".3" />
      {[[100, 30], [160, 70], [150, 140], [60, 150], [45, 75], [100, 100]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={i === 5 ? "var(--accent)" : "var(--primary)"} />
      ))}
    </svg>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setLoad(true), io.disconnect()));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const rise = (d: number) =>
    reduce ? {} : { initial: { opacity: 1, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] as const } };

  return (
    <section id="top" className="relative flex min-h-screen items-center pt-24 pb-16">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p {...rise(0)} className="eyebrow">MCA · Aligarh Muslim University</motion.p>
          <motion.h1 {...rise(0.1)} className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="grad-text">Riya Agrawal</span>
          </motion.h1>
          <motion.p {...rise(0.2)} className="mt-3 font-display text-2xl font-medium text-secondary sm:text-3xl">Data Analyst</motion.p>
          <motion.p {...rise(0.3)} className="mt-5 text-lg font-medium">{PROFILE.tagline}</motion.p>
          <motion.p {...rise(0.4)} className="mt-4 max-w-xl leading-relaxed text-muted">
            I'm a final-year MCA student with a Mathematics background. I enjoy turning raw data into clear findings and dashboards that help people make better decisions, using SQL, Python, Excel and Power BI.
          </motion.p>
          <motion.div {...rise(0.5)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary"><ArrowDown size={18} /> Explore My Projects</a>
            <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Download size={18} /> Download My Resume</a>
          </motion.div>
          <motion.div {...rise(0.6)} className="mt-6 flex gap-3">
            <a className="icon-btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={20} /></a>
            <a className="icon-btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={20} /></a>
            <a className="icon-btn" href={`mailto:${PROFILE.email}`} aria-label="Send an email"><Mail size={20} /></a>
          </motion.div>
        </div>
        <motion.div {...rise(0.3)} className="relative mx-auto w-full max-w-md" ref={box}>
          <div className="pointer-events-none absolute inset-6 rounded-full opacity-60 blur-3xl" style={{ background: "var(--primary-soft)" }} />
          <div className="relative">
            {load ? <Suspense fallback={<StaticViz />}><HeroViz /></Suspense> : <StaticViz />}
          </div>
          <p className="mt-2 text-center font-mono text-xs text-muted">SELECT insight FROM data;</p>
        </motion.div>
      </div>
    </section>
  );
}
