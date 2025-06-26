import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./layout/Navbar";
import Hero from "./Hero";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import Services from "./sections/Services";
import PortfolioSection from "./portfolio/PortfolioSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CaseStudyModal from "./portfolio/CaseStudyModal";
import { getPageConfig } from "./portfolio/ProjectConfig";

const Home = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // 獲取 JL Studio 的項目配置
  const jlStudioConfig = getPageConfig("jl-studio");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Navbar
        isEnglish={isEnglish}
        onLanguageToggle={() => setIsEnglish(!isEnglish)}
      />
      <Hero />
      <PortfolioSection 
        customProjectOrder={jlStudioConfig.projects}
        categories={jlStudioConfig.categories}
        onProjectSelect={setSelectedProject} 
      />
      <Services />
      <Contact />
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

export default Home;
