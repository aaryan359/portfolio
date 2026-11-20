"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowLeft, Check, ShieldAlert, CheckCircle2, Award, Calendar, Users, Cpu, Compass } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetailClient({ project }) {
  // Determine if this project is primarily web/desktop or mobile
  const isMobile = project.slug === "every-penny" || project.slug === "vehicle-rental-app" || project.slug === "promptx";

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 relative z-10">
      {/* Background radial overlays */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10 select-none">
        <div className="absolute top-[10%] left-[5%] h-[300px] w-[300px] rounded-full bg-purple-500/[0.01] blur-[100px] animate-pulse duration-[9000ms]" />
        <div className="absolute bottom-[20%] right-[5%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.01] blur-[110px] animate-pulse duration-[11000ms]" />
      </div>

      <div className="mx-auto max-w-5xl space-y-6">
        {/* BACK TO PROJECTS */}
        <Link
          href="/projects"
          className="
            inline-flex items-center gap-2 text-sm font-semibold
            text-white/60 hover:text-white transition duration-200
            group/back
          "
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover/back:-translate-x-1 text-purple-400" />
          Back to projects
        </Link>

        {/* TOP SECTION: 2-COLUMN HERO & PREVIEW MOCKUP */}
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          
          {/* COLUMN 1: HERO & METADATA DETAILS (7 cols on desktop, 12 on mobile) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Title & Description */}
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block">
                  {project.role}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {project.name}
                </h1>
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* ACTION LINKS */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                    bg-gradient-to-r from-purple-500 to-blue-500
                    text-sm font-semibold text-white transition duration-300
                    hover:brightness-110 hover:-translate-y-[1px]
                  "
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                    bg-white/5 border border-white/10 hover:border-white/20
                    text-sm font-semibold text-white/90 hover:text-white transition duration-300
                    hover:-translate-y-[1px] hover:bg-white/10
                  "
                >
                  <Github size={14} />
                  Source Code
                </a>
              )}
            </div>

            {/* METADATA GRID */}
            <div className="
              rounded-xl border border-white/10
              bg-[#0a0815]/30 backdrop-blur-xl p-4 space-y-3
            ">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-0.5">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white/40 uppercase">
                    <Calendar size={12} className="text-purple-400" /> Duration
                  </span>
                  <p className="text-sm font-semibold text-white/95">{project.duration}</p>
                </div>
                <div className="space-y-0.5">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white/40 uppercase">
                    <Users size={12} className="text-blue-400" /> Team
                  </span>
                  <p className="text-sm font-semibold text-white/95">{project.team}</p>
                </div>
                <div className="space-y-0.5">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white/40 uppercase">
                    <Award size={12} className="text-emerald-400" /> Status
                  </span>
                  <p className="text-sm font-semibold text-emerald-400">{project.status}</p>
                </div>
                <div className="space-y-0.5">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white/40 uppercase">
                    <Cpu size={12} className="text-amber-400" /> Stack
                  </span>
                  <p className="text-sm font-semibold text-white/95">{project.techStack.length} Techs</p>
                </div>
              </div>
            </div>

            {/* KEY FEATURES PILLS IN HERO */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-white/45 tracking-wider uppercase block">
                Key Features
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="
                      flex items-center gap-2.5 px-3 py-2 rounded-xl
                      bg-purple-500/[0.05] border border-purple-500/10 text-xs md:text-sm text-purple-100/95
                    "
                  >
                    <Check size={13} className="text-purple-400 shrink-0" />
                    <span className="font-semibold line-clamp-1">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: DEVICE PREVIEW MOCKUP (5 cols on desktop, 12 on mobile) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <DeviceMockup isMobile={isMobile} images={project.images} name={project.name} />
          </div>

        </div>

        {/* BOTTOM SECTION: FULL WIDTH DETAILED CONTENT (Packs tightly) */}
        <div className="space-y-6 pt-5 border-t border-white/5">
          
          {/* CHALLENGE & SOLUTION */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Challenge */}
            <div className="rounded-xl border border-rose-500/20 bg-rose-500/[0.02] p-5 space-y-3 shadow-[0_4px_20px_rgba(244,63,94,0.04)]">
              <h3 className="text-sm md:text-base font-extrabold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert size={16} className="text-rose-400 shrink-0" />
                The Challenge
              </h3>
              <ul className="space-y-2.5">
                {project.problem.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-rose-100/90 leading-relaxed font-normal">
                    <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02] p-5 space-y-3 shadow-[0_4px_20px_rgba(16,185,129,0.04)]">
              <h3 className="text-xs md:text-base font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                The Solution
              </h3>
              <ul className="space-y-2.5">
                {project.solution.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-emerald-100/90 leading-relaxed font-normal">
                    <Check size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* IMPACT & FUTURE PLANS */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Impact */}
            <div className="space-y-3 rounded-xl border border-cyan-500/10 bg-cyan-950/[0.08] p-5">
              <h3 className="text-sm md:text-base font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Impact & Learnings
              </h3>
              <ul className="space-y-2.5">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-cyan-100/90 leading-relaxed font-normal font-light">
                    <span className="text-cyan-400 font-bold shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future plans */}
            <div className="space-y-3 rounded-xl border border-fuchsia-500/10 bg-fuchsia-950/[0.08] p-5">
              <h3 className="text-sm md:text-base font-bold text-fuchsia-400 uppercase tracking-wider flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Future Roadmap
              </h3>
              <ul className="space-y-2.5">
                {project.futurePlans.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-fuchsia-100/90 leading-relaxed font-normal font-light">
                    <span className="text-fuchsia-400 font-bold shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* SMARTPHONE & BROWSER MOCKUP COMPONENTS (Removed heavy drop shadows) */
function DeviceMockup({ isMobile, images, name }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused, images.length]);

  return (
    <div
      className="relative w-full flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {isMobile ? (
        /* SMARTPHONE FRAME */
        <div className="relative w-full max-w-[210px] aspect-[9/19] rounded-[30px] p-1.5 bg-[#08080c] border-[5px] border-[#22222a] overflow-hidden">
          {/* Phone speaker notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-3 rounded-full bg-black z-30 flex items-center justify-center">
            <div className="w-8 h-0.5 bg-[#222] mb-0.5" />
          </div>
          
          {/* Image content */}
          <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-black z-10 border border-white/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`${name} screen ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </div>
      ) : (
        /* DESKTOP BROWSER FRAME */
        <div className="relative w-full max-w-[440px] rounded-lg bg-[#08080c] border border-white/10 overflow-hidden">
          {/* Browser tab bar */}
          <div className="px-2.5 py-1.5 border-b border-white/5 bg-[#101018] flex items-center gap-1.5">
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="mx-auto w-[55%] h-3.5 rounded bg-black/40 border border-white/5 text-[7px] text-white/20 flex items-center justify-center font-mono select-none">
              {name.toLowerCase().replace(/\s+/g, '-')}.app
            </div>
          </div>
          
          {/* Image content */}
          <div className="relative aspect-[16/10] bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`${name} screen ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* MULTI SLIDE CONTROLS */}
      {images.length > 1 && (
        <div className="mt-3.5 flex flex-col items-center gap-1 z-10 select-none">
          <div className="flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "bg-purple-400 w-3" : "bg-white/20 hover:bg-white/45"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-[8px] text-white/30 tracking-wider uppercase font-medium">Auto preview • Hover to pause</span>
        </div>
      )}
    </div>
  );
}
