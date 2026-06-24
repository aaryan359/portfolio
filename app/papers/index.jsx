"use client";

import React from "react";
import { BookOpen, Calendar, User, ExternalLink } from "lucide-react";
import { SectionDivider } from "../components/ui/Divider";
import { papers } from "@/utils/data/papers";

function PaperCard({ paper }) {
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <article
      className="
        group relative block
        rounded-xl
        border border-white/10
        bg-[#0f0f0f]
        p-6
        transition-all duration-300
        hover:border-white/20
        hover:bg-white/[0.02]
        hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]
      "
    >
      <div className="flex flex-col gap-4">
        {/* Header: Title and External Link */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200 project-card-text">
              {paper.title}
            </h3>
          </div>
          {paper.url && (
            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition duration-200"
              aria-label="View Paper"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Authors and Date */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50 border-b border-white/5 pb-3 project-card-text">
          <div className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-purple-400" />
            <span>{paper.authors}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-purple-400" />
            <span>{formatDate(paper.date)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {paper.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider text-white-300 border border-purple-400 px-2 py-1 rounded project-card-text"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Abstract & Conclusion Sections */}
        <div className="space-y-4 pt-2 project-card-text">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              Abstract
            </h4>
            <p className="mt-1.5 text-sm text-white/70 leading-relaxed">
              {paper.abstract}
            </p>
          </div>

          {paper.conclusion && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                Conclusion & Results
              </h4>
              <p className="mt-1.5 text-sm text-white/70 leading-relaxed">
                {paper.conclusion}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Papers() {
  return (
    <section id="papers" className="mt-10">

      <div className="grid gap-6">
        {papers.map((paper) => (
          <PaperCard key={paper.id} paper={paper} />
        ))}
      </div>

      <SectionDivider />
    </section>
  );
}
