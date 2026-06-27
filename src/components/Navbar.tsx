import { useState, useEffect } from "react";
import { Menu, X, Hammer } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check if page is scrolled
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element top is near the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }

      // Special check for bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card-light shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <div
        className="absolute top-0 left-0 h-1 bg-primary transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <div className="bg-primary text-white p-2 rounded-lg transition-transform group-hover:rotate-12 duration-300 shadow-md shadow-primary/20">
              <Hammer className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-xl tracking-wider text-industrial-dark dark:text-white uppercase leading-none">
                Mahadev
              </span>
              <span className="font-sans font-semibold text-xs text-primary uppercase tracking-widest mt-0.5 leading-none">
                Power Block
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? "text-primary font-bold"
                    : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-industrial-dark dark:text-white hover:text-primary dark:hover:text-primary p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 glass-card-light shadow-xl transition-all duration-300 ease-in-out border-b border-gray-200/20 ${
          isOpen
            ? "top-full opacity-100 visible py-4"
            : "top-[120%] opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block px-4 py-3 rounded-lg text-base font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeSection === item.href.substring(1)
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 px-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block w-full text-center bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
