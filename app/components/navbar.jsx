// @flow strict
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { personalData } from "@/utils/data/personal-data";
import { Menu, X } from "lucide-react";
import profileImg from "@/public/profile.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "research-projects", label: "Research", href: "/research-projects" },
  { id: "papers", label: "Papers", href: "/papers" },
  { id: "blogs", label: "Blogs", href: "/blogs" },
  { id: "upcoming-projects", label: "Upcoming", href: "/upcoming-projects" }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-4 z-[1000]">
      <nav
        ref={navRef}
        className="
          relative
          rounded-2xl
          border border-white/10
          bg-black/40 backdrop-blur-md
          px-4 py-2.5
          transition-all duration-300
        "
      >
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
        
        <div className="flex items-center justify-between">
          {/* Logo / Profile */}
          <Link
            href="/"
            className="flex items-center gap-3 select-none"
          >
            <div className="relative w-[40px] h-[40px] bg-white/5 rounded-lg overflow-hidden shrink-0 border border-white/10">
              <Image
                src={profileImg}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-lg w-[40px] h-[40px] object-cover"
                unoptimized
              />
            </div>
            <span className="hidden sm:block text-sm font-semibold tracking-wide text-white/90 hover:text-white transition-colors duration-200">
              {personalData.name}
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`
                      group relative text-xs xl:text-sm font-medium
                      transition duration-200
                      ${isActive ? "text-purple-400" : "text-white/60 hover:text-white"}
                      focus-visible:outline-none
                    `}
                  >
                    {item.label}
                    <span
                      className={`
                        absolute -bottom-1 left-0 h-px w-full
                        origin-left scale-x-0
                        bg-gradient-to-r from-purple-500 to-blue-500
                        transition-transform duration-200
                        group-hover:scale-x-100
                        ${isActive ? "scale-x-100" : ""}
                      `}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="
              lg:hidden
              rounded-lg p-2
              text-white/70
              transition
              hover:bg-white/10 hover:text-white
              focus-visible:ring-2 focus-visible:ring-white/30
            "
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <div
          className={`
            lg:hidden overflow-hidden
            transition-all duration-300 ease-in-out
            ${open ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="space-y-1.5 border-t border-white/10 pt-4 pb-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      block rounded-lg px-3 py-2
                      text-sm font-medium
                      transition duration-150
                      ${isActive ? "bg-purple-500/10 text-purple-400" : "text-white/70 hover:bg-white/5 hover:text-white"}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
