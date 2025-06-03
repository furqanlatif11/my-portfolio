import About from "./_components/about";
import Experience from "./_components/experience";
import HeroHeader from "./_components/header";
import Projects from "./_components/projects";
import Services from "./_components/services";
import Skills from "./_components/skills";
import ReadyToWork from "./_components/ready-to-work";
import Contact from "./_components/contact";


export default function Home() {
  return (
    <>
      <HeroHeader />
      <About />
      <Skills />
      <Experience />
      <Projects/>
      <Services/>
      <ReadyToWork title="Ready to Work Together?" description="Let’s create something amazing!"/>
      <Contact/>
    </>
  );
}
