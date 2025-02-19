import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white px-12 flex flex-col justify-center">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/xWiH2fmwVpivHIY1/scene.splinecode" />
      </div>
      {/* Left Side - Services List */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-sm text-white/60 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Creative Direction
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          3D Modeling
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          Modern Web Design
        </motion.div>
      </div>

      {/* Center - Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[4.5rem] leading-tight font-medium max-w-4xl ml-48 z-10 relative"
      >
        We design experiences that people remember
      </motion.h1>

      {/* About us dot */}
      <div className="absolute bottom-12 right-12 flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-sm text-white/60">About us</span>
      </div>
    </div>
  );
};

export default Hero;
