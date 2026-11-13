import { GraduationCap, Sigma, Database } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";

const PILLARS = [
  [GraduationCap, "MCA, Aligarh Muslim University", "Currently pursuing, with a 9.00 GPA so far."],
  [Sigma, "Mathematics foundation", "B.Sc. (Honors) in Mathematics, which shaped how I reason about data."],
  [Database, "SQL · Python · Excel · Power BI", "The tools I use to clean, explore and visualize data."],
] as const;

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHead eyebrow="01 / About" title="Curious about what the data is really saying" />
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-4 leading-relaxed text-muted">
            <p>I'm Riya, a final-year MCA student at Aligarh Muslim University. Before that I completed a B.Sc. (Honors) in Mathematics there, and that training is why I like questions that have a logical, provable answer.</p>
            <p>I got into data analytics because I enjoy finding the pattern hidden in a messy table. I work with SQL, Python, Excel and Power BI, and I've built dashboards on sales, finance, content and cybersecurity data to practise turning numbers into something a decision-maker can read quickly.</p>
            <p>I'm interested in practical problems, such as how an organization tracks donations or how a business reads its sales. My internship at InAmigos Foundation gave me a first taste of analysing information for a social-impact organization. I'm now looking for an internship or a full-time fresher role where I can keep learning on real data.</p>
          </Reveal>
          <div className="grid gap-4">
            {PILLARS.map(([Icon, t, d], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="card flex gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--primary-soft) text-primary"><Icon size={22} /></span>
                  <div><h3 className="font-display font-semibold">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
