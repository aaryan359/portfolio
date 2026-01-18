// @flow strict
"use client";

import { educations } from "@/utils/data/educations";
import { GraduationCap } from "lucide-react";

function Education() {
	return (
		<section
			id='education'
			className='mt-10'>
			<h2 className='text-3xl mb-2 font-semibold text-white'>Education</h2>

			<div className='relative space-y-4'>
				{educations.map((edu) => (
					<div
						key={edu.id}
						tabIndex={0}
						className='
              group relative  px-5 py-5
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              transition-all duration-300
              hover:-translate-y-[2px]
              hover:border-white/20
              hover:bg-white/[0.05]
              focus-visible:outline-none
              focus-visible:ring-1 focus-visible:ring-white/30
            '>
						<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
							<h3 className='text-lg font-medium text-white'>{edu.title}</h3>
							<span className='text-xs text-purple-400'>{edu.duration}</span>
						</div>

						<p className='mt-1 text-sm text-white/60'>{edu.institution}</p>

						<div className='mt-4 inline-flex items-center gap-2 text-xs text-white/40'>
							<GraduationCap size={14} />
							Academic Qualification
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Education;
