import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-white">sai-</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">qaexpert</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Software Test Engineer specializing in automation and quality assurance.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </li>
                <li className="text-gray-400">
                  {personalInfo.location}
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[personalInfo.name.split(' ').length - 1]}. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and passion.
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500 rounded-lg transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-cyan-500 group-hover:transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
