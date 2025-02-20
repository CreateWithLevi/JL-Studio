import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-12">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[12rem] font-medium mb-12"
          >
            {/* Available Status */}
            <div className="flex items-center gap-2 ml-5">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-white/60">Available</span>
            </div>
            Let's talk
          </motion.h2>

          {/* Email Button */}
          <motion.a
            href="mailto:jlstudio.xyz@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#F97315] text-white text-xl px-16 py-6 rounded-full hover:bg-orange-600 transition-colors mb-32"
          >
            jlstudio.xyz@gmail.com
          </motion.a>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[5rem] font-medium flex items-center gap-8"
          >
            <button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-[#F97315] transition-colors"
            >
              Work,
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-[#F97315] transition-colors"
            >
              Service,
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("stats")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-[#F97315] transition-colors"
            >
              About
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
