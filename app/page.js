import AboutSection from "./about";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import ContactSection from "./contact";

export default async function Home() {
  return (
    <>
      <AboutSection />
      <Skills />
      <Experience />
      <Education />
      <ContactSection />
    </>
  );
}