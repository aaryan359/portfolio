// @flow strict
"use client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { SocialIcon } from "../../helper/iconshelper";
import { SkillPill } from "../../helper/skillspills";

export default function HeroSection() {
	return (
		<section className='relative pt-10  overflow-hidden'>
			<div className='relative top-[-24px] transition-transform duration-300 will-change-transform'>
				<div
					className='
						pointer-events-none
						absolute top-0 left-1/2
						h-px w-[70%]
						-translate-x-1/2
						bg-gradient-to-r
						from-transparent
						via-purple-500/70
						to-transparent
						'
				/>

				<div className='pointer-events-none absolute inset-0'>
					<div
						className='
            absolute -top-32 left-1/2
            h-[420px] w-[420px]
            -translate-x-1/2
            rounded-full
            bg-purple-500/15
            blur-[120px]
          '
					/>
				</div>

				{/* Ambient background
				<div className='pointer-events-none absolute inset-0'>
					<div className='absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/10 blur-[120px]' />
					<div className='absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[120px]' />
				</div> */}

				<div className='relative pt-10'>
					<p
						className='
					text-xs tracking-widest uppercase text-white/50
					animate-fade-in
				'>
						Engineer
					</p>

					<h1
						className='
					mt-4 text-4xl md:text-5xl font-semibold leading-tight
					animate-fade-in delay-100
				'>
						Hi, I’m <span className='text-white'>{personalData.name}</span>
						<span className='block text-4xl text-subtle font-medium mt-1'>
							I build reliable web and mobile apps with a focus on real-world usability.
						</span>
					</h1>

					{/* DESCRIPTION */}
					<p
						className='
							mt-6 text-base md:text-lg
							leading-relaxed text-subtle
							animate-fade-in delay-200
							'>
						I enjoy building real-world web and mobile applications, from clean user interfaces to the backend
						systems that support them. Lately, I’ve been working mostly with{" "}
						<SkillPill variant='primary'>TypeScript</SkillPill>, <SkillPill variant='secondary'>React</SkillPill>,{" "}
						<SkillPill variant='accent'>Next.js</SkillPill>, <SkillPill variant='success'>Node</SkillPill>,{" "}
						<SkillPill variant='secondary'>React Native</SkillPill>,{" "}
						<SkillPill variant='accent'>Expo</SkillPill> and{" "}
						<SkillPill variant='default'>PostgreSQL</SkillPill>, focusing on writing understandable code,
						improving performance, and learning how to build features that people actually use.
					</p>

					{/* CTA */}
					<div
						className='
							mt-8 flex flex-wrap gap-4
							animate-fade-in delay-300
						'>
						<Link
							href='#contact'
							className='btn-mono'>
							<RiContactsFill size={14} />
							Get in touch
						</Link>

						<Link
							href={personalData.resume}
							target='_blank'
							className='btn-mono'>
							<MdDownload size={14} />
							Resume / CV
						</Link>
					</div>

					{/* SOCIALS */}
					<div
						className='
            mt-8 flex items-center gap-5
            text-subtle
            animate-fade-in delay-400
          '>
						<SocialIcon
							href={personalData.github}
							label='GitHub'>
							<BsGithub />
						</SocialIcon>
						<SocialIcon
							href={personalData.linkedIn}
							label='LinkedIn'>
							<BsLinkedin />
						</SocialIcon>
						<SocialIcon
							href={personalData.leetcode}
							label='LeetCode'>
							<SiLeetcode />
						</SocialIcon>
						<SocialIcon
							href={personalData.twitter}
							label='Twitter'>
							<FaTwitterSquare />
						</SocialIcon>
						<SocialIcon
							href={personalData.facebook}
							label='Facebook'>
							<FaFacebook />
						</SocialIcon>
					</div>
				</div>
			</div>
		</section>
	);
}
