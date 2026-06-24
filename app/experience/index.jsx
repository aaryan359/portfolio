"use client";

import React from "react";
import { TechPill } from "../components/ui/TechPill";
import { FiExternalLink, FiCalendar, FiMapPin } from "react-icons/fi";

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
  return (
    <section id="experience" className="pt-10 pb-16 pl-8 md:pl-12 relative">
      {/* Apple-style background blur helper elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
        <div className="absolute top-[10%] left-[20%] h-[350px] w-[350px] rounded-full bg-white/[0.03] blur-[110px] animate-pulse duration-[8000ms]" />
        <div className="absolute top-[45%] right-[25%] h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-[100px] animate-pulse duration-[10000ms]" />
        <div className="absolute bottom-[10%] left-[30%] h-[280px] w-[280px] rounded-full bg-white/[0.04] blur-[90px] animate-pulse duration-[6000ms]" />
        
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

      {/* Timeline Card Wrapper */}
      <div className="relative space-y-12 z-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group relative">
            {/* Stationary Timeline Node Ring aligned with page-wide line */}
            <div className={`
              absolute left-2 -translate-x-1/2 top-2 h-4.5 w-4.5 rounded-full border-2 
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
