import { Project } from './PortfolioSection';

// 完整的項目數據庫
export const allProjects: Project[] = [
  {
    "id": "1",
    "title": "Forexify",
    "category": "Web Development, AI Integration, Fintech",
    "imageUrl": "/images/Portfolio_img/Forexify.jpg",
    "description": "An advanced analytics and strategy development platform for modern foreign exchange traders. It is an integrated decision-support system that unifies data visualization, AI-driven strategy generation, and performance validation to transform complex market data into actionable insights.",
    "challenge": "The core challenge was to architect a high-performance platform capable of processing real-time data streams while providing an intuitive UI for non-programmers to build and validate complex trading strategies. This required solving for real-time data handling, abstraction of complex logic, and ensuring the reliability of AI-generated code.",
    "solution": "I implemented a hybrid architecture with a Flask-based web application and a separate serverless data processing pipeline on Google Cloud Run. The technical core is an AI Strategy Lab that uses a 'Template-Grounded Generation' approach with GPT-4o-mini to reliably generate both Python and PineScript code from user inputs. The backtesting engine utilizes the Strategy Pattern to dynamically execute these strategies in a secure environment.",
    "results": "The AI Strategy Lab dramatically reduced the strategy development lifecycle from days to minutes, improving iteration efficiency by an estimated 90%. This empowered non-technical traders to create and validate their ideas, significantly lowering the barrier to systematic trading and providing powerful, data-driven support for their decisions.",
    "images": [
      "/images/Portfolio_img/Forexify.jpg"
    ],
    "techStack": ["Vue.js", "Python", "Flask", "OpenAI API", "NumPy", "Web Sockets", "MySQL", "GCP"],
    "contributors": ["Levi Huang"]
  },
  {
    "id": "2",
    "title": "Templeify",
    "category": "Web Development, E-commerce",
    "imageUrl": "/images/Portfolio_img/Templeify.jpg",
    "description": "A custom e-commerce and service booking platform designed to digitally transform the traditional offline services of a religious organization, such as annual blessings and event registrations. The platform makes these services accessible to a broader, global community.",
    "challenge": "The primary challenge was translating the unique 'family-based' ordering logic into a digital format, which differs significantly from standard e-commerce. It also required integrating a highly reliable payment gateway, ensuring data consistency during asynchronous transactions, and handling seasonal high-concurrency traffic during events like the Lunar New Year.",
    "solution": "I developed a monolithic application using PHP on Google App Engine. The complex data relationships were managed through a custom-designed relational database schema. A key feature was the asynchronous payment webhook workflow, which validated each transaction with cryptographic signatures to ensure data integrity. To guarantee stability, I implemented performance testing with Locust.py to optimize the system for peak traffic.",
    "results": "The platform successfully opened a new digital revenue stream for the temple, directly resulting in a 40% increase in annual turnover (from 5M to 7M TWD). By automating data entry and physical outputs (like printing nameplates), it also significantly improved back-office operational efficiency and reduced manual errors.",
    "images": [
      "/images/Portfolio_img/Templeify.jpg"
    ],
    "techStack": ["PHP", "JavaScript", "MySQL", "Payment Integration", "GCP", "Locust.py"],
    "contributors": ["Levi Huang"]
  },
  {
    "id": "3",
    "title": "Apparel X",
    "category": "Web Development, SaaS, ERP",
    "imageUrl": "/images/Portfolio_img/Apparel X.jpg",
    "description": "A multi-tenant SaaS Enterprise Resource Planning (ERP) platform designed specifically for small-to-medium-sized businesses in the apparel industry. It unifies inventory, order, customer, and supplier management into a single, efficient cloud platform.",
    "challenge": "The main technical challenge was to design a secure, scalable, and cost-effective multi-tenant architecture to serve hundreds of companies, ensuring 100% data isolation. Additional challenges included handling the apparel industry's complex SKU and order logic, and delivering a responsive user experience on a vanilla PHP stack without a modern frontend framework.",
    "solution": "I architected an innovative SPA-like shell using vanilla JavaScript and jQuery, which dynamically loaded feature pages via AJAX, providing a fluid user experience. Multi-tenancy was achieved through a robust application-layer data isolation model on a shared database, where every SQL query was programmatically filtered by a tenant ID. The entire application was deployed on Google Cloud Platform (GCP) App Engine, leveraging its auto-scaling capabilities.",
    "results": "The platform successfully supported multiple companies operating securely on a single codebase. The SPA-like architecture provided a near-instantaneous and highly responsive UI, significantly improving user satisfaction. This project demonstrated the ability to build a complex, performant, and maintainable enterprise-grade SaaS application under pragmatic technical constraints.",
    "images": [
      "/images/Portfolio_img/Apparel X.jpg"
    ],
    "techStack": ["PHP", "jQuery", "MySQL", "Multi-tenant Architecture", "GCP"],
    "contributors": ["Levi Huang"]
  },
  {
    "id": "4",
    "title": "We Are Enough",
    "category": "Web Design, Web Development, Animation",
    "imageUrl": "/images/Portfolio_img/We Are Enough.jpg",
    "description": "JL Studio partnered with We Are Enough to redesign key sections of their Educational Portal, a core resource dedicated to teaching people how to invest in women-led and women-owned businesses. The goal of the redesign was to create a clearer, more intuitive learning experience that makes complex financial ideas accessible, actionable, and emotionally engaging—encouraging more individuals to take part in values-aligned investing.",
    "design_challenge": "Many educational platforms in the investment space present dense, technical content that can feel intimidating or disconnected from real-world action. For We Are Enough, the challenge was to communicate impactful ideas with clarity and motivation, ensuring users of all backgrounds could move confidently from awareness to action. The portal needed to bridge the gap between education and investment by making the experience structured, emotionally resonant, and easy to navigate—without compromising on depth.",
    "design_solution": "JL Studio restructured the portal to establish a strong cognitive map that flows logically from learning to doing. We streamlined navigation to support a frictionless 'happy path', guiding users through concepts like why investing in women matters, how to do it, and where to begin. The redesign emphasized progress visibility, simplified content structure, and emotionally supportive touchpoints to keep users motivated. Clear visual hierarchy, milestone cues, and modern UI decisions helped reduce overload while reinforcing trust and confidence.",
    "design_results": "The updated Educational Portal now delivers a more intuitive and inspiring experience that empowers users to engage with purpose-driven investing. By making the learning journey easier to follow and emotionally aligned with We Are Enough's mission, the redesign supports broader engagement and helps more people take meaningful financial steps to advance gender equity through investment.",
    "development_challenge": "The core challenge was to translate a complex, artistic Figma design into a fluid, high-performance, and fully responsive web animation. This required balancing sophisticated visual effects with fast load times and smooth 60fps scrolling, and algorithmically generating complex SVG path animations that adapt to any screen size.",
    "development_solution": "I engineered a custom frontend architecture using Vue.js for component structure and the GSAP (GreenSock Animation Platform) library for the animation engine. A key feature was a dynamic SVG path generation algorithm that recalculated on the fly. I used GSAP's ScrollTrigger to create a master animation timeline linked to the user's scroll, and implemented performance optimizations like GPU acceleration and event debouncing. The Laravel backend served content via API in an efficient hybrid rendering strategy.",
    "development_results": "The feature became one of the most engaging sections of the platform, with analytics showing a significantly higher average user session duration compared to static pages. It served as a powerful marketing tool to showcase the platform's technical and design innovation, successfully turning educational content into an enjoyable, memorable experience.",
    "images": [
      "/images/Portfolio_img/We Are Enough.jpg"
    ],
    "techStack": ["Laravel", "Vue.js", "GSAP", "ScrollTrigger", "Figma"],
    "contributors": ["Levi Huang", "Jiu Fang Lin"]
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
    description: "Chillr represents a paradigm shift in furniture design where street culture meets luxury living, transforming the familiar urban STOP sign into a sophisticated furniture collection that challenges our relationship with rest and mindfulness. This collaborative project with Li Wei Huang bridges seemingly opposing worlds—urban grit and refined elegance, functional design and emotional storytelling—creating furniture that doesn't just furnish spaces but actively counters the cultural narrative that equates constant motion with success.",
    challenge: "The primary challenge was transforming the STOP sign—a cold, industrial symbol of municipal authority—into warm, luxury furniture that people would genuinely want in their intimate living spaces. This required preserving the sign's commanding visual presence while solving complex design problems: translating street-scale proportions to human-scale comfort, integrating structured cushioning into rigid triangular forms, and balancing street provocation with domestic sophistication for high-end interiors.",
    solution: "Our solution developed \"Urban Luxury\"—a design language transforming street elements into sophisticated furniture while preserving their cultural power. Each piece maintains triangular DNA with distinct personalities: the Black Lounge Chair embodies glossy authority, the White Barstool represents translucent modernity, and the Pink Chaise Lounge offers sculptural approachability. The 3D website functions as an extension of the collection, with deliberately slow pacing and contemplative design that forces visitors to pause and experience our philosophy rather than simply browse products.",
    results: "Chillr successfully established a new category of meaningful luxury furniture, proving that street-inspired design can compete in high-end markets when executed with sophistication. The STOP sign chair transcended its functional role to become a daily meditation prompt and symbol of mindful living, while our 3D web experience set new standards for furniture presentation online.",
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
    imageUrl: "/images/Portfolio_img/Zuoluh v2.jpg",
    description: "Zuoluh is a comprehensive brand identity project for a forward-thinking fintech company dedicated to revolutionizing ethical investing through accessible, educational financial tools. We developed a complete visual identity system that bridges traditional finance with conscious investing values, creating a brand that speaks to a new generation of socially-aware investors seeking both profitability and purpose in their financial decisions.",
    challenge: "The financial services industry is dominated by complex, intimidating brands that prioritize institutional investors over everyday consumers, while ethical investing platforms often lack the sophistication and trust signals needed to attract serious investors. The challenge was to create a brand identity that could simultaneously convey financial credibility and ethical values, making conscious investing feel both accessible to newcomers and trustworthy for experienced investors.",
    solution: "The Zuoluh brand identity centers around a fluid, organic logo inspired by the \"Be Water\" philosophy, symbolizing adaptability, resilience, and the power of unified flow. The visual system combines minimalist design principles with warm, approachable typography and a sophisticated color palette that balances financial professionalism with environmental consciousness. Every touchpoint reflects the brand's mission to make ethical investing simple, transparent, and empowering.",
    results: "The final brand identity successfully positions Zuoluh as a trustworthy yet innovative leader in ethical investing, with a distinctive visual language that stands out in the crowded fintech landscape. The organic logo design and cohesive brand system create immediate recognition while communicating the company's values of transparency, sustainability, and financial empowerment, establishing a strong foundation for building lasting relationships with conscious investors across all demographics.",
    images: [
      "/images/Portfolio_img/Zuoluh v2.jpg"
    ],
    techStack: ["AutoCAD", "Affinity Designer", "Figma"],
    contributors: ["Jiu Fang Lin"]
  },
  {
    id: "8",
    title: "Bucket Protocol",
    category: "Creative Direction, 3D & Motion",
    imageUrl: "/images/Portfolio_img/Bucket Protocol.jpg",
    description: "Bucket Protocol approached JL Studio with a clear goal: to create a set of high-quality 3D loading animations that would enhance their decentralized stablecoin platform. This platform allows users to borrow $BUCK tokens—pegged to the US dollar—against their crypto assets. The focus of the project was to improve the waiting experience during transaction processes, making it more engaging while reinforcing the platform's identity as a secure, professional, and forward-thinking DeFi product.",
    challenge: "Many DeFi platforms are plagued by cold, overly technical interfaces that can leave users feeling disconnected or even anxious—especially during sensitive moments like transaction confirmations. These waiting periods, often accompanied by uncertainty, can erode user trust. The challenge was to introduce visually rich animations that would maintain user engagement during these moments while conveying a sense of stability, innovation, and trustworthiness. The solution had to be sophisticated, aligned with the brand's aesthetic, and seamlessly integrated into the existing UI—without compromising functionality or performance.",
    solution: "To meet these goals, JL Studio designed and produced a collection of eleven unique 3D animations that transform common crypto assets into $BUCK tokens through a series of fluid, elegant movements. Each animation was crafted to reflect the essence of transformation and flow, using soft lighting, clean materials, and cinematic motion to communicate both technical precision and a sense of calm. The animations were carefully tailored to match Bucket Protocol's branding and were optimized for smooth playback within the web environment. Through detailed modeling, rendering, and motion design, we created visuals that not only entertained but reassured users during otherwise static loading moments.",
    results: "The completed suite of 3D loading animations brought a distinct and memorable visual identity to Bucket Protocol's platform. By turning wait times into moments of brand storytelling, the animations helped ease user anxiety, reduce the perceived duration of transaction processing, and reinforce the platform's credibility. The smooth integration of these visuals into the product interface elevated the overall user experience, making it feel more polished and reliable.",
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
    description: "OrbKey is a revolutionary spherical keyboard concept that reimagines traditional typing interfaces through ergonomic design principles. Developed as a speculative design project by JL Studio, this concept combines innovative 3D modeling, stunning motion graphics, and interactive web experiences to showcase how we might interact with keyboards in the future, prioritizing user comfort and natural hand positioning over conventional flat designs.",
    challenge: "Traditional flat keyboards force users into unnatural hand positions that contribute to repetitive strain injuries and discomfort during extended computing sessions. With remote work culture driving increased screen time and typing demands, there's an urgent need to fundamentally rethink keyboard ergonomics. The challenge was to create a typing interface that promotes natural hand curvature while maintaining familiarity and efficiency for users accustomed to QWERTY layouts.",
    solution: "OrbKey introduces a spherical keyboard design that maps traditional keys onto a three-dimensional curved surface, allowing users' hands to rest in their natural position while typing. The concept leverages advanced 3D visualization and interactive web technology to demonstrate how this ergonomic approach could reduce wrist strain and improve typing comfort. The solution combines thoughtful industrial design with compelling digital storytelling to make the speculative concept tangible and engaging.",
    results: "The OrbKey project successfully challenged conventional keyboard design paradigms through a comprehensive digital experience featuring photorealistic 3D models, dynamic animations, and an interactive website at orbkey.jlstudio.xyz. The final deliverable showcases seamless integration of industrial design principles with immersive digital storytelling, creating a compelling proof-of-concept that pushes the boundaries of ergonomic computing while maintaining aesthetic appeal and user accessibility across multiple platforms.",
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
    description: "We Are Enough collaborated with JL Studio to create two distinct logo identities for Northstar and Dollars & Sense, two new initiatives aimed at expanding the organization's mission of making investing approachable for women of all income levels. These side projects serve as focused entry points—Northstar offering personalized investment discovery and Dollars & Sense delivering accessible financial education—each designed to help more women engage confidently with wealth-building.",
    challenge: "As extensions of the main platform, Northstar and Dollars & Sense needed to feel connected to We Are Enough's core identity while still standing out with their own voice and purpose. The challenge was to design two logos that conveyed clarity, trust, and empowerment without overwhelming users or drifting into overly technical or institutional aesthetics. Each needed to reflect its unique function while reinforcing the organization's inclusive and transformative values.",
    solution: "The Northstar logo centers on a custom wordmark that subtly embeds a star within the 'o', referencing its role as a guiding force for women navigating investment choices. Typographic details suggest movement and continuity, aligning with the idea of long-term financial direction. In contrast, Dollars & Sense uses a playful visual pun—linking two 's' characters—to symbolize the integration of emotion and logic in decision-making. The rounded forms and light rhythm of the typography evoke a tone that's both smart and accessible.",
    results: "Both logo designs effectively support We Are Enough's mission by making financial engagement feel more personal, intuitive, and motivating. These identities create immediate visual anchors for their respective platforms, helping users feel welcomed and guided as they explore content, tools, and resources. The work extends the reach of the brand without diluting its essence, reinforcing We Are Enough's commitment to reshaping how women relate to money, investment, and collective empowerment.",
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