export function applyTheme(root, theme) {
  const next = theme === "light" ? "light" : "dark";
  root.classList.toggle("light", next === "light");
  root.dataset.theme = next;
  root.style.colorScheme = next;
  return next;
}

export function toggleTheme(root, storage) {
  // The rendered theme is the source of truth; persistence must never block a toggle.
  const next = applyTheme(root, root.classList.contains("light") ? "dark" : "light");
  try { storage?.setItem("theme", next); } catch {}
  return next;
}
