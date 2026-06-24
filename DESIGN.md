# Design System Specification: Aryan Portfolio Upgrade

This document outlines the design tokens, color palettes, interactive behaviors, and typography for the upgraded Aryan Portfolio. This system defines a premium, state-of-the-art developer portfolio style.

## 1. Visual Theme & Aesthetics

### Core Principles
- **Rich Aesthetics**: High-end dark theme by default, with a gorgeous, high-contrast and soft light theme.
- **Glassmorphism & Depth**: Subtle borders, transparent background blurs, and layered shadows to create tactile depth.
- **Smooth Micro-interactions**: Smooth transitions on hover, focus, and theme toggling without excessive animations that distract the user.

---

## 2. Typography

- **Primary Font**: `Hanken Grotesk` (clean, geometric grotesque for a modern tech feel).
- **Secondary Font**: `System-sans` (for maximum performance and fallbacks).
- **Headings**: Semi-bold, tight tracking (`tracking-tight`), slightly compressed leading.
- **Body Text**: Readable, clean line height (`leading-relaxed`), medium weights.

---

## 3. Dynamic Color System (Dark & Light)

We use custom CSS variables linked to Tailwind CSS colors. 

| Token | Dark Mode (Default) | Light Mode | Description |
| :--- | :--- | :--- | :--- |
| `--background` | `oklch(0.05 0 0)` (Pure Dark) | `oklch(0.98 0.01 240)` (Soft Light Indigo) | Primary page background |
| `--foreground` | `oklch(0.98 0 0)` (Soft White) | `oklch(0.15 0.02 240)` (Deep Slate-Indigo) | Core text color |
| `--card` | `oklch(0.09 0 0)` (Sleek Grey) | `oklch(0.95 0.01 240)` (Premium Light Card) | Card backgrounds |
| `--border` | `oklch(1 0 0 / 12%)` (Subtle White) | `oklch(0.15 0.02 240 / 12%)` (Subtle Slate) | Border outlines |
| `--muted-foreground`| `oklch(0.75 0 0)` | `oklch(0.40 0.02 240)` | Secondary metadata text |

### Tailwind Color Mapping
To support transition effects, tailwind colors are customized:
- `white`: maps to `rgb(var(--white-rgb) / <alpha-value>)`
- `black`: maps to `rgb(var(--black-rgb) / <alpha-value>)`

This flips white/black classes automatically:
- Dark Mode: `--white-rgb: 255, 255, 255` | `--black-rgb: 0, 0, 0`
- Light Mode: `--white-rgb: 15, 23, 42` (Slate-900) | `--black-rgb: 255, 255, 255`

---

## 4. UI Components & Cards

### Cards
- `.mono-card`: Using dynamic `var(--card)` background and `var(--border)` border.
- Hover Effect: Translates up by `-2px` with a scale-up border-color transition to `rgba(255, 255, 255, 0.25)`.
- Shadows: Soft shadows `0_10px_30px_-15px_rgba(0,0,0,0.7)` to emphasize depth on hover.

### Navigation Dock (SideNavbar)
- A floating side navbar utilizing Framer Motion.
- Spring physics animations on hover: `scale: 1.2`, `stiffness: 400`, `damping: 17`.
- Hover labels displaying smoothly to the right.

---

## 5. Micro-Animations & Motion

- **State Transitions**: `all` properties transition over `300ms` with `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out).
- **Glow & Interaction**: GlowCard component tracks mouse movements to dynamically project radial gradients (`--active` trigger and angle tracking), providing a modern, interactive cursor-following glow.
- **Scroll reveal & fade-in**: Staggered fade-up animations on page loading using `@keyframes fadeUp`.
