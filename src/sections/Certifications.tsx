import { Award, ExternalLink } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";
import { CERTS } from "../data";

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-x">
        <SectionHead eyebrow="06 / Certifications" title="Certificates" />
        <div className="grid gap-5 md:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="card flex h-full flex-col p-6" style={{ borderStyle: "dashed" }}>
                <Award className="text-accent" size={28} />
                <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-secondary">{c.org}</p>
                {c.date && <p className="mt-1 font-mono text-xs text-muted">{c.date}</p>}
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm mt-6"><ExternalLink size={16} /> View Certificate</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
