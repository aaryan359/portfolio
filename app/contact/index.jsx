"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Check, Copy } from "lucide-react";
import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaTwitterSquare, FaEnvelope } from "react-icons/fa";
import { personalData } from "@/utils/data/personal-data";
import { ContactForm } from "./ContactForm";

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
      icon: <FaEnvelope size={24} />,
      colorClass: "social-icon-email",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/919799819141`,
      icon: <BsWhatsapp size={24} />,
      colorClass: "social-icon-whatsapp",
    },
    {
      label: "GitHub",
      href: personalData.github,
      icon: <BsGithub size={24} />,
      colorClass: "social-icon-github",
    },
    {
      label: "LinkedIn",
      href: personalData.linkedIn,
      icon: <BsLinkedin size={24} />,
      colorClass: "social-icon-linkedin",
    },
    {
      label: "Twitter / X",
      href: personalData.twitter,
      icon: <FaTwitterSquare size={24} />,
      colorClass: "social-icon-twitter",
    },
    {
      label: "Instagram",
      href: personalData.instagram,
      icon: <BsInstagram size={24} />,
      colorClass: "social-icon-instagram",
    }
  ];

  return (
    <section id="contact" className="pt-10 pb-6 pl-8 md:pl-12 relative">
      {/* Apple-style background blur helper elements */}
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

      <div className="grid gap-8 lg:grid-cols-2 relative z-10 items-start">
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

            <div className="flex flex-wrap gap-4 items-center">
              {socials.map((social) => (
                <div key={social.label} className="relative group hover:z-50">
                  {/* Tooltip */}
                  <div className="
                    contact-tooltip
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none 
                    opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 
                    bg-[#121214] text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 text-white 
                    whitespace-nowrap shadow-[0_8px_30px_rgba(0,0,0,0.8)]
                  ">
                    {social.label}
                    {/* Tiny arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 h-1.5 w-1.5 rotate-45 bg-[#121214] border-r border-b border-white/10 tooltip-arrow" />
                  </div>

                  {/* Icon link */}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-10 h-10 flex items-center justify-center 
                      transition-all duration-300 hover:-translate-y-0.5
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
    </section>
  );
}
