import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
}

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: "1",
      title: "Bucket Protocol",
      category: "3D model building, animation",
    },
    {
      id: "2",
      title: "Longreach Company Website",
      category: "Webflow Development",
    },
    {
      id: "3",
      title: "Forexify",
      category: "Full-Stack Development",
    },
  ];

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-12">
        {/* Projects Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-medium mb-12"
        >
          Projects
        </motion.h2>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative border-b border-white/10 pb-12"
              onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
              onMouseLeave={() => !isMobile && setHoveredProject(null)}
            >
              <div className="group cursor-pointer">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[3.5rem] font-medium group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-white/60">
                    {project.category}
                  </span>
                </div>
                {/* Mobile Image */}
                {isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-full aspect-video mt-6 overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/Portfolio_img.png"
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12"
        >
          <h3 className="text-[3.5rem] font-medium hover:text-orange-500 transition-colors cursor-pointer">
            All of Our Work
          </h3>
        </motion.div>

        {/* Desktop Hover Preview Image */}
        <AnimatePresence>
          {!isMobile && hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
            >
              <div className="w-[800px] aspect-video">
                <img
                  src="/images/Portfolio_img.png"
                  alt="Project Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
