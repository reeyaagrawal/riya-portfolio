import { GraduationCap } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";
import { EDUCATION } from "../data";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHead eyebrow="05 / Education" title="Academic background" />
        <div className="relative grid gap-5 md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="card h-full p-6">
                <GraduationCap className="text-secondary" />
                <p className="mt-4 font-mono text-xs text-muted">{e.period}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{e.degree}</h3>
                <p className="text-muted">{e.school}</p>
                <span className="chip chip-primary mt-4">{e.score}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <p className="max-w-3xl leading-relaxed text-muted">My Mathematics degree gave me a habit of breaking a problem into steps and checking each one. It's the same habit I use when cleaning data, writing queries and testing whether a number in a dashboard makes sense.</p>
        </Reveal>
      </div>
    </section>
  );
}
