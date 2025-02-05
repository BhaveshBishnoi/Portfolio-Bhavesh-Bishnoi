import Education from "./../components/Education";
import Experience from "./../components/Experience";
import Hero from "./../components/Hero";
import Projects from "./../components/Projects";
import Skills from "./../components/Skills";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </main>
  );
}
