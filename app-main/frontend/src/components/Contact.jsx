import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin,
      color: 'purple'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'green'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#111111] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">Let's discuss your testing needs or opportunities</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
              
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card 
                      key={index}
                      className="bg-[#1a1a1a] border-gray-800 hover:border-cyan-500/50 transition-all duration-300 p-4"
                    >
                      {method.href ? (
                        <a 
                          href={method.href}
                          target={method.label === 'LinkedIn' ? '_blank' : undefined}
                          rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-4 group"
                        >
                          <div className={`p-3 bg-${method.color}-500/10 rounded-lg group-hover:bg-${method.color}-500/20 transition-all`}>
                            <Icon className={`w-5 h-5 text-${method.color}-500`} />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">{method.label}</p>
                            <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{method.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className={`p-3 bg-${method.color}-500/10 rounded-lg`}>
                            <Icon className={`w-5 h-5 text-${method.color}-500`} />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">{method.label}</p>
                            <p className="text-white font-medium">{method.value}</p>
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
              
              {/* Availability badge */}
              <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-white font-semibold">Currently Available</p>
                    <p className="text-gray-400 text-sm">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <Card className="bg-[#1a1a1a] border-gray-800 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-[#0a0a0a] border-gray-800 text-white focus:border-cyan-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-[#0a0a0a] border-gray-800 text-white focus:border-cyan-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Subject</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry"
                        required
                        className="bg-[#0a0a0a] border-gray-800 text-white focus:border-cyan-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        rows={5}
                        className="bg-[#0a0a0a] border-gray-800 text-white focus:border-cyan-500 resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
