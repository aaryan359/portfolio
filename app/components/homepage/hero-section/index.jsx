// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
	const canvasRef = useRef(null);
	const bannerRef = useRef(null);
	const ctxRef = useRef(null);
	const dots = useRef([]);

	useEffect(() => {
		if (window.innerWidth <= 768) return;

		const canvas = canvasRef.current;
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
		const ctx = canvas.getContext("2d");
		ctxRef.current = ctx;

		const arrayColors = ["#0c03031b", "#355eaa23", "#5767614b"];
		for (let index = 0; index < 50; index++) {
			dots.current.push({
				x: Math.floor(Math.random() * canvas.width),
				y: Math.floor(Math.random() * canvas.height),
				size: Math.random() * 3 + 5,
				colour: arrayColors[Math.floor(Math.random() * arrayColors.length)],
			});
		}

		const drawDots = () => {
			dots.current.forEach((dot) => {
				ctx.fillStyle = dot.colour;
				ctx.beginPath();
				ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
				ctx.fill();
			});
		};

		drawDots();

		const handleMouseMove = (event) => {
			const { left, top } = bannerRef.current.getBoundingClientRect();
			const mouse = {
				x: event.pageX - left,
				y: event.pageY - top,
			};

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawDots();

			dots.current.forEach((dot) => {
				let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
				if (distance < 300) {
					ctx.strokeStyle = dot.colour;
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(dot.x, dot.y);
					ctx.lineTo(mouse.x, mouse.y);
					ctx.stroke();
				}
			});
		};

		const handleMouseOut = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawDots();
		};

		bannerRef.current.addEventListener("mousemove", handleMouseMove);
		bannerRef.current.addEventListener("mouseout", handleMouseOut);

		return () => {
			bannerRef.current.removeEventListener("mousemove", handleMouseMove);
			bannerRef.current.removeEventListener("mouseout", handleMouseOut);
		};
	}, []);

	return (
		<section className='relative flex flex-col items-center justify-between py-8 lg:py-12 px-4 sm:px-6 lg:px-8'>
			<Image
				src='/portfolio/hero.svg'
				alt='Hero'
				width={1572}
				height={800}
				className='absolute top-0 left-0 w-full h-full object-cover -z-10'
				priority
				unoptimized
			/>

			<div
				ref={bannerRef}
				className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto'>
				<canvas
					ref={canvasRef}
					className='absolute w-full h-full bg-transparent hidden md:block'
					style={{ pointerEvents: "none" }}
				/>

				{/* Content Section */}
				<div className='order-2 lg:order-1 flex flex-col items-start justify-center z-50'>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black dark:text-white mb-4'>
						{personalData.name}
					</h1>

					<p className='text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6'>
						Building useful things - from React apps to AI solutions, one commit at a time.
						<br className='hidden sm:block' />
						<span className='block mt-2'>
							Student & Developer crafting intelligent tools and web/mobile experiences.
						</span>
						<span className='block mt-2 text-[#16f2b3]'>Find me on Twitter for tech, math, and bad jokes.</span>
					</p>

					{/* Social Icons - Adjusted for mobile */}
					<div className='my-6 flex flex-wrap items-center gap-4'>
						<Link
							href={personalData.github}
							target='_blank'
							className='text-pink-500 hover:scale-125 transition-all duration-300'>
							<BsGithub size={24} />
						</Link>
						<Link
							href={personalData.linkedIn}
							target='_blank'
							className='text-pink-500 hover:scale-125 transition-all duration-300'>
							<BsLinkedin size={24} />
						</Link>
						<Link
							href={personalData.facebook}
							target='_blank'
							className='text-pink-500 hover:scale-125 transition-all duration-300'>
							<FaFacebook size={24} />
						</Link>
						<Link
							href={personalData.leetcode}
							target='_blank'
							className='text-pink-500 hover:scale-125 transition-all duration-300'>
							<SiLeetcode size={24} />
						</Link>
						<Link
							href={personalData.twitter}
							target='_blank'
							className='text-pink-500 hover:scale-125 transition-all duration-300'>
							<FaTwitterSquare size={24} />
						</Link>
					</div>

					{/* Buttons - Adjusted for mobile */}
					<div className='flex flex-wrap items-center gap-3'>
						<Link
							href='#contact'
							className='bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600'>
							<button className='px-4 md:px-6 py-2 md:py-3 bg-[#0d1224] rounded-full text-xs md:text-sm font-medium uppercase tracking-wider text-white flex items-center gap-1 hover:gap-2'>
								<span>Contact me</span>
								<RiContactsFill size={14} />
							</button>
						</Link>

						<Link
							href={personalData.resume}
							target='_blank'
							className='flex items-center gap-1 hover:gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all'>
							<span>Get Resume</span>
							<MdDownload size={14} />
						</Link>
					</div>
				</div>

				{/* Profile Image Section */}
				<div className='order-1 lg:order-2 w-full max-w-[280px] sm:max-w-[300px] h-[600px] sm:h-[350px] md:h-[400px] mx-auto  relative rounded-lg  '>
					<div className=' h-full '>
						<Image
							src={personalData.profile}
							fill
							alt={personalData.name}
							className='rounded-lg object-cover transition-all  duration-1000 grayscale hover:grayscale-0 scale-110 cursor-pointer '
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
