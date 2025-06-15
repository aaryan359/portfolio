"use-client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

const ExternalLink = ({ href, children }) => (
	<a
		className="text-gray-500 hover:text-gray-600 transition"
		target="_blank"
		rel="noopener noreferrer"
		href={href}>
		{children}
	</a>
);

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center items-start mb-8  w-full md:w-[90%] lg:w-[80%] xl:w-[50%] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
			<hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
			<div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
				<div className="flex flex-col space-y-4">
					<a
						href="/"
						className="text-gray-500 hover:text-gray-600 transition">
						Home
					</a>
					<a
						href="#blogs"
						className="text-gray-500 hover:text-gray-600 transition">
						Blog
					</a>

					<a href={'/#projects'} className="text-gray-500 hover:text-gray-600 transition">
						Projects
					</a>

					<a className="text-gray-500 hover:text-gray-600 transition">
						Links
					</a>
				</div>
				<div className="flex flex-col space-y-4">
					<ExternalLink
						href={personalData.github}>
						GitHub
					</ExternalLink>
					<ExternalLink
						href={personalData.linkedIn}>
						LinkedIn
					</ExternalLink>
					<ExternalLink
						href={personalData.twitter}>
						Twitter
					</ExternalLink>
					<ExternalLink
						href={personalData.instagram}>
						Instagram
					</ExternalLink>

					<ExternalLink
						href={personalData.hasnode}>
						Hashnode
					</ExternalLink>
				</div>
				<div className="flex flex-col space-y-4">
					{/* <a
						href="/tweets"
						className="text-gray-500 hover:text-gray-600 transition">
						Tweets
					</a> */}
				</div>
			</div>

			
		</footer>
	);
}
