import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
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
  contributors?: string[]; // 參與人列表
}

interface PortfolioSectionProps {
  initialProjects?: Project[];
  categories?: string[];
  onProjectSelect?: (project: Project | null) => void;
  filterByContributor?: string; // 新增：按參與人過濾
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Forexify",
    category: "Web Design, Web Development",
    imageUrl: "/images/Portfolio_img/Forexify.jpg",
    description: "A comprehensive forex trading platform that combines real-time data visualization with advanced trading tools and AI-powered strategy development.",
    challenge: "Build a high-performance trading platform capable of handling real-time data streams while providing an intuitive interface for complex trading operations and backtesting capabilities.",
    solution: "Developed a scalable architecture using microservices, implemented WebSocket connections for real-time data, and created a modular UI that allows traders to customize their workspace with advanced charting tools.",
    results: "The platform now features an innovative AI strategy lab that empowers traders with robust customization and backtesting capabilities. Ultimately, driving smarter decision-making and optimized trading performance with significant user engagement improvements.",
    images: [
      "/images/Portfolio_img/Forexify.jpg"
    ],
    techStack: ["Vue.js", "Python", "Flask", "AI/ML", "Figma", "Webflow", "Relume"],
    contributors: ["Levi Huang"]
  },
  {
    id: "2",
    title: "Templeify",
    category: "Web Design, Web Development",
    imageUrl: "/images/Portfolio_img/Templeify.jpg",
    description: "A spiritual and cultural platform connecting communities with temple services, events, and educational resources through modern digital experiences.",
    challenge: "Create a respectful and accessible digital platform that honors traditional values while providing modern functionality for temple management and community engagement.",
    solution: "Designed an intuitive platform featuring event management, donation systems, prayer scheduling, and educational content with culturally appropriate visual design.",
    results: "Enhanced community engagement by 200% and streamlined temple operations, making spiritual services more accessible to both local and global communities.",
    images: [
      "/images/Portfolio_img/Templeify.jpg"
    ],
    techStack: ["JavaScript", "PHP", "Payment Integration", "Figma", "Webflow"],
    contributors: ["Levi Huang"]
  },
  {
    id: "3",
    title: "Apparel X",
    category: "Web Development",
    imageUrl: "/images/Portfolio_img/Apparel X.jpg",
    description: "A cutting-edge fashion e-commerce platform that revolutionizes online shopping through immersive AR try-on experiences and personalized styling recommendations.",
    challenge: "Create an innovative online fashion platform that bridges the gap between physical and digital shopping experiences while maintaining high performance and user engagement.",
    solution: "Developed an interactive platform featuring AR virtual try-on technology, AI-powered styling recommendations, and seamless checkout processes with dynamic product visualization.",
    results: "The platform achieved a 40% increase in conversion rates and 60% reduction in return rates through enhanced user experience and virtual try-on capabilities.",
    images: [
      "/images/Portfolio_img/Apparel X.jpg"
    ],
    techStack: ["PHP", "jQuery", "GCP"],
    contributors: ["Levi Huang"]
  },
  {
    id: "4",
    title: "We Are Enough",
    category: "Web Design, Web Development",
    imageUrl: "/images/Portfolio_img/We Are Enough.jpg",
    description: "The complete website implementation for the We Are Enough campaign, featuring interactive elements and comprehensive mental wellness resources.",
    challenge: "Transform the brand identity into a fully functional, accessible website that effectively delivers mental wellness content and community support features.",
    solution: "Developed a comprehensive website with interactive wellness tools, community forums, resource libraries, and personalized mental health tracking capabilities.",
    results: "The website facilitated over 50,000 wellness interactions and became a trusted resource for mental health support, significantly expanding the campaign's reach and impact.",
    images: [
      "/images/Portfolio_img/We Are Enough.jpg"
    ],
    techStack: ["Figma", "Vue.js", "Lavarel", "GSAP"],
    contributors: ["Levi Huang", "Jiu Fang Lin"]
  },
  {
    id: "5",
    title: "The Longreach Group",
    category: "Web Development",
    imageUrl: "/images/Portfolio_img/The Longreach Group.jpg",
    description: "A high-performance, visually striking website for a leading investment firm, focusing on clarity and professional presentation.",
    challenge: "Create a sophisticated yet accessible website that conveys complex financial information while maintaining engagement and quick load times.",
    solution: "Implemented a custom Webflow solution with advanced animations, optimized asset delivery, and a thoughtful information architecture that guides users naturally through the content.",
    results: "The revamped website has significantly enhanced user engagement and the overall design and functionality have led to a marked increase in lead generation compared to the previous version.",
    images: [
      "/images/Portfolio_img/The Longreach Group.jpg"
    ],
    techStack: ["Webflow", "Finsweet CMS", "Custom Code"],
    contributors: ["Levi Huang"]
  },
  {
    id: "6",
    title: "Chillr",
    category: "Creative Direction, 3D & Motion, Web Design, Web Development",
    imageUrl: "/images/Portfolio_img/Chillr.gif",
    description: "A modern lifestyle brand focusing on relaxation and mindfulness, featuring immersive 3D experiences and calming visual narratives.",
    challenge: "Create a digital presence that embodies tranquility and relaxation while maintaining user engagement through innovative 3D interactions and smooth animations.",
    solution: "Developed an immersive web experience with fluid 3D animations, ambient soundscapes, and intuitive navigation that guides users through a calming digital journey.",
    results: "The platform successfully created a unique digital sanctuary that increased user session time by 200% and became a reference point for wellness-focused web design.",
    images: [
      "/images/Portfolio_img/Chillr.gif"
    ],
    techStack: ["Spline", "React", "Framer Motion"],
    contributors: ["Jiu Fang Lin", "Levi Huang"]
  },
  {
    id: "7",
    title: "zuoluh",
    category: "Creative Direction",
    imageUrl: "/images/Portfolio_img/zuoluh.jpg",
    description: "A creative digital studio platform showcasing innovative design solutions and artistic collaborations with a focus on experimental visual narratives.",
    challenge: "Develop a unique digital presence that reflects the studio's experimental approach while maintaining professional credibility and showcasing diverse creative work.",
    solution: "Built an interactive portfolio platform with experimental layouts, dynamic content presentation, and immersive project showcases that reflect the studio's creative philosophy.",
    results: "The platform increased client inquiries by 300%, won several design awards, and established the studio as a leader in experimental digital design.",
    images: [
      "/images/Portfolio_img/zuoluh.jpg"
    ],
    techStack: ["AutoCAD", "Affinity Designer", "Figma"],
    contributors: ["Jiu Fang Lin"]
  },
  {
    id: "8",
    title: "Bucket Protocol",
    category: "Creative Direction, 3D & Motion",
    imageUrl: "/images/Portfolio_img/Bucket Protocol.jpg",
    description: "Our project aimed to design a high-quality 3D loading animation for the Bucket Protocol website to enhance user engagement during transactions. The goal was to create an animation that aligns with the brand's identity and strengthens Bucket Protocol's market presence by improving user experience and brand perception.",
    challenge: "Our goal was to craft a high-quality animation that reduces waiting anxiety, reinforces brand identity, and enhances user engagement while maintaining a clear, sophisticated, and immersive experience.",
    solution: "We created an immersive animation with fluid currency movements and a glowing cup-like logo, reflecting Bucket Protocol's high-tech aesthetic. Diamond-reflective coins and smooth transitions enhanced realism, making transactions visually engaging and intuitive.",
    results: "The animation enhanced the transaction experience with a seamless, high-tech visual, boosting user engagement and reinforcing trust in Bucket Protocol's innovation. By transforming waiting time into an engaging experience, the animation added both aesthetic and functional value to the protocol.",
    images: [
      "/images/Portfolio_img/Bucket Protocol.jpg"
    ],
    techStack: ["Spline", "3D Animation"],
    contributors: ["Jiu Fang Lin"]
  },
  {
    id: "9",
    title: "OrbKey",
    category: "Creative Direction, 3D & Motion, Web Design, Web Development",
    imageUrl: "/images/Portfolio_img/Orbkey.gif",
    description: "Conventional keyboards have seen little change despite technological advancements. OrbKey reimagines typing with a spherical design that enhances comfort, saves space, and introduces a futuristic aesthetic, all while incorporating cutting-edge connectivity and ergonomics.",
    challenge: "Our challenge was to create a compelling digital presence for OrbKey that would effectively communicate its revolutionary design and functionality. The goal was to design an interactive and visually striking website that showcases the spherical keyboard's uniqueness, engages potential users, and builds anticipation for a potential product launch.",
    solution: "We developed a sleek, modern website featuring an interactive 3D model and an immersive typing animation with sound effects. The minimalist design and dynamic color options enhanced user engagement and showcased the futuristic aesthetic of OrbKey.",
    results: "Although the website was not launched publicly due to OrbKey being a conceptual project, it successfully demonstrated the potential of a spherical keyboard. The interactive experience showcased its futuristic design, sparking discussions and inspiring new ideas in keyboard innovation.",
    images: [
      "/images/Portfolio_img/Orbkey.gif"
    ],
    techStack: ["React", "TypeScript", "TailwindCSS", "Spline"],
    contributors: ["Levi Huang", "Jiu Fang Lin"]
  },
  {
    id: "10",
    title: "PureSalary",
    category: "Creative Direction, Web Design",
    imageUrl: "/images/Portfolio_img/PureSalary.jpg",
    description: "A comprehensive salary management and payroll system designed for modern businesses, offering transparent compensation tracking and automated payroll processing.",
    challenge: "Design a user-friendly payroll system that simplifies complex salary calculations while ensuring data security and compliance with employment regulations.",
    solution: "Built a robust platform with automated payroll processing, real-time salary tracking, employee self-service portals, and comprehensive reporting dashboards.",
    results: "Successfully reduced payroll processing time by 75% and improved employee satisfaction through transparent salary tracking and self-service capabilities.",
    images: [
      "/images/Portfolio_img/PureSalary.jpg"
    ],
    techStack: ["Figma"],
    contributors: ["Levi Huang"]
  },
  {
    id: "11",
    title: "Yeh Family Philanthropy",
    category: "Creative Direction, Web Design",
    imageUrl: "/images/Portfolio_img/Yeh Family Philanthropy.jpg",
    description: "A sophisticated digital platform for a family foundation, showcasing their philanthropic initiatives and impact across various communities and causes.",
    challenge: "Design a dignified and accessible platform that effectively communicates the foundation's mission while providing transparent insights into their philanthropic work and community impact.",
    solution: "Created a clean, narrative-driven website with interactive impact visualizations, story-telling elements, and seamless donation integration that honors the foundation's values.",
    results: "The platform enhanced the foundation's digital presence, improved donor engagement by 150%, and provided a transparent view of their philanthropic impact across multiple initiatives.",
    images: [
      "/images/Portfolio_img/Yeh Family Philanthropy.jpg"
    ],
    techStack: ["Adobe XD"],
    contributors: ["Levi Huang"]
  },
  {
    id: "12",
    title: "We Are Enough - Logo",
    category: "Creative Direction",
    imageUrl: "/images/Portfolio_img/We Are Enough - Logo.jpg",
    description: "An empowering digital campaign and platform focused on self-acceptance and mental wellness, featuring inclusive design and inspiring content.",
    challenge: "Create an inclusive and empowering digital space that promotes mental wellness and self-acceptance while ensuring accessibility for diverse audiences.",
    solution: "Designed a compassionate user experience with inclusive imagery, accessible navigation, and empowering content that resonates with users from all backgrounds.",
    results: "The campaign reached over 100K individuals, generated significant social media engagement, and became a catalyst for important conversations about mental health and self-worth.",
    images: [
      "/images/Portfolio_img/We Are Enough - Logo.jpg"
    ],
    techStack: ["AutoCAD", "Affinity Designer", "Figma"],
    contributors: ["Jiu Fang Lin"]
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
  onProjectSelect = () => { },
  filterByContributor
}) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  
  // Always start with "All" category - no auto-focus
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Memoize filtered projects to prevent infinite re-renders
  const filteredInitialProjects = useMemo(() => {
    return filterByContributor 
      ? initialProjects.filter(project => 
          project.contributors && project.contributors.includes(filterByContributor)
        )
      : initialProjects;
  }, [initialProjects, filterByContributor]);
  
  const [projects, setProjects] = useState(filteredInitialProjects);
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

  // Update projects when category or filtered projects change
  useEffect(() => {
    if (activeCategory === "All") {
      setProjects(filteredInitialProjects);
    } else {
      setProjects(filteredInitialProjects.filter(project => project.category.includes(activeCategory)));
    }
  }, [activeCategory, filteredInitialProjects]);

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
