'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Marker {
  country: string;
  project: string;
  top: string;  // Tailwind-based top e.g., 'top-[35%]'
  left: string; // Tailwind-based left e.g., 'left-[65%]'
}

const markers: Marker[] = [
  { country: 'Pakistan', project: 'LMS Platform', top: 'top-[50%]', left: 'left-[60%]' },
  { country: 'USA', project: 'E-commerce App', top: 'top-[35%]', left: 'left-[25%]' },
  { country: 'Dubai', project: 'Business Dashboard', top: 'top-[48%]', left: 'left-[52%]' },
];

export default function InteractiveMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-20">
      {/* Map Background */}
      <img src="/map.svg" alt="Map" className="w-full object-contain" />

      {/* Markers */}
      {markers.map((marker, idx) => (
        <div
          key={idx}
          className={`absolute ${marker.top} ${marker.left} transform -translate-x-1/2 -translate-y-1/2 group`}
          onMouseEnter={() => setHovered(marker.country)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Pulsing Dot */}
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600"></span>
          </span>

          {/* Tooltip */}
          {hovered === marker.country && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-zinc-800 text-sm shadow-lg rounded-lg px-4 py-2 z-10 w-40"
            >
              <p className="font-semibold text-gray-800 dark:text-white">{marker.project}</p>
              <p className="text-xs text-gray-500">{marker.country}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
