import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";
import { PROFILE } from "../data";

export function Contact() {
  const [note, setNote] = useState("");
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Portfolio enquiry from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    setNote("Your email app should open with the message ready to send. If it doesn't, write to me directly at the address on the left.");
  };
  const rows = [
    [Mail, PROFILE.email, `mailto:${PROFILE.email}`],
    [Phone, PROFILE.phone, `tel:${PROFILE.phone.replace(/\s/g, "")}`],
    [Linkedin, "LinkedIn · riya-agrawal-tech", PROFILE.linkedin],
    [Github, "GitHub · reeyaagrawal", PROFILE.github],
  ] as const;
  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHead eyebrow="08 / Contact" title="Let's connect" sub="I'm open to data analyst internships and full-time fresher roles. If you're hiring or want to talk about data, I'd be glad to hear from you." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="grid content-start gap-3">
            {rows.map(([Icon, label, href]) => (
              <a key={label} href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="card flex min-h-14 items-center gap-4 p-4 no-underline">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-(--primary-soft) text-primary"><Icon size={20} /></span>
                <span className="break-all">{label}</span>
              </a>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="card grid gap-4 p-6">
              <label className="grid gap-1.5 text-sm">Name<input name="name" required autoComplete="name" className="field" /></label>
              <label className="grid gap-1.5 text-sm">Email<input name="email" type="email" required autoComplete="email" className="field" /></label>
              <label className="grid gap-1.5 text-sm">Message<textarea name="message" required rows={5} className="field" /></label>
              <button className="btn btn-primary" type="submit"><Send size={18} /> Send via email app</button>
              <p className="text-xs text-muted" role="status">{note || "This form opens your email app with the message filled in. It does not send anything on its own."}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
