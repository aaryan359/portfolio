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
				colour: arrayColors[
					Math.floor(
						Math.random() *
							arrayColors.length
					)
				],
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
			const { left, top } =
				bannerRef.current.getBoundingClientRect();
			const mouse = {
				x: event.pageX - left,
				y: event.pageY - top,
			};

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawDots();

			dots.current.forEach((dot) => {
				let distance = Math.sqrt(
					(mouse.x - dot.x) ** 2 +
						(mouse.y - dot.y) ** 2
				);
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

		bannerRef.current.addEventListener(
			"mousemove",
			handleMouseMove
		);
		bannerRef.current.addEventListener("mouseout", handleMouseOut);

		return () => {
			bannerRef.current.removeEventListener(
				"mousemove",
				handleMouseMove
			);
			bannerRef.current.removeEventListener(
				"mouseout",
				handleMouseOut
			);
		};
	}, []);

	return (
		<section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
			<Image
				src="/hero.svg"
				alt="Hero"
				width={1572}
				height={800}
				className="absolute -top-[98px] -z-10"
			/>

			<div
				ref={bannerRef}
				className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-y-8">
				<canvas
					ref={canvasRef}
					className="absolute w-[100%] h-[60%] bg-transparent hidden md:block"
					style={{
						pointerEvents: "none",
						height: "100%",
					}}></canvas>

				<div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10 z-50">
					<h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
						<span className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
							{personalData.name}
						</span>
					</h1>
					<span className="text-lg font-bold leading-10  text-gray-400 ">
						Building useful things - from
						React apps to AI solutions, one
						commit at a time.
						<br />
						<span>
							Student & Developer
							crafting intelligent
							tools and web/mobile
							experiences.
						</span>
						<br />
						<span className="text-lg text-[#16f2b3]">
							Find me on Twitter for
							tech, math, and bad
							jokes.
						</span>
					</span>

					<div className="my-12 flex items-center gap-5">
						<Link
							href={
								personalData.github
							}
							target="_blank"
							className="transition-all text-pink-500 hover:scale-125 duration-300">
							<BsGithub size={30} />
						</Link>
						<Link
							href={
								personalData.linkedIn
							}
							target="_blank"
							className="transition-all text-pink-500 hover:scale-125 duration-300">
							<BsLinkedin size={30} />
						</Link>
						<Link
							href={
								personalData.facebook
							}
							target="_blank"
							className="transition-all text-pink-500 hover:scale-125 duration-300">
							<FaFacebook size={30} />
						</Link>
						<Link
							href={
								personalData.leetcode
							}
							target="_blank"
							className="transition-all text-pink-500 hover:scale-125 duration-300">
							<SiLeetcode size={30} />
						</Link>
						<Link
							href={
								personalData.twitter
							}
							target="_blank"
							className="transition-all text-pink-500 hover:scale-125 duration-300">
							<FaTwitterSquare
								size={30}
							/>
						</Link>
					</div>

					<div className="flex items-center gap-3">
						<Link
							href="#contact"
							className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
							<button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
								<span>
									Contact
									me
								</span>
								<RiContactsFill
									size={
										16
									}
								/>
							</button>
						</Link>

						<Link
							className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
							role="button"
							target="_blank"
							href={
								personalData.resume
							}>
							<span>Get Resume</span>
							<MdDownload size={16} />
						</Link>
					</div>
				</div>

				<div className="order-1 gap-5 lg:order-2 w-[300px] h-[430px] from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
					<div className="flex flex-row">
						<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
						<div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
					</div>

					<div className="flex justify-center order-1 lg:order-2">
						<Image
							src={
								personalData.profile
							}
							width={280}
							height={100}
							alt="Aryan meena"
							className="rounded-lg ml-24 mb-8  transition-all duration-1000 grayscale hover:grayscale-0 scale-110 hover:scale-125 cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
