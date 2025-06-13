import { Project } from './PortfolioSection';

// 完整的項目數據庫
export const allProjects: Project[] = [
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
    title: "Zuoluh",
    category: "Creative Direction",
    imageUrl: "/images/Portfolio_img/Zuoluh.jpg",
    description: "A creative digital studio platform showcasing innovative design solutions and artistic collaborations with a focus on experimental visual narratives.",
    challenge: "Develop a unique digital presence that reflects the studio's experimental approach while maintaining professional credibility and showcasing diverse creative work.",
    solution: "Built an interactive portfolio platform with experimental layouts, dynamic content presentation, and immersive project showcases that reflect the studio's creative philosophy.",
    results: "The platform increased client inquiries by 300%, won several design awards, and established the studio as a leader in experimental digital design.",
    images: [
      "/images/Portfolio_img/Zuoluh.jpg"
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
    imageUrl: "/images/Portfolio_img/OrbKey.gif",
    description: "Conventional keyboards have seen little change despite technological advancements. OrbKey reimagines typing with a spherical design that enhances comfort, saves space, and introduces a futuristic aesthetic, all while incorporating cutting-edge connectivity and ergonomics.",
    challenge: "Our challenge was to create a compelling digital presence for OrbKey that would effectively communicate its revolutionary design and functionality. The goal was to design an interactive and visually striking website that showcases the spherical keyboard's uniqueness, engages potential users, and builds anticipation for a potential product launch.",
    solution: "We developed a sleek, modern website featuring an interactive 3D model and an immersive typing animation with sound effects. The minimalist design and dynamic color options enhanced user engagement and showcased the futuristic aesthetic of OrbKey.",
    results: "Although the website was not launched publicly due to OrbKey being a conceptual project, it successfully demonstrated the potential of a spherical keyboard. The interactive experience showcased its futuristic design, sparking discussions and inspiring new ideas in keyboard innovation.",
    images: [
      "/images/Portfolio_img/OrbKey.gif"
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

// JL Studio 主頁項目列表 (顯示所有項目，按策略順序排列)
export const jlStudioProjectIds: string[] = [
  "4", // We Are Enough - 合作項目
  "6", // Chillr - 合作項目，展示創意
  "1", // Forexify - 技術實力
  "7", // Zuoluh - 創意方向
  "8", // Bucket Protocol - 3D 動畫
  "2", // Templeify - 全端開發
  "9", // OrbKey - 合作項目，展示工作室實力
  "5", // The Longreach Group - 開發專案
  "12", // We Are Enough - Logo - 品牌設計
  "11", // Yeh Family Philanthropy - 設計
  "10", // PureSalary - 設計
  "3", // Apparel X - 開發
];

// Levi Huang 頁面項目列表 (重點展示開發與技術項目)
export const leviHuangProjectIds: string[] = [
  "1", // Forexify - 主要技術項目
  "3", // Apparel X - 全端開發
  "2", // Templeify - 全端開發
  "5", // The Longreach Group - 開發專案
  "4", // We Are Enough - 合作開發
  "9", // OrbKey - 合作開發項目
  "6", // Chillr - 合作開發
  "10", // PureSalary - 設計項目
  "11", // Yeh Family Philanthropy - 設計項目
];

// Jiu Fang Lin 頁面項目列表 (重點展示設計與創意項目)
export const jiuFangLinProjectIds: string[] = [
  "7", // Zuoluh - 主要創意項目
  "8", // Bucket Protocol - 3D 動畫
  "12", // We Are Enough - Logo - 品牌設計
  "6", // Chillr - 合作創意項目
  "9", // OrbKey - 合作設計項目
  "4", // We Are Enough - 合作設計
];

// 獲取指定項目列表的函數
export const getProjectsByIds = (projectIds: string[]): Project[] => {
  return projectIds.map(id => {
    const project = allProjects.find(p => p.id === id);
    if (!project) {
      console.warn(`Project with id ${id} not found`);
      return null;
    }
    return project;
  }).filter(Boolean) as Project[];
};

// 頁面配置類型
export type PageConfig = {
  title: string;
  projects: Project[];
  categories: string[];
};

// 獲取頁面配置的函數
export const getPageConfig = (page: "jl-studio" | "levi" | "jiufang"): PageConfig => {
  switch (page) {
    case "jl-studio":
      return {
        title: "JL Studio Projects",
        projects: getProjectsByIds(jlStudioProjectIds),
        categories: ["All", "Creative Direction", "3D & Motion", "Web Design", "Web Development"]
      };
    case "levi":
      return {
        title: "Levi Huang Full-Stack Developer",
        projects: getProjectsByIds(leviHuangProjectIds),
        categories: ["All", "Web Development", "Web Design", "Creative Direction"]
      };
    case "jiufang":
      return {
        title: "Jiu Fang Lin Web Designer",
        projects: getProjectsByIds(jiuFangLinProjectIds),
        categories: ["All", "Creative Direction", "3D & Motion", "Web Design"]
      };
    default:
      return {
        title: "JL Studio Projects",
        projects: getProjectsByIds(jlStudioProjectIds),
        categories: ["All", "Creative Direction", "3D & Motion", "Web Design", "Web Development"]
      };
  }
}; 