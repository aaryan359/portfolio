"use client";

import { Mail, Phone, MapPin, LinkedinIcon, Twitter } from "lucide-react";
import { Github } from "lucide-react";
import { personalData } from "@/utils/data/personal-data";
import { ContactForm } from "./ContactForm";
import { SocialIcon } from "../components/helper/iconshelper";

export default function ContactSection() {
  return (
    <section id="contact" className="mt-10">
      {/* HEADER */}
      <header className="mb-2 ">
        <h2 className="text-3xl font-semibold text-white">
          Let’s work together
        </h2>
        <p className="mt-2 text-white/60">
          Open to frontend roles, freelance projects, and collaborations.
        </p>
      </header>

      <div className="grid gap-14 lg:grid-cols-2">
        {/* LEFT — FORM */}
        <ContactForm />

        {/* RIGHT — INFO */}
        <div className="flex flex-col justify-between">
          {/* META */}
          <div className="space-y-6">
            <MetaRow icon={<Mail size={16} />} value={personalData.email} />
            <MetaRow icon={<Phone size={16} />} value={personalData.phone} />
            <MetaRow icon={<MapPin size={16} />} value={personalData.address} />
          </div>

          {/* SOCIALS */}
          <div className="mt-10">
            <p className="mb-4 text-sm uppercase tracking-wide text-white/40">
              Find me online
            </p>

            <div className="flex gap-6">
              <SocialIcon
                href={personalData.github}
                label={"GitHub"}
              >
                <Github />
              </SocialIcon>

              <SocialIcon
                href={personalData.linkedIn}
                label={"LinkedIn"}
              >
                <LinkedinIcon />
              </SocialIcon>

              <SocialIcon
                href={personalData.twitter}
                label={"Twitter / X"}
              >
                <Twitter />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */

function MetaRow({ icon, value }) {
  return (
    <div
      className="
        group flex items-center gap-3
        rounded-lg
        border border-white/10
        bg-black/40
        px-4 py-3
        transition-all duration-200
        hover:bg-white/[0.05]
        hover:-translate-y-[1px]
      "
    >
      <span
        className="
          rounded-md bg-white/10 p-2
          text-white/70
          group-hover:text-white
        "
      >
        {icon}
      </span>
      <span className="text-sm text-white/80">{value}</span>
    </div>
  );
}
