// @flow strict
"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/utils/data/projects-data";

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-scroll functionality remains the same
  useEffect(() => {
    if (isAutoScrolling && project.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoScrolling, project.images.length]);

  // Navigation functions remain the same
  const nextImage = () => {
    setIsAutoScrolling(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setIsAutoScrolling(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setIsAutoScrolling(false);
    setCurrentImageIndex(index);
  };

  return (
    <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/30 to-pink-50/0 dark:from-blue-900/0 dark:via-purple-900/20 dark:to-pink-900/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col lg:flex-row h-full">
        {/* Image Section - Full width on mobile, half on desktop */}
        <div className="relative w-full lg:w-1/2 h-48 sm:h-64 lg:h-80 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out h-full"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          >
            {project.images.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img
                  src={image}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:scale-110"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:scale-110"
              >
                <ChevronRight className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </button>
            </>
          )}

          {/* Dot Indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white shadow-lg scale-125"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Section - Full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2 p-4 lg:p-6 flex flex-col justify-between">
          <div className="space-y-1">
            {/* Project Name */}
            <div className="flex justify-between items-start">
              <h3 className="text-2xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 lg:mb-3">
                {project.name}
              </h3>
              <div className="flex space-x-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-lg  font-medium text-gray-800 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-4 lg:mt-6">
            <h4 className="text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2 lg:mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 transition-all duration-300 hover:scale-105 hover:shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="experience" className="relative my-12 lg:my-24">
      <div className="mb-8 lg:mb-12">
        <div className="relative">
          {/* Decorative blur */}
          <div className="absolute -top-3 left-0 h-20 w-20 translate-x-1/2 rounded-full bg-violet-200 dark:bg-violet-900/30 blur-3xl opacity-30" />

          <div className="relative flex items-center">
            <span className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 text-lg sm:text-xl font-semibold rounded-lg shadow-lg">
              Projects
            </span>
            <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-gray-900 dark:from-gray-100 to-transparent" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Project Cards */}
        <div className="space-y-6 lg:space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;