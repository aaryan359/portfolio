"use client";

import React, { useState } from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

import { SectionDivider } from "../components/ui/Divider";
import { ShowMoreButton } from "../components/ui/Button";
import { blogs } from "@/utils/data/blogs";

/* ---------------- Blog Card ---------------- */

function BlogCard({ blog }) {
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <a
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
      className="
        group relative block
        rounded-xl
        border border-border
        bg-background/40
        px-6 py-3
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:border-white/20
        hover:bg-background/60
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-white/30
      "
    >
      {/* Left accent line */}
      
      <div className="flex items-start justify-between gap-6">
        {/* Content */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg md:text-xl font-medium text-foreground leading-snug">
              {blog.title}
            </h3>
            <span className="badge-mono  text-xs">
              {blog.category}
            </span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(blog.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {blog.readTime}
            </span>
          </div>
        </div>

        {/* Arrow */}
        <span
          className="
            mt-1 inline-flex items-center gap-1
            text-sm text-muted-foreground
            transition-all duration-200
            group-hover:text-foreground
          "
        >
          Read
          <ArrowUpRight
            className="
              h-4 w-4
              transition-transform duration-200
              group-hover:translate-x-1 group-hover:-translate-y-1
            "
          />
        </span>
      </div>
    </a>
  );
}

/* ---------------- Main Section ---------------- */

export default function Blogs() {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section id="blogs" className="mt-8">
      <SectionDivider />

      {/* Header */}
      <header className="mb-3 ">
        <h2 className="text-3xl font-semibold tracking-tight">
          Blogs
        </h2>
      </header>

    
      <div className="grid gap-3">
        {visibleBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Show more */}
      {blogs.length > 3 && (
        <div className="mt-6 flex justify-center">
          <ShowMoreButton
            label={showAll ? "Show less" : "Show all posts"}
            onClick={() => setShowAll(!showAll)}
          />
        </div>
      )}

      <SectionDivider />
    </section>
  );
}
