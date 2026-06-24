"use client";

import { projects } from "@/utils/data/projects-data";
import { ProjectCard } from "./project-card";


export default function Projects() {
	return (
		<section
			id='projects'
			className='mt-2'>
			<div className='flex flex-col gap-8'>
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
