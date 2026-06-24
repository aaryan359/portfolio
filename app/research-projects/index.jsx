"use client";

import React from "react";
import { Atom, Calendar, MapPin, Award, Github, ExternalLink } from "lucide-react";
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
            <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-sm text-white/50 italic">{project.tagline}</p>
          </div>
          
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition duration-200"
                aria-label="GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition duration-200"
                aria-label="Read Research Paper"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Metadata: Institution, Date, Role */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/60 border-y border-white/5 py-3">
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
        <p className="text-sm text-white/70 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              Key Contributions & Outcomes
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-white/60 pl-1">
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
          <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            Technologies & Methodologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ResearchProjects() {
  return (
    <section id="research-projects" className="mt-10">
      <SectionDivider />

      <header className="mb-6 flex items-center gap-3">
        <Atom className="h-6 w-6 text-purple-400 animate-spin-slow" />
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Research Projects
        </h2>
      </header>

      <div className="grid gap-6">
        {researchProjects.map((project) => (
          <ResearchProjectCard key={project.id} project={project} />
        ))}
      </div>

      <SectionDivider />
    </section>
  );
}
