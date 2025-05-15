
import React from 'react';
import { CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    title: 'Flutter & Dart',
    skills: [
      'Flutter SDK',
      'Dart Programming',
      'State Management (Provider, Riverpod, Bloc)',
      'UI/UX Implementation',
      'Custom Animations',
      'Performance Optimization',
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      'Cross-Platform Development',
      'Responsive Design',
      'Native Feature Integration',
      'App Store Deployment',
      'Mobile UX Patterns',
      'Offline-First Architecture',
    ],
  },
  {
    title: 'Backend Integration',
    skills: [
      'RESTful APIs',
      'GraphQL',
      'Firebase',
      'Authentication',
      'Cloud Functions',
      'Database Design',
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      'Git & GitHub',
      'CI/CD Pipelines',
      'Figma & Design Tools',
      'App Testing',
      'Agile Methodologies',
      'Technical Documentation',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-flutter-dark text-white">
      <div className="section-container">
        <h2 className="heading text-white after:bg-white">Skills & Technologies</h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          I've developed expertise in a variety of technologies and tools throughout my journey as a Flutter developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-flutter-lightBlue">{category.title}</h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <CheckCircle className="text-flutter-lightBlue mt-0.5 shrink-0" size={18} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
