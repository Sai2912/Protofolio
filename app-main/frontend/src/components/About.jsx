import React from 'react';
import { Code2, Zap, Target, Users } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Automation Expert",
      description: "Proficient in Playwright, Selenium, and building scalable test frameworks"
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "Delivering quality solutions with efficient testing strategies"
    },
    {
      icon: Target,
      title: "Detail-Oriented",
      description: "Thorough in identifying bugs and ensuring software quality"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration with cross-functional teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>
          
          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Summary */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Passionate About Quality Engineering
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {personalInfo.summary}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">3 Years</div>
                  <div className="text-sm text-gray-400">Experience</div>
                </div>
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">2</div>
                  <div className="text-sm text-gray-400">Major Projects</div>
                </div>
                <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">500+</div>
                  <div className="text-sm text-gray-400">Tests Automated</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 bg-[#1a1a1a] border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-500" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Bottom section - Key skills summary */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Playwright', 'Selenium', 'API Testing', 'Cucumber BDD', 
                'CI/CD Integration', 'Agile/Scrum', 'SQL', 'Jenkins', 
                'Test Automation', 'Quality Assurance'
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-full text-gray-300 text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
