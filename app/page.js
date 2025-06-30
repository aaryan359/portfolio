
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Blogs from "./components/homepage/blogs";
import UpcomingProjects from "./components/homepage/upcomingProjects";



export default async function Home() {

  return (
    <>
      <HeroSection />
      <Blogs  />
      <Experience />
      <Skills />
      <Projects />
      <UpcomingProjects/>
      <Education />
      
      <ContactSection />
    </>
  )
};