import { motion, useReducedMotion } from "motion/react";
import { ExternalLink, FileBadge, Github } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";
import { CERT_URL, EXPERIENCE as X } from "../data";

export function Experience() {
  const reduce = useReducedMotion();
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHead eyebrow="03 / Experience" title="Professional experience" />
        <div className="relative pl-8 md:pl-12">
          <motion.div
            aria-hidden
            className="absolute left-2 top-2 bottom-2 w-0.5 origin-top md:left-4"
            style={{ background: "linear-gradient(var(--primary), var(--secondary), transparent)" }}
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <span aria-hidden className="absolute left-0.5 top-2 h-4 w-4 rounded-full border-2 border-primary bg-bg md:left-2.5" style={{ boxShadow: "0 0 0 5px var(--primary-soft)" }} />
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <div className="card p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip chip-primary">{X.status}</span>
                  <span className="chip">{X.period}</span>
                  <span className="chip">{X.mode}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">{X.role}</h3>
                <p className="text-secondary">{X.org}</p>
                <ul className="mt-5 space-y-3 text-muted">
                  {X.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{p}</li>
                  ))}
                </ul>
                <a href={X.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm mt-6"><Github size={16} /> View internship work on GitHub</a>
              </div>
              <div className="card flex flex-col p-6" style={{ borderStyle: "dashed" }}>
                <FileBadge className="text-accent" size={34} />
                <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">Certificate of Completion</p>
                <h4 className="mt-1 font-display text-lg font-semibold">{X.role}</h4>
                <p className="text-sm text-muted">{X.org} · {X.period}</p>
                <a href={CERT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto pt-0 w-full">
                  <ExternalLink size={18} /> View Internship Completion Certificate
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
