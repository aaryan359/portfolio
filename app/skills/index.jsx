"use client";

import React from "react";
import { TechPill } from "../components/ui/TechPill";
import { skillsData } from "@/utils/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="liquid-glass mt-6 rounded-3xl p-5 sm:p-7 relative">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-white">Skills & Tech Stack</h2>
      </div>

      {/* Skills Grid - Flex Wrap */}
      <div className="skill-grid flex flex-wrap gap-2 sm:gap-3">
        {skillsData.map((skill) => (
          <TechPill
            key={skill.name}
            name={skill.name}
            desc={skill.desc}
          />
        ))}
      </div>
    </section>
  );
}
