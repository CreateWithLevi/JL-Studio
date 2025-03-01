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
    title: "Web Development",
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
          className="mb-16 text-center relative"
        >
          <h2 className="text-2xl mb-8">Our Service</h2>
          <p className="text-5xl font-medium leading-tight max-w-[1200px] mx-auto sm:text-6xl md:text-7xl lg:text-[6rem] relative z-10">
            We turn static ideas into dynamic digital spaces.
          </p>
          <img
            src="/images/cute_obj1.svg"
            alt="Decoration"
            className="absolute top-28 left-0 w-16 h-12 md:left-16 w-20 h-16"
          />
          <img
            src="/images/cute_obj2.svg"
            alt="Decoration"
            className="absolute top-48 right-24 w-16 h-16 md:w-28 h-28"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pt-12 flex gap-6"
            >
              <div className="relative pt-1">
                <span className="text-sm text-white block mb-2">
                  {service.number}
                </span>
                {/* 垂直分隔線：依需求調整高度、顏色 */}
                <div className="absolute left-2 top-8 bottom-0 w-px bg-white/20" />
              </div>
              <div>
                <h3 className="text-4xl font-medium mb-6">{service.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex hidden mt-6">
                  <a
                    href="#"
                    className="ml-auto inline-flex items-center gap-2 mt-6 text-sm text-white hover:text-orange-400"
                  >
                    <span className="inline-block w-0 h-0 text-orange-500 border-y-4 border-y-transparent border-l-8 border-l-current group-hover:border-l-orange-400" />
                    Learn more
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
