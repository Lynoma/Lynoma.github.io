
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'A propos', href: '#about' },
    { name: 'Projets', href: '#works' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'dark:bg-theme-dark/80 bg-theme-light/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="font-bold text-xl flex items-center group">
          <img 
            src="/lovable-uploads/3842f2a8-a73c-46ca-88ee-371e859b37ba.png" 
            alt="Flutter logo" 
            className="w-6 h-6 mr-2 transition-transform duration-300 group-hover:rotate-[20deg] dark:hidden" 
          />
          <img 
            src="/lovable-uploads/cf69bf1a-2edb-46c6-a4d0-0747eb684ccf.png" 
            alt="Flutter logo" 
            className="w-6 h-6 mr-2 transition-transform duration-300 group-hover:rotate-[20deg] hidden dark:block" 
          />
          <span className="text-flutter-orange dark:text-flutter-lightBlue">Dylan</span>Jacquet
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button 
            className="text-foreground focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 dark:bg-theme-dark bg-theme-light z-40 transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 pt-24 space-y-8 flex flex-col items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xl font-medium hover:text-flutter-orange dark:hover:text-flutter-lightBlue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
