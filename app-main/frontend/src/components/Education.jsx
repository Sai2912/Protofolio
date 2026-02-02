import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { education, achievements, testingExpertise } from '../data/mock';
import { Card } from './ui/card';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education card */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                  <p className="text-cyan-400 font-semibold">{education.institution}</p>
                  <p className="text-gray-400 text-sm">{education.university}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Calendar className="w-4 h-4 text-cyan-500" />
                  <span>Graduated in {education.year}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-500" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Award className="w-4 h-4 text-cyan-500" />
                  <span>CGPA: {education.cgpa}</span>
                </div>
              </div>
            </Card>
            
            {/* Achievements card */}
            <Card className="bg-[#1a1a1a] border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Recognition</h3>
              </div>
              
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          {/* Testing expertise section */}
          <Card className="bg-[#1a1a1a] border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Testing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expertise</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {testingExpertise.map((expertise, index) => (
                <div 
                  key={index}
                  className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all duration-300 cursor-default"
                >
                  <span className="text-gray-300 text-sm font-medium">{expertise}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
