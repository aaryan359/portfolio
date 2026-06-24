"use client";

import React from "react";
import Image from "next/image";
import { skillsImage } from "@/utils/skill-image";
import { SiKubernetes, SiTerraform, SiPytorch, SiNextdotjs } from "react-icons/si";
import { FaUbuntu, FaAws, FaReact } from "react-icons/fa";

const fallbackIcons = {
  "kubernetes": <SiKubernetes className="text-[#326ce5] w-4 h-4" />,
  "terraform": <SiTerraform className="text-[#844fba] w-4 h-4" />,
  "ubuntu": <FaUbuntu className="text-[#e95420] w-4 h-4" />,
  "react native": <FaReact className="text-[#61dafb] w-4 h-4 animate-[spin_10s_linear_infinite]" />,
  "pytorch": <SiPytorch className="text-[#ee4c2c] w-4 h-4" />,
  "aws": <FaAws className="text-[#ff9900] w-4 h-4" />,
  "next js": <SiNextdotjs className="text-white w-4 h-4" />,
};

export function TechPill({ name, desc, style, className }) {
  const icon = skillsImage(name);
  const normalizedKey = name.toLowerCase().trim();
  const fallback = fallbackIcons[normalizedKey];

  return (
    <div className="relative group" style={style}>
      <span
        tabIndex={0}
        className={`
          inline-flex items-center gap-2
          rounded-lg border border-white/10
          bg-white/[0.03] px-3.5 py-1.5
          text-xs md:text-sm font-semibold text-white/90
          transition-all duration-300
          hover:border-white/30
          hover:bg-white/[0.08]
          hover:-translate-y-[2px]
          hover:text-white
          hover:shadow-[0_6px_20px_rgba(255,255,255,0.08)]
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-white/30
          cursor-pointer select-none
          ${className || ""}
        `}
      >
        {icon ? (
          <Image
            src={icon.src}
            alt={name}
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
        ) : fallback ? (
          fallback
        ) : null}

        <span className="leading-none">{name}</span>
      </span>

      {/* Tooltip Description on Hover */}
      {desc && (
        <div
          className="
            absolute bottom-full left-1/2 z-50 mb-3 w-64 -translate-x-1/2
            rounded-xl border border-white/10 bg-[#121214]/98 p-3 text-xs md:text-sm font-medium text-zinc-200 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.05)]
            backdrop-blur-md transition-all duration-200 ease-out
            opacity-0 scale-95 pointer-events-none
            group-hover:opacity-100 group-hover:scale-100
          "
        >
          {/* Arrow */}
          <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-r border-b border-white/10 bg-[#121214]" />
          
          <div className="text-center leading-relaxed">
            {desc}
          </div>
        </div>
      )}
    </div>
  );
}
