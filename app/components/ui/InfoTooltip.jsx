"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function tooltipPosition(rect, viewportWidth, viewportHeight) {
  const width = Math.min(280, viewportWidth - 24);
  return {
    width,
    left: Math.max(12, Math.min(viewportWidth - width - 12, rect.left + rect.width / 2 - width / 2)),
    ...(rect.bottom + 140 < viewportHeight ? { top: rect.bottom + 8 } : { bottom: viewportHeight - rect.top + 8 }),
  };
}

export default function InfoTooltip({ children, description, style }) {
  const id = useId();
  const trigger = useRef(null);
  const [position, setPosition] = useState(null);
  const hide = () => setPosition(null);
  const show = () => {
    if (!description || !trigger.current) return;
    setPosition(tooltipPosition(trigger.current.getBoundingClientRect(), window.innerWidth, window.innerHeight));
  };
  useEffect(() => {
    if (!position) return;
    const onKey = (event) => { if (event.key === "Escape") setPosition(null); };
    const close = () => setPosition(null);
    window.addEventListener("scroll", close, { capture: true, passive: true });
    window.addEventListener("resize", close);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [position]);
  return (
    <span ref={trigger} className="info-tooltip-trigger" style={style} tabIndex={description ? 0 : undefined}
      aria-describedby={position ? id : undefined}
      onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {position && createPortal(<span id={id} role="tooltip" className="glass-tooltip" style={position}>{description}</span>, document.body)}
    </span>
  );
}
