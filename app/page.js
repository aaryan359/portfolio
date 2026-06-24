import Blogs from "./blogs";
import HeroSection from "./components/homepage/hero-section";
import ContactSection from "./contact";

import Education from "./education";
import Experience from "./experience";

import Projects from "./projects";
import ResearchProjects from "./research-projects";
import Papers from "./papers";
import Skills from "./skills";
import UpcomingProjects from "./upcomingProjects";


export default async function Home() {

  return (
    <>
      <HeroSection />
      <Blogs  />
      <Experience />
      <Skills />
      <Projects />
      <ResearchProjects />
      <Papers />
      <UpcomingProjects/>
      <Education />
      
      <ContactSection />
    </>
  )
};