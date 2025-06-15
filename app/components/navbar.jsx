// @flow strict
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent sticky backdrop-blur-sm rounded-[20px] p-1 top-0 z-[1000]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Image
              src={"/logo.jpeg"}
              width={60}
              height={60}
              className="rounded-lg"
              alt="Logo"
            />
          </div>

          {/* Mobile menu button - positioned to the right */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg focus:outline-none ml-auto mr-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu - always visible */}
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              {['about', 'experience', 'skills', 'education', 'projects', 'blogs'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item}`}
                    className="block px-3 py-2 no-underline"
                  >
                    <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                      {item.toUpperCase()}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile menu - slides down from top */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="absolute left-0 right-0 top-20 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-lg mx-4 py-2">
            <ul className="flex flex-col space-y-2 px-4">
              {['about', 'experience', 'skills', 'education', 'projects', 'blogs'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item}`}
                    className="block px-3 py-3 no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                      {item.toUpperCase()}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;