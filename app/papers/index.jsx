"use client";

import React, { useState } from "react";
import { BookOpen, Calendar, User, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { SectionDivider } from "../components/ui/Divider";
import { papers } from "@/utils/data/papers";

function PaperCard({ paper }) {
  const [showAbstract, setShowAbstract] = useState(false);

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
            <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
              {paper.title}
            </h3>
            <p className="text-sm text-purple-400 font-medium">{paper.venue}</p>
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
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50 border-b border-white/5 pb-3">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {paper.authors}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(paper.date)}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {paper.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider text-white/40 border border-white/10 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Abstract Section */}
        <div className="mt-2">
          <button
            onClick={() => setShowAbstract(!showAbstract)}
            className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition duration-200 focus:outline-none"
          >
            <span>{showAbstract ? "Hide Abstract" : "View Abstract"}</span>
            {showAbstract ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>

          {showAbstract && (
            <p className="mt-3 text-sm text-white/60 leading-relaxed bg-white/[0.01] border border-white/5 p-4 rounded-lg animate-fade-in">
              {paper.abstract}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Papers() {
  return (
    <section id="papers" className="mt-10">
      <SectionDivider />
      
      <header className="mb-6 flex items-center gap-3">
        <BookOpen className="h-6 w-6 text-purple-400" />
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Publications & Papers
        </h2>
      </header>

      <div className="grid gap-4">
        {papers.map((paper) => (
          <PaperCard key={paper.id} paper={paper} />
        ))}
      </div>

      <SectionDivider />
    </section>
  );
}
