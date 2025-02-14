import React from "react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* First Section - Hero with Logo Spline */}
      <div className="h-screen relative">
        {/* Spline Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/IwpJXD1EY4XiQChB/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Empty Transparent Cover - No pointer events */}
        <div className="absolute inset-0 pointer-events-none" />
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
