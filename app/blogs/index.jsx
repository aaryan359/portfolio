"use client";

import React, { useState } from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { SectionDivider } from "../components/ui/Divider";
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
        blog-card
        group relative block
        rounded-xl
        p-6
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-white/30
      "
    >
      <div className="flex flex-col gap-4">
        {/* Title and Subtitle */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <h3 className="text-lg md:text-xl font-bold text-white project-card-text leading-snug">
              {blog.title}
            </h3>
            {blog.subtitle && (
              <p className="text-sm text-white/50 line-clamp-2 project-card-text font-normal">
                {blog.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Footer info: Date, Read Time, and Category Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-3 mt-1">
          <div className="flex items-center gap-4 text-xs text-white/50 project-card-text">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-purple-400" />
              {formatDate(blog.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-purple-400" />
              {blog.readTime}
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <span className="text-[10px] uppercase tracking-wider text-purple-300 border border-purple-400/50 px-2 py-0.5 rounded project-card-text font-semibold">
              {blog.category}
            </span>

            <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/60 group-hover:text-white transition duration-200 project-card-text">
              <span>Read</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ---------------- Main Section ---------------- */

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  // Calculate pagination details
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll back to the top of the blogs section
    const element = document.getElementById("blogs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="blogs">

      <div className="grid gap-6">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center gap-2 project-card-text">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn px-3 py-1.5"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`
                h-8 w-8 pagination-btn
                ${currentPage === page ? "pagination-btn-active" : ""}
              `}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn px-3 py-1.5"
          >
            Next
          </button>
        </div>
      )}

      <SectionDivider />
    </section>
  );
}
