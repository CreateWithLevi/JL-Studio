import { motion } from "framer-motion";

const stats = [
  {
    number: "40",
    description:
      "A custom temple lantern system with improved rendering and seamless integration, boosted online sales by 40%",
  },
  {
    number: "6+",
    description:
      "years system. Apparel X is a cloud platform re-developed with a local apparel founder",
  },
  {
    number: "10",
    description: "years website design & development",
  },
  {
    number: "6+",
    description: "years 3D model building experience and also as an instructor",
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-6xl font-bold">{stat.number}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
