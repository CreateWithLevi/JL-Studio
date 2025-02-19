import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Reviewer name",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    text: "JL Studio's 3D models transform abstract ideas into vivid, tangible visuals that truly impress.",
    rating: 5,
  },
  {
    id: 2,
    name: "Reviewer name",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    text: "JL Studio's 3D models transform abstract ideas into vivid, tangible visuals that truly impress.",
    rating: 5,
  },
  {
    id: 3,
    name: "Reviewer name",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    text: "JL Studio's 3D models transform abstract ideas into vivid, tangible visuals that truly impress.",
    rating: 5,
  },
  // Duplicate testimonials for infinite scroll effect
  {
    id: 4,
    name: "Reviewer name",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    text: "JL Studio's 3D models transform abstract ideas into vivid, tangible visuals that truly impress.",
    rating: 5,
  },
  {
    id: 5,
    name: "Reviewer name",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    text: "JL Studio's 3D models transform abstract ideas into vivid, tangible visuals that truly impress.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-black text-black overflow-hidden"
    >
      <div className="container mx-auto px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-2xl font-medium mb-12"
        >
          Client Reviews
        </motion.h2>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            <motion.div
              className="flex gap-6 animate-marquee"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-[600px] bg-white rounded-[32px] p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="space-y-2">
                      <h3 className="font-medium text-xl">
                        {testimonial.name}
                      </h3>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-[#FF6B00]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xl leading-relaxed">{testimonial.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
