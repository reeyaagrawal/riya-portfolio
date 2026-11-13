import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
import { Certifications } from "./sections/Certifications";
import { GitHubSection } from "./sections/GitHub";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { ParticleField } from "./components/ParticleField";

export default function App() {
  return (
    <>
      <a href="#about" className="skip-link">Skip to content</a>
      <ParticleField />
      <Nav />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
