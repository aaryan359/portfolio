// @flow strict
"use client";

import React, { useState } from "react";
import { ExternalLink, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogs } from "@/utils/data/blogs";


const BlogCard = ({ blog }) => {
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'short', 
			day: 'numeric' 
		});
	};

	return (
		<div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-1">
			{/* Animated background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/20 to-pink-50/0 dark:from-blue-900/0 dark:via-purple-900/10 dark:to-pink-900/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

			{/* Animated border glow */}
			<div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
				<div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-sm" />
			</div>

			<div className="relative z-10">
				{/* Content Card with matching style */}
				<div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37] w-full">
					<div className="flex flex-row">
						<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
						<div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
					</div>
					<div className="px-6 py-6 relative">
						<div className="space-y-4">
							{/* Blog Header */}
							<div className="flex items-start justify-between">
								<div className="flex-1">
									<div className="flex items-center space-x-2 mb-2">
										<span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 border border-blue-700/50">
											{blog.category}
										</span>
									</div>
									<h3 className="text-gray-300 text-lg lg:text-xl font-semibold  group-hover:text-[#20f5c1] transition-colors duration-300">
										{blog.title}
									</h3>
								</div>
								<a
									href={blog.url}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-blue-900/30 hover:text-blue-400 transition-all duration-300 hover:scale-110 ml-4">
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>

							

							{/* Blog Meta */}
							<div className="flex items-center justify-between pt-2">
								<div className="flex items-center space-x-4 text-xs text-gray-400">
									<div className="flex items-center space-x-1">
										<Calendar className="w-3 h-3" />
										<span>{formatDate(blog.date)}</span>
									</div>
									<div className="flex items-center space-x-1">
										<Clock className="w-3 h-3" />
										<span>{blog.readTime}</span>
									</div>
								</div>
								<div className="text-xs text-[#16f2b3] font-medium group-hover:text-[#20f5c1] transition-colors duration-300">
									Read More
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Blogs = () => {
	const [showAll, setShowAll] = useState(false);
	const visibleBlogs = showAll ? blogs : blogs.slice(0, 2);

	return (
		<div
			id="blogs"
			className="relative my-12 lg:my-24">
			<div className="mb-6 lg:mb-6">
				<div className="relative">
					{/* Decorative blur */}
					<div className="absolute -top-3 left-0 h-20 w-20 translate-x-1/2 rounded-full bg-violet-200 dark:bg-violet-900/30 blur-3xl opacity-30" />

					<div className="relative flex items-center">
						<span className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 text-xl font-semibold rounded-lg shadow-lg">
							Recent Blogs
						</span>
						<div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-gray-900 dark:from-gray-100 to-transparent" />
					</div>
				</div>
			</div>
			
			<div className="max-w-7xl mx-auto">
				{/* Blog Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{visibleBlogs.map((blog) => (
						<BlogCard
							key={blog.id}
							blog={blog}
						/>
					))}
				</div>

				{/* See More Button */}
				{!showAll && blogs.length > 2 && (
					<div className="flex justify-center mt-12">
						<button
							onClick={() => setShowAll(true)}
							className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] px-8 py-4 text-[#16f2b3] font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							<div className="relative flex items-center space-x-2">
								<span>See More Blogs</span>
								<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
							</div>
							<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
						</button>
					</div>
				)}

				{/* Show Less Button (when all blogs are visible) */}
				{showAll && (
					<div className="flex justify-center mt-12">
						<button
							onClick={() => setShowAll(false)}
							className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] px-8 py-4 text-gray-400 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/20 hover:scale-105">
							<div className="relative flex items-center space-x-2">
								<span>Show Less</span>
							</div>
							<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Blogs;