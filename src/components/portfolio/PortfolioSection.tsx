import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrambleWord } from "../ui/scramble-word";
import clsx from "clsx";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string; // Changed from image to imageUrl
  rotation?: number;
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  images?: string[];
  techStack?: string[];
}

interface PortfolioSectionProps {
  initialProjects?: Project[];
  categories?: string[];
  onProjectSelect?: (project: Project | null) => void;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "OrbKey",
    category: "Creative Direction, 3D & Motion, Web Design, Web Development",
    imageUrl: "/images/Portfolio_img-2.png",
    description: "Conventional keyboards have seen little change despite technological advancements. OrbKey reimagines typing with a spherical design that enhances comfort, saves space, and introduces a futuristic aesthetic, all while incorporating cutting-edge connectivity and ergonomics.",
    challenge: "Our challenge was to create a compelling digital presence for OrbKey that would effectively communicate its revolutionary design and functionality. The goal was to design an interactive and visually striking website that showcases the spherical keyboard's uniqueness, engages potential users, and builds anticipation for a potential product launch.",
    solution: "We developed a sleek, modern website featuring an interactive 3D model and an immersive typing animation with sound effects. The minimalist design and dynamic color options enhanced user engagement and showcased the futuristic aesthetic of OrbKey.",
    results: "Although the website was not launched publicly due to OrbKey being a conceptual project, it successfully demonstrated the potential of a spherical keyboard. The interactive experience showcased its futuristic design, sparking discussions and inspiring new ideas in keyboard innovation.",
    images: [
      "/images/Portfolio_img-2.png",
      "/images/Portfolio_img-1.png"
    ],
    techStack: ["React", "TypeScript", "TailwindCSS"],
    rotation: -5
  },
  {
    id: "2",
    title: "Bucket Protocol",
    category: "Creative Direction, 3D & Motion",
    imageUrl: "/images/Portfolio_img-1.png",
    description: "Our project aimed to design a high-quality 3D loading animation for the Bucket Protocol website to enhance user engagement during transactions. The goal was to create an animation that aligns with the brand's identity and strengthens Bucket Protocol's market presence by improving user experience and brand perception.",
    challenge: "Our goal was to craft a high-quality animation that reduces waiting anxiety, reinforces brand identity, and enhances user engagement while maintaining a clear, sophisticated, and immersive experience.",
    solution: "We created an immersive animation with fluid currency movements and a glowing cup-like logo, reflecting Bucket Protocol's high-tech aesthetic. Diamond-reflective coins and smooth transitions enhanced realism, making transactions visually engaging and intuitive.",
    results: "The animation enhanced the transaction experience with a seamless, high-tech visual, boosting user engagement and reinforcing trust in Bucket Protocol's innovation. By transforming waiting time into an engaging experience, the animation added both aesthetic and functional value to the protocol.",
    images: [
      "/images/Portfolio_img-1.png",
      "/images/Portfolio_img-2.png"
    ],
    techStack: ["Spline"],
    rotation: 5
  },
  {
    id: "3",
    title: "Longreach Website",
    category: "Web Development",
    imageUrl: "/images/Portfolio_img-3.png",
    description: "A high-performance, visually striking website for a leading investment firm, focusing on clarity and professional presentation.",
    challenge: "Create a sophisticated yet accessible website that conveys complex financial information while maintaining engagement and quick load times.",
    solution: "Implemented a custom Webflow solution with advanced animations, optimized asset delivery, and a thoughtful information architecture that guides users naturally through the content.",
    results: "The revamped website has significantly enhanced user engagement and the overall design and functionality have led to a marked increase in lead generation compared to the previous version.",
    images: [
      "/images/Portfolio_img-3.png",
      "/images/Portfolio_img-4.png"
    ],
    techStack: ["Webflow", "JavaScript"],
    rotation: 5
  },
  {
    id: "4",
    title: "Forexify",
    category: "Web Design, Web Development",
    imageUrl: "/images/Portfolio_img-4.png",
    description: "A comprehensive forex trading platform that combines real-time data visualization with advanced trading tools.",
    challenge: "Build a high-performance trading platform capable of handling real-time data streams while providing an intuitive interface for complex trading operations.",
    solution: "Developed a scalable architecture using microservices, implemented WebSocket connections for real-time data, and created a modular UI that allows traders to customize their workspace.",
    results: "The platform now features an innovative AI strategy lab that empowers traders with robust customization and backtesting capabilities. Ultimately, driving smarter decision-making and optimized trading performance.",
    images: [
      "/images/Portfolio_img-4.png",
      "/images/Portfolio_img-3.png"
    ],
    techStack: ["Python", "Flask", "Vue.js", "Webflow"],
    rotation: -5
  }
];

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
  initialProjects = defaultProjects,
  categories = ["All", "Creative Direction", "3D & Motion", "Web Design", "Web Development"],
  onProjectSelect = () => { }
}) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState(initialProjects);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right" | string>("initial");

  // Optimized cursor tracking - Keep image near center with slight movement
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Only move image when hovering over a project
    if (!hoveredProject) return;
    
    const projectElement = e.currentTarget;
    if (!projectElement) return;

    // Get project area boundaries (where the mouse is moving)
    const projectRect = projectElement.getBoundingClientRect();
    
    // Calculate mouse position relative to the project area
    const mouseRelativeX = (e.clientX - projectRect.left) / projectRect.width; // 0 to 1
    const mouseRelativeY = (e.clientY - projectRect.top) / projectRect.height; // 0 to 1
    
    // Get viewport dimensions for image positioning
    const viewportWidth = window.innerWidth;
    
    // Calculate base position - Y follows project position, X slightly more left
    const baseX = viewportWidth * 0.62; // Moved left from 0.75 to 0.68
    const baseY = projectRect.top + projectRect.height / 2; // Center of current project
    
    // Convert relative mouse position to image offset
    // When mouse is at left of project (0), image moves left (-offset)
    // When mouse is at right of project (1), image moves right (+offset)
    const maxOffsetX = 80;
    const maxOffsetY = 60;
    
    const offsetX = (mouseRelativeX - 0.5) * 2 * maxOffsetX; // -80 to +80
    const offsetY = (mouseRelativeY - 0.5) * 2 * maxOffsetY; // -60 to +60
    
    // Calculate final position
    const targetX = baseX + offsetX;
    const targetY = baseY + offsetY;
    
    const smoothFactor = 0.12;

    setCursorPosition((prev) => ({
      x: prev.x + (targetX - prev.x) * smoothFactor,
      y: prev.y + (targetY - prev.y) * smoothFactor,
    }));
  }, [hoveredProject]);

  // Direction-aware mouse enter - Fixed to work for all projects
  const handleMouseEnter = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>, projectId: string) => {
    if (isMobile) return;
    if (event.currentTarget) {
      setDirection(getDirection(event, event.currentTarget));
    }
    setHoveredProject(projectId);
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setHoveredProject(null);
      setDirection("initial");
    }
  }, [isMobile]);

  // Memoized current project
  const currentHoveredProject = useMemo(() => 
    projects.find((p) => p.id === hoveredProject), 
    [projects, hoveredProject]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Preload images
    const preloadImages = async () => {
      const imagePromises = projects.map((project) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = project.imageUrl;
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

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [projects]);

  useEffect(() => {
    if (activeCategory === "All") {
      setProjects(initialProjects);
    } else {
      setProjects(initialProjects.filter(project => project.category.includes(activeCategory)));
    }
  }, [activeCategory, initialProjects]);

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
              onMouseEnter={(e) => handleMouseEnter(e, project.id)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Hover Preview Image - Fixed positioning */}
        <AnimatePresence mode="wait">
          {!isMobile && hoveredProject && imagesPreloaded && currentHoveredProject && (
            <motion.div
              key={hoveredProject}
              className="pointer-events-none fixed inset-0 z-[100] hidden lg:block"
              style={{
                translateX: cursorPosition.x - 270 + translateLeftInverse + translateRightInverse,
                translateY: cursorPosition.y - 192 + translateTopInverse + translateBottomInverse,
              }}
            >
              <motion.div className="w-[540px] h-[384px] overflow-hidden shadow-2xl">
                <motion.img
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  src={currentHoveredProject.imageUrl}
                  alt={currentHoveredProject.title}
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
