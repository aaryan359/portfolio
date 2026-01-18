"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { TechPill } from "@/app/components/ui/TechPill";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetailClient({ project }) {
	return (
		<section className='px-6 lg:px-8 pt-10 pb-32'>
			<div className='mx-auto max-w-5xl space-y-16'>
				{/* BACK */}
				<Link
					href='/#projects'
					className='inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition'>
					<ArrowLeft className='h-4 w-4' />
					Back to projects
				</Link>

				{/* HERO */}
				<div className='space-y-5'>
					<h1 className='text-4xl font-semibold text-white'>{project.name}</h1>

					<p className='text-lg text-white/60 max-w-2xl'>{project.description}</p>

					{/* META */}
					<div className='flex flex-wrap gap-6 text-sm text-white/50'>
						<span>
							Role: <span className='text-white/80'>{project.role}</span>
						</span>
						<span>
							Team: <span className='text-white/80'>{project.team}</span>
						</span>
						<span>
							Duration: <span className='text-white/80'>{project.duration}</span>
						</span>
						<span>
							Status: <span className='text-green-400'>{project.status}</span>
						</span>
					</div>

					{/* ACTIONS */}
					<div className='flex gap-4 pt-2'>
						{project.liveUrl && (
							<Link
								href={project.liveUrl}
								target='_blank'
								className='btn-mono'>
								<ExternalLink size={14} />
								Live Demo
							</Link>
						)}
						{project.githubUrl && (
							<Link
								href={project.githubUrl}
								target='_blank'
								className='btn-mono'>
								<Github size={14} />
								Source Code
							</Link>
						)}
					</div>
				</div>
				<AutoSlider
					images={project.images}
					name={project.name}
				/>

				{/* TECH STACK */}
				<section className='space-y-4'>
					<h2 className='text-xl font-semibold text-white'>Tech Stack</h2>
					<div className='flex flex-wrap gap-2'>
						{project.techStack.map((tech) => (
							<TechPill
								key={tech}
								name={tech}
							/>
						))}
					</div>
				</section>

				{/* PROBLEM */}
				<section className='space-y-4'>
					<h2 className='text-xl font-semibold text-white'>Problem</h2>
					<ul className='list-disc list-inside space-y-2 text-white/60'>
						{project.problem.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</section>

				{/* SOLUTION */}
				<section className='space-y-4'>
					<h2 className='text-xl font-semibold text-white'>Solution</h2>
					<ul className='list-disc list-inside space-y-2 text-white/60'>
						{project.solution.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</section>

				{/* FEATURES */}
				<section className='space-y-4'>
					<h2 className='text-xl font-semibold text-white'>Key Features</h2>
					<div className='grid sm:grid-cols-2 gap-3 text-white/60'>
						{project.features.map((feature, i) => (
							<div
								key={i}
								className='rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3'>
								{feature}
							</div>
						))}
					</div>
				</section>

				{/* IMPACT */}
				<section className='space-y-4'>
					<h2 className='text-xl font-semibold text-white'>Impact & Learnings</h2>
					<ul className='list-disc list-inside space-y-2 text-white/60'>
						{project.impact.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</section>

				{/* FUTURE */}
				<section className='space-y-4'>
					<h2 className='text-xl font-semibold text-white'>Future Improvements</h2>
					<ul className='list-disc list-inside space-y-2 text-white/60'>
						{project.futurePlans.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</section>

			
			</div>
		</section>
	);
}

function AutoSlider({ images, name }) {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (paused) return;

		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length);
		}, 3500);

		return () => clearInterval(interval);
	}, [paused, images.length]);

	return (
		<div
			className='relative w-full max-w-sm mx-auto'
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}>
			<div className='relative aspect-[9/19] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl'>
				<AnimatePresence mode='wait'>
					<motion.img
						key={index}
						src={images[index]}
						alt={`${name} screen ${index + 1}`}
						className='absolute inset-0 h-full w-full object-contain'
						initial={{ opacity: 0, x: 40, scale: 0.98 }}
						animate={{ opacity: 1, x: 0, scale: 1 }}
						exit={{ opacity: 0, x: -40, scale: 0.98 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						loading='lazy'
					/>
				</AnimatePresence>
			</div>

			{/* DOTS */}
			<div className='mt-4 flex justify-center gap-2'>
				{images.map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={`h-2 w-2 rounded-full transition ${
							i === index ? "bg-purple-400 w-5" : "bg-white/20 hover:bg-white/40"
						}`}
					/>
				))}
			</div>

			<p className='mt-2 text-center text-xs text-white/40'>Auto preview • Hover to pause</p>
		</div>
	);
}
