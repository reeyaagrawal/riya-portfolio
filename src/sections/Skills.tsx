import { BarChart3, Braces, Database, Users, Wrench } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";
import { SKILLS } from "../data";

const ICONS = [Braces, BarChart3, BarChart3, Wrench, Users];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHead eyebrow="02 / Skills" title="Tools and methods I work with" sub="Everything listed here appears on my resume or in my GitHub projects." />
        <div className="grid gap-5 md:grid-cols-2">
          {SKILLS.map((g, i) => {
            const Icon = ICONS[i] ?? Database;
            return (
              <Reveal key={g.group} delay={(i % 2) * 0.1} className={i === SKILLS.length - 1 && SKILLS.length % 2 ? "md:col-span-2" : ""}>
                <div className="card h-full p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-(--secondary-soft) text-secondary"><Icon size={20} /></span>
                    <h3 className="font-display text-lg font-semibold">{g.group}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="chip transition-transform duration-200 hover:scale-105 hover:border-primary hover:bg-(--primary-soft)">{s}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
