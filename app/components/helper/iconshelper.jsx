import Link from "next/link";

export function SocialIcon({ href, label, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="
        group relative flex items-center justify-center
        text-white/60
        transition-all duration-200
        hover:text-white
        hover:-translate-y-0.5
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-white/30
      "
    >
      {/* tooltip */}
      <span
        className="
          pointer-events-none absolute -top-9
          whitespace-nowrap rounded-md
          border border-white/10
          bg-black/80 backdrop-blur
          px-2 py-1 text-xs tracking-wide
          text-white opacity-0
          translate-y-1
          transition-all duration-200
          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        {label}
      </span>

      <span className="text-2xl">{children}</span>
    </Link>
  );
}