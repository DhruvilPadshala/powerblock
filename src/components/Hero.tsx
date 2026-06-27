import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-industrial-dark text-white pt-20"
    >
      {/* Background Image with Parallax & Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundAttachment: "scroll"
        }}
      />
      
      {/* Premium Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark via-industrial-dark/95 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-transparent to-transparent z-10" />
      
      {/* Industrial Accent Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none z-10"
        style={{
          backgroundImage: "radial-gradient(#FF6B00 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 pt-10 pb-20">
        <div className="max-w-3xl">
          {/* Subtle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-bold text-primary-light">
              Certified Construction Materials Manufacturer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-sans font-black tracking-tight leading-tight"
          >
            Strong Foundations. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Premium Power Blocks.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl"
          >
            We manufacture high-quality Power Blocks, AAC Blocks, and construction solutions with strength, durability, and precision. Built for builders who demand reliability.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => handleScrollTo("contact")}
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold uppercase tracking-wider py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
            >
              Get Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center gap-2 border border-gray-600 hover:border-primary hover:bg-primary/5 text-white font-bold uppercase tracking-wider py-4 px-8 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-primary" />
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines on sides */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-800 to-transparent hidden xl:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-800 to-transparent hidden xl:block" />

      {/* Scroll indicator animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center p-1"
        >
          <div className="w-1.5 h-2 rounded-full bg-primary" />
        </motion.div>
      </div>
    </section>
  );
}
