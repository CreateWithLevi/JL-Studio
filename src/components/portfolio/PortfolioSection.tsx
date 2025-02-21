import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  rotation: number;
}

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Use springs for smoother cursor following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  const projects = [
    {
      id: "1",
      title: "Bucket Protocol",
      category: "3D model building, animation",
      image: "/images/Portfolio_img.png",
      rotation: 5,
    },
    {
      id: "2",
      title: "OrbKey",
      category: "Project design, Frontend Development",
      image: "/images/Portfolio_img2.png",
      rotation: -5,
    },
    {
      id: "3",
      title: "Longreach Website",
      category: "Webflow Development",
      image: "/images/Portfolio_img3.png",
      rotation: 5,
    },
    {
      id: "4",
      title: "Forexify",
      category: "Full-Stack Development",
      image: "/images/Portfolio_img4.png",
      rotation: -5,
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Preload images
    const preloadImages = async () => {
      const imagePromises = projects.map((project) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = project.image;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesPreloaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="portfolio" className="relative py-24 bg-black text-white">
      <div className="container mx-auto px-12">
        <h2 className="text-2xl mb-4">Projects</h2>
        {/* Projects List */}
        <div className="space-y-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative border-t border-white/10 pt-8"
              onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
              onMouseLeave={() => !isMobile && setHoveredProject(null)}
            >
              <div className="group cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-4xl font-medium group-hover:text-orange-500 transition-colors sm:text-4xl md:text-5xl lg:text-[4rem]">
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
        <AnimatePresence mode="wait">
          {!isMobile && hoveredProject && imagesPreloaded && (
            <motion.div
              key={hoveredProject}
              initial={{ opacity: 0, scale: 0.8, translateX: '-50%', translateY: '-50%' }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate:
                  projects.find((p) => p.id === hoveredProject)?.rotation || 0,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.2,
                rotate: { type: "spring", stiffness: 200, damping: 30 },
              }}
              className="fixed pointer-events-none z-[100] origin-center"
              style={{
                top: springY,
                left: springX,
              }}
            >
              <motion.div
                className="w-[480px] h-[340px] overflow-hidden rounded-lg"
                layoutId={`project-image-${hoveredProject}`}
              >
                <motion.img
                  src={projects.find((p) => p.id === hoveredProject)?.image}
                  alt="Project Preview"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
