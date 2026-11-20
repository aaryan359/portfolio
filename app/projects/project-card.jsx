"use client";

import Link from "next/link";
import { ProjectImage } from "./project-image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { TechPill } from "../components/ui/TechPill";

export function ProjectCard({ project }) {
  const categories = project.categories || (project.role ? [project.role.replace(" Developer", "").replace(" Engineering", "")] : []);

  return (
    <article className="
      project-card group relative overflow-hidden flex flex-col md:flex-row md:min-h-[230px]
      rounded-2xl border border-white/10
      liquid-glass bg-[#0a0815]/30 backdrop-blur-xl
      transition-all duration-300 ease-out
      hover:border-purple-500/50
    ">
      {/* LEFT COLUMN: IMAGE PREVIEW */}
      <div className="relative w-full md:w-56 h-48 md:h-auto md:self-stretch shrink-0 overflow-hidden bg-black/40 border-b md:border-b-0 md:border-r border-white/5">
        <ProjectImage
          loading={project.id === 1 ? "eager" : "lazy"}
          src={project.images?.[0]}
          alt={project.imageAlt || project.name}
          className="
            absolute inset-0 h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* RIGHT COLUMN: PROJECT DETAILS */}
      <div className="project-card-content min-w-0 flex-1 p-4 md:p-5 flex flex-col justify-between md:min-h-[230px]">
        <div className="space-y-1.5">

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

          <p className="text-sm md:text-base text-white/95 font-medium font-normal leading-relaxed line-clamp-3 project-card-text">
            {project.description}
          </p>

        </div>

        {/* Tech Stack and Call-To-Action buttons */}
        <div className="mt-3 space-y-2 pt-2 border-t border-white/5">
          {/* Tech Stack Pills (Wraps to exactly 2 lines using smaller premium sizes) */}
          <div className="project-tech-stack flex flex-wrap gap-1.5 max-h-[62px] overflow-hidden">
            {project.techStack.map((tech) => (
              <TechPill
                key={tech}
                name={tech}
                className="!px-3 !py-1 !text-[11px] !rounded-lg !gap-1.5"
              />
            ))}
          </div>

          {/* Action Buttons: Left Aligned Demo/Github, Right Aligned Details */}
          <div className="project-card-actions flex flex-wrap gap-3 items-center justify-between w-full">
            {/* Left side: Demo and Github */}
            <div className="flex flex-wrap gap-2.5">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-control
                    project-demo-btn
                    inline-flex items-center gap-1.5 px-3 py-1.5 
                    font-semibold text-xs rounded-lg 
                    transition-all duration-200
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
                  className="glass-control
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
              className="glass-control
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
