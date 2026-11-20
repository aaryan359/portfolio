"use client";

import { useEffect, useId, useRef, useState } from "react";

export function TimelineFlow({ parentRef }) {
  const unique = useId().replace(/:/g, "");
  const [layout, setLayout] = useState({ path: "", width: 0, height: 0 });
  const clipMask = useRef(null);
  const bounds = useRef({ start: 0, end: 0, top: 0, pageHeight: 0, width: 0, boundaries: [] });

  useEffect(() => {
    const container = parentRef.current;
    if (!container) return;
    const sections = ["about", "skills", "experience", "education", "contact"].map((id) => document.getElementById(id));
    if (sections.some((section) => !section)) return;
    let frame = 0;
    let active = true;
    let needsMeasure = false;
    let previousHeight = -1;
    let previousBottom = false;

    function syncScroll() {
      const { start, end, top, pageHeight, width, boundaries } = bounds.current;
      const scroll = window.scrollY;
      const atBottom = scroll + window.innerHeight >= pageHeight - 4;
      const next = Math.round(atBottom ? end : scroll < 30 ? start : Math.max(start, Math.min(end, scroll + window.innerHeight * 0.65 - top)));
      if ((next !== previousHeight || atBottom !== previousBottom) && clipMask.current) {
        // Retain the original diagonal reveal so horizontal sections fill across as you scroll.
        let tilt = 25;
        const [about, skills, experience, education] = boundaries;
        if (next > education) tilt = -25;
        else if (next > experience) tilt = 25 - (next - experience) / (education - experience || 1) * 50;
        else if (next > skills) tilt = -25 + (next - skills) / (experience - skills || 1) * 50;
        else if (next > about) tilt = 25 - (next - about) / (skills - about || 1) * 50;
        const bottom = atBottom ? end + 50 : next;
        clipMask.current.setAttribute("d", `M -100 -1000 L ${width + 100} -1000 L ${width + 100} ${bottom - tilt} L -100 ${bottom + tilt} Z`);
        previousHeight = next;
        previousBottom = atBottom;
      }
    }
    function measure() {
      const rect = container.getBoundingClientRect();
      const coords = sections.map((section) => {
        const box = section.getBoundingClientRect();
        return { top: box.top - rect.top, bottom: box.bottom - rect.top };
      });
      const left = 8;
      const right = rect.width - 8;
      const radius = Math.min(32, rect.width / 8);
      const start = coords[0].top + 100;
      const end = coords[4].bottom;
      let path = `M ${left} ${start}`;
      // Follow the left and right section edges, retaining the original zig-zag flow.
      for (let i = 0; i < 4; i++) {
        const y = coords[i].bottom;
        if (i % 2 === 0) path += ` L ${left} ${y - radius} A ${radius} ${radius} 0 0 0 ${left + radius} ${y} L ${right - radius} ${y} A ${radius} ${radius} 0 0 1 ${right} ${y + radius}`;
        else path += ` L ${right} ${y - radius} A ${radius} ${radius} 0 0 1 ${right - radius} ${y} L ${left + radius} ${y} A ${radius} ${radius} 0 0 0 ${left} ${y + radius}`;
      }
      path += ` L ${left} ${end}`;
      bounds.current = { start, end, top: rect.top + window.scrollY, pageHeight: document.documentElement.scrollHeight, width: rect.width, boundaries: coords.slice(0, 4).map(({ bottom }) => bottom) };
      setLayout((current) => current.path === path && current.width === rect.width && current.height === rect.height ? current : { path, width: rect.width, height: rect.height });
      syncScroll();
    }
    function schedule(measureLayout = false) {
      needsMeasure ||= measureLayout;
      if (!frame) frame = requestAnimationFrame(() => {
        frame = 0;
        if (needsMeasure) { needsMeasure = false; measure(); }
        else syncScroll();
      });
    }
    const onScroll = () => schedule();
    const onResize = () => schedule(true);
    const resize = new ResizeObserver(onResize);
    resize.observe(container);
    sections.forEach((section) => resize.observe(section));
    measure();
    document.fonts?.ready.then(() => { if (active) measure(); });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      active = false;
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [parentRef]);

  const gradient = `timeline-gradient-${unique}`;
  const clip = `timeline-clip-${unique}`;
  return (
    <div className="timeline-glass-flow" aria-hidden="true">
      <svg width="100%" height={layout.height} viewBox={`0 0 ${layout.width || 1} ${layout.height || 1}`}>
        <defs>
          <linearGradient id={gradient} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--timeline-purple)" />
            <stop offset="35%" stopColor="var(--timeline-indigo)" />
            <stop offset="70%" stopColor="var(--timeline-cyan)" />
            <stop offset="100%" stopColor="var(--timeline-green)" />
          </linearGradient>
          <clipPath id={clip} clipPathUnits="userSpaceOnUse">
            <path ref={clipMask} />
          </clipPath>
        </defs>
        {layout.path && <>
          <path className="timeline-glass-track" d={layout.path} />
          <path className="timeline-glass-rim" d={layout.path} />
          <g clipPath={`url(#${clip})`}>
            <path className="timeline-glass-fill" d={layout.path} stroke={`url(#${gradient})`} />
            <path className="timeline-glass-shine" d={layout.path} />
          </g>
        </>}
      </svg>
    </div>
  );
}
