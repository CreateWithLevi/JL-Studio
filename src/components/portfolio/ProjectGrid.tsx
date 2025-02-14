import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface ProjectGridProps {
  projects?: Project[];
  onProjectClick?: (project: Project) => void;
}

const ProjectGrid = ({
  projects = [
    {
      id: "1",
      title: "Modern Brand Identity",
      category: "Branding",
      imageUrl:
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800",
    },
    {
      id: "2",
      title: "Mobile App Design",
      category: "UI/UX",
      imageUrl:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    },
    {
      id: "3",
      title: "Product Packaging",
      category: "Print",
      imageUrl:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800",
    },
    {
      id: "4",
      title: "Website Redesign",
      category: "Web Design",
      imageUrl:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800",
    },
    {
      id: "5",
      title: "Restaurant Menu Design",
      category: "Print",
      imageUrl:
        "https://images.unsplash.com/photo-1577280367125-6dbd2c9f6844?w=800",
    },
    {
      id: "6",
      title: "E-commerce Platform",
      category: "UI/UX",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    },
  ],
  onProjectClick = () => {},
}: ProjectGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-muted p-4 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              onClick={() => onProjectClick(project)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectGrid;
