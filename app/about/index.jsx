// @flow strict
"use client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section id="about" className="relative pt-12 pb-16 overflow-hidden">
      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="w-full flex flex-col justify-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
          DevOps & AI/ML Engineer
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I’m <span className="text-purple-400">{personalData.name}</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-medium text-white/95 leading-snug">
          I leverage mathematical foundations, multimodal AI research, and scalable cloud infrastructure to solve complex, real-world problems.
        </p>

        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-white/70">
          <p>
            I am a DevOps Engineer, AI/ML Researcher, and Full-Stack Developer with a deep-seated foundation in Mathematics. 
            Currently, I am contributing to open-source ecosystem architectures as a contributor at{" "}
            <motion.span 
              whileHover={{ 
                scale: 1.06,
                color: "#c084fc",
                backgroundColor: "rgba(168, 85, 247, 0.25)",
                borderColor: "rgba(168, 85, 247, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 450, damping: 12 }}
              className="inline-block px-2.5 py-0.5 rounded-lg text-purple-300 bg-purple-500/10 border border-purple-500/20 font-semibold cursor-pointer select-none"
            >
              Code for GovTech (C4GT)
            </motion.span>{" "}
            under the **TAP project**, while simultaneously conducting AI research as an intern at the{" "}
            <motion.span 
              whileHover={{ 
                scale: 1.06,
                color: "#60a5fa",
                backgroundColor: "rgba(59, 130, 246, 0.25)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 450, damping: 12 }}
              className="inline-block px-2.5 py-0.5 rounded-lg text-blue-300 bg-blue-500/10 border border-blue-500/30 font-semibold cursor-pointer select-none"
            >
              MIDAS
            </motion.span>{" "}
            focusing on multimodal deep learning models.
          </p>
          <p>
            Alongside my research and devops roles, I have extensive experience building reliable, real-world web and mobile applications from scratch. 
            My mathematical background gives me a strong first-principles understanding of core machine learning algorithms, enabling me to transition models from theoretical design to production-grade cloud deployments.
          </p>
          <p>
            Lately, my stack has revolved around{" "}
            <motion.span 
              whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "rgba(255, 255, 255, 0.15)", borderColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/90 font-medium cursor-pointer select-none"
            >
              Terraform
            </motion.span>,{" "}
            <motion.span 
              whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "rgba(255, 255, 255, 0.15)", borderColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/90 font-medium cursor-pointer select-none"
            >
              AWS
            </motion.span>,{" "}
            <motion.span 
              whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "rgba(255, 255, 255, 0.15)", borderColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/90 font-medium cursor-pointer select-none"
            >
              Docker & Kubernetes
            </motion.span>,{" "}
            <motion.span 
              whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "rgba(255, 255, 255, 0.15)", borderColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/90 font-medium cursor-pointer select-none"
            >
              React Native
            </motion.span>,{" "}
            <motion.span 
              whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "rgba(255, 255, 255, 0.15)", borderColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/90 font-medium cursor-pointer select-none"
            >
              React/Next.js
            </motion.span>,{" "}
            and <motion.span 
              whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "rgba(255, 255, 255, 0.15)", borderColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/90 font-medium cursor-pointer select-none"
            >
              PyTorch
            </motion.span>.
            I focus on writing clean, understandable code, automating cloud architectures, and optimizing model inference performance.
          </p>
        </div>

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