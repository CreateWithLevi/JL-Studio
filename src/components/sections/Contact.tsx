import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-12">
        <div className="flex flex-col items-center text-center">
          {/* Available dot */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-white/60">Available</span>
          </div>

          {/* Let's talk */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[8rem] font-medium mb-8"
          >
            Let's talk
          </motion.h2>

          {/* Email */}
          <motion.a
            href="mailto:jlstudio.xyz@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-orange-500 text-xl hover:text-orange-400 transition-colors"
          >
            jlstudio.xyz@gmail.com
          </motion.a>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-24 text-[4rem] font-medium flex items-center gap-8"
          >
            <span>Services,</span>
            <span>Projects,</span>
            <span>Contact</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
