import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Building, ShieldAlert, Award } from "lucide-react";

interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // 1.5 seconds
      const steps = 40;
      const stepTime = duration / steps;
      const increment = Math.ceil(value / steps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      id: 1,
      value: 1000,
      suffix: "+",
      label: "Happy Customers",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      value: 500,
      suffix: "+",
      label: "Projects Completed",
      icon: <Building className="w-6 h-6" />
    },
    {
      id: 3,
      value: 10,
      suffix: "+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 4,
      value: 100,
      suffix: "%",
      label: "Quality Assurance",
      icon: <ShieldAlert className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-industrial-gray dark:bg-black/40 border-y border-gray-200/50 dark:border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="flex flex-col items-center justify-center p-6 text-center"
            >
              {/* Stat Icon Circle */}
              <div className="mb-4 bg-primary/10 text-primary p-4 rounded-2xl flex items-center justify-center shadow-inner">
                {stat.icon}
              </div>

              {/* Counter Value */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-industrial-dark dark:text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
