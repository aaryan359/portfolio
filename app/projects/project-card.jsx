"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { TechPill } from "../components/ui/TechPill";




export function ProjectCard({ project }) {

	console.log(" project in card is ",project);
	return (
		<article
			className='
        group relative overflow-hidden
        rounded-xl border border-white/10
        bg-[#0f0f0f]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)]
      '>
			{/* IMAGE */}
			<div className='relative aspect-[16/9] overflow-hidden'>
				<img
					src={project.images[0]}
					alt={project.name}
					className='
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-[1.03]
          '
				/>
			</div>

			{/* CONTENT */}
			<div className='p-5 space-y-4'>
				{/* TITLE + LINKS */}
				<div className='flex items-start justify-between gap-4'>
					<h3 className='text-lg font-semibold text-white'>{project.name}</h3>

					<div className='flex gap-2 opacity-70 group-hover:opacity-100 transition'>
						{project.liveUrl && (
							<Link
								href={project.liveUrl}
								target='_blank'>
								<ExternalLink className='h-4 w-4 hover:text-white' />
							</Link>
						)}
						{project.githubUrl && (
							<Link
								href={project.githubUrl}
								target='_blank'>
								<Github className='h-4 w-4 hover:text-white' />
							</Link>
						)}
					</div>
				</div>

				{/* DESCRIPTION */}
				<p className='text-sm text-white/60 leading-relaxed line-clamp-2'>{project.description}</p>

				{/* TECHNOLOGIES */}
				<div className='flex flex-wrap gap-2'>
					{project.techStack.slice(0, 6).map((tech) => (
						<TechPill
							key={tech}
							name={tech}
						/>
					))}
				</div>

				{/* FOOTER */}
				<div className='flex items-center justify-between pt-2'>
					<span className='inline-flex items-center gap-2 text-xs text-green-400'>
						<span className='h-2 w-2 rounded-full bg-green-400' />
						All Systems Operational
					</span>

					<Link
						href={`/projects/${project.slug}`}
						className='
									inline-flex items-center gap-1
									text-xs font-medium
									text-white/50
									transition-all duration-200
									hover:text-white
									hover:translate-x-0.5
									focus-visible:outline-none
									focus-visible:ring-1 focus-visible:ring-white/30
								'>
						<span
							className='
								inline-flex items-center gap-1
								text-xs font-medium
								text-white/50
								transition-all duration-200
								group-hover:text-white
								group-hover:translate-x-0.5
								'>
							  View details
							  <span
									className='
										transition-transform duration-200
										group-hover:translate-x-1
										'>
								→
							</span>
						</span>
					</Link>
				</div>
			</div>
		</article>
	);
}
