import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { MORE_DASHBOARDS } from "../data";

const DAAN_FEATURES = [
  "User registration and login",
  "Campaign creation and management",
  "Donation tracking with demo UPI payments",
  "Fundraising progress monitoring",
  "Donation receipts and donor dashboard",
  "Admin dashboard for users, campaigns, donations and reports",
];

const FLOW = ["Dataset", "Cleaning (Power Query)", "DAX measures", "Dashboards", "Business view"];

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHead eyebrow="04 / Projects" title="Featured projects" sub="Real work from my GitHub, from a full web application to Power BI dashboards." />

        <Reveal>
          <TiltCard className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip chip-accent">Primary project</span>
              <span className="chip">Web application</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">DaanSetu — Donation Tracking System</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              A donation tracking web application that manages campaigns, donations, user accounts and administrative activity, with a focus on data management and reporting.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="eyebrow">Problem</h4>
                <p className="mt-2 text-muted leading-relaxed">Donation activity is hard to trust when campaigns, payments and receipts are scattered. DaanSetu keeps them in one place so progress and records are transparent and organized.</p>
                <h4 className="eyebrow mt-5">Tech stack</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"].map((t) => <li key={t} className="chip chip-primary">{t}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="eyebrow">Key features</h4>
                <ul className="mt-2 space-y-2 text-muted">
                  {DAAN_FEATURES.map((f) => <li key={f} className="flex gap-2"><ArrowRight size={16} className="mt-1 shrink-0 text-primary" />{f}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-sm" href="https://daansetu.onrender.com/" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live Demo</a>
              <a className="btn btn-ghost btn-sm" href="https://github.com/reeyaagrawal/Daansetu" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub Repository</a>
            </div>
            <p className="mt-3 text-xs text-muted">Payments in the app are demo-only.</p>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <TiltCard className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2"><span className="chip">Power BI dashboard</span></div>
            <h3 className="mt-4 font-display text-2xl font-bold">E-commerce Sales Analysis</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">An interactive Power BI dashboard analysing e-commerce sales performance, product profitability, refunds and customer sessions to support data-driven decisions.</p>
            <ol className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs" aria-label="Analysis workflow">
              {FLOW.map((s, i) => (
                <li key={s} className="flex items-center gap-2"><span className="chip chip-primary">{s}</span>{i < FLOW.length - 1 && <ArrowRight size={14} className="text-secondary" />}</li>
              ))}
            </ol>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="eyebrow">What it covers</h4>
                <ul className="mt-2 space-y-2 text-muted">
                  {["Revenue, orders, sessions and refund KPIs", "Revenue and orders by year and product", "Profit and product share analysis", "Sessions by device type", "Product and year slicers with tooltips"].map((f) => (
                    <li key={f} className="flex gap-2"><ArrowRight size={16} className="mt-1 shrink-0 text-primary" />{f}</li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">{["Power BI", "DAX", "Power Query", "Excel"].map((t) => <li key={t} className="chip chip-primary">{t}</li>)}</ul>
                <a className="btn btn-ghost btn-sm mt-6" href="https://github.com/reeyaagrawal/Ecommerce-sales-dashboard" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub Repository</a>
              </div>
              <div className="grid gap-3">
                <img src="/img/ecommerce-executive.webp" alt="Executive dashboard screenshot from the E-commerce Sales Analysis Power BI report" width={1100} height={618} loading="lazy" className="rounded-lg border border-(--border)" />
                <img src="/img/ecommerce-product.webp" alt="Product performance analysis screenshot from the Power BI report" width={1100} height={618} loading="lazy" className="rounded-lg border border-(--border)" />
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <h3 className="mt-14 mb-6 font-display text-xl font-semibold">More analytics dashboards</h3>
        <div className="grid gap-5 md:grid-cols-3">
          {MORE_DASHBOARDS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <TiltCard className="flex h-full flex-col p-6">
                <div className="mb-4 grid gap-2">
                  {p.images.map((src) => (
                    <img key={src} src={src} alt={p.alt} width={1100} height={618} loading="lazy" className="rounded-lg border border-(--border)" />
                  ))}
                </div>
                <h4 className="font-display text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                <a className="btn btn-ghost btn-sm mt-auto w-full" style={{ marginTop: "1.25rem" }} href={p.url} target="_blank" rel="noopener noreferrer"><Github size={16} /> Repository</a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
