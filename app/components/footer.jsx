"use client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { ArrowUpRight, Github, Linkedin, Twitter, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full px-4 md:px-8 mt-12 pb-12 border-t border-white/10">
      {/* Visual Top Glow */}
      <div className="pointer-events-none absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 pb-8">
        {/* Left Brand Column */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-purple-400 transition duration-300 project-card-text">
              {personalData.name.toUpperCase()}
            </span>
          </Link>
          <p className="text-sm text-white/50 leading-relaxed max-w-sm about-thought-text">
            A developer crafting high-performance web and mobile solutions with clean architecture and delightful user experiences.
          </p>
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/5 px-3 py-1 text-xs text-green-400 select-none project-card-text">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Freelance & Collaborations
          </div>
        </div>

        {/* Center Navigation Links Column */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/40 project-card-text">
              Navigation
            </span>
            <Link href="/" className="text-sm text-white/60 hover:text-purple-400 transition-colors duration-200 project-card-text">
              Home
            </Link>
            <Link href="/projects" className="text-sm text-white/60 hover:text-purple-400 transition-colors duration-200 project-card-text">
              Projects
            </Link>
            <Link href="/research-projects" className="text-sm text-white/60 hover:text-purple-400 transition-colors duration-200 project-card-text">
              Hackathons
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/40 project-card-text">
              Resources
            </span>
            <Link href="/papers" className="text-sm text-white/60 hover:text-purple-400 transition-colors duration-200 project-card-text">
              Papers
            </Link>
            <Link href="/blogs" className="text-sm text-white/60 hover:text-purple-400 transition-colors duration-200 project-card-text">
              Blogs
            </Link>
            <Link href="/upcoming-projects" className="text-sm text-white/60 hover:text-purple-400 transition-colors duration-200 project-card-text">
              Upcoming
            </Link>
            <Link href="/gallery" className="text-sm text-white/60 hover:text-purple-400 transition-colors duration-200 project-card-text">
              Gallery
            </Link>
          </div>
        </div>

        {/* Right Connect Column */}
        <div className="space-y-4">
          <span className="block text-xs font-semibold uppercase tracking-wider text-white/40 project-card-text">
            Let's Connect
          </span>
          <p className="text-sm text-white/50 leading-relaxed about-thought-text">
            Have a project in mind or want to talk tech? Drop a message in the contact section or reach out on socials.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center social-icon-github transition-all duration-300 hover:-translate-y-0.5"
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center social-icon-linkedin transition-all duration-300 hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={personalData.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center social-icon-twitter transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Twitter Profile"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright info */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 text-xs text-white/40 project-card-text">
        <div>
          © {currentYear} {personalData.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5 mt-4 sm:mt-0 select-none project-card-text">
          <Sparkles size={12} className="text-purple-400 animate-pulse" />
          Designed & crafted dynamically
        </div>
      </div>
    </footer>
  );
}