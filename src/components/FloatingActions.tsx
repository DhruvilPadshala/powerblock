import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5">
      {/* Call Button */}
      <motion.a
        href="tel:+919870076533"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 group"
        aria-label="Call Business"
      >
        <Phone className="w-5.5 h-5.5 group-hover:animate-pulse" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919870076533?text=Hi,%20I'm%20interested%20in%20a%20quote%20for%20Mahadev%20Power%20Blocks."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 relative group"
        aria-label="WhatsApp Business"
      >
        {/* Animated green ping to attract attention */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-5.5 h-5.5" />
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-12 h-12 rounded-full bg-industrial-dark border border-gray-700/80 hover:bg-primary hover:border-primary text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5.5 h-5.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
