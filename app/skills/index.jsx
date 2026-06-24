"use client";

import React from "react";
import Image from "next/image";
import { skillsImage } from "@/utils/skill-image";
import { skillsData } from "@/utils/data/skills";
import { SectionDivider } from "../components/ui/Divider";

function SkillCard({ skill, idx }) {
  const icon = skillsImage(skill.name);

  return (
    <div
      tabIndex={0}
      className="
        group relative overflow-hidden
        rounded-xl border border-white/10
        bg-white/[0.02] p-5
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:border-purple-500/30
        hover:bg-white/[0.04]
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]
        focus-visible:outline-none
        focus-visible:ring-1 focus-visible:ring-purple-500/50
        fade-in-stagger
      "
      style={{ animationDelay: `${idx * 0.04}s` }}
    >
      {/* Dynamic Hover Glow top-border */}
      <div className="absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

      <div className="flex items-start gap-4">
        {/* Skill Icon */}
        {icon && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 p-2.5 transition duration-300 group-hover:scale-105 group-hover:border-purple-500/20">
            <Image
              src={icon.src}
              alt={skill.name}
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
        )}

        {/* Content */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
            {skill.name}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed font-light">
            {skill.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mt-10">
      <SectionDivider />

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-white">Skills & Tech Stack</h2>
        <p className="text-sm text-white/50 mt-2 max-w-xl">
          A real and slightly humorous look at the technologies I use to build things.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {skillsData.map((skill, idx) => (
          <SkillCard key={skill.name} skill={skill} idx={idx} />
        ))}
      </div>

      <SectionDivider />
    </section>
  );
}
