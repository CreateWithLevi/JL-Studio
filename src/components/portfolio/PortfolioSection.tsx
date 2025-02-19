import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
}

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

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
    <section id="portfolio" className="relative py-24 bg-black text-white">
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
              className="fixed top-0 left-0 pointer-events-none z-[100]"
              style={{
                transform: `translate(${mouseX.get()}px, ${mouseY.get()}px) translate(-50%, -50%) rotate(${projects.find((p) => p.id === hoveredProject)?.rotation}deg)`,
              }}
            >
              <div className="w-[360px] h-[256px]">
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
