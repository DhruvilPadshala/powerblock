import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Excellent quality blocks and timely delivery. Their AAC blocks are incredibly lightweight yet durable, significantly reducing load stress on our high-rise structures.",
    author: "Rohan Sharma",
    role: "Project Manager, Apex Builders",
    rating: 5
  },
  {
    id: 2,
    text: "Very reliable supplier. Whenever we have bulk power block requirements for residential foundations, Mahadev delivers precisely on schedule. Customer support is superb.",
    author: "Sanjay Patel",
    role: "Proprietor, Patel Foundations",
    rating: 5
  },
  {
    id: 3,
    text: "Highly recommended for construction projects. Their interlocking paver blocks have excellent dimensional accuracy and look incredibly premium. Will continue partnering.",
    author: "Vikram Malhotra",
    role: "Principal Architect, VM Designs",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-industrial-gray/20 relative overflow-hidden">
      {/* Decorative dots grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-3 block">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-industrial-dark dark:text-white mb-4">
            Trusted By Construction Experts
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Read stories from site engineers, architects, and developers who rely on our concrete blocks and solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white dark:bg-industrial-dark rounded-3xl p-8 border border-gray-200/50 dark:border-gray-800 shadow-md flex flex-col justify-between hover:shadow-xl dark:hover:shadow-none transition-all duration-300 relative group"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-200">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Stars Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 dark:text-gray-300 italic text-sm leading-relaxed mb-8 relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="border-t border-gray-100 dark:border-gray-800 pt-6 flex items-center gap-4">
                {/* Initials avatar */}
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-sans">
                  {t.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-industrial-dark dark:text-white leading-none mb-1.5">
                    {t.author}
                  </h4>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {t.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
