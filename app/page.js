import Blogs from "./blogs";
import HeroSection from "./components/homepage/hero-section";
import ContactSection from "./contact";

import Education from "./education";
import Experience from "./experience";

import Projects from "./projects";
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
      <UpcomingProjects/>
      <Education />
      
      <ContactSection />
    </>
  )
};