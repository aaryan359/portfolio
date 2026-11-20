"use client";

import React from "react";
import Image from "next/image";
import InfoTooltip from "./InfoTooltip";
import { skillsImage } from "@/utils/skill-image";
import { SiKubernetes, SiTerraform, SiPytorch, SiNextdotjs } from "react-icons/si";
import { FaUbuntu, FaAws, FaReact } from "react-icons/fa";

const fallbackIcons = {
  "kubernetes": <SiKubernetes className="text-[#326ce5] w-4 h-4" />,
  "terraform": <SiTerraform className="text-[#844fba] w-4 h-4" />,
  "ubuntu": <FaUbuntu className="text-[#e95420] w-4 h-4" />,
  "react native": <FaReact className="text-[#61dafb] w-4 h-4 " />,
  "pytorch": <SiPytorch className="text-[#ee4c2c] w-4 h-4" />,
  "aws": <FaAws className="text-[#ff9900] w-4 h-4" />,
  "next js": <SiNextdotjs className="text-white w-4 h-4" />,
};

export function TechPill({ name, desc, style, className }) {
  const icon = skillsImage(name);
  const normalizedKey = name.toLowerCase().trim();
  const fallback = fallbackIcons[normalizedKey];

  return (
    <InfoTooltip description={desc} style={style}>
      <span
        className={`
          glass-control inline-flex items-center gap-2
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

    </InfoTooltip>
  );
}
