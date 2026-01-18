
export function ShowMoreButton({
  label,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        group 
        inline-flex items-center gap-2
        rounded-full px-3 py-2
        text-sm font-medium
        text-foreground
        border border-border
        bg-background
        transition-all duration-300
        hover:bg-muted
        hover:border-white/30
        focus-visible:outline-none
        focus-visible:ring-1 focus-visible:ring-white/30
      "
    >
      <span>{label}</span>


    </button>
  );
}
