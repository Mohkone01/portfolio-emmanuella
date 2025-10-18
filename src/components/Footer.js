import React from 'react';
import { Mail, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/BDE.jpg" 
                  alt="Logo BDE MIAGE"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gradient">Campagne BDE</h3>
                  <p className="text-gray-400">Candidate BDE MIAGE 2025</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Ensemble, construisons un avenir meilleur pour notre filière MIAGE. 
                Chaque voix compte, chaque idée a sa place dans notre projet commun.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="mailto:emmanuella@miage.com" 
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    À propos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('projet')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Mon projet
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('engagement')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Engagement
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <strong>Kouadio Amenan Marie Renee Emmanuella</strong>
                </p>
                <p className="text-gray-300">
                  Master 2 MIAGE
                </p>
                <p className="text-gray-300">
                  Candidate BDE 2025
                </p>
                <a 
                  href="mailto:emmanuella@miage.com" 
                  className="text-bde-green hover:text-bde-light-green transition-colors duration-300"
                >
                  emmanuellabde@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Campagne BDE - Emmanuella MIAGE. Fait avec passion pour notre filière.</span>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Retour en haut</span>
              <div className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-sm">↑</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
