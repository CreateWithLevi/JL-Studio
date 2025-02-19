import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title?: string;
  category?: string;
  imageUrl?: string;
  onClick?: () => void;
}

interface Project {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title = "Brand Identity Design",
  category = "Branding",
  imageUrl = "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&auto=format&fit=crop&q=60",
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-background cursor-pointer"
      onClick={onClick}
    >
      <Card className="overflow-hidden border-0 shadow-lg">
        <AspectRatio ratio={4 / 3}>
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </AspectRatio>
        <div className="p-4 space-y-2">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
