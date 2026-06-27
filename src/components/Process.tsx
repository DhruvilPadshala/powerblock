import { motion } from "framer-motion";
import { ClipboardList, FileSpreadsheet, Settings2, Truck } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Inquiry",
      icon: <ClipboardList className="w-6 h-6" />,
      description: "Send us your project details, dimensions, and quantity specifications online or via phone."
    },
    {
      num: "02",
      title: "Quotation",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      description: "Get a transparent, customized quote detailing wholesale block prices and delivery estimates."
    },
    {
      num: "03",
      title: "Manufacturing",
      icon: <Settings2 className="w-6 h-6" />,
      description: "Blocks are cast, autoclaved (for AAC), and cured under extreme quality inspection."
    },
    {
      num: "04",
      title: "Delivery",
      icon: <Truck className="w-6 h-6" />,
      description: "Packaged securely and dispatched to your construction site through our logistics network."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-industrial-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-3 block">Our Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-industrial-dark dark:text-white mb-4">
            How We Partner With You
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            From initial requirements to final dispatch, our process is optimized for speed, transparency, and safety.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-1 bg-gray-200 dark:bg-gray-800 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary"
            />
          </div>

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Node circle */}
                <div className="relative mb-6">
                  {/* Outer glowing ring */}
                  <div className="absolute -inset-2 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 pointer-events-none" />
                  
                  {/* Node icon box */}
                  <div className="w-20 h-20 rounded-full bg-gray-50 border-2 border-gray-200 dark:bg-industrial-gray dark:border-gray-800 text-industrial-dark dark:text-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white shadow-lg">
                    {step.icon}
                  </div>

                  {/* Step counter badge */}
                  <div className="absolute -top-1.5 -right-1.5 bg-primary text-white w-7 h-7 rounded-full text-xs font-black flex items-center justify-center shadow-md">
                    {step.num}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-sans mb-3 text-industrial-dark dark:text-white group-hover:text-primary transition-colors duration-200">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-[240px]">
                  {step.description}
                </p>

                {/* Vertical arrow for mobile / tablet */}
                {index < 3 && (
                  <div className="block lg:hidden mt-8 text-primary animate-bounce text-xl">
                    ↓
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
