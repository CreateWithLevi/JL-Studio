import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { ScrambleWord } from "./ui/scramble-word";

const Hero = () => {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadSpline(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center">
      {/* Spline Background - Lazy loaded */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        {shouldLoadSpline && (
          <Spline
            scene="https://prod.spline.design/0G-53mF0OLb9dkfQ/scene.splinecode"
            className="w-full h-full"
          />
        )}
      </div>

      {/* Center - Main Heading with Scramble Effect on hover for each word */}
      <div className="container mx-auto px-12 z-10 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[1000px] text-[3.5rem] leading-tight font-medium sm:text-[5rem] md:text-[6rem] lg:text-[8rem]"
        >
          <ScrambleWord text="We" className="mr-2 inline-block pr-2 md:pr-4" />
          <ScrambleWord text="design" className="mr-2 inline-block" />
          <span className="relative inline-block mr-2">
            <ScrambleWord text="experiences" />
            <motion.img
              src="/images/spinning_obj2.svg"
              alt="Spinning Object 2"
              className="absolute w-8 sm:w-12 md:w-14 lg:w-16"
              style={{ top: "8px", right: "-24px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </span>
          <br />
          <span className="relative inline-block -mr-4">
            <ScrambleWord text="people" />
            <motion.img
              src="/images/spinning_obj1.svg"
              alt="Spinning Object 1"
              className="absolute w-8 sm:w-12 md:w-14 lg:w-16"
              style={{ bottom: "-16px", left: "-32px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </span>
          <img
            src="/images/hero_gif.gif"
            alt="That"
            className="mr-2 inline-block pr-2 md:pr-4 h-[3.5rem] sm:h-[5rem] md:h-[6rem] lg:h-[8rem]"
            style={{ imageRendering: "auto" }}
          />
          <ScrambleWord text="remember" className="ml-2 inline-block" />
        </motion.h1>

        {/* Services List */}
        <div className="flex flex-wrap gap-y-4 gap-x-2 md:gap-x-4 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4 md:px-6 py-2 rounded-full border border-white/20 text-white/60 text-sm"
          >
            Creative Direction
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-4 md:px-6 py-2 rounded-full border border-white/20 text-white/60 text-sm"
          >
            3D & Motion
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-4 md:px-6 py-2 rounded-full border border-white/20 text-white/60 text-sm"
          >
            Web Design
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-4 md:px-6 py-2 rounded-full border border-white/20 text-white/60 text-sm"
          >
            Web Development
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
