import { motion } from "framer-motion";
import { ShieldCheck, Truck, Users } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Quality Manufacturing",
      description: "Rigorous testing and quality standards ensure that every block delivers maximum load-bearing strength and density."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Timely Delivery",
      description: "With a fleet of dedicated trucks and organized logistics, we guarantee on-time delivery directly to your project site."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Customer Satisfaction",
      description: "We work closely with architects, contractors, and builders to supply custom volumes and fulfill tailored requirements."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-industrial-dark relative overflow-hidden">
      {/* Decorative side shape */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image / Graphic representation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary to-orange-500 opacity-20 blur-lg pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
              <img
                src="/images/factory.jpg"
                alt="Modern Block Manufacturing Factory"
                className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm font-bold uppercase tracking-widest text-primary-light mb-1">State-of-the-art facility</p>
                  <p className="text-xl font-bold font-sans">Next-gen block manufacturing with extreme precision</p>
                </div>
              </div>
            </div>
            {/* Absolute badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[200px]">
              <span className="block text-4xl font-extrabold mb-1">10+</span>
              <span className="text-xs uppercase font-bold tracking-wider text-white/90">Years of Manufacturing Excellence</span>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary mb-3 block">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-industrial-dark dark:text-white mb-6">
              About Mahadev Power Block
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Mahadev Power Block is committed to delivering premium-quality construction materials that ensure stronger, safer, and longer-lasting buildings. We focus on quality manufacturing, timely delivery, and customer satisfaction for residential, commercial, and industrial projects.
            </p>

            {/* Core Values Pillars */}
            <div className="space-y-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-industrial-dark dark:text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
