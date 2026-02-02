import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { workExperience } from '../data/mock';
import { Card } from './ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#111111] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">My professional journey in software testing</p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>
            
            {workExperience.map((job, index) => (
              <div 
                key={job.id}
                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#111111] z-10"></div>
                
                <Card className={`bg-[#1a1a1a] border-gray-800 hover:border-cyan-500/50 transition-all duration-300 p-8 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-cyan-500/10 rounded-lg">
                          <Briefcase className="w-5 h-5 text-cyan-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{job.role}</h3>
                          <p className="text-cyan-400 font-semibold">{job.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project info */}
                  <div className="mb-6 p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-cyan-500" />
                        {job.project}
                      </h4>
                      <span className="text-xs text-gray-400 px-2 py-1 bg-gray-800 rounded">Client: {job.client}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{job.description}</p>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.slice(0, 6).map((resp, idx) => {
                        const itemKey = `resp-${job.id}-${idx}`;
                        return (
                          <li key={itemKey} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-cyan-500 mt-1.5 block w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.slice(0, 8).map((tech, idx) => {
                        const techKey = `tech-${job.id}-${idx}`;
                        return (
                          <span 
                            key={techKey}
                            className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-cyan-400 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
