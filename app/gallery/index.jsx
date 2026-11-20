"use client";

import React from "react";
import { Image as ImageIcon } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Mountain Peaks",
    description: "High-altitude ridges capturing the first light of dawn.",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Misty Pine Forests",
    description: "Deep valleys shrouded in morning fog and dense woods.",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&h=800&q=80"
  },
  {
    id: 3,
    title: "Cosmic Nebula",
    description: "A deep-space view of stellar dust and active star-forming regions.",
    src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&h=900&q=80"
  },
  {
    id: 4,
    title: "Aurora Borealis",
    description: "The spectacular dance of solar winds across the Arctic night sky.",
    src: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&h=800&q=80"
  },
  {
    id: 5,
    title: "Digital Connectivity",
    description: "Visualizing global neural networks and computational structures.",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Tranquil Island Coastline",
    description: "Crystal clear water breaking along the shore at dusk.",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=800&q=80"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="mt-8">


      {/* Masonry Columns Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="
              blog-card
              break-inside-avoid
              mb-4
              overflow-hidden
              rounded-xl
              p-3
            "
          >
            <div className="relative overflow-hidden rounded-lg mb-3">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-cover rounded-lg block transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
            <div className="px-1">
              <h3 className="text-sm font-bold text-white project-card-text">
                {image.title}
              </h3>
              <p className="text-xs text-white/50 about-thought-text mt-1 leading-relaxed">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
