"use client";
import React, { useEffect,useState } from "react";
import { useTheme } from "next-themes";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

   // 👉 CV Modal toggle
  const [showCVModal, setShowCVModal] = useState(false);

  // 👇 Theme toggle logic
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  // ☝️ End theme toggle setup

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* add !cursor-pointer */}
            {/* remove hidden sm:block for the mobile responsive */}
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}

        {/* {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1.5 text-sm rounded-md bg-neutral-800 text-white dark:bg-white dark:text-black transition-colors"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        )} */}

        {/* 📄 CV Button */}
          <button
            onClick={() => setShowCVModal(true)}
            className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
          View CV
        </button>
      </motion.div>
    </AnimatePresence>

      {showCVModal && (
        <div className="fixed inset-0 z-[6000] bg-black bg-opacity-60 flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-neutral-900 p-4 rounded-md shadow-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowCVModal(false)}
              className="absolute top-3 right-3 text-xl text-gray-700 dark:text-gray-200 hover:text-red-500"
            >
              ✕
            </button>

            {/* PDF Preview */}
            <iframe
              src="/rodellalaguna-cv.pdf"
              className="w-full h-full border-none rounded"
              title="CV Preview"
            />
          </div>
        </div>
      )}
      </>
  );
};

