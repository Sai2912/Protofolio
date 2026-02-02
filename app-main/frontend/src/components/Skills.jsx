import React from 'react';
import { Code, Wrench, Database, Cloud, BarChart3, Brain } from 'lucide-react';
import { skills } from '../data/mock';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const SkillBar = ({ skill, skillKey }) => (
  <Card key={skillKey} className="bg-[#1a1a1a] border-gray-800 p-6 hover:border-cyan-500/50 transition-all duration-300">
    <div className="mb-3">
      <h3 className="text-white font-semibold">{skill.name}</h3>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </Card>
);

const Skills = () => {
  const skillCategories = [
    { id: 'automation', label: 'Automation', icon: Wrench, category: 'Automation' },
    { id: 'programming', label: 'Programming', icon: Code, category: 'Programming' },
    { id: 'framework', label: 'Frameworks', icon: BarChart3, category: 'Framework' },
    { id: 'api', label: 'API Testing', icon: Cloud, category: 'API Testing' },
    { id: 'database', label: 'Database', icon: Database, category: 'Database' },
    { id: 'ai', label: 'AI Tools', icon: Brain, category: 'AI Tools' }
  ];

  const cicdSkills = skills.filter(s => s.category === 'CI/CD');
  const reportingSkills = skills.filter(s => s.category === 'Reporting');

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">Expertise across testing tools and technologies</p>
          </div>
          
          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto p-0 mb-12">
              {skillCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 data-[state=active]:border-cyan-500 bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 text-gray-400 rounded-lg p-4 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-medium">{cat.label}</span>
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            
            {skillCategories.map((cat) => {
              const categorySkills = skills.filter(s => s.category === cat.category);
              return (
                <TabsContent key={cat.id} value={cat.id} className="mt-0">
                  <div className="grid md:grid-cols-2 gap-4">
                    {categorySkills.map((skill, idx) => (
                      <SkillBar key={`${cat.id}-skill-${idx}`} skill={skill} skillKey={`${cat.id}-${idx}`} />
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">CI/CD & DevOps Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cicdSkills.map((tool, idx) => (
                <Card key={`cicd-tool-${idx}`} className="bg-[#1a1a1a] border-gray-800 p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h4 className="text-white font-semibold">{tool.name}</h4>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Reporting & Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {reportingSkills.map((tool, idx) => (
                <Card key={`report-tool-${idx}`} className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 p-6 text-center hover:border-cyan-500 transition-all duration-300">
                  <h4 className="text-white font-semibold">{tool.name}</h4>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
