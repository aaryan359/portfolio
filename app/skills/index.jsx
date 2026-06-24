"use client";

import React from "react";
import { TechPill } from "../components/ui/TechPill";
import { skillsData } from "@/utils/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="pt-8 pb-8  pl-6 pr-6 md:pr-6 relative">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-white">Skills & Tech Stack</h2>
      </div>

      {/* Skills Grid - Flex Wrap */}
      <div className="flex flex-wrap gap-3">
        {skillsData.map((skill, idx) => (
          <TechPill
            key={skill.name}
            name={skill.name}
            desc={skill.desc}
            style={{ animationDelay: `${idx * 0.02}s` }}
            className="fade-in-stagger"
          />
        ))}
      </div>
    </section>
  );
}
