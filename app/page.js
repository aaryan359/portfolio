"use client";

import React, { useRef } from "react";
import AboutSection from "./about";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import ContactSection from "./contact";
import { TimelineFlow } from "./components/TimelineFlow";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Scroll-Linked Neon Zig-Zag Timeline */}
      <TimelineFlow parentRef={containerRef} />

      <AboutSection />
      <Skills />
      <Experience />
      <Education />
      <ContactSection />
    </div>
  );
}