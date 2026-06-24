"use client";

import React from "react";
import { TechPill } from "../components/ui/TechPill";
import { skillsData } from "@/utils/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="pt-10 pb-16 pr-8 md:pr-12 relative">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-white">Skills & Tech Stack</h2>
        <p className="text-sm text-white/50 mt-2 max-w-xl">
          Technologies I work with across AI/ML research, cloud DevOps infrastructure, and full-stack applications.
        </p>
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
