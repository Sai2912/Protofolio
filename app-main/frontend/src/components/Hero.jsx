import React from 'react';
import { ArrowRight, Download, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const handleDownloadResume = () => {
    // Mock download action
    console.log('Download resume clicked');
    alert('Resume download will be implemented with backend');
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#111111] overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-sm font-medium">Available for opportunities</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{personalInfo.name.split(' ')[0]}</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
            {personalInfo.title}
          </h2>
          
          <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
          
          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4 text-cyan-500" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <span>{personalInfo.experience} Experience</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={handleContactClick}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              onClick={handleDownloadResume}
              variant="outline"
              className="border-2 border-gray-700 hover:border-cyan-500 bg-transparent text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:bg-cyan-500/10"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Quick contact links */}
          <div className="flex justify-center gap-6">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 hover:bg-cyan-500/20 border border-gray-800 hover:border-cyan-500 rounded-lg transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-500" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-gray-900/50 hover:bg-cyan-500/20 border border-gray-800 hover:border-cyan-500 rounded-lg transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-500" />
            </a>
            <a 
              href={`tel:${personalInfo.phone}`}
              className="p-3 bg-gray-900/50 hover:bg-cyan-500/20 border border-gray-800 hover:border-cyan-500 rounded-lg transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 text-gray-400 group-hover:text-cyan-500" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
