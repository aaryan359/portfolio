"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="w-full py-10 space-y-8 animate-pulse">
      {/* Title & Description Skeleton */}
      <div className="space-y-3">
        <div className="h-8 w-56 rounded-xl bg-white/10 border border-white/5" />
        <div className="h-4 w-96 rounded-lg bg-white/5 max-w-full" />
      </div>

      {/* Grid of Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="
              h-52 rounded-2xl border border-white/10 
              bg-[#0a0815]/20 p-5 md:p-6 flex flex-col justify-between
            "
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2.5 w-full">
                  {/* Category / Date badge */}
                  <div className="h-4 w-24 rounded-lg bg-white/10" />
                  {/* Card Title */}
                  <div className="h-6 w-[80%] rounded-lg bg-white/10" />
                </div>
                {/* Floating Icon Box */}
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 shrink-0" />
              </div>
              
              {/* Paragraph Lines */}
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-white/5" />
                <div className="h-3 w-[90%] rounded bg-white/5" />
              </div>
            </div>

            {/* Bottom Actions / Tags */}
            <div className="flex gap-2">
              <div className="h-6 w-16 rounded-lg bg-white/5 border border-white/5" />
              <div className="h-6 w-16 rounded-lg bg-white/5 border border-white/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
