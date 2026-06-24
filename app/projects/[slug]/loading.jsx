"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-6 animate-pulse px-4 sm:px-6 lg:px-8">
      {/* Back button skeleton */}
      <div className="h-4 w-28 rounded bg-white/10" />

      {/* TOP SECTION SKELETON */}
      <div className="grid lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Hero Details & Features */}
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-2">
            <div className="h-3 w-20 rounded bg-white/10" />
            <div className="h-8 w-2/3 rounded-xl bg-white/10" />
            <div className="space-y-1.5 pt-1">
              <div className="h-3.5 w-full rounded bg-white/5" />
              <div className="h-3.5 w-[92%] rounded bg-white/5" />
            </div>
          </div>
          
          <div className="h-8 w-24 rounded-lg bg-white/10" />

          {/* Metadata details box */}
          <div className="h-16 rounded-xl border border-white/5 bg-[#0a0815]/10 p-3.5" />

          {/* Key Features grid skeleton */}
          <div className="space-y-1.5">
            <div className="h-3 w-24 rounded bg-white/10" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 rounded bg-white/5" />
              <div className="h-8 rounded bg-white/5" />
              <div className="h-8 rounded bg-white/5" />
              <div className="h-8 rounded bg-white/5" />
            </div>
          </div>
        </div>

        {/* Right Column: Device Mockup */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="w-full max-w-[210px] aspect-[9/19] rounded-[30px] bg-white/[0.02] border-4 border-white/5" />
        </div>
      </div>

      {/* BOTTOM SECTION SKELETON */}
      <div className="space-y-6 pt-5 border-t border-white/5">
        {/* Challenge & Solution skeleton */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="h-32 rounded-xl border border-white/5 bg-white/[0.01]" />
          <div className="h-32 rounded-xl border border-white/5 bg-white/[0.01]" />
        </div>
      </div>
    </div>
  );
}
