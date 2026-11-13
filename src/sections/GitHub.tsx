import { Github } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";
import { PROFILE, REPOS } from "../data";

export function GitHubSection() {
  return (
    <section id="github" className="section">
      <div className="container-x">
        <SectionHead eyebrow="07 / GitHub" title="More from my repositories" sub="Learning projects and supporting work from github.com/reeyaagrawal." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REPOS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.08}>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="card flex h-full flex-col p-5 no-underline">
                <div className="flex items-center gap-2 font-mono text-sm text-primary"><Github size={16} />{r.name}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{r.desc}</p>
                <span className="chip mt-auto self-start" style={{ marginTop: "1rem" }}>{r.lang}</span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Github size={18} /> Explore More on GitHub</a>
        </Reveal>
      </div>
    </section>
  );
}
