"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const GridGlobe = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 }, // Philippines coordinates
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const sampleArcs = [
    {
      order: 1,
      startLat: 14.5995,
      startLng: 120.9842, // Philippines coordinates
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
      countryName: "Philippines to UK",
    },
    {
      order: 1,
      startLat: 14.5995,
      startLng: 120.9842, // Philippines coordinates
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
      countryName: "Philippines to Japan",
    },
    {
      order: 2,
      startLat: 14.5995,
      startLng: 120.9842, // Philippines coordinates
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
      countryName: "Philippines to France",
    },
    {
      order: 3,
      startLat: 14.5995,
      startLng: 120.9842, // Philippines coordinates
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
      countryName: "Philippines to Australia",
    },
    {
      order: 4,
      startLat: 14.5995,
      startLng: 120.9842, // Philippines coordinates
      endLat: 13.7367,
      endLng: 100.5231,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
      countryName: "Philippines to Thailand",
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842, // Philippines coordinates
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.6,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
      countryName: "Philippines to Singapore",
    },
    {
      order: 6,
      startLat: 14.5995,
      startLng: 120.9842, // Philippines coordinates
      endLat: 56.1304,
      endLng: -106.3468,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
      countryName: "Philippines to Canada",
    },
  ];

  useEffect(() => {
    // Example of how you could toggle hover state for specific country name
    // You can also dynamically update this depending on the line animation

    const interval = setInterval(() => {
      // Logic to show names dynamically when arc is active, for example
      const randomIndex = Math.floor(Math.random() * sampleArcs.length);
      setHoveredCountry(sampleArcs[randomIndex].countryName);
    }, 3000); // Change every 3 seconds (for testing)

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, []);

  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        {/* Background overlay */}
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        
        {/* Globe and animated lines */}
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>

        {/* Country Name Captions */}
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-20">
          {hoveredCountry && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute text-white font-bold text-xl md:text-2xl"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              {hoveredCountry}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GridGlobe;
