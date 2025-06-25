import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { ScrambleWord } from "../ui/scramble-word";
import clsx from "clsx";
import { allProjects } from "./ProjectConfig";

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string; // Changed from image to imageUrl
  rotation?: number;
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  design_challenge?: string;
  design_solution?: string;
  design_results?: string;
  development_challenge?: string;
  development_solution?: string;
  development_results?: string;
  images?: string[];
  techStack?: string[];
  contributors?: string[]; // 參與人列表
}

interface PortfolioSectionProps {
  initialProjects?: Project[];
  categories?: string[];
  onProjectSelect?: (project: Project | null) => void;
  filterByContributor?: string; // 新增：按參與人過濾
  customProjectOrder?: Project[]; // 新增：自定義項目順序
}

// Direction detection function
const getDirection = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>, obj: HTMLElement) => {
  const { width: w, height: h, left, top } = obj.getBoundingClientRect();

  const centerX = left + w / 2;
  const centerY = top + h / 2;

  const xOffset = ev.clientX - centerX;
  const yOffset = ev.clientY - centerY;

  const angleDegrees = Math.atan2(yOffset, xOffset) * (180 / Math.PI);
  const adjustedAngle = angleDegrees < 0 ? angleDegrees + 360 : angleDegrees;

  if (adjustedAngle >= 315 || adjustedAngle < 45) {
    return "right";
  } else if (adjustedAngle >= 45 && adjustedAngle < 135) {
    return "bottom";
  } else if (adjustedAngle >= 135 && adjustedAngle < 225) {
    return "left";
  } else {
    return "top";
  }
};

// Image animation variants
const imageVariants = {
  initial: {
    x: 0,
    y: 0,
    scale: 0.9,
    opacity: 0,
  },
  top: {
    y: 25,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.6,
    },
  },
  bottom: {
    y: -25,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.6,
    },
  },
  left: {
    x: 25,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.6,
    },
  },
  right: {
    x: -25,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.6,
    },
  },
};

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  initialProjects = allProjects,
  categories = ["All", "Creative Direction", "3D & Motion", "Web Design", "Web Development"],
  onProjectSelect = () => { },
  filterByContributor,
  customProjectOrder
}) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  
  // Always start with "All" category - no auto-focus
  const [activeCategory, setActiveCategory] = useState("All");
  
  // 使用自定義項目順序或原有過濾邏輯
  const baseProjects = useMemo(() => {
    if (customProjectOrder) {
      return customProjectOrder;
    }
    return filterByContributor 
      ? initialProjects.filter(project => 
          project.contributors && project.contributors.includes(filterByContributor)
        )
      : initialProjects;
  }, [initialProjects, filterByContributor, customProjectOrder]);
  
  const [projects, setProjects] = useState(baseProjects);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right" | string>("initial");

  const handleMouseEnter = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMobile || !event.currentTarget) return;
    setDirection(getDirection(event, event.currentTarget));
  }, [isMobile]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMobile) return;
    
    const container = e.currentTarget;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    // Set boundaries for image positioning
    const leftBoundary = viewportWidth * 0.5;
    const rightBoundary = viewportWidth * 0.8;
    
    const clampedX = Math.max(leftBoundary, Math.min(rightBoundary, e.clientX));
    const smoothFactor = 0.12;

    setCursorPosition((prev) => ({
      x: prev.x + (clampedX - prev.x) * smoothFactor,
      y: prev.y + (e.clientY - prev.y) * smoothFactor,
    }));
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setHoveredProject(null);
      setDirection("initial");
    }
  }, [isMobile]);

  const getProjectHoverHandler = useCallback((projectId: string) => () => {
    if (!isMobile) {
      setHoveredProject(projectId);
    }
  }, [isMobile]);

  // Memoized current project
  const currentHoveredProject = useMemo(() => 
    projects.find((p) => p.id === hoveredProject), 
    [projects, hoveredProject]
  );

  // Separate useEffect for mobile detection and resize handling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); // Empty dependency array since we only want this to run once

  // Separate useEffect for image preloading
  useEffect(() => {
    const preloadImages = async () => {
      if (projects.length === 0) return;
      
      const imagePromises = projects.map((project) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => reject();
          img.src = project.imageUrl;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesPreloaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        // Set as preloaded even if some images fail to prevent infinite loading
        setImagesPreloaded(true);
      }
    };

    setImagesPreloaded(false); // Reset when projects change
    preloadImages();
  }, [projects]); // Only depend on projects

  // Update projects when category or base projects change
  useEffect(() => {
    if (activeCategory === "All") {
      setProjects(baseProjects);
    } else {
      setProjects(baseProjects.filter(project => project.category.includes(activeCategory)));
    }
  }, [activeCategory, baseProjects]);

  // Calculate direction-based offset
  const translateTopInverse = direction === "top" ? -25 : 0;
  const translateBottomInverse = direction === "bottom" ? 25 : 0;
  const translateLeftInverse = direction === "left" ? -25 : 0;
  const translateRightInverse = direction === "right" ? 25 : 0;

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-black text-white"
    >
      <div className="container mx-auto px-6 lg:px-12" onMouseMove={handleMouseMove}>
        <div className="mb-12">
          <h2 className="text-3xl mb-8">Projects</h2>
          <div className="flex flex-wrap gap-y-4 gap-x-2 md:gap-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${activeCategory === category
                  ? "bg-white text-black"
                  : "bg-white/10 hover:bg-white/20"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial="initial"
          whileHover={direction}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={clsx(
                "relative border-t border-white/10 pt-8 pb-10 cursor-pointer transition-colors duration-300",
                {
                  "lg:text-white/20": hoveredProject !== project.id && hoveredProject !== null,
                  "lg:text-white": hoveredProject === project.id || hoveredProject === null,
                }
              )}
              onMouseEnter={getProjectHoverHandler(project.id)}
              onClick={() => onProjectSelect(project)}
            >
              <div className="group">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <p className="mr-6 md:mr-8 text-xl font-bold md:text-2xl text-white/40">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-4xl font-medium group-hover:text-orange-500 transition-colors duration-300 ease-out sm:text-4xl md:text-5xl lg:text-[4rem]">
                      <ScrambleWord
                        text={project.title}
                        trigger={hoveredProject === project.id}
                        duration={500}
                        interval={100}
                      />
                    </h3>
                  </div>
                  <span className={`text-sm text-white/60 transition-opacity duration-200 ${isMobile ? 'hidden' : ''}`}>
                    {project.category}
                  </span>
                </div>

                {isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-full h-auto mt-6 overflow-hidden rounded-lg"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}

                {/* Desktop Hover Preview Image */}
                {!isMobile && imagesPreloaded && (
                  <motion.div
                    className={clsx(
                      "pointer-events-none fixed z-[100] hidden lg:block max-w-[640px] max-h-[360px]",
                      {
                        "opacity-100": hoveredProject === project.id,
                        "opacity-0": hoveredProject !== project.id,
                      }
                    )}
                    style={{
                      left: Math.max(0, Math.min(window.innerWidth - 640, cursorPosition.x - 320 + translateLeftInverse + translateRightInverse)),
                      top: Math.max(0, Math.min(window.innerHeight - 360, cursorPosition.y - 180 + translateTopInverse + translateBottomInverse)),
                      width: Math.min(640, window.innerWidth),
                      height: Math.min(360, window.innerHeight),
                    }}
                  >
                    <motion.div className="w-full h-full overflow-hidden shadow-2xl">
                      <motion.img
                        className="w-full h-full object-cover"
                        variants={imageVariants}
                        src={project.imageUrl}
                        alt={project.title}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
