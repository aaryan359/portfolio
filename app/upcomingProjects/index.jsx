"use client";

import React from "react";
import { upcomingProjects } from "@/utils/data/upcomingProjects";
import { Sparkles } from "lucide-react";

const UpcomingProjects = () => {
	return (
		<section
			id='upcomingprojects'>
			{/* Subtext */}
			<p className='mb-8 text-md text-white project-card-text'>
				Concepts I’m actively designing and building next — focused on AI, productivity, and real-world problem solving.
			</p>

			{/* Cards */}
			<div className='grid gap-5 sm:grid-cols-2'>
				{upcomingProjects.map((proj, idx) => (
					<div
						key={idx}
						tabIndex={0}
						className='
						group relative overflow-hidden rounded-xl
						border border-white/10
						bg-white/[0.03]
						p-5
						transition-all duration-300
						hover:-translate-y-[2px]
						hover:border-white/20
						hover:bg-white/[0.05]
						hover:shadow-xl hover:shadow-purple-500/10
						focus-visible:outline-none
						focus-visible:ring-1 focus-visible:ring-white/30
						'>
						{/* Glow line */}
						<div className='absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition' />

						{/* Header */}
						<div className='flex items-start gap-3 mb-2 project-card-text'>
							<span className='mt-1 text-purple-400'>
								<Sparkles size={16} />
							</span>
							<h4 className='text-lg font-semibold text-white leading-snug project-card-text'>{proj.title}</h4>
						</div>

						{/* Description */}
						<p className='text-sm text-white/60 leading-relaxed project-card-text'>{proj.description}</p>

						{/* Status */}
						<div className='mt-4 text-xs text-purple-400/80 project-card-text'>Planned · In Design</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default UpcomingProjects;
