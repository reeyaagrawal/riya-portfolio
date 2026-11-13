import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data";

export function Footer() {
  return (
    <footer className="border-t border-(--border) py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold">Riya Agrawal</p>
          <p className="text-sm text-secondary">Data Analyst</p>
        </div>
        <div className="flex gap-3">
          <a className="icon-btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a className="icon-btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a className="icon-btn" href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
        <p className="text-sm text-muted">© {new Date().getFullYear()} Riya Agrawal</p>
      </div>
    </footer>
  );
}
