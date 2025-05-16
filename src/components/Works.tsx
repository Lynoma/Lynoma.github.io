
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
    id: 'site-naturopathe',
    title: 'Site Vitrine Naturopathe',
    description: "Un simple site vitrine pour une naturopathe, avec un design épuré, une navigation fluide et l'affichage de son blog directement sur le site.",
    image: '../../imgs/naturopathe.png',
    tags: ['Flutter', 'API', 'Responsive Design'],
    liveLink: 'https://example.com',
  },
  {
    id: 'import-ecommerce',
    title: 'Script d\'importation de produits pour E-commerce',
    description: 'Un script permettant d\'importer des produits depuis différents fichiers CSV vers une plateforme e-commerce, avec gestion des erreurs, comparaison des prix, mise à jour des stocks dans la base de données et supression des produits erronés.',
    image: 'https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?w=800&auto=format&fit=crop',
    tags: ['PHP', 'CRON', 'Backend'],
    githubLink: 'https://github.com/Lynoma/Prestashop-Scripts',
  },
  {
    id: 'hunt-death-tracker',
    title: 'Hunt Death Tracker',
    description: 'Un site pour collecter des données sur les morts dans le jeu Hunt: Showdown, avec un design sombre et une navigation fluide.',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/594650/81c0dd50371957b26c5025de919faa038e89eaae/capsule_616x353.jpg?t=1746432020',
    tags: ['Flutter', 'State Management', 'Firebase'],
    githubLink: 'https://github.com/Lynoma/hunt_death_tracker',
    liveLink: 'https://hunt-death-tracker.web.app/#/',
  },
  {
    id: 'Touchbar-soundpad',
    title: 'Touchbar Soundpad',
    description: 'Un soundpad pour le MacBook Pro 2016+ permettant de jouer des sons via la Touchbar. Ne vous inquiétez pas, les clés ont été révoquées.',
    image: 'https://images.unsplash.com/photo-1609144324678-dff17a2d8892?w=800&auto=format&fit=crop',
    tags: ['Flutter', 'Plugin', 'macOS'],
    githubLink: 'https://github.com/Lynoma/touch_bar_soundpad'
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
        <h2 className="heading">Mes Projets</h2>
        <p className="text-muted-foreground mb-10">
          Voici quelques-uns de mes projets récents. Cliquez sur les images pour
          voir plus de détails.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "work-card flex flex-col md:flex-row",
                index % 2 === 1 && "md:flex-row-reverse"
              )}
            >
              <div className="md:w-1/2 h-48 md:h-auto overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="md:w-1/2 p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <p className={cn(
                  "text-muted-foreground text-sm mb-4",
                  expandedId === project.id ? "" : "line-clamp-2"
                )}>
                  {project.description}
                </p>
                
                {expandedId !== project.id && (
                  <button 
                    className="text-flutter-orange dark:text-flutter-lightBlue text-sm mb-4 hover:underline"
                    onClick={() => toggleExpanded(project.id)}
                  >
                    Voir plus
                  </button>
                )}
                
                {expandedId === project.id && (
                  <button 
                    className="text-flutter-orange dark:text-flutter-lightBlue text-sm mb-4 hover:underline"
                    onClick={() => toggleExpanded(project.id)}
                  >
                    Show less
                  </button>
                )}
                
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-accent px-3 py-1 rounded-full"
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
                      className="flex items-center gap-1 text-sm hover:text-flutter-orange dark:hover:text-flutter-lightBlue transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-flutter-orange dark:hover:text-flutter-lightBlue transition-colors"
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
