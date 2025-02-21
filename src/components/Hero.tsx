import React, { useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { ScrambleWord } from "./ui/scramble-word";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/xWiH2fmwVpivHIY1/scene.splinecode" />
      </div>

      {/* Center - Main Heading with Scramble Effect on hover for each word */}
      <div className="container mx-auto px-12 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[1000px] text-6xl leading-tight font-medium sm:text-8xl md:text-9xl lg:text-[9rem]"
        >
          <ScrambleWord text="We" className="mr-2 inline-block pr-4" />
          <ScrambleWord text="design" className="mr-2 inline-block" />
          <span className="relative inline-block mr-2">
            <ScrambleWord text="experiences" />
            <motion.img
              src="/images/spinning_obj2.svg"
              alt="Spinning Object 2"
              className="absolute w-16 h-16"
              style={{ top: "8px", right: "-24px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </span>
          <br />
          <ScrambleWord text="that" className="mr-2 inline-block pr-4" />
          <span className="relative inline-block mr-2">
            <ScrambleWord text="people" />
            <motion.img
              src="/images/spinning_obj1.svg"
              alt="Spinning Object 1"
              className="absolute w-16 h-16"
              style={{ bottom: "-16px", left: "-32px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </span>
          <ScrambleWord text="remember" className="ml-2 inline-block" />
        </motion.h1>

        {/* Services List */}
        <div className="flex flex-wrap gap-4 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-6 py-2 rounded-full border border-white/20 text-white/60 text-sm"
          >
            Creative Direction
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-6 py-2 rounded-full border border-white/20 text-white/60 text-sm"
          >
            Modern Web Design
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-6 py-2 rounded-full border border-white/20 text-white/60 text-sm"
          >
            3D Modeling
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-6 py-2 rounded-full border border-white/20 text-white/60 text-sm"
          >
            Web Development
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
