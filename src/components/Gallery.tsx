import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "Blocks" | "Factory" | "On-Site";
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Premium Power Blocks",
    category: "Blocks",
    image: "/images/product-power.jpg"
  },
  {
    id: 2,
    title: "Automated Manufacturing Line",
    category: "Factory",
    image: "/images/factory.jpg"
  },
  {
    id: 3,
    title: "High-Volume Casting Process",
    category: "Factory",
    image: "/images/gallery-manufacturing.jpg"
  },
  {
    id: 4,
    title: "On-Site Logistic Dispatches",
    category: "On-Site",
    image: "/images/gallery-delivery.jpg"
  },
  {
    id: 5,
    title: "Commercial Highrise Construction",
    category: "On-Site",
    image: "/images/gallery-site.jpg"
  },
  {
    id: 6,
    title: "Structural QA Inspections",
    category: "On-Site",
    image: "/images/gallery-workers.jpg"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<"All" | "Blocks" | "Factory" | "On-Site">("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-industrial-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-3 block">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-industrial-dark dark:text-white mb-4">
            Our Gallery & Project Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Explore our state-of-the-art manufacturing facilities, premium building blocks, and construction projects built on our foundations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(["All", "Blocks", "Factory", "On-Site"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-industrial-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <div className="bg-primary/95 text-white p-3 rounded-full mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-white text-lg font-bold font-sans text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </span>
                  <span className="text-primary-light text-xs font-semibold uppercase tracking-wider mt-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected Gallery Preview"
                className="w-full h-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
