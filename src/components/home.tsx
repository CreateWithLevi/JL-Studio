import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./layout/Navbar";
import Hero from "./Hero";
import Stats from "./sections/Stats";
import Services from "./sections/Services";
import PortfolioSection from "./portfolio/PortfolioSection";

import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CaseStudyModal from "./portfolio/CaseStudyModal";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  images?: string[];
}

const Home = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "Modern Brand Identity",
      category: "Branding",
      imageUrl:
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800",
      description:
        "A comprehensive brand identity project for a modern tech company.",
      challenge:
        "Create a distinctive and versatile brand identity that reflects the company's innovative approach.",
      solution:
        "Developed a minimalist geometric logo system with a dynamic color palette.",
      results: "Increased brand recognition by 40% across all channels.",
      images: [
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800",
      ],
    },
    {
      id: "2",
      title: "Mobile App Design",
      category: "UI/UX",
      imageUrl:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
      description:
        "User interface design for a revolutionary mobile application.",
      challenge: "Design an intuitive and engaging mobile experience.",
      solution:
        "Created a clean, user-focused interface with smooth interactions.",
      results: "Achieved 95% user satisfaction rate in initial testing.",
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800",
      ],
    },
    {
      id: "3",
      title: "Product Packaging",
      category: "Print",
      imageUrl:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800",
      description: "Innovative packaging design for a premium product line.",
      challenge: "Create packaging that stands out on retail shelves.",
      solution:
        "Developed unique, sustainable packaging with striking visuals.",
      results: "30% increase in shelf visibility and sales.",
      images: [
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800",
        "https://images.unsplash.com/photo-1577280367125-6dbd2c9f6844?w=800",
      ],
    },
  ];

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
        initialProjects={defaultProjects}
        categories={["All", "Branding", "UI/UX", "Print", "Digital", "Motion"]}
      />
      <Services />
      <Stats />

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
