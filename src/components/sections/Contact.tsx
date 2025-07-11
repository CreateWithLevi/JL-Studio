import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import { ScrambleWord } from "../ui/scramble-word";
import { Button } from "../ui/button";

interface ContactProps {
  hideService?: boolean;
}

const Contact: React.FC<ContactProps> = ({ hideService }) => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadSpline(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Spline 3D Background - Lazy loaded */}
      <div className="absolute inset-0 w-full h-full">
        {shouldLoadSpline && (
        <Spline scene="https://prod.spline.design/jgKqenvzJs5JxeL8/scene.splinecode" />
        )}
      </div>

      {/* Content with higher z-index */}
      <div className="container mx-auto px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-7xl font-medium mb-20 sm:text-8xl md:text-10xl lg:text-[12rem]"
            onMouseEnter={() => setHoveredElement('lets-talk')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            {/* Available Status */}
            <div className="flex items-center gap-2 ml-1 md:ml-2 lg:ml-5">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-white/60">Available</span>
            </div>
            <ScrambleWord text="Let's talk" trigger={hoveredElement === 'lets-talk'} />
          </motion.h2>

          {/* Email Button */}
          <motion.a
            href="mailto:jlstudio.xyz@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#F97315] text-white text-xl px-16 py-6 rounded-full hover:bg-orange-600 transition-colors mb-28"
          >
            jlstudio.xyz@gmail.com
          </motion.a>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[2rem] font-medium flex items-center gap-0 md:gap-0 mb-32 sm:text-4xl md:text-5xl lg:text-[5rem]"
          >
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              onMouseEnter={() => setHoveredElement('work')}
              onMouseLeave={() => setHoveredElement(null)}
              className="hover:text-[#F97315] transition-colors"
            >
              <ScrambleWord text="Work" trigger={hoveredElement === 'work'} className="inline-block" />
            </button>
            {!hideService && (
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                onMouseEnter={() => setHoveredElement('service')}
                onMouseLeave={() => setHoveredElement(null)}
                className="hover:text-[#F97315] transition-colors"
              >
                <span>, </span><ScrambleWord text="Service" trigger={hoveredElement === 'service'} className="inline-block" />
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
