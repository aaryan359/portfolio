// @flow strict
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { personalData } from "@/utils/data/personal-data";
import { Menu, X } from "lucide-react";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const NAV_ITEMS = ["about", "experience", "skills", "education", "projects", "blogs"];

function Navbar() {
	const [open, setOpen] = useState(false);
	const navRef = useRef(null);

	// close on outside click
	useEffect(() => {
		function handleClick(e) {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, []);

	return (
		<header className='sticky top-4 z-[1000] '>
			<nav
				ref={navRef}
				className='
          rounded-2xl
          border border-white/10
          bg-black/40 backdrop-blur
          px-2 py-2
          transition-all
        '>
				<div className='flex items-center justify-between'>
					<Link
						href='/'
						className='flex items-center gap-3'>
						<Image
							src={`${publicRuntimeConfig.basePath}/profile.jpg`}
							alt='Profile'
							width={40}
							height={40}
							className='rounded-lg'
							unoptimized
						/>
						<span className='hidden sm:block text-sm font-medium text-white/80'>{personalData.name}</span>
					</Link>
					<ul className='hidden md:flex items-center gap-6'>
						{NAV_ITEMS.map((item) => (
							<li key={item}>
								<Link
									href={`/#${item}`}
									className='
                    group relative text-sm
                    text-white/60
                    transition
                    hover:text-white
                    focus-visible:outline-none
                  '>
									{item}
									<span
										className='
                      absolute -bottom-1 left-0 h-px w-full
                      origin-left scale-x-0
                      bg-gradient-to-r from-purple-500 to-blue-500
                      transition-transform duration-200
                      group-hover:scale-x-100
                    '
									/>
								</Link>
							</li>
						))}
					</ul>

					<button
						onClick={() => setOpen((v) => !v)}
						aria-label='Toggle menu'
						className='
              md:hidden
              rounded-lg p-2
              text-white/70
              transition
              hover:bg-white/10
              focus-visible:ring-2 focus-visible:ring-white/30
            '>
						{open ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>

				<div
					className={`
            md:hidden overflow-hidden
            transition-all duration-300
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}>
					<ul className='mt-4 space-y-2 border-t border-white/10 pt-4'>
						{NAV_ITEMS.map((item) => (
							<li key={item}>
								<Link
									href={`/#${item}`}
									onClick={() => setOpen(false)}
									className='
                    block rounded-lg px-3 py-2
                    text-sm text-white/70
                    transition
                    hover:bg-white/10 hover:text-white
                  '>
									{item.toUpperCase()}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
