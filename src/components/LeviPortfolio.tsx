import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./layout/Navbar";
import PortfolioSection from "./portfolio/PortfolioSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CaseStudyModal from "./portfolio/CaseStudyModal";
import DynamicHeroBackground from "./ui/DynamicHeroBackground";

const LeviPortfolio = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // Custom categories with Web Development highlighted
  const devCategories = ["All", "Web Development", "Creative Direction", "3D & Motion", "Web Design"];

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
      
      {/* Hero section for Levi portfolio */}
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
              <span className="text-orange-500">Levi Huang</span>
              <br />
              Full-Stack Developer
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From SaaS platforms to AI-driven financial tools, I specialize in transforming complex business logic into high-performance, user-centric digital products.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {["React", "Vue.js", "TypeScript", "Python", "PHP", "GCP", "AI Integration"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 rounded-full border border-white/20 text-white/60 text-sm"
                >
                  {tech}
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
              View Projects
            </motion.button>
          </motion.div>
        </div>

        {/* Animated background elements */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-24 h-24 border border-orange-500/20 rounded-full"
          />
        </div> */}
      </section>

      <PortfolioSection 
        onProjectSelect={setSelectedProject}
        categories={devCategories}
        filterByContributor="Levi Huang"
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

export default LeviPortfolio; 