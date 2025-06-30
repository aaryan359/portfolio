"use client";
import { upcomingProjects } from "@/utils/data/upcomingProjects";
import React from "react";


const UpcomingProjects = () => (
  <div id="upcomingprojects"  className="mt-12">
    <div className="mb-4 flex items-center">
      <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 text-lg font-semibold rounded-lg shadow-lg dark:from-purple-800 dark:to-blue-700">
        Upcoming Projects
      </span>
      <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-purple-600 dark:from-purple-400 to-transparent" />
    </div>


    <div className="grid gap-4 sm:grid-cols-2">
      {upcomingProjects.map((proj, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow hover:shadow-lg transition-all duration-300"
        >
          <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{proj.title}</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{proj.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default UpcomingProjects;