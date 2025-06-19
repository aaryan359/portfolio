"use client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition text-sm md:text-base"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="w-full  max-w-7xl mx-auto">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-8" />
      <div className="w-full grid grid-cols-2 gap-8 pb-16 sm:grid-cols-3">
        {/* First Column */}
        <div className="flex flex-col space-y-3">
          <span className="font-medium text-gray-700 dark:text-gray-300 mb-2 text-sm md:text-base">
            Navigation
          </span>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition text-sm md:text-base"
          >
            Home
          </Link>
          <Link
            href="#blogs"
            className="text-gray-500 hover:text-gray-600 transition text-sm md:text-base"
          >
            Blog
          </Link>
          <Link
            href="#projects"
            className="text-gray-500 hover:text-gray-600 transition text-sm md:text-base"
          >
            Projects
          </Link>
          <Link
            href="#links"
            className="text-gray-500 hover:text-gray-600 transition text-sm md:text-base"
          >
            Links
          </Link>
        </div>

        {/* Second Column */}
        <div className="flex flex-col space-y-3">
          <span className="font-medium text-gray-700 dark:text-gray-300 mb-2 text-sm md:text-base">
            Social
          </span>
          <ExternalLink href={personalData.github}>GitHub</ExternalLink>
          <ExternalLink href={personalData.linkedIn}>LinkedIn</ExternalLink>
          <ExternalLink href={personalData.twitter}>Twitter</ExternalLink>
          <ExternalLink href={personalData.instagram}>Instagram</ExternalLink>
          <ExternalLink href={personalData.hasnode}>Hashnode</ExternalLink>
        </div>

        {/* Third Column - Empty but maintained for layout */}
        <div className="hidden sm:flex flex-col space-y-3">
          {/* Optional: Add additional links here if needed */}
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs md:text-sm pb-8">
        © {new Date().getFullYear()} {personalData.name}. All rights reserved.
      </div>
    </footer>
  );
}