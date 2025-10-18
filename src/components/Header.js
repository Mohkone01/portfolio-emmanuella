import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-max">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl sm:text-2xl font-bold text-gradient">
            Campagne BDE
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-bde-blue transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('apropos')} className="text-gray-700 hover:text-bde-blue transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('projet')} className="text-gray-700 hover:text-bde-blue transition-colors">
              Mon projet
            </button>
            <button onClick={() => scrollToSection('engagement')} className="text-gray-700 hover:text-bde-blue transition-colors">
              Engagement
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-bde-blue transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-4">
              <button onClick={() => scrollToSection('accueil')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-bde-blue">
                Accueil
              </button>
              <button onClick={() => scrollToSection('apropos')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-bde-blue">
                À propos
              </button>
              <button onClick={() => scrollToSection('projet')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-bde-blue">
                Mon projet
              </button>
              <button onClick={() => scrollToSection('engagement')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-bde-blue">
                Engagement
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-bde-blue">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
