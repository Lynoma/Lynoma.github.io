
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 'flutter-chat',
    title: 'FlutterChat',
    description: 'A real-time messaging app built with Flutter and Firebase. Features include user authentication, message encryption, and offline support.',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&auto=format&fit=crop',
    tags: ['Flutter', 'Firebase', 'State Management'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking application with custom animations, workout planning, and health metrics visualization.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop',
    tags: ['Flutter', 'Animation', 'Health Kit'],
    liveLink: 'https://example.com'
  },
  {
    id: 'ecommerce-app',
    title: 'Flutter Store',
    description: 'A cross-platform e-commerce application with product catalog, cart management, payment integration, and order tracking.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop',
    tags: ['Flutter', 'State Management', 'Payment Gateway'],
    githubLink: 'https://github.com'
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'A beautifully animated weather application with location tracking, forecasting, and customizable UI themes.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
    tags: ['Flutter', 'API Integration', 'Animation'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }
];

const Works = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="works" className="py-20">
      <div className="section-container">
        <h2 className="heading">My Works</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          A selection of my recent Flutter projects. Each represents different 
          challenges and solutions in mobile development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="work-card flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <p className={cn(
                  "text-gray-600 text-sm mb-4",
                  expandedId === project.id ? "" : "line-clamp-2"
                )}>
                  {project.description}
                </p>
                
                {expandedId !== project.id && (
                  <button 
                    className="text-flutter-blue text-sm mb-4 hover:underline"
                    onClick={() => toggleExpanded(project.id)}
                  >
                    Read more
                  </button>
                )}
                
                {expandedId === project.id && (
                  <button 
                    className="text-flutter-blue text-sm mb-4 hover:underline"
                    onClick={() => toggleExpanded(project.id)}
                  >
                    Show less
                  </button>
                )}
                
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-flutter-lightBlue text-flutter-blue rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-flutter-blue transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-flutter-blue transition-colors"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
