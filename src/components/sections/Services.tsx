import { motion } from "framer-motion";
import {
  Palette,
  Monitor,
  Smartphone,
  Globe,
  Camera,
  Megaphone,
} from "lucide-react";

const services = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Brand Identity",
    description:
      "Crafting unique and memorable brand identities that stand out in the market.",
  },
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Web Design",
    description:
      "Creating responsive and intuitive websites that deliver exceptional user experiences.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "App Design",
    description:
      "Designing user-friendly mobile applications with engaging interfaces.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Digital Strategy",
    description:
      "Developing comprehensive digital strategies to achieve your business goals.",
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Photography",
    description:
      "Professional photography services for products and brand storytelling.",
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: "Marketing",
    description:
      "Strategic marketing solutions to enhance your brand's digital presence.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of creative services to help your
            brand thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
