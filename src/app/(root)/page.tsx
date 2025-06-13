import About from "./_components/about";
import Experience from "./_components/experience";
import HeroHeader from "./_components/header";
import Projects from "./_components/projects";
import Services from "./_components/services";
import Skills from "./_components/skills";
import ReadyToWork from "./_components/ready-to-work";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
// import InteractiveMap from "./_components/project-map";
import IdeaToReality from "./_components/ideatoreality";


export default function Home() {
  return (
    <>
      <HeroHeader />
      <IdeaToReality/>
      <About />
      <Skills />
      <Experience />
      <Projects/>
      {/* <InteractiveMap/> */}
      <Services/>
      <ReadyToWork title="Ready to Work Together?" description="Let’s create something amazing!"/>
      <Contact/>
      <Footer/>
    </>
  );
}
