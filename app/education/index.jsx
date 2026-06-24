"use client";

import React from "react";
import { educations } from "@/utils/data/educations";
import { FaGraduationCap, FaFlask } from "react-icons/fa";
import {
  FiCalendar,
  FiBookOpen,
  FiGrid,
  FiTrendingUp,
  FiBarChart2,
  FiShare2,
  FiCpu,
  FiGitMerge,
  FiActivity,
  FiZap,
  FiPercent
} from "react-icons/fi";

// Map each course name to its custom icon and brand color
const courseMeta = {
  "Linear Algebra": {
    icon: <FiGrid className="text-purple-400 shrink-0" size={15} />
  },
  "Multivariable Calculus": {
    icon: <FiTrendingUp className="text-blue-400 shrink-0" size={15} />
  },
  "Probability & Random Processes": {
    icon: <FiBarChart2 className="text-emerald-400 shrink-0" size={15} />
  },
  "Discrete Mathematics": {
    icon: <FiShare2 className="text-amber-400 shrink-0" size={15} />
  },
  "Scientific Computing": {
    icon: <FiCpu className="text-rose-400 shrink-0" size={15} />
  },
  "Data Structures & Algorithms": {
    icon: <FiGitMerge className="text-cyan-400 shrink-0" size={15} />
  },
  "Advanced Mathematics": {
    icon: <FiPercent className="text-amber-400 shrink-0" size={15} />
  },
  "Classical Mechanics": {
    icon: <FiActivity className="text-rose-400 shrink-0" size={15} />
  },
  "Electromagnetism": {
    icon: <FiZap className="text-yellow-400 shrink-0" size={15} />
  },
  "Organic & Inorganic Chemistry": {
    icon: <FaFlask className="text-emerald-400 shrink-0" size={15} />
  }
};

const getCourseIcon = (name) => {
  return courseMeta[name]?.icon || <FiBookOpen className="text-purple-400 shrink-0" size={15} />;
};

export default function Education() {
  return (
    <section id="education" className="pt-6 pb-6 pl-6 pr-6 md:pr-6 relative">
      {/* Apple-style background blur helper elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
        <div className="absolute top-[20%] left-[10%] h-[350px] w-[350px] rounded-full bg-white/[0.02] blur-[110px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[20%] right-[10%] h-[350px] w-[350px] rounded-full bg-white/[0.03] blur-[120px] animate-pulse duration-[10000ms]" />
        <div className="absolute top-[40%] right-[40%] w-32 h-32 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-md animate-bounce duration-[12000ms]" />
      </div>

      {/* Header */}
      <div className="mb-2 relative z-10">
        <h2 className="text-2xl md:text-2xl font-extrabold tracking-tight text-white">
          Education
        </h2>
      </div>

      {/* Education List - Stacked Rows */}
      <div className="space-y-5 mt-4 relative z-10">
        {educations.map((edu) => (
          <div
            key={edu.id}
            className="
              relative flex flex-col justify-between
              rounded-2xl border border-white/10 
              bg-[#0a0815]/30 backdrop-blur-xl p-5 md:p-6
            "
          >
            <div>
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-purple-400">
                    <FiCalendar size={14} />
                    {edu.duration}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {edu.title}
                  </h3>
                </div>

                {/* Floating Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-purple-400">
                  <FaGraduationCap size={22} />
                </div>
              </div>

              {/* Institution */}
              <p className="mt-2 text-sm md:text-base font-semibold text-white/80">
                {edu.institution}
              </p>

              {/* Details */}
              {edu.details && (
                <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed font-light">
                  {edu.details}
                </p>
              )}
            </div>

            {/* Coursework Tag list */}
            {edu.coursework && (
              <div className="mt-2 border-t border-white/5 pt-4">
                <p className="text-xs md:text-sm font-semibold text-white/40 mb-3 flex items-center gap-1.5">
                  <FiBookOpen size={14} className="text-purple-400" />
                  Core Coursework
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {edu.coursework.map((course) => (
                    <div key={course.name} className="relative group hover:z-50">
                      <span
                        tabIndex={0}
                        className="
                          inline-flex items-center gap-2
                          text-xs md:text-sm font-semibold px-3.5 py-1.5 rounded-lg border border-white/10
                          bg-white/[0.03] text-white/90 backdrop-blur-xl
                          cursor-pointer select-none transition-all duration-300
                          hover:border-white/30 hover:bg-white/[0.08] hover:-translate-y-[2px]
                          hover:text-white hover:shadow-[0_6px_20px_rgba(255,255,255,0.08)]
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                        "
                      >
                        {getCourseIcon(course.name)}
                        {course.name}
                      </span>

                      {/* Tooltip Description on Hover */}
                      {course.desc && (
                        <div
                          className="
                            course-pill-tooltip
                            absolute bottom-full left-1/2 z-50 mb-3 w-64 -translate-x-1/2
                            rounded-xl border border-white/10 bg-[#121214] p-3 text-xs md:text-sm font-medium text-zinc-200 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.05)]
                            backdrop-blur-lg transition-all duration-200 ease-out
                            opacity-0 scale-95 pointer-events-none
                            group-hover:opacity-100 group-hover:scale-100
                          "
                        >
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-r border-b border-white/10 bg-[#121214] tooltip-arrow" />

                          <div className="text-center leading-relaxed font-normal">
                            {course.desc}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
