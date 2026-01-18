"use client";
import { useEffect, useRef, useState } from "react";

export function useInView(offset = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: `${offset}px` }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [offset]);

  return { ref, visible };
}
