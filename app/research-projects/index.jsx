"use client";

import React from "react";
import { Atom, Calendar, MapPin, Award, Github, FileText } from "lucide-react";
import { SectionDivider } from "../components/ui/Divider";
import { TechPill } from "../components/ui/TechPill";
import { researchProjects } from "@/utils/data/research-projects";

function ResearchProjectCard({ project }) {
  return (
    <article
      className="
        group relative overflow-hidden
        rounded-xl border border-white/10
        bg-[#0f0f0f]
        p-6
        transition-all duration-300
        hover:border-white/20
        hover:bg-white/[0.02]
        hover:shadow-[0_10px_35px_-15px_rgba(0,0,0,0.8)]
      "
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200 project-card-text">
              {project.title}
            </h3>
            <p className="text-sm text-white/50 italic project-card-text">{project.tagline}</p>
          </div>
        </div>

        {/* Metadata: Institution, Date, Role */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/60 border-y border-white/5 py-3 project-card-text">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-purple-400" />
            <span>{project.institution}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-purple-400" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-3.5 w-3.5 text-purple-400" />
            <span>{project.role}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/70 leading-relaxed project-card-text">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 project-card-text">
              Key Contributions & Outcomes
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-white/60 pl-1 project-card-text">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 project-card-text">
            Technologies & Methodologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
          </div>
        </div>

        {/* Action Buttons: Left Aligned Paper/Github */}
        <div className="flex items-center gap-2.5 pt-3 border-t border-white/5 mt-2">
          {project.paperUrl && (
            <a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                project-demo-btn
                inline-flex items-center gap-1.5 px-3 py-1.5 
                font-semibold text-xs rounded-lg 
                transition-all duration-200
              "
            >
              <FileText size={12} />
              <span>Paper</span>
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
      </div>
    </article>
  );
}

export default function ResearchProjects() {
  return (
    <section id="research-projects">
      <SectionDivider />

      <div className="grid gap-6">
        {researchProjects.map((project) => (
          <ResearchProjectCard key={project.id} project={project} />
        ))}
      </div>

      <SectionDivider />
    </section>
  );
}
