import React, { useState } from "react";
import { motion } from "framer-motion";
import FilterBar from "./FilterBar";
import ProjectGrid from "./ProjectGrid";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface PortfolioSectionProps {
  initialProjects?: Project[];
  categories?: string[];
}

const PortfolioSection = ({
  initialProjects = [
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
  ],
  categories = ["All", "Branding", "UI/UX", "Print", "Digital", "Motion"],
}: PortfolioSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = initialProjects.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory,
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen bg-background"
    >
      <div className="container mx-auto px-4">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <ProjectGrid
          projects={filteredProjects}
          onProjectClick={setSelectedProject}
        />

        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl">
            {selectedProject && (
              <div className="p-6">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground">
                  {selectedProject.category}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
