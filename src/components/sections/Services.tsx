import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "3D & Motion",
    description:
      "We transform your ideas into stunning 3D visuals and dynamic animations—bringing your vision to life and letting you see the future today.",
  },
  {
    number: "02",
    title: "Web design",
    description:
      "We craft beautiful websites and apps—merging sleek design with seamless functionality to bring your digital vision to life.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "We transform your space with captivating installations, custom expo stands, and meticulously crafted signs and props—bringing your brand's vision to life.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl mb-8">Our Service</h2>
          <p className="text-6xl font-medium leading-tight max-w-5xl">
            We turn static ideas into dynamic digital spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pt-12 border-t border-white/20"
            >
              <span className="absolute top-4 left-0 text-sm text-white/60">
                {service.number}
              </span>
              <h3 className="text-4xl font-medium mb-6">{service.title}</h3>
              <p className="text-white/80 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-sm text-orange-500 hover:text-orange-400"
              >
                Learn more
                <span className="text-xs">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
