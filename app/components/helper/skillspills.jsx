// @flow strict
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SkillPill({ children, variant = "default", delay = 0, interactive = true, showSparkle = true }) {
	const [isHovered, setIsHovered] = useState(false);
	const [ripples, setRipples] = useState([]);
	const pillRef = useRef(null);

	const variants = {
		default: {
			bg: "bg-gradient-to-br from-gray-900/90 to-gray-800/90",
			border: "border-gray-700/40",
			hoverBorder: "border-white/25",
			glow: "rgba(168, 85, 247, 0.15)",
			text: "text-gray-200",
			gradient: "from-gray-400 via-gray-300 to-gray-200",
		},
		primary: {
			bg: "bg-gradient-to-br from-purple-900/40 to-purple-800/20",
			border: "border-purple-500/30",
			hoverBorder: "border-purple-400/50",
			glow: "rgba(168, 85, 247, 0.25)",
			text: "text-purple-100",
			gradient: "from-purple-400 via-purple-300 to-purple-200",
		},
		secondary: {
			bg: "bg-gradient-to-br from-indigo-900/40 to-indigo-800/20",
			border: "border-indigo-500/30",
			hoverBorder: "border-indigo-400/50",
			glow: "rgba(99, 102, 241, 0.25)",
			text: "text-indigo-100",
			gradient: "from-indigo-400 via-indigo-300 to-indigo-200",
		},
		accent: {
			bg: "bg-gradient-to-br from-pink-900/40 to-pink-800/20",
			border: "border-pink-500/30",
			hoverBorder: "border-pink-400/50",
			glow: "rgba(236, 72, 153, 0.25)",
			text: "text-pink-100",
			gradient: "from-pink-400 via-pink-300 to-pink-200",
		},
		success: {
			bg: "bg-gradient-to-br from-emerald-900/40 to-emerald-800/20",
			border: "border-emerald-500/30",
			hoverBorder: "border-emerald-400/50",
			glow: "rgba(16, 185, 129, 0.25)",
			text: "text-emerald-100",
			gradient: "from-emerald-400 via-emerald-300 to-emerald-200",
		},
	};

	const selectedVariant = variants[variant] || variants.default;

	const handleClick = (e) => {
		if (!interactive) return;

		setIsClicked(true);
		const rect = pillRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		// Add ripple effect
		setRipples((prev) => [...prev, { id: Date.now(), x, y }]);

		setTimeout(() => setIsClicked(false), 300);

		// Remove ripple after animation
		setTimeout(() => {
			setRipples((prev) => prev.slice(1));
		}, 600);
	};

	return (
		<motion.span
			ref={pillRef}
			initial={{ opacity: 0, y: 10, scale: 0.95 }}
			animate={{
				opacity: 1,
				y: 0,
				scale: 1,
				borderColor: isHovered ? selectedVariant.hoverBorder : selectedVariant.border,
			}}
			whileHover={
				interactive ?
					{
						scale: 1.05,
						transition: { type: "spring", stiffness: 400, damping: 25 },
					}
				:	{}
			}
			whileTap={interactive ? { scale: 0.95 } : {}}
			onHoverStart={() => interactive && setIsHovered(true)}
			onHoverEnd={() => interactive && setIsHovered(false)}
			onClick={handleClick}
			style={{
				animationDelay: `${delay}ms`,
				position: "relative",
				overflow: "hidden",
			}}
			className={`
        group relative inline-flex items-center justify-center
        rounded-lg px-3 py-1 text-sm font-medium
        ${selectedVariant.text}
        border ${selectedVariant.border}
        ${selectedVariant.bg}
        backdrop-blur-sm
        transition-all duration-300 ease-out
        cursor-${interactive ? "pointer" : "default"}
        select-none
        will-change-transform
        shadow-lg shadow-black/10
        hover:shadow-xl hover:shadow-purple-500/10
      `}>
			{/* Dynamic gradient overlay on hover */}
			<motion.span
				className='absolute inset-0 rounded-full opacity-0'
				animate={{ opacity: isHovered ? 0.3 : 0 }}
				transition={{ duration: 0.3 }}
				style={{
					background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                      ${selectedVariant.glow} 0%, transparent 70%)`,
				}}
			/>

			{/* Floating particles on hover */}
			{isHovered && interactive && (
				<>
					{[...Array(3)].map((_, i) => (
						<motion.span
							key={i}
							className='absolute h-[2px] w-[2px] rounded-full bg-white/60'
							initial={{
								x: 0,
								y: 0,
								opacity: 0.8,
								scale: 1,
							}}
							animate={{
								x: [0, (Math.random() - 0.5) * 40],
								y: [0, -20 - Math.random() * 20],
								opacity: [0.8, 0],
								scale: [1, 0],
							}}
							transition={{
								duration: 1 + Math.random(),
								delay: i * 0.1,
								ease: "easeOut",
							}}
							style={{
								left: `${30 + i * 20}%`,
								bottom: 2,
							}}
						/>
					))}
				</>
			)}

			{/* Content with gradient text on hover */}
			<span className='relative z-10 flex items-center gap-2'>
				<span className='relative overflow-hidden'>
					<span className='relative z-20'>{children}</span>
					<motion.span
						className={`absolute inset-0 bg-gradient-to-r ${selectedVariant.gradient} bg-clip-text text-transparent`}
						initial={{ x: "-100%" }}
						animate={{ x: isHovered ? "100%" : "-100%" }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
					/>
				</span>
			</span>

			{/* Subtle inner glow */}
			<span
				className={`
          pointer-events-none absolute inset-0 rounded-sm
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
          bg-gradient-to-b
          from-white/5 via-transparent to-transparent
          z-0
        `}
			/>
		</motion.span>
	);
}
