import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Stats = () => {
  return (
    <section
      id="stats"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/BsD3xGNgNz8ZsYGB/scene.splinecode" />
      </div>

      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* First Row */}
          <div className="lg:mt-96">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-[10rem] font-medium leading-none">6+</h3>
              <p className="text-white/80 text-lg max-w-[300px] leading-tight">
                years collaborating with a local founder to co-develop the cloud-based “Apparel X” platform, ensuring scalable and cost-effective operations.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-[10rem] font-medium leading-none">40%</h3>
              <p className="text-white/80 text-lg max-w-[300px] leading-tight">
                boost in online sales through a custom, templated lantern system featuring streamlined ordering and payment integration.
              </p>
            </motion.div>
          </div>

          <div className="lg:mt-96">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-[10rem] font-medium leading-none">6+</h3>
              <p className="text-white/80 text-lg max-w-[300px] leading-tight">
                years of 3D modeling and teaching experience, mentoring aspiring designers in advanced digital creation techniques.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-[10rem] font-medium leading-none">10</h3>
              <p className="text-white/80 text-lg max-w-[300px] leading-tight">
                years of expertise in website design and development, creating user-friendly platforms that amplify brand visibility and customer engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
