// @flow strict
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { personalData } from "@/utils/data/personal-data";
import { Menu, X, Sun, Moon } from "lucide-react";
import profileImg from "@/public/profile.jpg";
import { applyTheme, toggleTheme as toggleDocumentTheme } from "@/utils/theme";

const NAV_ITEMS = [
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "research-projects", label: "Hackathons", href: "/research-projects" },
  { id: "papers", label: "Papers", href: "/papers" },
  { id: "blogs", label: "Blogs", href: "/blogs" },
  { id: "upcoming-projects", label: "Upcoming", href: "/upcoming-projects" },
  { id: "gallery", label: "Gallery", href: "/gallery" }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const system = window.matchMedia("(prefers-color-scheme: light)");
    const sync = () => setTheme(root.classList.contains("light") ? "light" : "dark");
    let saved;
    try { saved = localStorage.getItem("theme"); } catch {}
    applyTheme(root, saved === "light" || saved === "dark" ? saved : system.matches ? "light" : "dark");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    const onStorage = (event) => {
      if (event.key !== "theme") return;
      applyTheme(root, event.newValue === "light" || event.newValue === "dark" ? event.newValue : system.matches ? "light" : "dark");
    };
    const onSystem = () => {
      let preference;
      try { preference = localStorage.getItem("theme"); } catch {}
      if (preference !== "light" && preference !== "dark") applyTheme(root, system.matches ? "light" : "dark");
    };
    window.addEventListener("storage", onStorage);
    system.addEventListener("change", onSystem);
    return () => {
      observer.disconnect();
      window.removeEventListener("storage", onStorage);
      system.removeEventListener("change", onSystem);
    };
  }, []);

  const toggleTheme = () => {
    let storage;
    try { storage = window.localStorage; } catch {}
    setTheme(toggleDocumentTheme(document.documentElement, storage));
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      navRef.current?.querySelector('[aria-controls="portfolio-mobile-navigation"]')?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
          liquid-glass bg-black/40 backdrop-blur-md
          px-4 py-2.5
          transition-all duration-300
        "
      >
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />

        <div className="flex items-center justify-between">
          {/* Logo / Profile */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3 select-none"
          >
            <div className="relative w-[40px] h-[40px] bg-white/5 rounded-lg overflow-hidden shrink-0 border border-white/10">
              <Image
                src={profileImg}
                alt="Profile"
                width={50}
                height={50}
                className="rounded-lg w-[40px] h-[40px] object-cover"
                unoptimized
              />
            </div>
            <span className="block max-w-[9rem] truncate text-sm font-semibold tracking-wide text-white/90 hover:text-white transition-colors duration-200">
              {personalData.name}
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-5">
            <ul className="flex items-center gap-4 xl:gap-5">
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

            {/* Theme Toggle Button (Desktop) */}
            <button
              onClick={toggleTheme}
              className="glass-control theme-toggle
                p-2 rounded-xl border border-white/10 bg-white/[0.03] text-white/70 
                hover:text-white hover:bg-white/10 hover:border-white/20
                transition-all duration-200 focus-visible:outline-none
              "
              type="button"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              aria-pressed={theme === "dark"}
              title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              <Sun size={18} className="theme-sun text-yellow-400" />
              <Moon size={18} className="theme-moon text-purple-400" />
            </button>
          </div>

          {/* Mobile Right Section: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="glass-control theme-toggle
                p-1.5 rounded-xl border border-white/10 bg-white/[0.03] text-white/70 
                hover:text-white hover:bg-white/10 hover:border-white/20
                transition-all duration-200 focus-visible:outline-none
              "
              type="button"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              aria-pressed={theme === "dark"}
              title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              <Sun size={16} className="theme-sun text-yellow-400" />
              <Moon size={16} className="theme-moon text-purple-400" />
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setOpen((v) => !v)}
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="portfolio-mobile-navigation"
              className="
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
        </div>

        {/* Mobile Nav Drawer */}
        <div
          id="portfolio-mobile-navigation"
          hidden={!open}
          aria-hidden={!open}
          className={`
            mobile-navigation lg:hidden overflow-hidden
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
