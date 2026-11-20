"use client";

import { useState } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
const fallback = `${basePath}/image/projects/xpresspp-0.webp`;

export function ProjectImage({ src, alt, as: Image = "img", ...props }) {
  const [failedSource, setFailedSource] = useState(null);

  return (
    <Image
      loading="lazy"
      decoding="async"
      {...props}
      src={!src || failedSource === src ? fallback : src}
      alt={!src || failedSource === src ? `${alt} — illustrative coding photograph` : alt}
      onError={() => setFailedSource(src)}
    />
  );
}
