import { motion } from "framer-motion";
import { Shield, Sparkles, DollarSign, Truck, HeartHandshake, Leaf } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Uncompromising Quality & Strength",
      subtitle: "Premium Quality & High Strength",
      icon: <Shield className="w-8 h-8 text-primary" />,
      description: "Our power blocks undergo compression testing to exceed builder guidelines. Designed to support heavy structural loads with zero failure.",
      details: ["High structural density", "Crack & seismic resistant", "Certified ISO standards"]
    },
    {
      title: "Affordable Pricing & Value",
      subtitle: "Affordable Pricing",
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      description: "We optimize manufacturing pipelines to deliver direct-from-factory rates. Get top-tier construction products without premium markups.",
      details: ["Factory-direct savings", "Flexible bulk packaging", "No hidden shipping fees"]
    },
    {
      title: "Reliable On-Time Delivery",
      subtitle: "On-Time Delivery",
      icon: <Truck className="w-8 h-8 text-primary" />,
      description: "No construction project should stop due to supply delays. We run a robust logistics fleet to deliver blocks on-site when you need them.",
      details: ["24/7 delivery options", "Fleet tracking capability", "Dedicated delivery team"]
    },
    {
      title: "Trust & Eco-Sustainability",
      subtitle: "Trusted by Builders & Eco-Friendly",
      icon: <Leaf className="w-8 h-8 text-primary" />,
      description: "We use eco-friendly manufacturing methods that consume less carbon. Trusted by top contractors and architects across the state.",
      details: ["Recyclable flyash compounds", "Reduced carbon footprint", "Approved by green boards"]
    }
  ];

  return (
    <section className="py-24 bg-industrial-dark text-white relative overflow-hidden">
      {/* Decorative orange glowing orb */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-3 block">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white mb-4">
            Built On Standards That Stand Out
          </h2>
          <p className="text-gray-400 font-medium">
            We don't just supply blocks; we offer reliability, cost efficiency, and sustainable engineering to elevate your construction project.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <span className="text-6xl font-black text-stroke select-none opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    {`0${index + 1}`}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest text-primary font-bold">{point.subtitle}</span>
                <h3 className="text-2xl font-bold font-sans mt-1 mb-4 text-white group-hover:text-primary transition-colors duration-200">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {point.description}
                </p>
              </div>

              {/* Specs bullets inside the card */}
              <div className="border-t border-white/10 pt-4 flex flex-wrap gap-x-6 gap-y-2">
                {point.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
