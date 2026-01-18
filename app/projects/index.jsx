"use client";

import { projects } from "@/utils/data/projects-data";
import { ProjectCard } from "./project-card";


export default function Projects() {
	return (
		<section
			id='projects'
			className='mt-10'>
	
			<h2 className='text-3xl mb-5 font-semibold text-white'>
				All Projects
				<span className='ml-2 text-sm text-white/50'>({projects.length} projects)</span>
			</h2>

			{/* GRID */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
					/>
				))}
			</div>
		</section>
	);
}
