import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE } from "../data";

const LINKS = [
  ["about", "About"], ["skills", "Skills"], ["experience", "Experience"], ["projects", "Projects"],
  ["education", "Education"], ["certifications", "Certificates"], ["github", "GitHub"], ["contact", "Contact"],
] as const;

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  const show = !hidden || open;
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 border-b border-(--border) backdrop-blur-md transition-transform duration-300"
      style={{ background: "color-mix(in srgb, var(--bg) 82%, transparent)", transform: show ? "none" : "translateY(-100%)" }}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          Riya<span className="text-primary"> Agrawal</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`relative rounded-lg px-3 py-2 text-sm transition-colors hover:text-primary ${active === id ? "text-primary" : "text-muted"}`}
            >
              {label}
              <span className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-primary transition-opacity ${active === id ? "opacity-100" : "opacity-0"}`} />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm hidden sm:inline-flex">Resume</a>
          <button
            className="icon-btn lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="container-x grid gap-1 pb-4 lg:hidden">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 ${active === id ? "bg-(--primary-soft) text-primary" : "text-ink"}`}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
