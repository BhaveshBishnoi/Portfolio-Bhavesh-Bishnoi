import Skills from "@/components/Skills";
import Contact from "./../components/Contact";
import Education from "./../components/Education";
import Experience from "./../components/Experience";
import Hero from "./../components/Hero";
import Projects from "./../components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
