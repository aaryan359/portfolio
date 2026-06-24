// @flow strict
"use client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function AboutSection() {
  return (
    <section id="about" className="relative pt-12 pb-16 overflow-hidden">
      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col justify-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
          Engineer
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I’m <span className="text-purple-400">{personalData.name}</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-medium text-white/90 leading-snug">
          I build reliable web and mobile apps with a focus on real-world usability.
        </p>
        <p className="mt-6 text-sm lg:text-base leading-relaxed text-white/60">
          I enjoy building real-world web and mobile applications, from clean user interfaces to the backend systems that support them. Lately, I’ve been working mostly with{" "}
          <span className="text-white font-medium bg-white/5 px-2 py-0.5 rounded border border-white/10">React</span>,{" "}
          <span className="text-white font-medium bg-white/5 px-2 py-0.5 rounded border border-white/10">React Native</span>,{" "}
          <span className="text-white font-medium bg-white/5 px-2 py-0.5 rounded border border-white/10">Node.js</span>,{" "}
          <span className="text-white font-medium bg-white/5 px-2 py-0.5 rounded border border-white/10">Express</span>,{" "}
          <span className="text-white font-medium bg-white/5 px-2 py-0.5 rounded border border-white/10">MongoDB</span>,{" "}
          <span className="text-white font-medium bg-white/5 px-2 py-0.5 rounded border border-white/10">MySQL</span> and{" "}
          <span className="text-white font-medium bg-white/5 px-2 py-0.5 rounded border border-white/10">Next.js</span>, focusing on writing understandable code, improving performance, and learning how to build features that people actually use.
        </p>

        {/* CTA Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 hover:bg-purple-500 hover:shadow-purple-500/35 transition duration-300"
          >
            <RiContactsFill size={16} />
            Get in touch
          </Link>

          <Link
            href={personalData.resume}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition duration-300"
          >
            <MdDownload size={16} />
            Resume / CV
          </Link>
        </div>

        {/* Social Accounts */}
        <div className="mt-8 flex items-center gap-5 text-white/40">
          <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200" aria-label="GitHub"><BsGithub size={20} /></a>
          <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200" aria-label="LinkedIn"><BsLinkedin size={20} /></a>
          <a href={personalData.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200" aria-label="Leetcode"><SiLeetcode size={20} /></a>
          <a href={personalData.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200" aria-label="Twitter"><FaTwitterSquare size={20} /></a>
          <a href={personalData.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200" aria-label="Facebook"><FaFacebook size={20} /></a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;