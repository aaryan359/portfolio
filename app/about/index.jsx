// @flow strict
"use client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaTwitterSquare, FaEnvelope } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section id="about" className="relative pt-10 pb-8 pl-8 md:pl-8 overflow-hidden">
      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="w-full flex flex-col justify-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
          DevOps & AI/ML Engineer
        </span>
        <h1 className="mt-3 text-2xl md:text-2xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I’m <span className="text-purple-400">{personalData.name}</span>
        </h1>
        <p className="mt-4 text-xl md:text-xl font-medium text-white/95 leading-snug about-intro-text">
          I leverage mathematical foundations, multimodal AI research, and scalable cloud infrastructure to solve complex, real-world problems.
        </p>

        <p className="mt-4 about-thought-text">
          I build and scale systems whenever inspiration strikes—which is to say, constantly. My work lives at the intersection of deep learning research, cloud infrastructure, and intuitive web design. Whether training multimodal AI models or orchestrating secure, automated cloud deployments, I focus on turning complex challenges into elegant, production-ready experiences.
        </p>

        {/* CTA Actions */}
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-3 py-1.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 hover:bg-purple-500 hover:shadow-purple-500/35 transition duration-300"
          >
            <RiContactsFill size={14} />
            Get in touch
          </Link>

          <a
            href={personalData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition duration-300 resume-btn"
          >
            <MdDownload size={16} />
            Resume / CV
          </a>
        </div>

        {/* Social Accounts */}
        <div className="mt-4 flex flex-wrap items-center gap-1">
          {/* GitHub */}
          <div className="relative group">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center social-icon-github transition-all duration-300 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <BsGithub size={18} />
            </a>
            <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-black/90 border border-white/10 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-30">
              GitHub
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></span>
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center social-icon-linkedin transition-all duration-300 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={18} />
            </a>
            <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-black/90 border border-white/10 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-30">
              LinkedIn
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></span>
            </span>
          </div>

          {/* LeetCode */}
          <div className="relative group">
            <a
              href={personalData.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center social-icon-leetcode transition-all duration-300 hover:-translate-y-0.5"
              aria-label="LeetCode"
            >
              <SiLeetcode size={18} />
            </a>
            <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-black/90 border border-white/10 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-30">
              LeetCode
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></span>
            </span>
          </div>

          {/* Instagram */}
          <div className="relative group">
            <a
              href={personalData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center social-icon-instagram transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Instagram"
            >
              <BsInstagram size={18} />
            </a>
            <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-black/90 border border-white/10 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-30">
              Instagram
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></span>
            </span>
          </div>

          {/* Twitter / X */}
          <div className="relative group">
            <a
              href={personalData.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center social-icon-twitter transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Twitter"
            >
              <FaTwitterSquare size={18} />
            </a>
            <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-black/90 border border-white/10 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-30">
              Twitter
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></span>
            </span>
          </div>

          {/* WhatsApp */}
          <div className="relative group">
            <a
              href={`https://wa.me/${personalData.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center social-icon-whatsapp transition-all duration-300 hover:-translate-y-0.5"
              aria-label="WhatsApp"
            >
              <BsWhatsapp size={18} />
            </a>
            <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-black/90 border border-white/10 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-30">
              WhatsApp
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></span>
            </span>
          </div>

          {/* Email */}
          <div className="relative group">
            <a
              href={`mailto:${personalData.email}`}
              className="w-10 h-10 flex items-center justify-center social-icon-email transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
            <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-black/90 border border-white/10 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-30">
              Email
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;