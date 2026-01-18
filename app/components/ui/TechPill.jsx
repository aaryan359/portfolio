"use client";

import React from "react";
import Image from "next/image";
import { skillsImage } from "@/utils/skill-image";

export function TechPill({ name }) {
  const icon = skillsImage(name);

  return (
    <span
      tabIndex={0}
      className="
        inline-flex items-center gap-2
        rounded-md border border-white/15
        bg-black/40 px-2.5 py-1
        text-sm text-white
        transition-all duration-200
        hover:border-white/30
        hover:-translate-y-[1px]
        focus-visible:outline-none
        focus-visible:ring-1 focus-visible:ring-white/30
      "
    >
      {icon && (
        <Image
          src={icon.src}
          alt={name}
          width={14}
          height={14}
          className="h-3.5 w-3.5 object-contain"
        />
      )}

      <span className="leading-none">{name}</span>
    </span>
  );
}
