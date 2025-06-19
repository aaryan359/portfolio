import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";

// Sample experience data - replace with your actual data
const experiences = [
	{
		id: 1,
		title: "Mobile App Developer",
		company: "Infrawave solutions",
		duration: "March 2025 - June 2025",
	},
	{
		id: 2,
		title: "Machine learning intern",
		company: "ABV IIITM",
		duration: "Jan 2025 - May 2025",
	},
];

const ExperienceCard = ({ children, className = "" }) => {
	return (
		<div
			className={`group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 ${className}`}>
			{/* Animated background gradient */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-purple-50/0 dark:from-blue-900/0 dark:via-blue-900/20 dark:to-purple-900/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

			{/* Animated border effects */}
			<div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				<div className="absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
				<div className="absolute -left-px top-1/2 h-1/2 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
			</div>

			<div className="relative z-10">{children}</div>
		</div>
	);
};

const ProjectCard = () => {
	return (
		<ExperienceCard className="h-full">
			<div className="p-6">
				

				<div>
					<h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
						ML Engineer (Embedded Systems)
					</h4>

					<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
						Developed and deployed a custom
						AI model on Raspberry Pi 3/5 for
						real-time Hazardous Smoke
						detection, integrating machine
						learning with edge computing for
						efficient on-device inference.
					</p>
          <p className="text-gray-600 font-semibold dark:text-gray-300 leading-relaxed mb-4">
					 A patent was filed by my professor, and my name is included as well.
					</p>

					<div className="flex flex-wrap gap-2">
						<span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
							React Native
						</span>
						<span className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full">
							TypeScript
						</span>
						<span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
							Node js
						</span>
						<span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
							MongoDB
						</span>
						<span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
							Tailwind CSS
						</span>
						<span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
							Express
						</span>
					</div>
				</div>
			</div>
		</ExperienceCard>
	);
};

const ExperienceItem = ({ experience }) => {
	return (
		<ExperienceCard>
			<div className="p-6">
				<div className="flex justify-center mb-4">
					<span className="px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full">
						{experience.duration}
					</span>
				</div>

				<div className="flex items-start gap-4">
					<div className="flex-shrink-0 p-2 rounded-lg bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 transition-transform duration-300 group-hover:scale-110">
						<BsPersonWorkspace size={24} />
					</div>

					<div className="flex-1 min-w-0">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
							{experience.title}
						</h3>
						<p className="text-gray-600 dark:text-gray-300">
							{experience.company}
						</p>
					</div>
				</div>
			</div>
		</ExperienceCard>
	);
};

function Experience() {
	return (
		
		<div
			id="experience"
			className="mb-6 lg:mb-6">
			{/* Section Header */}
			<div className="mb-6 lg:mb-6">
				<div className="relative">
					{/* Decorative blur */}
					<div className="absolute -top-3 left-0 h-20 w-20 translate-x-1/2 rounded-full bg-violet-200 dark:bg-violet-900/30 blur-3xl opacity-30" />

					<div className="relative flex items-center">
						<span className="bg-gray-900  text-white px-6 py-3 text-xl font-semibold rounded-lg shadow-lg">
						Experience
						</span>
						<div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-gray-900 dark:from-gray-100 to-transparent" />
					</div>
				</div>
			</div>

			{/* Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
				{/* Project Card */}
				<div className="order-2 lg:order-1">
					<ProjectCard />
				</div>

				{/* Experience List */}
				<div className="order-1 lg:order-2 space-y-6">
					{experiences.map((experience) => (
						<ExperienceItem
							key={experience.id}
							experience={experience}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Experience;
