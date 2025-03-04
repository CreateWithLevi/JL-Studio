import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ScrambleWord } from "../ui/scramble-word";

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
    challenge: "Our challenge was to create a compelling digital presence for OrbKey that would effectively communicate its revolutionary design and functionality. The goal was to design an interactive and visually striking website that showcases the spherical keyboard’s uniqueness, engages potential users, and builds anticipation for a potential product launch.",
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
    description: "Our project aimed to design a high-quality 3D loading animation for the Bucket Protocol website to enhance user engagement during transactions. The goal was to create an animation that aligns with the brand’s identity and strengthens Bucket Protocol’s market presence by improving user experience and brand perception.",
    challenge: "Our goal was to craft a high-quality animation that reduces waiting anxiety, reinforces brand identity, and enhances user engagement while maintaining a clear, sophisticated, and immersive experience.",
    solution: "We created an immersive animation with fluid currency movements and a glowing cup-like logo, reflecting Bucket Protocol’s high-tech aesthetic. Diamond-reflective coins and smooth transitions enhanced realism, making transactions visually engaging and intuitive.",
    results: "The animation enhanced the transaction experience with a seamless, high-tech visual, boosting user engagement and reinforcing trust in Bucket Protocol’s innovation. By transforming waiting time into an engaging experience, the animation added both aesthetic and functional value to the protocol.",
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

  // Use springs for smoother cursor following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300 });

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
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [projects]);

  useEffect(() => {
    if (activeCategory === "All") {
      setProjects(initialProjects);
    } else {
      setProjects(initialProjects.filter(project => project.category.includes(activeCategory)));
    }
  }, [activeCategory, initialProjects]);

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredProject(null);
    }
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-black text-white"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h2 className="text-3xl mb-8">Projects</h2>
          <div className="flex flex-wrap gap-y-4 gap-x-2 md:gap-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${activeCategory === category
                  ? "bg-white text-black"
                  : "bg-white/10 hover:bg-white/20"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-0">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative border-t border-white/10 pt-8 pb-10"
              onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => onProjectSelect(project)}
            >
              <div className="group cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-4xl font-medium group-hover:text-orange-500 transition-colors sm:text-4xl md:text-5xl lg:text-[4rem]">
                    <ScrambleWord
                      text={project.title}
                      trigger={hoveredProject === project.id}
                      duration={500}
                      interval={100}
                    />
                  </h3>
                  <span className={`text-sm text-white/60 ${isMobile ? 'hidden' : ''}`}>
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
        </div>

        {/* Desktop Hover Preview Image */}
        <AnimatePresence mode="wait">
          {!isMobile && hoveredProject && imagesPreloaded && (
            <motion.div
              key={hoveredProject}
              initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
              animate={{
                opacity: 1,
                scale: 1,
                x: "-50%",
                y: "-50%",
                rotate: projects.find((p) => p.id === hoveredProject)?.rotation || 0,
              }}
              exit={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
              transition={{
                duration: 0.15,
                rotate: { type: "spring", stiffness: 200, damping: 30 },
              }}
              className="fixed pointer-events-none z-[100] origin-center"
              style={{
                top: springY,
                left: springX,
              }}
            >
              <motion.div className="w-[480px] h-[340px] overflow-hidden rounded-lg">
                <motion.img
                  src={projects.find((p) => p.id === hoveredProject)?.imageUrl}
                  alt="Project Preview"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
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
