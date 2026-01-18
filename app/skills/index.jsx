"use client";

import React from "react";
import { TechPill } from "../components/ui/TechPill";
import { skillsData } from "@/utils/data/skills";

function Skills() {
	return (
		<section
			id='skills'
			className='mt-5 '>
				<div className=' mb-3 h-px w-full bg-white/20' />
			{/* Header */}
			<div className='mb-5'>
				<h2 className='text-3xl font-semibold'>Skills</h2>
				<p className='text-subtle mt-2 max-w-xl'>Technologies I’ve worked with across frontend, backend, and tooling.</p>
			</div>

			{/* Skills Grid */}
			<div className='flex flex-wrap gap-3'>
				{skillsData.map((skill, idx) => (
					<TechPill
						key={idx}
						name={skill}
						style={{ animationDelay: `${idx * 0.03}s` }}
						className='fade-in-stagger'
					/>
				))}
			</div>

			{/* Divider */}
			<div className='mt-10 h-px w-full bg-white/20' />
		</section>
	);
}

export default Skills;
