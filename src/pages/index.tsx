import { useState, useEffect } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 1.5s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Mahadev Power Block | Premium Construction Blocks & Pavers</title>
        <meta
          name="description"
          content="Mahadev Power Block manufactures high-quality Power Blocks, AAC Blocks, concrete blocks, and interlocking pavers with extreme strength, durability, and ISO precision."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Mahadev Power Block, AAC Blocks, Concrete Blocks, Hollow Blocks, Solid Blocks, Paver Blocks, Construction Materials, Gujarat" />
        <link rel="icon" href="/favicon.ico" />

        {/* OpenGraph Metadata for SEO */}
        <meta property="og:title" content="Mahadev Power Block | Premium Construction Solutions" />
        <meta property="og:description" content="We manufacture premium structural blocks, AAC blocks, and interlocking designer pavers for commercial and residential developments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahadevpowerblock.com" />
        <meta property="og:image" content="https://mahadevpowerblock.com/images/hero-bg.jpg" />

        {/* Schema.org markup for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mahadev Power Block",
              "image": "https://mahadevpowerblock.com/images/hero-bg.jpg",
              "email": "mahadevpowerblock@gmail.com",
              "telephone": "+91 98700 76533",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mahadev Power Block",
                "addressLocality": "Gujarat",
                "addressCountry": "IN"
              },
              "url": "https://mahadevpowerblock.com",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00"
              }
            })
          }}
        />
      </Head>

      {/* Preloader Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-industrial-dark flex flex-col items-center justify-center text-white"
          >
            {/* Spinning industrial gear logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="bg-primary text-white p-5 rounded-2xl shadow-xl shadow-primary/20 mb-6"
            >
              <Hammer className="w-10 h-10" />
            </motion.div>
            
            {/* Typing text display */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <span className="block font-sans font-black text-2xl tracking-widest uppercase">
                Mahadev
              </span>
              <span className="block font-sans font-bold text-xs text-primary uppercase tracking-widest mt-1">
                Power Block
              </span>
            </motion.div>
            <div className="w-24 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-industrial-dark text-industrial-dark dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Products />
          <WhyChooseUs />
          <Process />
          <Stats />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
}
