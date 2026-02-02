import React from 'react';
import { FolderGit2, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/mock';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#111111] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">Major testing projects and achievements</p>
          </div>
          
          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="bg-[#1a1a1a] border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Header with gradient */}
                <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-b border-gray-800">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-all">
                        <FolderGit2 className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400">Client: {project.client}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="mt-3">
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      {project.role}
                    </Badge>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 4).map((highlight, idx) => {
                        const key = `highlight-${project.id}-${idx}`;
                        return (
                          <li key={key} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-cyan-500 mt-1.5 block w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  
                  {/* Testing types */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Testing Types</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.testingTypes.slice(0, 6).map((type, idx) => {
                        const key = `type-${project.id}-${idx}`;
                        return (
                          <span 
                            key={key}
                            className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-gray-300 text-xs"
                          >
                            {type}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 8).map((tech, idx) => {
                        const key = `tech-${project.id}-${idx}`;
                        return (
                          <span 
                            key={key}
                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
