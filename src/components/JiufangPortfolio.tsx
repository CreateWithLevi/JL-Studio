import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./layout/Navbar";
import PortfolioSection from "./portfolio/PortfolioSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CaseStudyModal from "./portfolio/CaseStudyModal";
import DynamicHeroBackground from "./ui/DynamicHeroBackground";

const JiufangPortfolio = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // Custom categories with Web Design highlighted
  const designCategories = ["All", "Web Design", "Creative Direction", "3D & Motion", "Web Development"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Navbar
        isEnglish={isEnglish}
        onLanguageToggle={() => setIsEnglish(!isEnglish)}
        hideService
      />
      
      {/* Hero section for Jiufang portfolio */}
      <section className="relative w-full h-screen bg-black text-white flex flex-col justify-center overflow-hidden">
        <DynamicHeroBackground />
        <div className="container mx-auto px-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-orange-500">Jiu Fang Lin</span>
              <br />
              Web Designer
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Creating stunning visual experiences and intuitive user interfaces that captivate and engage audiences across digital platforms.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {["UI/UX Design", "Prototyping", "Branding", "Figma", "Spline", "Blender", "Webflow"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 rounded-full border border-white/20 text-white/60 text-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              onClick={() => {
                const element = document.getElementById("portfolio");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105"
            >
              View Design Work
            </motion.button>
          </motion.div>
        </div>

        {/* Animated background elements */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-40 h-40 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-28 h-28 border border-orange-500/20 rounded-full"
          />
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/5 rounded-full"
          />
        </div> */}
      </section>

      <PortfolioSection 
        onProjectSelect={setSelectedProject}
        categories={designCategories}
        filterByContributor="Jiu Fang Lin"
      />
      <Contact hideService />
      <Footer />

      {selectedProject && (
        <CaseStudyModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </motion.div>
  );
};

export default JiufangPortfolio; 