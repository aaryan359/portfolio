"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { TechPill } from "../components/ui/TechPill";

export function ProjectCard({ project }) {
  // Mapping roles or status to nice colored badges
  const isCompleted = project.status === "Completed";
  
  return (
    <article
      className="
        group relative overflow-hidden flex flex-col justify-between
        rounded-2xl border border-white/10
        bg-[#0a0815]/30 backdrop-blur-xl
        transition-all duration-500 ease-out
        hover:-translate-y-1.5
        hover:border-purple-500/30
        hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]
      "
    >
      {/* CARD GLOW EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div>
        {/* IMAGE WRAPPER */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5">
          <img
            src={project.images[0]}
            alt={project.name}
            className="
              h-full w-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
          />
          {/* Subtle gradient vignette to blend image with card background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* FLOATING STATUS BADGES */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="
              inline-flex items-center gap-1.5 px-3 py-1 rounded-full 
              text-[10px] font-bold tracking-wider uppercase 
              bg-black/60 border border-white/10 text-white/90 backdrop-blur-md
            ">
              <span className={`h-1.5 w-1.5 rounded-full ${isCompleted ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`} />
              {project.status}
            </span>
          </div>

          {/* QUICK LINKS FLOATING */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-8 w-8 items-center justify-center rounded-lg 
                  bg-black/60 border border-white/10 text-white/70 
                  hover:text-white hover:bg-purple-600/80 hover:border-purple-500/50 
                  transition-all duration-200 backdrop-blur-md hover:scale-105
                "
                title="Live Demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-8 w-8 items-center justify-center rounded-lg 
                  bg-black/60 border border-white/10 text-white/70 
                  hover:text-white hover:bg-purple-600/80 hover:border-purple-500/50 
                  transition-all duration-200 backdrop-blur-md hover:scale-105
                "
                title="Source Code"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-4">
          <div className="space-y-1">
            {/* ROLE METADATA */}
            <span className="text-[10px] font-semibold text-purple-400/80 uppercase tracking-widest block">
              {project.role}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
              {project.name}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-white/50 leading-relaxed font-light line-clamp-2">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] font-medium text-white/40 border border-white/5 bg-white/[0.01] px-2 py-0.5 rounded-full flex items-center">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="px-5 pb-5 pt-2 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-white/40 font-light">
          Duration: {project.duration}
        </span>

        <Link
          href={`/projects/${project.slug}`}
          prefetch={true}
          className="
            group/btn inline-flex items-center gap-1.5
            text-xs font-semibold text-white/60 hover:text-white
            transition-all duration-300
          "
        >
          View Case Study
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1 text-purple-400" />
        </Link>
      </div>
    </article>
  );
}
