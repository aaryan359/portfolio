"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Check, Copy, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { personalData } from "@/utils/data/personal-data";
import { ContactForm } from "./ContactForm";
import { SectionDivider } from "../components/ui/Divider";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const socials = [
    {
      label: "Email",
      href: `mailto:${personalData.email}`,
      icon: <Mail size={22} className="text-[#ea4335]" />,
      colorClass: "border-[#ea4335]/20 bg-[#ea4335]/5 hover:border-[#ea4335]/50 hover:bg-[#ea4335]/15 hover:shadow-[0_0_15px_rgba(234,67,53,0.25)]",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/919799819141`,
      icon: <FaWhatsapp size={22} className="text-[#25d366]" />,
      colorClass: "border-[#25d366]/20 bg-[#25d366]/5 hover:border-[#25d366]/50 hover:bg-[#25d366]/15 hover:shadow-[0_0_15px_rgba(37,211,102,0.25)]",
    },
    {
      label: "GitHub",
      href: personalData.github,
      icon: <Github size={22} className="text-white" />,
      colorClass: "border-white/15 bg-white/5 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    },
    {
      label: "LinkedIn",
      href: personalData.linkedIn,
      icon: <Linkedin size={22} className="text-[#0077b5]" />,
      colorClass: "border-[#0077b5]/20 bg-[#0077b5]/5 hover:border-[#0077b5]/50 hover:bg-[#0077b5]/15 hover:shadow-[0_0_15px_rgba(0,119,181,0.25)]",
    },
    {
      label: "Twitter / X",
      href: personalData.twitter,
      icon: <Twitter size={22} className="text-[#1da1f2]" />,
      colorClass: "border-[#1da1f2]/20 bg-[#1da1f2]/5 hover:border-[#1da1f2]/50 hover:bg-[#1da1f2]/15 hover:shadow-[0_0_15px_rgba(29,161,242,0.25)]",
    },
    {
      label: "Instagram",
      href: personalData.instagram,
      icon: <Instagram size={22} className="text-[#e1306c]" />,
      colorClass: "border-[#e1306c]/20 bg-[#e1306c]/5 hover:border-[#e1306c]/50 hover:bg-[#e1306c]/15 hover:shadow-[0_0_15px_rgba(225,48,108,0.25)]",
    }
  ];

  return (
    <section id="contact" className="mt-16 relative">
      <SectionDivider />

      {/* Apple-style background blur helper elements (with soft whites for realistic glass refraction) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
        <div className="absolute top-[20%] right-[10%] h-[350px] w-[350px] rounded-full bg-white/[0.02] blur-[110px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[20%] left-[10%] h-[350px] w-[350px] rounded-full bg-white/[0.03] blur-[120px] animate-pulse duration-[10000ms]" />
        <div className="absolute top-[35%] left-[45%] w-28 h-28 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-md animate-bounce duration-[14000ms]" />
      </div>

      {/* HEADER */}
      <header className="mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Let’s Connect
        </h2>
        <p className="text-sm md:text-base text-white/50 mt-2 max-w-xl">
          Interested in working together or hiring? Reach out directly via the form or copy my credentials.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2 relative z-10 items-stretch">
        {/* LEFT — FORM */}
        <ContactForm />

        {/* RIGHT — INFO CARD */}
        <div className="
          relative flex flex-col justify-between rounded-2xl border border-white/10 
          bg-[#0a0815]/30 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 
          hover:border-white/20 hover:bg-[#0a0815]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
        ">
          {/* subtle ambient glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-70" />

          <div className="relative z-10 space-y-8">
            {/* Status Radar Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs md:text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                  Available for internships & collaborations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-xs md:text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                  Available for freelance projects
                </span>
              </div>
            </div>

            {/* Direct contact items */}
            <div className="space-y-4">
              {/* EMAIL ROW */}
              <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] transition hover:bg-white/[0.04]">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white/30">Email Address</p>
                    <a href={`mailto:${personalData.email}`} className="text-sm font-medium text-white/90 hover:text-purple-400 transition truncate block">
                      {personalData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalData.email, "email")}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 hover:border-white/20 text-white/40 hover:text-white transition duration-200"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* PHONE ROW */}
              <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] transition hover:bg-white/[0.04]">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white/30">Phone Number</p>
                    <a href={`tel:${personalData.phone}`} className="text-sm font-medium text-white/90 hover:text-blue-400 transition truncate block">
                      {personalData.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalData.phone, "phone")}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 hover:border-white/20 text-white/40 hover:text-white transition duration-200"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* ADDRESS ROW */}
              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-white/5 bg-white/[0.02] transition hover:bg-white/[0.04]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-white/30">Location</p>
                  <p className="text-sm font-medium text-white/90">
                    {personalData.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Panel */}
          <div className="mt-8 border-t border-white/5 pt-6 relative z-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
              Find me online
            </p>

            <div className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <div key={social.label} className="relative group hover:z-50">
                  {/* Tooltip */}
                  <div className="
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none 
                    opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 
                    bg-[#121214] text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 text-white 
                    whitespace-nowrap shadow-[0_8px_30px_rgba(0,0,0,0.8)]
                  ">
                    {social.label}
                    {/* Tiny arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 h-1.5 w-1.5 rotate-45 bg-[#121214] border-r border-b border-white/10" />
                  </div>

                  {/* Icon link */}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex h-12 w-12 items-center justify-center rounded-xl 
                      border border-white/10 bg-white/5 text-white/70 
                      transition-all duration-300 hover:scale-105
                      ${social.colorClass}
                    `}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <SectionDivider />
    </section>
  );
}
