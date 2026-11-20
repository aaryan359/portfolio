/** Route the rail outside section bounds, with crossovers centered in the gaps. */
export function buildTimelineLayout(width, sections) {
  const left = Math.max(4, Math.min(...sections.map((section) => section.left)) - 14);
  const right = Math.min(width - 4, Math.max(...sections.map((section) => section.right)) + 14);
  const radius = Math.min(32, (right - left) / 8);
  const start = 0;
  const end = sections[sections.length - 1].bottom;
  const boundaries = sections.slice(0, -1).map((section, index) => (section.bottom + sections[index + 1].top) / 2);
  let path = `M ${left} ${start}`;
  boundaries.forEach((y, index) => {
    if (index % 2 === 0) path += ` L ${left} ${y - radius} A ${radius} ${radius} 0 0 0 ${left + radius} ${y} L ${right - radius} ${y} A ${radius} ${radius} 0 0 1 ${right} ${y + radius}`;
    else path += ` L ${right} ${y - radius} A ${radius} ${radius} 0 0 1 ${right - radius} ${y} L ${left + radius} ${y} A ${radius} ${radius} 0 0 0 ${left} ${y + radius}`;
  });
  path += ` L ${boundaries.length % 2 === 0 ? left : right} ${end}`;
  return { path, start, end, boundaries, left, right, radius };
}
