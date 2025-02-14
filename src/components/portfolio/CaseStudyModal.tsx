import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
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
  };
}

const CaseStudyModal = ({
  isOpen = true,
  onClose = () => {},
  project = {
    title: "Modern Brand Identity",
    category: "Branding",
    imageUrl:
      "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800",
    description:
      "A comprehensive brand identity project for a modern tech company.",
    challenge:
      "Create a distinctive and versatile brand identity that reflects the company's innovative approach while maintaining simplicity and recognition.",
    solution:
      "Developed a minimalist geometric logo system with a dynamic color palette that adapts across different platforms and mediums.",
    results:
      "The new brand identity increased brand recognition by 40% and successfully unified the company's visual communication across all channels.",
    images: [
      "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800",
    ],
  },
}: CaseStudyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-white">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <ScrollArea className="max-h-[90vh]">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-[400px] relative"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <span className="inline-block px-3 py-1 text-sm bg-white/20 rounded-full text-white">
                  {project.category}
                </span>
              </div>
            </motion.div>

            <div className="p-6 space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-gray-600">{project.description}</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                <p className="text-gray-600">{project.challenge}</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p className="text-gray-600">{project.solution}</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Results</h3>
                <p className="text-gray-600">{project.results}</p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images?.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <img
                        src={image}
                        alt={`Project image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
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
