"use client";

import React from "react";
import { TechPill } from "../components/ui/TechPill";
import { FiExternalLink, FiCalendar, FiMapPin } from "react-icons/fi";
import { experiences } from "@/utils/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="pt-8 pb-8 pl-8 md:pl-8 relative">
      {/* Header */}
      <div className="mb-4 relative z-10">
        <h2 className="text-2xl md:text-2xl font-extrabold tracking-tight text-white">
          Experience <span className="text-md text-white/40 font-normal ml-2">({experiences.length})</span>
        </h2>
      </div>

      {/* Timeline Card Wrapper */}
      <div className="relative space-y-6 z-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group relative">
            {/* Apple-style Glassmorphic Card */}
            <div className="
              relative rounded-2xl border border-white/10 
              liquid-glass bg-[#0a0815]/30 backdrop-blur-xl p-6 transition-all duration-300
              hover:border-white/20 hover:bg-[#0a0815]/50 
              hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
            ">
              {/* Header Container */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                      {exp.company}
                    </h3>

                    {exp.status === "Active" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {exp.status}
                      </span>
                    )}

                    {exp.status === "Completed" && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        Completed
                      </span>
                    )}

                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition duration-200"
                        aria-label={`${exp.company} Website`}
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-white/70 font-semibold mt-1.5 text-sm md:text-base">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-col md:items-end text-xs md:text-sm text-white/50 space-y-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <FiCalendar size={14} className="text-purple-400" />
                    {exp.start} – {exp.end}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <FiMapPin size={14} className="text-purple-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="experience-point-text flex items-start gap-2">
                    <span className="text-purple-500 shrink-0 select-none">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Badges */}
              {exp.tools && (
                <div className="mt-6 border-t border-white/5 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <TechPill key={tool} name={tool} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
