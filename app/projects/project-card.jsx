"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { TechPill } from "../components/ui/TechPill";

export function ProjectCard({ project }) {
  const categories = project.categories || (project.role ? [project.role.replace(" Developer", "").replace(" Engineering", "")] : []);
  const points = project.features || project.problem || [];

  return (
    <article className="
      group relative overflow-hidden flex flex-col md:flex-row md:h-[310px]
      rounded-2xl border border-white/10
      bg-[#0a0815]/30 backdrop-blur-xl
      transition-all duration-300 ease-out
      hover:border-purple-500/50
    ">
      {/* LEFT COLUMN: IMAGE PREVIEW */}
      <div className="relative w-full md:w-64 h-48 md:h-full shrink-0 overflow-hidden bg-black/40 border-b md:border-b-0 md:border-r border-white/5">
        <img
          src={project.images[0]}
          alt={project.name}
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* RIGHT COLUMN: PROJECT DETAILS */}
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between md:h-full">
        <div className="space-y-2">
          
          {/* Title and Category Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
              {project.name}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span 
                  key={cat} 
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Subtitle/Tagline (Line 1) */}
          <p className="text-sm md:text-base text-white/90 font-medium line-clamp-1">
            {project.tagline}
          </p>

          {/* Bullet Points or Description (Lines 2 & 3 & 4) */}
          {points.length > 0 ? (
            <ul className="space-y-1 text-xs md:text-sm text-zinc-300 font-normal leading-relaxed">
              {points.slice(0, 3).map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-400 select-none font-bold">-</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs md:text-sm text-zinc-300 font-normal leading-relaxed line-clamp-3">
              {project.description}
            </p>
          )}
        </div>

        {/* Tech Stack and Call-To-Action buttons */}
        <div className="mt-4 space-y-3 pt-3 border-t border-white/5">
          {/* Tech Stack Pills (Wraps to exactly 2 lines using smaller premium sizes) */}
          <div className="flex flex-wrap gap-1.5 max-h-[62px] overflow-hidden">
            {project.techStack.map((tech) => (
              <TechPill 
                key={tech} 
                name={tech} 
                className="!px-3 !py-1 !text-[11px] !rounded-lg !gap-1.5"
              />
            ))}
          </div>

          {/* Action Buttons: Left Aligned Demo/Github, Right Aligned Details */}
          <div className="flex items-center justify-between w-full">
            {/* Left side: Demo and Github */}
            <div className="flex gap-2.5">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1.5 px-3 py-1.5 
                    bg-white text-black font-semibold text-xs rounded-lg 
                    hover:bg-white/90 transition-all duration-200
                  "
                >
                  <span>Demo</span>
                  <ExternalLink size={12} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1.5 px-3 py-1.5 
                    bg-black/60 border border-white/20 text-white font-medium text-xs rounded-lg 
                    hover:bg-white/[0.08] hover:border-white/30 transition-all duration-200
                  "
                >
                  <Github size={12} />
                  <span>GitHub</span>
                </a>
              )}
            </div>

            {/* Right side: Details */}
            <Link
              href={`/projects/${project.slug}`}
              className="
                inline-flex items-center gap-1.5 px-3 py-1.5 
                border border-purple-500/30 bg-purple-500/10 text-purple-300 font-medium text-xs rounded-lg 
                hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-200
              "
            >
              <span>Details</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
