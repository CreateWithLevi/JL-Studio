import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { ScrambleWord } from "./ui/scramble-word";

// 浮動粒子組件 - 增強可見度
const FloatingParticle = ({ delay = 0, size = 2, color = "white", duration = 20, initialPosition }) => {
  return (
    <motion.div
      className={`absolute rounded-full`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: initialPosition.x,
        top: initialPosition.y,
        background: color === "orange" 
          ? "radial-gradient(circle, #ff6500 0%, #ff9500 100%)"
          : "radial-gradient(circle, #ffffff 0%, #cccccc 100%)",
        boxShadow: color === "orange" 
          ? "0 0 20px #ff650077, 0 0 40px #ff650038"
          : "0 0 15px #ffffff77, 0 0 30px #ffffff38",
      }}
      animate={{
        y: [-40, 40, -40],
        x: [-30, 30, -30],
        opacity: [0.42, 0.7, 0.42],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

// 漸變光球組件 - 增強亮度
const GlowOrb = ({ size, color, position, duration = 30 }) => {
  return (
    <motion.div
      className={`absolute rounded-full`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color}59 0%, ${color}2c 30%, transparent 70%)`,
        left: position.x,
        top: position.y,
        filter: "blur(20px)",
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.49, 0.7, 0.49],
        x: [0, 80, 0],
        y: [0, -50, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// 幾何形狀組件 - 增強可見度
const GeometricShape = ({ shape, size, position, rotationSpeed = 20 }) => {
  const shapeStyles = {
    triangle: "clip-path: polygon(50% 0%, 0% 100%, 100% 100%)",
    diamond: "clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    hexagon: "clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  };

  return (
    <motion.div
      className="absolute"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: position.x,
        top: position.y,
        clipPath: shapeStyles[shape] || undefined,
        background: "linear-gradient(45deg, #ff650044, #ffffff38)",
        border: "2px solid rgba(255, 165, 0, 0)",
        boxShadow: "0 0 30px rgba(255, 165, 0, 0.28)",
      }}
      animate={{
        rotate: 360,
        scale: [1, 1.3, 1],
        opacity: [0.42, 0.7, 0.42],
      }}
      transition={{
        rotate: {
          duration: rotationSpeed,
          repeat: Infinity,
          ease: "linear",
        },
        scale: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  );
};

// 新增：動態光線組件
const DynamicBeam = ({ startPosition, endPosition, delay = 0 }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        width: "2px",
        height: "200px",
        background: "linear-gradient(180deg, transparent 0%, #ff650077 50%, transparent 100%)",
        left: startPosition.x,
        top: startPosition.y,
        transformOrigin: "top center",
      }}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{
        opacity: [0, 0.7, 0],
        scaleY: [0, 1, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

const Hero = () => {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // 生成穩定的粒子配置
  const particleConfigs = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      delay: i * 0.3,
      size: Math.random() * 8 + 4,
      color: i % 2 === 0 ? "orange" : "white",
      duration: 10 + Math.random() * 8,
      initialPosition: {
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
      },
    }));
  }, []);

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

  // 鼠標追蹤效果
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={heroRef} className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center overflow-hidden">
      {/* 動態背景層 - 增強可見度 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 動態漸變背景 - 更強烈 */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(255, 165, 0, 0.105) 0%, 
              rgba(255, 255, 255, 0.035) 30%, 
              transparent 60%)`,
          }}
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255, 165, 0, 0.105) 0%, transparent 60%)",
              "radial-gradient(circle at 80% 30%, rgba(255, 165, 0, 0.14) 0%, transparent 60%)",
              "radial-gradient(circle at 40% 80%, rgba(255, 165, 0, 0.105) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 浮動粒子 - 更大更亮 */}
        {particleConfigs.map((config, i) => (
          <FloatingParticle
            key={`particle-${i}`}
            delay={config.delay}
            size={config.size}
            color={config.color}
            duration={config.duration}
            initialPosition={config.initialPosition}
          />
        ))}

        {/* 漸變光球 - 更大更亮 */}
        <GlowOrb
          size={300}
          color="#ff6500"
          position={{ x: "5%", y: "15%" }}
          duration={20}
        />
        <GlowOrb
          size={250}
          color="#ffffff"
          position={{ x: "75%", y: "65%" }}
          duration={25}
        />
        <GlowOrb
          size={200}
          color="#ff6500"
          position={{ x: "55%", y: "5%" }}
          duration={30}
        />
        <GlowOrb
          size={180}
          color="#ffffff"
          position={{ x: "85%", y: "85%" }}
          duration={22}
        />

        {/* 幾何形狀 - 更大更明顯 */}
        <GeometricShape
          shape="triangle"
          size={80}
          position={{ x: "10%", y: "55%" }}
          rotationSpeed={20}
        />
        <GeometricShape
          shape="diamond"
          size={70}
          position={{ x: "80%", y: "25%" }}
          rotationSpeed={25}
        />
        <GeometricShape
          shape="hexagon"
          size={90}
          position={{ x: "65%", y: "75%" }}
          rotationSpeed={15}
        />
        <GeometricShape
          shape="triangle"
          size={60}
          position={{ x: "30%", y: "10%" }}
          rotationSpeed={30}
        />

        {/* 動態光線 */}
        <DynamicBeam
          startPosition={{ x: "20%", y: "30%" }}
          endPosition={{ x: "60%", y: "70%" }}
          delay={0}
        />
        <DynamicBeam
          startPosition={{ x: "70%", y: "20%" }}
          endPosition={{ x: "30%", y: "80%" }}
          delay={1.5}
        />
        <DynamicBeam
          startPosition={{ x: "85%", y: "60%" }}
          endPosition={{ x: "20%", y: "40%" }}
          delay={3}
        />

        {/* 動態網格線 - 更明顯 */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,165,0,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,165,0,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* 鼠標跟隨光暈 - 更強烈 */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255, 165, 0, 0.14) 0%, rgba(255, 165, 0, 0.07) 40%, transparent 70%)",
            left: -250,
            top: -250,
          }}
          animate={{
            x: mousePosition.x * window.innerWidth || 0,
            y: mousePosition.y * window.innerHeight || 0,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 150,
          }}
        />

        {/* 動態波紋效果 - 更明顯 */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "200px",
            height: "200px",
            border: "2px solid rgba(255, 165, 0, 0.28)",
            borderRadius: "50%",
          }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "200px",
            height: "200px",
            border: "2px solid rgba(255, 255, 255, 0.21)",
            borderRadius: "50%",
          }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.56, 0, 0.56],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2,
          }}
        />

        {/* 新增：脈衝效果 */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          style={{
            width: "100px",
            height: "100px",
            background: "radial-gradient(circle, rgba(255, 165, 0, 0.42) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(10px)",
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.56, 0.21, 0.56],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4"
          style={{
            width: "80px",
            height: "80px",
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(8px)",
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.42, 0.14, 0.42],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      {/* 底部漸層遮罩 - 平滑過渡到下一個section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%)"
          }}
        />
      </div>

      {/* Spline Background - Lazy loaded */}
      {/* <div className="absolute inset-0 z-0 pointer-events-auto"> 
        {shouldLoadSpline && (
          <Spline
            scene="https://prod.spline.design/0G-53mF0OLb9dkfQ/scene.splinecode"
            className="w-full h-full"
          />
        )}
      </div>*/}

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
