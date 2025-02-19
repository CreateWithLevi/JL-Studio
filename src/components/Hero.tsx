import React from "react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* First Section - Hero with Logo Spline */}
      <div className="h-screen relative">
        {/* Contact Button */}
        <div className="absolute top-32 right-12 z-10 animate-spin-slow">
          <a
            href="mailto:jlstudio.xyz@gmail.com"
            className="block w-40 h-[8.66rem] bg-orange-500 hover:bg-orange-600 transition-colors cursor-pointer"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center pt-20">
              <span className="text-sm font-medium text-white">Contact</span>
              <span className="text-sm font-medium text-white">now!</span>
            </div>
          </a>
        </div>

        {/* Spline Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/pMgWHNDdPCLRhpq4/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center px-12 pointer-events-none">
          {/* Left: Keywords */}
          <div className="text-xl md:text-2xl text-white/80 tracking-wider flex flex-col justify-between h-[8rem] md:h-[24rem] mr-8">
            <span>Creative</span>
            <span>Modern</span>
            <span>Web Design</span>
            <span>3D Modeling</span>
          </div>

          {/* Right: Title (split into three lines) */}
          <div className="flex flex-col justify-between h-[8rem] md:h-[24rem] text-white font-bold text-5xl md:text-[6rem] leading-[1] max-w-[70%]">
            <span>We design</span>
            <span>experiences that</span>
            <span>people remember</span>
          </div>
        </div>
      </div>

      {/* Second Section - Interactive 3D Model */}
      <div className="h-screen relative">
        {/* Spline Scene - Interactive */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/zDQy09CFOetA4HOv/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Transparent Cover with gradient - No pointer events on this layer */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
    </div>
  );
};

export default Hero;
