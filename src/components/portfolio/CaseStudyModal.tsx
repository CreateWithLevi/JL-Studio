import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface CaseStudyModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    title: string;
    category: string;
    imageUrl: string;
    description?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    images?: string[];
    techStack?: string[];
  };
}

const CaseStudyModal = ({
  isOpen = false,
  onClose = () => { },
  project,
}: CaseStudyModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 bg-white rounded-8xl overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <ScrollArea className="max-h-[90vh]">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-[500px] relative"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack?.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-white/10 text-white hover:bg-white/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-lg text-white/80">{project.category}</span>
                </motion.div>
              </div>
            </motion.div>

            <div className="p-8 space-y-12 bg-white">
              <section>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-3xl"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-600">THE GOAL</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                </motion.div>
              </section>

              <section className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-600">THE GAP</h3>
                  <p className="text-gray-600">{project.challenge}</p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-600">THE GAMBLE</h3>
                  <p className="text-gray-600">{project.solution}</p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-600">THE GAIN</h3>
                  <p className="text-gray-600">{project.results}</p>
                </motion.div>
              </section>

              <section className="space-y-6 hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images?.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="relative group overflow-hidden rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
