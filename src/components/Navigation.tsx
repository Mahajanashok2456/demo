import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Packages', href: '#packages' },
    { name: 'About', href: '#about' },
    { name: 'Founders', href: '#founders' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-golden flex items-center justify-center">
            <span className="text-xl font-bold text-white">W</span>
          </div>
          <span className="text-xl font-display font-bold text-foreground">Wanderlust</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="btn-primary py-2.5 px-6 text-sm">
            Book Now
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden glass-strong mt-4 mx-6 rounded-2xl"
      >
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary w-full py-3 text-sm mt-4">
            Book Now
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
