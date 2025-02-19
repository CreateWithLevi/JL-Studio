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
      image: "/images/Portfolio_img.png",
      rotation: 10,
    },
    {
      id: "2",
      title: "OrbKey",
      category: "Project design, Frontend Development",
      image: "/images/Portfolio_img2.png",
      rotation: -12,
    },
    {
      id: "3",
      title: "Longreach Website",
      category: "Webflow Development",
      image: "/images/Portfolio_img3.png",
      rotation: 15,
    },
    {
      id: "4",
      title: "Forexify",
      category: "Full-Stack Development",
      image: "/images/Portfolio_img4.png",
      rotation: -8,
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
                    className="w-[360px] h-[256px] mt-6 overflow-hidden rounded-lg"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Hover Preview Image */}
        <AnimatePresence>
          {!isMobile && hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute pointer-events-none z-50 left-1/2 -translate-x-1/2"
              style={{
                perspective: "1000px",
                top: `${projects.findIndex((p) => p.id === hoveredProject) * 160 + 60}px`,
              }}
            >
              <div
                className="w-[360px] h-[256px]"
                style={{
                  transform: `rotate(${projects.find((p) => p.id === hoveredProject)?.rotation}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <img
                  src={projects.find((p) => p.id === hoveredProject)?.image}
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
