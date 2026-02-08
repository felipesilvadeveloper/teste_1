import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", to: "home" },
    { name: "Sobre", to: "about" },
    { name: "Serviços", to: "services" },
    { name: "Portfólio", to: "portfolio" },
    { name: "Depoimentos", to: "testimonials" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 backdrop-blur-lg border-b border-transparent",
        scrolled ? "bg-background/80 border-white/5 py-3 shadow-lg" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/30 transition-colors">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-heading font-bold tracking-tight text-white group-hover:text-primary transition-colors">
              Loufex Web Studio
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-sm font-medium text-muted-foreground hover:text-white cursor-pointer transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link to="contact" smooth={true} offset={-80} duration={500}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Orçamento
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-foreground hover:bg-white/5 rounded-lg cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block mt-4"
              >
                <Button className="w-full bg-primary text-primary-foreground font-bold h-12">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
