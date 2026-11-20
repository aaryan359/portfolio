"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** One observer enables native blur only on visible outer panels. No render loop or textures. */
export default function GlassVisibility() {
  const pathname = usePathname();
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const panels = [...document.querySelectorAll(".liquid-glass")]
      .filter((panel) => !panel.parentElement.closest(".liquid-glass"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => target.classList.toggle("glass-in-view", isIntersecting));
    }, { threshold: 0 });
    panels.forEach((panel) => observer.observe(panel));
    return () => {
      observer.disconnect();
      panels.forEach((panel) => panel.classList.remove("glass-in-view"));
    };
  }, [pathname]);
  return null;
}
