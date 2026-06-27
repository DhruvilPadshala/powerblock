import { Hammer, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
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
    <footer className="bg-industrial-dark text-gray-400 border-t border-gray-800 pt-16 pb-8 relative overflow-hidden">
      {/* Accent Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FF6B00 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-2 rounded-lg transition-transform group-hover:rotate-12 duration-300">
                <Hammer className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-lg tracking-wider text-white uppercase leading-none">
                  Mahadev
                </span>
                <span className="font-sans font-semibold text-[10px] text-primary uppercase tracking-widest mt-0.5 leading-none">
                  Power Block
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-gray-400 max-w-[240px]">
              Building Strong Foundations with premium strength concrete blocks, AAC blocks, and durable interlocking pavers.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-sans font-bold text-sm uppercase tracking-widest mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleNavClick(e, "#products")} className="hover:text-primary transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, "#gallery")} className="hover:text-primary transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Range */}
          <div>
            <h4 className="text-white font-sans font-bold text-sm uppercase tracking-widest mb-4">Our Products</h4>
            <ul className="space-y-2.5 text-sm">
              <li>Power Blocks</li>
              <li>AAC Blocks</li>
              <li>Concrete Blocks</li>
              <li>Hollow Blocks</li>
              <li>Solid Blocks</li>
              <li>Paver Blocks</li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h4 className="text-white font-sans font-bold text-sm uppercase tracking-widest mb-4">Get In Touch</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919870076533" className="hover:text-primary transition-colors">
                  +91 98700 76533
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:mahadevpowerblock@gmail.com" className="hover:text-primary transition-colors break-all">
                  mahadevpowerblock@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom border & copyrights */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <p>Copyright © 2026 Mahadev Power Block. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
