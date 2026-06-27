import { motion } from "framer-motion";
import { Zap, Layers, HardHat, Package, LayoutGrid, ShieldAlert, ArrowUpRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: "power-blocks",
    name: "Power Blocks",
    icon: <Zap className="w-6 h-6 text-primary" />,
    description: "Premium heavy-duty blocks designed for high load-bearing capacity and industrial foundations.",
    image: "/images/product-power.jpg"
  },
  {
    id: "aac-blocks",
    name: "AAC Blocks",
    icon: <Layers className="w-6 h-6 text-primary" />,
    description: "Autoclaved Aerated Concrete blocks providing superior thermal insulation, lightweight structure, and fire resistance.",
    image: "/images/product-aac.jpg"
  },
  {
    id: "concrete-blocks",
    name: "Concrete Blocks",
    icon: <HardHat className="w-6 h-6 text-primary" />,
    description: "Standard high-density concrete building blocks perfect for framing, retaining walls, and load masonry.",
    image: "/images/product-concrete.jpg"
  },
  {
    id: "hollow-blocks",
    name: "Hollow Blocks",
    icon: <Package className="w-6 h-6 text-primary" />,
    description: "Eco-friendly hollow concrete blocks offering excellent sound damping, lightness, and structural reinforcement options.",
    image: "/images/product-hollow.jpg"
  },
  {
    id: "solid-blocks",
    name: "Solid Blocks",
    icon: <LayoutGrid className="w-6 h-6 text-primary" />,
    description: "Extremely strong, dense solid blocks built specifically for robust support structures and foundations.",
    image: "/images/product-solid.jpg"
  },
  {
    id: "paver-blocks",
    name: "Paver Blocks",
    icon: <ShieldAlert className="w-6 h-6 text-primary" />,
    description: "Interlocking designer paving blocks for driveways, pathways, and patios. Durable, slip-resistant, and aesthetically premium.",
    image: "/images/product-paver.jpg"
  }
];

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="products" className="py-24 bg-gray-50 dark:bg-industrial-gray/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-3 block">Our Catalog</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-industrial-dark dark:text-white mb-4">
            Premium Building Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            We manufacture a comprehensive range of construction blocks and pavers, engineered for stability, strength, and structural integrity.
          </p>
        </div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative flex flex-col bg-white dark:bg-industrial-dark rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-800 shadow-md hover:shadow-xl dark:shadow-none transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-bold flex items-center gap-1">
                    View Technical Specs
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-industrial-dark dark:text-white group-hover:text-primary transition-colors duration-200">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Premium Range</span>
                  <a
                    href="#contact"
                    className="text-primary hover:text-primary-hover font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:underline"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
