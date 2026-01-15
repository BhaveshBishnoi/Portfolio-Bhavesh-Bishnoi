import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}
