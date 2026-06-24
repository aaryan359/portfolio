"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSpring, useMotionValue, useMotionValueEvent, motion } from "framer-motion";

export function TimelineFlow({ parentRef }) {
  const [pathD, setPathD] = useState("");
  const [svgHeight, setSvgHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [clipD, setClipD] = useState("");
  const pathRef = useRef(null);

  // Store layout boundary heights to interpolate the mask tilt during scroll events
  const boundariesRef = useRef({
    yAbout: 0,
    ySkills: 0,
    yExperience: 0,
    yEducation: 0
  });

  // Vertical trigger position coordinate in parent container space
  const triggerY = useMotionValue(100);

  // Smooth trigger spring for sub-frame scrolling layout updates
  const smoothTriggerY = useSpring(triggerY, {
    stiffness: 450,
    damping: 38,
    mass: 0.1,
    restDelta: 0.001
  });

  const updatePath = () => {
    const container = parentRef.current;
    if (!container) return;

    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const experience = document.getElementById("experience");
    const education = document.getElementById("education");
    const contact = document.getElementById("contact");

    if (!about || !skills || !experience || !education || !contact) return;

    const rect = container.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;
    setSvgHeight(H);
    setContainerWidth(W);

    // Get position of each section relative to the parent container
    const getRelativeCoords = (el) => {
      const elRect = el.getBoundingClientRect();
      return {
        top: elRect.top - rect.top,
        bottom: elRect.bottom - rect.top,
        height: elRect.height
      };
    };

    const cAbout = getRelativeCoords(about);
    const cSkills = getRelativeCoords(skills);
    const cExperience = getRelativeCoords(experience);
    const cEducation = getRelativeCoords(education);
    const cContact = getRelativeCoords(contact);

    // Save vertical boundaries for dynamic mask tilt interpolation
    boundariesRef.current = {
      yAbout: cAbout.bottom,
      ySkills: cSkills.bottom,
      yExperience: cExperience.bottom,
      yEducation: cEducation.bottom
    };

    // Timeline Path constants
    const R = 32;       // Corner radius for bends
    const L = 8;        // Left padding offset
    const R_Edge = W - 8; // Right padding offset

    // Shift start down below the navbar (100px from top of About)
    const startY = cAbout.top + 100;

    // Path starts exactly at the start coordinate
    let d = `M ${L} ${startY}`;

    // 1. About section: vertical down left
    d += ` L ${L} ${cAbout.bottom - R}`;
    // Curve Right
    d += ` A ${R} ${R} 0 0 0 ${L + R} ${cAbout.bottom}`;

    // 2. Horizontal under About / above Skills: Line to Right
    d += ` L ${R_Edge - R} ${cAbout.bottom}`;
    // Curve Down
    d += ` A ${R} ${R} 0 0 1 ${R_Edge} ${cAbout.bottom + R}`;

    // 3. Skills section: vertical down right
    d += ` L ${R_Edge} ${cSkills.bottom - R}`;
    // Curve Left
    d += ` A ${R} ${R} 0 0 1 ${R_Edge - R} ${cSkills.bottom}`;

    // 4. Horizontal under Skills / above Experience: Line to Left
    d += ` L ${L + R} ${cSkills.bottom}`;
    // Curve Down
    d += ` A ${R} ${R} 0 0 0 ${L} ${cSkills.bottom + R}`;

    // 5. Experience section: vertical down left
    d += ` L ${L} ${cExperience.bottom - R}`;
    // Curve Right
    d += ` A ${R} ${R} 0 0 0 ${L + R} ${cExperience.bottom}`;

    // 6. Horizontal under Experience / above Education: Line to Right
    d += ` L ${R_Edge - R} ${cExperience.bottom}`;
    // Curve Down
    d += ` A ${R} ${R} 0 0 1 ${R_Edge} ${cExperience.bottom + R}`;

    // 7. Education section: vertical down right
    d += ` L ${R_Edge} ${cEducation.bottom - R}`;
    // Curve Left
    d += ` A ${R} ${R} 0 0 1 ${R_Edge - R} ${cEducation.bottom}`;

    // 8. Horizontal under Education / above Contact: Line to Left
    d += ` L ${L + R} ${cEducation.bottom}`;
    // Curve Down
    d += ` A ${R} ${R} 0 0 0 ${L} ${cEducation.bottom + R}`;

    // 9. Contact section: vertical down left
    d += ` L ${L} ${cContact.bottom}`;

    setPathD(d);

    // Set initial clip path coordinates
    const initialY = smoothTriggerY.get();
    let initialTilt = 25;
    const bounds = boundariesRef.current;
    if (bounds && initialY > bounds.yAbout) {
      if (initialY <= bounds.ySkills) {
        const pct = (initialY - bounds.yAbout) / (bounds.ySkills - bounds.yAbout || 1);
        initialTilt = 25 - pct * 50;
      } else if (initialY <= bounds.yExperience) {
        const pct = (initialY - bounds.ySkills) / (bounds.yExperience - bounds.ySkills || 1);
        initialTilt = -25 + pct * 50;
      } else if (initialY <= bounds.yEducation) {
        const pct = (initialY - bounds.yExperience) / (bounds.yEducation - bounds.yExperience || 1);
        initialTilt = 25 - pct * 50;
      } else {
        initialTilt = -25;
      }
    }
    setClipD(`M -100 -1000 L ${W + 100} -1000 L ${W + 100} ${initialY - initialTilt} L -100 ${initialY + initialTilt} Z`);
  };

  // Recalculate whenever page size changes or elements shift
  useEffect(() => {
    updatePath();

    // Use ResizeObserver to detect dynamic client height changes
    const container = parentRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      updatePath();
    });
    observer.observe(container);

    window.addEventListener("resize", updatePath);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [parentRef]);

  // Reactively rebuild the clip path string when trigger coordinate updates
  useMotionValueEvent(smoothTriggerY, "change", (latest) => {
    const bounds = boundariesRef.current;
    let tilt = 25;

    if (bounds) {
      const { yAbout, ySkills, yExperience, yEducation } = bounds;
      
      // Calculate tilt based on section context
      if (latest <= yAbout) {
        tilt = 25; // Left-to-right (About section bottom is L -> R)
      } else if (latest <= ySkills) {
        // Transitioning from L->R bottom of About, towards R->L bottom of Skills
        const pct = (latest - yAbout) / (ySkills - yAbout || 1);
        tilt = 25 - pct * 50; // Sweeps from +25 to -25
      } else if (latest <= yExperience) {
        // Transitioning from R->L bottom of Skills, towards L->R bottom of Experience
        const pct = (latest - ySkills) / (yExperience - ySkills || 1);
        tilt = -25 + pct * 50; // Sweeps from -25 to +25
      } else if (latest <= yEducation) {
        // Transitioning from L->R bottom of Experience, towards R->L bottom of Education
        const pct = (latest - yExperience) / (yEducation - yExperience || 1);
        tilt = 25 - pct * 50; // Sweeps from +25 to -25
      } else {
        tilt = -25; // Right-to-left
      }
    }

    // A positive tilt (+25) tilts down on the left (reveals left first).
    // A negative tilt (-25) tilts down on the right (reveals right first).
    const d = `M -100 -1000 L ${containerWidth + 100} -1000 L ${containerWidth + 100} ${latest - tilt} L -100 ${latest + tilt} Z`;
    setClipD(d);
  });

  // Synchronize active draw progress with user viewport scroll height
  useEffect(() => {
    const handleScroll = () => {
      const container = parentRef.current;
      if (!container) return;

      const about = document.getElementById("about");
      const contact = document.getElementById("contact");
      if (!about || !contact) return;

      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;

      const aboutRect = about.getBoundingClientRect();
      const contactRect = contact.getBoundingClientRect();

      const startY = aboutRect.top - rect.top + 100;
      const endY = contactRect.bottom - rect.top;

      // Lock to startY when user is at the very top of the page
      if (window.scrollY < 30) {
        triggerY.set(startY);
        return;
      }

      // Current focus trigger point: 65% down the viewport
      const triggerPointViewport = window.scrollY + window.innerHeight * 0.65;
      const currentY = triggerPointViewport - containerTop;

      // Clamp the active height between startY and endY
      const clampedY = Math.max(startY, Math.min(currentY, endY));
      triggerY.set(clampedY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Run initially and set a brief interval to secure coordinates after image layout load
    handleScroll();
    const timer = setInterval(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearInterval(timer);
    };
  }, [parentRef]);

  return (
    <div className="absolute inset-y-0 left-0 w-full pointer-events-none z-20">
      <svg
        width="100%"
        height={svgHeight}
        className="absolute inset-0 overflow-visible"
        style={{ height: svgHeight }}
      >
        <defs>
          {/* Neon gradient for the active timeline line */}
          <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" /> {/* Purple */}
            <stop offset="35%" stopColor="#6366f1" /> {/* Indigo */}
            <stop offset="70%" stopColor="#06b6d4" /> {/* Cyan */}
            <stop offset="100%" stopColor="#10b981" /> {/* Emerald */}
          </linearGradient>

          {/* Standard SVG Clip Path containing reactive path for 100% browser compatibility */}
          <clipPath id="timeline-clip">
            {clipD && <path d={clipD} />}
          </clipPath>
        </defs>

        {/* 1. Background static rail path */}
        {pathD && (
          <path
            d={pathD}
            fill="none"
            stroke="rgba(255, 255, 255, 0.06)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )}

        {/* 2. Scroll-Linked active path (Clipped to triggerY reveal height) */}
        {pathD && (
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="url(#timeline-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            clipPath="url(#timeline-clip)"
          />
        )}
      </svg>
    </div>
  );
}
