"use client";

import React, { useRef } from "react";
import { TechPill } from "../components/ui/TechPill";
import { FiExternalLink, FiCalendar, FiMapPin } from "react-icons/fi";
import { useScroll, useTransform, motion } from "framer-motion";

const experiences = [
  {
    company: "MIDAS",
    role: "AI/ML Research Intern",
    start: "June 2026",
    end: "Present",
    location: "Delhi, India (Remote)",
    status: "Active",
    tools: ["PyTorch", "Python", "OpenCV", "TensorFlow Lite", "Flask"],
    points: [
      "Conducting research on multimodal deep learning models to process heterogeneous data types.",
      "Designing low-latency, resource-constrained model architectures for edge computing devices.",
      "Optimizing inference pipelines and evaluating models on academic benchmark datasets."
    ]
  },
  {
    company: "Code for GovTech (C4GT)",
    role: "DevOps & Open Source Contributor",
    start: "May 2026",
    end: "Present",
    location: "Remote",
    status: "Active",
    tools: ["Terraform", "Docker", "Kubernetes", "AWS", "Go", "GitHub Actions"],
    points: [
      "Contributing to open-source ecosystem architectures under the C4GT Technology Advocacy Project (TAP).",
      "Automating infrastructure deployments using Terraform, optimizing cloud resources, and building reusable CI/CD pipelines.",
      "Developing modular APIs and packages in Go/Next.js to streamline public sector tech initiatives."
    ]
  },
  {
    company: "DevOps Intern",
    role: "DevOps Engineering Intern",
    start: "April 2026",
    end: "Present",
    location: "Remote",
    status: "Active",
    tools: ["AWS", "Docker", "Kubernetes", "Terraform", "Nginx", "Git", "Bash"],
    points: [
      "Designing and deploying production-grade, highly available cloud infrastructures on AWS.",
      "Orchestrating containerized applications with Docker and managing deployments using Kubernetes clusters.",
      "Automating routine tasks and container configurations using Bash scripting and Nginx ingress controllers."
    ]
  },
  {
    company: "Freelance Developer",
    role: "Fullstack & Mobile Developer",
    website: "https://aaryanm.netlify.app/",
    start: "August 2025",
    end: "Present",
    location: "Remote",
    status: "Active",
    tools: ["Next.js", "React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Figma"],
    points: [
      "Crafting responsive web applications and cross-platform mobile apps with pixel-perfect designs and intuitive UX.",
      "Developing modular API structures, optimizing database transactions, and implementing secure user authentication.",
      "Guiding projects from client ideation, system design, to continuous integration and cloud deployment."
    ]
  },
  {
    company: "Infrawave Solutions",
    role: "React Native Developer",
    website: "https://www.infrawavesolutions.com/",
    start: "March 2025",
    end: "May 2025",
    location: "Jaipur, India (Remote)",
    tools: ["React Native", "React", "TypeScript", "Tailwind CSS", "Figma", "AWS", "Postman"],
    points: [
      "Worked on a vehicle rental app featuring an admin dashboard and real-time booking analytics, optimizing fleet utilization by 35%.",
      "Automated invoice generation reduced manual work by 90% through dynamic pricing, tax calculations, and customizable templates.",
      "Implemented efficient data fetching and robust error handling.",
      "Built accessible, performance-focused UI systems."
    ]
  },
  {
    company: "ABV IIITM Gwalior",
    role: "ML Engineer (Embedded Systems)",
    start: "June 2025",
    end: "July 2025",
    location: "Gwalior, India (On-site)",
    tools: ["Raspberry Pi 5", "Python", "TensorFlow Lite", "OpenCV", "Flask"],
    points: [
      "Developed and optimized resource-constrained Machine Learning models for real-time edge computing on Raspberry Pi 5.",
      "Implemented low-latency image processing pipelines using OpenCV to enable real-time detection on the hardware.",
      "Integrated edge models with local web interfaces using lightweight Python frameworks."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef(null);

  // Track scroll progress of the experience container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate top percentage for the moving indicator
  const topPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="mt-16 relative">
      {/* Apple-style background blur helper elements (with soft whites for realistic glass refraction) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
        {/* Soft-white ambient radial glows */}
        <div className="absolute top-[10%] left-[20%] h-[350px] w-[350px] rounded-full bg-white/[0.03] blur-[110px] animate-pulse duration-[8000ms]" />
        <div className="absolute top-[45%] right-[25%] h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-[100px] animate-pulse duration-[10000ms]" />
        <div className="absolute bottom-[10%] left-[30%] h-[280px] w-[280px] rounded-full bg-white/[0.04] blur-[90px] animate-pulse duration-[6000ms]" />

        {/* Floating white gradient frosted spheres */}
        <div className="absolute top-1/4 left-[10%] w-24 h-24 rounded-full bg-gradient-to-tr from-white/10 to-white/5 blur-sm animate-bounce duration-[14000ms]" />
        <div className="absolute bottom-1/3 right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-white/8 to-transparent blur-md animate-bounce duration-[17000ms]" />
        
        {/* Colorful elements for deep refraction contrast */}
        <div className="absolute top-[5%] right-[15%] h-[250px] w-[250px] rounded-full bg-purple-500/5 blur-[90px]" />
        <div className="absolute bottom-[5%] left-[15%] h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      {/* Header */}
      <div className="mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Experience <span className="text-lg text-white/40 font-normal ml-2">({experiences.length})</span>
        </h2>
        <p className="text-sm md:text-base text-white/50 mt-2 max-w-xl">
          A track record of engineering cloud systems, designing ML architectures, and building production applications.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div ref={containerRef} className="relative ml-3 md:ml-4 pl-6 md:pl-8 space-y-12 z-10">
        
        {/* Scroll-Linked Timeline Progress Line (Railway style) */}
        <div className="absolute left-0 top-3 bottom-3 w-[20px] -translate-x-1/2 h-[calc(100%-24px)] pointer-events-none z-20">
          {/* Main Background static track line */}
          <div className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-white/10" />

          {/* Scroll-linked progress fill line */}
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 origin-top shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          />

          {/* Traveling glowing bubble indicator */}
          <motion.div 
            style={{ top: topPosition }}
            className="absolute left-0 -translate-y-1/2 h-[20px] w-[20px] rounded-full bg-white border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)] flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
          </motion.div>
        </div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="group relative">
            {/* Stationary Timeline Node Ring */}
            <div className={`
              absolute -left-[31px] md:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 
              ${exp.status === "Active" 
                ? "border-emerald-500 bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.4)]" 
                : "border-white/20 bg-zinc-950"} 
              z-10 transition duration-300 group-hover:scale-125 
              ${exp.status === "Active" ? "group-hover:border-emerald-400" : "group-hover:border-purple-500 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.6)]"}
            `} />

            {/* Apple-style Glassmorphic Card */}
            <div className="
              relative rounded-2xl border border-white/10 
              bg-[#0a0815]/30 backdrop-blur-xl p-6 transition-all duration-300 
              hover:border-white/20 hover:bg-[#0a0815]/50 
              hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
            ">
              {/* Header Container */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                      {exp.company}
                    </h3>
                    
                    {exp.status === "Active" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        {exp.status}
                      </span>
                    )}

                    {exp.website && (
                      <a 
                        href={exp.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white/40 hover:text-white transition duration-200"
                        aria-label={`${exp.company} Website`}
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-white/70 font-semibold mt-1.5 text-sm md:text-base">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-col md:items-end text-xs md:text-sm text-white/50 space-y-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <FiCalendar size={14} className="text-purple-400" /> 
                    {exp.start} – {exp.end}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <FiMapPin size={14} className="text-purple-400" /> 
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 text-sm md:text-base text-white/70 leading-relaxed list-disc list-inside">
                {exp.points.map((point, i) => (
                  <li key={i} className="marker:text-purple-500 font-light">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Technology Badges */}
              {exp.tools && (
                <div className="mt-6 border-t border-white/5 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <TechPill key={tool} name={tool} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
