import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  images?: string[];
  techStack?: string[];
  contributors?: string[];
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-0 bg-black border-white/10 overflow-y-auto">
        <div className="relative h-full flex flex-col">
          {/* Header with close button */}
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hero image section */}
          <div className="relative h-[40vh] overflow-hidden">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Project title overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {project.category.split(", ").map((cat, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30 backdrop-blur-md"
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content section */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-8 md:p-12 space-y-12 bg-gradient-to-b from-black to-gray-900">
              
              {/* Project overview */}
              <motion.section
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
                  Project Overview
                </h2>
                <p className="text-lg text-white/80 leading-relaxed max-w-4xl">
                  {project.description}
                </p>
              </motion.section>

              {/* Challenge, Solution, Results grid */}
              <motion.section
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {/* Challenge */}
                <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-white">The Challenge</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-white">The Solution</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-white">The Results</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {project.results}
                  </p>
                </div>
              </motion.section>

              {/* Tech stack */}
              {project.techStack && project.techStack.length > 0 && (
                <motion.section
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-white text-sm font-medium"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Contributors */}
              {project.contributors && project.contributors.length > 0 && (
                <motion.section
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.65, duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
                    Contributors
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.contributors.map((contributor, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.75 + index * 0.1, duration: 0.3 }}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white text-sm font-medium"
                      >
                        {contributor}
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Additional images */}
              {project.images && project.images.length > 1 && (
                <motion.section
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                        className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Call to action */}
              <motion.section
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="pt-8 border-t border-white/10"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Interested in working together?
                    </h3>
                    <p className="text-white/70">
                      Let's create something amazing for your next project.
                    </p>
                  </div>
                  <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105">
                    Get In Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.section>

            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
