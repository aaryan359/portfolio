"use client";

import React, { useState } from "react";
import { TechPill } from "../components/ui/TechPill";
import { ShowMoreButton } from "../components/ui/Button";

const experiences = [
	{
		company: "Infrawave Solutions",
		role: "React Native developer",
		website: "https://www.infrawavesolutions.com/",
		start: "March 2025",
		end: "May 2025",
		location: "Jaipur India (Remote)",
		tools: ["React Native", "React", "TypeScript", "Tailwind CSS", "Figma", "AWS", "Postman"],
		points: [
			"Worked on a vehicle rental app featuring an admin dashboard and real-time booking analytics, optimizing fleet utilization by 35%.",
			"Automated invoice generation reduced manual work by 90% through dynamic pricing, tax calculations, and customizable templates.",
			"Implemented efficient data fetching and robust error handling.",
			"Built accessible, performance-focused UI systems.",
		],
	},
	{
		company: "ABV IIITM Gwalior",
		role: "ML Engineer (Embedded Systems)",
		start: "June 2025",
		end: "July 2025",
		location: "Gwalior, India (On-site)",
		tools: ["Raspberry PI","React", "TypeScript", "Postman", "Express"],
		points: [
			"Worked on Raspberry PI 5",
			"Built and deployed ml model on raspberry PI",
		],
	},
];

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const visible = showAll ? experiences : experiences.slice(0, 1);

	return (
		<section
			id='experience'
			className='mt-10'>
			{/* Sticky Header */}
			<div className=''>
				<h2 className='text-3xl font-semibold'>
					All Experiences <span className='text-sm text-muted-foreground font-normal'>({experiences.length})</span>
				</h2>
			</div>

			{/* Experience List */}
			<div className='space-y-16 mt-3'>
				{visible.map((exp, idx) => (
					<div
						key={idx}
						className='fade-up border-b border-white/10 pb-16'
						style={{ animationDelay: `${idx * 0.1}s` }}>
						
						<div className='flex flex-col md:flex-row md:justify-between gap-4'>
							<div>
								<div className='flex items-center gap-3'>
									<h3 className='text-lg font-medium'>{exp.company}</h3>

									{exp.status && (
										<span className='text-xs border border-green-500/40 px-2 py-0.5 rounded-full text-green-400'>
											● {exp.status}
										</span>
									)}

									{/* LINKS */}
									<div className='flex items-center gap-2'>
										{exp.website && (
											<a
												href={exp.website}
												target='_blank'
												rel='noopener noreferrer'
												className='
														text-muted-foreground
														hover:text-white
														transition-all
														hover:-translate-y-[1px]
														'
												aria-label={`${exp.company} website`}>
												🌐
											</a>
										)}

										{exp.github && (
											<a
												href={exp.github}
												target='_blank'
												rel='noopener noreferrer'
												className='
														text-muted-foreground
														hover:text-white
														transition-all
														hover:-translate-y-[1px]
														'
												aria-label={`${exp.company} GitHub`}>
												<svg
													viewBox='0 0 24 24'
													className='h-4 w-4 fill-current'>
													<path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.605-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.01-.323 3.3 1.23a11.51 11.51 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12 24 5.37 18.627 0 12 0z' />
												</svg>
											</a>
										)}
									</div>
								</div>

								<p className='text-subtle text-muted-foreground'>{exp.role}</p>
							</div>

							<div className='text-subtle text-sm text-muted-foreground md:text-right'>
								<p>
									{exp.start} – {exp.end}
								</p>
								<p>{exp.location}</p>
							</div>
						</div>

						{/* Tools */}
						<div className='mt-6'>
							<p className='text-sm text-muted-foreground mb-3'>Technologies & Tools</p>
							<div className='flex flex-wrap gap-2'>
								{exp.tools.map((tool) => (
									<TechPill
										key={tool}
										name={tool}
									/>
								))}
							</div>
						</div>

						{/* Points */}
						<ul className='text-subtle mt-6 space-y-2 list-disc list-inside text-muted-foreground'>
							{exp.points.map((point, i) => (
								<li key={i}>{point}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className='flex justify-center py-5'>
				{experiences.length > 1 && (
					<ShowMoreButton
						label={"show more"}
						expanded={showAll}
						onClick={() => setShowAll(!showAll)}
					/>
				)}
			</div>
		</section>
	);
}
